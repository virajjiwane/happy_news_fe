import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./newscard.style";

const NewsCard = ({ news }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={{
            uri: news.urlToImage,
          }}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoWrapper}>
          <Text style={styles.location}>{news.title}</Text>
        </View>
      </View>
    </View>

    // <View style={styles.container}>
    //   <View style={styles.logoContainer}>
    //     <Image
    //       style={styles.logoImage}
    //       source={{
    //         uri: news.urlToImage,
    //       }}
    //     />
    //   </View>

    //   <Text>{news.title}</Text>
    // </View>
  );
};

export default NewsCard;
