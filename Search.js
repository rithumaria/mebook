import React from 'react';
import { StatusBar, Image, Button, StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: (this.props.item)?this.props.item:"Unknown",
      title: (this.props.item.volumeInfo.title)?this.props.item.volumeInfo.title:"Unknown",
      authors: (this.props.item.volumeInfo.authors)?this.props.item.volumeInfo.authors.join():"Unknown",
      publisher: (this.props.item.volumeInfo.publisher)?this.props.item.volumeInfo.publisher:"Unknown",
      publishedDate: (this.props.item.volumeInfo.publishedDate)?this.props.item.volumeInfo.publishedDate:"Unknown",
      description: (this.props.item.volumeInfo.description)?this.props.item.volumeInfo.description:"Unknown",
      categories: (this.props.item.volumeInfo.categories)?this.props.item.volumeInfo.categories.join():"Unknown",
      rating: (this.props.item.volumeInfo.averageRating)?this.props.item.volumeInfo.averageRating:"Unknown",
      thumbnail: (this.props.item.volumeInfo.imageLinks.thumbnail)?this.props.item.volumeInfo.imageLinks.thumbnail:"",
    }
  }
  render () {
    return (
      <View id="card" style={{
        flex: 1,
        flexDirection: "column",
        width: "90%",
        aspectRatio: 1,
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
      }}>
        <View id="card-top" style={{
          flexDirection: "row",
          width: "100%",
          margin: 5,
        }}>
          <View id="img" style={{ }}>
            <Image
              source={{uri: this.state.thumbnail}}
              resizeMode="contain"
              style={{ width: 100, height: 100,}}
            />
          </View>
          <View id="details" style={{flexDirection: "column"}}>
            <View id="Title">
              <Text>{this.state.title}</Text>
            </View>
            <View id="Author">
              <Text>By {this.state.authors}</Text>
            </View>
            <View id="Rating">
              <Text>Rating {this.state.rating}</Text>
            </View>
            <View id="Category">
              <Text>Categories: {this.state.categories}</Text>
            </View>
          </View>
        </View>
        <View id="description" style={{}}>
          <Text>{this.state.description}</Text>
        </View>
      </View>
    );
  }
}
export class SearchScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Search',
    headerTintColor: "#6A00FF",
    drawerIcon: () => (
      <Image
        source={require('./assets/search.png')}
        style={[styles.icon, styles.tinted]}
      />
    ),
  };
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      result: [],
    }
  }
  textChange = (text) => {
    this.setState({searchString: text});
  }
  search = () => {
    let toSearch = encodeURI(this.state.searchString);
    fetch('https://www.googleapis.com/books/v1/volumes?q=' + toSearch)
      .then((response) => {return response.json();})
      .then((result) => { this.setState({result: result}); 
      this.forceUpdate();});
  }
  render() {
    // let results = "";
    // if (this.state.result && Object.keys(this.state.result).length) {
    //   for(let i=0; i<Object.keys(this.state.result).length; i++) {
    //     item = this.state.result.items[i];
    //     results += <Result 
    //       item={this.state.result.items[i]}
    //       title={this.state.result.items[i].volumeInfo.title}
    //       authors={this.state.result.items[i].volumeInfo.authors.join()}
    //       publisher={this.state.result.items[i].volumeInfo.publisher}
    //       publishedDate={this.state.result.items[i].volumeInfo.publishedDate}
    //       description={this.state.result.items[i].volumeInfo.description}
    //       categories={this.state.result.items[i].volumeInfo.categories.join()}
    //       rating={this.state.result.items[i].volumeInfo.averageRating}
    //       thumbnail={this.state.result.items[i].volumeInfo.imageLinks.thumbnail}
    //     />
    //   }
    // }
    // console.log(results);
    return (
      <View style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
        }}>
        <StatusBar hidden={true} />
        <View>
          <View style={{
            height: "10%",
            flex: 1,
            flexDirection: 'row',
            justifyContent: "space-between",
            margin: 10,
            }}>
            <TextInput
              placeholder="Enter search string"
              style={{ width: "75%", fontSize: 16, }}
              onChangeText={ this.textChange }
            />
            <Button
              title="Search"
              onPress={this.search}
            />
          </View>
          <View>
            <FlatList
              style={{
                height: "90%",
              }}
              data={this.state.result.items}
              renderItem={({item}) => <Result item={item} />}
            />
          </View>
        </View>
      </View>
    );
  }
}

