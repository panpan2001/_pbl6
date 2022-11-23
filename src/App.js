import 'react-toastify/dist/ReactToastify.css'
import { React } from 'react'
import { ToastContainer } from 'react-toastify'
import RoutesComponent from 'routes'
import './_setting.scss'
function App() {
    return (
        <div className="App">
            <RoutesComponent />
            <ToastContainer />
        </div>
    )
}

export default App
