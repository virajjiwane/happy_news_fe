import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { WebView } from "react-native-webview";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  const { url } = params;
  return <WebView source={{ uri: url }} style={{ flex: 1 }} />;
};

export default NewsDetail;
