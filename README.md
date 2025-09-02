# Combo-drop

## Overview

Combo-drop is a fullstack social application built with Next.js that allows users to follow, post and engage via global or following-only feeds.

### Current features:

- User authentication and profile management (via Clerk)
- Follow other users
- Profile editing & viewing
- Responsive UI with modern design

### Planned features:

- Comments section
- Post likes
- Post re-posting
- Follower notifications
- Follow-back shortcut
- Editing posts
- Deleting posts

### Tech Stack

Frontend:
![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?logo=tailwindcss&logoColor=white)

Authentication:
![Clerk](https://img.shields.io/badge/Clerk-3A3A3A?logo=clerk&logoColor=white)

Database:
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)

UI Components:
![React Icons](https://img.shields.io/badge/React%20Icons-20232A?logo=react&logoColor=white)

Deployment:
![Vercel](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=white)

## Set-up

### Pre-requisites

- Node.js
- npm

### Installation

1. Clone the repo

```
git clone git@github.com:PeterHetherington/combo-drop.git
cd combo-drop
```

2. Install dependencies

```
npm install
```

3. Run development server

```
npm run dev
```

4. Add environment variables

This project requires the following environment variable:

- `DB_CONN`: The connection string for your database.
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk publishable key for authentication (public).
- `CLERK_SECRET_KEY`: Clerk secret key for authentication (private).
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`: URL for the sign-in page.
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`: URL for the sign-up page.
- `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL`: Fallback redirect after sign-in.
- `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL`: Fallback redirect after sign-up.
- `NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL`: Force redirect after sign-up.
- `NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL`: Force redirect after sign-in.

Create a `.env` file in the root of the project and add:

```
DB_CONN=your_database_connection_string_here
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/profile
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/profile
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/profile
```

Schema for the database can be found in db.sql

Make sure to add .env to your ,gitignore file

Resources:

- https://clerk.com/docs/references/backend/overview
