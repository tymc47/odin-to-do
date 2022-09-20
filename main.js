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
        document.querySelector('#addlistform').style.display = "block";
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
        listContainer.innerHTML += `<div><button class="list" data-list=${list.listId}>
        <span class="material-symbols-outlined">list</span>${list.name}</button>
        <button class="dellist" data-list=${list.listId}><span class="material-symbols-outlined">delete</span></button>
        </div>`
    })

    //add functionality to list buttons
    const listBtns = document.querySelectorAll(".list")
    const delListBtns = document.querySelectorAll(".dellist")
    listBtns.forEach(btn => btn.addEventListener('click', (event) => {
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
        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadMainContent)(listName, listId)
        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(listId).getTasks())
        
    }

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
        if (localStorage.getItem(listId) == null) {return null}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtB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O1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVwb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3JlcG9zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3JlcG9zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3JlcG9zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3JlcG9zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvZG9tQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy9vYmplY3RDb250cm9sbGVyLmpzIiwid2VicGFjazovL3JlcG9zLy4vc3JjL3N0b3JhZ2VDb250cm9sbGVyLmpzIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7IGFkZFRhc2ssIHRvZ2dsZVRhc2ssIGNyZWF0ZUxpc3QsIGxvYWRUYWJzLCBkZWxldGVMaXN0IH0gZnJvbSBcIi4vaW5kZXhcIlxuXG5jb25zdCBtYWluY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluY29udGVudCcpXG5cbmNvbnN0IHNpZGViYXJCdG5GdW5jdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzYnRuJylcbiAgICBjb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheWJ0bicpXG4gICAgY29uc3QgaW1wb3J0YW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltcG9ydGFudGJ0bicpXG4gICAgY29uc3QgY29tcGxldGVkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBsZXRlZGJ0bicpXG4gICAgY29uc3QgbGlzdEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkbGlzdGJ0bicpXG4gICAgY29uc3QgYWRkTGlzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRsaXN0JylcbiAgICBjb25zdCBjbG9zZUxpc3RGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlbGlzdGZvcm0nKVxuXG5cbiAgICB0YXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2xvYWRUYWJzKFwiVGFza3NcIil9KVxuXG4gICAgdG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7bG9hZFRhYnMoXCJUb2RheVwiKX0pXG4gICAgXG4gICAgaW1wb3J0YW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2xvYWRUYWJzKFwiSW1wb3J0YW50XCIpfSlcblxuICAgIGNvbXBsZXRlZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtsb2FkVGFicyhcIkNvbXBsZXRlZFwiKX0pXG5cbiAgICBsaXN0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZGxpc3Rmb3JtJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9KVxuXG4gICAgYWRkTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkbGlzdGZvcm0gPiBpbnB1dFt0eXBlPVwidGV4dFwiXScpXG4gICAgICAgIGlmIChsaXN0bmFtZSA9PSBcIlwiKSB7YWxlcnQoXCJQbGVhc2UgZW50ZXIgbGlzdCBuYW1lXCIpOyByZXR1cm47fVxuXG4gICAgICAgIGNyZWF0ZUxpc3QobGlzdG5hbWUudmFsdWUpO1xuICAgICAgICBsaXN0bmFtZS52YWx1ZSA9IFwiXCJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZGxpc3Rmb3JtJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG5cbiAgICBjbG9zZUxpc3RGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkbGlzdGZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSlcbiAgICBcbn1cblxuY29uc3QgbG9hZExpc3RzID0gKGxpc3RBcnJheSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGxpc3RBcnJheSk7XG4gICAgaWYgKGxpc3RBcnJheSA9PSBudWxsKSB7cmV0dXJufVxuXG4gICAgLy9jbGVhciBsaXN0IGNvbnRhaW5lclxuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdGNvbnRhaW5lcicpXG4gICAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgLy9hZGQgbGlzdCBidXR0b24gZm9yIGVhY2ggbGlzdFxuICAgIGxpc3RBcnJheS5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3QpXG4gICAgICAgIGlmIChsaXN0Lmxpc3RJZCA9PSAwKSB7cmV0dXJufVxuICAgICAgICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCArPSBgPGRpdj48YnV0dG9uIGNsYXNzPVwibGlzdFwiIGRhdGEtbGlzdD0ke2xpc3QubGlzdElkfT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+bGlzdDwvc3Bhbj4ke2xpc3QubmFtZX08L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGxpc3RcIiBkYXRhLWxpc3Q9JHtsaXN0Lmxpc3RJZH0+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+ZGVsZXRlPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5gXG4gICAgfSlcblxuICAgIC8vYWRkIGZ1bmN0aW9uYWxpdHkgdG8gbGlzdCBidXR0b25zXG4gICAgY29uc3QgbGlzdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3RcIilcbiAgICBjb25zdCBkZWxMaXN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsbGlzdFwiKVxuICAgIGxpc3RCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBsb2FkVGFicyhldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubGlzdClcbiAgICB9KSlcblxuICAgIFxuICAgIGRlbExpc3RCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBkZWxldGVMaXN0KGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5saXN0KVxuICAgIH0pKVxuXG59XG5cblxuY29uc3QgbG9hZE1haW5Db250ZW50ID0gKHRhYm5hbWUsIGxpc3RJbmRleCA9IDApID0+IHtcbiAgICAvLyBtYWluY29udGVudC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJylcbiAgICAvLyBtYWluY29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluY29udGVudCcpXG4gICAgXG4gICAgLy9sb2FkIGRpc3BsYXlcbiAgICBtYWluY29udGVudC5pbm5lckhUTUwgPSBcIlwiICAgXG4gICAgY29uc3QgaGVhZGluZ0hUTUwgPSBgPGRpdiBpZD1cIm1haW4taGVhZGluZ1wiPjxoMT4ke3RhYm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZGlzcGxheWZvcm1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5hZGQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhZGR0YXNrZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInN0YXJcIiB0eXBlPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImFkZHRhc2tcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNhbmNlbGFkZFwiPkNhbmNlbDwvYnV0dG9uPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza2NvbnRhaW5lclwiPjwvZGl2PmAgIFxuICAgIG1haW5jb250ZW50LmlubmVySFRNTCArPSBoZWFkaW5nSFRNTFxuICAgIFxuICAgIFxuICAgIGlmICh0YWJuYW1lID09IFwiSW1wb3J0YW50XCIgfHwgdGFibmFtZSA9PSBcIkNvbXBsZXRlZFwiIHx8IHRhYm5hbWUgPT0gXCJUb2RheVwiKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXNwbGF5Zm9ybWJ0bicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH1cblxuICAgIC8vZm9ybSBmdW5jdGlvbmFsaXR5IGFuZCBkaXNwbGF5XG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkdGFza2Zvcm0nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXNwbGF5Zm9ybWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgfSkgICBcblxuICAgIC8vYWRkIGZ1bmN0aW9uYWxpdHkgdG8gZm9ybSBidXR0b25zXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkdGFza2Zvcm0gPiBpbnB1dFt0eXBlPVwidGV4dFwiXScpXG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2tmb3JtID4gaW5wdXRbdHlwZT1cImRhdGVcIl0nKVxuICAgICAgICBjb25zdCB0YXNrSW1wb3J0YW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2tmb3JtID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgICAgICAgaWYgKHRhc2tOYW1lLnZhbHVlID09IFwiXCIpIHthbGVydChcIlBsZWFzZSBlbnRlciBhIHRpbHRlIGZvciB5b3VyIHRhc2shXCIpOyByZXR1cm47fVxuXG4gICAgICAgIGFkZFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgYWRkVGFzayh0YXNrTmFtZS52YWx1ZSwgdGFza0RhdGUudmFsdWUsIGxpc3RJbmRleCwgdGFza0ltcG9ydGFudC5jaGVja2VkKVxuICAgICAgICB0YXNrTmFtZS52YWx1ZSA9IFwiXCJcbiAgICAgICAgdGFza0RhdGUudmFsdWUgPSBcIlwiXG4gICAgICAgIHRhc2tJbXBvcnRhbnQuY2hlY2tlZCA9IGZhbHNlXG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxhZGQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkVGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG5cbn1cblxuY29uc3QgZGlzcGxheVRhc2tzID0gKHRhc2tBcnJheSkgPT4ge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza2NvbnRhaW5lcicpXG4gICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXG5cbiAgICAvL2Rpc3BsYXkgYWxsIHRhc2tcbiAgICBjb25zb2xlLmxvZyh0YXNrQXJyYXkpXG4gICAgdGFza0FycmF5LmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tUZW1wbGF0ZSA9IGA8ZGl2IGNsYXNzPVwiJHt0YXNrLmNvbXBsZXRlZCA/IFwidGFzayBjb21wbGV0ZWRcIiA6IFwidGFza1wifVwiIGRhdGEtZGlzcGxheW9yZGVyPSR7aW5kZXh9PlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJ0YXNrY29tcGxldGVkXCIgZGF0YS1kaXNwbGF5b3JkZXI9JHtpbmRleH0+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGFza25hbWVcIiBkYXRhLWRpc3BsYXlvcmRlcj0ke2luZGV4fT4ke3Rhc2submFtZX08L3NwYW4+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwidGFza2RhdGVcIiBkYXRhLWRpc3BsYXlvcmRlcj0ke2luZGV4fSB2YWx1ZT0ke3Rhc2suZGF0ZX0gPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiJHt0YXNrLmltcG9ydGFudD8gXCJ0YXNraW1wb3J0YW50IHRydWVcIiA6IFwidGFza2ltcG9ydGFudFwifVwiIGRhdGEtZGlzcGxheW9yZGVyPSR7aW5kZXh9PlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5zdGFyPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbHRhc2tcIiBkYXRhLWRpc3BsYXlvcmRlcj0ke2luZGV4fT48c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5kZWxldGU8L3NwYW4+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PmBcblxuICAgICAgICB0YXNrQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGFza1RlbXBsYXRlKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrLnRhc2tJZClcbiAgICAgICAgY29uc29sZS5sb2codGFzay5saXN0SWQpXG4gICAgICAgIC8vYWRkIGZ1bmN0aW9uYWxpdHkgdG8gdGFzayBidXR0b25zXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWRpc3BsYXlvcmRlcj1cIiR7aW5kZXh9XCJdLnRhc2tkYXRlYCkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRvZ2dsZVRhc2soZXZlbnQsIHRhc2sudGFza0lkLCB0YXNrLmxpc3RJZClcbiAgICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZGlzcGxheW9yZGVyPVwiJHtpbmRleH1cIl0udGFza2ltcG9ydGFudGApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0b2dnbGVUYXNrKGV2ZW50LCB0YXNrLnRhc2tJZCwgdGFzay5saXN0SWQpXG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJ0cnVlXCIpXG5cbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1kaXNwbGF5b3JkZXI9XCIke2luZGV4fVwiXS50YXNrY29tcGxldGVkYCkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0b2dnbGVUYXNrKGV2ZW50LCB0YXNrLnRhc2tJZCwgdGFzay5saXN0SWQpXG4gICAgICAgICAgICAvL3Rhc2tzIGRpc2FwcGVhciBmcm9tIHRoZSBsaXN0IGFmdGVyIHRvZ2dsZVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZGlzcGxheW9yZGVyPVwiJHtpbmRleH1cIl0udGFza2ApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWRpc3BsYXlvcmRlcj1cIiR7aW5kZXh9XCJdLmRlbHRhc2tgKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlVGFzayhldmVudCwgdGFzay50YXNrSWQsIHRhc2subGlzdElkKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZGlzcGxheW9yZGVyPVwiJHtpbmRleH1cIl0udGFza2ApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9KVxuICAgIH0pXG5cbn1cblxuY29uc3QgZGlzcGxheUNvbXBsZXRlZCA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay5jb21wbGV0ZWRcIilcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrKVxuICAgICAgICB0YXNrLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPWNoZWNrYm94XVwiKS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHtcbiAgICBzaWRlYmFyQnRuRnVuY3Rpb24sXG4gICAgbG9hZE1haW5Db250ZW50LFxuICAgIGRpc3BsYXlUYXNrcyxcbiAgICBsb2FkTGlzdHMsXG4gICAgZGlzcGxheUNvbXBsZXRlZFxufSIsIiBpbXBvcnQgeyBzaWRlYmFyQnRuRnVuY3Rpb24sIGxvYWRUYXNrcywgZGlzcGxheVRhc2tzLCBsb2FkTGlzdHMsIGxvYWRNYWluQ29udGVudCwgZGlzcGxheUNvbXBsZXRlZH0gZnJvbSBcIi4vZG9tQ29udHJvbGxlclwiO1xuIGltcG9ydCB7IHRhc2ssIGxpc3QgfSBmcm9tIFwiLi9vYmplY3RDb250cm9sbGVyXCI7ICBcbiBpbXBvcnQgc3RvcmFnZUNvbnRyb2xsZXIgZnJvbSBcIi4vc3RvcmFnZUNvbnRyb2xsZXJcIjtcblxuY29uc3QgaW5pdGlhdGVTdG9yYWdlID0gKCkgPT4ge1xuICAgIHN0b3JhZ2VDb250cm9sbGVyLmluaXRpYXRlU3RvcmFnZSgpXG59XG5cbmNvbnN0IGNyZWF0ZUxpc3QgPSAobmFtZSkgPT4ge1xuICAgIHN0b3JhZ2VDb250cm9sbGVyLm5ld0xpc3QobmFtZSlcblxuICAgIC8vY2FsbCBsaXN0IGRpc3BsYXlcbiAgICBsb2FkTGlzdHMoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdEFycmF5KCkpXG59XG5cbiBjb25zdCBhZGRUYXNrID0gKG5hbWUsIGRhdGUsIGxpc3RJZCwgaW1wb3J0YW50KSA9PiB7XG4gICAgIC8vY3JlYXRlIG5ldyB0YXNrIG9iamVjdFxuICAgICBjb25zdCB0YXNrSWQgPSBEYXRlLm5vdygpXG4gICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKG5hbWUsIGRhdGUsIGxpc3RJZCwgaW1wb3J0YW50LCBmYWxzZSwgdGFza0lkKVxuICAgIFxuICAgICBjb25zb2xlLmxvZyhuZXdUYXNrKVxuICAgICAvL2FkZCB0YXNrIHRvIGxpc3RcbiAgICAgY29uc3QgbGlzdFRvQWRkID0gc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdChsaXN0SWQpXG4gICAgIGxpc3RUb0FkZC5hZGRUb0xpc3QobmV3VGFzaylcbiAgICAgXG4gICAgIC8vc2F2ZSBpdCBzb21ld2hlcmVcbiAgICBzdG9yYWdlQ29udHJvbGxlci5zYXZlTGlzdChsaXN0VG9BZGQsIGxpc3RJZClcblxuICAgICBcbiAgICBkaXNwbGF5VGFza3MobGlzdFRvQWRkLmdldFRhc2tzKCkpXG4gICAgfVxuXG5jb25zdCB0b2dnbGVUYXNrID0gKGV2ZW50LCB0YXNrSWQsIGxpc3RJZCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0WzBdO1xuICAgIGNvbnN0IHRhcmdldExpc3QgPSBzdG9yYWdlQ29udHJvbGxlci5nZXRMaXN0KGxpc3RJZCk7XG5cbiAgICBjb25zb2xlLmxvZyhsaXN0SWQpXG4gICAgY29uc29sZS5sb2coYnV0dG9uKVxuICAgIGNvbnNvbGUubG9nKHRhcmdldExpc3QpXG4gICAgc3dpdGNoIChidXR0b24pIHtcbiAgICAgICAgY2FzZSAndGFza2RhdGUnOlxuICAgICAgICAgICAgdGFyZ2V0TGlzdC51cGRhdGVUYXNrKHRhc2tJZCwgXCJkYXRlXCIsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gICAgICAgICAgICBicmVhazsgICBcbiAgICAgICAgY2FzZSAndGFza2ltcG9ydGFudCc6XG4gICAgICAgICAgICB0YXJnZXRMaXN0LnVwZGF0ZVRhc2sodGFza0lkLCBcImltcG9ydGFudFwiLCBcImR1bW15cGFyYVwiKVxuICAgICAgICAgICAgYnJlYWs7ICAgXG4gICAgICAgIGNhc2UgJ3Rhc2tjb21wbGV0ZWQnOlxuICAgICAgICAgICAgdGFyZ2V0TGlzdC51cGRhdGVUYXNrKHRhc2tJZCwgXCJjb21wbGV0ZWRcIiwgXCJkdW1teXBhcmFcIilcbiAgICAgICAgICAgIGJyZWFrOyAgXG4gICAgICAgIGNhc2UgJ2RlbHRhc2snOlxuICAgICAgICAgICAgdGFyZ2V0TGlzdC5kZWxldGVUYXNrKHRhc2tJZCkgXG4gICAgICAgIH0gIFxuXG4gICAgc3RvcmFnZUNvbnRyb2xsZXIuc2F2ZUxpc3QodGFyZ2V0TGlzdCwgbGlzdElkKVxufVxuXG5jb25zdCBsb2FkVGFicyA9ICh0YWJOYW1lKSA9PiB7XG4gICAgXG4gICAgY29uc3QgbG9hZFRhc2tzVGFiID0gKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIFRhc2sgVGFiXCIpXG4gICAgICAgIGxvYWRNYWluQ29udGVudCh0YWJOYW1lKVxuXG4gICAgICAgIGlmIChzdG9yYWdlQ29udHJvbGxlci5nZXRMaXN0KDApID09IG51bGwpe3JldHVybn1cbiAgICAgICAgZGlzcGxheVRhc2tzKHN0b3JhZ2VDb250cm9sbGVyLmdldExpc3QoMCkuZ2V0VGFza3MoKSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgbG9hZFRvZGF5VGFiID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGlzcGxheUFycmF5ID0gW11cbiAgICAgICAgY29uc3QgbGlzdEFycmF5ID0gc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdEFycmF5KClcblxuICAgICAgICBsaXN0QXJyYXkuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlBcnJheSA9IGRpc3BsYXlBcnJheS5jb25jYXQoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdChsaXN0Lmxpc3RJZCkuZ2V0VG9kYXlUYXNrcygpKVxuICAgICAgICB9KTtcblxuICAgICAgICBsb2FkTWFpbkNvbnRlbnQodGFiTmFtZSlcbiAgICAgICAgZGlzcGxheVRhc2tzKGRpc3BsYXlBcnJheSlcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkSW1wb3J0YW50VGFiID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGlzcGxheUFycmF5ID0gW11cbiAgICAgICAgY29uc3QgbGlzdEFycmF5ID0gc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdEFycmF5KClcblxuICAgICAgICBsaXN0QXJyYXkuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlBcnJheSA9IGRpc3BsYXlBcnJheS5jb25jYXQoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdChsaXN0Lmxpc3RJZCkuZ2V0SW1wb3J0YW50VGFza3MoKSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbG9hZE1haW5Db250ZW50KHRhYk5hbWUpXG4gICAgICAgIGRpc3BsYXlUYXNrcyhkaXNwbGF5QXJyYXkpXG4gICAgfVxuXG4gICAgY29uc3QgbG9hZENvbXBsZXRlZFRhYiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGRpc3BsYXlBcnJheSA9IFtdXG4gICAgICAgIGNvbnN0IGxpc3RBcnJheSA9IHN0b3JhZ2VDb250cm9sbGVyLmdldExpc3RBcnJheSgpXG5cbiAgICAgICAgbGlzdEFycmF5LmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5QXJyYXkgPSBkaXNwbGF5QXJyYXkuY29uY2F0KHN0b3JhZ2VDb250cm9sbGVyLmdldExpc3QobGlzdC5saXN0SWQpLmdldENvbXBsZXRlZFRhc2tzKCkpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvYWRNYWluQ29udGVudCh0YWJOYW1lKVxuICAgICAgICBkaXNwbGF5VGFza3MoZGlzcGxheUFycmF5KVxuICAgICAgICBkaXNwbGF5Q29tcGxldGVkKClcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkTGlzdFRhYiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdElkID0gdGFiTmFtZTtcbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBzdG9yYWdlQ29udHJvbGxlci5maW5kTGlzdE5hbWVieUlkKGxpc3RJZClcbiAgICAgICAgbG9hZE1haW5Db250ZW50KGxpc3ROYW1lLCBsaXN0SWQpXG4gICAgICAgIGRpc3BsYXlUYXNrcyhzdG9yYWdlQ29udHJvbGxlci5nZXRMaXN0KGxpc3RJZCkuZ2V0VGFza3MoKSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc3dpdGNoICh0YWJOYW1lKSB7XG4gICAgICAgIGNhc2UgXCJUYXNrc1wiOlxuICAgICAgICAgICAgbG9hZFRhc2tzVGFiKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlRvZGF5XCI6XG4gICAgICAgICAgICBsb2FkVG9kYXlUYWIoKTtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgXCJJbXBvcnRhbnRcIjpcbiAgICAgICAgICAgIGxvYWRJbXBvcnRhbnRUYWIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQ29tcGxldGVkXCI6XG4gICAgICAgICAgICBsb2FkQ29tcGxldGVkVGFiICgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsb2FkTGlzdFRhYigpO1xuICAgIH1cbn1cblxuY29uc3QgZGVsZXRlTGlzdCA9IChsaXN0SWQpID0+IHtcbiAgICBzdG9yYWdlQ29udHJvbGxlci5kZWxldGVMaXN0KGxpc3RJZClcbiAgICBsb2FkTGlzdHMoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdEFycmF5KCkpXG59XG5cbmluaXRpYXRlU3RvcmFnZSgpO1xuc2lkZWJhckJ0bkZ1bmN0aW9uKCk7XG5sb2FkTGlzdHMoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdEFycmF5KCkpXG5sb2FkVGFicyhcIlRhc2tzXCIpXG5cblxuXG5cbmV4cG9ydCB7XG4gICAgYWRkVGFzayxcbiAgICB0b2dnbGVUYXNrLFxuICAgIGNyZWF0ZUxpc3QsXG4gICAgbG9hZFRhYnMsXG4gICAgZGVsZXRlTGlzdFxufSIsImltcG9ydCB7IGlzVG9kYXksIHBhcnNlSVNPIH0gZnJvbSBcImRhdGUtZm5zXCJcblxuLy90YXNrIGZhY3RvcnkgZnVuY3Rpb25zXG5jb25zdCB0YXNrID0gKG5hbWUsIGRhdGUsIGxpc3RJZCwgaW1wb3J0YW50LCBjb21wbGV0ZWQsIHRhc2tJZCkgPT4ge1xuICAgIHJldHVybiB7bmFtZSwgZGF0ZSwgbGlzdElkLCBpbXBvcnRhbnQsIGNvbXBsZXRlZCwgdGFza0lkfVxufVxuXG5jb25zdCBsaXN0ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IFtdXG5cbiAgICBjb25zdCBhZGRUb0xpc3QgPSAodGFzaykgPT4ge1xuICAgICAgICB0YXNrcy5wdXNoKHRhc2spXG4gICAgfSBcblxuICAgIGNvbnN0IGdldFRhc2tzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGFza3NcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVUYXNrID0gKHRhc2tJZCwga2V5LCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICBsZXQgdGFza0luZGV4ID0gXCJcIjtcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHRhc2sudGFza0lkID09IHRhc2tJZCA/ICB0YXNrSW5kZXggPSBpbmRleCA6IGZhbHNlKVxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrSW5kZXgpXG4gICAgICAgIGNvbnNvbGUubG9nKGtleSlcbiAgICAgICAgaWYgKGtleSA9PSBcImRhdGVcIikge3Rhc2tzW3Rhc2tJbmRleF1ba2V5XSA9IG5ld1ZhbHVlfVxuICAgICAgICBpZiAoa2V5ID09IFwiaW1wb3J0YW50XCIpIHt0YXNrc1t0YXNrSW5kZXhdW2tleV0gPyB0YXNrc1t0YXNrSW5kZXhdW2tleV0gPSBmYWxzZSA6IHRhc2tzW3Rhc2tJbmRleF1ba2V5XSA9IHRydWV9XG4gICAgICAgIGlmIChrZXkgPT0gXCJjb21wbGV0ZWRcIikge3Rhc2tzW3Rhc2tJbmRleF1ba2V5XSA/IHRhc2tzW3Rhc2tJbmRleF1ba2V5XSA9IGZhbHNlIDogdGFza3NbdGFza0luZGV4XVtrZXldID0gdHJ1ZX1cbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVUYXNrID0gKHRhc2tJZCkgPT4ge1xuICAgICAgICBsZXQgdGFza0luZGV4ID0gXCJcIjtcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHRhc2sudGFza0lkID09IHRhc2tJZCA/ICB0YXNrSW5kZXggPSBpbmRleCA6IGZhbHNlKVxuICAgICAgICB0YXNrcy5zcGxpY2UodGFza0luZGV4LDEpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VG9kYXlUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRhc2tzLmZpbHRlcih0YXNrID0+IGlzVG9kYXkocGFyc2VJU08odGFzay5kYXRlKSkpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SW1wb3J0YW50VGFza3MgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmltcG9ydGFudCA9PSB0cnVlKVxuICAgIH1cblxuICAgIGNvbnN0IGdldENvbXBsZXRlZFRhc2tzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5jb21wbGV0ZWQgPT0gdHJ1ZSlcbiAgICB9XG5cbiAgICByZXR1cm4ge25hbWUsIGFkZFRvTGlzdCwgZ2V0VGFza3MsIHVwZGF0ZVRhc2ssIGdldFRvZGF5VGFza3MsIGdldEltcG9ydGFudFRhc2tzLCBnZXRDb21wbGV0ZWRUYXNrcywgZGVsZXRlVGFza31cbn1cblxuZXhwb3J0IHtcbiAgICB0YXNrLFxuICAgIGxpc3Rcbn0iLCJpbXBvcnQge2xpc3R9IGZyb20gXCIuL29iamVjdENvbnRyb2xsZXJcIjtcblxuY29uc3Qgc3RvcmFnZUNvbnRyb2xsZXIgPSB7XG4gICAgaW5pdGlhdGVTdG9yYWdlOiAoKSA9PiB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgY29uc3QgbGlzdEFycmF5ID0gW3tsaXN0SWQ6IDAsIG5hbWU6IFwiZGVmYXVsdGVkXCJ9XVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkobGlzdEFycmF5KSlcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudEluZGV4XCIsIDApXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgwLCBKU09OLnN0cmluZ2lmeShbXSkpXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0TGlzdEFycmF5OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdEFycmF5XCIpKSAgIFxuICAgIH0sXG5cbiAgICBmaW5kTGlzdE5hbWVieUlkOiAobGlzdElkKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RBcnJheSA9IHN0b3JhZ2VDb250cm9sbGVyLmdldExpc3RBcnJheSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAobGlzdEFycmF5W2ldLmxpc3RJZCA9PSBsaXN0SWQpIHtyZXR1cm4gbGlzdEFycmF5W2ldLm5hbWV9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbmV3TGlzdDogKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RBcnJheVwiKSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxpc3RJZCA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudEluZGV4XCIpKSArIDFcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50SW5kZXhcIiwgbGlzdElkKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsaXN0SWQsIEpTT04uc3RyaW5naWZ5KFtdKSlcbiAgICAgICAgXG4gICAgICAgIC8vY3JlYXRlIG5ldyBsaXN0IGluIGxvY2FsU3RvcmFnZVxuICAgICAgICAvL3VwZGF0ZUxpc3RBcnJheVxuICAgICAgICBjb25zdCBuZXdMaXN0ID0ge2xpc3RJZCwgbmFtZX1cbiAgICAgICAgLy8gbmV3TGlzdC5pbmRleCA9IGxpc3RBcnJheS5sZW5ndGhcbiAgICAgICAgLy8gbmV3TGlzdC5uYW1lID0gbmFtZVxuICAgICAgICBsaXN0QXJyYXkucHVzaChuZXdMaXN0KVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RBcnJheVwiLCBKU09OLnN0cmluZ2lmeShsaXN0QXJyYXkpKVxuICAgIH0sXG5cbiAgICBzYXZlTGlzdDogKGxpc3RUb1NhdmUsIGxpc3RJZCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhsaXN0SWQpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxpc3RJZCwgSlNPTi5zdHJpbmdpZnkobGlzdFRvU2F2ZS5nZXRUYXNrcygpKSlcbiAgICB9LFxuXG4gICAgZ2V0TGlzdDogKGxpc3RJZCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IHN0b3JhZ2VDb250cm9sbGVyLmZpbmRMaXN0TmFtZWJ5SWQobGlzdElkKVxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdElkKSA9PSBudWxsKSB7cmV0dXJuIG51bGx9XG4gICAgICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0SWQpKSB8fCBbXVxuICAgICAgICBjb25zdCBjYWxsZWRMaXN0ID0gbGlzdChsaXN0TmFtZSlcbiAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IGNhbGxlZExpc3QuYWRkVG9MaXN0KHRhc2spKVxuICAgICAgICByZXR1cm4gY2FsbGVkTGlzdFxuICAgIH0sXG5cbiAgICBkZWxldGVMaXN0OiAobGlzdElkKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGxpc3RJZClcblxuICAgICAgICBjb25zdCBsaXN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdEFycmF5XCIpKVxuICAgICAgICBsaXN0QXJyYXkuZm9yRWFjaCgobGlzdCxpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGxpc3QubGlzdElkID09IGxpc3RJZCl7bGlzdEFycmF5LnNwbGljZShpbmRleCwxKX1cbiAgICAgICAgfSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkobGlzdEFycmF5KSlcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZUNvbnRyb2xsZXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==