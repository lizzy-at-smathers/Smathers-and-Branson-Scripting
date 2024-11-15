#target photoshop;

// Save current ruler units
var oldPref = app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;

var doc = app.activeDocument;
var activeLayers = doc.artLayers
var docHeight = parseInt(doc.height);
var docLength = parseInt(doc.width);
var docRes = parseInt(doc.resolution);
var canvasNoteL = null
var canvasNoteH = null
var insertedNotes = []
var endArray1 = [];

// Add a color sampler at the specified location and get the color
var oldColor = app.foregroundColor
var pixelLoc = [1, 1];
var colorSamplerRef = doc.colorSamplers.add(pixelLoc);
app.foregroundColor = colorSamplerRef.color;
colorSamplerRef.remove(); // Remove the color sampler after getting the color

//Establish S+B Color Library/////////////////////////////////////////////////////////////////////////////////////////////
const colorLibrary = {

    //Hat Colors////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    '1e2e5c': {
        name: 'Hat Color',
        colorCode: 'Navy',
        Classification: 1,
    },
    'fafafa': {
        name: 'Hat Color',
        colorCode: 'White',
        Classification: 2,
    },
    'ded8ce': {
        name: 'Hat Color',
        colorCode: 'Stone',
        Classification: 3,
    },
    '174024': {
        name: 'Hat Color',
        colorCode: 'Hunter',
        Classification: 4,
    },
    '72a0de': {
        name: 'Hat Color',
        colorCode: 'Light Blue',
        Classification: 5,
    },
    '578cc8': {
        name: 'Hat Color',
        colorCode: 'Royal',
        Classification: 6,
    },
    '000003': {
        name: 'Hat Color',
        colorCode: 'Black',
        Classification: 7,
    },
    'b30000': {
        name: 'Hat Color',
        colorCode: 'Red',
        Classification: 8,
    },
    'cacaca': {
        name: 'Hat Color',
        colorCode: 'Grey',
        Classification: 9,
    },
    'c6674e': {
        name: 'Hat Color',
        colorCode: 'Nantuchet Red',
        Classification: 10,
    },
    '5a7d94': {
        name: 'Hat Color',
        colorCode: 'Steel Blue',
        Classification: 11,
    },

    //Phat Colors////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    '1e2e5b': {
        name: 'Performance Hat Color',
        colorCode: 'Navy',
        Classification: 12,
    },
    'fbfbfb': {
        name: 'Performance Hat Color',
        colorCode: 'White',
        Classification: 13,
    },
    '000004': {
        name: 'Performance Hat Color',
        colorCode: 'Black',
        Classification: 14,
    },
    'c6c6c6': {
        name: 'Performance Hat Color',
        colorCode: 'Grey',
        Classification: 15,
    },
    '19461b': {
        name: 'Performance Hat Color',
        colorCode: 'Spruce',
        Classification: 16,
    },
    'b40000': {
        name: 'Performance Hat Color',
        colorCode: 'Sunday Red',
        Classification: 17,
    },
    '86b4d5': {
        name: 'Performance Hat Color',
        colorCode: 'Sky Blue',
        Classification: 18,
    },
    '6db794': {
        name: 'Performance Hat Color',
        colorCode: 'Seafoam',
        Classification: 19,
    },
    'efafbd': {
        name: 'Performance Hat Color',
        colorCode: 'Cherry Blossom',
        Classification: 20,
    },
    'f2ac61': {
        name: 'Performance Hat Color',
        colorCode: 'Apricot',
        Classification: 21,
    },
    //Thread Colors////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    'ffffff': {
        name: 'White',
        colorCode: 'Blanc',
        Classification: 22,
    },

    '000000': {
        name: 'Black',
        colorCode: '310',
        Classification: 23,
    },

    'e8dcc9': {
        name: 'Light Khaki',
        colorCode: '613',
        Classification: 24,
    },

    'c8b685': {
        name: 'Dark Khaki',
        colorCode: '612',
        Classification: 25,
    },

    '9a8e6d': {
        name: 'Taupe',
        colorCode: '611',
        Classification: 26,
    },

    '98895f': {
        name: 'Taupe',
        colorCode: '610',
        Classification: 27,
    },

    '7a7056': {
        name: 'Dark Taupe',
        colorCode: '3781',
        Classification: 28,
    },

    'ece4d9': {
        name: 'Oatmeal',
        colorCode: '3033',
        Classification: 29,
    },

    'e0dad0': {
        name: 'Stone',
        colorCode: '644',
        Classification: 30,
    },

    'c5c9b4': {
        name: 'Green Grey',
        colorCode: '3023',
        Classification: 31,
    },

    'fec7b0': {
        name: 'Light Bermuda Sand',
        colorCode: '353',
        Classification: 32,
    },

    'f9a391': {
        name: 'Bermuda Sand',
        colorCode: '352',
        Classification: 33,
    },

    'f67668': {
        name: 'Melon',
        colorCode: '351',
        Classification: 34,
    },

    'eb5a4b': {
        name: 'Dark Melon',
        colorCode: '350',
        Classification: 35,
    },

    'c44335': {
        name: 'Rhubarb',
        colorCode: '347',
        Classification: 36,
    },

    'fa4b4b': {
        name: 'Light Guava',
        colorCode: '3705',
        Classification: 37,
    },

    'f63c3c': {
        name: 'Guava',
        colorCode: '3801',
        Classification: 38,
    },

    'e31616': {
        name: 'Bright Red',
        colorCode: '666',
        Classification: 39,
    },

    'bc0000': {
        name: 'Red',
        colorCode: '321',
        Classification: 40,
    },

    '980a0a': {
        name: 'Light Garnet',
        colorCode: '816',
        Classification: 41,
    },

    '740505': {
        name: 'Garnet',
        colorCode: '815',
        Classification: 42,
    },

    '590505': {
        name: 'Maroon',
        colorCode: '814',
        Classification: 43,
    },

    'd16c52': {
        name: 'Light Rust',
        colorCode: '356',
        Classification: 44,
    },

    'af4428': {
        name: 'Rust',
        colorCode: '355',
        Classification: 45,
    },

    'ab3719': {
        name: 'Deep Rust',
        colorCode: '3777',
        Classification: 46,
    },

    'fcdee6': {
        name: 'Blush',
        colorCode: '818',
        Classification: 47,
    },

    'f7b5c3': {
        name: 'Light Pink',
        colorCode: '3716',
        Classification: 48,
    },

    'f9acc0': {
        name: 'Light Pink',
        colorCode: '604',
        Classification: 49,
    },

    'f994ae': {
        name: 'Pink',
        colorCode: '603',
        Classification: 50,
    },

    'f57493': {
        name: 'Dark Pink',
        colorCode: '602',
        Classification: 51,
    },

    'eb5377': {
        name: 'Hot Pink',
        colorCode: '601',
        Classification: 52,
    },

    'b52e44': {
        name: 'Cranberry',
        colorCode: '326',
        Classification: 53,
    },

    'ff9c95': {
        name: 'Pink',
        colorCode: '894',
        Classification: 54,
    },

    'ff7166': {
        name: 'Pink',
        colorCode: '893',
        Classification: 55,
    },

    'f9493c': {
        name: 'Watermelon',
        colorCode: '891',
        Classification: 56,
    },

    'ffaaaa': {
        name: 'Light Pink',
        colorCode: '957',
        Classification: 57,
    },

    'ff7a7a': {
        name: 'Pink',
        colorCode: '956',
        Classification: 58,
    },

    'ffc529': {
        name: 'Orange Yellow',
        colorCode: '742',
        Classification: 59,
    },

    'ffa729': {
        name: 'Tangerine',
        colorCode: '741',
        Classification: 60,
    },

    'ff9314': {
        name: 'Orange',
        colorCode: '970',
        Classification: 61,
    },

    'ff7d14': {
        name: 'Orange',
        colorCode: '947',
        Classification: 62,
    },

    'f8750c': {
        name: 'Orange',
        colorCode: '946',
        Classification: 63,
    },

    'fd9129': {
        name: 'Light Spice Orange',
        colorCode: '721',
        Classification: 64,
    },

    'eb7a1e': {
        name: 'Spice Orange',
        colorCode: '720',
        Classification: 65,
    },

    'cc6214': {
        name: 'Burnt Orange',
        colorCode: '920',
        Classification: 66,
    },

    'f05906': {
        name: 'Blood Orange',
        colorCode: '606',
        Classification: 67,
    },

    'fef37f': {
        name: 'Light Yellow',
        colorCode: '727',
        Classification: 68,
    },

    'fee74b': {
        name: 'Yellow',
        colorCode: '726',
        Classification: 69,
    },

    'fcd520': {
        name: 'Yellow',
        colorCode: '725',
        Classification: 70,
    },

    'fccb20': {
        name: 'Yellow',
        colorCode: '728',
        Classification: 71,
    },

    'f2b90b': {
        name: 'Mustard Yellow',
        colorCode: '783',
        Classification: 72,
    },

    'e1a106': {
        name: 'Dark Mustard Yellow',
        colorCode: '782',
        Classification: 73,
    },

    'be7d0d': {
        name: 'Gold Brown',
        colorCode: '780',
        Classification: 74,
    },

    'fbd44a': {
        name: 'Yellow Gold',
        colorCode: '3821',
        Classification: 75,
    },

    'eebe2c': {
        name: 'Yellow Gold',
        colorCode: '3852',
        Classification: 76,
    },

    'f6e9b1': {
        name: 'Butter',
        colorCode: '677',
        Classification: 77,
    },

    'edd287': {
        name: 'Light Gold',
        colorCode: '676',
        Classification: 78,
    },

    'e0be61': {
        name: 'Gold',
        colorCode: '729',
        Classification: 79,
    },

    'c3a040': {
        name: 'Dark Gold',
        colorCode: '3829',
        Classification: 80,
    },

    'd3c788': {
        name: 'Gold',
        colorCode: '3046',
        Classification: 81,
    },

    'baa76c': {
        name: 'Gold',
        colorCode: '3045',
        Classification: 82,
    },

    'a99352': {
        name: 'Dark Gold',
        colorCode: '167',
        Classification: 83,
    },

    'd3c397': {
        name: 'Gold',
        colorCode: '422',
        Classification: 84,
    },

    'ad8c47': {
        name: 'Dark Gold',
        colorCode: '420',
        Classification: 85,
    },

    'baf2c3': {
        name: 'Wintergreen',
        colorCode: '955',
        Classification: 86,
    },

    '89dc97': {
        name: 'Mint',
        colorCode: '913',
        Classification: 87,
    },

    '59cc84': {
        name: 'Light Kelly',
        colorCode: '912',
        Classification: 88,
    },

    '3fb86c': {
        name: 'Kelly Green',
        colorCode: '911',
        Classification: 89,
    },

    '239a4f': {
        name: 'Dark Kelly',
        colorCode: '910',
        Classification: 90,
    },

    '1d8845': {
        name: 'Light Emerald',
        colorCode: '909',
        Classification: 91,
    },

    '056b2b': {
        name: 'Emerald',
        colorCode: '3818',
        Classification: 92,
    },

    '8fd855': {
        name: 'Light Lime',
        colorCode: '704',
        Classification: 93,
    },

    '69b846': {
        name: 'Lime',
        colorCode: '702',
        Classification: 94,
    },

    '298d21': {
        name: 'Green',
        colorCode: '700',
        Classification: 95,
    },

    '0f6809': {
        name: 'Dark Green',
        colorCode: '699',
        Classification: 96,
    },

    '79d331': {
        name: 'Light Yellow Green',
        colorCode: '907',
        Classification: 97,
    },

    '60bc15': {
        name: 'Yellow Green',
        colorCode: '906',
        Classification: 98,
    },

    '519718': {
        name: 'Dark Yellow Green',
        colorCode: '905',
        Classification: 99,
    },

    '51792d': {
        name: 'Olive',
        colorCode: '937',
        Classification: 100,
    },

    'a0d281': {
        name: 'Light Moss',
        colorCode: '164',
        Classification: 101,
    },

    '85bb64': {
        name: 'Moss',
        colorCode: '989',
        Classification: 102,
    },

    '397f3c': {
        name: 'Light Forest Green',
        colorCode: '987',
        Classification: 103,
    },

    '286c2b': {
        name: 'Forest Green',
        colorCode: '986',
        Classification: 104,
    },

    '205c22': {
        name: 'Dark Forest Green',
        colorCode: '895',
        Classification: 105,
    },

    '1a471c': {
        name: 'Hunter',
        colorCode: '319',
        Classification: 106,
    },

    '164018': {
        name: 'Deep Hunter',
        colorCode: '890',
        Classification: 107,
    },

    '89bb8b': {
        name: 'Light Sage',
        colorCode: '368',
        Classification: 108,
    },

    '486d49': {
        name: 'Sage',
        colorCode: '367',
        Classification: 109,
    },

    '71bd99': {
        name: 'Seafoam',
        colorCode: '3816',
        Classification: 110,
    },

    '57aa6b': {
        name: 'Light Fern',
        colorCode: '562',
        Classification: 111,
    },

    '459558': {
        name: 'Fern',
        colorCode: '505',
        Classification: 112,
    },

    '3a6d48': {
        name: 'Antique Green',
        colorCode: '501',
        Classification: 113,
    },

    '184326': {
        name: 'Dark Pine',
        colorCode: '500',
        Classification: 114,
    },

    '93eed3': {
        name: 'Sea Green',
        colorCode: '964',
        Classification: 115,
    },

    '3dc39b': {
        name: 'Light Tropical Green',
        colorCode: '3851',
        Classification: 116,
    },

    '00a182': {
        name: 'Tropical Green',
        colorCode: '3850',
        Classification: 117,
    },

    '67caa4': {
        name: 'Light Jade',
        colorCode: '992',
        Classification: 118,
    },

    '11846d': {
        name: 'Jade',
        colorCode: '991',
        Classification: 119,
    },

    '3cd7d2': {
        name: 'Aqua',
        colorCode: '3846',
        Classification: 120,
    },

    '0ba9b7': {
        name: 'Dark Aqua',
        colorCode: '3844',
        Classification: 121,
    },

    'd5fbfc': {
        name: 'Very Light Teal',
        colorCode: '747',
        Classification: 122,
    },

    '94cce4': {
        name: 'Sky Blue',
        colorCode: '519',
        Classification: 123,
    },

    '75bbc5': {
        name: 'Teal',
        colorCode: '807',
        Classification: 124,
    },

    '65afb1': {
        name: 'Turquoise',
        colorCode: '3810',
        Classification: 125,
    },

    '085d71': {
        name: 'Dark Turquoise',
        colorCode: '3808',
        Classification: 126,
    },

    '224980': {
        name: 'Blueberry',
        colorCode: '312',
        Classification: 127,
    },

    '1e2e5a': {
        name: 'Classic Navy',
        colorCode: '336',
        Classification: 128,
    },

    '10153f': {
        name: 'Dark Navy',
        colorCode: '823',
        Classification: 129,
    },

    '0c1034': {
        name: 'Midnight',
        colorCode: '939',
        Classification: 130,
    },

    'abd3ef': {
        name: 'Ice Blue',
        colorCode: '827',
        Classification: 131,
    },

    '8cbddf': {
        name: 'Light Blue',
        colorCode: '813',
        Classification: 132,
    },

    '5c95d4': {
        name: 'Cornflower',
        colorCode: '826',
        Classification: 133,
    },

    '2962a2': {
        name: 'Blue',
        colorCode: '825',
        Classification: 134,
    },

    '184481': {
        name: 'Dark Blue',
        colorCode: '824',
        Classification: 135,
    },

    '6791d0': {
        name: 'Stream Blue',
        colorCode: '322',
        Classification: 136,
    },

    '76a5e5': {
        name: 'Baby Blue',
        colorCode: '799',
        Classification: 137,
    },

    '3e74d8': {
        name: 'Cobalt',
        colorCode: '798',
        Classification: 138,
    },

    '425bc5': {
        name: 'Royal',
        colorCode: '797',
        Classification: 139,
    },

    '2756be': {
        name: 'Dark Royal',
        colorCode: '796',
        Classification: 140,
    },

    '53aef5': {
        name: 'Azure',
        colorCode: '996',
        Classification: 141,
    },

    '2a9af0': {
        name: 'Bright Blue',
        colorCode: '3843',
        Classification: 142,
    },

    '007ad0': {
        name: 'Electric Blue',
        colorCode: '995',
        Classification: 143,
    },

    'cedce5': {
        name: 'Powder Blue',
        colorCode: '3753',
        Classification: 144,
    },

    '9cb9cc': {
        name: 'Antique Blue',
        colorCode: '932',
        Classification: 145,
    },

    '5e829a': {
        name: 'Steel Blue',
        colorCode: '931',
        Classification: 146,
    },

    '3b6078': {
        name: 'Slate',
        colorCode: '930',
        Classification: 147,
    },

    'e6b1f1': {
        name: 'Lavender',
        colorCode: '554',
        Classification: 148,
    },

    '9f89d7': {
        name: 'Violet',
        colorCode: '155',
        Classification: 149,
    },

    '7859c6': {
        name: 'Purple',
        colorCode: '333',
        Classification: 150,
    },

    '37277e': {
        name: 'Indigo Purple',
        colorCode: '791',
        Classification: 151,
    },

    '7377a8': {
        name: 'Periwinkle',
        colorCode: '3807',
        Classification: 152,
    },

    'a85bb9': {
        name: 'Amethyst',
        colorCode: '552',
        Classification: 153,
    },

    '5f138a': {
        name: 'Royal Purple',
        colorCode: '550',
        Classification: 154,
    },

    '511b3f': {
        name: 'Eggplant',
        colorCode: '154',
        Classification: 155,
    },

    'bd7777': {
        name: 'Marsala',
        colorCode: '223',
        Classification: 156,
    },

    '99294e': {
        name: 'Dark Mauve',
        colorCode: '3803',
        Classification: 157,
    },

    'f7dec0': {
        name: 'Skin',
        colorCode: '945',
        Classification: 158,
    },

    'd1a588': {
        name: 'Dark Skin',
        colorCode: '3064',
        Classification: 159,
    },

    'f6efdf': {
        name: 'Off White',
        colorCode: '712',
        Classification: 160,
    },

    'eedfbb': {
        name: 'Cream',
        colorCode: '739',
        Classification: 161,
    },

    'e2c48b': {
        name: 'Tan',
        colorCode: '738',
        Classification: 162,
    },

    'd9b267': {
        name: 'Tan',
        colorCode: '437',
        Classification: 163,
    },

    'c79444': {
        name: 'Light Brown',
        colorCode: '436',
        Classification: 164,
    },

    'b98138': {
        name: 'Light Brown 2',
        colorCode: '435',
        Classification: 165,
    },

    '996520': {
        name: 'Brown',
        colorCode: '434',
        Classification: 166,
    },

    '82571e': {
        name: 'Brown',
        colorCode: '433',
        Classification: 167,
    },

    '6e4919': {
        name: 'Brown',
        colorCode: '801',
        Classification: 168,
    },

    '5e3c0f': {
        name: 'Brown',
        colorCode: '898',
        Classification: 169,
    },

    '563914': {
        name: 'Dark Brown',
        colorCode: '938',
        Classification: 170,
    },

    '32200a': {
        name: 'Very Dark Brown',
        colorCode: '3371',
        Classification: 171,
    },

    'f9b164': {
        name: 'Peach',
        colorCode: '402',
        Classification: 172,
    },

    'c87822': {
        name: 'Ginger',
        colorCode: '976',
        Classification: 173,
    },

    'a3591e': {
        name: 'Copper',
        colorCode: '301',
        Classification: 174,
    },

    '743b09': {
        name: 'Chestnut',
        colorCode: '300',
        Classification: 175,
    },

    'e8e8e8': {
        name: 'Very Light Grey',
        colorCode: '762',
        Classification: 176,
    },

    'd2d2d2': {
        name: 'Light Grey',
        colorCode: '415',
        Classification: 177,
    },

    'b9b9b9': {
        name: 'Grey',
        colorCode: '318',
        Classification: 178,
    },

    '9b9b9b': {
        name: 'Grey',
        colorCode: '414',
        Classification: 179,
    },

    '777777': {
        name: 'Dark Grey',
        colorCode: '317',
        Classification: 180,
    },

    '4b4b4b': {
        name: 'Charcoal',
        colorCode: '3799',
        Classification: 181,
    },

    'c3cfcd': {
        name: 'Light Silver Grey',
        colorCode: '168',
        Classification: 182,
    },

    'a5b0ae': {
        name: 'Silver Grey',
        colorCode: '169',
        Classification: 183,
    },

    'cac7b9': {
        name: 'Light Beaver Grey',
        colorCode: '648',
        Classification: 184,
    },

    '928f7e': {
        name: 'Beaver Grey',
        colorCode: '646',
        Classification: 185,
    },

    '827f6f': {
        name: 'Beaver Grey',
        colorCode: '645',
        Classification: 186,
    },

    '56544b': {
        name: 'Dark Beaver Grey',
        colorCode: '844',
        Classification: 187,
    },

    'bdc9a2': {
        name: 'Corn Husk',
        colorCode: '3013',
        Classification: 188,
    },

    'c2c78f': {
        name: 'Green Gold',
        colorCode: '372',
        Classification: 189,
    },

    'b1b67c': {
        name: 'Green Gold',
        colorCode: '370',
        Classification: 190,
    },

    //Extra Colors////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    '933599': {
        name: 'Greenscreen',
        colorCode: 'null',
        Classification: 191,
    },

    '141414': {
        name: 'Leather Color',
        colorCode: 'Black',
        Classification: 192,
    },

    '754e1b': {
        name: 'Leather Color',
        colorCode: 'Chestnut',
        Classification: 193,
    },

    '19441b': {
        name: 'Leather Color',
        colorCode: 'Hunter',
        Classification: 194,
    },

    '3a4471': {
        name: 'Leather Color',
        colorCode: 'Indigo',
        Classification: 195,
    },

    'e2e2e2': {
        name: 'Leather Color',
        colorCode: 'White',
        Classification: 196,
    },

    '676767': {
        name: 'Greyscreen',
        colorCode: 'null',
        Classification: 197,
    },

};
//list hat and leather colors
const hatColors = [
    '1e2e5c',
    'fafafa',
    'ded8ce',
    '174024',
    '72a0de',
    '578cc8',
    '000003',
    'b30000',
    'cacaca',
    'c6674e',
    '5a7d94',
    '1e2e5b',
    'fbfbfb',
    '000004',
    'c6c6c6',
    '19461b',
    'b40000',
    '86b4d5',
    '6db794',
    'efafbd',
    "f2ac61",
];
var leatherColors = [
    '141414',
    '754e1b',
    '19441b',
    '3a4471',
    'e2e2e2',
];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//extra notes based on canvas width or height///////////////////////////////////////////////////////////
const canvasNotesL = {
    '112': {
        note: 'Canvas is 6.222 inches long',
    },
    '117': {
        note: 'Canvas is 6.5 inches long',
    },
    '122': {
        note: 'Canvas is 6.778 inches long',
    },
    '126': {
        note: 'Canvas is 7 inches long',
    },
};
const canvasOddNotesB = 'Canvas is 23 stitches high'
const canvasOddNotesF = 'Canvas is 23 stitches high'
var canvasNoteL = null
var canvasNoteH = null

///checks if it's a special key fob length
if (docLength <= 150) {
    try {
        canvasNoteL = canvasNotesL[docLength].note
    }
    catch (err) { }
}
else { }

///checks if it's an odd height belt or fob
if (docHeight == 27 || docHeight == 23 && docLength >= 150) {
    canvasNoteH = canvasOddNotesB
}
else if (docHeight == 19 || docHeight == 23 && docLength <= 150) {
    canvasNoteH = canvasOddNotesF
}
else if (docHeight <= 14) {
    canvasNoteH = 'Place the motif higher than normal'
}
else { }

//inserts the notes if they aren't null
insertNotes(canvasNoteL)
insertNotes(canvasNoteH)


function insertNotes(c) {
    if (c != null) {
        insertedNotes.push(c)
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var greenScreen = new SolidColor;
//var RGB = HEXtoRGB(Y);
greenScreen.rgb.red = 147;
greenScreen.rgb.green = 53;
greenScreen.rgb.blue = 153;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (doc.mode == 'DocumentMode.RGB' && docRes < 120) {// make sure that there is a file in rgb mode to process
    var userResponse1 = confirm("Do you want to make note?");

    if (userResponse1) {
        makeAnnotation(docLength / 2, docHeight + 10)
    } else {
    }
    //if the document has layers
    if (doc.layers.length >= 2) {

        var userResponse2 = confirm("Do you want to flatten layers?");

        if (userResponse2) {
            doc.flatten();
            endArray1.push(bigColorFunctionOneLayer())
            var endArray2 = endArray1.join()
        } else {

            ///////      
            var colArr = []
            var lengthLay = activeLayers.length - 1;
            var num = lengthLay - l;
            var bgLayer = activeLayers[lengthLay];
            doc.activeLayer = bgLayer


            if (doc.activeLayer.isBackgroundLayer) {
            }
            else {
                doc.activeLayer.name = "Background";
                doc.activeLayer.isBackgroundLayer = true;
            }


            for (var l = 0; l < doc.artLayers.length; l++) {
                doc.activeLayer = activeLayers[l]
                doc.activeLayer.visible = false;
                if (doc.activeLayer.isBackgroundLayer) {
                    doc.activeLayer.visible = true;
                    var bgColor = bigColorFunctionLayers();
                    var bgLayer = doc.activeLayer
                    doc.selection.selectAll();
                    doc.selection.fill(greenScreen);
                    doc.selection.deselect();
                }
                else { }
            }

            for (var l = 0; l < doc.artLayers.length; l++) {
                doc.activeLayer = activeLayers[l]
                var lengthLay = activeLayers.length - 1;
                var num = lengthLay - l;
                if (doc.activeLayer.isBackgroundLayer != true) {
                    doc.activeLayer.visible = true;// show the layer
                    var layerNum = num
                    endArray1.push(bigColorFunctionLayers());
                    endArray1.push("Motif " + layerNum + ": " + doc.activeLayer.name);
                    doc.activeLayer.visible = false;// hide the layer
                } else { };
            }

            for (var l = 0; l < doc.artLayers.length; l++) {
                doc.activeLayer = activeLayers[l]
                doc.activeLayer.visible = true;// hide the layer
            }
            endArray1.push("Background - " + bgColor)
            endArray1.reverse();

            var endArray2 = endArray1.join("\n\n");


            doc.activeLayer == bgLayer;
            doc.selection.selectAll();

            doc.selection.fill(app.foregroundColor);

            doc.selection.deselect();

            writeInNote(endArray2)
            doc.activeLayer == bgLayer;
            doc.selection.selectAll();

            doc.selection.fill(app.foregroundColor);

            doc.selection.deselect();


        }
    }
    else {

        endArray1.push(bigColorFunctionOneLayer())
        var endArray2 = endArray1.join()

    }


    writeInNote(endArray2)


}
else {
    alert("Document is too high resolution or not in RGB mode :(")
}
app.foregroundColor = oldColor;
app.preferences.rulerUnits = oldPref


//color function that separates out layers
function bigColorFunctionLayers() {

    const THRESHOLD = 0; // color pixels threshold

    var s2t = stringIDToTypeID,
        t2s = typeIDToStringID,
        colorsObj = {},
        colorsArr = [];

    // sets document to Ordinal?
    var r = new ActionReference();
    var p = s2t('mode');
    r.putProperty(s2t('property'), p);
    r.putEnumerated(s2t('document'), s2t('ordinal'), s2t('targetEnum'));

    // If the document is in RGB mode

    // create new RAW File
    var f = new File(Folder.temp + '/colors.raw');

    // create an Interleaved copy of the document
    var d = new ActionDescriptor();
    d.putBoolean(s2t("channelsInterleaved"), true);
    //d.putBoolean(s2t("transparency"), true);
    d.putBoolean(s2t('copy'), true);
    //   "channelsInterleaved": true,
    //"transparency": true
    // puts new raw copy of the current in the new raw document
    var d1 = new ActionDescriptor();
    d1.putObject(s2t("as"), s2t("rawFormat"), d);
    d1.putPath(s2t("in"), f);

    // save the raw document
    executeAction(s2t("save"), d1, DialogModes.NO);

    // opens document in read mode using a binary encoding
    f.open('r');
    f.encoding = "BINARY";


    // update the progress viewer and run the readColors function
    doForcedProgress('Reading colors', 'readColors(f.read(), colorsObj)');

    // closes and kills the copy file
    f.close();
    f.remove();

    // if the color object is above the threshold push it to colorsArr Array
    for (var a in colorsObj) {
        if (colorsObj[a] > THRESHOLD)
            colorsArr.push({ hex: a })
    }


    ///// Part I wrote that takes the colorsArr Array and matches them to the library entry and creates the corresponding text /////

    // makes new array with the valid colors and an array with the nonvalid colors

    var extantColors = [];
    var colorList = [];
    var missingColors = [];
    var colorKey = [];
    for (var i in colorsArr) {
        var swatchColor = colorsArr[i].hex;
        var libEntry = colorLibrary[swatchColor];
        if (libEntry) {
            if (swatchColor != '933599' && swatchColor != '676767') {
                colorList.push(libEntry);
            }
            else {

            }
        } else {
            missingColors.push("Undefined - " + swatchColor);
        }
    }



    // sorts the colors according to classification
    colorList.sort(function (a, b) {
        return a.Classification - b.Classification
    });

    // puts the color in extantColors in correct format
    for (var i in colorList) {
        extantColors.push(colorList[i].name + " - " + colorList[i].colorCode);
    }


    // creates an Array with the Background first then the valid colors then the undefined colors
    var finalArr = colorKey.concat(extantColors, missingColors);


    function readColors(s, colorsObj) {
        //takes variable and emty array makes hex codes
        for (var i = 0; i < s.length; i += 3) {
            var cur = toHex(s, i, 3);
            updateProgress(i, s.length);
            colorsObj[cur] = 1;
        }
    }


    //this one is called in readColors, creates the hex code from whatever raw data it recieves
    /**
     * Calculate the hex code of the given bits
     */
    function toHex(s, from, bits) {
        var h = '';
        for (var i = from; i < from + bits; i++)
            h += (('0' + s.charCodeAt(i).toString(16)).slice(-2));

        return h
    }

    //this one?? is for the DE_CIE76 which I don't actually need I think?
    //// BY MICHAEL: I think this calculates the euclidean distance between colors, but I
    //// think you're right that it never gets used
    function deltaE(a, b) {
        return Math.sqrt(Math.pow(b.lab.l - a.lab.l, 2) + Math.pow(b.lab.a - a.lab.a, 2) + Math.pow(b.lab.b - a.lab.b, 2))
    }
    return finalArr.join("\n")
}
//end of big color function

//color function that doesn't separates out layers
function bigColorFunctionOneLayer() {

    const THRESHOLD = 0; // color pixels threshold

    var s2t = stringIDToTypeID,
        t2s = typeIDToStringID,
        colorsObj = {},
        colorsArr = [];

    // sets document to Ordinal?
    var r = new ActionReference();
    var p = s2t('mode');
    r.putProperty(s2t('property'), p);
    r.putEnumerated(s2t('document'), s2t('ordinal'), s2t('targetEnum'));

    // If the document is in RGB mode

    // create new RAW File
    var f = new File(Folder.temp + '/colors.raw');

    // create an Interleaved copy of the document
    var d = new ActionDescriptor();
    d.putBoolean(s2t("channelsInterleaved"), true);
    //d.putBoolean(s2t("transparency"), true);
    d.putBoolean(s2t('copy'), true);

    // puts new raw copy of the current in the new raw document
    var d1 = new ActionDescriptor();
    d1.putObject(s2t("as"), s2t("rawFormat"), d);
    d1.putPath(s2t("in"), f);

    // save the raw document
    executeAction(s2t("save"), d1, DialogModes.NO);

    // opens document in read mode using a binary encoding
    f.open('r');
    f.encoding = "BINARY";


    // update the progress viewer and run the readColors function
    doForcedProgress('Reading colors', 'readColors(f.read(), colorsObj)');

    // closes and kills the copy file
    f.close();
    f.remove();

    // if the color object is above the threshold push it to colorsArr Array
    for (var a in colorsObj) {
        if (colorsObj[a] > THRESHOLD)
            colorsArr.push({ hex: a })
    }


    ///// Part I wrote that takes the colorsArr Array and matches them to the library entry and creates the corresponding text /////

    // makes new array with the valid colors and an array with the nonvalid colors

    var leatherArr = [];
    var hatArr = [];
    var colorList = [];
    var extantColors = [];
    var missingColors = [];
    var colorKey = [];
    var bgArr = [];
    for (var i in colorsArr) {
        var swatchColor = colorsArr[i].hex;
        var libEntry = colorLibrary[swatchColor];

        if (libEntry) {
            if (checkArray(leatherColors, swatchColor)) {
                leatherArr.push(libEntry)

            }
            else if (checkArray(hatColors, swatchColor)) {

                hatArr.push(libEntry);
            }
            else if (swatchColor != '933599' && swatchColor != '676767') {
                colorList.push(libEntry);
            }
        } else {
            missingColors.push("Undefined - " + swatchColor);
        }
    }

    // removes background color from colorList 
    if (hatArr.length == 0) {
        bgArr.push("Background - " + colorList[0].colorCode);
        colorList.shift();
    }
    // sorts the colors according to classification
    colorList.sort(function (a, b) {
        return a.Classification - b.Classification
    });

    // puts the color in extantColors in correct format

    var extantHat = [];
    var extantLeather = [];
    for (var i in leatherArr) {
        extantLeather.push(leatherArr[i].name + " - " + leatherArr[i].colorCode);
    }

    for (var i in hatArr) {
        extantHat.push(hatArr[i].name + " - " + hatArr[i].colorCode);
    }

    for (var i in colorList) {
        extantColors.push(colorList[i].name + " - " + colorList[i].colorCode);
    }
    if (insertedNotes.length != 0) {
        insertedNotes.push("\n")
    }
    if (extantHat.length != 0) {
        extantHat.push("\n")
    }
    if (bgArr.length != 0) {
        bgArr.push("\n")
    }
    if (extantColors.length != 0) {
        extantColors.push("\n")
    }
    if (extantLeather.length != 0) {
        extantLeather.push("\n")
    }

    // creates an Array with the Background first then the valid colors then the undefined colors
    var finalArr = colorKey.concat(insertedNotes, extantHat, bgArr, extantColors, extantLeather, missingColors);


    function readColors(s, colorsObj) {
        //takes variable and emty array makes hex codes
        for (var i = 0; i < s.length; i += 3) {
            var cur = toHex(s, i, 3);
            updateProgress(i, s.length);
            colorsObj[cur] = 1;
        }
    }


    //this one is called in readColors, creates the hex code from whatever raw data it recieves
    /**
     * Calculate the hex code of the given bits
     */
    function toHex(s, from, bits) {
        var h = '';
        for (var i = from; i < from + bits; i++)
            h += (('0' + s.charCodeAt(i).toString(16)).slice(-2));

        return h
    }

    //this one?? is for the DE_CIE76 which I don't actually need I think?
    //// BY MICHAEL: I think this calculates the euclidean distance between colors, but I
    //// think you're right that it never gets used
    function deltaE(a, b) {
        return Math.sqrt(Math.pow(b.lab.l - a.lab.l, 2) + Math.pow(b.lab.a - a.lab.a, 2) + Math.pow(b.lab.b - a.lab.b, 2))
    }
    return finalArr.join("\n")
}
//end of big color function

function makeAnnotation(posX, posY) {

    function cTID(s) { return app.charIDToTypeID(s); };

    function sTID(s) { return app.stringIDToTypeID(s); };

    var desc30 = new ActionDescriptor();

    var ref12 = new ActionReference();

    ref12.putClass(sTID('annotation'));

    desc30.putReference(cTID('null'), ref12);

    var desc31 = new ActionDescriptor();

    var desc32 = new ActionDescriptor();

    desc32.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), posX);

    desc32.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), posY);

    desc31.putObject(cTID('Lctn'), cTID('Pnt '), desc32);

    var desc33 = new ActionDescriptor();

    desc33.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 240.000000);

    desc33.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 140.000000);

    desc31.putObject(cTID('Sz  '), cTID('Ofst'), desc33);

    desc31.putEnumerated(sTID('annotType'), sTID('annotType'), sTID('annotText'));

    desc30.putObject(cTID('Usng'), sTID('annotation'), desc31);

    executeAction(cTID('Mk  '), desc30, DialogModes.NO);

};


function writeInNote(endArray) {
    /////// Inserts text of finalArr into existing note ///////
    var idsetd = charIDToTypeID("setd");
    var desc58 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");

    var ref12 = new ActionReference();
    var idannotation = stringIDToTypeID("annotation");
    ref12.putIndex(idannotation, 0); // the number/index of note
    desc58.putReference(idnull, ref12);

    var idT = charIDToTypeID("T   ");

    var desc59 = new ActionDescriptor();
    var idTxtD = charIDToTypeID("TxtD");

    // BY MICHAEL: I have no idea what the heck is going on here lol - it's creating a string from bytes for some reason
    desc59.putData(idTxtD, String.fromCharCode(
        255, 254, 116, 0, 104, 0, 105, 0, 115, 0, 32, 0, 105, 0, 115, 0, 32, 0, 116, 0, 101, 0, 120, 0, 116, 0, 32, 0, 105, 0, 110, 0, 32, 0, 97, 0, 32, 0, 110, 0, 111, 0, 116, 0, 101, 0
    ));

    // this is where finalArr comes in and is joined by a line break
    var idtext = stringIDToTypeID("text");
    desc59.putString(idtext, endArray);

    // then add the text as an annotation to your original document
    var idannotation = stringIDToTypeID("annotation");
    desc58.putObject(idT, idannotation, desc59);
    executeAction(idsetd, desc58, DialogModes.NO);
}

function checkArray(placeHolder, checkVariable) {
    for (var l = 0; l < placeHolder.length; l++) {
        if (placeHolder[l] == checkVariable) {
            return true
        }
    }
}