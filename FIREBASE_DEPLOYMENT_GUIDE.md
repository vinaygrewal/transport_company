# Firebase Deployment Guide for Freight Jet Logistics

This guide will help you deploy your React/Vite application to Firebase Hosting.

## Prerequisites

1. A Google account
2. Node.js and npm installed
3. Your project built and ready

## Step 1: Install Firebase CLI

Open a **Command Prompt** (not PowerShell) and run:

```bash
npm install -g firebase-tools
```

If you get permission errors, you may need to run as administrator or use:
```bash
npm install -g firebase-tools --force
```

Verify installation:
```bash
firebase --version
```

## Step 2: Login to Firebase

```bash
firebase login
```

This will open a browser window for you to authenticate with your Google account.

## Step 3: Create a Firebase Project

1. Go to https://console.firebase.google.com/
2. Click **"Add project"** or **"Create a project"**
3. Enter a project name (e.g., "freight-jet-logistics")
4. Follow the setup wizard:
   - Disable Google Analytics (optional, you can enable later)
   - Click **"Create project"**
5. Wait for the project to be created
6. Click **"Continue"**

## Step 4: Initialize Firebase Hosting

1. In Firebase Console, click on **"Hosting"** in the left sidebar
2. Click **"Get started"**
3. Follow the setup instructions

OR use the CLI:

```bash
firebase init hosting
```

When prompted:
- **Select an option:** Use an existing project (or create a new one)
- **What do you want to use as your public directory?** `dist`
- **Configure as a single-page app?** `Yes`
- **Set up automatic builds and deploys with GitHub?** `No` (for now)
- **File dist/index.html already exists. Overwrite?** `No`

## Step 5: Update .firebaserc

Edit the `.firebaserc` file and replace `your-firebase-project-id` with your actual Firebase project ID (you can find it in Firebase Console URL or project settings).

Example:
```json
{
  "projects": {
    "default": "freight-jet-logistics-abc123"
  }
}
```

## Step 6: Build Your Project

Before deploying, build your production version:

```bash
npm run build
```

This creates a `dist` folder with your optimized production files.

## Step 7: Deploy to Firebase

```bash
firebase deploy --only hosting
```

This will:
1. Upload your `dist` folder to Firebase Hosting
2. Give you a live URL (e.g., `https://your-project-id.web.app`)

## Step 8: Access Your Live Site

After deployment, you'll see:
- **Hosting URL:** `https://your-project-id.web.app`
- **Custom domain:** You can add a custom domain later in Firebase Console

## Important Notes

### Environment Variables
Your `.env` file is not deployed. For production, you need to:

1. **Option A: Use Firebase Hosting Environment Variables**
   - Go to Firebase Console > Hosting > Environment Variables
   - Add your EmailJS credentials there
   - Update your code to use `import.meta.env.VITE_EMAILJS_SERVICE_ID` (should work automatically)

2. **Option B: Use Firebase Functions** (for sensitive data)
   - More secure but requires additional setup

3. **Option C: Build-time environment variables**
   - Create `.env.production` file with your production values
   - Vite will use it during `npm run build`

### Updating Your Site

Whenever you make changes:

1. Build: `npm run build`
2. Deploy: `firebase deploy --only hosting`

### Custom Domain (GoDaddy)

If you have a domain from GoDaddy, see the detailed guide: **`CUSTOM_DOMAIN_SETUP.md`**

**Quick steps:**
1. Deploy your site to Firebase first (get the `.web.app` URL working)
2. Go to Firebase Console > Hosting > Add custom domain
3. Enter your domain name
4. Firebase will provide DNS records (A records or CNAME)
5. Add those DNS records in your GoDaddy account
6. Wait 24-48 hours for DNS propagation
7. Firebase automatically sets up free SSL certificate
8. Your site will be live at your custom domain!

**Note:** You can set up the custom domain before or after deployment. It's easier to do it after you've verified the site works on the `.web.app` URL.

## Troubleshooting

### Error: "Firebase CLI not found"
- Make sure you installed it globally: `npm install -g firebase-tools`
- Try using `npx firebase` instead

### Error: "No Firebase project found"
- Make sure you've created a project in Firebase Console
- Update `.firebaserc` with the correct project ID

### Error: "dist folder not found"
- Run `npm run build` first to create the dist folder

### Environment variables not working
- Make sure variable names start with `VITE_`
- Rebuild after changing `.env` files: `npm run build`
- Check that variables are set in `.env.production` for production builds

## Quick Deploy Script

You can add this to your `package.json` scripts:

```json
"deploy": "npm run build && firebase deploy --only hosting"
```

Then just run: `npm run deploy`

## Security Checklist

- [ ] `.env` file is in `.gitignore` (already done)
- [ ] Production environment variables are set
- [ ] Firebase project is properly configured
- [ ] Custom domain SSL is enabled (if using custom domain)

## Next Steps

1. Set up continuous deployment with GitHub (optional)
2. Configure custom domain
3. Set up Firebase Analytics (optional)
4. Configure CDN caching rules

---

**Need Help?**
- Firebase Documentation: https://firebase.google.com/docs/hosting
- Firebase Console: https://console.firebase.google.com/

