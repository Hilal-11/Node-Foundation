const mongoose = require('mongoose')

const Schema = mongoose.scheme(
    {
        title: {

        },
        description: {

        },
        isLike: {

        },
        comment:{

        },
        createdAt: {

        },
        updatedAt: {

        }
    }
)

module.exports = mongoose.model("BlogSchems", Schema);