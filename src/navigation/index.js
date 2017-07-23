import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import HomePage from '../views/HomePage';
import RadioPage from '../views/RadioPage';

export const AppNavigator = StackNavigator({
  Home: { screen: HomePage },
  Radio: { screen: RadioPage },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
