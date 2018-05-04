import Login from './Pages/Login/Container'
import HomePage from './Pages/HomePage/Container'

const config = [
    {
        path: '/',
        title: 'Home',
        component: HomePage
    },
    {
        path: '/login',
        title: 'Login',
        component: Login
    }
]
    
export default config