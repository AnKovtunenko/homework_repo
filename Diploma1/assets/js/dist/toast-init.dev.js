"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Lightweight wrapper to show toasts (uses toastr if available, falls back to alert)
function showToast(message) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4000;

  if (window.toastr && (typeof toastr === "undefined" ? "undefined" : _typeof(toastr)) === 'object') {
    toastr.options = {
      closeButton: true,
      progressBar: true,
      newestOnTop: true,
      positionClass: 'toast-top-right',
      timeOut: String(duration)
    }; // types: success, info, warning, error

    if (typeof toastr[type] === 'function') {
      toastr[type](message);
    } else {
      toastr.info(message);
    }
  } else {
    alert(message);
  }
} // Export for CommonJS/AMD if needed (no-op in browser globals)


if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    showToast: showToast
  };
}