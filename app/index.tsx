// 전체 기본 화면

import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return(

    // 화면 전환, 기본화면으로는 pathname으로 설정
  <Redirect href={{
    pathname : "/(tabs)/home"
      }} 
    />  
  );
}
