// router from express

const { 
    //all of the user controls 
    getUsers,
    createUser, 
    deleteUser
} = // required from controllers

router.route('/').get(getUsers).post(createUser)