import React from 'react'
import 'moment/locale/pt-br'
import AppProvider from '@modules/app/components/Provider'
import AppRequests from '@modules/app/components/Requests'
import Routes from './routes'

const App: React.FC = () => {

    return(

        <AppProvider>
            <Routes />
                            
            <AppRequests />
        </AppProvider>

    )

}

export default App