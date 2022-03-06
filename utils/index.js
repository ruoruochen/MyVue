"use strict";
exports.__esModule = true;
exports.remove = exports.hasOwn = exports.isObject = void 0;
function isObject(value) {
    return value !== null && typeof value === "object";
}
exports.isObject = isObject;
function hasOwn(value, key) {
    return Object.prototype.hasOwnProperty.call(value, key);
}
exports.hasOwn = hasOwn;
function remove(array, item) {
    if (array.length) {
        var index = array.indexOf(item);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
}
exports.remove = remove;
