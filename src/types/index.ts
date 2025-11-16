// Type definitions for the Awareness app

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AppState {
  isLoading: boolean;
  error: string | null;
}

// Navigation types
export type RootStackParamList = {
  Home: undefined;
  // Add more screens here as needed
};
