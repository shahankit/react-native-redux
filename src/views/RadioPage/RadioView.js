import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const buttonBlueColor = 'deepskyblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'space-between',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  albumCover: {
    alignSelf: 'center',
    marginTop: 16,
    height: 300,
    width: 300,
  },
  albumInfoContainer: {
    marginTop: 10,
    width: screenWidth,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  trackTitle: {
    fontWeight: 'bold',
  },
  trackArtist: {
    marginTop: 10,
  },
  progressContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  durationLabelContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  durationLabel: {
    color: 'gray',
  },
  seekBar: {
    width: screenWidth - 32,
    height: 2,
    borderRadius: 1,
    backgroundColor: 'gray',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonBlue: {
    backgroundColor: buttonBlueColor,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth,
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 30,
  },
  likesContainerWidth: {
    width: 50,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    marginLeft: 3,
  },
});

export default class RadioPage extends Component {
  componentDidMount() {
    this.props.fetchAlbumInfo(this.props.navigation.state.params.albumId);
  }

  renderControls = () => {
    const { likes, is_liked: isLiked } = this.props.album;

    const iconName = isLiked ? 'thumbs-up' : 'thumbs-o-up';
    return (
      <View style={styles.controlsContainer}>
        <View style={styles.likesContainerWidth} />
        <View style={styles.buttonContainer}>
          <Icon component={TouchableOpacity} name={'skip-previous'} containerStyle={styles.button} color={buttonBlueColor} />
          <Icon component={TouchableOpacity} name={'play-arrow'} containerStyle={[styles.button, styles.buttonBlue]} color={'white'} />
          <Icon component={TouchableOpacity} name={'skip-next'} containerStyle={styles.button} color={buttonBlueColor} />
        </View>
        <View style={[styles.likesContainerWidth, styles.likesContainer]}>
          <Icon name={iconName} color={'gray'} type={'font-awesome'} />
          <Text style={styles.likeCount}>{likes}</Text>
        </View>
      </View>
    );
  }

  renderAudioTrackProgress = () => {
    const { duration } = this.props.album;

    const hours = parseInt(duration / 60);
    const seconds = duration - (hours * 60);

    const hoursString = ('0' + hours).slice(-2);
    const secondsString = ('0' + seconds).slice(-2);

    return (
      <View style={styles.progressContainer}>
        <View style={styles.durationLabelContainer}>
          <Text style={styles.durationLabel}>00:00</Text>
          <Text style={styles.durationLabel}>{hoursString}:{secondsString}</Text>
        </View>
        <View style={styles.seekBar} />
      </View>
    );
  }

  renderTrackInfo = () => {
    const { artist, title } = this.props.album;

    return (
      <View style={styles.albumInfoContainer}>
        <Text style={styles.trackTitle}>{title}</Text>
        <Text style={styles.trackArtist}>{artist}</Text>
      </View>
    );
  }

  renderTrackCover = () => {
    const { cover } = this.props.album;

    return (
      <Image
        source={{ uri: cover }}
        resizeMode={'cover'}
        style={styles.albumCover}
      />
    );
  }

  renderLoading = () => (
    <View style={[styles.container, styles.loading]}>
      <ActivityIndicator />
    </View>
  )

  render() {
    if (!this.props.album) {
      return this.renderLoading();
    }

    return (
      <View style={styles.container}>
        <View>
          {this.renderTrackCover()}
          {this.renderTrackInfo()}
        </View>
        <View>
          {this.renderAudioTrackProgress()}
          {this.renderControls()}
        </View>
      </View>
    );
  }
}
