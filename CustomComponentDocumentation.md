# Custom components

## CustomButton
- Code
```
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
          ReShelf
        </Text>
      </View>
    );
  }
}
```
- Props  
  - `onPress`:  
  This function is called on press.  
  Example:  
    `onPress={() => console.log('1st')}`
  - `viewStyle`:  
  This is the styles to be applied on `View` component in react-natice
  - `textStyle`:  
  This is the styles to be applied on `Text` component in react-native