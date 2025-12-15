// posts

import {Text, View} from "react-native"

export default function Posts() {

    // 변수 필드
    const posts: { id: number; title: string}[] = [
        {id : 1, title : "게시글 1"},
        {id : 2, title : "게시글 2"},
        {id : 3, title : "게시글 3"},
        {id : 4, title : "게시글 4"},
        {id : 5, title : "게시글 5"},
        {id : 6, title : "게시글 6"},
        {id : 7, title : "게시글 7"},
        {id : 8, title : "게시글 8"},
        {id : 9, title : "게시글 9"},
        {id : 10, title : "게시글 10"}
    ];




    // 리턴 필드
    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems:"center"}}>
        
        {/* posts.map사용으로 나열 내부 객체 : post */}
        
        {posts.map((post) =>
            <Text key={post.id}>{post.title}</Text>
         )
        }
        
        
        </View>
    )
}