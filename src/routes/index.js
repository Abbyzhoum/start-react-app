import {
  Login,
  NotFound,
  Detail,
  Setting
} from '../views'

const BasicRoute = [{
  path: '/Login',
  component: Login,
},{
  path: '/NotFound',
  component: NotFound,
}, {
  path:'/admin',
  children: HomeRoute
}]

const HomeRoute = [{
  path: '/home/detail',
  component: Detail,
  exact: true,
},{
  path: '/home/setting',
  component: Setting,
}]

export default {
  BasicRoute,
  HomeRoute
}