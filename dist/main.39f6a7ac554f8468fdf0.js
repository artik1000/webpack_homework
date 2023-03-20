/** *** */ (() => { // webpackBootstrap
/** *** */

  /** *** */ 	const __webpack_modules__ = ({

    /***/ './index.scss':
    /*! ********************!*\
  !*** ./index.scss ***!
  \******************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      // extracted by mini-css-extract-plugin
      /***/ }),

    /***/ './data.js':
    /*! *****************!*\
  !*** ./data.js ***!
  \**************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
        {
          name: 'header',
          text: 'Weather sounds',
        },
        {
          name: 'background',
        },
        {
          name: 'weather-card',
          type: 'summer',
          background: '/img/summer-bg.jpg',
          selected: true,
          sound: '/sounds/summer.mp3',
          icon: '/img/icons/sun.svg',
        },
        {
          name: 'weather-card',
          type: 'rain',
          background: '/img/rainy-bg.jpg',
          selected: false,
          sound: '/sounds/rain.mp3',
          icon: '/img/icons/cloud-rain.svg',
        },
        {
          name: 'weather-card',
          type: 'winter',
          background: '/img/winter-bg.jpg',
          selected: false,
          sound: '/sounds/winter.mp3',
          icon: '/img/icons/cloud-snow.svg',
        },
      ]);
      /***/ }),

    /** *** */ 	});
  /** ********************************************************************* */
  /** *** */ 	// The module cache
  /** *** */ 	const __webpack_module_cache__ = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */ 		// Check if module is in cache
    /** *** */ 		const cachedModule = __webpack_module_cache__[moduleId];
    /** *** */ 		if (cachedModule !== undefined) {
      /** *** */ 			return cachedModule.exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = __webpack_module_cache__[moduleId] = {
      /** *** */ 			// no module.id needed
      /** *** */ 			// no module.loaded needed
      /** *** */ 			exports: {},
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** ********************************************************************* */
  /** *** */ 	/* webpack/runtime/define property getters */
  /** *** */ 	(() => {
    /** *** */ 		// define getter functions for harmony exports
    /** *** */ 		__webpack_require__.d = (exports, definition) => {
      /** *** */ 			for (const key in definition) {
        /** *** */ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /** *** */ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /** *** */ 				}
        /** *** */ 			}
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/hasOwnProperty shorthand */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/make namespace object */
  /** *** */ 	(() => {
    /** *** */ 		// define __esModule on exports
    /** *** */ 		__webpack_require__.r = (exports) => {
      /** *** */ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /** *** */ 			}
      /** *** */ 			Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** ********************************************************************* */
  const __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*! ******************!*\
  !*** ./index.js ***!
  \***************** */
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ const _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ './data.js');
    /* harmony import */ const _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ './index.scss');
    const __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
      if (pack || arguments.length === 2) {
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    };

    const root = document.querySelector('#app');
    const content = document.createElement('div');
    const cardsRaw = document.createElement('div');
    function renderItem(block) {
      const h1 = document.createElement('h1');
      if (block.name === 'header') {
        h1.textContent = block.text;
        content.className = 'content';
        root.append(content);
        content.append(h1);
      }
      if (block.name === 'background') {
        const background = document.createElement('div');
        background.className = 'background';
        background.style.backgroundImage = 'url("'.concat(__spreadArray([], _data__WEBPACK_IMPORTED_MODULE_0__.default, true).filter((e) => e.name === 'weather-card' && e.selected === true)[0].background, '")');
        root.append(background);
      }
      if (document.getElementsByClassName('cards-raw').length === 0
        && document.getElementsByClassName('content').length !== 0) {
        cardsRaw.className = 'cards-raw';
        content.append(cardsRaw);
      }
      if (block.name === 'weather-card') {
        const weatherCardWrapper = document.createElement('div');
        weatherCardWrapper.className = 'weather-card__wrapper';
        document.getElementsByClassName('cards-raw')[0].append(weatherCardWrapper);
        const weatherCard = document.createElement('div');
        weatherCard.className = 'weather-card';
        weatherCard.style.backgroundImage = 'url("'.concat(block.background, '")');
        weatherCardWrapper.append(weatherCard);
        const weatherCardAudio_1 = document.createElement('audio');
        weatherCardWrapper.append(weatherCardAudio_1);
        const weatherCardAudioSource = document.createElement('source');
        weatherCardAudioSource.src = block.sound;
        weatherCardAudioSource.type = 'audio/mp3';
        weatherCardAudio_1.append(weatherCardAudioSource);
        const weatherCardIcon = document.createElement('div');
        weatherCard.append(weatherCardIcon);
        weatherCardIcon.id = 'play_'.concat(block.type);
        weatherCardIcon.className = 'weather-card__icon';
        weatherCardIcon.addEventListener('click', () => {
          weatherCardAudio_1.play();
        }, false);
        weatherCardIcon.style.backgroundImage = 'url("'.concat(block.icon, '")');
      }
    }
    function playSound() {
      console.log('play');
    }
    _data__WEBPACK_IMPORTED_MODULE_0__.default.forEach(renderItem);
  })();
/** *** */ })();

// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zOWY2YTdhYzU1NGY4NDY4ZmRmMC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBQzs7Ozs7OztVQ2hDRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BLHFCQUFxQixTQUFJLElBQUksU0FBSTtBQUNqQyw2RUFBNkUsT0FBTztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjtBQUNKO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkUsNkNBQUksOEJBQThCLDBEQUEwRDtBQUN6SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5zY3NzP2FiMmYiLCJ3ZWJwYWNrOi8vLy4vZGF0YS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCBbXG4gICAge1xuICAgICAgICBuYW1lOiAnaGVhZGVyJyxcbiAgICAgICAgdGV4dDogJ1dlYXRoZXIgc291bmRzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnYmFja2dyb3VuZCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ3dlYXRoZXItY2FyZCcsXG4gICAgICAgIHR5cGU6ICdzdW1tZXInLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnL2ltZy9zdW1tZXItYmcuanBnJyxcbiAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgIHNvdW5kOiAnL3NvdW5kcy9zdW1tZXIubXAzJyxcbiAgICAgICAgaWNvbjogJy9pbWcvaWNvbnMvc3VuLnN2ZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ3dlYXRoZXItY2FyZCcsXG4gICAgICAgIHR5cGU6ICdyYWluJyxcbiAgICAgICAgYmFja2dyb3VuZDogJy9pbWcvcmFpbnktYmcuanBnJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICBzb3VuZDogJy9zb3VuZHMvcmFpbi5tcDMnLFxuICAgICAgICBpY29uOiAnL2ltZy9pY29ucy9jbG91ZC1yYWluLnN2ZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ3dlYXRoZXItY2FyZCcsXG4gICAgICAgIHR5cGU6ICd3aW50ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnL2ltZy93aW50ZXItYmcuanBnJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICBzb3VuZDogJy9zb3VuZHMvd2ludGVyLm1wMycsXG4gICAgICAgIGljb246ICcvaW1nL2ljb25zL2Nsb3VkLXNub3cuc3ZnJ1xuICAgIH0sXG5dO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xudmFyIHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJyk7XG52YXIgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudmFyIGNhcmRzUmF3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5mdW5jdGlvbiByZW5kZXJJdGVtKGJsb2NrKSB7XG4gICAgdmFyIGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBpZiAoYmxvY2submFtZSA9PT0gJ2hlYWRlcicpIHtcbiAgICAgICAgaDEudGV4dENvbnRlbnQgPSBibG9jay50ZXh0O1xuICAgICAgICBjb250ZW50LmNsYXNzTmFtZSA9ICdjb250ZW50JztcbiAgICAgICAgcm9vdC5hcHBlbmQoY29udGVudCk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGgxKTtcbiAgICB9XG4gICAgaWYgKGJsb2NrLm5hbWUgPT09ICdiYWNrZ3JvdW5kJykge1xuICAgICAgICB2YXIgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBiYWNrZ3JvdW5kLmNsYXNzTmFtZSA9ICdiYWNrZ3JvdW5kJztcbiAgICAgICAgYmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcXFwiXCIuY29uY2F0KF9fc3ByZWFkQXJyYXkoW10sIGRhdGEsIHRydWUpLmZpbHRlcihmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5uYW1lID09PSAnd2VhdGhlci1jYXJkJyAmJiBlLnNlbGVjdGVkID09PSB0cnVlOyB9KVswXS5iYWNrZ3JvdW5kLCBcIlxcXCIpXCIpO1xuICAgICAgICByb290LmFwcGVuZChiYWNrZ3JvdW5kKTtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmRzLXJhdycpLmxlbmd0aCA9PT0gMFxuICAgICAgICAmJiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb250ZW50JykubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNhcmRzUmF3LmNsYXNzTmFtZSA9ICdjYXJkcy1yYXcnO1xuICAgICAgICBjb250ZW50LmFwcGVuZChjYXJkc1Jhdyk7XG4gICAgfVxuICAgIGlmIChibG9jay5uYW1lID09PSAnd2VhdGhlci1jYXJkJykge1xuICAgICAgICB2YXIgd2VhdGhlckNhcmRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdlYXRoZXJDYXJkV3JhcHBlci5jbGFzc05hbWUgPSAnd2VhdGhlci1jYXJkX193cmFwcGVyJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FyZHMtcmF3JylbMF0uYXBwZW5kKHdlYXRoZXJDYXJkV3JhcHBlcik7XG4gICAgICAgIHZhciB3ZWF0aGVyQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3ZWF0aGVyQ2FyZC5jbGFzc05hbWUgPSAnd2VhdGhlci1jYXJkJztcbiAgICAgICAgd2VhdGhlckNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXFxcIlwiLmNvbmNhdChibG9jay5iYWNrZ3JvdW5kLCBcIlxcXCIpXCIpO1xuICAgICAgICB3ZWF0aGVyQ2FyZFdyYXBwZXIuYXBwZW5kKHdlYXRoZXJDYXJkKTtcbiAgICAgICAgdmFyIHdlYXRoZXJDYXJkQXVkaW9fMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XG4gICAgICAgIHdlYXRoZXJDYXJkV3JhcHBlci5hcHBlbmQod2VhdGhlckNhcmRBdWRpb18xKTtcbiAgICAgICAgdmFyIHdlYXRoZXJDYXJkQXVkaW9Tb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcbiAgICAgICAgd2VhdGhlckNhcmRBdWRpb1NvdXJjZS5zcmMgPSBibG9jay5zb3VuZDtcbiAgICAgICAgd2VhdGhlckNhcmRBdWRpb1NvdXJjZS50eXBlID0gXCJhdWRpby9tcDNcIjtcbiAgICAgICAgd2VhdGhlckNhcmRBdWRpb18xLmFwcGVuZCh3ZWF0aGVyQ2FyZEF1ZGlvU291cmNlKTtcbiAgICAgICAgdmFyIHdlYXRoZXJDYXJkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3ZWF0aGVyQ2FyZC5hcHBlbmQod2VhdGhlckNhcmRJY29uKTtcbiAgICAgICAgd2VhdGhlckNhcmRJY29uLmlkID0gXCJwbGF5X1wiLmNvbmNhdChibG9jay50eXBlKTtcbiAgICAgICAgd2VhdGhlckNhcmRJY29uLmNsYXNzTmFtZSA9ICd3ZWF0aGVyLWNhcmRfX2ljb24nO1xuICAgICAgICB3ZWF0aGVyQ2FyZEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3ZWF0aGVyQ2FyZEF1ZGlvXzEucGxheSgpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHdlYXRoZXJDYXJkSWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcXFwiXCIuY29uY2F0KGJsb2NrLmljb24sIFwiXFxcIilcIik7XG4gICAgfVxufVxuZnVuY3Rpb24gcGxheVNvdW5kKCkge1xuICAgIGNvbnNvbGUubG9nKCdwbGF5Jyk7XG59XG5kYXRhLmZvckVhY2gocmVuZGVySXRlbSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
