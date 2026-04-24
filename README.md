# Digitvilla Fees Payment Web App

A modern, responsive online fees payment web application built with React, Vite, and Tailwind CSS.

## Features

- User authentication (simulated)
- Dashboard with fee summary and status
- Month selection for payment
- Payment processing simulation
- Receipt generation
- Admin dashboard
- Responsive design

## Tech Stack

- React 18 + Vite
- TypeScript
- Tailwind CSS
- shadcn/ui components
- React Router
- Zustand for state management
- React Hook Form + Zod for validation
- Recharts for charts

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   └── ui/          # Reusable UI components
├── pages/           # Page components
├── stores/          # Zustand stores
├── types/           # TypeScript types
├── data/            # Dummy data
└── lib/             # Utilities
```

## Pages

- Login
- User Dashboard
- Select Months to Pay
- Payment
- Payment Success
- Receipt
- Admin Dashboard