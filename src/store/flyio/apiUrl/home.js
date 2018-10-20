const domain = 'https://daoplanet.zengqi.me/api'

const API = {
  // 公共服务
  'user.register': {
    url: `${domain}/user/register`,
    method: 'post'
  },
  'user.login': {
    url: `${domain}/user/tokens`,
    method: 'post'
  },
  'user.profile': {
    url: `${domain}/user/profile`,
    method: 'get'
  },
  'organizations.list': {
    url: `${domain}/organizations`,
    method: 'get'
  },
  'organizations.create': {
    url: `${domain}/organizations`,
    method: 'post'
  }
}

export default API
