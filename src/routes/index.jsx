import { NavigationContainer } from "@react-navigation/native"
import { BaseRoutes } from "./stack.routes"

export function Routes(){
    return(
        <NavigationContainer>
            <BaseRoutes/>
        </NavigationContainer>
    )
}