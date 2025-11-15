# Setting Up Your GoDaddy Custom Domain with Firebase

This guide will help you connect your GoDaddy domain to your Firebase-hosted website.

## Prerequisites

- ✅ Firebase project created
- ✅ Website deployed to Firebase Hosting
- ✅ Domain purchased from GoDaddy
- ✅ Access to GoDaddy account

## Step 1: Add Custom Domain in Firebase

### 1.1 Go to Firebase Console
1. Go to https://console.firebase.google.com/
2. Select your project
3. Click on **"Hosting"** in the left sidebar

### 1.2 Add Custom Domain
1. Click **"Add custom domain"** button
2. Enter your domain name (e.g., `freightjetlogistics.com` or `www.freightjetlogistics.com`)
3. Click **"Continue"**

### 1.3 Firebase Will Provide DNS Records
Firebase will show you DNS records that you need to add to GoDaddy. You'll see something like:

**Type A Record:**
- Host: `@` or blank
- Value: `151.101.1.195` (example IP - yours will be different)
- TTL: 3600

**Type A Record:**
- Host: `@` or blank  
- Value: `151.101.65.195` (example IP - yours will be different)
- TTL: 3600

**OR Type CNAME Record:**
- Host: `www`
- Value: `your-project-id.web.app` (or `your-project-id.firebaseapp.com`)
- TTL: 3600

**Important:** Copy these records - you'll need them for GoDaddy!

## Step 2: Configure DNS in GoDaddy

### 2.1 Log into GoDaddy
1. Go to https://www.godaddy.com/
2. Log in to your account
3. Go to **"My Products"** or **"Domains"**

### 2.2 Access DNS Management
1. Find your domain in the list
2. Click on your domain name
3. Click on **"DNS"** or **"Manage DNS"** tab
4. You'll see your current DNS records

### 2.3 Add Firebase DNS Records

#### Option A: Using A Records (Recommended for root domain)
1. Find the **A Records** section
2. You may need to delete existing A records first (or Firebase will tell you which ones)
3. Click **"Add"** to create new A records
4. Add the A records that Firebase provided:
   - **Type:** A
   - **Name/Host:** `@` (or leave blank for root domain)
   - **Value:** (First IP from Firebase)
   - **TTL:** 3600 (or 1 hour)
5. Click **"Add"** again for the second A record:
   - **Type:** A
   - **Name/Host:** `@` (or leave blank)
   - **Value:** (Second IP from Firebase)
   - **TTL:** 3600
6. Click **"Save"**

#### Option B: Using CNAME (For www subdomain)
1. Find the **CNAME Records** section
2. Click **"Add"**
3. Add the CNAME record:
   - **Type:** CNAME
   - **Name/Host:** `www`
   - **Value:** `your-project-id.web.app` (from Firebase)
   - **TTL:** 3600
4. Click **"Save"**

### 2.4 Common GoDaddy DNS Settings

**For root domain (example.com):**
- Use **A Records** with the IPs Firebase provides
- Host: `@` or leave blank

**For www subdomain (www.example.com):**
- Use **CNAME Record**
- Host: `www`
- Points to: `your-project-id.web.app`

## Step 3: Wait for DNS Propagation

After adding DNS records:
- **Wait 24-48 hours** for DNS changes to propagate globally
- Usually takes 1-4 hours, but can take up to 48 hours
- You can check status in Firebase Console

## Step 4: Verify Domain in Firebase

1. Go back to Firebase Console > Hosting
2. You'll see your custom domain listed
3. Status will show:
   - **"Pending"** - DNS is propagating
   - **"Connected"** - Domain is live! ✅
   - **"Error"** - Check DNS settings

## Step 5: SSL Certificate (Automatic)

Firebase automatically provides **free SSL certificates** for custom domains:
- SSL is set up automatically
- Takes a few minutes to a few hours
- Your site will be accessible via `https://yourdomain.com`

## Common Scenarios

### Scenario 1: You want both www and non-www
1. Add root domain (`example.com`) using A records
2. Add `www` subdomain using CNAME pointing to `your-project-id.web.app`
3. Firebase will handle both automatically

### Scenario 2: You only want www
1. Add CNAME record for `www`
2. Point it to `your-project-id.web.app`

### Scenario 3: You only want root domain (no www)
1. Add A records for root domain
2. Firebase will handle SSL for both www and non-www

## Troubleshooting

### DNS Not Working After 48 Hours?
1. **Check DNS records in GoDaddy:**
   - Make sure they match exactly what Firebase provided
   - Check for typos in IP addresses
   - Verify TTL settings

2. **Verify in Firebase Console:**
   - Go to Hosting > Custom domains
   - Check for error messages
   - Firebase will tell you what's wrong

3. **Use DNS Checker:**
   - Visit https://dnschecker.org/
   - Enter your domain
   - Check if DNS records are propagated globally

### SSL Certificate Not Issuing?
- Wait a few hours (can take up to 24 hours)
- Make sure DNS is fully propagated first
- Check Firebase Console for SSL status

### Domain Shows "Pending" Forever?
- Double-check DNS records in GoDaddy
- Make sure you're using the correct IPs/CNAME from Firebase
- Contact Firebase support if it's been more than 48 hours

## Quick Checklist

- [ ] Added custom domain in Firebase Console
- [ ] Copied DNS records from Firebase
- [ ] Logged into GoDaddy
- [ ] Added A records (for root domain) or CNAME (for www)
- [ ] Saved DNS changes in GoDaddy
- [ ] Waited for DNS propagation (1-48 hours)
- [ ] Verified domain status in Firebase
- [ ] SSL certificate issued automatically
- [ ] Website accessible at your custom domain! 🎉

## Example: Complete Setup

**Your Domain:** `freightjetlogistics.com`

**In Firebase:**
1. Add custom domain: `freightjetlogistics.com`
2. Firebase provides: 2 A record IPs

**In GoDaddy:**
1. Go to DNS management
2. Add A record:
   - Host: `@`
   - Value: `151.101.1.195` (example)
3. Add A record:
   - Host: `@`
   - Value: `151.101.65.195` (example)
4. Add CNAME (for www):
   - Host: `www`
   - Value: `your-project-id.web.app`

**Result:**
- ✅ `https://freightjetlogistics.com` works
- ✅ `https://www.freightjetlogistics.com` works
- ✅ SSL certificate automatically configured

---

**Need Help?**
- Firebase Support: https://firebase.google.com/support
- GoDaddy Support: https://www.godaddy.com/help

