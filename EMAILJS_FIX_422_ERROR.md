# Fix EmailJS 422 Error - "Recipients address is empty"

## The Problem
You're getting a 422 error because your EmailJS template doesn't have a recipient email address configured.

## Solution: Configure Your EmailJS Template

### Step 1: Log into EmailJS Dashboard
1. Go to https://www.emailjs.com/
2. Log in to your account

### Step 2: Navigate to Your Template
1. Click on **"Email Templates"** in the left sidebar
2. Find and click on your template (Template ID: `template_6qmpum1`)

### Step 3: Configure the "To Email" Field
**This is the critical step that fixes the 422 error:**

1. Look for the **"To Email"** field in your template settings
2. You have two options:

   **Option A: Use a static email (Recommended)**
   - Enter: `Freightjetlogistics@gmail.com`
   - This will always send emails to this address

   **Option B: Use a template parameter**
   - Enter: `{{to_email}}`
   - This uses the email from the form (which is already set to `Freightjetlogistics@gmail.com`)

3. **IMPORTANT:** Make sure the "To Email" field is NOT empty!

### Step 4: Verify Your Template Settings
Your template should have these fields configured:

- **To Email:** `Freightjetlogistics@gmail.com` (or `{{to_email}}`)
- **From Name:** `{{from_name}}` (optional, or leave as default)
- **From Email:** `{{from_email}}` (optional, or leave as default)
- **Subject:** `New Contact Form Submission from {{from_name}}`
- **Content:** Your email template with variables like `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{message}}`

### Step 5: Save the Template
1. Click **"Save"** or **"Update"** button
2. Make sure you see a success message

### Step 6: Test Again
1. Go back to your website
2. Try submitting the contact form again
3. The 422 error should be resolved!

## Common Issues

### Issue: "To Email" field is not visible
- Make sure you're editing the template, not just viewing it
- Look for a field labeled "To Email", "To", or "Recipient Email"
- It's usually at the top of the template editor

### Issue: Still getting 422 error after setting "To Email"
- Double-check that you saved the template
- Make sure there are no extra spaces in the email address
- Verify the email format is correct (e.g., `Freightjetlogistics@gmail.com`)
- Check your EmailJS service is properly connected

### Issue: Emails not being received
- Check your spam/junk folder
- Verify your EmailJS service (Gmail/Outlook/etc.) is properly connected
- Check the EmailJS dashboard for error logs under "Logs" or "Activity"

## Need More Help?

If you're still having issues:
1. Check the browser console for detailed error messages
2. Check the EmailJS dashboard under "Logs" for more details
3. Verify your Service ID, Template ID, and Public Key are correct in your `.env` file

