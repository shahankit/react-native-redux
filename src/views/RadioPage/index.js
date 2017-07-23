import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActionCreators from '../../redux/actions';

import RadioView from './RadioView';

const mapStateToProps = (state, { navigation }) => ({
  album: state.albums[navigation.state.params.albumId]
});

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RadioView);
