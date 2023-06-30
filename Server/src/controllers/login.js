const users = require('../utils/users')

const getLogin = async (req,res) => {
    const {email, password} = req.query
    
    try {
        const user = await users.find(user=> user.email === email && user.password === password)
        let resObj = {}
        if (user) {
            resObj = {access:true}
            res.status(200).json(resObj)  
        } else {
            resObj = {access:false}
            res.status(401).json(resObj)  
        }
        return res
      } catch (error) {
        return res.status(error.response.status).send(error.message);
      }
    
}

module.exports = getLogin