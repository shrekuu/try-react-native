import React from 'react'
import { ScrollView, RefreshControl, Text, View } from 'react-native'
import environment from '../../environment'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Button } from '@ant-design/react-native'

export default class Home extends React.Component {

  static navigationOptions = {
    title: 'Home',
  }

  constructor (props) {
    super(props)
    this.state = {
      refreshing: false,
    }
  }

  _onRefresh = () => {
    this.setState({ refreshing: true })
    this.fetchData().then((data) => {
      console.log('data', data)
      this.setState({ refreshing: false })
    })
  }

  fetchData() {
    console.log('fetchData')
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({test: true})
      }, 1000)
    })
  }

  render () {
    return (

      <ScrollView
        fetchData = {
          () => {
            console.log('fetch data')
          }
        }
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.box}>
            <Text>box</Text>
          </View>
          <View style={styles.box2}>
            <Text>box</Text>
          </View>
          <Text style={styles.primary}>Home Screen</Text>
          <Text style={styles.secondly}>Home Screen</Text>
          <Text style={styles.thirdly}>Home Screen</Text>
          <Text style={{ fontSize: 48 }}>Home Screen</Text>
          <Text>{environment.version}</Text>
          <Button onPress={() => this.props.navigation.navigate('Details', {
            title: 'details title',
            test: true,
            test2: false
          })} title='Go to Details'>to details</Button>
        </View>
      </ScrollView>
    )
  }
}

const styles = EStyleSheet.create({
  box: {
    width: '750rem',
    borderWidth: 1,
    borderColor: 'red'
  },
  box2: {
    width: 375,
    borderWidth: 1,
    borderColor: 'red'
  },
  primary: {
    fontSize: '16rem',
  },
  secondly: {
    fontSize: '32rem',
  },
  thirdly: {
    fontSize: '48rem',
  }
})