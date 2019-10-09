const Mock = require('mockjs')
const Random = Mock.Random

export const dataStats = Mock.mock({
  'userCount': Random.natural(1, 50),
  'orderCount': Random.natural(1, 50),
  'adminCount': Random.natural(1, 50),
  'allUserCount': Random.natural(1, 50),
  'allOrderCount': Random.natural(1, 50),
  'allAdminCount': Random.natural(1, 50)
})

export const dataList = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'sevenDay|5': [Random.date()],
  'sevenDate': [
    [Random.int(1, 50), Random.int(1, 50), Random.int(1, 50), Random.int(1, 50), Random.int(1, 50)],
    [Random.int(1, 50), Random.int(1, 50), Random.int(1, 50), Random.int(1, 50), Random.int(1, 50)],
    [Random.int(1, 50), Random.int(1, 50), Random.int(1, 50), Random.int(1, 50), Random.int(1, 50)]
  ]
})
