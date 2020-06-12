require('../src/db/mongoose.js')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5ebbdb5aa2e3b214cc356fad', {age: 25}).then((user) => {
//     console.log(user)
//     return User.countDocuments({})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// } )

const update = async (id, age) => {
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    console.log(count)
    return count
}

update('5ebbdb5aa2e3b214cc356fad', 28).then((result)=> {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

