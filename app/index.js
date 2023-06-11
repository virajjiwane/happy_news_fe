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

const Home = () => {
  const router = useRouter();

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{ flexHorizontal: "row", backgroundColor: COLORS.lightWhite }}
        >
          <Image
            source={require("../assets/images/logo.png")}
            style={{ flex: 1, height: 100, width: 100, marginTop: SIZES.large }}
          />
        </View>

        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.medium,
            backgroundColor: COLORS.lightWhite,
          }}
        >
          <Welcome />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
