import React from 'react';
import { StatusBar, Button, Image, Text, View } from 'react-native';
import { styles } from './styles';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/home.png')}
        style={[styles.icon, styles.tinted]}
      />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.viewHeading}>
          <Text style={styles.heading}>MeBook</Text>
        </View>
        <View style={styles.viewContent}>
          <View style={{ margin: 10 }}>
            <Button title="Shelf" onPress={() => this.props.navigation.navigate('Shelf')} />
          </View>
          <View style={{ margin: 10 }}>
            <Button title="Search" onPress={() => this.props.navigation.navigate('Search')} />
          </View>
          <View style={{ margin: 10 }}>
            <Button title="About" onPress={() => this.props.navigation.navigate('About')} />
          </View>
        </View>
      </View>
    );
  }
}

