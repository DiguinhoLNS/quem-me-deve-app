import { SHOW_RESPONSE_LOG } from "@config/index"
import { headerLog } from "../console"

export default function createRequestHeaders(endpoint: string, auth?: string){
    let newHeaders = new Headers()
    
    newHeaders.append('Content-Type', 'application/json')
    newHeaders.append('Accept', 'application/json')

    if(auth){
        newHeaders.append('Authorization', `Bearer ${auth}`)
    }

    if(SHOW_RESPONSE_LOG.HEADER){
        headerLog(newHeaders, endpoint)
    }

    return newHeaders
}