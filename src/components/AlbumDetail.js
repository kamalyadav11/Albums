import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default AlbumDetail = ({ album }) => { //now as we are having multiple props.album, so it's a good idea to remove props and destructure albums

  const { title, artist, thumbnail_image } = album;
  const {thumbnailStyle, headerContentStyle} = styles;

  return (
    <Card>
      <CardSection>
        <View>
          <Image
           style={thumbnailStyle}
           source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection> 
    </Card>
  );
}

const styles = StyleSheet.create({
  headerContentStyle: {
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
});