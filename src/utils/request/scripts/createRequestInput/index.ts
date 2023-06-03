export default function createRequestInput(endpoint: string, params?: string){
    return `${endpoint}${params ?? ''}`
}