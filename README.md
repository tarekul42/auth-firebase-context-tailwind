# Firebase Auth with Context and Tailwind

A Firebase authentication practice project built with React, featuring email/password and Google sign-in with React Context state management and Tailwind CSS styling.

## Features

- **Firebase authentication**: Email/password and Google OAuth sign-in
- **React Context**: Global auth state management via Context API
- **Protected routes**: Auth-guarded pages with redirect
- **Responsive design**: Tailwind CSS + DaisyUI components

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite 4 |
| Routing | React Router DOM 6 |
| Auth | Firebase 10 |
| Styling | Tailwind CSS 3 + DaisyUI 3 |

## Getting Started

```bash
npm install
npm run dev
```

Create a `.env` file with your Firebase config:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Project Structure

```
src/
├── Components/       # UI components
├── Providers/        # Auth context provider
├── firebase/         # Firebase configuration
├── routes/           # Route definitions
└── main.jsx          # Entry point
```
