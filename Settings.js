import React from 'react';
import { StatusBar, Image, Text, View } from 'react-native';
import { styles } from './styles'

export class SettingsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Settings',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/home/home-48.png')}
        style={[styles.icon, styles.tinted]}
      />
    ),
  };
  render() {
    return (
      <View style={ styles.container }>
        <StatusBar hidden={true} />
        <Text>Settings Screen</Text>
      </View>
    );
  }
}