# How to Add Supabase Service Role Key

## Step 1: Get Your Service Role Key

1. Go to your Supabase project dashboard: https://supabase.com/dashboard
2. Select your project: `ejevefkqumrjtgefkvww`
3. Go to **Project Settings** (gear icon in sidebar)
4. Click on **API** section
5. Under "Project API keys", find the **service_role** key (NOT the anon/public key)
6. Copy the service_role key

⚠️ **IMPORTANT**: The service_role key bypasses Row Level Security and should NEVER be exposed to the client. Only use it in server-side code (API routes, server components).

## Step 2: Add to .env.local

Add this line to your `.env.local` file:

```
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

Your `.env.local` should look like:

```
NEXT_PUBLIC_SUPABASE_URL=https://ejevefkqumrjtgefkvww.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (your service role key)
```

## Step 3: Add to Vercel Environment Variables

1. Go to your Vercel project dashboard
2. Go to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Key**: `SUPABASE_SERVICE_ROLE_KEY`
   - **Value**: Your service role key
   - **Environment**: Select all (Production, Preview, Development)
4. Click **Save**
5. Redeploy your application

## Step 4: Restart Dev Server

After adding the key to `.env.local`, restart your development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart it
npm run dev
```

## Why This Fix Works

The error you were seeing:
```
Supabase error: { code: '42501', message: 'new row violates row-level security policy for table "leads"' }
```

This happened because the anon key respects Row Level Security (RLS) policies, but no policy was set up to allow anonymous users to insert leads.

By using the service_role key on the server-side API route, we bypass RLS entirely, which is appropriate for server-side operations where we control the logic and validation.

## Security Note

- ✅ Service role key in `.env.local` (server-side only)
- ✅ Service role key in Vercel environment variables (server-side only)
- ❌ NEVER use service role key in client-side code
- ❌ NEVER commit service role key to git
- ✅ `.env.local` is already in `.gitignore`
