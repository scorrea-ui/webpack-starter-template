/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/global.js":
/*!**************************!*\
  !*** ./src/js/global.js ***!
  \**************************/
/***/ (() => {

eval("\n\n/* eslint-disable no-undef */\n$(document).ready(function () {\n  var form = document.getElementById('podcastForm');\n  var cookie = void 0;\n\n  function getCookie(cname) {\n    var name = cname + '=';\n    var decodedCookie = decodeURIComponent(document.cookie);\n    var ca = decodedCookie.split(';');\n    for (var i = 0; i < ca.length; i++) {\n      var c = ca[i];\n      while (c.charAt(0) === ' ') {\n        c = c.substring(1);\n      }\n      if (c.indexOf(name) === 0) {\n        return c.substring(name.length, c.length);\n      }\n    }\n    return '';\n  }\n\n  form.addEventListener('submit', function (e) {\n    var fields = $('#podcastForm').serializeArray();\n    cookie = getCookie('hubspotutk');\n    var data = {\n      submittedAt: Date.now(),\n      fields: fields,\n      context: {\n        hutk: cookie,\n        pageUri: 'https://www.cloudtask.com/podcast',\n        pageName: 'Podcast'\n      }\n    };\n\n    if (this.checkValidity() === false) {\n      return false;\n    }\n\n    e.preventDefault();\n    formSubmit(data);\n  });\n\n  function formSubmit(data) {\n    // Create the new request\n    var xhr = new XMLHttpRequest();\n    var url = 'https://api.hsforms.com/submissions/v3/integration/submit/1709048/058a7f72-d7c0-4511-b357-70bcf8cbaa3d';\n    xhr.open('POST', url);\n    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'\n    xhr.setRequestHeader('Content-type', 'application/json');\n    var finalData = JSON.stringify(data);\n\n    xhr.onreadystatechange = function () {\n      if (xhr.readyState === 4 && xhr.status === 200) {\n        console.log(xhr.responseText); // Returns a 200 response if the submission is successful.\n        window.location.href = 'https://www.cloudtask.com/social-lead-generation-thank-you-page-ms';\n      } else if (xhr.readyState === 4 && xhr.status === 400) {\n        console.log(xhr.responseText); // Returns a 400 error the submission is rejected.\n      } else if (xhr.readyState === 4 && xhr.status === 403) {\n        console.log(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.\n      } else if (xhr.readyState === 4 && xhr.status === 404) {\n        console.log(xhr.responseText); // Returns a 404 error if the formGuid isn't found\n      }\n    };\n\n    // Sends the request\n\n    xhr.send(finalData);\n  }\n});\n\n//# sourceURL=webpack://studies/./src/js/global.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/global.js"]();
/******/ 	
/******/ })()
;