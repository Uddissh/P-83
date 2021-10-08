import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Text, View, StyleSheet, Image } from 'react-native';

let post = require("./temp_posts.json");

export default class PostCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.authorContainer}>
            <View style={styles.authorImageContainer}>
              <Image>
                source={require('../assets/profile_img.png')}
                style={styles.profileImg}
              </Image>
            </View>
            <View style={styles.authorNameContainer}>
              <Text style={styles.authorNameText}>
                {this.props.post.author}
              </Text>
            </View>
          </View>
          <Image
            source={require('../assets/post.jpeg')}
            style={styles.postImage}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
