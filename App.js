import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default App  = () => (
      <View style={{ flex: 1 }}> 
      {/* We have added flex: 1 so that scrollview works perfectly and the content does not bounce back that means scrollView takes entire height width */}
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
);