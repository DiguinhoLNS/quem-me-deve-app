import { SHOW_LOG } from "../../config"

function log(initiator: string, message: any){
    SHOW_LOG.LOG && console.log(`LOG ${initiator} -`,message)
}

function dataLog(initiator: string, message: any){
    SHOW_LOG.DATA && console.log(`DATA ${initiator} -`,message)
}

function warnLog(initiator: string, message: any){
    SHOW_LOG.WARN && console.warn(`WARN ${initiator} -`,message)
}

function errorLog(initiator: string, message: any){
    SHOW_LOG.ERROR && console.log(`ERROR ${initiator} -`,message)
}

const info = { 
    log,
    data: dataLog,
    warn: warnLog,
    error: errorLog, 
}

export default info