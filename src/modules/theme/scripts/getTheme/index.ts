import { setTheme } from "@modules/theme/reducers/themeReducer"
import { DispatchType } from "@redux/interfaces"
import local from "@utils/local"

export default function getTheme(dispatch: DispatchType){
    local.get(dispatch, 'themeType')
    local.get(dispatch, 'themePalette')
}