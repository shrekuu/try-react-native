import React, { Component } from 'react'
import {Platform, View, Text, StatusBar, SafeAreaView, ScrollView } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import LinearGradient from 'react-native-linear-gradient'
import { sliderWidth, itemWidth } from './styles/SliderEntry.style'
import SliderEntry from './components/SliderEntry'
import styles, { colors } from './styles/CarouselView.style'
import { ENTRIES1 } from './static/entries'

export default class CarouselView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slider1ActiveSlide: 1,
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'title3',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }

  _renderItem ({ item, index }) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0}/>
  }

  mainExample (number, title) {
    const { slider1ActiveSlide } = this.state

    return (
      <View style={styles.exampleContainer}>
        <Text style={styles.title}>{`Example ${number}`}</Text>
        <Text style={styles.subtitle}>{title}</Text>
        <Carousel
          ref={c => this._slider1Ref = c}
          data={ENTRIES1}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          firstItem={1}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
        />
        <Pagination
          dotsLength={ENTRIES1.length}
          activeDotIndex={slider1ActiveSlide}
          containerStyle={styles.paginationContainer}
          dotColor={colors.yellow}
          dotStyle={styles.paginationDot}
          inactiveDotStyle={styles.inactivePaginationDot}
          inactiveDotColor={colors.white}
          inactiveDotOpacity={0.9}
          inactiveDotScale={1}
          carouselRef={this._slider1Ref}
        />
      </View>
    )
  }

  get gradient () {
    return (
      <LinearGradient
        colors={[colors.background1, colors.background2]}
        startPoint={{ x: 1, y: 0 }}
        endPoint={{ x: 0, y: 1 }}
        style={styles.gradient}
      />
    )
  }

  render () {
    const example1 = this.mainExample(1, 'Default layout | Loop | Autoplay | Opacity | Pagination')

    return (
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor={'rgba(0, 0, 0, 0.3)'}
          barStyle={'light-content'}
        />
        {this.gradient}
        <ScrollView>
          {example1}
          <View style="styles.contentText">
            <View>
              <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis, cum delectus deserunt
                dolor, dolore, eos et eveniet fugit impedit non optio praesentium recusandae rerum vel. Atque dolores
                ratione ullam.</Text>
            </View>
            <View>
              <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis, cum delectus deserunt
                dolor, dolore, eos et eveniet fugit impedit non optio praesentium recusandae rerum vel. Atque dolores
                ratione ullam.</Text>
            </View>
            <View>
              <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis, cum delectus deserunt
                dolor, dolore, eos et eveniet fugit impedit non optio praesentium recusandae rerum vel. Atque dolores
                ratione ullam.</Text>
            </View><View>
            <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis, cum delectus deserunt
              dolor, dolore, eos et eveniet fugit impedit non optio praesentium recusandae rerum vel. Atque dolores
              ratione ullam.</Text>
          </View><View>
            <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis, cum delectus deserunt
              dolor, dolore, eos et eveniet fugit impedit non optio praesentium recusandae rerum vel. Atque dolores
              ratione ullam.</Text>
          </View><View>
            <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis, cum delectus deserunt
              dolor, dolore, eos et eveniet fugit impedit non optio praesentium recusandae rerum vel. Atque dolores
              ratione ullam.</Text>
          </View><View>
            <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis, cum delectus deserunt
              dolor, dolore, eos et eveniet fugit impedit non optio praesentium recusandae rerum vel. Atque dolores
              ratione ullam.</Text>
          </View>
            <View>
              <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis, cum delectus deserunt
                dolor, dolore, eos et eveniet fugit impedit non optio praesentium recusandae rerum vel. Atque dolores
                ratione ullam.</Text>
            </View>
            <View>
              <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis, cum delectus deserunt
                dolor, dolore, eos et eveniet fugit impedit non optio praesentium recusandae rerum vel. Atque dolores
                ratione ullam.</Text>
            </View>
            <View>
              <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis, cum delectus deserunt
                dolor, dolore, eos et eveniet fugit impedit non optio praesentium recusandae rerum vel. Atque dolores
                ratione ullam.</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      </SafeAreaView>
    )
  }
}
