// DESCRIPTION
//
//
// Answer:
function solution(input) {
    return input;
}

// Do this via old timey long multiplication


function cleanInput(val) {
    if(val.indexOf('.') != val.lastIndexOf('.')) return 0;

    // negative with leading 0 (will turn '-000' into '-', check for this)
    "-00014".replace(/^-[0]+/, '-'); // do this first
    val = val.replace(/^-[0]+/, '-');

    // positive with leading 0 (will turn '000' into '', check for this)
    // "00014".replace(/^0+/, '');

    // both leading and trailing 0
    "00014000".replace(/^0+|\.0+$/g, ''); 
    // val =  val.replace(/^0+|\.*0+$/g, '');  // this has * which removes trailing zeros
    
    // leading 0
    val =  val.replace(/^0+/g, '');

    // trailing 0
    val =  val.replace(/(\.[0-9]*[1-9])0+$|\.0*$/,'$1');


    // strip off trailing decimal (.)
    "00014000.".replace(/\.+$/, '');    // finally this
    val =   val.replace(/\.+$/, '');

    // Make .01 into 0.01  MIGHT NOT BE NEEDED, TEST
    val = val.replace(/^-[\.]+/, '-0.');
    val = val.replace(/^\.+/, '0.');

    val = val==='' || val==='-' ? 0 : val;

    console.log(val);
    return val;
}