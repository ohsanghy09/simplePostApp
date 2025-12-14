// 전체 기본 화면

import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return(
  <Redirect href={{
    pathname : "/(tabs)/home"
      }} 
    />  
  );
}
