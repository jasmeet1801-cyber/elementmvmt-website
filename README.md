# Element Movement CrossFit — Website

## Project Structure

```
elementmvmt-website/
│
├── index.html          # Main page
├── /css
│   └── styles.css      # All styles (extracted from original HTML)
├── /js
│   └── main.js         # FAQ accordion + nav scroll behaviour
├── /images             # Place all images here
│   ├── logo.png            ← EMC logo (light background)
│   ├── logo-white.png      ← EMC logo (dark background / footer / CTA)
│   └── gym-interior.jpg    ← About section photo (optional, replace placeholder)
├── /pages              # Future sub-pages (e.g. about.html, contact.html)
└── README.md
```

## Images

The original design used inline base64 logos. You need to:
1. Export the EMC logo as `images/logo.png` (for light backgrounds)
2. Export a white version as `images/logo-white.png` (for dark/blue backgrounds)
3. Add a gym photo at `images/gym-interior.jpg` for the About section

## HubSpot Integration

To add HubSpot tracking, paste your tracking snippet in `index.html` inside `<head>`:

```html
<!-- HubSpot Tracking -->
<script type="text/javascript" id="hs-script-loader" async defer
  src="//js.hs-scripts.com/YOUR_PORTAL_ID.js">
</script>
```

Replace `YOUR_PORTAL_ID` with the ID from your HubSpot account
(Settings → Tracking & Analytics → Tracking Code).

## Deployment (Cloudflare Pages + GitHub)

1. Create a GitHub repo (e.g. `elementmvmt-website`)
2. Push this folder to the repo
3. Go to Cloudflare → Workers & Pages → Create → Pages
4. Connect to GitHub and select the repo
5. No build command needed — it's a static site
6. Set output directory to `/` (root)
7. Point your domain DNS to Cloudflare

Every `git push` to `main` will auto-deploy the site.

## Making Updates

- **Text/prices/info** → edit `index.html`
- **Colours/fonts/layout** → edit `css/styles.css`
- **FAQ logic / nav behaviour** → edit `js/main.js`
- **New pages** → create files in `/pages/` and link from `index.html`
