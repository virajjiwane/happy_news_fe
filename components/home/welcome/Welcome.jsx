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
        data.Items.map((item) => <Text key={item.epoch_in_milliseconds}>{item.title}</Text>)
      )}
    </View>
  );
};

export default Welcome;
