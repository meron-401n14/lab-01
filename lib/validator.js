'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {
  return true;
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};
// isNUmber 
validator.isNumber = (input) => {
  return typeof input === 'number' && isFinite(input);
}
// isArray
validator.isArray=(input)=>{
  return input && typeof input === 'object' && input.constructor === Array;
}
// isFunction
validator.isFunction = (input)=> {
  return typeof input === 'function';
}
  // isObject
validator.isObject = (input) => {
  return value && typeof input === 'object' && input.constructor ===  Object;
}


