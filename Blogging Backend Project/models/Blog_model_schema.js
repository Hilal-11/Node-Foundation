const mongoose = require('mongoose')

function BlogData () {
    mongoose.Schema(
        {
            title: {
                type: String,
                require: true,
                maxLength: 50
            },
            description: {
                type: String,
                require: true,
                maxLength: 500
            },
            commit: {
                type: String,
                maxLength: 200
            },
            like: {
                type: Boolean,
                require: true
            },
            createdAt:{
                type: Date,
                require: true,
                default: Date.now()
            },
            updatedAt: {    
                type: Date,
                require: true,
                default: Date.now()
            }

        }
    )
}