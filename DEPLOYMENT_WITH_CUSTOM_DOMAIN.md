# Complete Deployment Guide: Firebase + GoDaddy Domain

This is your complete roadmap to deploy your Freight Jet Logistics website with your GoDaddy domain.

## 🎯 Overview

You'll deploy in this order:
1. ✅ Deploy to Firebase (get `.web.app` URL working)
2. ✅ Add custom domain from GoDaddy
3. ✅ Configure DNS in GoDaddy
4. ✅ Wait for DNS propagation
5. ✅ Your site is live on your custom domain! 🎉

---

## Part 1: Deploy to Firebase First

### Step 1: Install Firebase CLI
Open **Command Prompt** and run:
```bash
npm install -g firebase-tools
```

### Step 2: Login
```bash
firebase login
```

### Step 3: Create Firebase Project
1. Go to https://console.firebase.google.com/
2. Click "Add project"
3. Name it (e.g., "freight-jet-logistics")
4. Complete setup
5. **Copy your Project ID** (from URL or settings)

### Step 4: Update Project ID
Edit `.firebaserc` and replace `your-firebase-project-id` with your actual Project ID.

### Step 5: Initialize Hosting
```bash
firebase init hosting
```
- Select your project
- Public directory: `dist`
- Single-page app: `Yes`
- Overwrite index.html: `No`

### Step 6: Build and Deploy
```bash
npm run deploy
```

### Step 7: Verify Deployment
Your site is now live at:
- `https://your-project-id.web.app`
- `https://your-project-id.firebaseapp.com`

**✅ Test it works before adding custom domain!**

---

## Part 2: Add Your GoDaddy Domain

### Step 1: Add Domain in Firebase
1. Go to Firebase Console > Hosting
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `freightjetlogistics.com`)
4. Click **"Continue"**

### Step 2: Get DNS Records from Firebase
Firebase will show you DNS records. You'll see something like:

**For root domain (example.com):**
- 2x A Records with IP addresses
- Example: `151.101.1.195` and `151.101.65.195`

**For www subdomain (www.example.com):**
- 1x CNAME Record
- Points to: `your-project-id.web.app`

**📋 Copy these records - you'll need them!**

### Step 3: Configure DNS in GoDaddy

#### 3.1 Log into GoDaddy
1. Go to https://www.godaddy.com/
2. Log in
3. Go to **"My Products"** > **"Domains"**

#### 3.2 Access DNS Management
1. Click on your domain name
2. Click **"DNS"** tab
3. You'll see current DNS records

#### 3.3 Add Firebase DNS Records

**For Root Domain (example.com):**
1. Find **A Records** section
2. You may need to delete/modify existing A records
3. Add first A record:
   - **Type:** A
   - **Name:** `@` (or leave blank)
   - **Value:** (First IP from Firebase)
   - **TTL:** 3600
4. Add second A record:
   - **Type:** A
   - **Name:** `@` (or leave blank)
   - **Value:** (Second IP from Firebase)
   - **TTL:** 3600
5. Click **"Save"**

**For www Subdomain (www.example.com):**
1. Find **CNAME Records** section
2. Add CNAME record:
   - **Type:** CNAME
   - **Name:** `www`
   - **Value:** `your-project-id.web.app`
   - **TTL:** 3600
3. Click **"Save"**

### Step 4: Wait for DNS Propagation
- **Time:** 1-48 hours (usually 1-4 hours)
- Firebase Console will show status
- Status changes from "Pending" to "Connected" ✅

### Step 5: SSL Certificate (Automatic)
- Firebase automatically provides **free SSL**
- Takes a few minutes to a few hours
- Your site will have `https://` automatically

---

## Part 3: Verify Everything Works

### Check Your Site
1. Visit `https://yourdomain.com`
2. Visit `https://www.yourdomain.com`
3. Both should work! ✅

### Test Contact Form
1. Make sure EmailJS is working
2. Test form submission
3. Verify emails are received

---

## Quick Reference

### Your Deployment Commands
```bash
# Build and deploy
npm run deploy

# Or separately:
npm run build
firebase deploy --only hosting
```

### Your URLs
- **Firebase URL:** `https://your-project-id.web.app`
- **Custom Domain:** `https://yourdomain.com`
- **www Domain:** `https://www.yourdomain.com`

### Future Updates
Whenever you make changes:
```bash
npm run deploy
```
Your custom domain will automatically show the updated site!

---

## Troubleshooting

### DNS Not Working?
1. Check DNS records in GoDaddy match Firebase exactly
2. Wait 24-48 hours for full propagation
3. Use https://dnschecker.org/ to verify globally

### SSL Not Working?
- Wait a few hours (SSL setup takes time)
- Make sure DNS is fully propagated first
- Check Firebase Console for SSL status

### Site Not Loading?
- Verify Firebase deployment worked (check `.web.app` URL)
- Check DNS records are correct in GoDaddy
- Wait for DNS propagation

---

## What You've Accomplished

✅ Website deployed to Firebase  
✅ Custom domain connected from GoDaddy  
✅ Free SSL certificate enabled  
✅ Professional website live on your domain!  
✅ Contact form with EmailJS working  

**Your Freight Jet Logistics website is now live! 🚀**

---

## Need More Details?

- **Firebase Setup:** See `FIREBASE_DEPLOYMENT_GUIDE.md`
- **Custom Domain:** See `CUSTOM_DOMAIN_SETUP.md`
- **Getting Project ID:** See `HOW_TO_GET_FIREBASE_PROJECT_ID.md`

