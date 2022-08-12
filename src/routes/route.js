const express = require('express');
const _ = require('underscore');
const lodash = require('lodash')

const abc = require('../introduction/intro')
const loggerModule = require('../logger/logger.js')
const formatterModule = require('../validator/formatter') 
const helperModule = require('../util/helper')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    loggerModule.Welcome()
    formatterModule.trimMyString()
    formatterModule.getUpperCaseString()
    formatterModule.changetoLowerCase()
    helperModule.getTodaysDate()
    helperModule.getCurrentMonth()
    helperModule.printBatchDetails()
    let weekdend = ['Saturday','Sunday','Monday']
    let result = _.first(weekdend, 2)
    console.log('Unserscore example resultr is ',result)
    res.send('My second ever api!')

    // ...............................................................

    let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let resul = lodash.chunk(monthName, 3);
    console.log("Name of months in 4 arrays -", resul)

    let arr1 = [1,2,3];
    let arr2 = [2,3,4];
    let arr3 = [3,5,6];
    let arr4 = [2,6];
    let arr5 = [7];
    let Union = lodash.union(arr1, arr2 ,arr3, arr4, arr5);
    console.log("Union of arrays -", Union)

    let Odd = [1,3,5,7,9,11,13,15,17,19];
    let num = lodash.tail(Odd,9);
    console.log("Last 9 odd numbers -", num);

    let object = [['Dhoni', 'Finisher'], ['Rohit', 'Opener'], ['Virat', 'Batsman'], ['Bumrah', 'Bowler'], ['Ashwin', 'Spinner']]
    let obj = lodash.fromPairs(object);
    console.log("Key value pairs of objects", obj);
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason