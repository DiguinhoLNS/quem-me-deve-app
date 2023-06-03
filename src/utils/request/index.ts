import { requestGet, requestPost, requestDelete, requestPut } from "./methods"

const request = {
    get: requestGet,
    post: requestPost,
    delete: requestDelete,
    put: requestPut,
}

export default request
export { requestGet, requestPost, requestDelete, requestPut }