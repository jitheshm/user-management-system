var express = require('express');
const { login, signup } = require('../helpers/userHelper');
var router = express.Router();
var jwt = require('jsonwebtoken');
var secretKey="secret"
// router.get('/',(req,res)=>{
// res.json("helo")
// })

router.post('/api/signup', (req, res) => {
  console.log(req.body);
  signup(req.body).then((result) => {
    console.log(result);
    res.json({ success: true })
  }).catch((msg)=>{
    
    res.json({ success: false })
  })})

  router.post('/api/login', (req, res) => {
    console.log(req.body);
    login(req.body).then((result) => {
      if (result.success) {
        console.log(result);
        const user={
          name:result.data.name,
          role:"user"
        }
        const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
        console.log(token);
        
        res.json({success:true,data:result.data,token:token})
      } else {
        
        res.json({success:false})
      }
    })
  })

  
  
  


module.exports = router;
