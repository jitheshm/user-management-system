const db = require('../config/dbConnection')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { ObjectId } = require('mongodb');
module.exports = {
    signup: (data) => {
        return new Promise((resolve, reject) => {
            db.get().collection('user').findOne({ email: data.email }).then((result) => {
                if (!result) {
                    bcrypt.hash(data.password, saltRounds).then(function (hash) {
                        // Store hash in your password DB.
                        data.password = hash;
                        db.get().collection('user').insertOne(data).then((result) => {
                            resolve("success")
                        })
                    });
                } else {
                    reject("email is already registered")
                }
            })

        })
    },
    login: (data) => {
        return new Promise((resolve, reject) => {
            db.get().collection('user').findOne({ email: data.email }).then((result) => {
                if (result != null) {
                    bcrypt.compare(data.password, result.password).then((res) => {
                        if (res) {
                            resolve({
                                success: true, data: {
                                    name: result.name

                                }
                            })
                        } else {
                            resolve({ success: false })
                        }
                    });
                } else {
                    resolve({ success: false })
                }
            })
        })
    },
    fetchUser:(email)=>{
        return new Promise((resolve, reject) => {
            db.get().collection('user').findOne({email:email}).then((result)=>{
                if(result){  
                    const user={
                        name:result.name,
                        email:result.email,
                        id:result._id
                    }
                    resolve({success:true,data:user})
                }

            })
        })
    },
    updateProfile: (data,imgPath) => {
        return new Promise(async(resolve, reject) => {
            console.log(data);
            if(imgPath){
                var imageUrl = `http://localhost:3000/${imgPath.replace('public/', '')}`;
            }
            //console.log(imageUrl);
            if(data.password!=""){
                var hash=await bcrypt.hash(data.password, saltRounds)
                data.password=hash
            }
            console.log(data);
            db.get().collection('user').findOne({ email: data.email, _id: { "$ne": new ObjectId(data.id) } }).then((result) => {
                if (!result) {
                    db.get().collection('user').updateOne({ _id: new ObjectId(data.id) }, {
                        $set: {
                            name: data.name,
                            email: data.email,
                            ...(imageUrl)?{img:imageUrl}:{},
                            ...(data.password!="")?{password:data.password}:{}
                            
                        }
                    }).then((res) => {
                        console.log(res);
                        resolve()
                    })
                }
                else {
                    reject("email is already registered")
                }


            })
        })
    },
}