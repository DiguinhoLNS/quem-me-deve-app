import { Dimensions } from "react-native"

export const marginDefault = 16

export const width = Dimensions.get("window").width
export const height = Dimensions.get("window").height

export const contentWidth = width - (marginDefault * 2)

const layout = {
    marginDefault, width, height, contentWidth
} 

export default layout