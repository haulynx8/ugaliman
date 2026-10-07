# Gallery editor setup

The gallery editor is available at `/admin` after Netlify Identity is enabled.

## One-time Netlify setup

1. Open the site's Netlify dashboard.
2. Go to **Integrations** (or **Identity**, depending on the dashboard layout) and enable **Netlify Identity**.
3. In Identity settings, set registration to **Invite only**.
4. Under **Services**, enable **Git Gateway** and authorize it for this repository.
5. Invite the site owner from the **Identity** tab.

## Updating the gallery

1. Go to `https://your-site-domain/admin` and sign in using the invitation email.
2. Open **Gallery media** and then **Gallery**.
3. Add, reorder, edit, or remove items. For every item, choose Image or Video, upload the file, and write its title and description. Videos can also have an optional preview image.
4. Select **Publish**. Netlify will deploy the update automatically in a minute or two.

The live gallery reads from `content/media.json`. The editor updates that file and uploads new files to `assets/uploads`, so no code changes are needed for normal gallery updates.
