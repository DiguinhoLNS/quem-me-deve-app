//import { S3_ACCESS_KEY, S3_BUCKET, S3_REGION, S3_SECRET_KEY } from "@env"
//@ts-ignore
import { RNS3 } from 'react-native-aws3'
import info from "../info"
import { UploadS3Response } from "./types"

export default async function uploadS3(uri: string, name: string, prefix: string){
    try {
        const bucket = ''
        const region = ''
        const accessKey = ''
        const secretKey = ''
        
        let fileExtension = uri.substring(uri.lastIndexOf('.') + 1)

        if(fileExtension === 'jpg'){
            fileExtension = 'jpeg'
        }

        const file = {
            uri: uri,
            name: name,
            type: `image/${fileExtension}`,
        }

        const options = {
            keyPrefix: prefix,
            bucket,
            region,
            accessKey,
            secretKey,
            successActionStatus: 201
        }

        const response: UploadS3Response = await RNS3.put(file, options)
        info.data('uploadS3',response)

        if(!!response && !!response.body.postResponse.location) return response.body.postResponse
        return null
    } catch (error) {
        info.error('uploadS3',error)
        return null
    }
}