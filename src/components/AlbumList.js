import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends React.Component {
  state = {
    albums: [] //album list getting its initial state as an empty array
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums') //making an http request which is an asynchronous request (that means it will take some time) 
      .then(response => this.setState({albums: response.data})); //Now after THAT some time we get our http response, which gives entire list of album
  }

  renderAlbums() {
    return this.state.albums.map(album => 
    <AlbumDetail key={album.title} album={album} /> //key should be unique for each element so we choosing album.title because its unique in each case
    );
  }

  render() {
    console.log(this.state); //first time album list is rendered as an empty array
    //and after the http response albumlist re-renders again showing us the entire list of album
    return(
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
