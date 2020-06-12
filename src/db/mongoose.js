const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api2',{useNewUrlParser:true,useCreateIndex:true,
                                  useFindAndModify:false})


// const me = new User({name:"Raushan", age:24 , email: "raus@gmail.com", password:"lolkli45"})

// me.save().then((us)=> {
//     console.log(us)
// }).catch((error) => {
//     console.log(error)
// })

// const Task = mongoose.model('Task', {
//     description : {type: String} ,
//       completed : {type: Boolean}
// })

// const task = new Task({description: "Learn Mongoose in your own Pace",completed: false})
// task.save().then(()=>{
//     console.log(task)
// }).catch((error) => {
//         console.log(error)
//     })