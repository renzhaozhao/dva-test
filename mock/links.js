module.exports = {
  'GET /api/links': (req, res) => {
    setTimeout(() => {
      res.json([{
        title: '计数器',
        link: 'count'
      }, {
        title: '用户管理',
        link: 'users'
      }])
    }, 200)
  }
}
