import { ResponseDefault } from "@utils/response/types"

export default function conditionaRender<T>(response: ResponseDefault<T>, data: T | null, lenght?: boolean){

    const LOADING = response.loading
    const ERROR = !LOADING && response.error
    const DATA = !LOADING && !ERROR && (!!response.data && !!data) && (!!lenght ? (data as any).length > 0 : true)
    const NODATA = !LOADING && !ERROR && !DATA

    return { LOADING, ERROR, DATA, NODATA }

}