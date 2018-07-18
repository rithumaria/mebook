import React from 'react';
import { StyleSheet, StatusBar, Image, Text, View } from 'react-native';
import { styles } from './styles'

export class AboutScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'About',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/about.png')}
        style={[styles.icon, styles.tinted]}
      />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.viewHeading}>
          <Text style={styles.heading}>About</Text>
        </View>
        <View style={styles.viewContent}>
					<View style={localStyles.subContent}>
						<Text>Very simple ebook app created using react-native</Text>
					</View>
        </View>
      </View>
    );
  }
}

const localStyles = StyleSheet.create({
  subContent: {
    backgroundColor: '#fff',
		height: 100,
		justifyContent: 'center',
    alignItems: 'center',
  },
});