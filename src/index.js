const express = require('express')
require('./db/mongoose') //runs the file
const app = express()
const router = require('./router/user')
const port = process.env.PORT || 3000
app.use(express.json())
app.use(router)
//Converts incoming json to object
app.listen(port,() => {
    console.log('Server up and running')
})

// app.post('/users',async (req, res) => {
//     const user = new User(req.body)
//     console.log(user)
    
//     try{
//         await user.save()
//         res.status(201).send(user)
//     }
//     catch(e){
//     res.status(400).send(e)
//     }
//     // user.save().then(()=>{
//     //          res.send(user)
//     // }).catch((e)=>{
//     //        res.status(400).send(e)

//     // })
// })

// app.get('/users',async (req,res) => {
//     try{
//         const user = await User.find({})
//         res.send(500)
//     }catch(e){
//         res.status(500).send()
//     }
//     // User.find({}).then((user) => res.send(user)).catch((e) => res.status(500).send())
// })

// app.get('/users/:id' ,async (req,res) => {
//     const _id = req.params.id
//     console.log(_id)
    
//     try{
//         const user = await User.findById(_id)
//         res.send(500)
//     }catch(e){
//         res.status(500).send()
//     }
//     // User.findById(_id).then((user) => {
//     //     if(!user){
//     //         return res.status(404).send()
//     //     }
//     //     res.send(user)
//     // }).catch((e) => {
//     //     res.status(500).send()
//     // })
// })

// app.patch('/users/:id', async (req , res)=> {
//     const validEntries = ['name','age','email','password'] 
//     const updateValue = Object.keys(req.body)
//     console.log(updateValue)
//     const isValid = updateValue.every((value) => validEntries.includes(value))
//     if(!isValid){
//         return res.status(500).send({ error: 'Invalid Update'})
//     }
//     try{
//        const user =await User.findByIdAndUpdate(req.params.id,req.body,{ new: true, runValidators:true})
//        if(!user){
//        return res.status(400).send()
//        }
//        res.send(user)
// }
// catch(e){ res.status(500).send()}})


// app.delete('/users/:id', async (req, res) => {
//     try{
//     const user = await User.findByIdAndDelete(req.params.id)
//     console.log(user)
//     if(!user){
//         return res.status(400)
//     }
//     res.send(user)
// }


// catch (e) { res.status(400).send(e)}
// })
