const Mock = require('mockjs')
const Random = Mock.Random

var randomFun = (type = 'natural', num1, num2) => {
  let arr = []
  for (let i = 0; i < 100; i++) {
    arr.push(Random[type](num1, num2))
  }
  return arr
}
console.log(Random)
// 首页
export const dataStats = Mock.mock({
  'userCount|1': randomFun('natural', 1, 100),
  'orderCount|1': randomFun('natural', 1, 100),
  'adminCount|1': randomFun('natural', 1, 100),
  'allUserCount|1': randomFun('natural', 1, 100),
  'allOrderCount|1': randomFun('natural', 1, 100),
  'allAdminCount|1': randomFun('natural', 1, 100)
})

export const dataList = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'sevenDay|5': [Random.date()],
  'sevenDate|3': [randomFun('natural', 1, 50), randomFun('natural', 1, 50), randomFun('natural', 1, 50)]
})

// 用户列表
export const userList = Mock.mock({
  'data|10': [
    {
      'date|1': randomFun('date'),
      'name|1': randomFun('cname'),
      'address|1': randomFun('province')
    }
  ]
})

// 商品列表
export const shopList = Mock.mock({
  'restaurant|10': [{
    'name|1': randomFun('cname'),
    'address|1': randomFun('province'),
    'desc|1': randomFun('cword', 1, 5),
    'description|1': randomFun('cword', 1, 5),
    'id|+1': 1,
    'phone|1': randomFun('integer', 100000, 10000000),
    'rating|1': randomFun('natural', 1, 100),
    'recent_order_num|1': randomFun('natural', 1, 100),
    'category|1': randomFun('cword', 1, 5),
    'image_path|1': [Random.dataImage()]
  }]
})

// 'Boolean': Random.boolean, // 随机生成布尔类型
// 'Natural': Random.natural(1, 100), // 随机生成1到100之间自然数
// 'Integer': Random.integer(1, 100), // 生成1到100之间的整数
// 'Float': Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
// 'Character': Random.character(), // 生成随机字符串,可加参数定义规则
// 'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
// 'Range': Random.range(0, 10, 2), // 生成一个数组，数组元素从0开始到10结束，间隔为2
// 'Date': Random.date(), // 生成一个随机日期,可加参数定义日期格式，默认yyyy-mm-dd
// 'Image1': Random.image(Random.size, '#02adea', '#fff','png','Hello'), // Random.size表示将从size数据中任选一个数据，生成Random.size指定大小的，背景为'#02adea'的，前景色为'#fff'的，格式为'png'的，内容为'Hello'的图片。
// 'Image2':Random.dataImage('200x100', 'Hello Mock.js!'),//只设置大小
// 'Color': Random.color(), // 生成一个颜色随机值
// 'Paragraph':Random.paragraph(2, 5), //生成2至5个句子的文本
// 'Name': Random.name(), // 生成姓名
// 'Url': Random.url(), // 生成url地址
// 'Address': Random.province() // 生成地址
