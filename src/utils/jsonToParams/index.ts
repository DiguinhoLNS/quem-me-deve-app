export function jsonToParams(obj: { [key: string]: string | number | Boolean | null }){
    let params = ''
    for (let arr of Object.entries(obj)){
        if(arr[1] === null) continue
        
        params += `${arr[0]}=${arr[1]}&`
    }
    return params.slice(0, -1)
}