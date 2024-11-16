
//Establish S+B Color Library/////////////////////////////////////////////////////////////////////////////////////////////
const colorLibrary = {

    //Thread Colors////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    'ffffff': {
        name: 'White',
        colorCode: 'Blanc',
        Classification: 1,
        hexCode: 'ffffff',
        familyName: 'White',
    },

    '000000': {
        name: 'Black',
        colorCode: '310',
        Classification: 2,
        hexCode: '000000',
        familyName: 'Black',
    },

    'e8dcc9': {
        name: 'Light Khaki',
        colorCode: '613',
        Classification: 3,
        hexCode: 'e8dcc9',
        familyName: 'Tan',
    },

    'c8b685': {
        name: 'Dark Khaki',
        colorCode: '612',
        Classification: 4,
        hexCode: 'c8b685',
        familyName: 'Tan',
    },

    '9a8e6d': {
        name: 'Taupe',
        colorCode: '611',
        Classification: 5,
        hexCode: '9a8e6d',
        familyName: 'Tan',
    },

 

    

    '85bb64': {
        name: 'Moss',
        colorCode: '989',
        Classification: 81,
        hexCode: '85bb64',
        familyName: 'Green',
    },

    '397f3c': {
        name: 'Light Forest Green',
        colorCode: '987',
        Classification: 82,
        hexCode: '397f3c',
        familyName: 'Green',
    },

    '286c2b': {
        name: 'Forest Green',
        colorCode: '986',
        Classification: 83,
        hexCode: '286c2b',
        familyName: 'Green',
    },

    '205c22': {
        name: 'Dark Forest Green',
        colorCode: '895',
        Classification: 84,
        hexCode: '205c22',
        familyName: 'Green',
    },

    '1a471c': {
        name: 'Hunter',
        colorCode: '319',
        Classification: 85,
        hexCode: '1a471c',
        familyName: 'Green',
    },


    '76a5e5': {
        name: 'Baby Blue',
        colorCode: '799',
        Classification: 116,
        hexCode: '76a5e5',
        familyName: 'Blue',
    },

    '2756be': {
        name: 'Dark Royal',
        colorCode: '796',
        Classification: 119,
        hexCode: '2756be',
        familyName: 'Blue',
    },


    'e6b1f1': {
        name: 'Lavender',
        colorCode: '554',
        Classification: 127,
        hexCode: 'e6b1f1',
        familyName: 'Purple',
    },

    '9f89d7': {
        name: 'Violet',
        colorCode: '155',
        Classification: 128,
        hexCode: '9f89d7',
        familyName: 'Purple',
    },

};

var whiteArr = [];
var greyArr = [];
var blackArr = [];
var tanArr = [];
var pinkArr = [];
var redArr = [];
var orangeArr = [];
var yellowArr = [];
var goldArr = [];
var greenArr = [];
var blueArr = [];
var purpleArr = [];
var skinArr = [];
var brownArr = [];

var preFix = {
    0: 'Lightest',
    1: 'Light',
    2: 'Medium',
    3: 'Dark',
    4: 'Darkest',
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//color function that doesn't separates out layers    
var colorList = [];
//for (i in colorLibrary) {
//    if (colorLibrary[i].hexCode != '933599' && colorLibrary[i].hexCode != '676767') {
//        colorList.push(colorLibrary[i]);
 //   }
 //   else {
 //   }
//}

for (i in colorLibrary) {
    if (colorLibrary[i].familyName == 'White') {
        whiteArr.push(colorLibrary[i])
    }
    else if (colorLibrary[i].familyName == 'Grey') {
        greyArr.push(colorLibrary[i])
    }
    else if (colorLibrary[i].familyName == 'Black') {
        blackArr.push(colorLibrary[i])
    }
    else if (colorLibrary[i].familyName == 'Tan') {
        tanArr.push(colorLibrary[i])
    }
    else if (colorLibrary[i].familyName == 'Pink') {
        pinkArr.push(colorLibrary[i])
    }
    else if (colorLibrary[i].familyName == 'Red') {
        redArr.push(colorLibrary[i])
    }
    else if (colorLibrary[i].familyName == 'Orange') {
        orangeArr.push(colorLibrary[i])
    }
    else if (colorLibrary[i].familyName == 'Yellow') {
        yellowArr.push(colorLibrary[i])
    }
    else if (colorLibrary[i].familyName == 'Gold') {
        goldArr.push(colorLibrary[i])
    }
    else if (colorLibrary[i].familyName == 'Green') {
        greenArr.push(colorLibrary[i])
    }
    else if (colorLibrary[i].familyName == 'Blue') {
        blueArr.push(colorLibrary[i])
    }
    else if (colorLibrary[i].familyName == 'Purple') {
        purpleArr.push(colorLibrary[i])
    }
    else if (colorLibrary[i].familyName == 'Skin') {
        skinArr.push(colorLibrary[i])
    }
    else if (colorLibrary[i].familyName == 'Brown') {
        brownArr.push(colorLibrary[i])
    }
    else { }
}


sortByBrightness(whiteArr)
sortByBrightness(greyArr)
sortByBrightness(blackArr)
sortByBrightness(tanArr)
sortByBrightness(pinkArr)
sortByBrightness(redArr)
sortByBrightness(orangeArr)
sortByBrightness(yellowArr)
sortByBrightness(goldArr)
sortByBrightness(greenArr)
sortByBrightness(blueArr)
sortByBrightness(purpleArr)
sortByBrightness(skinArr)
sortByBrightness(brownArr)

var newColorList = []

isntEmpty(whiteArr)
isntEmpty(greyArr)
isntEmpty(blackArr)
isntEmpty(tanArr)
isntEmpty(pinkArr)
isntEmpty(redArr)
isntEmpty(orangeArr)
isntEmpty(yellowArr)
isntEmpty(goldArr)
isntEmpty(greenArr)
isntEmpty(blueArr)
isntEmpty(purpleArr)
isntEmpty(skinArr)
isntEmpty(brownArr)

console.log(newColorList.toString("/n"))

// puts the color in extantColors in correct format
var extantColors = [];



//for (var i in newColorList) {
//    extantColors.push(newColorList[i].name + " - " + newColorList[i].colorCode);
//}


// creates an Array with the Background first then the valid colors then the undefined colors
var finalArr = extantColors.join("\n")


//finalArr.join("\n\n")
//console.log(finalArr)
//end of big color function
//makeAnnotation(40, 40)
//writeInNote(finalArr.toString())



function sortByBrightness(array) {
    for (i in array) {
        // sorts the colors according to classification
        array.sort(function (a, b) {
            return hexBrightLevel(b.hexCode) - hexBrightLevel(a.hexCode)
        });
    }
}


function isntEmpty(vto) {
    console.log({vto} + vto.length)
    if (vto.length > 1) {

            if (vto.length == 2) {
                for (i in vto) {
                    if(i == 0){
                        newColorList.push(preFix[1] + " " + vto[i].familyName + " - " + vto[i].colorCode)
                    }        
                     if(i == 1){
                        newColorList.push(preFix[3] + " " + vto[i].familyName + " - " + vto[i].colorCode)
                    }
                    else{} 
                   
                }
            }
            if (vto.length == 3) {
                for (i in vto) {
                    if(i == 0){
                        newColorList.push(preFix[1] + " " + vto[i].familyfamilyName + " - " + vto[i].colorCode)
                    }        
                     if(i == 1){
                        newColorList.push(preFix[2] + " " + vto[i].familyName + " - " + vto[i].colorCode)
                    }
                    else{} 
                    if(i == 2){
                        newColorList.push(preFix[3] + " " + vto[i].familyName + " - " + vto[i].colorCode)
                    }
                    else{} 
                }
            }
            if (vto.length == 4) {
                for (i in vto) {
                    if(i == 0){
                        newColorList.push(preFix[1] + " " + vto[i].familyName + " - " + vto[i].colorCode)
                    }        
                     if(i == 1){
                        newColorList.push(preFix[2] + " " + vto[i].familyName + " - " + vto[i].colorCode)
                    }
                    else{} 
                    if(i == 2){
                        newColorList.push(preFix[3] + " " + vto[i].familyName + " - " + vto[i].colorCode)
                    }
                    if(i == 3){
                        newColorList.push(preFix[4] + " " + vto[i].familyName + " - " + vto[i].colorCode)
                    }
                    else{} 
                }
            }
            if (vto.length = 5) {
                for (i in vto) {
                    if(i == 0){
                        newColorList.push(preFix[0] + " " + vto[i].familyName + " - " + vto[i].colorCode)
                    }        
                    else if(i == 1){
                        newColorList.push(preFix[1] + " " + vto[i].familyName + " - " + vto[i].colorCode)
                    }
                    else if(i == 2){
                        newColorList.push(preFix[2] + " " + vto[i].familyName + " - " + vto[i].colorCode)
                    }
                    else if(i == 3){
                        newColorList.push(preFix[3] + " " + vto[i].familyName + " - " + vto[i].colorCode)
                    }
                    else if(i == 4){
                        newColorList.push(preFix[4] + " " + vto[i].familyName + " - " + vto[i].colorCode)
                    }
                    else{} 
                }
            }
            else {
                
            }
            newColorList.push(vto[i].familyName + " - " + vto[i].colorCode)
        }
    else { }
}


function hexBrightLevel(hex) {
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4), 16);
    return [r + g + b];
}

