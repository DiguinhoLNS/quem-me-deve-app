import { DispatchType } from "@redux/interfaces"

export default function handleFunction(dispatch: DispatchType, execFunction: () => void){
    try {
        dispatch(execFunction() as any)
    } catch (error) {
        execFunction()
    }
}