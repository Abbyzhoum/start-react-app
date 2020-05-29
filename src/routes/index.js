import {
  Login,
  NotFound,
  Detail,
  Setting
} from '../views'

export const BasicRoute = [{
  path: '/login',
  component: Login
},{
  path: '/404',
  component: NotFound,
}]

export const HomeRoute = [{
  path: '/home/detail',
  component: Detail,
  title: '详情页面',
  exact: true
},{
  path: '/home/setting',
  component: Setting,
  title: '设置页面'
}]
