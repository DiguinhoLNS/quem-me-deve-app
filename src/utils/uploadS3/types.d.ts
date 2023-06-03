export interface UploadS3PostResponse {
    bucket: string
    etag: string
    key: string
    location: string
}

export interface UploadS3Response {
    body: {
        postResponse: UploadS3PostResponse
    }
}