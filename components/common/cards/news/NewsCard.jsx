import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./newscard.style";

const NewsCard = ({ news }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(
          (href = {
            pathname: "/news-details",
            params: { url: encodeURIComponent(news.url) },
          })
        );
      }}
    >
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
    </TouchableOpacity>
  );
};

export default NewsCard;
