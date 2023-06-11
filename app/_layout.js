import { Stack } from "expo-router";
import { useFonts } from 'expo-font';

const Layout = ()=> {
  const [loaded] = useFonts({
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return <Stack />;
}

export default Layout;