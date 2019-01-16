import React, { ErrorBoundary } from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { listRepos } from '../../store/actions'

class RepoList extends React.Component {
  constructor (props) {
    super(props)
    this.state = { error: null, errorInfo: null }
    this.errorShown = false
  }

  componentDidMount () {
    this.props.listRepos('relferreira')
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  )

  render () {
    const { repos, loading, error } = this.props

    return (
      <View>
        {
          loading
            ? <View><Text>Loading</Text></View>
            : null
        }
        {
          error && error.response.data.message
            ? <View><Text>{error.response.data.message}</Text></View>
            : null
        }
        {
          repos.length > 0
            ? <FlatList
              styles={styles.container}
              data={repos}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
            : null
        }
      </View>

    )
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
})

const mapStateToProps = state => {
  let storedRepositories = state.repoList.repos.map(repo => ({ key: repo.id, ...repo }))
  return {
    ...state.repoList,
    repos: storedRepositories
  }
}

const mapDispatchToProps = {
  listRepos
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoList)