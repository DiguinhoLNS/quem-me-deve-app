import { NavigationProp } from "@react-navigation/native"

export default function resetNavigation(navigation: NavigationProp<any>, name: string | undefined = 'home'){
    navigation.reset({
        index: 0,
        routes: [{ name }],
    })
}