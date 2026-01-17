# Supabase Authentication Setup Guide

This guide will help you configure Google and Facebook authentication for your TourGap landing page.

## 📋 Prerequisites

- Supabase account and project
- Google Cloud Console account
- Facebook Developers account

---

## 🔐 1. Enable Email Authentication (Already Working)

Email authentication is enabled by default in Supabase. No additional configuration needed.

---

## 🔵 2. Configure Google OAuth

### Step 1: Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth 2.0 Client ID**
5. Configure the OAuth consent screen if prompted:
   - User Type: External
   - App name: TourGap.AI
   - User support email: Your email
   - Developer contact: Your email
6. For Application type, select **Web application**
7. Add name: `TourGap Production`

### Step 2: Configure Authorized URLs

**Authorized JavaScript origins:**
```
https://your-domain.com
http://localhost:3000
```

**Authorized redirect URIs:**
```
https://ejevefkqumrjtgefkvww.supabase.co/auth/v1/callback
http://localhost:54321/auth/v1/callback (for local development)
```

8. Click **Create**
9. Copy your **Client ID** and **Client Secret**

### Step 3: Add to Supabase

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project: `ejevefkqumrjtgefkvww`
3. Navigate to **Authentication** → **Providers**
4. Find **Google** and enable it
5. Paste your **Client ID** and **Client Secret**
6. Click **Save**

---

## 🔴 3. Configure Facebook OAuth

### Step 1: Create Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click **My Apps** → **Create App**
3. Select **Consumer** as app type
4. App name: `TourGap AI`
5. Contact email: Your email
6. Click **Create App**

### Step 2: Add Facebook Login

1. In your app dashboard, click **Add Product**
2. Find **Facebook Login** and click **Set Up**
3. Select **Web** platform
4. Enter your site URL: `https://your-domain.com`
5. Click **Save** and **Continue**

### Step 3: Configure OAuth Settings

1. Go to **Facebook Login** → **Settings** (left sidebar)
2. Add Valid OAuth Redirect URIs:
```
https://ejevefkqumrjtgefkvww.supabase.co/auth/v1/callback
http://localhost:54321/auth/v1/callback (for local development)
```
3. Click **Save Changes**

### Step 4: Get App Credentials

1. Go to **Settings** → **Basic** (left sidebar)
2. Copy your **App ID**
3. Click **Show** next to **App Secret** and copy it

### Step 5: Add to Supabase

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project: `ejevefkqumrjtgefkvww`
3. Navigate to **Authentication** → **Providers**
4. Find **Facebook** and enable it
5. Paste your **App ID** as Client ID
6. Paste your **App Secret** as Client Secret
7. Click **Save**

### Step 6: Make App Live

1. In Facebook Developers, go to **Settings** → **Basic**
2. Toggle **App Mode** to **Live** (at the top)
3. You may need to provide a Privacy Policy URL and Terms of Service URL

---

## 🌐 4. Configure Site URL in Supabase

1. Go to **Authentication** → **URL Configuration**
2. Set **Site URL** to:
   ```
   https://your-vercel-domain.vercel.app
   ```
   Or your custom domain
3. Add **Redirect URLs**:
   ```
   https://your-vercel-domain.vercel.app/api/auth/callback
   http://localhost:3000/api/auth/callback
   ```
4. Click **Save**

---

## 📱 5. Test Authentication

### Local Testing

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/login`

3. Try each authentication method:
   - ✅ Email/Password signup and login
   - ✅ Google OAuth
   - ✅ Facebook OAuth

### Production Testing

1. Deploy to Vercel (already configured)
2. Navigate to `https://your-domain.com/login`
3. Test all authentication methods

---

## 🔧 6. Supabase Database Configuration

### Create Users Profile Table (Optional but Recommended)

```sql
-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read their own profile
CREATE POLICY "Users can read own profile"
ON profiles
FOR SELECT
USING (auth.uid() = id);

-- Policy: Users can update their own profile
CREATE POLICY "Users can update own profile"
ON profiles
FOR UPDATE
USING (auth.uid() = id);

-- Function to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

Run this SQL in **Supabase Dashboard** → **SQL Editor** → **New Query**

---

## 🔒 7. Security Checklist

- [x] HTTPS enabled in production
- [x] HttpOnly cookies for session tokens
- [x] Secure cookies in production
- [x] SameSite: lax for CSRF protection
- [x] Session expiration: 7 days
- [ ] Google OAuth configured
- [ ] Facebook OAuth configured
- [ ] Privacy Policy created
- [ ] Terms of Service created
- [ ] Email verification enabled (optional)

---

## 🚀 8. Pages and Routes Created

### Frontend Pages
- `/login` - Login page with email and social auth
- `/signup` - Signup page with email and social auth
- `/dashboard` - Protected dashboard (requires authentication)

### API Routes
- `POST /api/auth/login` - Email/password login
- `POST /api/auth/signup` - Email/password signup
- `GET /api/auth/oauth?provider={google|facebook}` - Initiate OAuth
- `GET /api/auth/callback` - OAuth callback handler
- `POST /api/auth/logout` - Logout and clear session
- `GET /api/auth/user` - Get current user (with auto-refresh)

---

## 📝 9. Authentication Flow

### Email/Password Flow
1. User enters email/password on `/login` or `/signup`
2. API validates and calls Supabase Auth
3. Session tokens stored in HttpOnly cookies
4. User redirected to `/dashboard`

### OAuth Flow (Google/Facebook)
1. User clicks "Continue with Google/Facebook"
2. API calls `/api/auth/oauth?provider=google`
3. User redirected to Google/Facebook login
4. After approval, redirected to `/api/auth/callback`
5. Callback exchanges code for session
6. Session tokens stored in HttpOnly cookies
7. User redirected to `/dashboard`

### Protected Route Flow
1. Dashboard checks authentication via `/api/auth/user`
2. If not authenticated, redirects to `/login`
3. If token expired, auto-refreshes using refresh token
4. If refresh fails, redirects to `/login`

---

## 🧪 10. Testing Checklist

### Email Authentication
- [ ] Signup with new email works
- [ ] Login with existing email works
- [ ] Wrong password shows error
- [ ] Email already exists shows error
- [ ] Password too short shows error
- [ ] Passwords don't match shows error (signup)

### Google Authentication
- [ ] "Continue with Google" button works
- [ ] Redirects to Google login
- [ ] After approval, redirects to dashboard
- [ ] User info (name, email) is captured
- [ ] Can logout and login again

### Facebook Authentication
- [ ] "Continue with Facebook" button works
- [ ] Redirects to Facebook login
- [ ] After approval, redirects to dashboard
- [ ] User info is captured
- [ ] Can logout and login again

### Session Management
- [ ] Session persists across page reloads
- [ ] Logout clears session
- [ ] Dashboard redirects to login when not authenticated
- [ ] Expired sessions auto-refresh
- [ ] Failed refresh redirects to login

---

## 🔧 11. Environment Variables

All environment variables are already configured in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://ejevefkqumrjtgefkvww.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

### For Vercel Production

Make sure these are also added to Vercel:
1. Go to Vercel Dashboard → Project → Settings → Environment Variables
2. Verify all three variables are present
3. If you change OAuth credentials in Supabase, redeploy Vercel

---

## 🐛 12. Troubleshooting

### Google OAuth Issues

**Problem:** "redirect_uri_mismatch" error
**Solution:**
- Verify redirect URI in Google Console matches exactly:
  `https://ejevefkqumrjtgefkvww.supabase.co/auth/v1/callback`
- Check for trailing slashes
- Ensure HTTPS is used

### Facebook OAuth Issues

**Problem:** "Can't Load URL" error
**Solution:**
- Verify OAuth Redirect URI in Facebook settings
- Ensure app is in "Live" mode (not Development)
- Check that Facebook Login product is added to your app

### Session Issues

**Problem:** Dashboard redirects to login immediately
**Solution:**
- Check browser cookies are enabled
- Verify environment variables are set
- Check browser console for API errors
- Ensure `/api/auth/user` returns 200 status

### Email Authentication Issues

**Problem:** "Email not confirmed" error
**Solution:**
- In Supabase Dashboard → Authentication → Email Templates
- Enable/disable email confirmation based on your needs
- For development, disable email confirmation

---

## 📚 13. Additional Resources

- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)
- [Facebook Login Documentation](https://developers.facebook.com/docs/facebook-login)
- [Next.js Authentication Documentation](https://nextjs.org/docs/authentication)

---

## 🎯 14. Next Steps After Setup

1. **Configure OAuth Providers** (Google & Facebook)
2. **Test all authentication flows** (email, Google, Facebook)
3. **Create Privacy Policy and Terms of Service pages**
4. **Enable email verification** (optional)
5. **Add password reset functionality** (optional)
6. **Customize email templates in Supabase**
7. **Add user profile management**
8. **Implement role-based access control** (if needed)

---

**Last Updated:** 2026-01-17
**Status:** ⚠️ Requires OAuth Provider Configuration

Once you complete steps 2 and 3 (Google & Facebook OAuth), the authentication system will be fully functional!
