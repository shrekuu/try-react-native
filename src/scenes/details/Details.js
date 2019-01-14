import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { withNavigationFocus } from 'react-navigation'

class Details extends Component {

  static navigationOptions = ({ navigation}) => {
    return {
      title: navigation.getParam('title'),
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>{this.props.navigation.getParam('test') ? 'test': 'no'}</Text>
        <Text>{this.props.navigation.getParam('test2') ? 'test': 'no'}</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Text>{this.props.isFocused ? 'Focused' : 'Not focused'}</Text>
      </View>
    );
  }
}

export default withNavigationFocus(Details)
