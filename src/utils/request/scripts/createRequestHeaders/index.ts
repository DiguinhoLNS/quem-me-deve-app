export default function createRequestHeaders(auth?: string){
    let newHeaders = new Headers()
    
    newHeaders.append('Content-Type', 'application/json')
    newHeaders.append('Accept', 'application/json')

    if(auth) newHeaders.append('Authorization', auth)

    return newHeaders
}