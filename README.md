# Todo App

A modern todo application built with React Native and Expo.

## Prerequisites

- Node.js (v22)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Xcode (for iOS development)
- Android Studio (for Android development)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/alfiansaheriks/todo-app-expo.git
   cd todo-app-expo
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Copy the contents from `.env.example` and update with your configuration

4. **Running the App**
   - **For iOS**

     ```bash
     # Using Expo Go
     npx expo start --ios

     # Or build and run on a simulator
     npx expo run:ios
     ```

   - **For Android**

     ```bash
     # Using Expo Go
     npx expo start --android

     # Or build and run on an emulator
     npx expo run:android
     ```

## Project Structure

```
todo-app-expo/
├── app/                  # Main application code
│   ├── components/       # Reusable components
│   └── ...
├── assets/               # Images and other static files
├── services/             # API services
└── types/                # TypeScript type definitions
```

## Available Scripts

- `npm start` or `yarn start` - Start the development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in web browser
- `npm test` - Run tests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
