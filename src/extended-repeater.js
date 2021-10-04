import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 export default function repeater(str, options) {
  let result = "";
  let {
    repeatTimes = 0,
    separator = "+",
    addition = "",
    additionRepeatTimes = 0,
    additionSeparator = "|",
  } = options;
  if (repeatTimes == 0) {
    result = str + addition;
  }
  for (let i = 0; i < repeatTimes; i++) {
    result += str;
    if (addition && !additionRepeatTimes) {
      result += addition;
    }
    if (additionRepeatTimes > 0) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        result += addition;
        result += additionRepeatTimes - j == 1 ? "" : additionSeparator;
      }
    }
    result += repeatTimes - i == 1 ? "" : separator;
  }

  return result;
}