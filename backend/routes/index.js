var express = require('express');
const { login, signup, fetchUser, updateProfile } = require('../helpers/userHelper');
var router = express.Router();
var jwt = require('jsonwebtoken');
var secretKey = "secretuser"


const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    cb(null, Date.now() + '.jpg'); // Set the extension to jpg
  },
});

const upload = multer({ storage: storage });
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

router.get('/profile', verifyLogin, (req, res) => {
  fetchUser(req.user.email).then((result) => {
    console.log(result);
    if (result.success) {
      res.json({ success: true, data: result.data })
    } else {
      res.json({ success: false })
    }
  })

})

router.post('/profile/update', verifyLogin, upload.single('image'), (req, res) => {
  //console.log(req.file.path);
  var imgPath
  if (req.file) {
    imgPath = req.file.path
  }
  updateProfile(req.body,imgPath).then(() => {
    const user = {
      ...req.user,
      name: req.body.name,

    }
    const token = jwt.sign(user, secretKey);
    res.json({ success: true, token: token })
  })
})






module.exports = router;
