const isEmptyObject = myObject => {
  for (var key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      return false
    }
  }
  return true
}

if (window) {
  window.isEmptyObject = isEmptyObject
}

if (global) {
  global.isEmptyObject = isEmptyObject
}
