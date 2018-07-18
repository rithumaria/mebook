import React from 'react';
import Expo from 'expo';
import { TextInput, StyleSheet, ToastAndroid, Button, StatusBar, Image, Text, View } from 'react-native';
import { styles } from './styles';

export class ShelfScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Shelf',
    headerTintColor: "#6A00FF",
    drawerIcon: () => (
      <Image
        source={require('./assets/book-shelf.png')}
        style={[styles.icon, styles.tinted]}
      />
    ),
  };
  constructor(props) {
    super(props);
    this.state = {
      url: null,
    }
  }
  pickFile = () => {
    Expo.DocumentPicker.getDocumentAsync({type: '*/*'}).then((pick) => {
      if (pick.type == "success") {
        if (!(pick.name.endsWith(".pdf"))) {
          console.log(pick);
          ToastAndroid.show(pick.name + " is not a valid ebook", ToastAndroid.SHORT);
        } else {
          //this.add(pick.uri, pick.name);
          this.props.navigation.navigate('Viewer', {
            uri: pick.uri
          })
        }
      }
    });
  }
	openurl = () => {
		if (this.state.url) {
			if (this.state.url.endsWith('.pdf')) {
				this.props.navigation.navigate('Viewer', {
					uri: this.state.url,
				});
			} else {
				ToastAndroid.show(this.state.url + " is not a pdf", ToastAndroid.SHORT);
			}
		} else {
			ToastAndroid.show("Invalid URL", ToastAndroid.SHORT);
		}
	}
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.viewHeading}>
          <Text style={styles.heading}>Shelf</Text>
        </View>
        <View style={styles.viewContent}>
					<View style={localStyles.subContent}>
						<Button
							onPress={this.pickFile}
							title="Browse"
							/>
					</View>
					<View style={localStyles.subContent}>
						<TextInput
							style={{width: 100, margin: 10}}
							placeholder="Enter URL"
							onChangeText={(text) => this.setState({url: text})}
						/>
						<Button
							onPress={this.openurl}
							title="Open from URL "
							/>
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
