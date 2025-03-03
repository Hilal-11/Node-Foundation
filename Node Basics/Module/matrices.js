

function matrices(matrices) {
    for(let i = 0; i < matrices.length; i++) {
        for(let j = 0; j < matrices[i].length; j++){
            console.log(matrices[i][j],"\t")
        }
        console.log()
    }
}

module.exports = { matrices }