// posts

import {Text, View, FlatList, StyleSheet, Dimensions} from "react-native"

import { useEffect, useState } from "react"; // useEffect 라이프 사이클, useState 배열 함수 설정 import



export default function Posts() {

    // 배열 설정 setPosts (setPosts는 이전 상태값과 비교해서 같으면 렌더링 금지, 같지 않으면 렌더링 실행)
    const [posts, setPosts] = useState<{ id: number; title: string }[]>([]);


    // 화면이 시작할 때 실행하는 라이프사이클(useEffect)
    useEffect( () => {

        // 외부에서 json 데이터를 받아 배열에 넣는 함수
        const fetchPosts = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data); // 렌더링 필터 배열
        }

        // 함수 실행
        fetchPosts();
    }, []);



    // 리턴 필드
    return(

        // 화면 View의 style은 전체 함수 밖의 styles.postContainer에 의해 통제
        <View style={styles.postContainer}>
        
        {/* posts.map과 비슷한 것, 데이터를 반복해서 렌더링해주는 도구  */}
        <FlatList

          data={posts}  // 사용할 데이터

          // keyExtractor은 item.id.toString()값만 받으므로 괄호 없어도 됨.
          keyExtractor={item => item.id.toString()} // 키 추출 toString()

          // renderIten은 item 객체 자체를 받으므로 ({})사용 {}만 사용 시 함수 바디로 착각
          renderItem={({item}) => (

            // style={styles.postItem}의 설정이 박스처럼 보이게 함, View는 요소를 하나로 묶는 역할
            <View style={styles.postItem}>
            <Text style={styles.postId}>{item.id}번 게시물</Text>
            <Text style={styles.postTitle}>{item.title}</Text>
            </View>

          ) } //아이템 추출
        
          // FlatList 안에 아이템들에 대한 전체적인 설정(ex. 배치)
          contentContainerStyle={styles.listWrap}

        /> 
        {/* FlatList */}
        
        
        </View>
    )

    
} // posts

// Dimensions.get('window')는 렌더링 되는 화면 영역 정보 반환 .width니까 가로 길이
const WIDTH = Dimensions.get('window').width

// styles 변수 선언
const styles = StyleSheet.create({

    // 전체 화면
    postContainer : {
        flex : 1,
        alignItems : "center" // 가로축 center
    },

    // FaltList 전체 Item 설정
    listWrap : {
        width : WIDTH - 16, // 아이템들이 전체 가로 값에서 빼서 차지하는 값
        paddingTop : 70, // 윗쪽 여백
        paddingBottom : 16, // 아래 여백
        paddingHorizontal : 6 // 좌우 공간 여백
        
    },

    // id 값 설정
    postId : {
        fontSize : 16,
        fontWeight : "bold"
    },

    // title 값 설정
    postTitle : {
        fontSize : 16,
        fontWeight : "bold"
    },

    // FlatList 개별 Item 설정, 화면에 박스 생성
    postItem : {
        backgroundColor : '#fff',
        padding : 16,   // 안쪽 여백
        borderRadius : 10, // 박스의 가장자리 깎는 값
        marginBottom : 10,   // 아래 공백
        height : 100, // 아이템 높이
        elevation: 5    // 그림자의 높이 정도(떠 있는 거라고 생각하면 됨)


        // 이 옵션은 ios에서 사용
        // shadowOffset : { // 그림자 너비, 높이
        //     width : 0,
        //     height : 3,
        // },
        // shadowOpacity : 0.25,   // 그림자 투명도
        // shadowRadius : 3.84,    // 그림자 퍼지는 반경
        
        
    }
})