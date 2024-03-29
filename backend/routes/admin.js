var express = require('express');
const { login, getUsers, findUser, updateUser, deleteUser } = require('../helpers/adminHelper');
const { signup } = require('../helpers/userHelper');
var router = express.Router();
var jwt = require('jsonwebtoken');
var secretKey = "secretadmin"

const verifyLogin = (req, res,next) => {
    const token = req.header('Authorization');

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
router.get("/", verifyLogin, (req, res) => {
    getUsers().then((users) => {
        res.json({ success: true, data: users })
    })

})

router.post('/login', (req, res) => {
    login(req.body).then((result) => {
        if (result.success) {
            const user = {
                name: "admin",
                role: "admin"
            }
            const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
            res.json({ success: true, data: { name: "admin" }, token: token })

        } else {

            res.json({ success: false })

        }
    })

})




router.post('/create', verifyLogin, (req, res) => {
    signup(req.body).then((result) => {
        res.json({ success: true })

    }).catch((msg) => {

        res.json({ success: false, msg: msg })

    })
})

router.get('/edit/:id',verifyLogin,(req,res)=>{
    // console.log(req.params);
    
    findUser(req.params.id).then((user)=>{
  
      console.log(user);
      res.json({success:true,data:user})
    })
   
  })

router.post('/update', verifyLogin, (req, res) => {
    console.log(req.body);
    updateUser(req.body).then(() => {
        res.json({ success: true })

    }).catch((msg) => {
        res.json({ success: false, msg: msg })
    })
})

router.get('/delete', (req, res) => {
    deleteUser(req.query.id).then(() => {
        res.json({ success: true })

    })
})

router.post('/logout', (req, res) => {

})

module.exports = router;