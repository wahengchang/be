import HomePage from '../Pages/HomePage/Container'
import Logout from '../Pages/Logout/Container'
import Editor from '../Pages/Editor/Container'

const config = [
    {
        path: '/',
        title: 'Category',
        component: HomePage
    },
    {
        path: '/editor',
        title: 'Editor',
        component: Editor
    },
    {
        path: '/logout',
        title: 'Logout',
        component: Logout
    }
]
    
export default config