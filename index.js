var recipes = {};

var updateObjectWithKeyAndValue = function(object, key, value) {
  newObject = {...object};
  newObject[key] = value;
  return object;
};
