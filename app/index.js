import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, images, SIZES, icons } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import useFetch from "../hook/useFetch";

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

const Home = () => {
  const router = useRouter();
  const {data, isLoading, error, refetch} = useFetch({});

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          // headerLeft:()=>(
          //   <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
          // ),
          // headerRight:()=>(
          //   <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
          // ),
          headerTitle: "",
          headerShown: false,
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            refetch();
          }
        }}
        scrollEventThrottle={400}
      >
        <View
          style={{ flexHorizontal: "row", backgroundColor: COLORS.lightWhite }}
        >
          <Image
            source={require("../assets/images/logo.png")}
            style={{ flex: 1, height: 60, width: 60, marginTop: SIZES.large }}
          />
        </View>

        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.medium,
            backgroundColor: COLORS.lightWhite,
          }}
        >
          <Welcome 
            data={data} 
            isLoading={isLoading} 
            error={error}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
