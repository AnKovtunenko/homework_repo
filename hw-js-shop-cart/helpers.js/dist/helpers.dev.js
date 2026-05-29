"use strict";

var getEl = function getEl(id) {
  return DocumentFragment.getElementByID(id);
};

var addEl = function addEl(el) {
  document.createElement(el);
};