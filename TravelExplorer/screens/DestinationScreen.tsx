import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DestinationScreen({
  destination,
  onGoBack,
}: {
  destination: string;
  onGoBack: () => void;
}) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Travel Destination</Text>
          <View style={styles.divider} />
          <Text style={styles.destinationText}>Destination:{destination}</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/beach.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={onGoBack} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
  },
  headerContainer: {
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  heading: {
    fontSize: 34,
    fontWeight: '800',
    color: '#000000',
    letterSpacing: 0.3,
    textAlign: 'center',
    marginBottom: 16,
  },
  divider: {
    height: 2,
    backgroundColor: '#E5E5E5',
    width: '100%', // Full width as requested
    alignSelf: 'center',
    marginBottom: 16,
  },
  destinationText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#007AFF',
    marginTop: 16,
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 24,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#F2F2F7',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});
