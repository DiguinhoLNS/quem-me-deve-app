import localGetUser from "./localGetUser"
import localSetUser from "./localSetUser"
import localRemoveUser from "./localRemoveUser"

const localUser = {
    get: localGetUser,
    set: localSetUser,
    remove: localRemoveUser,
}

export default localUser