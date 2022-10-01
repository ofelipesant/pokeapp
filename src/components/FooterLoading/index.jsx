import { ActivityIndicator , View, StyleSheet} from "react-native"

export default function FooterLoading(props){

    const { loading } = props

    if(!loading) return
    
    return(
        <View style={style.loading}>
            <ActivityIndicator
            size={25}
            color="#000"
            />
        </View>

    )
}

const style = StyleSheet.create({
    loading: {
        padding: 20,
    }
})