"use strict";document.querySelectorAll(".star-rating__label").forEach(function(e){return e.addEventListener("focus",function(t){t.target.addEventListener("keydown",function(e){"Space"===e.code&&t.target.click()})})});