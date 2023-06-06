import { Screen } from "@modules/app/interfaces/Screen"
import { setScreen } from "@modules/app/reducers/appReducer"
import { DispatchType } from "@redux/interfaces"

export default function createScreen(dispatch: DispatchType, screen?: Partial<Screen>){
    const styles = {
        statusBarColor: screen?.statusBarColor ?? '#FFFFFF',
        navigatorColor: screen?.navigatorColor ?? '#FFFFFF',
        navigationBarColor: screen?.navigationBarColor ?? '#FFFFFF'
    }

    dispatch(setScreen(styles))

    return styles
}