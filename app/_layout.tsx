// 전체 기본화면 설정
import { Stack } from "expo-router";

export default function RootLayout() {
  //전체 기본화면의 헤더 제거
  return <Stack screenOptions={{ headerShown: false}}/>;
}
