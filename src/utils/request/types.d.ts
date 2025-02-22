export type RequestMethods = 'GET' | 'POST' | 'DELETE' | 'PUT'

export interface RequestPattern {
    headers?: HeadersInit_
    authorization?: string
    endpoint: string
    params?: string
}

export interface RequestBody {
    body: any
}