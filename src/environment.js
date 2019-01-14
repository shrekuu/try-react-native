// 生产服务器 prod
const prod = {
  version: '1.0.0',
  production: true
}

// 线上测试服务器 staging
const staging = Object.assign({}, prod, {
  production: false
})

// 环境切换, prod 或 staging
const environment = staging

export default environment
