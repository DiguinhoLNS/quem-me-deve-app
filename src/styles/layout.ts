import { Dimensions, Platform, ViewStyle } from "react-native"
import { elevationPattern } from "./base"

export const marginHorizontal = 16

export const tabbarHeight = 0

export const width = Dimensions.get("window").width
export const height = Dimensions.get("window").height

export const contentWidth = width - (marginHorizontal * 2)

export const logoMarginHorizontal = width - (marginHorizontal * 6)

export const setElevation = (elevation: number) => {
    return {
        ...elevationPattern,
        elevation,
    }
}

export const elevation = {
    elevation1: setElevation(1),
    elevation2: setElevation(2),
    elevation3: setElevation(3),
    elevation4: setElevation(4),
    elevation5: setElevation(5),
    elevation6: setElevation(6),

    tabbar: {
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowColor: '#000000',
        elevation: 4,
    },

    set: setElevation,
}

export const fab: ViewStyle = {
    position: 'absolute', 
    bottom: tabbarHeight + (Platform.OS === 'ios' ? 48 : 16),
    right: 16,
}

export const dialog: ViewStyle = {
    borderRadius: 16,
    paddingBottom: 16,
}

const layout = {
    marginHorizontal, width, height, contentWidth, logoMarginHorizontal, elevation, dialog, tabbarHeight
} 

export default layout