import React, { PropsWithChildren } from "react"
import DropShadow from "react-native-drop-shadow"

const Shadow: React.FC <PropsWithChildren> = ({ children }) => {

    return(

        <DropShadow
            style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 2.2,
            }}
        >{children}</DropShadow>

    )

}

export default Shadow