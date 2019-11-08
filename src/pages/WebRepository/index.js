import React from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

export default function WebRepository({ navigation }) {
  const repository = navigation.getParam('repository');

  return <WebView source={{ uri: repository.html_url }} style={{ flex: 1 }} />;
}

WebRepository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

WebRepository.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repository').name,
});
