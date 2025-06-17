# FestApp

A complete platform for event space reservations, built with Expo Router and React Native.

## Features

- 🔐 Authentication system with multiple user roles
- 🏢 Space discovery and booking
- 📅 Event management
- 🌐 Internationalization support
- 🌓 Dark/Light theme
- 📱 Responsive design for all devices

## Prerequisites

- Node.js 18 or later
- npm or yarn
- Expo CLI
- Firebase account

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/festapp.git
cd festapp
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
# or
yarn install
```

3. Create a `.env` file in the root directory with your Firebase configuration:
```
EXPO_PUBLIC_FIREBASE_API_KEY=your_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:
```bash
npx expo start --clear
```

## Project Structure

```
app/
├── _layout.tsx (Root layout)
├── (tabs)/ (Main navigation)
├── auth/ (Authentication)
├── booking/ (Bookings)
├── event/ (Events)
├── space/ (Spaces)
└── profile/ (Profile and settings)

components/
├── ui/ (Base components)
├── spaces/ (Space components)
├── events/ (Event components)
└── bookings/ (Booking components)

services/
├── firebase.ts
├── spaces.ts
├── events.ts
├── reservations.ts
├── users.ts
├── admin.ts
└── i18n.ts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 