/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/border.js":
/*!***********************!*\
  !*** ./src/border.js ***!
  \***********************/
/***/ (function(module) {

eval("function Border(x, y, width, height, type) {\n  this.x = x;\n  this.y = y;\n  this.width = width;\n  this.height = height;\n  this.type = type;\n\n  this.draw = function (ctx) {\n    if (this.type === 1) {\n      ctx.fillStyle = \"lightblue\";\n    } else if (this.type === 2) {\n      ctx.fillStyle = \"tan\";\n    }\n\n    ctx.fillRect(this.x, this.y, this.width, this.height);\n  };\n}\n\nmodule.exports = Border;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KYXZhU2NyaXB0X1Byb2plY3QvLi9zcmMvYm9yZGVyLmpzPzUxNjkiXSwibmFtZXMiOlsiQm9yZGVyIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInR5cGUiLCJkcmF3IiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxNQUFULENBQWdCQyxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0JDLEtBQXRCLEVBQTZCQyxNQUE3QixFQUFxQ0MsSUFBckMsRUFBMkM7QUFDekMsT0FBS0osQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsT0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsT0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsT0FBS0MsSUFBTCxHQUFZQSxJQUFaOztBQUVBLE9BQUtDLElBQUwsR0FBWSxVQUFTQyxHQUFULEVBQWM7QUFDeEIsUUFBSSxLQUFLRixJQUFMLEtBQWMsQ0FBbEIsRUFBcUI7QUFDbkJFLE1BQUFBLEdBQUcsQ0FBQ0MsU0FBSixHQUFnQixXQUFoQjtBQUNELEtBRkQsTUFFTyxJQUFJLEtBQUtILElBQUwsS0FBYyxDQUFsQixFQUFxQjtBQUMxQkUsTUFBQUEsR0FBRyxDQUFDQyxTQUFKLEdBQWdCLEtBQWhCO0FBQ0Q7O0FBQ0RELElBQUFBLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQUtSLENBQWxCLEVBQXFCLEtBQUtDLENBQTFCLEVBQTZCLEtBQUtDLEtBQWxDLEVBQXlDLEtBQUtDLE1BQTlDO0FBQ0QsR0FQRDtBQVFEOztBQUVETSxNQUFNLENBQUNDLE9BQVAsR0FBaUJYLE1BQWpCIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQm9yZGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHR5cGUpIHtcclxuICB0aGlzLnggPSB4O1xyXG4gIHRoaXMueSA9IHk7XHJcbiAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gIHRoaXMudHlwZSA9IHR5cGU7XHJcblxyXG4gIHRoaXMuZHJhdyA9IGZ1bmN0aW9uKGN0eCkge1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gMSkge1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gXCJsaWdodGJsdWVcIjtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAyKSB7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcInRhblwiO1xyXG4gICAgfVxyXG4gICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJvcmRlcjtcclxuIl0sImZpbGUiOiIuL3NyYy9ib3JkZXIuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/border.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const Player = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\nconst Border = __webpack_require__(/*! ./border.js */ \"./src/border.js\");\n\nwindow.onload = function () {\n  let canvas = document.getElementById(\"canvas\");\n  let ctx = canvas.getContext(\"2d\");\n  let img = document.getElementById(\"image\");\n  let player = new Player(100, 100, `./images/resizecat.png`, \"image\");\n  let gameLoop = setInterval(step, 30); //30 fps\n\n  player.setupInputs();\n  let borders = [];\n  borders.push(new Border(0, 620, 600, 100, 1));\n  borders.push(new Border(600, 520, 100, 50, 2));\n\n  function draw() {\n    ctx.fillStyle = \"white\";\n    ctx.fillRect(0, 0, canvas.width, canvas.height); //clear the canvas before redrawing\n\n    ctx.drawImage(img, 0, 0);\n    player.draw(ctx); //redraw the player at the new pos\n\n    borders.forEach(border => {\n      border.draw(ctx);\n    });\n  }\n\n  function step() {\n    //main step function for things other than the player (like the mice)\n    player.step();\n    draw(); //redraw canvas once everything has been updated\n\n    borders.forEach(border => {\n      let borderRect = {\n        x: border.x,\n        y: border.y,\n        width: border.width,\n        height: border.height\n      };\n      let horizontalRect = {\n        x: player.x + player.xvel,\n        y: player.y,\n        width: player.width,\n        height: player.height\n      }; //vert collision rect\n\n      let verticalRect = {\n        x: player.x,\n        y: player.y + player.yvel,\n        width: player.width,\n        height: player.height\n      };\n\n      if (checkCollision(horizontalRect, borderRect)) {\n        // while(checkCollision(horizontalRect, borderRect)) {\n        //   horizontalRect.x -= Math.sign(player.xvel);\n        // }\n        if (player.x + player.width > borderRect.x) {\n          player.x = borderRect.x - player.width;\n        } // player.x = horizontalRect.x;\n\n\n        player.xvel = 0;\n      }\n\n      if (checkCollision(verticalRect, borderRect)) {\n        // while(checkCollision(verticalRect, borderRect)) {\n        //   verticalRect.y -= Math.sign(player.yvel);\n        // }\n        if (player.y + player.height > borderRect.y) {\n          player.y = borderRect.y - player.height;\n        } // player.y = verticalRect.y;\n\n\n        player.yvel = 0;\n      }\n    });\n  }\n\n  function checkCollision(player, r2) {\n    let crash = true;\n\n    if (player.x >= r2.x + r2.width) {\n      crash = false;\n    } else if (player.x + player.width <= r2.x) {\n      crash = false;\n    } else if (player.y >= r2.y + r2.height) {\n      crash = false;\n    } else if (player.y + player.height <= r2.y) {\n      crash = false;\n    }\n\n    return crash;\n  } //horizontal collision rect\n  // let horizontalRect = {\n  //   x: player.x + player.xvel,\n  //   y: player.y,\n  //   width: player.width,\n  //   height: player.height\n  // }\n  // //vert collision rect\n  // let verticalRect = {\n  //   x: player.x,\n  //   y: player.y + player.yvel,\n  //   width: player.width,\n  //   height: player.height\n  // }\n  // borders.forEach (border => {\n  //   let borderRect = {\n  //     x: border.x,\n  //     y: border.y,\n  //     width: border.width,\n  //     height: border.height\n  //   }\n  //   console.log(checkCollision(horizontalRect,borderRect));\n  //   console.log(verticalRect)\n  //   if(checkCollision(horizontalRect, borderRect)) {\n  //     // while(checkCollision(horizontalRect, borderRect)) {\n  //     //   horizontalRect.x -= Math.sign(player.xvel);\n  //     // }\n  //     player.x = horizontalRect.x;\n  //     player.xvel = 0;\n  //   }\n  //   console.log(checkCollision(verticalRect,borderRect));\n  //   if(checkCollision(verticalRect,borderRect)) {\n  //     // while(checkCollision(verticalRect, borderRect)) {\n  //     //   verticalRect.y -= Math.sign(player.yvel);\n  //     // }\n  //     player.y = verticalRect.y;\n  //     player.yvel = 0;\n  //   }\n  // })\n\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkQsTUFFTyxJQUFJeEIsTUFBTSxDQUFDZ0IsQ0FBUCxHQUFXaEIsTUFBTSxDQUFDVSxLQUFsQixJQUEyQmEsRUFBRSxDQUFDUCxDQUFsQyxFQUFxQztBQUMxQ1EsTUFBQUEsS0FBSyxHQUFHLEtBQVI7QUFDRCxLQUZNLE1BRUEsSUFBSXhCLE1BQU0sQ0FBQ2lCLENBQVAsSUFBWU0sRUFBRSxDQUFDTixDQUFILEdBQU9NLEVBQUUsQ0FBQ1osTUFBMUIsRUFBa0M7QUFDdkNhLE1BQUFBLEtBQUssR0FBRyxLQUFSO0FBQ0QsS0FGTSxNQUVBLElBQUl4QixNQUFNLENBQUNpQixDQUFQLEdBQVdqQixNQUFNLENBQUNXLE1BQWxCLElBQTRCWSxFQUFFLENBQUNOLENBQW5DLEVBQXNDO0FBQzNDTyxNQUFBQSxLQUFLLEdBQUcsS0FBUjtBQUNEOztBQUNELFdBQU9BLEtBQVA7QUFDRCxHQXhGd0IsQ0EwRnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRCxDQW5JRCIsInNvdXJjZXMiOlsid2VicGFjazovL0phdmFTY3JpcHRfUHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBsYXllciA9IHJlcXVpcmUoXCIuL3BsYXllci5qc1wiKTtcclxuY29uc3QgQm9yZGVyID0gcmVxdWlyZShcIi4vYm9yZGVyLmpzXCIpO1xyXG5cclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XHJcbiAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgbGV0IGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VcIik7XHJcblxyXG4gIGxldCBwbGF5ZXIgPSBuZXcgUGxheWVyKDEwMCwgMTAwLCBgLi9pbWFnZXMvcmVzaXplY2F0LnBuZ2AsIFwiaW1hZ2VcIik7XHJcbiAgXHJcbiAgbGV0IGdhbWVMb29wID0gc2V0SW50ZXJ2YWwoc3RlcCwgMzApOyAgLy8zMCBmcHNcclxuXHJcbiAgcGxheWVyLnNldHVwSW5wdXRzKCk7XHJcblxyXG4gIGxldCBib3JkZXJzID0gW107XHJcbiAgYm9yZGVycy5wdXNoKG5ldyBCb3JkZXIoMCwgNjIwLCA2MDAsIDEwMCwgMSkpO1xyXG4gIGJvcmRlcnMucHVzaChuZXcgQm9yZGVyKDYwMCwgNTIwLCAxMDAsIDUwLCAyKSk7XHJcblxyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOyAgLy9jbGVhciB0aGUgY2FudmFzIGJlZm9yZSByZWRyYXdpbmdcclxuXHJcbiAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMClcclxuICAgIHBsYXllci5kcmF3KGN0eCk7ICAgLy9yZWRyYXcgdGhlIHBsYXllciBhdCB0aGUgbmV3IHBvc1xyXG5cclxuICAgIGJvcmRlcnMuZm9yRWFjaChib3JkZXIgPT4ge1xyXG4gICAgICBib3JkZXIuZHJhdyhjdHgpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN0ZXAoKSB7ICAvL21haW4gc3RlcCBmdW5jdGlvbiBmb3IgdGhpbmdzIG90aGVyIHRoYW4gdGhlIHBsYXllciAobGlrZSB0aGUgbWljZSlcclxuICAgIHBsYXllci5zdGVwKCk7XHJcbiAgICBkcmF3KCk7ICAgICAvL3JlZHJhdyBjYW52YXMgb25jZSBldmVyeXRoaW5nIGhhcyBiZWVuIHVwZGF0ZWRcclxuICAgIGJvcmRlcnMuZm9yRWFjaCAoYm9yZGVyID0+IHtcclxuICAgICAgbGV0IGJvcmRlclJlY3QgPSB7XHJcbiAgICAgICAgeDogYm9yZGVyLngsXHJcbiAgICAgICAgeTogYm9yZGVyLnksXHJcbiAgICAgICAgd2lkdGg6IGJvcmRlci53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGJvcmRlci5oZWlnaHRcclxuICAgICAgfVxyXG4gICAgICBsZXQgaG9yaXpvbnRhbFJlY3QgPSB7XHJcbiAgICAgICAgeDogcGxheWVyLnggKyBwbGF5ZXIueHZlbCxcclxuICAgICAgICB5OiBwbGF5ZXIueSxcclxuICAgICAgICB3aWR0aDogcGxheWVyLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogcGxheWVyLmhlaWdodFxyXG4gICAgICB9XHJcbiAgICAgIC8vdmVydCBjb2xsaXNpb24gcmVjdFxyXG4gICAgICBsZXQgdmVydGljYWxSZWN0ID0ge1xyXG4gICAgICAgIHg6IHBsYXllci54LFxyXG4gICAgICAgIHk6IHBsYXllci55ICsgcGxheWVyLnl2ZWwsXHJcbiAgICAgICAgd2lkdGg6IHBsYXllci53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHBsYXllci5oZWlnaHRcclxuICAgICAgfVxyXG4gICAgICBpZihjaGVja0NvbGxpc2lvbihob3Jpem9udGFsUmVjdCwgYm9yZGVyUmVjdCkpIHtcclxuICAgICAgICAvLyB3aGlsZShjaGVja0NvbGxpc2lvbihob3Jpem9udGFsUmVjdCwgYm9yZGVyUmVjdCkpIHtcclxuICAgICAgICAvLyAgIGhvcml6b250YWxSZWN0LnggLT0gTWF0aC5zaWduKHBsYXllci54dmVsKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKHBsYXllci54ICsgcGxheWVyLndpZHRoID4gYm9yZGVyUmVjdC54KSB7XHJcbiAgICAgICAgICBwbGF5ZXIueCA9IGJvcmRlclJlY3QueCAtIHBsYXllci53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcGxheWVyLnggPSBob3Jpem9udGFsUmVjdC54O1xyXG4gICAgICAgIHBsYXllci54dmVsID0gMDtcclxuICAgICAgfVxyXG4gICAgICBpZihjaGVja0NvbGxpc2lvbih2ZXJ0aWNhbFJlY3QsIGJvcmRlclJlY3QpKSB7XHJcbiAgICAgICAgLy8gd2hpbGUoY2hlY2tDb2xsaXNpb24odmVydGljYWxSZWN0LCBib3JkZXJSZWN0KSkge1xyXG4gICAgICAgIC8vICAgdmVydGljYWxSZWN0LnkgLT0gTWF0aC5zaWduKHBsYXllci55dmVsKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKHBsYXllci55ICsgcGxheWVyLmhlaWdodCA+IGJvcmRlclJlY3QueSkge1xyXG4gICAgICAgICAgcGxheWVyLnkgPSBib3JkZXJSZWN0LnkgLSBwbGF5ZXIuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwbGF5ZXIueSA9IHZlcnRpY2FsUmVjdC55O1xyXG4gICAgICAgIHBsYXllci55dmVsID0gMDtcclxuICAgICAgICBcclxuICAgICAgfSAgXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrQ29sbGlzaW9uKHBsYXllciwgcjIpIHtcclxuICAgIGxldCBjcmFzaCA9IHRydWU7XHJcbiAgICBpZiAocGxheWVyLnggPj0gcjIueCArIHIyLndpZHRoKSB7XHJcbiAgICAgIGNyYXNoID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKHBsYXllci54ICsgcGxheWVyLndpZHRoIDw9IHIyLngpIHtcclxuICAgICAgY3Jhc2ggPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAocGxheWVyLnkgPj0gcjIueSArIHIyLmhlaWdodCkge1xyXG4gICAgICBjcmFzaCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChwbGF5ZXIueSArIHBsYXllci5oZWlnaHQgPD0gcjIueSkge1xyXG4gICAgICBjcmFzaCA9IGZhbHNlO1xyXG4gICAgfSBcclxuICAgIHJldHVybiBjcmFzaDtcclxuICB9XHJcblxyXG4gIC8vaG9yaXpvbnRhbCBjb2xsaXNpb24gcmVjdFxyXG4gIC8vIGxldCBob3Jpem9udGFsUmVjdCA9IHtcclxuICAvLyAgIHg6IHBsYXllci54ICsgcGxheWVyLnh2ZWwsXHJcbiAgLy8gICB5OiBwbGF5ZXIueSxcclxuICAvLyAgIHdpZHRoOiBwbGF5ZXIud2lkdGgsXHJcbiAgLy8gICBoZWlnaHQ6IHBsYXllci5oZWlnaHRcclxuICAvLyB9XHJcbiAgLy8gLy92ZXJ0IGNvbGxpc2lvbiByZWN0XHJcbiAgLy8gbGV0IHZlcnRpY2FsUmVjdCA9IHtcclxuICAvLyAgIHg6IHBsYXllci54LFxyXG4gIC8vICAgeTogcGxheWVyLnkgKyBwbGF5ZXIueXZlbCxcclxuICAvLyAgIHdpZHRoOiBwbGF5ZXIud2lkdGgsXHJcbiAgLy8gICBoZWlnaHQ6IHBsYXllci5oZWlnaHRcclxuICAvLyB9XHJcblxyXG4gIC8vIGJvcmRlcnMuZm9yRWFjaCAoYm9yZGVyID0+IHtcclxuICAvLyAgIGxldCBib3JkZXJSZWN0ID0ge1xyXG4gIC8vICAgICB4OiBib3JkZXIueCxcclxuICAvLyAgICAgeTogYm9yZGVyLnksXHJcbiAgLy8gICAgIHdpZHRoOiBib3JkZXIud2lkdGgsXHJcbiAgLy8gICAgIGhlaWdodDogYm9yZGVyLmhlaWdodFxyXG4gIC8vICAgfVxyXG4gIC8vICAgY29uc29sZS5sb2coY2hlY2tDb2xsaXNpb24oaG9yaXpvbnRhbFJlY3QsYm9yZGVyUmVjdCkpO1xyXG4gIC8vICAgY29uc29sZS5sb2codmVydGljYWxSZWN0KVxyXG4gIC8vICAgaWYoY2hlY2tDb2xsaXNpb24oaG9yaXpvbnRhbFJlY3QsIGJvcmRlclJlY3QpKSB7XHJcbiAgLy8gICAgIC8vIHdoaWxlKGNoZWNrQ29sbGlzaW9uKGhvcml6b250YWxSZWN0LCBib3JkZXJSZWN0KSkge1xyXG4gIC8vICAgICAvLyAgIGhvcml6b250YWxSZWN0LnggLT0gTWF0aC5zaWduKHBsYXllci54dmVsKTtcclxuICAvLyAgICAgLy8gfVxyXG4gIC8vICAgICBwbGF5ZXIueCA9IGhvcml6b250YWxSZWN0Lng7XHJcbiAgLy8gICAgIHBsYXllci54dmVsID0gMDtcclxuICAvLyAgIH1cclxuICAvLyAgIGNvbnNvbGUubG9nKGNoZWNrQ29sbGlzaW9uKHZlcnRpY2FsUmVjdCxib3JkZXJSZWN0KSk7XHJcbiAgLy8gICBpZihjaGVja0NvbGxpc2lvbih2ZXJ0aWNhbFJlY3QsYm9yZGVyUmVjdCkpIHtcclxuICAvLyAgICAgLy8gd2hpbGUoY2hlY2tDb2xsaXNpb24odmVydGljYWxSZWN0LCBib3JkZXJSZWN0KSkge1xyXG4gIC8vICAgICAvLyAgIHZlcnRpY2FsUmVjdC55IC09IE1hdGguc2lnbihwbGF5ZXIueXZlbCk7XHJcbiAgLy8gICAgIC8vIH1cclxuICAvLyAgICAgcGxheWVyLnkgPSB2ZXJ0aWNhbFJlY3QueTtcclxuICAvLyAgICAgcGxheWVyLnl2ZWwgPSAwO1xyXG4gIC8vICAgfVxyXG4gIC8vIH0pXHJcblxyXG59XHJcbiJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJyZXF1aXJlIiwiQm9yZGVyIiwid2luZG93Iiwib25sb2FkIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJpbWciLCJwbGF5ZXIiLCJnYW1lTG9vcCIsInNldEludGVydmFsIiwic3RlcCIsInNldHVwSW5wdXRzIiwiYm9yZGVycyIsInB1c2giLCJkcmF3IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImRyYXdJbWFnZSIsImZvckVhY2giLCJib3JkZXIiLCJib3JkZXJSZWN0IiwieCIsInkiLCJob3Jpem9udGFsUmVjdCIsInh2ZWwiLCJ2ZXJ0aWNhbFJlY3QiLCJ5dmVsIiwiY2hlY2tDb2xsaXNpb24iLCJyMiIsImNyYXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ (function(module) {

eval("let upKey, rightKey, downKey, leftKey;\n\nfunction Player(x, y, color, type) {\n  this.x = x;\n  this.y = y;\n  this.color = color;\n  this.type = type;\n\n  if (type == \"image\") {\n    this.image = new Image();\n    this.image.src = color;\n  }\n\n  this.xvel = 0;\n  this.yvel = 0;\n  this.friction = 0.6;\n  this.maxVel = 5;\n  this.width = 150;\n  this.height = 75;\n  this.active = true;\n\n  this.step = function () {\n    //horiz mvmt\n    if (this.active) {\n      if (!leftKey && !rightKey || leftKey && rightKey) {\n        this.xvel *= this.friction;\n      } else if (rightKey) {\n        this.xvel++;\n      } else if (leftKey) {\n        this.xvel--;\n      }\n\n      this.x += this.xvel;\n      this.y += this.yvel;\n    } //vert mvmt\n\n\n    if (upKey) {\n      //check if on ground\n      this.yvel -= 10;\n    } // if (downKey && this.yvel != 0) {\n    //   this.yvel += 10;\n    // }\n\n\n    this.yvel += 2; //gravity\n    //adjust vel\n\n    if (this.xvel > this.maxVel) {\n      this.xvel = this.maxVel;\n    } else if (this.xvel < -this.maxVel) {\n      this.xvel = -this.maxVel;\n    }\n\n    if (this.yvel > this.maxVel) {\n      this.yvel = this.maxVel;\n    } else if (this.yvel < -this.maxVel) {\n      this.yvel = -this.maxVel;\n    }\n\n    if (this.xvel > 0) {\n      this.xvel = Math.floor(this.xvel);\n    } else {\n      this.xvel = Math.ceil(this.xvel);\n    }\n\n    if (this.yvel > 0) {\n      this.yvel = Math.floor(this.yvel);\n    } else {\n      this.yvel = Math.ceil(this.yvel);\n    }\n\n    this.x += this.xvel;\n    this.y += this.yvel;\n  };\n\n  this.draw = function (ctx) {\n    if (type === \"image\") {\n      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);\n    } else {\n      ctx.fillStyle = `${this.color}`;\n      ctx.fillRect(this.x, this.y, this.width, this.height);\n    }\n  };\n\n  this.setupInputs = function () {\n    document.addEventListener(\"keydown\", function (event) {\n      if (event.key === \"w\" || event.key === \"ArrowUp\") {\n        upKey = true;\n      } else if (event.key === \"a\" || event.key === \"ArrowLeft\") {\n        leftKey = true;\n      } else if (event.key === \"s\" || event.key === \"ArrowDown\") {\n        downKey = true;\n      } else if (event.key === \"d\" || event.key === \"ArrowRight\") {\n        rightKey = true;\n      }\n    });\n    document.addEventListener(\"keyup\", function (event) {\n      if (event.key === \"w\" || event.key === \"ArrowUp\") {\n        upKey = false;\n      } else if (event.key === \"a\" || event.key === \"ArrowLeft\") {\n        leftKey = false;\n      } else if (event.key === \"s\" || event.key === \"ArrowDown\") {\n        downKey = false;\n      } else if (event.key === \"d\" || event.key === \"ArrowRight\") {\n        rightKey = false;\n      }\n    });\n  };\n}\n\nmodule.exports = Player; // export default Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KYXZhU2NyaXB0X1Byb2plY3QvLi9zcmMvcGxheWVyLmpzP2E4YTIiXSwibmFtZXMiOlsidXBLZXkiLCJyaWdodEtleSIsImRvd25LZXkiLCJsZWZ0S2V5IiwiUGxheWVyIiwieCIsInkiLCJjb2xvciIsInR5cGUiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwieHZlbCIsInl2ZWwiLCJmcmljdGlvbiIsIm1heFZlbCIsIndpZHRoIiwiaGVpZ2h0IiwiYWN0aXZlIiwic3RlcCIsIk1hdGgiLCJmbG9vciIsImNlaWwiLCJkcmF3IiwiY3R4IiwiZHJhd0ltYWdlIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzZXR1cElucHV0cyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsS0FBSixFQUFXQyxRQUFYLEVBQXFCQyxPQUFyQixFQUE4QkMsT0FBOUI7O0FBRUEsU0FBU0MsTUFBVCxDQUFnQkMsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCQyxLQUF0QixFQUE2QkMsSUFBN0IsRUFBbUM7QUFDakMsT0FBS0gsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsT0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsT0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS0MsSUFBTCxHQUFZQSxJQUFaOztBQUNBLE1BQUlBLElBQUksSUFBSSxPQUFaLEVBQXFCO0FBQ25CLFNBQUtDLEtBQUwsR0FBYSxJQUFJQyxLQUFKLEVBQWI7QUFDQSxTQUFLRCxLQUFMLENBQVdFLEdBQVgsR0FBaUJKLEtBQWpCO0FBQ0Q7O0FBQ0QsT0FBS0ssSUFBTCxHQUFZLENBQVo7QUFDQSxPQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsR0FBaEI7QUFDQSxPQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLE9BQUtDLEtBQUwsR0FBYSxHQUFiO0FBQ0EsT0FB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QyxHQUFOLEtBQWMsR0FBZCxJQUFxQkQsS0FBSyxDQUFDQyxHQUFOLEtBQWMsWUFBdkMsRUFBcUQ7QUFDMUQvQixRQUFBQSxRQUFRLEdBQUcsS0FBWDtBQUNEO0FBQ0YsS0FWRDtBQVdELEdBeEJEO0FBeUJEOztBQUlEZ0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCOUIsTUFBakIsQyxDQUNBIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHVwS2V5LCByaWdodEtleSwgZG93bktleSwgbGVmdEtleTtcclxuXHJcbmZ1bmN0aW9uIFBsYXllcih4LCB5LCBjb2xvciwgdHlwZSkge1xyXG4gIHRoaXMueCA9IHg7XHJcbiAgdGhpcy55ID0geTtcclxuICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgdGhpcy50eXBlID0gdHlwZTtcclxuICBpZiAodHlwZSA9PSBcImltYWdlXCIpIHtcclxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1hZ2Uuc3JjID0gY29sb3I7XHJcbiAgfVxyXG4gIHRoaXMueHZlbCA9IDA7XHJcbiAgdGhpcy55dmVsID0gMDtcclxuICB0aGlzLmZyaWN0aW9uID0gMC42O1xyXG4gIHRoaXMubWF4VmVsID0gNTtcclxuICB0aGlzLndpZHRoID0gMTUwO1xyXG4gIHRoaXMuaGVpZ2h0ID0gNzU7XHJcbiAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICB0aGlzLnN0ZXAgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvL2hvcml6IG12bXRcclxuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xyXG4gICAgICBpZiAoIWxlZnRLZXkgJiYgIXJpZ2h0S2V5IHx8IGxlZnRLZXkgJiYgcmlnaHRLZXkpIHtcclxuICAgICAgICB0aGlzLnh2ZWwgKj0gdGhpcy5mcmljdGlvbjtcclxuICAgICAgfSBlbHNlIGlmIChyaWdodEtleSkge1xyXG4gICAgICAgIHRoaXMueHZlbCArKztcclxuICAgICAgfSBlbHNlIGlmIChsZWZ0S2V5KSB7XHJcbiAgICAgICAgdGhpcy54dmVsIC0tO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMueCArPSB0aGlzLnh2ZWw7XHJcbiAgICAgIHRoaXMueSArPSB0aGlzLnl2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgLy92ZXJ0IG12bXRcclxuICAgIGlmICh1cEtleSkge1xyXG4gICAgICAvL2NoZWNrIGlmIG9uIGdyb3VuZFxyXG4gICAgICB0aGlzLnl2ZWwgLT0gMTA7XHJcbiAgICB9XHJcbiAgICAvLyBpZiAoZG93bktleSAmJiB0aGlzLnl2ZWwgIT0gMCkge1xyXG4gICAgLy8gICB0aGlzLnl2ZWwgKz0gMTA7XHJcbiAgICAvLyB9XHJcbiAgICB0aGlzLnl2ZWwgKz0gMjsgLy9ncmF2aXR5XHJcblxyXG4gICAgLy9hZGp1c3QgdmVsXHJcbiAgICBpZiAodGhpcy54dmVsID4gdGhpcy5tYXhWZWwpIHtcclxuICAgICAgdGhpcy54dmVsID0gdGhpcy5tYXhWZWw7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMueHZlbCA8IC10aGlzLm1heFZlbCkge1xyXG4gICAgICB0aGlzLnh2ZWwgPSAtdGhpcy5tYXhWZWw7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy55dmVsID4gdGhpcy5tYXhWZWwpIHtcclxuICAgICAgdGhpcy55dmVsID0gdGhpcy5tYXhWZWw7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMueXZlbCA8IC10aGlzLm1heFZlbCkge1xyXG4gICAgICB0aGlzLnl2ZWwgPSAtdGhpcy5tYXhWZWw7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBpZiAodGhpcy54dmVsID4gMCkge1xyXG4gICAgICB0aGlzLnh2ZWwgPSBNYXRoLmZsb29yKHRoaXMueHZlbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnh2ZWwgPSBNYXRoLmNlaWwodGhpcy54dmVsKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnl2ZWwgPiAwKSB7XHJcbiAgICAgIHRoaXMueXZlbCA9IE1hdGguZmxvb3IodGhpcy55dmVsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMueXZlbCA9IE1hdGguY2VpbCh0aGlzLnl2ZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueCArPSB0aGlzLnh2ZWw7XHJcbiAgICB0aGlzLnkgKz0gdGhpcy55dmVsO1xyXG4gIH1cclxuXHJcblxyXG4gIHRoaXMuZHJhdyA9IGZ1bmN0aW9uKGN0eCkge1xyXG4gICAgaWYgKHR5cGUgPT09IFwiaW1hZ2VcIikge1xyXG4gICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gYCR7dGhpcy5jb2xvcn1gO1xyXG4gICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRoaXMuc2V0dXBJbnB1dHMgPSBmdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwid1wiIHx8IGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcclxuICAgICAgICB1cEtleSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSBcImFcIiB8fCBldmVudC5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcclxuICAgICAgICBsZWZ0S2V5ID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09IFwic1wiIHx8IGV2ZW50LmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xyXG4gICAgICAgIGRvd25LZXkgPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gXCJkXCIgfHwgZXZlbnQua2V5ID09PSBcIkFycm93UmlnaHRcIikge1xyXG4gICAgICAgIHJpZ2h0S2V5ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIndcIiB8fCBldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgdXBLZXkgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09IFwiYVwiIHx8IGV2ZW50LmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xyXG4gICAgICAgIGxlZnRLZXkgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09IFwic1wiIHx8IGV2ZW50LmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xyXG4gICAgICAgIGRvd25LZXkgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09IFwiZFwiIHx8IGV2ZW50LmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcclxuICAgICAgICByaWdodEtleSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7XHJcbi8vIGV4cG9ydCBkZWZhdWx0IFBsYXllcjtcclxuIl0sImZpbGUiOiIuL3NyYy9wbGF5ZXIuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KYXZhU2NyaXB0X1Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;