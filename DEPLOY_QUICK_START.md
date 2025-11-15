# Quick Start: Deploy to Firebase

## 🚀 Fast Deployment Steps

### 1. Install Firebase CLI (One-time setup)

Open **Command Prompt** (not PowerShell) and run:

```bash
npm install -g firebase-tools
```

### 2. Login to Firebase

```bash
firebase login
```

### 3. Create Firebase Project

1. Go to: https://console.firebase.google.com/
2. Click **"Add project"**
3. Name it: `freight-jet-logistics` (or your preferred name)
4. Complete the setup wizard
5. **Copy your Project ID** from the project settings

### 4. Update Project ID

Edit `.firebaserc` and replace `your-firebase-project-id` with your actual project ID.

### 5. Initialize Hosting (First time only)

```bash
firebase init hosting
```

When prompted:
- Select your project
- Public directory: `dist`
- Single-page app: `Yes`
- Overwrite index.html: `No`

### 6. Build and Deploy

```bash
npm run deploy
```

Or manually:
```bash
npm run build
firebase deploy --only hosting
```

### 7. Your Site is Live! 🎉

You'll get a URL like: `https://your-project-id.web.app`

---

## 📝 What I've Set Up For You

✅ `firebase.json` - Firebase hosting configuration  
✅ `.firebaserc` - Firebase project configuration (update with your project ID)  
✅ `.env.production` - Production environment variables (EmailJS credentials)  
✅ `deploy` script in package.json - One command to build and deploy  

## 🔄 Future Deployments

Just run:
```bash
npm run deploy
```

## ⚠️ Important

- Make sure to update `.firebaserc` with your actual Firebase project ID
- Your EmailJS credentials are already in `.env.production`
- The site will be available at `https://your-project-id.web.app`

