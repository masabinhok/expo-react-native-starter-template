# Expo React Native Starter Template with NativeWind

This is a React Native starter template configured with **NativeWind** for utility-first styling using Tailwind CSS in a mobile environment. It comes with three pre-configured screen tabs for easy navigation and customization. The `tailwind.config.ts` is set up with fonts and colors to help you get started with your app development quickly.

## Features

- **NativeWind Integration**: Tailwind CSS classes work seamlessly within your React Native components.
- **Pre-configured Navigation**: Three screen tabs are set up with easy navigation, ready for customization.
- **Tailwind Customization**: The `tailwind.config.ts` file has been configured with custom fonts and colors for fast development.
- **Ready to Build**: A solid starting point to build your React Native app with minimal setup.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (version 16 or higher)
- Expo CLI (`npm install -g expo-cli`)
- Yarn (optional but recommended for dependency management)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/expo-react-native-nativewind-template.git new_name
   cd new_name
   ```

2. Install dependencies:

   ```bash
   npm install
   # or if you're using yarn
   yarn install
   ```

3. Start the Expo project:

   ```bash
   npx expo start
   ```

### Customization

- **Fonts & Colors**: You can customize the default fonts and colors by editing the `tailwind.config.ts` file.
- **Screens**: You can replace or modify the pre-configured screens within the `(tabs)/` folder.
- **Navigation**: The app is set up with simple screen navigation using React Navigation. Feel free to add or modify the tabs in `(tabs)/_layout.tsx`.

### Usage

Once you have the app running, you can start building your app by modifying the existing screens or adding new ones. The tabs are easily navigable, and you can switch between them with just a click. Customize the colors and fonts to suit your brand, and start adding components and functionality to match your app's needs.

### Known Issues

- None (feel free to contribute if you find any!)

### License

This project is open-source and available under the [MIT License](LICENSE).
