import { Theme } from "@styles/themes/types"

export default function createChipTheme(theme: Theme){
    return {
        backgroundColor: theme.secondary,
        color: theme.primary,
    }
}