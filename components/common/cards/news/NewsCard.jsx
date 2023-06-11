import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Moment from 'moment';

import styles from "./newscard.style";

const NewsCard = ({ news }) => {
  const router = useRouter();
  return (
    <TouchableOpacity activeOpacity={1}
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
            <Text style={styles.jobName}>{news.source.name}</Text>
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.location}>{news.title}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.companyName}>{Moment(news.publishedAt).local().format('dddd MMMM d, hA')}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;
