// 6 kyu Versions manager
//
// You have to implement a vm function returning an object.
// 
// It should accept an optional parameter that represents the initial version. 
// The input will be in one of the following formats: "{MAJOR}", "{MAJOR}.{MINOR}", or "{MAJOR}.{MINOR}.{PATCH}". 
// More values may be provided after PATCH but they should be ignored. 
// If these 3 parts are not decimal values, an exception with the message "Error occured while parsing version!" should be thrown. 
// If the initial version is not provided or is an empty string, use "0.0.1" by default.
// 
// This class should support the following methods, all of which should be chainable (except release):
// 
//     major() - increase MAJOR by 1, set MINOR and PATCH to 0
//     minor() - increase MINOR by 1, set PATCH to 0
//     patch() - increase PATCH by 1
//     rollback() - return the MAJOR, MINOR, and PATCH to their values before the previous 
//                  major/minor/patch call, or throw an exception with the message "Cannot rollback!" if there's no version to roll back to
//     release() - return a string in the format "{MAJOR}.{MINOR}.{PATCH}"
// 
// May the binary force be with you!
//
// Answer:
function vm(val = '') {
    let full = { maj: 0, min: 0, pat: 0 };
    let last = []; //{ maj: 0, min: 0, pat: 0 };
    if (val) {
        let arr = val.split('.');
        arr.splice(3);
        if (arr.some(e => isNaN(e))) throw new Error('Error occured while parsing version!');
        full.maj = arr[0] || 0;
        full.min = arr[1] || 0;
        full.pat = arr[2] || 0;
    } else {
        full.maj = 0;
        full.min = 0;
        full.pat = 1;
    }

    this.release = function () {
        return `${full.maj}.${full.min}.${full.pat}`;
    };
    this.major = function () {
        last.push({ maj: full.maj, min: full.min, pat: full.pat });
        full.maj++;
        full.min = 0;
        full.pat = 0;
        return this;
    };
    this.minor = function () {
        last.push({ maj: full.maj, min: full.min, pat: full.pat });
        full.min++;
        full.pat = 0;
        return this;
    };
    this.patch = function () {
        last.push({ maj: full.maj, min: full.min, pat: full.pat });
        full.pat++;
        return this;
    };
    this.rollback = function () {
        if (!last.length) throw new Error('Cannot rollback!');
        let roll = last.pop();
        full.maj = roll.maj;
        full.min = roll.min;
        full.pat = roll.pat;
        return this;
    };

    return this;
}