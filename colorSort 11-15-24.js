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
}


var colorFams = {
    'whiteArr': {
        arrayC: [],
        
    },
    'blackArr': {
        arrayC: [],
    },
    'tanArr': {
        arrayC: [],
    },
    'greyArr': {
        arrayC: [],
    },
    'pinkArr': {
        arrayC: [],
    },
    'redArr': {
        arrayC: [],
    },
    'orangeArr': {
        arrayC: [],
    },
    'yellowArr': {
        arrayC: [],
    },
    'goldArr': {
        arrayC: [],
    },
    'greenArr': {
        arrayC: [],
    },
    'blueArr': {
        arrayC: [],
    },
    'purpleArr': {
        arrayC: [],
    },
    'skinArr': {
        arrayC: [],
    },
    'brownArr': {
        arrayC: [],
    },
}


var colorKeys = Object.keys(colorFams)
console.log(colorKeys)
var finalArr = {}
var tempArr = []

for (var i in colorLibrary) {
    if (colorLibrary[i].familyName = 'Grey') {
        colorFams.greyArr.arrayC.push(colorLibrary[i])
        
    }
    else if (colorLibrary[i].familyName = 'White') {
        colorFams.whiteArr.arrayC.push(colorLibrary[i])
        
    }
    else if (colorLibrary[i].familyName = 'Black') {
        colorFams.blackArr.arrayC.push(colorLibrary[i])
        
    }
    else if (colorLibrary[i].familyName = 'Tan') {
        colorFams.tanArr.arrayC.push(colorLibrary[i])
        
    }
    else if (colorLibrary[i].familyName = 'Pink') {
        colorFams.pinkArr.arrayC.push(colorLibrary[i])
        
    }
    else if (colorLibrary[i].familyName = 'Red') {
        colorFams.redArr.arrayC.push(colorLibrary[i])
        
    }
    else if (colorLibrary[i].familyName = 'Orange') {
        colorFams.orangeArr.arrayC.push(colorLibrary[i])
        
    }
    else if (colorLibrary[i].familyName = 'Yellow') {
        colorFams.yellowArr.arrayC.push(colorLibrary[i])
        
    }
    else if (colorLibrary[i].familyName = 'Gold') {
        colorFams.goldArr.arrayC.push(colorLibrary[i])
        
    }
    else if (colorLibrary[i].familyName = 'Green') {
        colorFams.greenArr.arrayC.push(colorLibrary[i])
        
    }
    else if (colorLibrary[i].familyName = 'Blue') {
        colorFams.blueArr.arrayC.push(colorLibrary[i])
        
    }
    else if (colorLibrary[i].familyName = 'Purple') {
        colorFams.purpleArr.arrayC.push(colorLibrary[i])
        

    }
    else if (colorLibrary[i].familyName = 'Skin') {
        colorFams.skinArr.arrayC.push(colorLibrary[i])
        
    }
    else if (colorLibrary[i].familyName = 'Brown') {
        colorFams.brownArr.arrayC,push(colorLibrary[i])
        
    }
}




console.log(colorKeys.length)
//for (var i = 0; i < colorKeys.length; i++) {
   // var libEntry = colorFams[i].arrayC;
    //console.log(libEntry)

    //if (colorFams[i].length > 0){
    // finalArr.push(colorKeys[i])

    //finalArr.push(colorFams[i])

    //console.log(colorKeys)}
    //finalArr.push(keys[i], colorFams[i])
//}

//console.log(finalArr.toString())
