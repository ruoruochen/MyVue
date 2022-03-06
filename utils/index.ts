export function isObject(value: any): boolean {
  return value !== null && typeof value === "object";
}

export function hasOwn(value: any, key: any): boolean {
  return Object.prototype.hasOwnProperty.call(value, key);
}

export function remove(array: Array<any>, item) {
  if (array.length) {
    const index = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
}
