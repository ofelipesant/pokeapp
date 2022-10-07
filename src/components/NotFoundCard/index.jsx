import {View, Text, Button} from 'react-native'

export default function NotFoundCard(props){
    const { navigation } = props

    return(
        <View>
            <Text>OPS!</Text>
            <Text>Não encontramos resultados para a sua pesquisa. Volte para a página inicial e tente novamente.</Text>
            <Button 
            title="Voltar para a Home"
            onPress={() => navigation.navigate("home")}
            />
        </View>
    )
}