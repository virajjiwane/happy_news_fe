import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container:{
    // height: "100%",
    padding: SIZES.xSmall,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    // justifyContent: "center",
    ...SHADOWS.medium,
    shadowColor: "#000",
    // flexDirection:"column",
    // alignItems:"center",
    // gap: SIZES.xSmall,
    marginVertical: SIZES.small,
  },
  logoContainer: {
    height: 200,
    // backgroundColor: "#FFF" ,
    // borderRadius: SIZES.medium,
    // justifyContent: "center",
    // alignItems: "center",
  },
  logoImage: {
    borderRadius: SIZES.xSmall,
    height: "100%",
    width: "100%"
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
    textAlign: "right",
    flex: 1,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.tertiary,
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedJob) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
});

export default styles;
