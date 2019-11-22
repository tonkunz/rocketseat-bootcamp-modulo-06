import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontWeight: 'bold',
  },
});

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello App</Text>
      <Text>React-Native Super App</Text>
    </View>
  );
}

export default App;
