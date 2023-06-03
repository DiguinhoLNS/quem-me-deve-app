import { ResponseDefault } from "@utils/response/types"

export default function conditionaRender<T>(response: ResponseDefault<T>, data: T | null, lenght?: boolean) {

    const LOADING = response.loading
    const ERROR = !LOADING && response.error
    const DATA = !LOADING && !ERROR && !!response.data && !!data && (!!lenght ? ((response.data.listaResultados as T[]).length > 0 && (data as T[]).length > 0) : true)
    const NODATA = !LOADING && !ERROR && DATA === false

    return { LOADING, ERROR, DATA, NODATA }

}