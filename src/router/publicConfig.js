import HomePage from '../Pages/HomePage/Container'
import AuthorList from '../Pages/AuthorList/Container'
import AuthorEditor from '../Pages/Author/Container'
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
    path: '/author',
    title: 'Author',
    component: AuthorList
  },
  {
    path: '/author/:id',
    title: 'Author Editor',
    isSidebar: false,
    component: AuthorEditor
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
