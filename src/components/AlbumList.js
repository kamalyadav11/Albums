import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

export default class AlbumList extends React.Component {
  state = {
    albums: [] //album list geeting its initial state as an empty array
  }
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums') //making an http request which is an asynchronous request (that means it will take some time) 
      .then(response => this.setState({albums: response.data})); //Now after THAT some time we get our http response, which gives entire list of album
  }
  render() {
    console.log(this.state); //first time album list is rendered as an empty array
    //and after the http response albumlist re-renders again showing us the entire list of album
    return(
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}
