import React, { Component } from 'react';
import {
  View
} from 'react-native';

export default class RadioPage extends Component {
  componentDidMount() {
    this.props.fetchAlbumInfo(this.props.navigation.state.params.albumId);
  }

  render() {
    console.log('this.props.album', this.props.album);
    return (
      <View />
    );
  }
}
