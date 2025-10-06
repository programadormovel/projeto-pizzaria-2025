import {Routes, Route} from 'react-router-dom'
import App from './App'
import Login from './pages/login/Login'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/principal" 
                element={<App />} />
            <Route path="/"
                element = {<Login />} />
        </Routes>
    )
}

export default AppRoutes
