import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import ButtonCard from './ButtonCard';
import Card from './Card';
import CardSection from './CardSection';

export default AlbumDetail = ({ album }) => { //now as we are having multiple props.album, so it's a good idea to remove props and destructure albums

  const { title, artist, thumbnail_image, image, url } = album;
  const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
           style={thumbnailStyle}
           source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection> 

      <CardSection>
        <Image
        style={imageStyle}
        source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <ButtonCard onPress={() => Linking.openURL(url)} />
      </CardSection>

    </Card>
  );
}

const styles = StyleSheet.create({
  headerContentStyle: {
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});