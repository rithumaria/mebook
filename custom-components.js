import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export class CustomButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <View style={[styles.viewButton, this.props.viewStyle]}>
        <Text
          onPress={this.props.onPress}
          style={[styles.textButton, this.props.textStyle]}
          >
          {(this.props.title)?(this.props.title):(this.props.children)}
        </Text>
      </View>
    );
  }
}