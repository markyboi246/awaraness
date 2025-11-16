import React from 'react';
import {
  View,
  Text,
  Modal,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

/**
 * Props for the LoadingScreen component
 */
interface LoadingScreenProps {
  /** Controls whether the loading screen is visible */
  visible: boolean;

  /** Optional message to display below the spinner */
  message?: string;

  /** Optional color for the activity indicator */
  color?: string;

  /** Size of the activity indicator */
  size?: 'small' | 'large';
}

/**
 * A full-screen loading overlay component with a spinner and optional message
 *
 * @example
 * ```tsx
 * <LoadingScreen
 *   visible={isLoading}
 *   message="Loading data..."
 *   color="#007AFF"
 *   size="large"
 * />
 * ```
 */
const LoadingScreen: React.FC<LoadingScreenProps> = ({
  visible,
  message,
  color = '#007AFF',
  size = 'large'
}) => {

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      testID="loading-modal"
    >
      <View style={styles.container}>
        <View style={styles.backdrop} />

        <View style={styles.content}>
          <ActivityIndicator
            size={size}
            color={color}
            animating={true}
            testID="loading-spinner"
          />

          {message && (
            <Text
              style={styles.messageText}
              testID="loading-message"
            >
              {message}
            </Text>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  content: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    minWidth: 120,
  },

  messageText: {
    marginTop: 12,
    fontSize: 14,
    color: '#333333',
  },
});

export default LoadingScreen;
