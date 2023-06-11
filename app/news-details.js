import { useLocalSearchParams, Stack } from "expo-router";
import React from "react";
import { Text, ActivityIndicator, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import { COLORS } from '../constants/'

const NewsDetail = () => {
  const params = useLocalSearchParams();
  const { url } = params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible:false,
          // headerLeft:()=>(
          //   <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
          // ),
          // headerRight:()=>(
          //   <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
          // ),
          headerTitle:"",
          headerTintColor:COLORS.primary,
        }}
      />
    <WebView
      source={{ uri: url }}
      style={{ flex: 1 }}
      renderLoading={()=>{<ActivityIndicator size="large" color={COLORS.primary} />}}
      startInLoadingState={true}
    />
    </SafeAreaView>
  );
};

export default NewsDetail;
