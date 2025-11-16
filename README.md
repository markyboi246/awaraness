# Awareness

A React Native mobile application built with TypeScript and containerized with Docker for iOS development.

## Project Structure

```
Awareness/
├── src/
│   ├── components/       # Reusable UI components
│   ├── screens/          # Screen components
│   ├── navigation/       # Navigation configuration
│   ├── services/         # API and external services
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript type definitions
│   ├── assets/           # Images, fonts, and other assets
│   ├── hooks/            # Custom React hooks
│   ├── context/          # React Context providers
│   └── config/           # App configuration and constants
├── ios/                  # iOS native code
├── android/              # Android native code
├── __tests__/            # Test files
├── App.tsx               # Main app component
├── index.js              # App entry point
└── docker-compose.yml    # Docker configuration
```

## Prerequisites

- Node.js >= 18
- npm or yarn
- Docker and Docker Compose
- Xcode (for iOS development on macOS)
- CocoaPods (for iOS dependencies)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Install iOS Dependencies (macOS only)

```bash
cd ios
pod install
cd ..
```

### 3. Running with Docker

Start the Metro bundler using Docker:

```bash
docker-compose up metro
```

The Metro bundler will be available at http://localhost:8081

### 4. Running on iOS

#### Without Docker (Recommended for iOS):

```bash
npm run ios
```

#### With Docker:

First start the Metro bundler with Docker, then run the iOS app on your host machine:

```bash
# Terminal 1: Start Metro bundler
docker-compose up metro

# Terminal 2: Run iOS app (on host machine)
npm run ios
```

### 5. Running on Android

```bash
npm run android
```

## Available Scripts

- `npm start` - Start the Metro bundler
- `npm run ios` - Run the app on iOS simulator
- `npm run android` - Run the app on Android emulator
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Docker Commands

```bash
# Start all services
docker-compose up

# Start Metro bundler only
docker-compose up metro

# Start development container
docker-compose up dev

# Stop all services
docker-compose down

# Rebuild containers
docker-compose up --build

# Run commands in dev container
docker-compose exec dev npm run lint
docker-compose exec dev npm test
```

## Environment Variables

Copy `.env.example` to `.env` and configure your environment variables:

```bash
cp .env.example .env
```

## Development

### Path Aliases

The project uses path aliases for cleaner imports:

```typescript
import Button from '@components/Button';
import HomeScreen from '@screens/HomeScreen';
import api from '@services/api';
import {formatDate} from '@utils/helpers';
import {User} from '@types/index';
```

### TypeScript

All files should use TypeScript. Type definitions are located in `src/types/`.

### Code Quality

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type checking

Run all checks:

```bash
npm run lint
npm run type-check
```

## iOS Development Notes

- iOS development requires a macOS machine with Xcode installed
- The Docker setup provides the Node.js environment and Metro bundler
- iOS builds must be run on the host machine using Xcode or `npm run ios`
- Make sure to run `pod install` after installing new dependencies

## Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## Troubleshooting

### Metro Bundler Issues

If you encounter issues with the Metro bundler:

```bash
# Clear Metro cache
npm start -- --reset-cache

# In Docker
docker-compose exec metro npm start -- --reset-cache
```

### iOS Pod Issues

```bash
cd ios
pod deintegrate
pod install
cd ..
```

### Docker Issues

```bash
# Remove all containers and volumes
docker-compose down -v

# Rebuild from scratch
docker-compose up --build
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

MIT
