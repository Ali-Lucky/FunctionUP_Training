const trim = function(){
    let name = "   Lucky Ali     "
    name = name.trim()
    console.log(name)
}

const changeToUpperCase = function() {
    let upperCaseString = "lucky ali"
    upperCaseString = upperCaseString.toUpperCase()
    console.log(upperCaseString)
}

const changetoLowerCase = function() {
    let lowerCaseString = "LUCKY ALI"
    lowerCaseString = lowerCaseString.toLowerCase()
    console.log(lowerCaseString)
}

module.exports.trimMyString = trim
module.exports.getUpperCaseString = changeToUpperCase
module.exports.changetoLowerCase = changetoLowerCase