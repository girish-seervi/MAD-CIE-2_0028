import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({
  destination,
  setDestination,
  onExplore,
}: {
  destination: string;
  setDestination: (text: string) => void;
  onExplore: () => void;
}) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.appTitle}>Travel Explorer</Text>
          <Text style={styles.heading}>Explore your Destination</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter destination name"
            placeholderTextColor="#8E8E93"
            value={destination}
            onChangeText={setDestination}
            clearButtonMode="while-editing"
            autoCorrect={false}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, !destination.trim() && styles.buttonDisabled]}
          onPress={onExplore}
          disabled={!destination.trim()}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Explore</Text>
        </TouchableOpacity>

        <View style={styles.spacer} />
      </KeyboardAvoidingView>
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
    paddingTop: 40,
    paddingBottom: 24,
  },
  headerContainer: {
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 38,
    fontWeight: '800',
    color: '#000000',
    letterSpacing: 0.5,
    marginBottom: 60,
    textAlign: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#8E8E93',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: '#F2F2F7',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 18,
    fontSize: 17,
    color: '#000000',
  },
  spacer: {
    flex: 1,
  },
  button: {
    backgroundColor: '#007AFF', // System blue
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
  buttonDisabled: {
    backgroundColor: '#A1C6EA',
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});
