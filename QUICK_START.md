# Quick Start Checklist

Follow these steps to get your TourGapAI landing page live in under 30 minutes.

## ✅ Pre-flight Checklist

### Step 1: Supabase Setup (5 minutes)

- [ ] Go to [supabase.com](https://supabase.com) and create account
- [ ] Create new project named "TourGapAI"
- [ ] Wait for project initialization
- [ ] Go to Settings > API
- [ ] Copy Project URL
- [ ] Copy anon public key

### Step 2: Environment Variables (2 minutes)

- [ ] Open `.env.local` file in project root
- [ ] Paste your Supabase URL
- [ ] Paste your Supabase anon key
- [ ] Save the file

**Example:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmn.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Step 3: Database Table (3 minutes)

- [ ] In Supabase, click "SQL Editor" in sidebar
- [ ] Click "New query"
- [ ] Open `supabase-schema.sql` from your project
- [ ] Copy all the SQL code
- [ ] Paste into Supabase SQL Editor
- [ ] Click "Run"
- [ ] Verify success message appears
- [ ] Click "Table Editor" and confirm "leads" table exists

### Step 4: Local Testing (5 minutes)

- [ ] Open terminal in project directory
- [ ] Run: `npm run dev`
- [ ] Open browser to [http://localhost:3000](http://localhost:3000)
- [ ] Scroll through entire page
- [ ] Fill out the lead form with test data
- [ ] Submit the form
- [ ] Verify success message appears
- [ ] Go to Supabase > Table Editor > leads
- [ ] Confirm your test data appears in the table

### Step 5: Deploy to Vercel (10 minutes)

- [ ] Create GitHub repository
- [ ] Run: `git init`
- [ ] Run: `git add .`
- [ ] Run: `git commit -m "Initial commit"`
- [ ] Run: `git remote add origin YOUR_GITHUB_URL`
- [ ] Run: `git push -u origin main`
- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Sign in with GitHub
- [ ] Click "Add New" > "Project"
- [ ] Import your repository
- [ ] Add environment variables:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Click "Deploy"
- [ ] Wait for deployment to complete
- [ ] Click on deployment URL

### Step 6: Production Testing (5 minutes)

- [ ] Open your Vercel deployment URL
- [ ] Test on desktop browser
- [ ] Test on mobile browser
- [ ] Submit another test lead through production site
- [ ] Verify it appears in Supabase
- [ ] Click all navigation links
- [ ] Test smooth scrolling
- [ ] Check responsive design

## 🎉 You're Live!

Your TourGapAI landing page is now live and accepting leads!

## What's Next?

### Immediate Actions
1. Share your URL with potential users
2. Test on different devices and browsers
3. Set up analytics (Google Analytics or Plausible)
4. Monitor Supabase for incoming leads

### Within First Week
1. Create admin dashboard to view leads
2. Set up email notifications for new leads
3. Add your custom domain
4. Implement A/B testing for headlines

### Within First Month
1. Analyze conversion rates
2. Optimize based on user feedback
3. Add testimonials if you have them
4. Implement payment processing for paid plans

## Troubleshooting

### ❌ Form submission fails
**Check:**
- Browser console for errors
- Environment variables are correct
- Supabase table exists
- No typos in table/column names

### ❌ Can't connect to Supabase
**Check:**
- API URL is correct (no trailing slash)
- Anon key is copied completely
- Supabase project is active
- Environment variables are loaded (restart dev server)

### ❌ Styling looks broken
**Try:**
- Clear browser cache
- Restart development server
- Check browser console for errors
- Verify Tailwind is working (inspect elements)

### ❌ Deploy fails on Vercel
**Check:**
- All files are committed to Git
- Environment variables are added in Vercel
- No syntax errors in code
- Build logs for specific errors

## Quick Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for TypeScript errors
npm run type-check

# Lint code
npm run lint
```

## Important URLs

- **Local Development**: http://localhost:3000
- **Supabase Dashboard**: https://supabase.com/dashboard
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Your Production Site**: (will be provided after Vercel deployment)

## Need Help?

1. Read `SETUP_GUIDE.md` for detailed instructions
2. Read `PROJECT_SUMMARY.md` for technical overview
3. Check Next.js docs: https://nextjs.org/docs
4. Check Supabase docs: https://supabase.com/docs

## Success Indicators

You'll know everything is working when:
- ✅ Page loads without errors
- ✅ All sections are visible
- ✅ Smooth scrolling works
- ✅ Form submits successfully
- ✅ Data appears in Supabase
- ✅ Success message shows after submission
- ✅ Site works on mobile and desktop

---

**Time to complete**: 30 minutes
**Difficulty**: Beginner-friendly
**Cost**: $0 (using free tiers)

Good luck! 🚀
