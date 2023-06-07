import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import styles from "./welcome.style";
import { useRouter } from "expo-router";
import { COLORS } from "../../../constants";
import useFetch from "../../../hook/useFetch";
import NewsCard from "../../common/cards/news/NewsCard";

const Welcome = () => {
  const router = useRouter();
  const {data, isLoading, error} = useFetch({});
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        data.Items.map((item) => <NewsCard key={item.epoch_in_milliseconds} news={item}/>)
      )}
    </View>
  );
};

export default Welcome;
