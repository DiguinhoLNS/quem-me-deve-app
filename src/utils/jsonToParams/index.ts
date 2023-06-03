export function jsonToParams(obj: { [key: string]: string | number }){
    let params = ''
    for (let arr of Object.entries(obj)){
        params += `${arr[0]}=${arr[1]}&`
    }
    return params.slice(0, -1)
}