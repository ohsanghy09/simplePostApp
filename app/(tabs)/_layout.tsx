// 탭 레이아웃


import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout(){
    return(
        //각 화면에 대한 헤더 제거
        <Tabs screenOptions={{ headerShown: false}}> 
            {/* 탭에서 움직이는 화면들을 부르는 것, 버튼 설정 title: 버튼 이름 */}
            
            {/* home */}
            <Tabs.Screen name="home" options={{ title: "홈", 

                // tabBarLabel: () => null, // 아이콘 이름 제거

                // 아이콘 라벨(이름) 사이즈 크기 설정
                tabBarLabelStyle : {
                    fontSize: 13
                },

                // 아이콘 설정
                tabBarIcon: ({ focused }) => (
                        <Ionicons 
                        name="home"
                        color={focused ? "black" : "gray"} 
                        size={24}  />
                )
                }}
                />


            {/* write */}
            <Tabs.Screen name="write" options={{ title: "글작성",

                // tabBarLabel: () => null, // 아이콘 이름 제거

                // 아이콘 라벨(이름) 사이즈 크기 설정
                tabBarLabelStyle : {
                    fontSize: 13
                },

                // 아이콘 설정
                tabBarIcon: ({ focused }) => (
                        <Ionicons 
                        name="add"
                        color={focused ? "black" : "gray"} 
                        size={24}  />
                )
            }} />



            {/* posts */}
            <Tabs.Screen name="posts" options={{ title: "게시글", 

                // tabBarLabel: () => null, // 아이콘 이름 제거

                // 아이콘 라벨(이름) 사이즈 크기 설정
                tabBarLabelStyle : {
                    fontSize: 13
                },

            
                // 아이콘 설정 
                tabBarIcon: ({ focused }) => (
                        <Ionicons 
                        name="list"
                        color={focused ? "black" : "gray"} 
                        size={24}  />
                )
            }} />
        </Tabs>

    )
}