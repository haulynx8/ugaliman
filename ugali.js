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
  var media=[
    {type:"image",src:"assets/ugalim_pic1.jpeg",title:"Safari Sevens Nairobi",description:"Grill smoke, crowd energy, and the full Kenyan spread."},
    {type:"image",src:"assets/ugalim_pic2.jpeg",title:"Community Day",description:"Fresh plates served hot for a big crowd."},
    {type:"video",src:"assets/videos/ugalim1.mp4",poster:"assets/ugalim_pic2.jpeg",title:"Kitchen Highlights",description:"Short clip from the grill line and live prep."},
    {type:"video",src:"assets/videos/ugalim2.mp4",poster:"assets/ugalim_pic1.jpeg",title:"The Grill Line",description:"Fresh ugali and nyama choma in motion."},
    {type:"video",src:"assets/videos/ugalim3.mp4",poster:"assets/ugalim_pic2.jpeg",title:"The Grill Line",description:"Fresh ugali and nyama choma in motion."}
  ];

  var grid=document.getElementById("media-grid");
  if(!grid) return;

  media.forEach(function(item){
    var figure=document.createElement("figure");
    figure.className="media-card";

    var element=item.type==="video" ? document.createElement("video") : document.createElement("img");

    if(item.type==="video"){
      element.controls=true;
      element.playsInline=true;
      element.muted=true;
      element.poster=item.poster || "";
      var source=document.createElement("source");
      source.src=item.src;
      source.type="video/mp4";
      element.appendChild(source);
    }else{
      element.src=item.src;
      element.alt=item.title;
    }

    var caption=document.createElement("figcaption");
    caption.innerHTML=item.title + "<span>" + item.description + "</span>";

    figure.appendChild(element);
    figure.appendChild(caption);
    grid.appendChild(figure);
  });
})();