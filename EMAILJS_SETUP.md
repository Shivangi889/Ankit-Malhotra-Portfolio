# EmailJS Setup Instructions

To make the contact form fully functional, you need to set up EmailJS and configure environment variables.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Create Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy the Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: Contact Form: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. **Copy the Template ID** (you'll need this)

## Step 4: Get Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Find your **Public Key**
3. **Copy the Public Key** (you'll need this)

## Step 5: Create Environment File

1. Create a file named `.env` in the root directory of your project
2. Add these variables:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

3. Replace the placeholder values with your actual EmailJS credentials

## Step 6: Restart Development Server

After creating the `.env` file, restart your development server:

```bash
npm run dev
```

## Important Notes

- Never commit your `.env` file to Git (it's already in `.gitignore`)
- The `.env` file should only exist locally
- For production deployment (Vercel, Netlify, etc.), add these environment variables in your hosting platform's settings

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox for the message
4. You should receive an email with the form details

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Email not received**: Verify EmailJS service is connected correctly
- **Environment variables not working**: Make sure to restart the dev server after creating `.env`

## Alternative: Direct Email Link

If you prefer not to use EmailJS, users can click the email link in the contact page to open their email client directly.

