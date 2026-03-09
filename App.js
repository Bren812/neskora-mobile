import { NavigationContainer } from '@react-navigation/native';


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { RFPercentage } from "react-native-responsive-fontsize";
import Constants from 'expo-constants';

import RootStack from './src/navegacao/stack';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategrey',
    padding: RFPercentage(1.2),
    paddingTop: Constants.statusBarHeight,
  },
});
