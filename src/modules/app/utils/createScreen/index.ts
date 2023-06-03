import { Screen } from "@modules/app/interfaces/Screen"
import { setScreen } from "@modules/app/reducers/appReducer"
import { DispatchType } from "@redux/interfaces"
import { wrapperColor } from "@styles/themes"

export default function createScreen(dispatch: DispatchType, screen?: Partial<Screen>){
    const styles = {
        statusBarColor: screen?.statusBarColor ?? '#FFFFFF',
        navigatorColor: screen?.navigatorColor ?? wrapperColor,
        navigationBarColor: screen?.navigationBarColor ?? '#FFFFFF'
    }

    dispatch(setScreen(styles))

    return styles
}