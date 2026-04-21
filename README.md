# NeoTutor 3D Platform

A full-stack Gen-Z themed tutoring platform built with Next.js, TailwindCSS, Framer Motion, and Supabase.

## Features
- 3D-inspired dark UI with glassmorphism + neon glow styling
- Scroll reveal animations and hover microinteractions
- Split auth portal for Student/Guardian and Tutor
- Supabase Auth (email/password + Google + Twitter/X OAuth)
- Role-based dashboards and protected routes
- Supabase-backed tables for users, courses, tutors, reviews, earnings, and contact forms

## Run locally
1. Copy `.env.example` to `.env.local` and set Supabase credentials.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Apply `supabase/schema.sql` in your Supabase SQL editor.
4. Start app:
   ```bash
   npm run dev
   ```
