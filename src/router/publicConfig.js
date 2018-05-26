import HomePage from '../Pages/HomePage/Container'
import Logout from '../Pages/Logout/Container'
import StoryEditor from '../Pages/StoryEditor/Container'
import StoryList from '../Pages/StoryList/Container'

const config = [
  {
    path: '/',
    title: 'Category',
    component: HomePage
  },
  {
    path: '/storys/:id',
    title: 'Story Editor',
    isSidebar: false,
    component: StoryEditor
  },
  {
    path: '/storys',
    title: 'Storys',
    component: StoryList
  },
  {
    path: '/logout',
    title: 'Logout',
    component: Logout
  }
]

export default config
