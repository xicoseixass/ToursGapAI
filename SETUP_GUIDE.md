# TourGapAI - Complete Setup Guide

This guide will walk you through setting up the TourGapAI landing page from scratch.

## Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works fine)
- A code editor (VS Code recommended)
- Git (optional, for version control)

## Step 1: Project Overview

The project has been created with the following structure:

```
tourgap-landing/
├── app/                    # Next.js App Router
├── components/             # React components
├── lib/                    # Utility functions
├── public/                 # Static assets
├── .env.local             # Environment variables (you need to configure this)
└── supabase-schema.sql    # Database schema
```

## Step 2: Install Dependencies

The dependencies are already installed, but if you need to reinstall them:

```bash
cd tourgap-landing
npm install
```

## Step 3: Configure Supabase

### 3.1 Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up or log in
4. Click "New Project"
5. Fill in:
   - **Name**: TourGapAI
   - **Database Password**: (choose a strong password and save it)
   - **Region**: Choose closest to your users (Europe West recommended for Portugal)
6. Click "Create new project" and wait for it to initialize (2-3 minutes)

### 3.2 Get API Credentials

1. In your Supabase dashboard, click on your project
2. Go to **Settings** (gear icon in sidebar)
3. Click **API** in the settings menu
4. You'll see two important values:
   - **Project URL** (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon public** key (under "Project API keys")

### 3.3 Update Environment Variables

1. Open the file `.env.local` in the project root
2. Replace the placeholder values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

**Important**: Never commit this file to Git. It's already in `.gitignore`.

## Step 4: Create Database Table

### 4.1 Open SQL Editor

1. In Supabase dashboard, click on **SQL Editor** in the left sidebar
2. Click **New query**

### 4.2 Run the Schema

1. Open the `supabase-schema.sql` file from your project
2. Copy all the SQL code
3. Paste it into the SQL Editor in Supabase
4. Click **Run** (or press Ctrl/Cmd + Enter)

You should see: "Success. No rows returned"

### 4.3 Verify Table Creation

1. Click on **Table Editor** in the left sidebar
2. You should see a table named `leads`
3. Click on it to see the columns:
   - id (UUID, primary key)
   - profile (text)
   - city (text)
   - challenges (text array)
   - monthly_bookings (text)
   - whatsapp (text)
   - pitch (text)
   - created_at (timestamp)

## Step 5: Test the Application Locally

### 5.1 Start Development Server

```bash
npm run dev
```

You should see:
```
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

### 5.2 Open in Browser

1. Open your browser
2. Go to [http://localhost:3000](http://localhost:3000)
3. You should see the TourGapAI landing page

### 5.3 Test the Form

1. Scroll down to the "Candidatura a Parceiro Fundador" form
2. Fill in all fields:
   - Profile: Choose "Operador Turístico" or "Empreendedor"
   - City: Enter "Lisboa" (or any city)
   - Challenges: Select at least one checkbox
   - Monthly bookings: Choose an option
   - WhatsApp: Enter a test number like "+351 912 345 678"
   - Pitch: Enter some test text
3. Click "Enviar Candidatura"
4. You should see a success message

### 5.4 Verify in Supabase

1. Go back to Supabase dashboard
2. Click on **Table Editor** > **leads**
3. You should see your test submission in the table

## Step 6: Deploy to Vercel

### 6.1 Push to GitHub

1. Create a new repository on GitHub
2. Initialize git in your project (if not already done):

```bash
git init
git add .
git commit -m "Initial commit: TourGapAI landing page"
git branch -M main
git remote add origin https://github.com/your-username/tourgap-landing.git
git push -u origin main
```

### 6.2 Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in (use your GitHub account)
3. Click "Add New..." > "Project"
4. Import your GitHub repository
5. Configure project:
   - **Framework Preset**: Next.js (should auto-detect)
   - Click on **Environment Variables**
6. Add your environment variables:
   - Key: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: (paste your Supabase URL)
   - Key: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Value: (paste your Supabase anon key)
7. Click **Deploy**

Wait 2-3 minutes for deployment to complete.

### 6.3 Test Production Site

1. Vercel will give you a URL like: `https://tourgap-landing-xxx.vercel.app`
2. Open it in your browser
3. Test the form submission again
4. Verify the data appears in Supabase

## Step 7: Custom Domain (Optional)

### 7.1 Add Domain in Vercel

1. In Vercel dashboard, go to your project
2. Click **Settings** > **Domains**
3. Enter your domain (e.g., `tourgapai.com`)
4. Follow Vercel's instructions to configure DNS

### 7.2 Update DNS Records

Add these records in your domain registrar:

- **Type**: A
- **Name**: @
- **Value**: 76.76.21.21

- **Type**: CNAME
- **Name**: www
- **Value**: cname.vercel-dns.com

Wait 24-48 hours for DNS propagation.

## Troubleshooting

### Issue: "Supabase client error"

**Solution**: Check that your environment variables are correct in `.env.local`

### Issue: Form submission fails

**Solutions**:
1. Check browser console for errors
2. Verify Supabase table exists with correct column names
3. Check Row Level Security policies in Supabase
4. Ensure `anon` user has INSERT permission

### Issue: Styling looks broken

**Solution**: Clear browser cache and restart dev server

### Issue: Can't connect to Supabase

**Solutions**:
1. Verify your Supabase project is active
2. Check if API URL and key are correct
3. Check Supabase service status

## Next Steps

1. **Analytics**: Add Google Analytics or Plausible
2. **Email Notifications**: Set up email alerts when new leads submit the form
3. **Admin Dashboard**: Create a dashboard to view all leads
4. **A/B Testing**: Test different headlines and CTAs
5. **SEO**: Add meta tags and Open Graph images

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Vercel Docs**: https://vercel.com/docs

## Security Checklist

- [ ] Environment variables are not committed to Git
- [ ] Supabase RLS policies are enabled
- [ ] Database password is strong
- [ ] API keys are kept secret
- [ ] Form has proper validation
- [ ] HTTPS is enabled in production

## Performance Checklist

- [ ] Images are optimized
- [ ] Fonts are preloaded
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Form submits quickly

Congratulations! Your TourGapAI landing page is now live!
