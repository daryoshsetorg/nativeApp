import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../../Assets/Styles/articles'
class Articles extends Component {
  state = {
    ENTRIES1: [
      {
        id: 0,
        title: 'سفر روحانی به تبریز',
        subtitle: 'همزمان با سفر روحانی به تبریز جمعی از',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
      },
      {
        id: 1,
        title: 'اجماع بزرگ روحانیون',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
      },
      {
        id: 2,
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
      },
    ]
  }
  render() {
    return (<View>
      {
        this.state.ENTRIES1.map((item, index) => (
          <View key={item.id} style={styles.mainContainer}>
            <View style={styles.itemContainer}>
              <View style={styles.imageContainer}>
                <Image resizeMode='cover' style={styles.image} source={{ uri: item.illustration }} />
              </View>
              <View style={styles.textContainer}>
                <View style={styles.title}>
                  <TouchableOpacity>
                    <Text>{item.title}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.subTitle}>
                  <Text>{item.subtitle}</Text>
                </View>
              </View>
              <View style={styles.oprationContainre}>
                <View style={styles.oprationItems}>
                  <Image style={{ height: 20, width: 20 }}
                    source={require('../../Assets/Images/comment.png')} />
                </View>
                <View style={styles.oprationItems}>
                  <Image style={{ height: 20, width: 20 }}
                    source={require('../../Assets/Images/like.png')} />
                </View>
                <View style={styles.oprationItems}>
                  <Image style={{ height: 20, width: 20 }}
                    source={require('../../Assets/Images/share.png')} />
                </View>
              </View>
            </View>
          </View>
        ))
      }

    </View>)
  }
}
export default Articles;