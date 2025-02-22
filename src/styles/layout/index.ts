import { Dimensions } from "react-native"

export const marginHorizontal = 16

export const width = Dimensions.get("window").width
export const height = Dimensions.get("window").height

export const contentWidth = width - (marginHorizontal * 2)

const layout = {
    marginHorizontal, width, height, contentWidth
} 

export default layout