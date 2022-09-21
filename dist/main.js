/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/domController.js":
/*!******************************!*\
  !*** ./src/domController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayCompleted": () => (/* binding */ displayCompleted),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "loadLists": () => (/* binding */ loadLists),
/* harmony export */   "loadMainContent": () => (/* binding */ loadMainContent),
/* harmony export */   "sidebarBtnFunction": () => (/* binding */ sidebarBtnFunction)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


const maincontent = document.querySelector('.maincontent')

const sidebarBtnFunction = () => {
    const taskBtn = document.querySelector('#tasksbtn')
    const todayBtn = document.querySelector('#todaybtn')
    const importantBtn = document.querySelector('#importantbtn')
    const completedBtn = document.querySelector('#completedbtn')
    const listFormBtn = document.querySelector('#addlistbtn')
    const addListBtn = document.querySelector('#addlist')
    const closeListFormBtn = document.querySelector('#closelistform')


    taskBtn.addEventListener('click', () => {;(0,_index__WEBPACK_IMPORTED_MODULE_0__.loadTabs)("Tasks")})

    todayBtn.addEventListener('click', () => {;(0,_index__WEBPACK_IMPORTED_MODULE_0__.loadTabs)("Today")})
    
    importantBtn.addEventListener('click', () => {;(0,_index__WEBPACK_IMPORTED_MODULE_0__.loadTabs)("Important")})

    completedBtn.addEventListener('click', () => {;(0,_index__WEBPACK_IMPORTED_MODULE_0__.loadTabs)("Completed")})

    listFormBtn.addEventListener('click', () => {
        document.querySelector('#addlistform').style.display = "flex";
    })

    addListBtn.addEventListener('click', () => {
        const listname = document.querySelector('#addlistform > input[type="text"]')
        if (listname == "") {alert("Please enter list name"); return;}

        (0,_index__WEBPACK_IMPORTED_MODULE_0__.createList)(listname.value);
        listname.value = ""
        document.querySelector('#addlistform').style.display = "none";
    })

    closeListFormBtn.addEventListener('click', () => {
        document.querySelector('#addlistform').style.display = "none";
    })
    
}

const loadLists = (listArray) => {
    console.log(listArray);
    if (listArray == null) {return}

    //clear list container
    const listContainer = document.querySelector('#listcontainer')
    listContainer.innerHTML = "";

    //add list button for each list
    listArray.forEach((list) => {
        console.log(list)
        if (list.listId == 0) {return}
        listContainer.innerHTML += `<div class="list"><button class="list" data-list=${list.listId}>
        <span class="material-symbols-outlined">list</span>${list.name}</button>
        <button class="dellist" data-list=${list.listId}><span class="material-symbols-outlined">delete</span></button>
        </div>`
    })

    //add functionality to list buttons
    const listBtns = document.querySelectorAll("button.list")
    const delListBtns = document.querySelectorAll(".dellist")
    listBtns.forEach(btn => btn.addEventListener('click', (event) => {
        console.log(event.currentTarget.dataset.list)
        ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.loadTabs)(event.currentTarget.dataset.list)
    }))

    
    delListBtns.forEach(btn => btn.addEventListener('click', (event) => {
        ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.deleteList)(event.currentTarget.dataset.list)
    }))

}


const loadMainContent = (tabname, listIndex = 0) => {
    // maincontent.removeAttribute('class')
    // maincontent.classList.add('maincontent')
    
    //load display
    maincontent.innerHTML = ""   
    const headingHTML = `<div id="main-heading"><h1>${tabname}</h1>
                            <button id="displayformbtn">
                            <span class="material-symbols-outlined">add</span>
                            </button> 
                            </div>
                            <div id="addtaskform">
                            <input type="text">
                            <input type="date">
                            <input class="star" type="checkbox">
                            <button type="button" id="addtask">Add</button>
                            <button type="button" id="canceladd">Cancel</button> 
                            </div>
                            <div class="taskcontainer"></div>`  
    maincontent.innerHTML += headingHTML
    
    
    if (tabname == "Important" || tabname == "Completed" || tabname == "Today") {
        document.querySelector('#displayformbtn').style.display = "none"
    }

    //form functionality and display
    const addTaskForm = document.querySelector('#addtaskform')
    document.querySelector('#displayformbtn').addEventListener('click', () => {
        addTaskForm.style.display = "block"
    })   

    //add functionality to form buttons
    document.querySelector('#addtask').addEventListener('click', () => {
        const taskName = document.querySelector('#addtaskform > input[type="text"]')
        const taskDate = document.querySelector('#addtaskform > input[type="date"]')
        const taskImportant = document.querySelector('#addtaskform > input[type="checkbox"]')
        if (taskName.value == "") {alert("Please enter a tilte for your task!"); return;}

        console.log("adding task")
        addTaskForm.style.display = "none";
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.addTask)(taskName.value, taskDate.value, listIndex, taskImportant.checked)
        taskName.value = ""
        taskDate.value = ""
        taskImportant.checked = false
    })

    document.querySelector('#canceladd').addEventListener('click', () => {
        addTaskForm.style.display = "none";
    })

}

const displayTasks = (taskArray) => {
    console.log("displaying Task")
    const taskContainer = document.querySelector('.taskcontainer')
    taskContainer.innerHTML = ""

    //display all task
    console.log(taskArray)
    taskArray.forEach((task, index) => {
        const taskTemplate = `<div class="${task.completed ? "task completed" : "task"}" data-displayorder=${index}>
        <input type="checkbox" class="taskcompleted" data-displayorder=${index}>
        <span class="taskname" data-displayorder=${index}>${task.name}</span>
        <input type="date" class="taskdate" data-displayorder=${index} value=${task.date} >
        <button class="${task.important? "taskimportant true" : "taskimportant"}" data-displayorder=${index}>
        <span class="material-symbols-outlined">star</span>
        </button>
        <button class="deltask" data-displayorder=${index}><span class="material-symbols-outlined">delete</span></button>
        </div>`

        taskContainer.insertAdjacentHTML('beforeend', taskTemplate);

        console.log(task.taskId)
        console.log(task.listId)
        //add functionality to task buttons
        document.querySelector(`[data-displayorder="${index}"].taskdate`).addEventListener('input', (event) => {
            ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.toggleTask)(event, task.taskId, task.listId)
         })

        document.querySelector(`[data-displayorder="${index}"].taskimportant`).addEventListener('click', (event) => {
            ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.toggleTask)(event, task.taskId, task.listId)
            event.currentTarget.classList.toggle("true")

        })

        document.querySelector(`[data-displayorder="${index}"].taskcompleted`).addEventListener('change', (event) => {
            ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.toggleTask)(event, task.taskId, task.listId)
            //tasks disappear from the list after toggle
            document.querySelector(`[data-displayorder="${index}"].task`).style.display = "none"
        })

        document.querySelector(`[data-displayorder="${index}"].deltask`).addEventListener('click', (event) => {
            ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.toggleTask)(event, task.taskId, task.listId)
            document.querySelector(`[data-displayorder="${index}"].task`).style.display = "none"
        })
    })

}

const displayCompleted = () => {
    const tasks = document.querySelectorAll(".task.completed")
    tasks.forEach(task => {
        console.log(task)
        task.style.display = "flex"
        task.querySelector("input[type=checkbox]").checked = true;
    });
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "createList": () => (/* binding */ createList),
/* harmony export */   "deleteList": () => (/* binding */ deleteList),
/* harmony export */   "loadTabs": () => (/* binding */ loadTabs),
/* harmony export */   "toggleTask": () => (/* binding */ toggleTask)
/* harmony export */ });
/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domController */ "./src/domController.js");
/* harmony import */ var _objectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectController */ "./src/objectController.js");
/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageController */ "./src/storageController.js");
 
   
 

const initiateStorage = () => {
    _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].initiateStorage()
}

const createList = (name) => {
    _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].newList(name)

    //call list display
    ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadLists)(_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getListArray())
}

 const addTask = (name, date, listId, important) => {
     //create new task object
     const taskId = Date.now()
     const newTask = (0,_objectController__WEBPACK_IMPORTED_MODULE_1__.task)(name, date, listId, important, false, taskId)
    
     console.log(newTask)
     //add task to list
     const listToAdd = _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(listId)
     listToAdd.addToList(newTask)
     
     //save it somewhere
    _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].saveList(listToAdd, listId)

     
    ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(listToAdd.getTasks())
    }

const toggleTask = (event, taskId, listId) => {
    const button = event.currentTarget.classList[0];
    const targetList = _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(listId);

    console.log(listId)
    console.log(button)
    console.log(targetList)
    switch (button) {
        case 'taskdate':
            targetList.updateTask(taskId, "date", event.currentTarget.value)
            break;   
        case 'taskimportant':
            targetList.updateTask(taskId, "important", "dummypara")
            break;   
        case 'taskcompleted':
            targetList.updateTask(taskId, "completed", "dummypara")
            break;  
        case 'deltask':
            targetList.deleteTask(taskId) 
        }  

    _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].saveList(targetList, listId)
}

const loadTabs = (tabName) => {
    
    const loadTasksTab = () => {
        
        console.log("Loading Task Tab")
        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadMainContent)(tabName)

        if (_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(0) == null){return}
        (0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(0).getTasks())
        
    }

    const loadTodayTab = () => {
        let displayArray = []
        const listArray = _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getListArray()

        listArray.forEach(list => {
            displayArray = displayArray.concat(_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(list.listId).getTodayTasks())
        });

        (0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadMainContent)(tabName)
        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(displayArray)
    }

    const loadImportantTab = () => {
        let displayArray = []
        const listArray = _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getListArray()

        listArray.forEach(list => {
            displayArray = displayArray.concat(_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(list.listId).getImportantTasks())
        });

        (0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadMainContent)(tabName)
        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(displayArray)
    }

    const loadCompletedTab = () => {
        let displayArray = []
        const listArray = _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getListArray()

        listArray.forEach(list => {
            displayArray = displayArray.concat(_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(list.listId).getCompletedTasks())
        });

        (0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadMainContent)(tabName)
        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(displayArray)
        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayCompleted)()
    }

    const loadListTab = () => {
        const listId = tabName;
        const listName = _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].findListNamebyId(listId)
        console.log(listName)
        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadMainContent)(listName, listId)
        console.log("now display tasks for tab")
        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(listId).getTasks())
        
    }

    console.log("before tab switch")
    switch (tabName) {
        case "Tasks":
            loadTasksTab();
            break;
        case "Today":
            loadTodayTab();
            break
        case "Important":
            loadImportantTab();
            break;
        case "Completed":
            loadCompletedTab ();
            break;
        default:
            loadListTab();
    }
}

const deleteList = (listId) => {
    _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].deleteList(listId)
    ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadLists)(_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getListArray())
}

initiateStorage();
(0,_domController__WEBPACK_IMPORTED_MODULE_0__.sidebarBtnFunction)();
(0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadLists)(_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getListArray())
loadTabs("Tasks")






/***/ }),

/***/ "./src/objectController.js":
/*!*********************************!*\
  !*** ./src/objectController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "list": () => (/* binding */ list),
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");


//task factory functions
const task = (name, date, listId, important, completed, taskId) => {
    return {name, date, listId, important, completed, taskId}
}

const list = (name) => {
    const tasks = []

    const addToList = (task) => {
        tasks.push(task)
    } 

    const getTasks = () => {
        return tasks
    }

    const updateTask = (taskId, key, newValue) => {
        let taskIndex = "";
        tasks.forEach((task, index) => task.taskId == taskId ?  taskIndex = index : false)
        console.log(taskIndex)
        console.log(key)
        if (key == "date") {tasks[taskIndex][key] = newValue}
        if (key == "important") {tasks[taskIndex][key] ? tasks[taskIndex][key] = false : tasks[taskIndex][key] = true}
        if (key == "completed") {tasks[taskIndex][key] ? tasks[taskIndex][key] = false : tasks[taskIndex][key] = true}
    }

    const deleteTask = (taskId) => {
        let taskIndex = "";
        tasks.forEach((task, index) => task.taskId == taskId ?  taskIndex = index : false)
        tasks.splice(taskIndex,1)
    }

    const getTodayTasks = () => {
        return tasks.filter(task => (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(task.date)))
    }

    const getImportantTasks = () => {
        return tasks.filter(task => task.important == true)
    }

    const getCompletedTasks = () => {
        return tasks.filter(task => task.completed == true)
    }

    return {name, addToList, getTasks, updateTask, getTodayTasks, getImportantTasks, getCompletedTasks, deleteTask}
}



/***/ }),

/***/ "./src/storageController.js":
/*!**********************************!*\
  !*** ./src/storageController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _objectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectController */ "./src/objectController.js");


const storageController = {
    initiateStorage: () => {
        if (localStorage.length == 0){
            const listArray = [{listId: 0, name: "defaulted"}]
            localStorage.setItem("listArray", JSON.stringify(listArray))
            localStorage.setItem("currentIndex", 0)
            localStorage.setItem(0, JSON.stringify([]))
        }
    },

    getListArray: () => {
        return JSON.parse(localStorage.getItem("listArray"))   
    },

    findListNamebyId: (listId) => {
        const listArray = storageController.getListArray();
        for (let i = 0; i < listArray.length; i++){
            if (listArray[i].listId == listId) {return listArray[i].name}
        }
    },

    newList: (name) => {
        const listArray = JSON.parse(localStorage.getItem("listArray"))
        
        const listId = parseInt(localStorage.getItem("currentIndex")) + 1
        localStorage.setItem("currentIndex", listId)
        localStorage.setItem(listId, JSON.stringify([]))
        
        //create new list in localStorage
        //updateListArray
        const newList = {listId, name}
        // newList.index = listArray.length
        // newList.name = name
        listArray.push(newList)
        localStorage.setItem("listArray", JSON.stringify(listArray))
    },

    saveList: (listToSave, listId) => {
        console.log(listId)
        localStorage.setItem(listId, JSON.stringify(listToSave.getTasks()))
    },

    getList: (listId) => {
        const listName = storageController.findListNamebyId(listId)
        const tasks = JSON.parse(localStorage.getItem(listId)) || []
        const calledList = (0,_objectController__WEBPACK_IMPORTED_MODULE_0__.list)(listName)
        tasks.forEach(task => calledList.addToList(task))
        return calledList
    },

    deleteList: (listId) => {
        localStorage.removeItem(listId)

        const listArray = JSON.parse(localStorage.getItem("listArray"))
        listArray.forEach((list,index) => {
            if (list.listId == listId){listArray.splice(index,1)}
        })
        localStorage.setItem("listArray", JSON.stringify(listArray))
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storageController);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtB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QWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXBvcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3JlcG9zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy9kb21Db250cm9sbGVyLmpzIiwid2VicGFjazovL3JlcG9zLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3JlcG9zLy4vc3JjL29iamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvc3RvcmFnZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcblxuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG5cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuXG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG5cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuXG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7IC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cblxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG5cbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IE5hTixcbiAgICByZXN0RGF0ZVN0cmluZzogJydcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsOyAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcblxuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiaW1wb3J0IHsgYWRkVGFzaywgdG9nZ2xlVGFzaywgY3JlYXRlTGlzdCwgbG9hZFRhYnMsIGRlbGV0ZUxpc3QgfSBmcm9tIFwiLi9pbmRleFwiXG5cbmNvbnN0IG1haW5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5jb250ZW50JylcblxuY29uc3Qgc2lkZWJhckJ0bkZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3NidG4nKVxuICAgIGNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5YnRuJylcbiAgICBjb25zdCBpbXBvcnRhbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1wb3J0YW50YnRuJylcbiAgICBjb25zdCBjb21wbGV0ZWRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcGxldGVkYnRuJylcbiAgICBjb25zdCBsaXN0Rm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRsaXN0YnRuJylcbiAgICBjb25zdCBhZGRMaXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZGxpc3QnKVxuICAgIGNvbnN0IGNsb3NlTGlzdEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2VsaXN0Zm9ybScpXG5cblxuICAgIHRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7bG9hZFRhYnMoXCJUYXNrc1wiKX0pXG5cbiAgICB0b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtsb2FkVGFicyhcIlRvZGF5XCIpfSlcbiAgICBcbiAgICBpbXBvcnRhbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7bG9hZFRhYnMoXCJJbXBvcnRhbnRcIil9KVxuXG4gICAgY29tcGxldGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2xvYWRUYWJzKFwiQ29tcGxldGVkXCIpfSlcblxuICAgIGxpc3RGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkbGlzdGZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfSlcblxuICAgIGFkZExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZGxpc3Rmb3JtID4gaW5wdXRbdHlwZT1cInRleHRcIl0nKVxuICAgICAgICBpZiAobGlzdG5hbWUgPT0gXCJcIikge2FsZXJ0KFwiUGxlYXNlIGVudGVyIGxpc3QgbmFtZVwiKTsgcmV0dXJuO31cblxuICAgICAgICBjcmVhdGVMaXN0KGxpc3RuYW1lLnZhbHVlKTtcbiAgICAgICAgbGlzdG5hbWUudmFsdWUgPSBcIlwiXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRsaXN0Zm9ybScpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KVxuXG4gICAgY2xvc2VMaXN0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZGxpc3Rmb3JtJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG4gICAgXG59XG5cbmNvbnN0IGxvYWRMaXN0cyA9IChsaXN0QXJyYXkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhsaXN0QXJyYXkpO1xuICAgIGlmIChsaXN0QXJyYXkgPT0gbnVsbCkge3JldHVybn1cblxuICAgIC8vY2xlYXIgbGlzdCBjb250YWluZXJcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3Rjb250YWluZXInKVxuICAgIGxpc3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIC8vYWRkIGxpc3QgYnV0dG9uIGZvciBlYWNoIGxpc3RcbiAgICBsaXN0QXJyYXkuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhsaXN0KVxuICAgICAgICBpZiAobGlzdC5saXN0SWQgPT0gMCkge3JldHVybn1cbiAgICAgICAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJsaXN0XCI+PGJ1dHRvbiBjbGFzcz1cImxpc3RcIiBkYXRhLWxpc3Q9JHtsaXN0Lmxpc3RJZH0+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmxpc3Q8L3NwYW4+JHtsaXN0Lm5hbWV9PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxsaXN0XCIgZGF0YS1saXN0PSR7bGlzdC5saXN0SWR9PjxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmRlbGV0ZTwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+YFxuICAgIH0pXG5cbiAgICAvL2FkZCBmdW5jdGlvbmFsaXR5IHRvIGxpc3QgYnV0dG9uc1xuICAgIGNvbnN0IGxpc3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbi5saXN0XCIpXG4gICAgY29uc3QgZGVsTGlzdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGxpc3RcIilcbiAgICBsaXN0QnRucy5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0Lmxpc3QpXG4gICAgICAgIGxvYWRUYWJzKGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5saXN0KVxuICAgIH0pKVxuXG4gICAgXG4gICAgZGVsTGlzdEJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGRlbGV0ZUxpc3QoZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0Lmxpc3QpXG4gICAgfSkpXG5cbn1cblxuXG5jb25zdCBsb2FkTWFpbkNvbnRlbnQgPSAodGFibmFtZSwgbGlzdEluZGV4ID0gMCkgPT4ge1xuICAgIC8vIG1haW5jb250ZW50LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuICAgIC8vIG1haW5jb250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW5jb250ZW50JylcbiAgICBcbiAgICAvL2xvYWQgZGlzcGxheVxuICAgIG1haW5jb250ZW50LmlubmVySFRNTCA9IFwiXCIgICBcbiAgICBjb25zdCBoZWFkaW5nSFRNTCA9IGA8ZGl2IGlkPVwibWFpbi1oZWFkaW5nXCI+PGgxPiR7dGFibmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJkaXNwbGF5Zm9ybWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmFkZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImFkZHRhc2tmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwic3RhclwiIHR5cGU9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiYWRkdGFza1wiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2FuY2VsYWRkXCI+Q2FuY2VsPC9idXR0b24+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrY29udGFpbmVyXCI+PC9kaXY+YCAgXG4gICAgbWFpbmNvbnRlbnQuaW5uZXJIVE1MICs9IGhlYWRpbmdIVE1MXG4gICAgXG4gICAgXG4gICAgaWYgKHRhYm5hbWUgPT0gXCJJbXBvcnRhbnRcIiB8fCB0YWJuYW1lID09IFwiQ29tcGxldGVkXCIgfHwgdGFibmFtZSA9PSBcIlRvZGF5XCIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc3BsYXlmb3JtYnRuJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgfVxuXG4gICAgLy9mb3JtIGZ1bmN0aW9uYWxpdHkgYW5kIGRpc3BsYXlcbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGR0YXNrZm9ybScpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc3BsYXlmb3JtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFkZFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICB9KSAgIFxuXG4gICAgLy9hZGQgZnVuY3Rpb25hbGl0eSB0byBmb3JtIGJ1dHRvbnNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkdGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGR0YXNrZm9ybSA+IGlucHV0W3R5cGU9XCJ0ZXh0XCJdJylcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkdGFza2Zvcm0gPiBpbnB1dFt0eXBlPVwiZGF0ZVwiXScpXG4gICAgICAgIGNvbnN0IHRhc2tJbXBvcnRhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkdGFza2Zvcm0gPiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKVxuICAgICAgICBpZiAodGFza05hbWUudmFsdWUgPT0gXCJcIikge2FsZXJ0KFwiUGxlYXNlIGVudGVyIGEgdGlsdGUgZm9yIHlvdXIgdGFzayFcIik7IHJldHVybjt9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJhZGRpbmcgdGFza1wiKVxuICAgICAgICBhZGRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGFkZFRhc2sodGFza05hbWUudmFsdWUsIHRhc2tEYXRlLnZhbHVlLCBsaXN0SW5kZXgsIHRhc2tJbXBvcnRhbnQuY2hlY2tlZClcbiAgICAgICAgdGFza05hbWUudmFsdWUgPSBcIlwiXG4gICAgICAgIHRhc2tEYXRlLnZhbHVlID0gXCJcIlxuICAgICAgICB0YXNrSW1wb3J0YW50LmNoZWNrZWQgPSBmYWxzZVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsYWRkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFkZFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KVxuXG59XG5cbmNvbnN0IGRpc3BsYXlUYXNrcyA9ICh0YXNrQXJyYXkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImRpc3BsYXlpbmcgVGFza1wiKVxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza2NvbnRhaW5lcicpXG4gICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXG5cbiAgICAvL2Rpc3BsYXkgYWxsIHRhc2tcbiAgICBjb25zb2xlLmxvZyh0YXNrQXJyYXkpXG4gICAgdGFza0FycmF5LmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tUZW1wbGF0ZSA9IGA8ZGl2IGNsYXNzPVwiJHt0YXNrLmNvbXBsZXRlZCA/IFwidGFzayBjb21wbGV0ZWRcIiA6IFwidGFza1wifVwiIGRhdGEtZGlzcGxheW9yZGVyPSR7aW5kZXh9PlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJ0YXNrY29tcGxldGVkXCIgZGF0YS1kaXNwbGF5b3JkZXI9JHtpbmRleH0+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGFza25hbWVcIiBkYXRhLWRpc3BsYXlvcmRlcj0ke2luZGV4fT4ke3Rhc2submFtZX08L3NwYW4+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwidGFza2RhdGVcIiBkYXRhLWRpc3BsYXlvcmRlcj0ke2luZGV4fSB2YWx1ZT0ke3Rhc2suZGF0ZX0gPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiJHt0YXNrLmltcG9ydGFudD8gXCJ0YXNraW1wb3J0YW50IHRydWVcIiA6IFwidGFza2ltcG9ydGFudFwifVwiIGRhdGEtZGlzcGxheW9yZGVyPSR7aW5kZXh9PlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5zdGFyPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbHRhc2tcIiBkYXRhLWRpc3BsYXlvcmRlcj0ke2luZGV4fT48c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5kZWxldGU8L3NwYW4+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PmBcblxuICAgICAgICB0YXNrQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGFza1RlbXBsYXRlKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrLnRhc2tJZClcbiAgICAgICAgY29uc29sZS5sb2codGFzay5saXN0SWQpXG4gICAgICAgIC8vYWRkIGZ1bmN0aW9uYWxpdHkgdG8gdGFzayBidXR0b25zXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWRpc3BsYXlvcmRlcj1cIiR7aW5kZXh9XCJdLnRhc2tkYXRlYCkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRvZ2dsZVRhc2soZXZlbnQsIHRhc2sudGFza0lkLCB0YXNrLmxpc3RJZClcbiAgICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZGlzcGxheW9yZGVyPVwiJHtpbmRleH1cIl0udGFza2ltcG9ydGFudGApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0b2dnbGVUYXNrKGV2ZW50LCB0YXNrLnRhc2tJZCwgdGFzay5saXN0SWQpXG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJ0cnVlXCIpXG5cbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1kaXNwbGF5b3JkZXI9XCIke2luZGV4fVwiXS50YXNrY29tcGxldGVkYCkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0b2dnbGVUYXNrKGV2ZW50LCB0YXNrLnRhc2tJZCwgdGFzay5saXN0SWQpXG4gICAgICAgICAgICAvL3Rhc2tzIGRpc2FwcGVhciBmcm9tIHRoZSBsaXN0IGFmdGVyIHRvZ2dsZVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZGlzcGxheW9yZGVyPVwiJHtpbmRleH1cIl0udGFza2ApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWRpc3BsYXlvcmRlcj1cIiR7aW5kZXh9XCJdLmRlbHRhc2tgKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlVGFzayhldmVudCwgdGFzay50YXNrSWQsIHRhc2subGlzdElkKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZGlzcGxheW9yZGVyPVwiJHtpbmRleH1cIl0udGFza2ApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9KVxuICAgIH0pXG5cbn1cblxuY29uc3QgZGlzcGxheUNvbXBsZXRlZCA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay5jb21wbGV0ZWRcIilcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrKVxuICAgICAgICB0YXNrLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPWNoZWNrYm94XVwiKS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHtcbiAgICBzaWRlYmFyQnRuRnVuY3Rpb24sXG4gICAgbG9hZE1haW5Db250ZW50LFxuICAgIGRpc3BsYXlUYXNrcyxcbiAgICBsb2FkTGlzdHMsXG4gICAgZGlzcGxheUNvbXBsZXRlZFxufSIsIiBpbXBvcnQgeyBzaWRlYmFyQnRuRnVuY3Rpb24sIGxvYWRUYXNrcywgZGlzcGxheVRhc2tzLCBsb2FkTGlzdHMsIGxvYWRNYWluQ29udGVudCwgZGlzcGxheUNvbXBsZXRlZH0gZnJvbSBcIi4vZG9tQ29udHJvbGxlclwiO1xuIGltcG9ydCB7IHRhc2ssIGxpc3QgfSBmcm9tIFwiLi9vYmplY3RDb250cm9sbGVyXCI7ICBcbiBpbXBvcnQgc3RvcmFnZUNvbnRyb2xsZXIgZnJvbSBcIi4vc3RvcmFnZUNvbnRyb2xsZXJcIjtcblxuY29uc3QgaW5pdGlhdGVTdG9yYWdlID0gKCkgPT4ge1xuICAgIHN0b3JhZ2VDb250cm9sbGVyLmluaXRpYXRlU3RvcmFnZSgpXG59XG5cbmNvbnN0IGNyZWF0ZUxpc3QgPSAobmFtZSkgPT4ge1xuICAgIHN0b3JhZ2VDb250cm9sbGVyLm5ld0xpc3QobmFtZSlcblxuICAgIC8vY2FsbCBsaXN0IGRpc3BsYXlcbiAgICBsb2FkTGlzdHMoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdEFycmF5KCkpXG59XG5cbiBjb25zdCBhZGRUYXNrID0gKG5hbWUsIGRhdGUsIGxpc3RJZCwgaW1wb3J0YW50KSA9PiB7XG4gICAgIC8vY3JlYXRlIG5ldyB0YXNrIG9iamVjdFxuICAgICBjb25zdCB0YXNrSWQgPSBEYXRlLm5vdygpXG4gICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKG5hbWUsIGRhdGUsIGxpc3RJZCwgaW1wb3J0YW50LCBmYWxzZSwgdGFza0lkKVxuICAgIFxuICAgICBjb25zb2xlLmxvZyhuZXdUYXNrKVxuICAgICAvL2FkZCB0YXNrIHRvIGxpc3RcbiAgICAgY29uc3QgbGlzdFRvQWRkID0gc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdChsaXN0SWQpXG4gICAgIGxpc3RUb0FkZC5hZGRUb0xpc3QobmV3VGFzaylcbiAgICAgXG4gICAgIC8vc2F2ZSBpdCBzb21ld2hlcmVcbiAgICBzdG9yYWdlQ29udHJvbGxlci5zYXZlTGlzdChsaXN0VG9BZGQsIGxpc3RJZClcblxuICAgICBcbiAgICBkaXNwbGF5VGFza3MobGlzdFRvQWRkLmdldFRhc2tzKCkpXG4gICAgfVxuXG5jb25zdCB0b2dnbGVUYXNrID0gKGV2ZW50LCB0YXNrSWQsIGxpc3RJZCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0WzBdO1xuICAgIGNvbnN0IHRhcmdldExpc3QgPSBzdG9yYWdlQ29udHJvbGxlci5nZXRMaXN0KGxpc3RJZCk7XG5cbiAgICBjb25zb2xlLmxvZyhsaXN0SWQpXG4gICAgY29uc29sZS5sb2coYnV0dG9uKVxuICAgIGNvbnNvbGUubG9nKHRhcmdldExpc3QpXG4gICAgc3dpdGNoIChidXR0b24pIHtcbiAgICAgICAgY2FzZSAndGFza2RhdGUnOlxuICAgICAgICAgICAgdGFyZ2V0TGlzdC51cGRhdGVUYXNrKHRhc2tJZCwgXCJkYXRlXCIsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gICAgICAgICAgICBicmVhazsgICBcbiAgICAgICAgY2FzZSAndGFza2ltcG9ydGFudCc6XG4gICAgICAgICAgICB0YXJnZXRMaXN0LnVwZGF0ZVRhc2sodGFza0lkLCBcImltcG9ydGFudFwiLCBcImR1bW15cGFyYVwiKVxuICAgICAgICAgICAgYnJlYWs7ICAgXG4gICAgICAgIGNhc2UgJ3Rhc2tjb21wbGV0ZWQnOlxuICAgICAgICAgICAgdGFyZ2V0TGlzdC51cGRhdGVUYXNrKHRhc2tJZCwgXCJjb21wbGV0ZWRcIiwgXCJkdW1teXBhcmFcIilcbiAgICAgICAgICAgIGJyZWFrOyAgXG4gICAgICAgIGNhc2UgJ2RlbHRhc2snOlxuICAgICAgICAgICAgdGFyZ2V0TGlzdC5kZWxldGVUYXNrKHRhc2tJZCkgXG4gICAgICAgIH0gIFxuXG4gICAgc3RvcmFnZUNvbnRyb2xsZXIuc2F2ZUxpc3QodGFyZ2V0TGlzdCwgbGlzdElkKVxufVxuXG5jb25zdCBsb2FkVGFicyA9ICh0YWJOYW1lKSA9PiB7XG4gICAgXG4gICAgY29uc3QgbG9hZFRhc2tzVGFiID0gKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIFRhc2sgVGFiXCIpXG4gICAgICAgIGxvYWRNYWluQ29udGVudCh0YWJOYW1lKVxuXG4gICAgICAgIGlmIChzdG9yYWdlQ29udHJvbGxlci5nZXRMaXN0KDApID09IG51bGwpe3JldHVybn1cbiAgICAgICAgZGlzcGxheVRhc2tzKHN0b3JhZ2VDb250cm9sbGVyLmdldExpc3QoMCkuZ2V0VGFza3MoKSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgbG9hZFRvZGF5VGFiID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGlzcGxheUFycmF5ID0gW11cbiAgICAgICAgY29uc3QgbGlzdEFycmF5ID0gc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdEFycmF5KClcblxuICAgICAgICBsaXN0QXJyYXkuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlBcnJheSA9IGRpc3BsYXlBcnJheS5jb25jYXQoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdChsaXN0Lmxpc3RJZCkuZ2V0VG9kYXlUYXNrcygpKVxuICAgICAgICB9KTtcblxuICAgICAgICBsb2FkTWFpbkNvbnRlbnQodGFiTmFtZSlcbiAgICAgICAgZGlzcGxheVRhc2tzKGRpc3BsYXlBcnJheSlcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkSW1wb3J0YW50VGFiID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGlzcGxheUFycmF5ID0gW11cbiAgICAgICAgY29uc3QgbGlzdEFycmF5ID0gc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdEFycmF5KClcblxuICAgICAgICBsaXN0QXJyYXkuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlBcnJheSA9IGRpc3BsYXlBcnJheS5jb25jYXQoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdChsaXN0Lmxpc3RJZCkuZ2V0SW1wb3J0YW50VGFza3MoKSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbG9hZE1haW5Db250ZW50KHRhYk5hbWUpXG4gICAgICAgIGRpc3BsYXlUYXNrcyhkaXNwbGF5QXJyYXkpXG4gICAgfVxuXG4gICAgY29uc3QgbG9hZENvbXBsZXRlZFRhYiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGRpc3BsYXlBcnJheSA9IFtdXG4gICAgICAgIGNvbnN0IGxpc3RBcnJheSA9IHN0b3JhZ2VDb250cm9sbGVyLmdldExpc3RBcnJheSgpXG5cbiAgICAgICAgbGlzdEFycmF5LmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5QXJyYXkgPSBkaXNwbGF5QXJyYXkuY29uY2F0KHN0b3JhZ2VDb250cm9sbGVyLmdldExpc3QobGlzdC5saXN0SWQpLmdldENvbXBsZXRlZFRhc2tzKCkpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvYWRNYWluQ29udGVudCh0YWJOYW1lKVxuICAgICAgICBkaXNwbGF5VGFza3MoZGlzcGxheUFycmF5KVxuICAgICAgICBkaXNwbGF5Q29tcGxldGVkKClcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkTGlzdFRhYiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdElkID0gdGFiTmFtZTtcbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBzdG9yYWdlQ29udHJvbGxlci5maW5kTGlzdE5hbWVieUlkKGxpc3RJZClcbiAgICAgICAgY29uc29sZS5sb2cobGlzdE5hbWUpXG4gICAgICAgIGxvYWRNYWluQ29udGVudChsaXN0TmFtZSwgbGlzdElkKVxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdyBkaXNwbGF5IHRhc2tzIGZvciB0YWJcIilcbiAgICAgICAgZGlzcGxheVRhc2tzKHN0b3JhZ2VDb250cm9sbGVyLmdldExpc3QobGlzdElkKS5nZXRUYXNrcygpKVxuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImJlZm9yZSB0YWIgc3dpdGNoXCIpXG4gICAgc3dpdGNoICh0YWJOYW1lKSB7XG4gICAgICAgIGNhc2UgXCJUYXNrc1wiOlxuICAgICAgICAgICAgbG9hZFRhc2tzVGFiKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlRvZGF5XCI6XG4gICAgICAgICAgICBsb2FkVG9kYXlUYWIoKTtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgXCJJbXBvcnRhbnRcIjpcbiAgICAgICAgICAgIGxvYWRJbXBvcnRhbnRUYWIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQ29tcGxldGVkXCI6XG4gICAgICAgICAgICBsb2FkQ29tcGxldGVkVGFiICgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsb2FkTGlzdFRhYigpO1xuICAgIH1cbn1cblxuY29uc3QgZGVsZXRlTGlzdCA9IChsaXN0SWQpID0+IHtcbiAgICBzdG9yYWdlQ29udHJvbGxlci5kZWxldGVMaXN0KGxpc3RJZClcbiAgICBsb2FkTGlzdHMoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdEFycmF5KCkpXG59XG5cbmluaXRpYXRlU3RvcmFnZSgpO1xuc2lkZWJhckJ0bkZ1bmN0aW9uKCk7XG5sb2FkTGlzdHMoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdEFycmF5KCkpXG5sb2FkVGFicyhcIlRhc2tzXCIpXG5cblxuXG5cbmV4cG9ydCB7XG4gICAgYWRkVGFzayxcbiAgICB0b2dnbGVUYXNrLFxuICAgIGNyZWF0ZUxpc3QsXG4gICAgbG9hZFRhYnMsXG4gICAgZGVsZXRlTGlzdFxufSIsImltcG9ydCB7IGlzVG9kYXksIHBhcnNlSVNPIH0gZnJvbSBcImRhdGUtZm5zXCJcblxuLy90YXNrIGZhY3RvcnkgZnVuY3Rpb25zXG5jb25zdCB0YXNrID0gKG5hbWUsIGRhdGUsIGxpc3RJZCwgaW1wb3J0YW50LCBjb21wbGV0ZWQsIHRhc2tJZCkgPT4ge1xuICAgIHJldHVybiB7bmFtZSwgZGF0ZSwgbGlzdElkLCBpbXBvcnRhbnQsIGNvbXBsZXRlZCwgdGFza0lkfVxufVxuXG5jb25zdCBsaXN0ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IFtdXG5cbiAgICBjb25zdCBhZGRUb0xpc3QgPSAodGFzaykgPT4ge1xuICAgICAgICB0YXNrcy5wdXNoKHRhc2spXG4gICAgfSBcblxuICAgIGNvbnN0IGdldFRhc2tzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGFza3NcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVUYXNrID0gKHRhc2tJZCwga2V5LCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICBsZXQgdGFza0luZGV4ID0gXCJcIjtcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHRhc2sudGFza0lkID09IHRhc2tJZCA/ICB0YXNrSW5kZXggPSBpbmRleCA6IGZhbHNlKVxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrSW5kZXgpXG4gICAgICAgIGNvbnNvbGUubG9nKGtleSlcbiAgICAgICAgaWYgKGtleSA9PSBcImRhdGVcIikge3Rhc2tzW3Rhc2tJbmRleF1ba2V5XSA9IG5ld1ZhbHVlfVxuICAgICAgICBpZiAoa2V5ID09IFwiaW1wb3J0YW50XCIpIHt0YXNrc1t0YXNrSW5kZXhdW2tleV0gPyB0YXNrc1t0YXNrSW5kZXhdW2tleV0gPSBmYWxzZSA6IHRhc2tzW3Rhc2tJbmRleF1ba2V5XSA9IHRydWV9XG4gICAgICAgIGlmIChrZXkgPT0gXCJjb21wbGV0ZWRcIikge3Rhc2tzW3Rhc2tJbmRleF1ba2V5XSA/IHRhc2tzW3Rhc2tJbmRleF1ba2V5XSA9IGZhbHNlIDogdGFza3NbdGFza0luZGV4XVtrZXldID0gdHJ1ZX1cbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVUYXNrID0gKHRhc2tJZCkgPT4ge1xuICAgICAgICBsZXQgdGFza0luZGV4ID0gXCJcIjtcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHRhc2sudGFza0lkID09IHRhc2tJZCA/ICB0YXNrSW5kZXggPSBpbmRleCA6IGZhbHNlKVxuICAgICAgICB0YXNrcy5zcGxpY2UodGFza0luZGV4LDEpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VG9kYXlUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRhc2tzLmZpbHRlcih0YXNrID0+IGlzVG9kYXkocGFyc2VJU08odGFzay5kYXRlKSkpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SW1wb3J0YW50VGFza3MgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmltcG9ydGFudCA9PSB0cnVlKVxuICAgIH1cblxuICAgIGNvbnN0IGdldENvbXBsZXRlZFRhc2tzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5jb21wbGV0ZWQgPT0gdHJ1ZSlcbiAgICB9XG5cbiAgICByZXR1cm4ge25hbWUsIGFkZFRvTGlzdCwgZ2V0VGFza3MsIHVwZGF0ZVRhc2ssIGdldFRvZGF5VGFza3MsIGdldEltcG9ydGFudFRhc2tzLCBnZXRDb21wbGV0ZWRUYXNrcywgZGVsZXRlVGFza31cbn1cblxuZXhwb3J0IHtcbiAgICB0YXNrLFxuICAgIGxpc3Rcbn0iLCJpbXBvcnQge2xpc3R9IGZyb20gXCIuL29iamVjdENvbnRyb2xsZXJcIjtcblxuY29uc3Qgc3RvcmFnZUNvbnRyb2xsZXIgPSB7XG4gICAgaW5pdGlhdGVTdG9yYWdlOiAoKSA9PiB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgY29uc3QgbGlzdEFycmF5ID0gW3tsaXN0SWQ6IDAsIG5hbWU6IFwiZGVmYXVsdGVkXCJ9XVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkobGlzdEFycmF5KSlcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudEluZGV4XCIsIDApXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgwLCBKU09OLnN0cmluZ2lmeShbXSkpXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0TGlzdEFycmF5OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdEFycmF5XCIpKSAgIFxuICAgIH0sXG5cbiAgICBmaW5kTGlzdE5hbWVieUlkOiAobGlzdElkKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RBcnJheSA9IHN0b3JhZ2VDb250cm9sbGVyLmdldExpc3RBcnJheSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAobGlzdEFycmF5W2ldLmxpc3RJZCA9PSBsaXN0SWQpIHtyZXR1cm4gbGlzdEFycmF5W2ldLm5hbWV9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbmV3TGlzdDogKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RBcnJheVwiKSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxpc3RJZCA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudEluZGV4XCIpKSArIDFcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50SW5kZXhcIiwgbGlzdElkKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsaXN0SWQsIEpTT04uc3RyaW5naWZ5KFtdKSlcbiAgICAgICAgXG4gICAgICAgIC8vY3JlYXRlIG5ldyBsaXN0IGluIGxvY2FsU3RvcmFnZVxuICAgICAgICAvL3VwZGF0ZUxpc3RBcnJheVxuICAgICAgICBjb25zdCBuZXdMaXN0ID0ge2xpc3RJZCwgbmFtZX1cbiAgICAgICAgLy8gbmV3TGlzdC5pbmRleCA9IGxpc3RBcnJheS5sZW5ndGhcbiAgICAgICAgLy8gbmV3TGlzdC5uYW1lID0gbmFtZVxuICAgICAgICBsaXN0QXJyYXkucHVzaChuZXdMaXN0KVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RBcnJheVwiLCBKU09OLnN0cmluZ2lmeShsaXN0QXJyYXkpKVxuICAgIH0sXG5cbiAgICBzYXZlTGlzdDogKGxpc3RUb1NhdmUsIGxpc3RJZCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhsaXN0SWQpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxpc3RJZCwgSlNPTi5zdHJpbmdpZnkobGlzdFRvU2F2ZS5nZXRUYXNrcygpKSlcbiAgICB9LFxuXG4gICAgZ2V0TGlzdDogKGxpc3RJZCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IHN0b3JhZ2VDb250cm9sbGVyLmZpbmRMaXN0TmFtZWJ5SWQobGlzdElkKVxuICAgICAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdElkKSkgfHwgW11cbiAgICAgICAgY29uc3QgY2FsbGVkTGlzdCA9IGxpc3QobGlzdE5hbWUpXG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiBjYWxsZWRMaXN0LmFkZFRvTGlzdCh0YXNrKSlcbiAgICAgICAgcmV0dXJuIGNhbGxlZExpc3RcbiAgICB9LFxuXG4gICAgZGVsZXRlTGlzdDogKGxpc3RJZCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShsaXN0SWQpXG5cbiAgICAgICAgY29uc3QgbGlzdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RBcnJheVwiKSlcbiAgICAgICAgbGlzdEFycmF5LmZvckVhY2goKGxpc3QsaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChsaXN0Lmxpc3RJZCA9PSBsaXN0SWQpe2xpc3RBcnJheS5zcGxpY2UoaW5kZXgsMSl9XG4gICAgICAgIH0pXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdEFycmF5XCIsIEpTT04uc3RyaW5naWZ5KGxpc3RBcnJheSkpXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2VDb250cm9sbGVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=