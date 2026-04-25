import { Screen } from "@modules/app/interfaces/Screen"
import { setScreen } from "@modules/app/reducers/appReducer"
import { DispatchType } from "@redux/interfaces"

export default function createScreen(dispatch: DispatchType, screen?: Partial<Screen>){
    const newScreen: Screen = {
        statusBarColor: screen?.statusBarColor ?? '#FFFFFF',
        backgroundColor: screen?.backgroundColor ?? '#FFFFFF',
        disableBottomEdge: screen?.disableBottomEdge ?? false
    }

    dispatch(setScreen(newScreen))

    return newScreen
}