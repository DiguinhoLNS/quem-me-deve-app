import { captureScreen } from 'react-native-view-shot'
import { setScreenshotLoading } from '@modules/app/reducers/appReducer'
import { DispatchType } from '@redux/interfaces'
import info from '@utils/info'
import share from '@utils/share'
import sleep from '@utils/sleep'

export default async function getScreenshot(dispatch: DispatchType, showShare?: boolean){
    try {
        dispatch(setScreenshotLoading(true))

        await sleep(300)

        const url = await captureScreen({format: 'jpg', quality: 0.8 })

        if(!!url){
            if(showShare){
                await share.social({ url, type: 'image/jpeg' })
            }
            return url
        }else throw new Error('getScreenshot: uri is null')
    } catch (error) {
        info.error('getScreenshot',error)
        return null
    } finally {
        dispatch(setScreenshotLoading(false))
    }
}