const express = require('express')
const User = require('../models/user')
const router = express.Router()
router.post('/users',async (req, res) => {
    const user = new User(req.body)
    console.log(user)
    
    try{
        await user.save()
        res.status(201).send(user)
    }
    catch(e){
    res.status(400).send(e)
    }
})

router.get('/users',async (req,res) => {
    try{
        const user = await User.find({})
        res.status(201).send(user)
    }catch(e){
        res.status(500).send()
    }
    // User.find({}).then((user) => res.send(user)).catch((e) => res.status(500).send())
})

router.get('/users/:id' ,async (req,res) => {
    const _id = req.params.id
    
    try{
        const user = await User.findById(_id)
        res.status(201).send(user)
    }catch(e){
        res.status(500).send()
    }
})

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
            //    const user =await User.findByIdAndUpdate(req.params.id,req.body,{ new: true, runValidators:true})

        const user = await User.findById(req.params.id)

        updates.forEach((update) => user[update] = req.body[update])
        await user.save()

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/:id', async (req, res) => {
    try{
    const user = await User.findByIdAndDelete(req.params.id)
    console.log(user)
    if(!user){
        return res.status(400)
    }
    res.send(user)
}
catch (e) { res.status(400).send(e)}
})

module.exports = router