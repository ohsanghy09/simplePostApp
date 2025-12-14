// write

import {Text, View} from "react-native"

export default function Write() {
    return(
        //flex는 컴포넌트가 차지하는 비율 : 높을 수록 많은 공간 차지
        // justifyContent : 주축에서의 위치(세로)
        // alignItems : 주축의 반대편(가로)에서의 위치
        // justify(세로)는 Content를 사용, allign(가로)는 Items를 사용

        <View style={{ flex: 1, justifyContent: "center", alignItems:"center"}}>
        <Text>write</Text>
        </View>
    )
}