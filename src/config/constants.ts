// App configuration constants

export const API_CONFIG = {
  BASE_URL: process.env.API_BASE_URL || 'https://api.example.com',
  TIMEOUT: 30000,
};

export const COLORS = {
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  background: {
    light: '#ffffff',
    dark: '#1a1a1a',
  },
  text: {
    light: '#000000',
    dark: '#ffffff',
  },
};

export const SCREEN_NAMES = {
  HOME: 'Home',
} as const;
