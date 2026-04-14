# React Navigation

## Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: React Navigation (Drawer, Bottom Tabs, Stack)
- **Libraries**:
  - `@react-navigation/native`
  - `@react-navigation/drawer`
  - `@react-navigation/bottom-tabs`
  - `@react-navigation/native-stack`
  - `@expo/vector-icons`
  - `react-native-gesture-handler`
  - `react-native-reanimated`
  - `react-native-safe-area-context`
  - `react-native-screens`

## Core Features

This React Native application demonstrates various navigation patterns using React Navigation. It features a drawer-based navigation system with screens for Home and Product views. The app showcases:

- Drawer navigation with custom icons and styling
- Screen navigation with parameters (e.g., product ID)
- Reusable UI components (Header, Title, ButtonIcon)
- TypeScript integration for type-safe navigation

## Getting Started

### Prerequisites

- Node.js (version 18 or later)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- For Android/iOS development: Android Studio or Xcode respectively

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd react-navigation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

- **Start the development server**:

  ```bash
  npm start
  ```

- **Run on Android**:

  ```bash
  npm run android
  ```

- **Run on iOS**:

  ```bash
  npm run ios
  ```

- **Run on Web**:
  ```bash
  npm run web
  ```

## Project Structure

````
react-navigation/
├── android/                 # Android native code
├── ios/                     # iOS native code
├── src/
│   ├── app/                 # Main application screens
│   │   ├── Home.tsx         # Home screen
│   │   └── Product.tsx      # Product screen
│   ├── components/          # Reusable UI components
│   │   ├── ButtonIcon.tsx   # Icon button component
│   │   ├── Header.tsx       # Header component
│   │   └── Title.tsx        # Title component
│   ├── routes/              # Navigation configuration
│   │   ├── index.tsx        # Main routes setup
│   │   ├── DrawerRoutes.tsx # Drawer navigation
│   │   ├── BottomTabRoutes.tsx # Bottom tab navigation
│   │   └── StackRoutes.tsx  # Stack navigation
│   └── types/               # TypeScript type definitions
│       └── navigation.d.ts  # Navigation types
├── App.tsx                  # Main app component
├── app.json                 # Expo configuration
├── index.js                 # Entry point
├── metro.config.js          # Metro bundler config
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```</content>
<parameter name="filePath">/home/d4rks0ul/Documents/react-navigation/README.md
````
