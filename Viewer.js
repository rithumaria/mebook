import React from 'react';
import { StatusBar, Image, ToastAndroid, StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';
import PDFReader from 'rn-pdf-reader-js';

export class ViewerScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: () => null
  };
  render() {
    const { navigation } = this.props;
		const uri = navigation.getParam('uri', 'none');
		//const uri = "http://www.africau.edu/images/default/sample.pdf"
		if (uri == 'none' || !uri) {
			ToastAndroid.show('Invalid file', ToastAndroid.SHORT);
			this.props.navigation.navigate('Shelf');
		}
		//ToastAndroid.show('Opening ' + uri, ToastAndroid.SHORT);
		console.log(uri);
		if (uri.trim().endsWith('pdf')) {
			return (
				<View style={localStyles.container}>
        	<StatusBar hidden={true} />
					<PDFReader
						source={{ uri: uri}}
					/>
				</View>
			);
		} else {
			ToastAndroid.show('Unsupported file', ToastAndroid.SHORT);
			this.props.navigation.navigate('Shelf');
		}
	}
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});
