var express = require('express');
const { login, signup, fetchUser } = require('../helpers/userHelper');
var router = express.Router();
var jwt = require('jsonwebtoken');
var secretKey = "secretuser"
// router.get('/',(req,res)=>{
// res.json("helo")
// })
const verifyLogin = (req, res, next) => {
  const token = req.header('Authorization');
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.user = user;
    next();
  });

}
router.get('/auth', verifyLogin, (req, res) => {
  res.json({ success: true, data: req.user })
})

router.post('/signup', (req, res) => {
  console.log(req.body);
  signup(req.body).then((result) => {
    console.log(result);
    res.json({ success: true })
  }).catch((msg) => {

    res.json({ success: false })
  })
})

router.post('/login', (req, res) => {
  console.log(req.body);
  login(req.body).then((result) => {
    if (result.success) {
      console.log(result);
      const user = {
        name: result.data.name,
        email: req.body.email,
        role: "user"
      }
      const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
      console.log(token);



      res.json({ success: true, data: result.data, token: token })
    } else {

      res.json({ success: false })
    }
  })
})

router.get('/editprofile', verifyLogin, (req, res) => {
  fetchUser(req.user.email).then((result) => {
    if (result.status) {
      res.json({ success: true, data: result.data })
    } else {
      res.json({ success: false })
    }
  })

})






module.exports = router;
