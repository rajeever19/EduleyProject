// screens/AboutScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const AboutScreen = ({ navigation }) => {
  return (
    <View>
      <Text>About Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to Contact"
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
  );
};

export default AboutScreen;
// screens/AboutScreen.js