const users = require('../utils/users')

const getLogin = (req,res) => {
    const {email, password} = req.query
    const user = users.find(user=> user.email === email && user.password === password)
    res.writeHead(200, {"Content-Type":"application/json"})
    let resObj = {}
    if (user) {
        resObj = {access:true}
    } else {
        resObj = {access:false}
    }
    res.end(JSON.stringify(resObj))
    return res
}

module.exports = getLogin