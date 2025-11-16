import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  ScrollView,
} from 'react-native';

const HomeScreen = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff'},
      ]}>
      <View style={styles.content}>
        <Text style={[styles.title, {color: isDarkMode ? '#ffffff' : '#000000'}]}>
          Welcome to Awareness
        </Text>
        <Text
          style={[styles.subtitle, {color: isDarkMode ? '#cccccc' : '#666666'}]}>
          Your mobile application is ready!
        </Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Built with React Native & TypeScript
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
  },
  infoBox: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 12,
    marginTop: 24,
  },
  infoText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
