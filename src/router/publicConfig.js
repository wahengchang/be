import HomePage from '../Pages/HomePage/Container'
import Logout from '../Pages/Logout/Container'

const config = [
    {
        path: '/',
        title: 'Category',
        component: HomePage
    },
    {
        path: '/logout',
        title: 'Logout',
        component: Logout
    }
]
    
export default config