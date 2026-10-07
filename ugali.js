(function(){
  var start=new Date("2026-10-09T08:00:00+03:00"),end=new Date("2026-10-12T00:00:00+03:00");
  var c=document.getElementById("count"),l=document.getElementById("live");
  function tick(){
    var n=new Date(),ms=start-n;
    if(n>=end){c.style.display="none";l.style.display="block";l.textContent="Thanks, Nairobi. See you at the next one.";return}
    if(ms<=0){c.style.display="none";l.style.display="block";return}
    document.getElementById("d").textContent=Math.floor(ms/864e5);
    document.getElementById("h").textContent=Math.floor(ms%864e5/36e5);
    document.getElementById("m").textContent=Math.floor(ms%36e5/6e4);
  }
  tick();setInterval(tick,30000);
})();

(function(){
  var fallbackMedia=[
    {type:"image",src:"assets/ugalim_pic1.jpeg",title:"Safari Sevens Nairobi",description:"Grill smoke, crowd energy, and the full Kenyan spread."},
    {type:"image",src:"assets/ugalim_pic2.jpeg",title:"Community Day",description:"Fresh plates served hot for a big crowd."},
    {type:"video",src:"assets/videos/ugalim1.mp4",poster:"assets/ugalim_pic2.jpeg",title:"Kitchen Highlights",description:"Short clip from the grill line and live prep."},
    {type:"video",src:"assets/videos/ugalim2.mp4",poster:"assets/ugalim_pic1.jpeg",title:"The Grill Line",description:"Fresh ugali and nyama choma in motion."},
    {type:"video",src:"assets/videos/ugalim3.mp4",poster:"assets/ugalim_pic2.jpeg",title:"Cooking for the Crowd",description:"Made on site and served hot."}
  ];

  function render(media){
    var grid=document.getElementById("media-grid");
    if(!grid || !Array.isArray(media)) return;
    grid.textContent="";
    media.forEach(function(item){
      if(!item || !item.src || !item.title || !item.description) return;
      var figure=document.createElement("figure");
      figure.className="media-card";

      var element=item.type==="video" ? document.createElement("video") : document.createElement("img");

      if(item.type==="video"){
        element.controls=true;
        element.playsInline=true;
        element.muted=true;
        element.preload="metadata";
        element.poster=item.poster || "";
        element.setAttribute("aria-label", item.title + ": " + item.description);
        var source=document.createElement("source");
        source.src=item.src;
        source.type="video/mp4";
        element.appendChild(source);
      }else{
        element.src=item.src;
        element.alt=item.title + ": " + item.description;
        element.loading="lazy";
      }

      var caption=document.createElement("figcaption");
      caption.appendChild(document.createTextNode(item.title));
      var description=document.createElement("span");
      description.textContent=item.description;
      caption.appendChild(description);

      figure.appendChild(element);
      figure.appendChild(caption);
      grid.appendChild(figure);
    });
  }

  fetch("content/media.json", {cache:"no-cache"})
    .then(function(response){
      if(!response.ok) throw new Error("Gallery content could not be loaded");
      return response.json();
    })
    .then(function(data){render(data.media);})
    .catch(function(){render(fallbackMedia);});
})();
