const users = require('../utils/users');
 

const login = (req,res) => {
    
    const {email, password} = req.query ; 
    const userFound = users.find((user) => user.email === email && user.password === password)
    
    //  userFound 
    //  ? res.status(200).json({acces:true})
    //  : res.status(404).json({acces:false})
    
    if(userFound) return res.status(200).json({acces: true })
    return res.status(404).json({acces: false})    


}


module.exports = {

  login 

};