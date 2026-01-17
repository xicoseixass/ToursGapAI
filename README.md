# TourGapAI Landing Page

A high-conversion landing page for TourGapAI - Tourism Market Intelligence SaaS platform built with Next.js 14, Tailwind CSS, and Supabase.

## Features

- **Modern SaaS Design**: Clean, responsive design with glass-morphism effects
- **Lead Capture Form**: Comprehensive form with validation and Supabase integration
- **Pricing Section**: 4 pricing tiers (Explorer, Strategist Pro, Market Leader, Business-in-a-Box)
- **Social Proof**: Big numbers section showcasing credibility
- **Portuguese Content**: All copy in Portuguese (PT)
- **Strawberry Red Branding**: Custom color palette throughout

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Database**: Supabase (Free Tier)
- **Language**: TypeScript
- **Deployment**: Ready for Vercel

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Project Settings > API
4. Copy your project URL and anon public key
5. Update the `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 3. Create Database Table

Go to the SQL Editor in Supabase and run the SQL from `supabase-schema.sql`:

```sql
-- The file contains the complete schema for the leads table
-- Including indexes and Row Level Security policies
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
tourgap-landing/
├── app/
│   ├── api/
│   │   └── submit-lead/
│   │       └── route.ts          # API endpoint for form submission
│   ├── globals.css               # Global styles with Tailwind config
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main landing page
├── components/
│   ├── Navbar.tsx                # Fixed navigation bar
│   ├── Hero.tsx                  # Hero section with CTA
│   ├── Features.tsx              # Value proposition cards
│   ├── Pricing.tsx               # 4 pricing tiers
│   ├── SocialProof.tsx           # Big numbers section
│   ├── LeadForm.tsx              # Lead capture form with validation
│   └── Footer.tsx                # Footer with links
├── lib/
│   └── supabase.ts               # Supabase client configuration
├── supabase-schema.sql           # Database schema
└── .env.local                    # Environment variables
```

## Components

### Navbar
- Fixed top navigation with smooth scroll
- CTA button: "Seja um Fundador"
- Links to Features, Pricing, and About sections

### Hero Section
- Split-screen layout
- Compelling headline and sub-headline
- Glass-morphism card showing example market gap
- Primary CTA button

### Features
- 3 feature cards:
  - Segurança para Empreendedores
  - Superioridade para Operadores
  - Fosso Defensivo

### Pricing
- 4 pricing cards with "Strategist Pro" highlighted as recommended
- Responsive grid layout
- Clear feature lists and CTAs

### Lead Capture Form
- 6 fields with validation:
  1. Profile (Operador Turístico / Empreendedor)
  2. City of operation
  3. Multi-select challenges
  4. Monthly bookings
  5. WhatsApp number
  6. Business pitch
- Success state after submission
- Error handling

### Social Proof
- Large number display: "8.000+ Oportunidades Analisadas"
- Gradient background with brand colors

## Color Palette

The project uses a custom "Strawberry Red" color palette:

- **50**: #fee6e7 (lightest)
- **500**: #f9060e (primary brand color)
- **600**: #c7050c (buttons, CTAs)
- **950**: #230102 (darkest)

## Database Schema

The `leads` table stores form submissions with:
- UUID primary key
- Profile, city, challenges (array)
- Monthly bookings, WhatsApp, pitch
- Timestamps and indexes
- Row Level Security enabled

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

```bash
# Or use Vercel CLI
vercel
```

## Environment Variables

Required environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Customization

### Changing Colors
Edit the color variables in `app/globals.css` under the `@theme inline` section.

### Updating Content
All Portuguese content is hardcoded in the respective components. Edit the component files to change copy.

### Adding More Cities
The form accepts any city input. No additional configuration needed.

## Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)

## License

This project is private and proprietary.
