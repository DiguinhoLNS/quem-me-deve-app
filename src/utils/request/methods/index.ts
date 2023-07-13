import createRequestInput from "../scripts/createRequestInput"
import createRequestHeaders from "../scripts/createRequestHeaders"
import { RequestPattern, RequestBody } from "../types"
import { bodyLog, errorLog, requestLog, responseLog } from "../scripts/console"

async function requestGet<T>({authorization, endpoint, params}: RequestPattern){
    const input = createRequestInput(endpoint, params)
    try {
        requestLog('GET', input)

        const response = await fetch(input, {
            method: 'GET',
            headers: createRequestHeaders(authorization)
        })
        const jsonResponse = await response.json()

        responseLog(jsonResponse, input)

        return jsonResponse as T
    } catch (error) {
        errorLog('GET', input, error)

        return null
    }
}

async function requestPost<T>({authorization, endpoint, params, body}: RequestPattern & RequestBody){
    const input = createRequestInput(endpoint, params)
    try {
        requestLog('POST', input)
        bodyLog(body, input)

        const response = await fetch(input, {
            method: 'POST',
            headers: createRequestHeaders(authorization),
            body: JSON.stringify(body)
        })
        const jsonResponse = await response.json()

        responseLog(jsonResponse, input)

        return jsonResponse as T
    } catch (error) {
        errorLog('POST', input, error)

        return null
    }
}

async function requestDelete<T>({authorization, endpoint, params, body}: RequestPattern & RequestBody){
    const input = createRequestInput(endpoint, params)
    try {
        requestLog('DELETE', input)
        bodyLog(body, input)

        const response = await fetch(input, {
            method: 'DELETE',
            headers: createRequestHeaders(authorization),
            body: JSON.stringify(body)
        })
        const jsonResponse = await response.json()

        responseLog(jsonResponse, input)

        return jsonResponse as T
    } catch (error) {
        errorLog('DELETE', input, error)

        return null
    }
}

async function requestPut<T>({authorization, endpoint, params, body}: RequestPattern & RequestBody){
    const input = createRequestInput(endpoint, params)
    try {
        requestLog('PUT', input)
        bodyLog(body, input)

        const response = await fetch(input, {
            method: 'PUT',
            headers: createRequestHeaders(authorization),
            body: JSON.stringify(body)
        })
        const jsonResponse = await response.json()

        responseLog(jsonResponse, input)

        return jsonResponse as T
    } catch (error) {
        errorLog('PUT', input, error)
        
        return null
    }
}

export { requestGet, requestPost, requestDelete, requestPut }