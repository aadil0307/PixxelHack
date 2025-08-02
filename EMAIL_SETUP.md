# Email Setup Instructions

## 🚀 Setting Up Email Functionality

The contact form is now configured to send real emails! Follow these steps to set it up:

### 1. Gmail Account Setup

1. **Enable 2-Step Verification** on your Google Account
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Navigate to Security > 2-Step Verification
   - Enable it if not already enabled

2. **Generate App Password**
   - Go to Security > 2-Step Verification > App passwords
   - Select "Mail" as the app
   - Click "Generate"
   - Copy the 16-character password

### 2. Environment Configuration

Update the `.env.local` file with your credentials:

```env
EMAIL_USER=your-actual-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
```

**Important Notes:**
- Use your actual Gmail address for `EMAIL_USER`
- Use the 16-character app password (not your regular Gmail password)
- The app password will look like: `abcd efgh ijkl mnop`

### 3. Update Email Recipient

In `app/api/contact/route.ts`, change the recipient email:

```typescript
to: 'your-email@gmail.com', // Change this to your email
```

### 4. Test the Form

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email inbox

### 5. Security Notes

- ✅ `.env.local` is already in `.gitignore` (your credentials won't be committed)
- ✅ App passwords are more secure than regular passwords
- ✅ The API validates all inputs before sending

### 6. Troubleshooting

**If emails aren't sending:**
1. Check that 2-Step Verification is enabled
2. Verify the app password is correct
3. Make sure your Gmail account allows "less secure app access" (if needed)
4. Check the browser console for error messages

**Common Issues:**
- "Invalid credentials" → Check your app password
- "Authentication failed" → Enable 2-Step Verification first
- "Connection timeout" → Check your internet connection

### 7. Production Deployment

For production, consider using:
- **SendGrid** (recommended for production)
- **Resend** (modern email API)
- **AWS SES** (if using AWS)

These services are more reliable than Gmail SMTP for production use.

---

🎉 **Your contact form will now send real emails!** 