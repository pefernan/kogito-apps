(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.PatternFlyReact = {}, global.React, global.ReactDOM));
}(this, (function (exports, React, ReactDOM) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /** Joins args into a className string
     *
     * @param {any} args list of objects, string, or arrays to reduce
     */
    function css(...args) {
        // Adapted from https://github.com/JedWatson/classnames/blob/master/index.js
        const classes = [];
        const hasOwn = {}.hasOwnProperty;
        args.filter(Boolean).forEach((arg) => {
            const argType = typeof arg;
            if (argType === 'string' || argType === 'number') {
                classes.push(arg);
            }
            else if (Array.isArray(arg) && arg.length) {
                const inner = css(...arg);
                if (inner) {
                    classes.push(inner);
                }
            }
            else if (argType === 'object') {
                for (const key in arg) {
                    if (hasOwn.call(arg, key) && arg[key]) {
                        classes.push(key);
                    }
                }
            }
        });
        return classes.join(' ');
    }

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var backdrop = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "backdrop": "pf-c-backdrop",
      "backdropOpen": "pf-c-backdrop__open"
    };
    });

    var styles = unwrapExports(backdrop);

    const KEY_CODES = { ARROW_UP: 38, ARROW_DOWN: 40, ESCAPE_KEY: 27, TAB: 9, ENTER: 13, SPACE: 32 };
    const SIDE = { RIGHT: 'right', LEFT: 'left', BOTH: 'both', NONE: 'none' };
    const KEYHANDLER_DIRECTION = { UP: 'up', DOWN: 'down', RIGHT: 'right', LEFT: 'left' };
    (function (ValidatedOptions) {
        ValidatedOptions["success"] = "success";
        ValidatedOptions["error"] = "error";
        ValidatedOptions["warning"] = "warning";
        ValidatedOptions["default"] = "default";
    })(exports.ValidatedOptions || (exports.ValidatedOptions = {}));

    /*!
    * tabbable 5.1.4
    * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
    */
    var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
    var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
    var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

    var getCandidates = function getCandidates(el, includeContainer, filter) {
      var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));

      if (includeContainer && matches.call(el, candidateSelector)) {
        candidates.unshift(el);
      }

      candidates = candidates.filter(filter);
      return candidates;
    };

    var isContentEditable = function isContentEditable(node) {
      return node.contentEditable === 'true';
    };

    var getTabindex = function getTabindex(node) {
      var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

      if (!isNaN(tabindexAttr)) {
        return tabindexAttr;
      } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
      // so if they don't have a tabindex attribute specifically set, assume it's 0.


      if (isContentEditable(node)) {
        return 0;
      } // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
      //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
      //  yet they are still part of the regular tab order; in FF, they get a default
      //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
      //  order, consider their tab index to be 0.


      if ((node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
        return 0;
      }

      return node.tabIndex;
    };

    var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
      return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
    };

    var isInput = function isInput(node) {
      return node.tagName === 'INPUT';
    };

    var isHiddenInput = function isHiddenInput(node) {
      return isInput(node) && node.type === 'hidden';
    };

    var isDetailsWithSummary = function isDetailsWithSummary(node) {
      var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
        return child.tagName === 'SUMMARY';
      });
      return r;
    };

    var getCheckedRadio = function getCheckedRadio(nodes, form) {
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].checked && nodes[i].form === form) {
          return nodes[i];
        }
      }
    };

    var isTabbableRadio = function isTabbableRadio(node) {
      if (!node.name) {
        return true;
      }

      var radioScope = node.form || node.ownerDocument;
      var radioSet = radioScope.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
      var checked = getCheckedRadio(radioSet, node.form);
      return !checked || checked === node;
    };

    var isRadio = function isRadio(node) {
      return isInput(node) && node.type === 'radio';
    };

    var isNonTabbableRadio = function isNonTabbableRadio(node) {
      return isRadio(node) && !isTabbableRadio(node);
    };

    var isHidden = function isHidden(node) {
      if (getComputedStyle(node).visibility === 'hidden') {
        return true;
      }

      var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
      var nodeUnderDetails = isDirectSummary ? node.parentElement : node;

      if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
        return true;
      }

      while (node) {
        if (getComputedStyle(node).display === 'none') {
          return true;
        }

        node = node.parentElement;
      }

      return false;
    };

    var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(node) {
      if (node.disabled || isHiddenInput(node) || isHidden(node) ||
      /* For a details element with a summary, the summary element gets the focused  */
      isDetailsWithSummary(node)) {
        return false;
      }

      return true;
    };

    var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(node) {
      if (!isNodeMatchingSelectorFocusable(node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
        return false;
      }

      return true;
    };

    var tabbable = function tabbable(el, options) {
      options = options || {};
      var regularTabbables = [];
      var orderedTabbables = [];
      var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable);
      candidates.forEach(function (candidate, i) {
        var candidateTabindex = getTabindex(candidate);

        if (candidateTabindex === 0) {
          regularTabbables.push(candidate);
        } else {
          orderedTabbables.push({
            documentOrder: i,
            tabIndex: candidateTabindex,
            node: candidate
          });
        }
      });
      var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
        return a.node;
      }).concat(regularTabbables);
      return tabbableNodes;
    };

    var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');

    var isFocusable = function isFocusable(node) {
      if (!node) {
        throw new Error('No node provided');
      }

      if (matches.call(node, focusableCandidateSelector) === false) {
        return false;
      }

      return isNodeMatchingSelectorFocusable(node);
    };

    /*!
    * focus-trap 6.2.2
    * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
    */

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    var activeFocusDelay;

    var activeFocusTraps = function () {
      var trapQueue = [];
      return {
        activateTrap: function activateTrap(trap) {
          if (trapQueue.length > 0) {
            var activeTrap = trapQueue[trapQueue.length - 1];

            if (activeTrap !== trap) {
              activeTrap.pause();
            }
          }

          var trapIndex = trapQueue.indexOf(trap);

          if (trapIndex === -1) {
            trapQueue.push(trap);
          } else {
            // move this existing trap to the front of the queue
            trapQueue.splice(trapIndex, 1);
            trapQueue.push(trap);
          }
        },
        deactivateTrap: function deactivateTrap(trap) {
          var trapIndex = trapQueue.indexOf(trap);

          if (trapIndex !== -1) {
            trapQueue.splice(trapIndex, 1);
          }

          if (trapQueue.length > 0) {
            trapQueue[trapQueue.length - 1].unpause();
          }
        }
      };
    }();

    var isSelectableInput = function isSelectableInput(node) {
      return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
    };

    var isEscapeEvent = function isEscapeEvent(e) {
      return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
    };

    var isTabEvent = function isTabEvent(e) {
      return e.key === 'Tab' || e.keyCode === 9;
    };

    var delay = function delay(fn) {
      return setTimeout(fn, 0);
    };

    var createFocusTrap = function createFocusTrap(elements, userOptions) {
      var doc = document;

      var config = _objectSpread2({
        returnFocusOnDeactivate: true,
        escapeDeactivates: true,
        delayInitialFocus: true
      }, userOptions);

      var state = {
        // @type {Array<HTMLElement>}
        containers: [],
        // list of objects identifying the first and last tabbable nodes in all containers/groups in
        //  the trap
        // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
        //  is active, but the trap should never get to a state where there isn't at least one group
        //  with at least one tabbable node in it (that would lead to an error condition that would
        //  result in an error being thrown)
        // @type {Array<{ firstTabbableNode: HTMLElement|null, lastTabbableNode: HTMLElement|null }>}
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: false,
        paused: false
      };
      var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

      var containersContain = function containersContain(element) {
        return state.containers.some(function (container) {
          return container.contains(element);
        });
      };

      var getNodeForOption = function getNodeForOption(optionName) {
        var optionValue = config[optionName];

        if (!optionValue) {
          return null;
        }

        var node = optionValue;

        if (typeof optionValue === 'string') {
          node = doc.querySelector(optionValue);

          if (!node) {
            throw new Error("`".concat(optionName, "` refers to no known node"));
          }
        }

        if (typeof optionValue === 'function') {
          node = optionValue();

          if (!node) {
            throw new Error("`".concat(optionName, "` did not return a node"));
          }
        }

        return node;
      };

      var getInitialFocusNode = function getInitialFocusNode() {
        var node;

        if (getNodeForOption('initialFocus') !== null) {
          node = getNodeForOption('initialFocus');
        } else if (containersContain(doc.activeElement)) {
          node = doc.activeElement;
        } else {
          var firstTabbableGroup = state.tabbableGroups[0];
          var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
          node = firstTabbableNode || getNodeForOption('fallbackFocus');
        }

        if (!node) {
          throw new Error('Your focus-trap needs to have at least one focusable element');
        }

        return node;
      };

      var updateTabbableNodes = function updateTabbableNodes() {
        state.tabbableGroups = state.containers.map(function (container) {
          var tabbableNodes = tabbable(container);

          if (tabbableNodes.length > 0) {
            return {
              firstTabbableNode: tabbableNodes[0],
              lastTabbableNode: tabbableNodes[tabbableNodes.length - 1]
            };
          }

          return undefined;
        }).filter(function (group) {
          return !!group;
        }); // remove groups with no tabbable nodes
        // throw if no groups have tabbable nodes and we don't have a fallback focus node either

        if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus')) {
          throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
        }
      };

      var tryFocus = function tryFocus(node) {
        if (node === doc.activeElement) {
          return;
        }

        if (!node || !node.focus) {
          tryFocus(getInitialFocusNode());
          return;
        }

        node.focus({
          preventScroll: !!config.preventScroll
        });
        state.mostRecentlyFocusedNode = node;

        if (isSelectableInput(node)) {
          node.select();
        }
      };

      var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
        var node = getNodeForOption('setReturnFocus');
        return node ? node : previousActiveElement;
      }; // This needs to be done on mousedown and touchstart instead of click
      // so that it precedes the focus event.


      var checkPointerDown = function checkPointerDown(e) {
        if (containersContain(e.target)) {
          // allow the click since it ocurred inside the trap
          return;
        }

        if (config.clickOutsideDeactivates) {
          // immediately deactivate the trap
          trap.deactivate({
            // if, on deactivation, we should return focus to the node originally-focused
            //  when the trap was activated (or the configured `setReturnFocus` node),
            //  then assume it's also OK to return focus to the outside node that was
            //  just clicked, causing deactivation, as long as that node is focusable;
            //  if it isn't focusable, then return focus to the original node focused
            //  on activation (or the configured `setReturnFocus` node)
            // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
            //  which will result in the outside click setting focus to the node
            //  that was clicked, whether it's focusable or not; by setting
            //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
            //  on activation (or the configured `setReturnFocus` node)
            returnFocus: config.returnFocusOnDeactivate && !isFocusable(e.target)
          });
          return;
        } // This is needed for mobile devices.
        // (If we'll only let `click` events through,
        // then on mobile they will be blocked anyways if `touchstart` is blocked.)


        if (config.allowOutsideClick && (typeof config.allowOutsideClick === 'boolean' ? config.allowOutsideClick : config.allowOutsideClick(e))) {
          // allow the click outside the trap to take place
          return;
        } // otherwise, prevent the click


        e.preventDefault();
      }; // In case focus escapes the trap for some strange reason, pull it back in.


      var checkFocusIn = function checkFocusIn(e) {
        var targetContained = containersContain(e.target); // In Firefox when you Tab out of an iframe the Document is briefly focused.

        if (targetContained || e.target instanceof Document) {
          if (targetContained) {
            state.mostRecentlyFocusedNode = e.target;
          }
        } else {
          // escaped! pull it back in to where it just left
          e.stopImmediatePropagation();
          tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
        }
      }; // Hijack Tab events on the first and last focusable nodes of the trap,
      // in order to prevent focus from escaping. If it escapes for even a
      // moment it can end up scrolling the page and causing confusion so we
      // kind of need to capture the action at the keydown phase.


      var checkTab = function checkTab(e) {
        updateTabbableNodes();
        var destinationNode = null;

        if (state.tabbableGroups.length > 0) {
          if (e.shiftKey) {
            var startOfGroupIndex = state.tabbableGroups.findIndex(function (_ref) {
              var firstTabbableNode = _ref.firstTabbableNode;
              return e.target === firstTabbableNode;
            });

            if (startOfGroupIndex >= 0) {
              var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
              var destinationGroup = state.tabbableGroups[destinationGroupIndex];
              destinationNode = destinationGroup.lastTabbableNode;
            }
          } else {
            var lastOfGroupIndex = state.tabbableGroups.findIndex(function (_ref2) {
              var lastTabbableNode = _ref2.lastTabbableNode;
              return e.target === lastTabbableNode;
            });

            if (lastOfGroupIndex >= 0) {
              var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;

              var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
              destinationNode = _destinationGroup.firstTabbableNode;
            }
          }
        } else {
          destinationNode = getNodeForOption('fallbackFocus');
        }

        if (destinationNode) {
          e.preventDefault();
          tryFocus(destinationNode);
        }
      };

      var checkKey = function checkKey(e) {
        if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
          e.preventDefault();
          trap.deactivate();
          return;
        }

        if (isTabEvent(e)) {
          checkTab(e);
          return;
        }
      };

      var checkClick = function checkClick(e) {
        if (config.clickOutsideDeactivates) {
          return;
        }

        if (containersContain(e.target)) {
          return;
        }

        if (config.allowOutsideClick && (typeof config.allowOutsideClick === 'boolean' ? config.allowOutsideClick : config.allowOutsideClick(e))) {
          return;
        }

        e.preventDefault();
        e.stopImmediatePropagation();
      }; //
      // EVENT LISTENERS
      //


      var addListeners = function addListeners() {
        if (!state.active) {
          return;
        } // There can be only one listening focus trap at a time


        activeFocusTraps.activateTrap(trap); // Delay ensures that the focused element doesn't capture the event
        // that caused the focus trap activation.

        activeFocusDelay = config.delayInitialFocus ? delay(function () {
          tryFocus(getInitialFocusNode());
        }) : tryFocus(getInitialFocusNode());
        doc.addEventListener('focusin', checkFocusIn, true);
        doc.addEventListener('mousedown', checkPointerDown, {
          capture: true,
          passive: false
        });
        doc.addEventListener('touchstart', checkPointerDown, {
          capture: true,
          passive: false
        });
        doc.addEventListener('click', checkClick, {
          capture: true,
          passive: false
        });
        doc.addEventListener('keydown', checkKey, {
          capture: true,
          passive: false
        });
        return trap;
      };

      var removeListeners = function removeListeners() {
        if (!state.active) {
          return;
        }

        doc.removeEventListener('focusin', checkFocusIn, true);
        doc.removeEventListener('mousedown', checkPointerDown, true);
        doc.removeEventListener('touchstart', checkPointerDown, true);
        doc.removeEventListener('click', checkClick, true);
        doc.removeEventListener('keydown', checkKey, true);
        return trap;
      }; //
      // TRAP DEFINITION
      //


      trap = {
        activate: function activate(activateOptions) {
          if (state.active) {
            return this;
          }

          updateTabbableNodes();
          state.active = true;
          state.paused = false;
          state.nodeFocusedBeforeActivation = doc.activeElement;
          var onActivate = activateOptions && activateOptions.onActivate ? activateOptions.onActivate : config.onActivate;

          if (onActivate) {
            onActivate();
          }

          addListeners();
          return this;
        },
        deactivate: function deactivate(deactivateOptions) {
          if (!state.active) {
            return this;
          }

          clearTimeout(activeFocusDelay);
          removeListeners();
          state.active = false;
          state.paused = false;
          activeFocusTraps.deactivateTrap(trap);
          var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate;

          if (onDeactivate) {
            onDeactivate();
          }

          var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;

          if (returnFocus) {
            delay(function () {
              tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
            });
          }

          return this;
        },
        pause: function pause() {
          if (state.paused || !state.active) {
            return this;
          }

          state.paused = true;
          removeListeners();
          return this;
        },
        unpause: function unpause() {
          if (!state.paused || !state.active) {
            return this;
          }

          state.paused = false;
          updateTabbableNodes();
          addListeners();
          return this;
        },
        updateContainerElements: function updateContainerElements(containerElements) {
          var elementsAsArray = [].concat(containerElements).filter(Boolean);
          state.containers = elementsAsArray.map(function (element) {
            return typeof element === 'string' ? doc.querySelector(element) : element;
          });

          if (state.active) {
            updateTabbableNodes();
          }

          return this;
        }
      }; // initialize container elements

      trap.updateContainerElements(elements);
      return trap;
    };

    class FocusTrap extends React.Component {
        constructor(props) {
            super(props);
            this.divRef = React.createRef();
            if (typeof document !== 'undefined') {
                this.previouslyFocusedElement = document.activeElement;
            }
        }
        componentDidMount() {
            // We need to hijack the returnFocusOnDeactivate option,
            // because React can move focus into the element before we arrived at
            // this lifecycle hook (e.g. with autoFocus inputs). So the component
            // captures the previouslyFocusedElement in componentWillMount,
            // then (optionally) returns focus to it in componentWillUnmount.
            this.focusTrap = createFocusTrap(this.divRef.current, Object.assign(Object.assign({}, this.props.focusTrapOptions), { returnFocusOnDeactivate: false }));
            if (this.props.active) {
                this.focusTrap.activate();
            }
            if (this.props.paused) {
                this.focusTrap.pause();
            }
        }
        componentDidUpdate(prevProps) {
            if (prevProps.active && !this.props.active) {
                this.focusTrap.deactivate();
            }
            else if (!prevProps.active && this.props.active) {
                this.focusTrap.activate();
            }
            if (prevProps.paused && !this.props.paused) {
                this.focusTrap.unpause();
            }
            else if (!prevProps.paused && this.props.paused) {
                this.focusTrap.pause();
            }
        }
        componentWillUnmount() {
            this.focusTrap.deactivate();
            if (this.props.focusTrapOptions.returnFocusOnDeactivate !== false &&
                this.previouslyFocusedElement &&
                this.previouslyFocusedElement.focus) {
                this.previouslyFocusedElement.focus();
            }
        }
        render() {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _a = this.props, { children, className, focusTrapOptions, active, paused } = _a, rest = __rest(_a, ["children", "className", "focusTrapOptions", "active", "paused"]);
            return (React.createElement("div", Object.assign({ ref: this.divRef, className: className }, rest), children));
        }
    }
    FocusTrap.displayName = 'FocusTrap';
    FocusTrap.defaultProps = {
        active: true,
        paused: false,
        focusTrapOptions: {}
    };

    /** This Component can be used to wrap a functional component in order to generate a random ID
     * Example of how to use this component
     *
     * const Component = ({id}: {id: string}) => (
     *  <GenerateId>{randomId => (
     *     <div id={id || randomId}>
     *       div with random ID
     *     </div>
     *   )}
     *  </GenerateId>
     *  );
     */
    let currentId = 0;
    class GenerateId extends React.Component {
        constructor() {
            super(...arguments);
            this.id = `${this.props.prefix}${currentId++}`;
        }
        render() {
            return this.props.children(this.id);
        }
    }
    GenerateId.displayName = 'GenerateId';
    GenerateId.defaultProps = {
        prefix: 'pf-random-id-'
    };

    const ASTERISK = '*';

    let uid = 0;
    const ouiaPrefix = 'OUIA-Generated-';
    const ouiaIdByRoute = {};
    /** Get props to conform to OUIA spec
     *
     * For functional components, use the useOUIAProps function instead
     *
     * In class based components, create a state variable ouiaStateId to create a static generated ID:
     * state = {
     *  ouiaStateId: getDefaultOUIAId(Chip.displayName)
     * }
     * This generated ID should remain alive as long as the component is not unmounted.
     *
     * Then add the attributes to the component
     * {...getOUIAProps('OverflowChip', this.props.ouiaId !== undefined ? this.props.ouiaId : this.state.ouiaStateId)}
     *
     * @param {string} componentType OUIA component type
     * @param {number|string} id OUIA component id
     * @param {boolean} ouiaSafe false if in animation
     */
    function getOUIAProps(componentType, id, ouiaSafe = true) {
        return {
            'data-ouia-component-type': `PF4/${componentType}`,
            'data-ouia-safe': ouiaSafe,
            'data-ouia-component-id': id
        };
    }
    /**
     * Hooks version of the getOUIAProps function that also memoizes the generated ID
     * Can only be used in functional components
     *
     * @param {string} componentType OUIA component type
     * @param {number|string} id OUIA component id
     * @param {boolean} ouiaSafe false if in animation
     * @param {string} variant Optional variant to add to the generated ID
     */
    const useOUIAProps = (componentType, id, ouiaSafe = true, variant) => ({
        'data-ouia-component-type': `PF4/${componentType}`,
        'data-ouia-safe': ouiaSafe,
        'data-ouia-component-id': useOUIAId(componentType, id, variant)
    });
    /**
     * Returns the ID or the memoized generated ID
     *
     * @param {string} componentType OUIA component type
     * @param {number|string} id OUIA component id
     * @param {string} variant Optional variant to add to the generated ID
     */
    const useOUIAId = (componentType, id, variant) => {
        if (id !== undefined) {
            return id;
        }
        return React.useMemo(() => getDefaultOUIAId(componentType, variant), [componentType, variant]);
    };
    /**
     * Returns a generated id based on the URL location
     *
     * @param {string} componentType OUIA component type
     * @param {string} variant Optional variant to add to the generated ID
     */
    function getDefaultOUIAId(componentType, variant) {
        /*
        ouiaIdByRoute = {
          [route+componentType]: [number]
        }
        */
        try {
            const key = `${window.location.href}-${componentType}-${variant || ''}`;
            if (!ouiaIdByRoute[key]) {
                ouiaIdByRoute[key] = 0;
            }
            return `${ouiaPrefix}${componentType}-${variant ? `${variant}-` : ''}${++ouiaIdByRoute[key]}`;
        }
        catch (exception) {
            return `${ouiaPrefix}${componentType}-${variant ? `${variant}-` : ''}${++uid}`;
        }
    }

    /**
     * @param {string} input - String to capitalize first letter
     */
    function capitalize(input) {
        return input[0].toUpperCase() + input.substring(1);
    }
    /**
     * @param {string} prefix - String to prefix ID with
     */
    function getUniqueId(prefix = 'pf') {
        const uid = new Date().getTime() +
            Math.random()
                .toString(36)
                .slice(2);
        return `${prefix}-${uid}`;
    }
    /**
     * @param { any } this - "This" reference
     * @param { Function } func - Function to debounce
     * @param { number } wait - Debounce amount
     */
    function debounce(func, wait) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }
    /** This function returns whether or not an element is within the viewable area of a container. If partial is true,
     * then this function will return true even if only part of the element is in view.
     *
     * @param {HTMLElement} container  The container to check if the element is in view of.
     * @param {HTMLElement} element    The element to check if it is view
     * @param {boolean} partial   true if partial view is allowed
     *
     * @returns { boolean } True if the component is in View.
     */
    function isElementInView(container, element, partial) {
        if (!container || !element) {
            return false;
        }
        const containerBounds = container.getBoundingClientRect();
        const elementBounds = element.getBoundingClientRect();
        const containerBoundsLeft = Math.floor(containerBounds.left);
        const containerBoundsRight = Math.floor(containerBounds.right);
        const elementBoundsLeft = Math.floor(elementBounds.left);
        const elementBoundsRight = Math.floor(elementBounds.right);
        // Check if in view
        const isTotallyInView = elementBoundsLeft >= containerBoundsLeft && elementBoundsRight <= containerBoundsRight;
        const isPartiallyInView = partial &&
            ((elementBoundsLeft < containerBoundsLeft && elementBoundsRight > containerBoundsLeft) ||
                (elementBoundsRight > containerBoundsRight && elementBoundsLeft < containerBoundsRight));
        // Return outcome
        return isTotallyInView || isPartiallyInView;
    }
    /** This function returns the side the element is out of view on (right, left or both)
     *
     * @param {HTMLElement} container    The container to check if the element is in view of.
     * @param {HTMLElement} element      The element to check if it is view
     *
     * @returns {string} right if the element is of the right, left if element is off the left or both if it is off on both sides.
     */
    function sideElementIsOutOfView(container, element) {
        const containerBounds = container.getBoundingClientRect();
        const elementBounds = element.getBoundingClientRect();
        const containerBoundsLeft = Math.floor(containerBounds.left);
        const containerBoundsRight = Math.floor(containerBounds.right);
        const elementBoundsLeft = Math.floor(elementBounds.left);
        const elementBoundsRight = Math.floor(elementBounds.right);
        // Check if in view
        const isOffLeft = elementBoundsLeft < containerBoundsLeft;
        const isOffRight = elementBoundsRight > containerBoundsRight;
        let side = SIDE.NONE;
        if (isOffRight && isOffLeft) {
            side = SIDE.BOTH;
        }
        else if (isOffRight) {
            side = SIDE.RIGHT;
        }
        else if (isOffLeft) {
            side = SIDE.LEFT;
        }
        // Return outcome
        return side;
    }
    /** Interpolates a parameterized templateString using values from a templateVars object.
     * The templateVars object should have keys and values which match the templateString's parameters.
     * Example:
     *    const templateString: 'My name is ${firstName} ${lastName}';
     *    const templateVars: {
     *      firstName: 'Jon'
     *      lastName: 'Dough'
     *    };
     *    const result = fillTemplate(templateString, templateVars);
     *    // "My name is Jon Dough"
     *
     * @param {string} templateString  The string passed by the consumer
     * @param {object} templateVars The variables passed to the string
     *
     * @returns {string} The template string literal result
     */
    function fillTemplate(templateString, templateVars) {
        return templateString.replace(/\${(.*?)}/g, (_, match) => templateVars[match] || '');
    }
    /**
     * This function allows for keyboard navigation through dropdowns. The custom argument is optional.
     *
     * @param {number} index The index of the element you're on
     * @param {number} innerIndex Inner index number
     * @param {string} position The orientation of the dropdown
     * @param {string[]} refsCollection Array of refs to the items in the dropdown
     * @param {object[]} kids Array of items in the dropdown
     * @param {boolean} [custom] Allows for handling of flexible content
     */
    function keyHandler(index, innerIndex, position, refsCollection, kids, custom = false) {
        if (!Array.isArray(kids)) {
            return;
        }
        const isMultiDimensional = refsCollection.filter(ref => ref)[0].constructor === Array;
        let nextIndex = index;
        let nextInnerIndex = innerIndex;
        if (position === 'up') {
            if (index === 0) {
                // loop back to end
                nextIndex = kids.length - 1;
            }
            else {
                nextIndex = index - 1;
            }
        }
        else if (position === 'down') {
            if (index === kids.length - 1) {
                // loop back to beginning
                nextIndex = 0;
            }
            else {
                nextIndex = index + 1;
            }
        }
        else if (position === 'left') {
            if (innerIndex === 0) {
                nextInnerIndex = refsCollection[index].length - 1;
            }
            else {
                nextInnerIndex = innerIndex - 1;
            }
        }
        else if (position === 'right') {
            if (innerIndex === refsCollection[index].length - 1) {
                nextInnerIndex = 0;
            }
            else {
                nextInnerIndex = innerIndex + 1;
            }
        }
        if (refsCollection[nextIndex] === null ||
            refsCollection[nextIndex] === undefined ||
            (isMultiDimensional &&
                (refsCollection[nextIndex][nextInnerIndex] === null || refsCollection[nextIndex][nextInnerIndex] === undefined))) {
            keyHandler(nextIndex, nextInnerIndex, position, refsCollection, kids, custom);
        }
        else if (custom) {
            if (refsCollection[nextIndex].focus) {
                refsCollection[nextIndex].focus();
            }
            // eslint-disable-next-line react/no-find-dom-node
            const element = ReactDOM.findDOMNode(refsCollection[nextIndex]);
            element.focus();
        }
        else if (position !== 'tab') {
            if (isMultiDimensional) {
                refsCollection[nextIndex][nextInnerIndex].focus();
            }
            else {
                refsCollection[nextIndex].focus();
            }
        }
    }
    /** This function is a helper for keyboard navigation through dropdowns.
     *
     * @param {number} index The index of the element you're on
     * @param {string} position The orientation of the dropdown
     * @param {string[]} collection Array of refs to the items in the dropdown
     */
    function getNextIndex(index, position, collection) {
        let nextIndex;
        if (position === 'up') {
            if (index === 0) {
                // loop back to end
                nextIndex = collection.length - 1;
            }
            else {
                nextIndex = index - 1;
            }
        }
        else if (index === collection.length - 1) {
            // loop back to beginning
            nextIndex = 0;
        }
        else {
            nextIndex = index + 1;
        }
        if (collection[nextIndex] === undefined || collection[nextIndex][0] === null) {
            return getNextIndex(nextIndex, position, collection);
        }
        else {
            return nextIndex;
        }
    }
    /** This function is a helper for pluralizing strings.
     *
     * @param {number} i The quantity of the string you want to pluralize
     * @param {string} singular The singular version of the string
     * @param {string} plural The change to the string that should occur if the quantity is not equal to 1.
     *                 Defaults to adding an 's'.
     */
    function pluralize(i, singular, plural) {
        if (!plural) {
            plural = `${singular}s`;
        }
        return `${i || 0} ${i === 1 ? singular : plural}`;
    }
    /**
     * This function is a helper for turning arrays of breakpointMod objects for data toolbar and flex into classes
     *
     * @param {object} mods The modifiers object
     * @param {any} styles The appropriate styles object for the component
     */
    const formatBreakpointMods = (mods, styles) => Object.entries(mods || {})
        .map(([breakpoint, mod]) => `${mod}${breakpoint !== 'default' ? `-on-${breakpoint}` : ''}`)
        .map(toCamel)
        .map(mod => mod.replace(/-?(\dxl)/gi, (_res, group) => `_${group}`))
        .map(modifierKey => styles.modifiers[modifierKey])
        .filter(Boolean)
        .join(' ');
    const camelize = (s) => s
        .toUpperCase()
        .replace('-', '')
        .replace('_', '');
    /**
     *
     * @param {string} s string to make camelCased
     */
    const toCamel = (s) => s.replace(/([-_][a-z])/gi, camelize);
    /**
     * Copied from exenv
     */
    const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    /**
     * Calculate the width of the text
     * Example:
     * getTextWidth('my text', node)
     *
     * @param {string} text The text to calculate the width for
     * @param {HTMLElement} node The HTML element
     */
    const getTextWidth = (text, node) => {
        const computedStyle = getComputedStyle(node);
        // Firefox returns the empty string for .font, so this function creates the .font property manually
        const getFontFromComputedStyle = () => {
            let computedFont = '';
            // Firefox uses percentages for font-stretch, but Canvas does not accept percentages
            // so convert to keywords, as listed at:
            // https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch
            const fontStretchLookupTable = {
                '50%': 'ultra-condensed',
                '62.5%': 'extra-condensed',
                '75%': 'condensed',
                '87.5%': 'semi-condensed',
                '100%': 'normal',
                '112.5%': 'semi-expanded',
                '125%': 'expanded',
                '150%': 'extra-expanded',
                '200%': 'ultra-expanded'
            };
            // If the retrieved font-stretch percentage isn't found in the lookup table, use
            // 'normal' as a last resort.
            let fontStretch;
            if (computedStyle.fontStretch in fontStretchLookupTable) {
                fontStretch = fontStretchLookupTable[computedStyle.fontStretch];
            }
            else {
                fontStretch = 'normal';
            }
            computedFont =
                computedStyle.fontStyle +
                    ' ' +
                    computedStyle.fontVariant +
                    ' ' +
                    computedStyle.fontWeight +
                    ' ' +
                    fontStretch +
                    ' ' +
                    computedStyle.fontSize +
                    '/' +
                    computedStyle.lineHeight +
                    ' ' +
                    computedStyle.fontFamily;
            return computedFont;
        };
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = computedStyle.font || getFontFromComputedStyle();
        return context.measureText(text).width;
    };
    /**
     * Get the inner dimensions of an element
     *
     * @param {HTMLElement} node HTML element to calculate the inner dimensions for
     */
    const innerDimensions = (node) => {
        const computedStyle = getComputedStyle(node);
        let width = node.clientWidth; // width with padding
        let height = node.clientHeight; // height with padding
        height -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
        width -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
        return { height, width };
    };
    /**
     * This function is a helper for truncating text content on the left, leaving the right side of the content in view
     *
     * @param {HTMLElement} node HTML element
     * @param {string} value The original text value
     */
    const trimLeft = (node, value) => {
        const availableWidth = innerDimensions(node).width;
        let newValue = value;
        if (getTextWidth(value, node) > availableWidth) {
            // we have text overflow, trim the text to the left and add ... in the front until it fits
            while (getTextWidth(`...${newValue}`, node) > availableWidth) {
                newValue = newValue.substring(1);
            }
            // replace text with our truncated text
            if (node.value) {
                node.value = `...${newValue}`;
            }
            else {
                node.innerText = `...${newValue}`;
            }
        }
        else {
            if (node.value) {
                node.value = value;
            }
            else {
                node.innerText = value;
            }
        }
    };
    /**
     * @param {string[]} events - Operations to prevent when disabled
     */
    const preventedEvents = (events) => events.reduce((handlers, eventToPrevent) => (Object.assign(Object.assign({}, handlers), { [eventToPrevent]: (event) => {
            event.preventDefault();
        } })), {});

    var bullseye = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "bullseye": "pf-l-bullseye"
    };
    });

    var styles$1 = unwrapExports(bullseye);

    var aboutModalBox = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "aboutModalBox": "pf-c-about-modal-box",
      "aboutModalBoxBrand": "pf-c-about-modal-box__brand",
      "aboutModalBoxBrandImage": "pf-c-about-modal-box__brand-image",
      "aboutModalBoxClose": "pf-c-about-modal-box__close",
      "aboutModalBoxContent": "pf-c-about-modal-box__content",
      "aboutModalBoxHeader": "pf-c-about-modal-box__header",
      "aboutModalBoxHero": "pf-c-about-modal-box__hero",
      "aboutModalBoxStrapline": "pf-c-about-modal-box__strapline",
      "button": "pf-c-button",
      "card": "pf-c-card",
      "modifiers": {
        "plain": "pf-m-plain"
      }
    };
    });

    var styles$2 = unwrapExports(aboutModalBox);

    var content = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "content": "pf-c-content",
      "modifiers": {
        "overpassFont": "pf-m-overpass-font"
      }
    };
    });

    var styles$3 = unwrapExports(content);

    const AboutModalBoxContent = (_a) => {
        var { children, className = '', trademark, id, noAboutModalBoxContentContainer = false } = _a, props = __rest(_a, ["children", "className", "trademark", "id", "noAboutModalBoxContentContainer"]);
        return (React.createElement("div", Object.assign({ className: css(styles$2.aboutModalBoxContent, className), id: id }, props),
            React.createElement("div", { className: css('pf-c-about-modal-box__body') }, noAboutModalBoxContentContainer ? children : React.createElement("div", { className: css(styles$3.content) }, children)),
            React.createElement("p", { className: css(styles$2.aboutModalBoxStrapline) }, trademark)));
    };
    AboutModalBoxContent.displayName = 'AboutModalBoxContent';

    var title = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "modifiers": {
        "4xl": "pf-m-4xl",
        "3xl": "pf-m-3xl",
        "2xl": "pf-m-2xl",
        "xl": "pf-m-xl",
        "lg": "pf-m-lg",
        "md": "pf-m-md",
        "overpassFont": "pf-m-overpass-font"
      },
      "title": "pf-c-title"
    };
    });

    var styles$4 = unwrapExports(title);

    (function (TitleSizes) {
        TitleSizes["md"] = "md";
        TitleSizes["lg"] = "lg";
        TitleSizes["xl"] = "xl";
        TitleSizes["2xl"] = "2xl";
        TitleSizes["3xl"] = "3xl";
        TitleSizes["4xl"] = "4xl";
    })(exports.TitleSizes || (exports.TitleSizes = {}));
    var headingLevelSizeMap;
    (function (headingLevelSizeMap) {
        headingLevelSizeMap["h1"] = "2xl";
        headingLevelSizeMap["h2"] = "xl";
        headingLevelSizeMap["h3"] = "lg";
        headingLevelSizeMap["h4"] = "md";
        headingLevelSizeMap["h5"] = "md";
        headingLevelSizeMap["h6"] = "md";
    })(headingLevelSizeMap || (headingLevelSizeMap = {}));
    const Title = (_a) => {
        var { className = '', children = '', headingLevel: HeadingLevel, size = headingLevelSizeMap[HeadingLevel] } = _a, props = __rest(_a, ["className", "children", "headingLevel", "size"]);
        return (React.createElement(HeadingLevel, Object.assign({}, props, { className: css(styles$4.title, size && styles$4.modifiers[size], className) }), children));
    };
    Title.displayName = 'Title';

    const AboutModalBoxHeader = (_a) => {
        var { className = '', productName = '', id } = _a, props = __rest(_a, ["className", "productName", "id"]);
        return (React.createElement("div", Object.assign({ className: css(styles$2.aboutModalBoxHeader, className) }, props),
            React.createElement(Title, { headingLevel: "h1", size: "4xl", id: id }, productName)));
    };
    AboutModalBoxHeader.displayName = 'AboutModalBoxHeader';

    const c_about_modal_box__hero_sm_BackgroundImage = {
      "name": "--pf-c-about-modal-box__hero--sm--BackgroundImage",
      "value": "url(\"../../assets/images/pfbg_992@2x.jpg\")",
      "var": "var(--pf-c-about-modal-box__hero--sm--BackgroundImage)"
    };

    const AboutModalBoxHero = (_a) => {
        var { className, backgroundImageSrc } = _a, props = __rest(_a, ["className", "backgroundImageSrc"]);
        return (React.createElement("div", Object.assign({ style: 
            /* eslint-disable camelcase */
            backgroundImageSrc !== ''
                ? { [c_about_modal_box__hero_sm_BackgroundImage.name]: `url(${backgroundImageSrc})` }
                : {}, className: css(styles$2.aboutModalBoxHero, className) }, props)));
    };
    AboutModalBoxHero.displayName = 'AboutModalBoxHero';

    const AboutModalBoxBrand = (_a) => {
        var { className = '', src = '', alt } = _a, props = __rest(_a, ["className", "src", "alt"]);
        return (React.createElement("div", Object.assign({ className: css(styles$2.aboutModalBoxBrand, className) }, props),
            React.createElement("img", { className: css(styles$2.aboutModalBoxBrandImage), src: src, alt: alt })));
    };
    AboutModalBoxBrand.displayName = 'AboutModalBoxBrand';

    var button = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "button": "pf-c-button",
      "buttonIcon": "pf-c-button__icon",
      "buttonProgress": "pf-c-button__progress",
      "modifiers": {
        "active": "pf-m-active",
        "block": "pf-m-block",
        "small": "pf-m-small",
        "primary": "pf-m-primary",
        "displayLg": "pf-m-display-lg",
        "secondary": "pf-m-secondary",
        "tertiary": "pf-m-tertiary",
        "link": "pf-m-link",
        "danger": "pf-m-danger",
        "warning": "pf-m-warning",
        "inline": "pf-m-inline",
        "control": "pf-m-control",
        "expanded": "pf-m-expanded",
        "plain": "pf-m-plain",
        "disabled": "pf-m-disabled",
        "ariaDisabled": "pf-m-aria-disabled",
        "progress": "pf-m-progress",
        "inProgress": "pf-m-in-progress",
        "start": "pf-m-start",
        "end": "pf-m-end",
        "overpassFont": "pf-m-overpass-font"
      },
      "spinner": "pf-c-spinner"
    };
    });

    var buttonStyles = unwrapExports(button);

    var spinner = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "modifiers": {
        "sm": "pf-m-sm",
        "md": "pf-m-md",
        "lg": "pf-m-lg",
        "xl": "pf-m-xl"
      },
      "spinner": "pf-c-spinner",
      "spinnerClipper": "pf-c-spinner__clipper",
      "spinnerLeadBall": "pf-c-spinner__lead-ball",
      "spinnerTailBall": "pf-c-spinner__tail-ball"
    };
    });

    var styles$5 = unwrapExports(spinner);

    (function (spinnerSize) {
        spinnerSize["sm"] = "sm";
        spinnerSize["md"] = "md";
        spinnerSize["lg"] = "lg";
        spinnerSize["xl"] = "xl";
    })(exports.spinnerSize || (exports.spinnerSize = {}));
    const Spinner = (_a) => {
        var { 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        className = '', size = 'xl', 'aria-valuetext': ariaValueText = 'Loading...' } = _a, props = __rest(_a, ["className", "size", 'aria-valuetext']);
        return (React.createElement("span", Object.assign({ className: css(styles$5.spinner, styles$5.modifiers[size], className), role: "progressbar", "aria-valuetext": ariaValueText }, props),
            React.createElement("span", { className: css(styles$5.spinnerClipper) }),
            React.createElement("span", { className: css(styles$5.spinnerLeadBall) }),
            React.createElement("span", { className: css(styles$5.spinnerTailBall) })));
    };
    Spinner.displayName = 'Spinner';

    (function (ButtonVariant) {
        ButtonVariant["primary"] = "primary";
        ButtonVariant["secondary"] = "secondary";
        ButtonVariant["tertiary"] = "tertiary";
        ButtonVariant["danger"] = "danger";
        ButtonVariant["warning"] = "warning";
        ButtonVariant["link"] = "link";
        ButtonVariant["plain"] = "plain";
        ButtonVariant["control"] = "control";
    })(exports.ButtonVariant || (exports.ButtonVariant = {}));
    (function (ButtonType) {
        ButtonType["button"] = "button";
        ButtonType["submit"] = "submit";
        ButtonType["reset"] = "reset";
    })(exports.ButtonType || (exports.ButtonType = {}));
    const Button = (_a) => {
        var { children = null, className = '', component = 'button', isActive = false, isBlock = false, isDisabled = false, isAriaDisabled = false, isLoading = null, spinnerAriaValueText, isSmall = false, isLarge = false, inoperableEvents = ['onClick', 'onKeyPress'], isInline = false, type = exports.ButtonType.button, variant = exports.ButtonVariant.primary, iconPosition = 'left', 'aria-label': ariaLabel = null, icon = null, ouiaId, ouiaSafe = true, tabIndex = null } = _a, props = __rest(_a, ["children", "className", "component", "isActive", "isBlock", "isDisabled", "isAriaDisabled", "isLoading", "spinnerAriaValueText", "isSmall", "isLarge", "inoperableEvents", "isInline", "type", "variant", "iconPosition", 'aria-label', "icon", "ouiaId", "ouiaSafe", "tabIndex"]);
        const ouiaProps = useOUIAProps(Button.displayName, ouiaId, ouiaSafe, variant);
        const Component = component;
        const isButtonElement = Component === 'button';
        const isInlineSpan = isInline && Component === 'span';
        if (isAriaDisabled && 'development' !== 'production') {
            // eslint-disable-next-line no-console
            console.warn('You are using a beta component feature (isAriaDisabled). These api parts are subject to change in the future.');
        }
        const preventedEvents = inoperableEvents.reduce((handlers, eventToPrevent) => (Object.assign(Object.assign({}, handlers), { [eventToPrevent]: (event) => {
                event.preventDefault();
            } })), {});
        const getDefaultTabIdx = () => {
            if (isDisabled) {
                return isButtonElement ? null : -1;
            }
            else if (isAriaDisabled) {
                return null;
            }
            else if (isInlineSpan) {
                return 0;
            }
        };
        return (React.createElement(Component, Object.assign({}, props, (isAriaDisabled ? preventedEvents : null), { "aria-disabled": isDisabled || isAriaDisabled, "aria-label": ariaLabel, className: css(buttonStyles.button, buttonStyles.modifiers[variant], isBlock && buttonStyles.modifiers.block, isDisabled && buttonStyles.modifiers.disabled, isAriaDisabled && buttonStyles.modifiers.ariaDisabled, isActive && buttonStyles.modifiers.active, isInline && variant === exports.ButtonVariant.link && buttonStyles.modifiers.inline, isLoading !== null && buttonStyles.modifiers.progress, isLoading && buttonStyles.modifiers.inProgress, isSmall && buttonStyles.modifiers.small, isLarge && buttonStyles.modifiers.displayLg, className), disabled: isButtonElement ? isDisabled : null, tabIndex: tabIndex !== null ? tabIndex : getDefaultTabIdx(), type: isButtonElement || isInlineSpan ? type : null, role: isInlineSpan ? 'button' : null }, ouiaProps),
            isLoading && (React.createElement("span", { className: css(buttonStyles.buttonProgress) },
                React.createElement(Spinner, { size: exports.spinnerSize.md, "aria-valuetext": spinnerAriaValueText }))),
            variant !== exports.ButtonVariant.plain && icon && iconPosition === 'left' && (React.createElement("span", { className: css(buttonStyles.buttonIcon, buttonStyles.modifiers.start) }, icon)),
            children,
            variant !== exports.ButtonVariant.plain && icon && iconPosition === 'right' && (React.createElement("span", { className: css(buttonStyles.buttonIcon, buttonStyles.modifiers.end) }, icon))));
    };
    Button.displayName = 'Button';

    var IconSize;
    (function (IconSize) {
        IconSize["sm"] = "sm";
        IconSize["md"] = "md";
        IconSize["lg"] = "lg";
        IconSize["xl"] = "xl";
    })(IconSize || (IconSize = {}));
    const getSize = (size) => {
        switch (size) {
            case IconSize.sm:
                return '1em';
            case IconSize.md:
                return '1.5em';
            case IconSize.lg:
                return '2em';
            case IconSize.xl:
                return '3em';
            default:
                return '1em';
        }
    };
    let currentId$1 = 0;
    /**
     * Factory to create Icon class components for consumers
     */
    function createIcon({ name, xOffset = 0, yOffset = 0, width, height, svgPath }) {
        var _a;
        return _a = class SVGIcon extends React.Component {
                constructor() {
                    super(...arguments);
                    this.id = `icon-title-${currentId$1++}`;
                }
                render() {
                    const _a = this.props, { size, color, title, noVerticalAlign } = _a, props = __rest(_a, ["size", "color", "title", "noVerticalAlign"]);
                    const hasTitle = Boolean(title);
                    const heightWidth = getSize(size);
                    const baseAlign = -0.125 * Number.parseFloat(heightWidth);
                    const style = noVerticalAlign ? null : { verticalAlign: `${baseAlign}em` };
                    const viewBox = [xOffset, yOffset, width, height].join(' ');
                    return (React.createElement("svg", Object.assign({ style: style, fill: color, height: heightWidth, width: heightWidth, viewBox: viewBox, "aria-labelledby": hasTitle ? this.id : null, "aria-hidden": hasTitle ? null : true, role: "img" }, props),
                        hasTitle && React.createElement("title", { id: this.id }, title),
                        React.createElement("path", { d: svgPath })));
                }
            },
            _a.displayName = name,
            _a.defaultProps = {
                color: 'currentColor',
                size: IconSize.sm,
                noVerticalAlign: false
            },
            _a;
    }

    const TimesIconConfig = {
      name: 'TimesIcon',
      height: 512,
      width: 352,
      svgPath: 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z',
      yOffset: 0,
      xOffset: 0,
    };

    const TimesIcon = createIcon(TimesIconConfig);

    const AboutModalBoxCloseButton = (_a) => {
        var { className = '', onClose = () => undefined, 'aria-label': ariaLabel = 'Close Dialog' } = _a, props = __rest(_a, ["className", "onClose", 'aria-label']);
        return (React.createElement("div", Object.assign({ className: css(styles$2.aboutModalBoxClose, className) }, props),
            React.createElement(Button, { variant: "plain", onClick: onClose, "aria-label": ariaLabel },
                React.createElement(TimesIcon, null))));
    };
    AboutModalBoxCloseButton.displayName = 'AboutModalBoxCloseButton';

    const AboutModalBox = (_a) => {
        var { children, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("div", Object.assign({ role: "dialog", "aria-modal": "true", className: css(styles$2.aboutModalBox, className) }, props), children));
    };
    AboutModalBox.displayName = 'AboutModalBox';

    const Backdrop = (_a) => {
        var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("div", Object.assign({}, props, { className: css(styles.backdrop, className) }), children));
    };
    Backdrop.displayName = 'Backdrop';

    const AboutModalContainer = (_a) => {
        var { children, className = '', isOpen = false, onClose = () => undefined, productName = '', trademark, brandImageSrc, brandImageAlt, backgroundImageSrc, closeButtonAriaLabel, aboutModalBoxHeaderId, aboutModalBoxContentId } = _a, props = __rest(_a, ["children", "className", "isOpen", "onClose", "productName", "trademark", "brandImageSrc", "brandImageAlt", "backgroundImageSrc", "closeButtonAriaLabel", "aboutModalBoxHeaderId", "aboutModalBoxContentId"]);
        if (!isOpen) {
            return null;
        }
        return (React.createElement(Backdrop, null,
            React.createElement(FocusTrap, { focusTrapOptions: { clickOutsideDeactivates: true }, className: css(styles$1.bullseye) },
                React.createElement(AboutModalBox, { className: className, "aria-labelledby": aboutModalBoxHeaderId, "aria-describedby": aboutModalBoxContentId },
                    React.createElement(AboutModalBoxBrand, { src: brandImageSrc, alt: brandImageAlt }),
                    React.createElement(AboutModalBoxCloseButton, { "aria-label": closeButtonAriaLabel, onClose: onClose }),
                    productName && React.createElement(AboutModalBoxHeader, { id: aboutModalBoxHeaderId, productName: productName }),
                    React.createElement(AboutModalBoxContent, Object.assign({ trademark: trademark, id: aboutModalBoxContentId, noAboutModalBoxContentContainer: false }, props), children),
                    React.createElement(AboutModalBoxHero, { backgroundImageSrc: backgroundImageSrc })))));
    };
    AboutModalContainer.displayName = 'AboutModalContainer';

    class AboutModal extends React.Component {
        constructor(props) {
            super(props);
            this.id = AboutModal.currentId++;
            this.ariaLabelledBy = `pf-about-modal-title-${this.id}`;
            this.ariaDescribedBy = `pf-about-modal-content-${this.id}`;
            this.handleEscKeyClick = (event) => {
                if (event.keyCode === KEY_CODES.ESCAPE_KEY && this.props.isOpen) {
                    this.props.onClose();
                }
            };
            this.toggleSiblingsFromScreenReaders = (hide) => {
                const { appendTo } = this.props;
                const target = this.getElement(appendTo);
                const bodyChildren = target.children;
                for (const child of Array.from(bodyChildren)) {
                    if (child !== this.state.container) {
                        hide ? child.setAttribute('aria-hidden', '' + hide) : child.removeAttribute('aria-hidden');
                    }
                }
            };
            this.getElement = (appendTo) => {
                if (typeof appendTo === 'function') {
                    return appendTo();
                }
                return appendTo || document.body;
            };
            this.state = {
                container: undefined
            };
            if (props.brandImageSrc && !props.brandImageAlt) {
                // eslint-disable-next-line no-console
                console.error('AboutModal:', 'brandImageAlt is required when a brandImageSrc is specified');
            }
        }
        componentDidMount() {
            const container = document.createElement('div');
            const target = this.getElement(this.props.appendTo);
            this.setState({ container });
            target.appendChild(container);
            target.addEventListener('keydown', this.handleEscKeyClick, false);
            if (this.props.isOpen) {
                target.classList.add(css(styles.backdropOpen));
            }
            else {
                target.classList.remove(css(styles.backdropOpen));
            }
        }
        componentDidUpdate() {
            const target = this.getElement(this.props.appendTo);
            if (this.props.isOpen) {
                target.classList.add(css(styles.backdropOpen));
                this.toggleSiblingsFromScreenReaders(true);
            }
            else {
                target.classList.remove(css(styles.backdropOpen));
                this.toggleSiblingsFromScreenReaders(false);
            }
        }
        componentWillUnmount() {
            const target = this.getElement(this.props.appendTo);
            if (this.state.container) {
                target.removeChild(this.state.container);
            }
            target.removeEventListener('keydown', this.handleEscKeyClick, false);
            target.classList.remove(css(styles.backdropOpen));
        }
        render() {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _a = this.props, props = __rest(_a, ["appendTo"]);
            const { container } = this.state;
            if (!canUseDOM || !container) {
                return null;
            }
            return ReactDOM.createPortal(React.createElement(AboutModalContainer, Object.assign({ aboutModalBoxHeaderId: this.ariaLabelledBy, aboutModalBoxContentId: this.ariaDescribedBy }, props)), container);
        }
    }
    AboutModal.displayName = 'AboutModal';
    AboutModal.currentId = 0;
    AboutModal.defaultProps = {
        className: '',
        isOpen: false,
        onClose: () => undefined,
        productName: '',
        trademark: '',
        backgroundImageSrc: '',
        noAboutModalBoxContentContainer: false,
        appendTo: null
    };

    var accordion = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "accordion": "pf-c-accordion",
      "accordionExpandedContent": "pf-c-accordion__expanded-content",
      "accordionExpandedContentBody": "pf-c-accordion__expanded-content-body",
      "accordionToggle": "pf-c-accordion__toggle",
      "accordionToggleIcon": "pf-c-accordion__toggle-icon",
      "accordionToggleText": "pf-c-accordion__toggle-text",
      "modifiers": {
        "expanded": "pf-m-expanded",
        "fixed": "pf-m-fixed"
      }
    };
    });

    var styles$6 = unwrapExports(accordion);

    const AccordionContext = React.createContext({});

    const Accordion = (_a) => {
        var { children = null, className = '', 'aria-label': ariaLabel = '', headingLevel = 'h3', asDefinitionList = true } = _a, props = __rest(_a, ["children", "className", 'aria-label', "headingLevel", "asDefinitionList"]);
        const AccordionList = asDefinitionList ? 'dl' : 'div';
        return (React.createElement(AccordionList, Object.assign({ className: css(styles$6.accordion, className), "aria-label": ariaLabel }, props),
            React.createElement(AccordionContext.Provider, { value: {
                    ContentContainer: asDefinitionList ? 'dd' : 'div',
                    ToggleContainer: asDefinitionList ? 'dt' : headingLevel
                } }, children)));
    };
    Accordion.displayName = 'Accordion';

    const AccordionItem = ({ children = null }) => (React.createElement(React.Fragment, null, children));
    AccordionItem.displayName = 'AccordionItem';

    const AccordionContent = (_a) => {
        var { className = '', children = null, id = '', isHidden = false, isFixed = false, 'aria-label': ariaLabel = '', component } = _a, props = __rest(_a, ["className", "children", "id", "isHidden", "isFixed", 'aria-label', "component"]);
        return (React.createElement(AccordionContext.Consumer, null, ({ ContentContainer }) => {
            const Container = component || ContentContainer;
            return (React.createElement(Container, Object.assign({ id: id, className: css(styles$6.accordionExpandedContent, isFixed && styles$6.modifiers.fixed, !isHidden && styles$6.modifiers.expanded, className), hidden: isHidden, "aria-label": ariaLabel }, props),
                React.createElement("div", { className: css(styles$6.accordionExpandedContentBody) }, children)));
        }));
    };
    AccordionContent.displayName = 'AccordionContent';

    const AngleRightIconConfig = {
      name: 'AngleRightIcon',
      height: 512,
      width: 256,
      svgPath: 'M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z',
      yOffset: 0,
      xOffset: 0,
    };

    const AngleRightIcon = createIcon(AngleRightIconConfig);

    const AccordionToggle = (_a) => {
        var { className = '', id, isExpanded = false, children = null, component } = _a, props = __rest(_a, ["className", "id", "isExpanded", "children", "component"]);
        return (React.createElement(AccordionContext.Consumer, null, ({ ToggleContainer }) => {
            const Container = component || ToggleContainer;
            return (React.createElement(Container, null,
                React.createElement("button", Object.assign({ id: id, className: css(styles$6.accordionToggle, isExpanded && styles$6.modifiers.expanded, className) }, props, { "aria-expanded": isExpanded }),
                    React.createElement("span", { className: css(styles$6.accordionToggleText) }, children),
                    React.createElement("span", { className: css(styles$6.accordionToggleIcon) },
                        React.createElement(AngleRightIcon, null)))));
        }));
    };
    AccordionToggle.displayName = 'AccordionToggle';

    var actionList = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "actionList": "pf-c-action-list",
      "actionListGroup": "pf-c-action-list__group",
      "modifiers": {
        "icons": "pf-m-icons"
      }
    };
    });

    var styles$7 = unwrapExports(actionList);

    const ActionList = (_a) => {
        var { children, isIconList } = _a, props = __rest(_a, ["children", "isIconList"]);
        return (React.createElement("div", Object.assign({ className: css(styles$7.actionList, isIconList && styles$7.modifiers.icons) }, props), children));
    };
    ActionList.displayName = 'ActionList';

    const ActionListGroup = (_a) => {
        var { children } = _a, props = __rest(_a, ["children"]);
        return (React.createElement("div", Object.assign({ className: css(styles$7.actionListGroup) }, props), children));
    };
    ActionListGroup.displayName = 'ActionListGroup';

    const ActionListItem = (_a) => {
        var { children } = _a, props = __rest(_a, ["children"]);
        return (React.createElement("div", Object.assign({ className: "pf-c-action-list__item" }, props), children));
    };
    ActionListItem.displayName = 'ActionListItem';

    var alert = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "alert": "pf-c-alert",
      "alertAction": "pf-c-alert__action",
      "alertActionGroup": "pf-c-alert__action-group",
      "alertDescription": "pf-c-alert__description",
      "alertIcon": "pf-c-alert__icon",
      "alertTitle": "pf-c-alert__title",
      "button": "pf-c-button",
      "modifiers": {
        "success": "pf-m-success",
        "danger": "pf-m-danger",
        "warning": "pf-m-warning",
        "info": "pf-m-info",
        "inline": "pf-m-inline",
        "truncate": "pf-m-truncate",
        "overpassFont": "pf-m-overpass-font"
      }
    };
    });

    var styles$8 = unwrapExports(alert);

    var accessibility = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "hidden": "pf-u-hidden",
      "hiddenOnLg": "pf-u-hidden-on-lg",
      "hiddenOnMd": "pf-u-hidden-on-md",
      "hiddenOnSm": "pf-u-hidden-on-sm",
      "hiddenOnXl": "pf-u-hidden-on-xl",
      "hiddenOn_2xl": "pf-u-hidden-on-2xl",
      "screenReader": "pf-u-screen-reader",
      "screenReaderOnLg": "pf-u-screen-reader-on-lg",
      "screenReaderOnMd": "pf-u-screen-reader-on-md",
      "screenReaderOnSm": "pf-u-screen-reader-on-sm",
      "screenReaderOnXl": "pf-u-screen-reader-on-xl",
      "screenReaderOn_2xl": "pf-u-screen-reader-on-2xl",
      "visible": "pf-u-visible",
      "visibleOnLg": "pf-u-visible-on-lg",
      "visibleOnMd": "pf-u-visible-on-md",
      "visibleOnSm": "pf-u-visible-on-sm",
      "visibleOnXl": "pf-u-visible-on-xl",
      "visibleOn_2xl": "pf-u-visible-on-2xl"
    };
    });

    var a11yStyles = unwrapExports(accessibility);

    const CheckCircleIconConfig = {
      name: 'CheckCircleIcon',
      height: 512,
      width: 512,
      svgPath: 'M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z',
      yOffset: 0,
      xOffset: 0,
    };

    const CheckCircleIcon = createIcon(CheckCircleIconConfig);

    const ExclamationCircleIconConfig = {
      name: 'ExclamationCircleIcon',
      height: 512,
      width: 512,
      svgPath: 'M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z',
      yOffset: 0,
      xOffset: 0,
    };

    const ExclamationCircleIcon = createIcon(ExclamationCircleIconConfig);

    const ExclamationTriangleIconConfig = {
      name: 'ExclamationTriangleIcon',
      height: 512,
      width: 576,
      svgPath: 'M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z',
      yOffset: 0,
      xOffset: 0,
    };

    const ExclamationTriangleIcon = createIcon(ExclamationTriangleIconConfig);

    const InfoCircleIconConfig = {
      name: 'InfoCircleIcon',
      height: 512,
      width: 512,
      svgPath: 'M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z',
      yOffset: 0,
      xOffset: 0,
    };

    const InfoCircleIcon = createIcon(InfoCircleIconConfig);

    const BellIconConfig = {
      name: 'BellIcon',
      height: 1024,
      width: 896,
      svgPath: 'M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z',
      yOffset: 0,
      xOffset: 0,
    };

    const BellIcon = createIcon(BellIconConfig);

    const variantIcons = {
        success: CheckCircleIcon,
        danger: ExclamationCircleIcon,
        warning: ExclamationTriangleIcon,
        info: InfoCircleIcon,
        default: BellIcon
    };
    const AlertIcon = (_a) => {
        var { variant, customIcon, className = '' } = _a, props = __rest(_a, ["variant", "customIcon", "className"]);
        const Icon = variantIcons[variant];
        return (React.createElement("div", Object.assign({}, props, { className: css(styles$8.alertIcon, className) }), customIcon || React.createElement(Icon, null)));
    };

    const AlertContext = React.createContext(null);

    const c_alert__title_max_lines = {
      "name": "--pf-c-alert__title--max-lines",
      "value": "1",
      "var": "var(--pf-c-alert__title--max-lines)"
    };

    var tooltip = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "modifiers": {
        "top": "pf-m-top",
        "bottom": "pf-m-bottom",
        "left": "pf-m-left",
        "right": "pf-m-right",
        "textAlignLeft": "pf-m-text-align-left"
      },
      "tooltip": "pf-c-tooltip",
      "tooltipArrow": "pf-c-tooltip__arrow",
      "tooltipContent": "pf-c-tooltip__content"
    };
    });

    var styles$9 = unwrapExports(tooltip);

    const TooltipContent = (_a) => {
        var { className, children, isLeftAligned } = _a, props = __rest(_a, ["className", "children", "isLeftAligned"]);
        return (React.createElement("div", Object.assign({ className: css(styles$9.tooltipContent, isLeftAligned && styles$9.modifiers.textAlignLeft, className) }, props), children));
    };
    TooltipContent.displayName = 'TooltipContent';

    const TooltipArrow = (_a) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return React.createElement("div", Object.assign({ className: css(styles$9.tooltipArrow, className) }, props));
    };
    TooltipArrow.displayName = 'TooltipArrow';

    const c_tooltip_MaxWidth = {
      "name": "--pf-c-tooltip--MaxWidth",
      "value": "18.75rem",
      "var": "var(--pf-c-tooltip--MaxWidth)"
    };

    /**
     * This component wraps any ReactNode and finds its ref
     * It has to be a class for findDOMNode to work
     * Ideally, all components used as triggers/toggles are either:
     * - class based components we can assign our own ref to
     * - functional components that have forwardRef implemented
     * However, there is no guarantee that is what will get passed in as trigger/toggle in the case of tooltips and popovers
     */
    class FindRefWrapper extends React.Component {
        componentDidMount() {
            // eslint-disable-next-line react/no-find-dom-node
            const root = ReactDOM.findDOMNode(this);
            this.props.onFoundRef(root);
        }
        render() {
            return this.props.children || null;
        }
    }
    FindRefWrapper.displayName = 'FindRefWrapper';

    /**
     * @param element
     */
    function getBoundingClientRect(element) {
        const rect = element.getBoundingClientRect();
        return {
            width: rect.width,
            height: rect.height,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
            left: rect.left,
            x: rect.left,
            y: rect.top
        };
    }

    // @ts-nocheck
    /* :: import type { Window } from '../types'; */
    /* :: declare function getWindow(node: Node | Window): Window; */
    /**
     * @param node
     */
    function getWindow(node) {
        if (node.toString() !== '[object Window]') {
            const ownerDocument = node.ownerDocument;
            return ownerDocument ? ownerDocument.defaultView : window;
        }
        return node;
    }

    // @ts-nocheck
    /**
     * @param node
     */
    function getWindowScroll(node) {
        const win = getWindow(node);
        const scrollLeft = win.pageXOffset;
        const scrollTop = win.pageYOffset;
        return {
            scrollLeft,
            scrollTop
        };
    }

    // @ts-nocheck
    /* :: declare function isElement(node: mixed): boolean %checks(node instanceof
      Element); */
    /**
     * @param node
     */
    function isElement(node) {
        const OwnElement = getWindow(node).Element;
        return node instanceof OwnElement || node instanceof Element;
    }
    /* :: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
      HTMLElement); */
    /**
     * @param node
     */
    function isHTMLElement(node) {
        const OwnElement = getWindow(node).HTMLElement;
        return node instanceof OwnElement || node instanceof HTMLElement;
    }

    // @ts-nocheck
    /**
     * @param element
     */
    function getHTMLElementScroll(element) {
        return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
        };
    }

    // @ts-nocheck
    /**
     * @param node
     */
    function getNodeScroll(node) {
        if (node === getWindow(node) || !isHTMLElement(node)) {
            return getWindowScroll(node);
        }
        else {
            return getHTMLElementScroll(node);
        }
    }

    /**
     * @param element
     */
    function getNodeName(element) {
        return element ? (element.nodeName || '').toLowerCase() : null;
    }

    // @ts-nocheck
    /**
     * @param element
     */
    function getDocumentElement(element) {
        // $FlowFixMe: assume body is always available
        return (isElement(element) ? element.ownerDocument : element.document).documentElement;
    }

    // @ts-nocheck
    /**
     * @param element
     */
    function getWindowScrollBarX(element) {
        // If <html> has a CSS width greater than the viewport, then this will be
        // incorrect for RTL.
        // Popper 1 is broken in this case and never had a bug report so let's assume
        // it's not an issue. I don't think anyone ever specifies width on <html>
        // anyway.
        // Browsers where the left scrollbar doesn't cause an issue report `0` for
        // this (e.g. Edge 2019, IE11, Safari)
        return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
    }

    // @ts-nocheck
    /**
     * @param element
     */
    function getComputedStyle$1(element) {
        return getWindow(element).getComputedStyle(element);
    }

    // @ts-nocheck
    /**
     * @param element
     */
    function isScrollParent(element) {
        // Firefox wants us to check `-x` and `-y` variations as well
        const { overflow, overflowX, overflowY } = getComputedStyle$1(element);
        return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
    }

    // Returns the composite rect of an element relative to its offsetParent.
    // Composite means it takes into account transforms as well as layout.
    /**
     * @param elementOrVirtualElement
     * @param offsetParent
     * @param isFixed
     */
    function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed = false) {
        const documentElement = getDocumentElement(offsetParent);
        const rect = getBoundingClientRect(elementOrVirtualElement);
        const isOffsetParentAnElement = isHTMLElement(offsetParent);
        let scroll = { scrollLeft: 0, scrollTop: 0 };
        let offsets = { x: 0, y: 0 };
        if (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) {
            if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
                isScrollParent(documentElement)) {
                scroll = getNodeScroll(offsetParent);
            }
            if (isHTMLElement(offsetParent)) {
                offsets = getBoundingClientRect(offsetParent);
                offsets.x += offsetParent.clientLeft;
                offsets.y += offsetParent.clientTop;
            }
            else if (documentElement) {
                offsets.x = getWindowScrollBarX(documentElement);
            }
        }
        return {
            x: rect.left + scroll.scrollLeft - offsets.x,
            y: rect.top + scroll.scrollTop - offsets.y,
            width: rect.width,
            height: rect.height
        };
    }

    // Returns the layout rect of an element relative to its offsetParent. Layout
    // means it doesn't take into account transforms.
    /**
     * @param element
     */
    function getLayoutRect(element) {
        return {
            x: element.offsetLeft,
            y: element.offsetTop,
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    }

    // @ts-nocheck
    /**
     * @param element
     */
    function getParentNode(element) {
        if (getNodeName(element) === 'html') {
            return element;
        }
        return (
        // $FlowFixMe: this is a quicker (but less type safe) way to save quite some bytes from the bundle
        element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
            element.parentNode || // DOM Element detected
            // $FlowFixMe: need a better way to handle this...
            element.host || // ShadowRoot detected
            // $FlowFixMe: HTMLElement is a Node
            getDocumentElement(element) // fallback
        );
    }

    // @ts-nocheck
    /**
     * @param node
     */
    function getScrollParent(node) {
        if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
            // $FlowFixMe: assume body is always available
            return node.ownerDocument.body;
        }
        if (isHTMLElement(node) && isScrollParent(node)) {
            return node;
        }
        return getScrollParent(getParentNode(node));
    }

    // @ts-nocheck
    /*
    given a DOM element, return the list of all scroll parents, up the list of ancesors
    until we get to the top window object. This list is what we attach scroll listeners
    to, because if any of these parent elements scroll, we'll need to re-calculate the
    reference element's position.
    */
    /**
     * @param element
     * @param list
     */
    function listScrollParents(element, list = []) {
        const scrollParent = getScrollParent(element);
        const isBody = getNodeName(scrollParent) === 'body';
        const win = getWindow(scrollParent);
        const target = isBody
            ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : [])
            : scrollParent;
        const updatedList = list.concat(target);
        return isBody
            ? updatedList // $FlowFixMe: isBody tells us target will be an HTMLElement here
            : updatedList.concat(listScrollParents(getParentNode(target)));
    }

    // @ts-nocheck
    /**
     * @param element
     */
    function isTableElement(element) {
        return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
    }

    // @ts-nocheck
    /**
     * @param element
     */
    function getTrueOffsetParent(element) {
        if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
            getComputedStyle$1(element).position === 'fixed') {
            return null;
        }
        const offsetParent = element.offsetParent;
        if (offsetParent) {
            const html = getDocumentElement(offsetParent);
            if (getNodeName(offsetParent) === 'body' &&
                getComputedStyle$1(offsetParent).position === 'static' &&
                getComputedStyle$1(html).position !== 'static') {
                return html;
            }
        }
        return offsetParent;
    }
    // `.offsetParent` reports `null` for fixed elements, while absolute elements
    // return the containing block
    /**
     * @param element
     */
    function getContainingBlock(element) {
        let currentNode = getParentNode(element);
        while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
            const css = getComputedStyle$1(currentNode);
            // This is non-exhaustive but covers the most common CSS properties that
            // create a containing block.
            if (css.transform !== 'none' || css.perspective !== 'none' || (css.willChange && css.willChange !== 'auto')) {
                return currentNode;
            }
            else {
                currentNode = currentNode.parentNode;
            }
        }
        return null;
    }
    // Gets the closest ancestor positioned element. Handles some edge cases,
    // such as table ancestors and cross browser bugs.
    /**
     * @param element
     */
    function getOffsetParent(element) {
        const window = getWindow(element);
        let offsetParent = getTrueOffsetParent(element);
        while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
            offsetParent = getTrueOffsetParent(offsetParent);
        }
        if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static') {
            return window;
        }
        return offsetParent || getContainingBlock(element) || window;
    }

    // @ts-nocheck
    const top = 'top';
    const bottom = 'bottom';
    const right = 'right';
    const left = 'left';
    const auto = 'auto';
    const basePlacements = [top, bottom, right, left];
    const start = 'start';
    const end = 'end';
    const clippingParents = 'clippingParents';
    const viewport = 'viewport';
    const popper = 'popper';
    const reference = 'reference';
    const variationPlacements = basePlacements.reduce((acc, placement) => acc.concat([`${placement}-${start}`, `${placement}-${end}`]), []);
    const placements = [...basePlacements, auto].reduce((acc, placement) => acc.concat([placement, `${placement}-${start}`, `${placement}-${end}`]), []);
    // modifiers that need to read the DOM
    const beforeRead = 'beforeRead';
    const read = 'read';
    const afterRead = 'afterRead';
    // pure-logic modifiers
    const beforeMain = 'beforeMain';
    const main = 'main';
    const afterMain = 'afterMain';
    // modifier with the purpose to write to the DOM (or write into a framework state)
    const beforeWrite = 'beforeWrite';
    const write = 'write';
    const afterWrite = 'afterWrite';
    const modifierPhases = [
        beforeRead,
        read,
        afterRead,
        beforeMain,
        main,
        afterMain,
        beforeWrite,
        write,
        afterWrite
    ];

    // source: https://stackoverflow.com/questions/49875255
    /**
     * @param modifiers
     */
    function order(modifiers) {
        const map = new Map();
        const visited = new Set();
        const result = [];
        modifiers.forEach(modifier => {
            map.set(modifier.name, modifier);
        });
        // On visiting object, check for its dependencies and visit them recursively
        /**
         * @param modifier
         */
        function sort(modifier) {
            visited.add(modifier.name);
            const requires = [...(modifier.requires || []), ...(modifier.requiresIfExists || [])];
            requires.forEach(dep => {
                if (!visited.has(dep)) {
                    const depModifier = map.get(dep);
                    if (depModifier) {
                        sort(depModifier);
                    }
                }
            });
            result.push(modifier);
        }
        modifiers.forEach(modifier => {
            if (!visited.has(modifier.name)) {
                // check for visited object
                sort(modifier);
            }
        });
        return result;
    }
    /**
     * @param modifiers
     */
    function orderModifiers(modifiers) {
        // order based on dependencies
        const orderedModifiers = order(modifiers);
        // order based on phase
        return modifierPhases.reduce((acc, phase) => acc.concat(orderedModifiers.filter(modifier => modifier.phase === phase)), []);
    }

    // @ts-nocheck
    /**
     * @param fn
     */
    function debounce$1(fn) {
        let pending;
        return () => {
            if (!pending) {
                pending = new Promise(resolve => {
                    Promise.resolve().then(() => {
                        pending = undefined;
                        resolve(fn());
                    });
                });
            }
            return pending;
        };
    }

    /**
     * @param placement
     */
    function getBasePlacement(placement) {
        return placement.split('-')[0];
    }

    /**
     * @param modifiers
     */
    function mergeByName(modifiers) {
        const merged = modifiers.reduce((merged, current) => {
            const existing = merged[current.name];
            merged[current.name] = existing
                ? Object.assign(Object.assign(Object.assign({}, existing), current), { options: Object.assign(Object.assign({}, existing.options), current.options), data: Object.assign(Object.assign({}, existing.data), current.data) }) : current;
            return merged;
        }, {});
        // IE11 does not support Object.values
        return Object.keys(merged).map(key => merged[key]);
    }

    // @ts-nocheck
    /**
     * @param element
     */
    function getViewportRect(element) {
        const win = getWindow(element);
        const html = getDocumentElement(element);
        const visualViewport = win.visualViewport;
        let width = html.clientWidth;
        let height = html.clientHeight;
        let x = 0;
        let y = 0;
        // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
        // can be obscured underneath it.
        // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
        // if it isn't open, so if this isn't available, the popper will be detected
        // to overflow the bottom of the screen too early.
        if (visualViewport) {
            width = visualViewport.width;
            height = visualViewport.height;
            // Uses Layout Viewport (like Chrome; Safari does not currently)
            // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
            // errors due to floating point numbers, so we need to check precision.
            // Safari returns a number <= 0, usually < -1 when pinch-zoomed
            // Feature detection fails in mobile emulation mode in Chrome.
            // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
            // 0.001
            // Fallback here: "Not Safari" userAgent
            if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                x = visualViewport.offsetLeft;
                y = visualViewport.offsetTop;
            }
        }
        return {
            width,
            height,
            x: x + getWindowScrollBarX(element),
            y
        };
    }

    // Gets the entire size of the scrollable document area, even extending outside
    // of the `<html>` and `<body>` rect bounds if horizontally scrollable
    /**
     * @param element
     */
    function getDocumentRect(element) {
        const html = getDocumentElement(element);
        const winScroll = getWindowScroll(element);
        const body = element.ownerDocument.body;
        const width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
        const height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
        let x = -winScroll.scrollLeft + getWindowScrollBarX(element);
        const y = -winScroll.scrollTop;
        if (getComputedStyle$1(body || html).direction === 'rtl') {
            x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
        }
        return { width, height, x, y };
    }

    // @ts-nocheck
    /**
     * @param parent
     * @param child
     */
    function contains(parent, child) {
        // $FlowFixMe: hasOwnProperty doesn't seem to work in tests
        const isShadow = Boolean(child.getRootNode && child.getRootNode().host);
        // First, attempt with faster native method
        if (parent.contains(child)) {
            return true;
        } // then fallback to custom implementation with Shadow DOM support
        else if (isShadow) {
            let next = child;
            do {
                if (next && parent.isSameNode(next)) {
                    return true;
                }
                // $FlowFixMe: need a better way to handle this...
                next = next.parentNode || next.host;
            } while (next);
        }
        // Give up, the result is false
        return false;
    }

    /**
     * @param rect
     */
    function rectToClientRect(rect) {
        return Object.assign(Object.assign({}, rect), { left: rect.x, top: rect.y, right: rect.x + rect.width, bottom: rect.y + rect.height });
    }

    /**
     * @param element
     */
    function getInnerBoundingClientRect(element) {
        const rect = getBoundingClientRect(element);
        rect.top = rect.top + element.clientTop;
        rect.left = rect.left + element.clientLeft;
        rect.bottom = rect.top + element.clientHeight;
        rect.right = rect.left + element.clientWidth;
        rect.width = element.clientWidth;
        rect.height = element.clientHeight;
        rect.x = rect.left;
        rect.y = rect.top;
        return rect;
    }
    /**
     * @param element
     * @param clippingParent
     */
    function getClientRectFromMixedType(element, clippingParent) {
        return clippingParent === viewport
            ? rectToClientRect(getViewportRect(element))
            : isHTMLElement(clippingParent)
                ? getInnerBoundingClientRect(clippingParent)
                : rectToClientRect(getDocumentRect(getDocumentElement(element)));
    }
    // A "clipping parent" is an overflowable container with the characteristic of
    // clipping (or hiding) overflowing elements with a position different from
    // `initial`
    /**
     * @param element
     */
    function getClippingParents(element) {
        const clippingParents = listScrollParents(getParentNode(element));
        const canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
        const clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
        if (!isElement(clipperElement)) {
            return [];
        }
        // $FlowFixMe: https://github.com/facebook/flow/issues/1414
        return clippingParents.filter(clippingParent => isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body');
    }
    // Gets the maximum area that the element is visible in due to any number of
    // clipping parents
    /**
     * @param element
     * @param boundary
     * @param rootBoundary
     */
    function getClippingRect(element, boundary, rootBoundary) {
        const mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
        const clippingParents = [...mainClippingParents, rootBoundary];
        const firstClippingParent = clippingParents[0];
        const clippingRect = clippingParents.reduce((accRect, clippingParent) => {
            const rect = getClientRectFromMixedType(element, clippingParent);
            accRect.top = Math.max(rect.top, accRect.top);
            accRect.right = Math.min(rect.right, accRect.right);
            accRect.bottom = Math.min(rect.bottom, accRect.bottom);
            accRect.left = Math.max(rect.left, accRect.left);
            return accRect;
        }, getClientRectFromMixedType(element, firstClippingParent));
        clippingRect.width = clippingRect.right - clippingRect.left;
        clippingRect.height = clippingRect.bottom - clippingRect.top;
        clippingRect.x = clippingRect.left;
        clippingRect.y = clippingRect.top;
        return clippingRect;
    }

    /**
     * @param placement
     */
    function getVariation(placement) {
        return placement.split('-')[1];
    }

    /**
     * @param placement
     */
    function getMainAxisFromPlacement(placement) {
        return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
    }

    // @ts-nocheck
    /**
     *
     */
    function computeOffsets({ reference, element, placement }) {
        const basePlacement = placement ? getBasePlacement(placement) : null;
        const variation = placement ? getVariation(placement) : null;
        const commonX = reference.x + reference.width / 2 - element.width / 2;
        const commonY = reference.y + reference.height / 2 - element.height / 2;
        let offsets;
        switch (basePlacement) {
            case top:
                offsets = {
                    x: commonX,
                    y: reference.y - element.height
                };
                break;
            case bottom:
                offsets = {
                    x: commonX,
                    y: reference.y + reference.height
                };
                break;
            case right:
                offsets = {
                    x: reference.x + reference.width,
                    y: commonY
                };
                break;
            case left:
                offsets = {
                    x: reference.x - element.width,
                    y: commonY
                };
                break;
            default:
                offsets = {
                    x: reference.x,
                    y: reference.y
                };
        }
        const mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
        if (mainAxis != null) {
            const len = mainAxis === 'y' ? 'height' : 'width';
            switch (variation) {
                case start:
                    offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference[len] / 2 - element[len] / 2);
                    break;
                case end:
                    offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference[len] / 2 - element[len] / 2);
                    break;
            }
        }
        return offsets;
    }

    /**
     *
     */
    function getFreshSideObject() {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
    }

    /**
     * @param paddingObject
     */
    function mergePaddingObject(paddingObject) {
        return Object.assign(Object.assign({}, getFreshSideObject()), paddingObject);
    }

    // @ts-nocheck
    /**
     * @param value
     * @param keys
     */
    function expandToHashMap(value, keys) {
        return keys.reduce((hashMap, key) => {
            hashMap[key] = value;
            return hashMap;
        }, {});
    }

    /**
     * @param state
     * @param options
     */
    function detectOverflow(state, options = {}) {
        const { placement = state.placement, boundary = clippingParents, rootBoundary = viewport, elementContext = popper, altBoundary = false, padding = 0 } = options;
        const paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
        const altContext = elementContext === popper ? reference : popper;
        const referenceElement = state.elements.reference;
        const popperRect = state.rects.popper;
        const element = state.elements[altBoundary ? altContext : elementContext];
        const clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
        const referenceClientRect = getBoundingClientRect(referenceElement);
        const popperOffsets = computeOffsets({
            reference: referenceClientRect,
            element: popperRect,
            strategy: 'absolute',
            placement
        });
        const popperClientRect = rectToClientRect(Object.assign(Object.assign({}, popperRect), popperOffsets));
        const elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
        // positive = overflowing the clipping rect
        // 0 or negative = within the clipping rect
        const overflowOffsets = {
            top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
            bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
            left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
            right: elementClientRect.right - clippingClientRect.right + paddingObject.right
        };
        const offsetData = state.modifiersData.offset;
        // Offsets can be applied only to the popper element
        if (elementContext === popper && offsetData) {
            const offset = offsetData[placement];
            Object.keys(overflowOffsets).forEach(key => {
                const multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
                const axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
                overflowOffsets[key] += offset[axis] * multiply;
            });
        }
        return overflowOffsets;
    }

    const DEFAULT_OPTIONS = {
        placement: 'bottom',
        modifiers: [],
        strategy: 'absolute'
    };
    /**
     * @param args
     */
    function areValidElements(...args) {
        return !args.some(element => !(element && typeof element.getBoundingClientRect === 'function'));
    }
    /**
     * @param generatorOptions
     */
    function popperGenerator(generatorOptions = {}) {
        const { defaultModifiers = [], defaultOptions = DEFAULT_OPTIONS } = generatorOptions;
        return function createPopper(reference, popper, options = defaultOptions) {
            let state = {
                placement: 'bottom',
                orderedModifiers: [],
                options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
                modifiersData: {},
                elements: {
                    reference,
                    popper
                },
                attributes: {},
                styles: {}
            };
            let effectCleanupFns = [];
            let isDestroyed = false;
            const instance = {
                state,
                setOptions(options) {
                    cleanupModifierEffects();
                    state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options);
                    state.scrollParents = {
                        reference: isElement(reference)
                            ? listScrollParents(reference)
                            : reference.contextElement
                                ? listScrollParents(reference.contextElement)
                                : [],
                        popper: listScrollParents(popper)
                    };
                    // Orders the modifiers based on their dependencies and `phase`
                    // properties
                    const orderedModifiers = orderModifiers(mergeByName([...defaultModifiers, ...state.options.modifiers]));
                    // Strip out disabled modifiers
                    state.orderedModifiers = orderedModifiers.filter(m => m.enabled);
                    runModifierEffects();
                    return instance.update();
                },
                // Sync update – it will always be executed, even if not necessary. This
                // is useful for low frequency updates where sync behavior simplifies the
                // logic.
                // For high frequency updates (e.g. `resize` and `scroll` events), always
                // prefer the async Popper#update method
                forceUpdate() {
                    if (isDestroyed) {
                        return;
                    }
                    const { reference, popper } = state.elements;
                    // Don't proceed if `reference` or `popper` are not valid elements
                    // anymore
                    if (!areValidElements(reference, popper)) {
                        return;
                    }
                    // Store the reference and popper rects to be read by modifiers
                    state.rects = {
                        reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
                        popper: getLayoutRect(popper)
                    };
                    // Modifiers have the ability to reset the current update cycle. The
                    // most common use case for this is the `flip` modifier changing the
                    // placement, which then needs to re-run all the modifiers, because the
                    // logic was previously ran for the previous placement and is therefore
                    // stale/incorrect
                    state.reset = false;
                    state.placement = state.options.placement;
                    // On each update cycle, the `modifiersData` property for each modifier
                    // is filled with the initial data specified by the modifier. This means
                    // it doesn't persist and is fresh on each update.
                    // To ensure persistent data, use `${name}#persistent`
                    state.orderedModifiers.forEach(modifier => (state.modifiersData[modifier.name] = Object.assign({}, modifier.data)));
                    for (let index = 0; index < state.orderedModifiers.length; index++) {
                        if (state.reset === true) {
                            state.reset = false;
                            index = -1;
                            continue;
                        }
                        const { fn, options = {}, name } = state.orderedModifiers[index];
                        if (typeof fn === 'function') {
                            state = fn({ state, options, name, instance }) || state;
                        }
                    }
                },
                // Async and optimistically optimized update – it will not be executed if
                // not necessary (debounced to run at most once-per-tick)
                update: debounce$1(() => new Promise(resolve => {
                    instance.forceUpdate();
                    resolve(state);
                })),
                destroy() {
                    cleanupModifierEffects();
                    isDestroyed = true;
                }
            };
            if (!areValidElements(reference, popper)) {
                return instance;
            }
            instance.setOptions(options).then(state => {
                if (!isDestroyed && options.onFirstUpdate) {
                    options.onFirstUpdate(state);
                }
            });
            // Modifiers have the ability to execute arbitrary code before the first
            // update cycle runs. They will be executed in the same order as the update
            // cycle. This is useful when a modifier adds some persistent data that
            // other modifiers need to use, but the modifier is run after the dependent
            // one.
            /**
             *
             */
            function runModifierEffects() {
                state.orderedModifiers.forEach(({ name, options = {}, effect }) => {
                    if (typeof effect === 'function') {
                        const cleanupFn = effect({ state, name, instance, options });
                        const noopFn = () => { };
                        effectCleanupFns.push(cleanupFn || noopFn);
                    }
                });
            }
            /**
             *
             */
            function cleanupModifierEffects() {
                effectCleanupFns.forEach(fn => fn());
                effectCleanupFns = [];
            }
            return instance;
        };
    }

    const passive = { passive: true };
    /**
     *
     */
    function effect({ state, instance, options }) {
        const { scroll = true, resize = true } = options;
        const window = getWindow(state.elements.popper);
        const scrollParents = [...state.scrollParents.reference, ...state.scrollParents.popper];
        if (scroll) {
            scrollParents.forEach(scrollParent => {
                scrollParent.addEventListener('scroll', instance.update, passive);
            });
        }
        if (resize) {
            window.addEventListener('resize', instance.update, passive);
        }
        return () => {
            if (scroll) {
                scrollParents.forEach(scrollParent => {
                    scrollParent.removeEventListener('scroll', instance.update, passive);
                });
            }
            if (resize) {
                window.removeEventListener('resize', instance.update, passive);
            }
        };
    }
    var eventListeners = {
        name: 'eventListeners',
        enabled: true,
        phase: 'write',
        fn: () => { },
        effect,
        data: {}
    };

    /**
     *
     */
    function popperOffsets({ state, name }) {
        // Offsets are the actual position the popper needs to have to be
        // properly positioned near its reference element
        // This is the most basic placement, and will be adjusted by
        // the modifiers in the next step
        state.modifiersData[name] = computeOffsets({
            reference: state.rects.reference,
            element: state.rects.popper,
            strategy: 'absolute',
            placement: state.placement
        });
    }
    var popperOffsets$1 = {
        name: 'popperOffsets',
        enabled: true,
        phase: 'read',
        fn: popperOffsets,
        data: {}
    };

    const unsetSides = {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto'
    };
    // Round the offsets to the nearest suitable subpixel based on the DPR.
    // Zooming can change the DPR, but it seems to report a value that will
    // cleanly divide the values into the appropriate subpixels.
    /**
     *
     */
    function roundOffsets({ x, y }) {
        const win = window;
        const dpr = win.devicePixelRatio || 1;
        return {
            x: Math.round(x * dpr) / dpr || 0,
            y: Math.round(y * dpr) / dpr || 0
        };
    }
    /**
     *
     */
    function mapToStyles({ popper, popperRect, placement, offsets, position, gpuAcceleration, adaptive }) {
        let { x, y } = roundOffsets(offsets);
        const hasX = offsets.hasOwnProperty('x');
        const hasY = offsets.hasOwnProperty('y');
        let sideX = left;
        let sideY = top;
        const win = window;
        if (adaptive) {
            let offsetParent = getOffsetParent(popper);
            if (offsetParent === getWindow(popper)) {
                offsetParent = getDocumentElement(popper);
            }
            // $FlowFixMe: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
            /* :: offsetParent = (offsetParent: Element); */
            if (placement === top) {
                sideY = bottom;
                y -= offsetParent.clientHeight - popperRect.height;
                y *= gpuAcceleration ? 1 : -1;
            }
            if (placement === left) {
                sideX = right;
                x -= offsetParent.clientWidth - popperRect.width;
                x *= gpuAcceleration ? 1 : -1;
            }
        }
        const commonStyles = Object.assign({ position }, (adaptive && unsetSides));
        if (gpuAcceleration) {
            return Object.assign(Object.assign({}, commonStyles), { [sideY]: hasY ? '0' : '', [sideX]: hasX ? '0' : '', 
                // Layer acceleration can disable subpixel rendering which causes slightly
                // blurry text on low PPI displays, so we want to use 2D transforms
                // instead
                transform: (win.devicePixelRatio || 1) < 2 ? `translate(${x}px, ${y}px)` : `translate3d(${x}px, ${y}px, 0)` });
        }
        return Object.assign(Object.assign({}, commonStyles), { [sideY]: hasY ? `${y}px` : '', [sideX]: hasX ? `${x}px` : '', transform: '' });
    }
    /**
     *
     */
    function computeStyles({ state, options }) {
        const { gpuAcceleration = true, adaptive = true } = options;
        const commonStyles = {
            placement: getBasePlacement(state.placement),
            popper: state.elements.popper,
            popperRect: state.rects.popper,
            gpuAcceleration
        };
        if (state.modifiersData.popperOffsets != null) {
            state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), { offsets: state.modifiersData.popperOffsets, position: state.options.strategy, adaptive })));
        }
        if (state.modifiersData.arrow != null) {
            state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), { offsets: state.modifiersData.arrow, position: 'absolute', adaptive: false })));
        }
        state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), { 'data-popper-placement': state.placement });
    }
    var computeStyles$1 = {
        name: 'computeStyles',
        enabled: true,
        phase: 'beforeWrite',
        fn: computeStyles,
        data: {}
    };

    // This modifier takes the styles prepared by the `computeStyles` modifier
    // and applies them to the HTMLElements such as popper and arrow
    /**
     *
     */
    function applyStyles({ state }) {
        Object.keys(state.elements).forEach(name => {
            const style = state.styles[name] || {};
            const attributes = state.attributes[name] || {};
            const element = state.elements[name];
            // arrow is optional + virtual elements
            if (!isHTMLElement(element) || !getNodeName(element)) {
                return;
            }
            // Flow doesn't support to extend this property, but it's the most
            // effective way to apply styles to an HTMLElement
            // $FlowFixMe
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(name => {
                const value = attributes[name];
                if (value === false) {
                    element.removeAttribute(name);
                }
                else {
                    element.setAttribute(name, value === true ? '' : value);
                }
            });
        });
    }
    /**
     *
     */
    function effect$1({ state }) {
        const initialStyles = {
            popper: {
                position: state.options.strategy,
                left: '0',
                top: '0',
                margin: '0'
            },
            arrow: {
                position: 'absolute'
            },
            reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        if (state.elements.arrow) {
            Object.assign(state.elements.arrow.style, initialStyles.arrow);
        }
        return () => {
            Object.keys(state.elements).forEach(name => {
                const element = state.elements[name];
                const attributes = state.attributes[name] || {};
                const styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
                // Set all values to an empty string to unset them
                const style = styleProperties.reduce((style, property) => {
                    style[property] = '';
                    return style;
                }, {});
                // arrow is optional + virtual elements
                if (!isHTMLElement(element) || !getNodeName(element)) {
                    return;
                }
                // Flow doesn't support to extend this property, but it's the most
                // effective way to apply styles to an HTMLElement
                // $FlowFixMe
                Object.assign(element.style, style);
                Object.keys(attributes).forEach(attribute => {
                    element.removeAttribute(attribute);
                });
            });
        };
    }
    var applyStyles$1 = {
        name: 'applyStyles',
        enabled: true,
        phase: 'write',
        fn: applyStyles,
        effect: effect$1,
        requires: ['computeStyles']
    };

    /**
     * @param placement
     * @param rects
     * @param offset
     */
    function distanceAndSkiddingToXY(placement, rects, offset) {
        const basePlacement = getBasePlacement(placement);
        const invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
        let [skidding, distance] = typeof offset === 'function'
            ? offset(Object.assign(Object.assign({}, rects), { placement }))
            : offset;
        skidding = skidding || 0;
        distance = (distance || 0) * invertDistance;
        return [left, right].indexOf(basePlacement) >= 0 ? { x: distance, y: skidding } : { x: skidding, y: distance };
    }
    /**
     *
     */
    function offset({ state, options, name }) {
        const { offset = [0, 0] } = options;
        const data = placements.reduce((acc, placement) => {
            acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
            return acc;
        }, {});
        const { x, y } = data[state.placement];
        if (state.modifiersData.popperOffsets != null) {
            state.modifiersData.popperOffsets.x += x;
            state.modifiersData.popperOffsets.y += y;
        }
        state.modifiersData[name] = data;
    }
    var offset$1 = {
        name: 'offset',
        enabled: true,
        phase: 'main',
        requires: ['popperOffsets'],
        fn: offset
    };

    const hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    /**
     * @param placement
     */
    function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, matched => hash[matched]);
    }

    const hash$1 = { start: 'end', end: 'start' };
    /**
     * @param placement
     */
    function getOppositeVariationPlacement(placement) {
        return placement.replace(/start|end/g, matched => hash$1[matched]);
    }

    /* :: type OverflowsMap = { [ComputedPlacement]: number }; */
    /* ;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
    /**
     * @param state
     * @param options
     */
    function computeAutoPlacement(state, options = {}) {
        const { placement, boundary, rootBoundary, padding, flipVariations, allowedAutoPlacements = placements } = options;
        const variation = getVariation(placement);
        const placements$1 = variation
            ? flipVariations
                ? variationPlacements
                : variationPlacements.filter(placement => getVariation(placement) === variation)
            : basePlacements;
        // $FlowFixMe
        let allowedPlacements = placements$1.filter(placement => allowedAutoPlacements.indexOf(placement) >= 0);
        if (allowedPlacements.length === 0) {
            allowedPlacements = placements$1;
        }
        // $FlowFixMe: Flow seems to have problems with two array unions...
        const overflows = allowedPlacements.reduce((acc, placement) => {
            acc[placement] = detectOverflow(state, {
                placement,
                boundary,
                rootBoundary,
                padding
            })[getBasePlacement(placement)];
            return acc;
        }, {});
        return Object.keys(overflows).sort((a, b) => overflows[a] - overflows[b]);
    }

    /**
     * @param placement
     */
    function getExpandedFallbackPlacements(placement) {
        if (getBasePlacement(placement) === auto) {
            return [];
        }
        const oppositePlacement = getOppositePlacement(placement);
        return [
            getOppositeVariationPlacement(placement),
            oppositePlacement,
            getOppositeVariationPlacement(oppositePlacement)
        ];
    }
    /**
     *
     */
    function flip({ state, options, name }) {
        if (state.modifiersData[name]._skip) {
            return;
        }
        const { mainAxis: checkMainAxis = true, altAxis: checkAltAxis = true, fallbackPlacements: specifiedFallbackPlacements, padding, boundary, rootBoundary, altBoundary, flipVariations = true, allowedAutoPlacements } = options;
        const preferredPlacement = state.options.placement;
        const basePlacement = getBasePlacement(preferredPlacement);
        const isBasePlacement = basePlacement === preferredPlacement;
        const fallbackPlacements = specifiedFallbackPlacements ||
            (isBasePlacement || !flipVariations
                ? [getOppositePlacement(preferredPlacement)]
                : getExpandedFallbackPlacements(preferredPlacement));
        const placements = [preferredPlacement, ...fallbackPlacements].reduce((acc, placement) => acc.concat(getBasePlacement(placement) === auto
            ? computeAutoPlacement(state, {
                placement,
                boundary,
                rootBoundary,
                padding,
                flipVariations,
                allowedAutoPlacements
            })
            : placement), []);
        const referenceRect = state.rects.reference;
        const popperRect = state.rects.popper;
        const checksMap = new Map();
        let makeFallbackChecks = true;
        let firstFittingPlacement = placements[0];
        for (let i = 0; i < placements.length; i++) {
            const placement = placements[i];
            const basePlacement = getBasePlacement(placement);
            const isStartVariation = getVariation(placement) === start;
            const isVertical = [top, bottom].indexOf(basePlacement) >= 0;
            const len = isVertical ? 'width' : 'height';
            const overflow = detectOverflow(state, {
                placement,
                boundary,
                rootBoundary,
                altBoundary,
                padding
            });
            let mainVariationSide = isVertical ? (isStartVariation ? right : left) : isStartVariation ? bottom : top;
            if (referenceRect[len] > popperRect[len]) {
                mainVariationSide = getOppositePlacement(mainVariationSide);
            }
            const altVariationSide = getOppositePlacement(mainVariationSide);
            const checks = [];
            if (checkMainAxis) {
                checks.push(overflow[basePlacement] <= 0);
            }
            if (checkAltAxis) {
                checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
            }
            if (checks.every(check => check)) {
                firstFittingPlacement = placement;
                makeFallbackChecks = false;
                break;
            }
            checksMap.set(placement, checks);
        }
        if (makeFallbackChecks) {
            // `2` may be desired in some cases – research later
            const numberOfChecks = flipVariations ? 3 : 1;
            for (let i = numberOfChecks; i > 0; i--) {
                const fittingPlacement = placements.find(placement => {
                    const checks = checksMap.get(placement);
                    if (checks) {
                        return checks.slice(0, i).every(check => check);
                    }
                });
                if (fittingPlacement) {
                    firstFittingPlacement = fittingPlacement;
                    break;
                }
            }
        }
        if (state.placement !== firstFittingPlacement) {
            state.modifiersData[name]._skip = true;
            state.placement = firstFittingPlacement;
            state.reset = true;
        }
    }
    var flip$1 = {
        name: 'flip',
        enabled: true,
        phase: 'main',
        fn: flip,
        requiresIfExists: ['offset'],
        data: { _skip: false }
    };

    // @ts-nocheck
    /**
     * @param axis
     */
    function getAltAxis(axis) {
        return axis === 'x' ? 'y' : 'x';
    }

    // @ts-nocheck
    /**
     * @param min
     * @param value
     * @param max
     */
    function within(min, value, max) {
        return Math.max(min, Math.min(value, max));
    }

    // @ts-nocheck
    /**
     *
     */
    function preventOverflow({ state, options, name }) {
        const { mainAxis: checkMainAxis = true, altAxis: checkAltAxis = false, boundary, rootBoundary, altBoundary, padding, tether = true, tetherOffset = 0 } = options;
        const overflow = detectOverflow(state, {
            boundary,
            rootBoundary,
            padding,
            altBoundary
        });
        const basePlacement = getBasePlacement(state.placement);
        const variation = getVariation(state.placement);
        const isBasePlacement = !variation;
        const mainAxis = getMainAxisFromPlacement(basePlacement);
        const altAxis = getAltAxis(mainAxis);
        const popperOffsets = state.modifiersData.popperOffsets;
        const referenceRect = state.rects.reference;
        const popperRect = state.rects.popper;
        const tetherOffsetValue = typeof tetherOffset === 'function'
            ? tetherOffset(Object.assign(Object.assign({}, state.rects), { placement: state.placement }))
            : tetherOffset;
        const data = { x: 0, y: 0 };
        if (!popperOffsets) {
            return;
        }
        if (checkMainAxis) {
            const mainSide = mainAxis === 'y' ? top : left;
            const altSide = mainAxis === 'y' ? bottom : right;
            const len = mainAxis === 'y' ? 'height' : 'width';
            const offset = popperOffsets[mainAxis];
            const min = popperOffsets[mainAxis] + overflow[mainSide];
            const max = popperOffsets[mainAxis] - overflow[altSide];
            const additive = tether ? -popperRect[len] / 2 : 0;
            const minLen = variation === start ? referenceRect[len] : popperRect[len];
            const maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
            // We need to include the arrow in the calculation so the arrow doesn't go
            // outside the reference bounds
            const arrowElement = state.elements.arrow;
            const arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : { width: 0, height: 0 };
            const arrowPaddingObject = state.modifiersData['arrow#persistent']
                ? state.modifiersData['arrow#persistent'].padding
                : getFreshSideObject();
            const arrowPaddingMin = arrowPaddingObject[mainSide];
            const arrowPaddingMax = arrowPaddingObject[altSide];
            // If the reference length is smaller than the arrow length, we don't want
            // to include its full size in the calculation. If the reference is small
            // and near the edge of a boundary, the popper can overflow even if the
            // reference is not overflowing as well (e.g. virtual elements with no
            // width or height)
            const arrowLen = within(0, referenceRect[len], arrowRect[len]);
            const minOffset = isBasePlacement
                ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue
                : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
            const maxOffset = isBasePlacement
                ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue
                : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
            const arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
            const clientOffset = arrowOffsetParent
                ? mainAxis === 'y'
                    ? arrowOffsetParent.clientTop || 0
                    : arrowOffsetParent.clientLeft || 0
                : 0;
            const offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
            const tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
            const tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
            const preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
            popperOffsets[mainAxis] = preventedOffset;
            data[mainAxis] = preventedOffset - offset;
        }
        if (checkAltAxis) {
            const mainSide = mainAxis === 'x' ? top : left;
            const altSide = mainAxis === 'x' ? bottom : right;
            const offset = popperOffsets[altAxis];
            const min = offset + overflow[mainSide];
            const max = offset - overflow[altSide];
            const preventedOffset = within(min, offset, max);
            popperOffsets[altAxis] = preventedOffset;
            data[altAxis] = preventedOffset - offset;
        }
        state.modifiersData[name] = data;
    }
    var preventOverflow$1 = {
        name: 'preventOverflow',
        enabled: true,
        phase: 'main',
        fn: preventOverflow,
        requiresIfExists: ['offset']
    };

    /**
     *
     */
    function arrow({ state, name }) {
        const arrowElement = state.elements.arrow;
        const popperOffsets = state.modifiersData.popperOffsets;
        const basePlacement = getBasePlacement(state.placement);
        const axis = getMainAxisFromPlacement(basePlacement);
        const isVertical = [left, right].indexOf(basePlacement) >= 0;
        const len = isVertical ? 'height' : 'width';
        if (!arrowElement || !popperOffsets) {
            return;
        }
        const paddingObject = state.modifiersData[`${name}#persistent`].padding;
        const arrowRect = getLayoutRect(arrowElement);
        const minProp = axis === 'y' ? top : left;
        const maxProp = axis === 'y' ? bottom : right;
        const endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
        const startDiff = popperOffsets[axis] - state.rects.reference[axis];
        const arrowOffsetParent = getOffsetParent(arrowElement);
        const clientSize = arrowOffsetParent
            ? axis === 'y'
                ? arrowOffsetParent.clientHeight || 0
                : arrowOffsetParent.clientWidth || 0
            : 0;
        const centerToReference = endDiff / 2 - startDiff / 2;
        // Make sure the arrow doesn't overflow the popper if the center point is
        // outside of the popper bounds
        const min = paddingObject[minProp];
        const max = clientSize - arrowRect[len] - paddingObject[maxProp];
        const center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
        const offset = within(min, center, max);
        // Prevents breaking syntax highlighting...
        const axisProp = axis;
        state.modifiersData[name] = {
            [axisProp]: offset,
            centerOffset: offset - center
        };
    }
    /**
     *
     */
    function effect$2({ state, options, name }) {
        let { element: arrowElement = '[data-popper-arrow]', padding = 0 } = options;
        if (arrowElement == null) {
            return;
        }
        // CSS selector
        if (typeof arrowElement === 'string') {
            arrowElement = state.elements.popper.querySelector(arrowElement);
            if (!arrowElement) {
                return;
            }
        }
        if (!contains(state.elements.popper, arrowElement)) {
            return;
        }
        state.elements.arrow = arrowElement;
        state.modifiersData[`${name}#persistent`] = {
            padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements))
        };
    }
    var arrow$1 = {
        name: 'arrow',
        enabled: true,
        phase: 'main',
        fn: arrow,
        effect: effect$2,
        requires: ['popperOffsets'],
        requiresIfExists: ['preventOverflow']
    };

    /**
     * @param overflow
     * @param rect
     * @param preventedOffsets
     */
    function getSideOffsets(overflow, rect, preventedOffsets = { x: 0, y: 0 }) {
        return {
            top: overflow.top - rect.height - preventedOffsets.y,
            right: overflow.right - rect.width + preventedOffsets.x,
            bottom: overflow.bottom - rect.height + preventedOffsets.y,
            left: overflow.left - rect.width - preventedOffsets.x
        };
    }
    /**
     * @param overflow
     */
    function isAnySideFullyClipped(overflow) {
        return [top, right, bottom, left].some(side => overflow[side] >= 0);
    }
    /**
     *
     */
    function hide({ state, name }) {
        const referenceRect = state.rects.reference;
        const popperRect = state.rects.popper;
        const preventedOffsets = state.modifiersData.preventOverflow;
        const referenceOverflow = detectOverflow(state, {
            elementContext: 'reference'
        });
        const popperAltOverflow = detectOverflow(state, {
            altBoundary: true
        });
        const referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
        const popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
        const isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
        const hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
        state.modifiersData[name] = {
            referenceClippingOffsets,
            popperEscapeOffsets,
            isReferenceHidden,
            hasPopperEscaped
        };
        state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), { 'data-popper-reference-hidden': isReferenceHidden, 'data-popper-escaped': hasPopperEscaped });
    }
    var hide$1 = {
        name: 'hide',
        enabled: true,
        phase: 'main',
        requiresIfExists: ['preventOverflow'],
        fn: hide
    };

    // @ts-nocheck
    const defaultModifiers = [
        eventListeners,
        popperOffsets$1,
        computeStyles$1,
        applyStyles$1,
        offset$1,
        flip$1,
        preventOverflow$1,
        arrow$1,
        hide$1
    ];
    const createPopper = popperGenerator({ defaultModifiers });

    /* eslint-disable @typescript-eslint/consistent-type-definitions */
    const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    /**
     * Simple ponyfill for Object.fromEntries
     */
    const fromEntries = (entries) => entries.reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});
    /**
     * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
     */
    const useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement
        ? React.useLayoutEffect
        : React.useEffect;
    const EMPTY_MODIFIERS = [];
    const usePopper = (referenceElement, popperElement, options = {}) => {
        const prevOptions = React.useRef(null);
        const optionsWithDefaults = {
            onFirstUpdate: options.onFirstUpdate,
            placement: options.placement || 'bottom',
            strategy: options.strategy || 'absolute',
            modifiers: options.modifiers || EMPTY_MODIFIERS
        };
        const [state, setState] = React.useState({
            styles: {
                popper: {
                    position: optionsWithDefaults.strategy,
                    left: '0',
                    top: '0'
                }
            },
            attributes: {}
        });
        const updateStateModifier = React.useMemo(() => ({
            name: 'updateState',
            enabled: true,
            phase: 'write',
            // eslint-disable-next-line no-shadow
            fn: ({ state }) => {
                const elements = Object.keys(state.elements);
                setState({
                    styles: fromEntries(elements.map(element => [element, state.styles[element] || {}])),
                    attributes: fromEntries(elements.map(element => [element, state.attributes[element]]))
                });
            },
            requires: ['computeStyles']
        }), []);
        const popperOptions = React.useMemo(() => {
            const newOptions = {
                onFirstUpdate: optionsWithDefaults.onFirstUpdate,
                placement: optionsWithDefaults.placement,
                strategy: optionsWithDefaults.strategy,
                modifiers: [...optionsWithDefaults.modifiers, updateStateModifier, { name: 'applyStyles', enabled: false }]
            };
            if (isEqual(prevOptions.current, newOptions)) {
                return prevOptions.current || newOptions;
            }
            else {
                prevOptions.current = newOptions;
                return newOptions;
            }
        }, [
            optionsWithDefaults.onFirstUpdate,
            optionsWithDefaults.placement,
            optionsWithDefaults.strategy,
            optionsWithDefaults.modifiers,
            updateStateModifier
        ]);
        const popperInstanceRef = React.useRef();
        useIsomorphicLayoutEffect(() => {
            if (popperInstanceRef && popperInstanceRef.current) {
                popperInstanceRef.current.setOptions(popperOptions);
            }
        }, [popperOptions]);
        useIsomorphicLayoutEffect(() => {
            if (referenceElement == null || popperElement == null) {
                return;
            }
            const createPopper$1 = options.createPopper || createPopper;
            const popperInstance = createPopper$1(referenceElement, popperElement, popperOptions);
            popperInstanceRef.current = popperInstance;
            return () => {
                popperInstance.destroy();
                popperInstanceRef.current = null;
            };
        }, [referenceElement, popperElement, options.createPopper]);
        return {
            state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
            styles: state.styles,
            attributes: state.attributes,
            update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
            forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
        };
    };

    const hash$2 = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    const getOppositePlacement$1 = (placement) => placement.replace(/left|right|bottom|top/g, (matched) => hash$2[matched]);
    const getOpacityTransition = (animationDuration) => `opacity ${animationDuration}ms cubic-bezier(.54, 1.5, .38, 1.11)`;
    const Popper = ({ trigger, popper, popperMatchesTriggerWidth = true, direction = 'down', position = 'left', placement, appendTo = () => document.body, zIndex = 9999, isVisible = true, positionModifiers, distance = 0, onMouseEnter, onMouseLeave, onFocus, onBlur, onDocumentClick, onTriggerClick, onTriggerEnter, onPopperClick, onDocumentKeyDown, enableFlip = true, flipBehavior = 'flip', reference }) => {
        const [triggerElement, setTriggerElement] = React.useState(null);
        const [refElement, setRefElement] = React.useState(null);
        const [popperElement, setPopperElement] = React.useState(null);
        const [ready, setReady] = React.useState(false);
        const refOrTrigger = refElement || triggerElement;
        const onDocumentClickCallback = React.useCallback(event => onDocumentClick(event, refOrTrigger, popperElement), [
            isVisible,
            triggerElement,
            refElement,
            popperElement,
            onDocumentClick
        ]);
        React.useEffect(() => {
            setReady(true);
        }, []);
        React.useEffect(() => {
            if (reference) {
                if (reference.current) {
                    setRefElement(reference.current);
                }
                else if (typeof reference === 'function') {
                    setRefElement(reference());
                }
            }
        }, [reference]);
        const addEventListener = (listener, element, event) => {
            if (listener && element) {
                element.addEventListener(event, listener);
            }
        };
        const removeEventListener = (listener, element, event) => {
            if (listener && element) {
                element.removeEventListener(event, listener);
            }
        };
        React.useEffect(() => {
            addEventListener(onMouseEnter, refOrTrigger, 'mouseenter');
            addEventListener(onMouseLeave, refOrTrigger, 'mouseleave');
            addEventListener(onFocus, refOrTrigger, 'focus');
            addEventListener(onBlur, refOrTrigger, 'blur');
            addEventListener(onTriggerClick, refOrTrigger, 'click');
            addEventListener(onTriggerEnter, refOrTrigger, 'keydown');
            addEventListener(onPopperClick, popperElement, 'click');
            onDocumentClick && addEventListener(onDocumentClickCallback, document, 'click');
            addEventListener(onDocumentKeyDown, document, 'keydown');
            return () => {
                removeEventListener(onMouseEnter, refOrTrigger, 'mouseenter');
                removeEventListener(onMouseLeave, refOrTrigger, 'mouseleave');
                removeEventListener(onFocus, refOrTrigger, 'focus');
                removeEventListener(onBlur, refOrTrigger, 'blur');
                removeEventListener(onTriggerClick, refOrTrigger, 'click');
                removeEventListener(onTriggerEnter, refOrTrigger, 'keydown');
                removeEventListener(onPopperClick, popperElement, 'click');
                onDocumentClick && removeEventListener(onDocumentClickCallback, document, 'click');
                removeEventListener(onDocumentKeyDown, document, 'keydown');
            };
        }, [
            triggerElement,
            popperElement,
            onMouseEnter,
            onMouseLeave,
            onFocus,
            onBlur,
            onTriggerClick,
            onTriggerEnter,
            onPopperClick,
            onDocumentClick,
            onDocumentKeyDown,
            refElement
        ]);
        const getPlacement = () => {
            if (placement) {
                return placement;
            }
            let convertedPlacement = direction === 'up' ? 'top' : 'bottom';
            if (position !== 'center') {
                convertedPlacement = `${convertedPlacement}-${position === 'right' ? 'end' : 'start'}`;
            }
            return convertedPlacement;
        };
        const getPlacementMemo = React.useMemo(getPlacement, [direction, position, placement]);
        const getOppositePlacementMemo = React.useMemo(() => getOppositePlacement$1(getPlacement()), [
            direction,
            position,
            placement
        ]);
        const sameWidthMod = React.useMemo(() => ({
            name: 'sameWidth',
            enabled: popperMatchesTriggerWidth,
            phase: 'beforeWrite',
            requires: ['computeStyles'],
            fn: ({ state }) => {
                state.styles.popper.width = `${state.rects.reference.width}px`;
            },
            effect: ({ state }) => {
                state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
                return () => { };
            }
        }), [popperMatchesTriggerWidth]);
        const { styles: popperStyles, attributes } = usePopper(refOrTrigger, popperElement, {
            placement: getPlacementMemo,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, distance]
                    }
                },
                {
                    name: 'preventOverflow',
                    enabled: false
                },
                {
                    name: 'hide',
                    enabled: false
                },
                {
                    name: 'flip',
                    enabled: getPlacementMemo.startsWith('auto') || enableFlip,
                    options: {
                        fallbackPlacements: flipBehavior === 'flip' ? [getOppositePlacementMemo] : flipBehavior
                    }
                },
                sameWidthMod
            ]
        });
        const modifierFromPopperPosition = () => {
            if (attributes && attributes.popper && attributes.popper['data-popper-placement']) {
                const popperPlacement = attributes.popper['data-popper-placement'];
                if (popperPlacement.startsWith('top')) {
                    return positionModifiers.top || '';
                }
                else if (popperPlacement.startsWith('bottom')) {
                    return positionModifiers.bottom || '';
                }
                else if (popperPlacement.startsWith('left')) {
                    return positionModifiers.left || '';
                }
                else if (popperPlacement.startsWith('right')) {
                    return positionModifiers.right || '';
                }
            }
            return positionModifiers.top;
        };
        const menuWithPopper = React.cloneElement(popper, Object.assign({ className: css(popper.props && popper.props.className, positionModifiers && modifierFromPopperPosition()), style: Object.assign(Object.assign(Object.assign({}, ((popper.props && popper.props.style) || {})), popperStyles.popper), { zIndex }) }, attributes.popper));
        const getTarget = () => {
            if (typeof appendTo === 'function') {
                return appendTo();
            }
            return appendTo;
        };
        return (React.createElement(React.Fragment, null,
            !reference && trigger && (React.createElement(FindRefWrapper, { onFoundRef: (foundRef) => setTriggerElement(foundRef) }, trigger)),
            ready &&
                isVisible &&
                ReactDOM.createPortal(React.createElement(FindRefWrapper, { onFoundRef: (foundRef) => setPopperElement(foundRef) }, menuWithPopper), getTarget())));
    };
    Popper.displayName = 'Popper';

    (function (TooltipPosition) {
        TooltipPosition["auto"] = "auto";
        TooltipPosition["top"] = "top";
        TooltipPosition["bottom"] = "bottom";
        TooltipPosition["left"] = "left";
        TooltipPosition["right"] = "right";
    })(exports.TooltipPosition || (exports.TooltipPosition = {}));
    // id for associating trigger with the content aria-describedby or aria-labelledby
    let pfTooltipIdCounter = 1;
    const Tooltip = (_a) => {
        var { content: bodyContent, position = 'top', trigger = 'mouseenter focus', isVisible = false, isContentLeftAligned = false, enableFlip = true, className = '', entryDelay = 0, exitDelay = 0, appendTo = () => document.body, zIndex = 9999, maxWidth = c_tooltip_MaxWidth.value, distance = 15, aria = 'describedby', 
        // For every initial starting position, there are 3 escape positions
        flipBehavior = ['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom'], id = `pf-tooltip-${pfTooltipIdCounter++}`, children, animationDuration = 300, reference, boundary, isAppLauncher, tippyProps } = _a, rest = __rest(_a, ["content", "position", "trigger", "isVisible", "isContentLeftAligned", "enableFlip", "className", "entryDelay", "exitDelay", "appendTo", "zIndex", "maxWidth", "distance", "aria", "flipBehavior", "id", "children", "animationDuration", "reference", "boundary", "isAppLauncher", "tippyProps"]);
        {
            boundary !== undefined &&
                console.warn('The Tooltip boundary prop has been deprecated. If you want to constrain the popper to a specific element use the appendTo prop instead.');
            isAppLauncher !== undefined &&
                console.warn('The Tooltip isAppLauncher prop has been deprecated and is no longer used.');
            tippyProps !== undefined && console.warn('The Tooltip tippyProps prop has been deprecated and is no longer used.');
        }
        const triggerOnMouseenter = trigger.includes('mouseenter');
        const triggerOnFocus = trigger.includes('focus');
        const triggerOnClick = trigger.includes('click');
        const triggerManually = trigger === 'manual';
        const [visible, setVisible] = React.useState(false);
        const [opacity, setOpacity] = React.useState(0);
        const transitionTimerRef = React.useRef(null);
        const showTimerRef = React.useRef(null);
        const hideTimerRef = React.useRef(null);
        const onDocumentKeyDown = (event) => {
            if (!triggerManually) {
                if (event.keyCode === KEY_CODES.ESCAPE_KEY && visible) {
                    hide();
                }
            }
        };
        const onTriggerEnter = (event) => {
            if (event.keyCode === KEY_CODES.ENTER) {
                if (!visible) {
                    show();
                }
                else {
                    hide();
                }
            }
        };
        React.useEffect(() => {
            if (isVisible) {
                show();
            }
            else {
                hide();
            }
        }, [isVisible]);
        const show = () => {
            if (transitionTimerRef.current) {
                clearTimeout(transitionTimerRef.current);
            }
            if (hideTimerRef.current) {
                clearTimeout(hideTimerRef.current);
            }
            showTimerRef.current = setTimeout(() => {
                setVisible(true);
                setOpacity(1);
            }, entryDelay);
        };
        const hide = () => {
            if (showTimerRef.current) {
                clearTimeout(showTimerRef.current);
            }
            hideTimerRef.current = setTimeout(() => {
                setOpacity(0);
                transitionTimerRef.current = setTimeout(() => setVisible(false), animationDuration);
            }, exitDelay);
        };
        const positionModifiers = {
            top: styles$9.modifiers.top,
            bottom: styles$9.modifiers.bottom,
            left: styles$9.modifiers.left,
            right: styles$9.modifiers.right
        };
        const hasCustomMaxWidth = maxWidth !== c_tooltip_MaxWidth.value;
        const content = (React.createElement("div", Object.assign({ className: css(styles$9.tooltip, className), role: "tooltip", id: id, style: {
                maxWidth: hasCustomMaxWidth ? maxWidth : null,
                opacity,
                transition: getOpacityTransition(animationDuration)
            } }, rest),
            React.createElement(TooltipArrow, null),
            React.createElement(TooltipContent, { isLeftAligned: isContentLeftAligned }, bodyContent)));
        const onDocumentClick = (event, triggerElement) => {
            // event.currentTarget = document
            // event.target could be triggerElement or something else
            {
                // hide on inside the toggle as well as on outside clicks
                if (visible) {
                    hide();
                }
                else if (event.target === triggerElement) {
                    show();
                }
            }
        };
        const addAriaToTrigger = () => {
            if (aria === 'describedby' && children && children.props && !children.props['aria-describedby']) {
                return React.cloneElement(children, { 'aria-describedby': id });
            }
            else if (aria === 'labelledby' && children.props && !children.props['aria-labelledby']) {
                return React.cloneElement(children, { 'aria-labelledby': id });
            }
            return children;
        };
        return (React.createElement(Popper, { trigger: aria !== 'none' ? addAriaToTrigger() : children, reference: reference, popper: content, popperMatchesTriggerWidth: false, appendTo: appendTo, isVisible: visible, positionModifiers: positionModifiers, distance: distance, placement: position, onMouseEnter: triggerOnMouseenter && show, onMouseLeave: triggerOnMouseenter && hide, onFocus: triggerOnFocus && show, onBlur: triggerOnFocus && hide, onDocumentClick: triggerOnClick && onDocumentClick, onDocumentKeyDown: triggerManually ? null : onDocumentKeyDown, onTriggerEnter: triggerManually ? null : onTriggerEnter, enableFlip: enableFlip, zIndex: zIndex, flipBehavior: flipBehavior }));
    };
    Tooltip.displayName = 'Tooltip';

    (function (AlertVariant) {
        AlertVariant["success"] = "success";
        AlertVariant["danger"] = "danger";
        AlertVariant["warning"] = "warning";
        AlertVariant["info"] = "info";
        AlertVariant["default"] = "default";
    })(exports.AlertVariant || (exports.AlertVariant = {}));
    const Alert = (_a) => {
        var { variant = exports.AlertVariant.default, isInline = false, isLiveRegion = false, variantLabel = `${capitalize(variant)} alert:`, 'aria-label': ariaLabel = `${capitalize(variant)} Alert`, actionClose, actionLinks, title, children = '', className = '', ouiaId, ouiaSafe = true, timeout = false, onTimeout, truncateTitle = 0, tooltipPosition, customIcon } = _a, props = __rest(_a, ["variant", "isInline", "isLiveRegion", "variantLabel", 'aria-label', "actionClose", "actionLinks", "title", "children", "className", "ouiaId", "ouiaSafe", "timeout", "onTimeout", "truncateTitle", "tooltipPosition", "customIcon"]);
        const ouiaProps = useOUIAProps(Alert.displayName, ouiaId, ouiaSafe, variant);
        const getHeadingContent = (React.createElement(React.Fragment, null,
            React.createElement("span", { className: css(a11yStyles.screenReader) }, variantLabel),
            title));
        const [disableAlert, setDisableAlert] = React.useState(false);
        const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
        const titleRef = React.useRef(null);
        React.useEffect(() => {
            if (!titleRef.current || !truncateTitle) {
                return;
            }
            titleRef.current.style.setProperty(c_alert__title_max_lines.name, truncateTitle.toString());
            const showTooltip = titleRef.current && titleRef.current.offsetHeight < titleRef.current.scrollHeight;
            if (isTooltipVisible !== showTooltip) {
                setIsTooltipVisible(showTooltip);
            }
        }, [titleRef, truncateTitle, isTooltipVisible]);
        const customClassName = css(styles$8.alert, isInline && styles$8.modifiers.inline, variant !== exports.AlertVariant.default && styles$8.modifiers[variant], className);
        const Title = (React.createElement("h4", Object.assign({}, (isTooltipVisible && { tabIndex: 0 }), { ref: titleRef, className: css(styles$8.alertTitle, truncateTitle && styles$8.modifiers.truncate) }), getHeadingContent));
        if (disableAlert === false && timeout && timeout !== 0) {
            setTimeout(() => {
                setDisableAlert(true);
                if (onTimeout) {
                    onTimeout();
                }
            }, timeout === true ? 8000 : timeout);
        }
        if (disableAlert === false) {
            return (React.createElement("div", Object.assign({}, props, { className: customClassName, "aria-label": ariaLabel }, ouiaProps, (isLiveRegion && {
                'aria-live': 'polite',
                'aria-atomic': 'false'
            })),
                React.createElement(AlertIcon, { variant: variant, customIcon: customIcon }),
                isTooltipVisible ? (React.createElement(Tooltip, { content: getHeadingContent, position: tooltipPosition }, Title)) : (Title),
                actionClose && (React.createElement(AlertContext.Provider, { value: { title, variantLabel } },
                    React.createElement("div", { className: css(styles$8.alertAction) }, actionClose))),
                children && React.createElement("div", { className: css(styles$8.alertDescription) }, children),
                actionLinks && React.createElement("div", { className: css(styles$8.alertActionGroup) }, actionLinks)));
        }
        else {
            return null;
        }
    };
    Alert.displayName = 'Alert';

    const AlertActionCloseButton = (_a) => {
        var { 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        className = '', onClose = () => undefined, 'aria-label': ariaLabel = '', variantLabel } = _a, props = __rest(_a, ["className", "onClose", 'aria-label', "variantLabel"]);
        return (React.createElement(AlertContext.Consumer, null, ({ title, variantLabel: alertVariantLabel }) => (React.createElement(Button, Object.assign({ variant: exports.ButtonVariant.plain, onClick: onClose, "aria-label": ariaLabel === '' ? `Close ${variantLabel || alertVariantLabel} alert: ${title}` : ariaLabel }, props),
            React.createElement(TimesIcon, null)))));
    };
    AlertActionCloseButton.displayName = 'AlertActionCloseButton';

    const AlertActionLink = (_a) => {
        var { className = '', children } = _a, props = __rest(_a, ["className", "children"]);
        return (React.createElement(Button, Object.assign({ variant: exports.ButtonVariant.link, isInline: true, className: className }, props), children));
    };
    AlertActionLink.displayName = 'AlertActionLink';

    var alertGroup = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "alertGroup": "pf-c-alert-group",
      "modifiers": {
        "toast": "pf-m-toast"
      }
    };
    });

    var styles$a = unwrapExports(alertGroup);

    const AlertGroupInline = (_a) => {
        var { className, children, isToast } = _a, rest = __rest(_a, ["className", "children", "isToast"]);
        return (React.createElement("ul", Object.assign({ className: css(styles$a.alertGroup, className, isToast ? styles$a.modifiers.toast : '') }, rest), React.Children.toArray(children).map((Alert, index) => (React.createElement("li", { key: index }, Alert)))));
    };
    AlertGroupInline.displayName = 'AlertGroupInline';

    class AlertGroup extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                container: undefined
            };
        }
        componentDidMount() {
            const container = document.createElement('div');
            const target = this.getTargetElement();
            this.setState({ container });
            target.appendChild(container);
        }
        componentWillUnmount() {
            const target = this.getTargetElement();
            if (this.state.container) {
                target.removeChild(this.state.container);
            }
        }
        getTargetElement() {
            const appendTo = this.props.appendTo;
            if (typeof appendTo === 'function') {
                return appendTo();
            }
            return appendTo || document.body;
        }
        render() {
            const { className, children, isToast } = this.props;
            const alertGroup = (React.createElement(AlertGroupInline, { className: className, isToast: isToast }, children));
            if (!this.props.isToast) {
                return alertGroup;
            }
            const container = this.state.container;
            if (!canUseDOM || !container) {
                return null;
            }
            return ReactDOM.createPortal(alertGroup, container);
        }
    }
    AlertGroup.displayName = 'AlertGroup';

    var appLauncher = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "appLauncher": "pf-c-app-launcher",
      "appLauncherGroup": "pf-c-app-launcher__group",
      "appLauncherGroupTitle": "pf-c-app-launcher__group-title",
      "appLauncherMenu": "pf-c-app-launcher__menu",
      "appLauncherMenuItem": "pf-c-app-launcher__menu-item",
      "appLauncherMenuItemExternalIcon": "pf-c-app-launcher__menu-item-external-icon",
      "appLauncherMenuItemIcon": "pf-c-app-launcher__menu-item-icon",
      "appLauncherMenuSearch": "pf-c-app-launcher__menu-search",
      "appLauncherMenuWrapper": "pf-c-app-launcher__menu-wrapper",
      "appLauncherToggle": "pf-c-app-launcher__toggle",
      "divider": "pf-c-divider",
      "modifiers": {
        "expanded": "pf-m-expanded",
        "active": "pf-m-active",
        "alignRight": "pf-m-align-right",
        "top": "pf-m-top",
        "favorite": "pf-m-favorite",
        "focus": "pf-m-focus",
        "disabled": "pf-m-disabled",
        "external": "pf-m-external",
        "link": "pf-m-link",
        "action": "pf-m-action"
      }
    };
    });

    var styles$b = unwrapExports(appLauncher);

    var formControl = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "formControl": "pf-c-form-control",
      "modifiers": {
        "success": "pf-m-success",
        "expanded": "pf-m-expanded",
        "icon": "pf-m-icon",
        "warning": "pf-m-warning",
        "search": "pf-m-search",
        "calendar": "pf-m-calendar",
        "clock": "pf-m-clock",
        "resizeVertical": "pf-m-resize-vertical",
        "resizeHorizontal": "pf-m-resize-horizontal"
      }
    };
    });

    var formStyles = unwrapExports(formControl);

    const ThIconConfig = {
      name: 'ThIcon',
      height: 512,
      width: 512,
      svgPath: 'M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z',
      yOffset: 0,
      xOffset: 0,
    };

    const ThIcon = createIcon(ThIconConfig);

    var dropdown = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "divider": "pf-c-divider",
      "dropdown": "pf-c-dropdown",
      "dropdownGroup": "pf-c-dropdown__group",
      "dropdownGroupTitle": "pf-c-dropdown__group-title",
      "dropdownMenu": "pf-c-dropdown__menu",
      "dropdownMenuItem": "pf-c-dropdown__menu-item",
      "dropdownMenuItemDescription": "pf-c-dropdown__menu-item-description",
      "dropdownMenuItemIcon": "pf-c-dropdown__menu-item-icon",
      "dropdownMenuItemMain": "pf-c-dropdown__menu-item-main",
      "dropdownToggle": "pf-c-dropdown__toggle",
      "dropdownToggleButton": "pf-c-dropdown__toggle-button",
      "dropdownToggleCheck": "pf-c-dropdown__toggle-check",
      "dropdownToggleIcon": "pf-c-dropdown__toggle-icon",
      "dropdownToggleImage": "pf-c-dropdown__toggle-image",
      "dropdownToggleText": "pf-c-dropdown__toggle-text",
      "modifiers": {
        "action": "pf-m-action",
        "disabled": "pf-m-disabled",
        "plain": "pf-m-plain",
        "splitButton": "pf-m-split-button",
        "active": "pf-m-active",
        "expanded": "pf-m-expanded",
        "primary": "pf-m-primary",
        "top": "pf-m-top",
        "alignRight": "pf-m-align-right",
        "icon": "pf-m-icon",
        "description": "pf-m-description",
        "text": "pf-m-text"
      }
    };
    });

    var styles$c = unwrapExports(dropdown);

    (function (DropdownPosition) {
        DropdownPosition["right"] = "right";
        DropdownPosition["left"] = "left";
    })(exports.DropdownPosition || (exports.DropdownPosition = {}));
    (function (DropdownDirection) {
        DropdownDirection["up"] = "up";
        DropdownDirection["down"] = "down";
    })(exports.DropdownDirection || (exports.DropdownDirection = {}));
    const DropdownContext = React.createContext({
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onSelect: (event) => undefined,
        id: '',
        toggleIndicatorClass: '',
        toggleIconClass: '',
        toggleTextClass: '',
        menuClass: '',
        itemClass: '',
        toggleClass: '',
        baseClass: '',
        baseComponent: 'div',
        sectionClass: '',
        sectionTitleClass: '',
        sectionComponent: 'section',
        disabledClass: '',
        plainTextClass: '',
        menuComponent: 'ul'
    });
    const DropdownArrowContext = React.createContext({
        keyHandler: null,
        sendRef: null
    });

    class DropdownMenu extends React.Component {
        constructor() {
            super(...arguments);
            this.refsCollection = [];
            this.componentWillUnmount = () => {
                document.removeEventListener('keydown', this.onKeyDown);
            };
            this.onKeyDown = (event) => {
                if (!this.props.isOpen ||
                    !Array.from(document.activeElement.classList).find(className => DropdownMenu.validToggleClasses.concat(this.context.toggleClass).includes(className))) {
                    return;
                }
                const refs = this.refsCollection;
                if (event.key === 'ArrowDown') {
                    const firstFocusTargetCollection = refs.find(ref => ref && ref[0] && !ref[0].hasAttribute('disabled'));
                    DropdownMenu.focusFirstRef(firstFocusTargetCollection);
                }
                else if (event.key === 'ArrowUp') {
                    const collectionLength = refs.length;
                    const lastFocusTargetCollection = refs.slice(collectionLength - 1, collectionLength);
                    const lastFocusTarget = lastFocusTargetCollection && lastFocusTargetCollection[0];
                    DropdownMenu.focusFirstRef(lastFocusTarget);
                }
            };
            this.childKeyHandler = (index, innerIndex, position, custom = false) => {
                keyHandler(index, innerIndex, position, this.refsCollection, this.props.isGrouped ? this.refsCollection : React.Children.toArray(this.props.children), custom);
            };
            this.sendRef = (index, nodes, isDisabled, isSeparator) => {
                this.refsCollection[index] = [];
                nodes.map((node, innerIndex) => {
                    if (!node) {
                        this.refsCollection[index][innerIndex] = null;
                    }
                    else if (!node.getAttribute) {
                        // eslint-disable-next-line react/no-find-dom-node
                        this.refsCollection[index][innerIndex] = ReactDOM.findDOMNode(node);
                    }
                    else if (isSeparator) {
                        this.refsCollection[index][innerIndex] = null;
                    }
                    else {
                        this.refsCollection[index][innerIndex] = node;
                    }
                });
            };
        }
        componentDidMount() {
            document.addEventListener('keydown', this.onKeyDown);
            const { autoFocus } = this.props;
            if (autoFocus) {
                // Focus first non-disabled element
                const focusTargetCollection = this.refsCollection.find(ref => ref && ref[0] && !ref[0].hasAttribute('disabled'));
                const focusTarget = focusTargetCollection && focusTargetCollection[0];
                if (focusTarget && focusTarget.focus) {
                    setTimeout(() => focusTarget.focus());
                }
            }
        }
        shouldComponentUpdate() {
            // reset refsCollection before updating to account for child removal between mounts
            this.refsCollection = [];
            return true;
        }
        extendChildren() {
            const { children, isGrouped } = this.props;
            if (isGrouped) {
                let index = 0;
                return React.Children.map(children, groupedChildren => {
                    const group = groupedChildren;
                    const props = {};
                    if (group.props && group.props.children) {
                        if (Array.isArray(group.props.children)) {
                            props.children = React.Children.map(group.props.children, option => React.cloneElement(option, {
                                index: index++
                            }));
                        }
                        else {
                            props.children = React.cloneElement(group.props.children, {
                                index: index++
                            });
                        }
                    }
                    return React.cloneElement(group, props);
                });
            }
            return React.Children.map(children, (child, index) => React.cloneElement(child, {
                index
            }));
        }
        render() {
            const _a = this.props, { className, isOpen, position, children, component, isGrouped, setMenuComponentRef, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            openedOnEnter } = _a, props = __rest(_a, ["className", "isOpen", "position", "children", "component", "isGrouped", "setMenuComponentRef", "openedOnEnter"]);
            return (React.createElement(DropdownArrowContext.Provider, { value: {
                    keyHandler: this.childKeyHandler,
                    sendRef: this.sendRef
                } }, component === 'div' ? (React.createElement(DropdownContext.Consumer, null, ({ onSelect, menuClass }) => (React.createElement("div", { className: css(menuClass, position === exports.DropdownPosition.right && styles$c.modifiers.alignRight, className), hidden: !isOpen, onClick: event => onSelect && onSelect(event), ref: setMenuComponentRef }, children)))) : ((isGrouped && (React.createElement(DropdownContext.Consumer, null, ({ menuClass, menuComponent }) => {
                const MenuComponent = (menuComponent || 'div');
                return (React.createElement(MenuComponent, Object.assign({}, props, { className: css(menuClass, position === exports.DropdownPosition.right && styles$c.modifiers.alignRight, className), hidden: !isOpen, role: "menu", ref: setMenuComponentRef }), this.extendChildren()));
            }))) || (React.createElement(DropdownContext.Consumer, null, ({ menuClass, menuComponent }) => {
                const MenuComponent = (menuComponent || component);
                return (React.createElement(MenuComponent, Object.assign({}, props, { className: css(menuClass, position === exports.DropdownPosition.right && styles$c.modifiers.alignRight, className), hidden: !isOpen, role: "menu", ref: setMenuComponentRef }), this.extendChildren()));
            })))));
        }
    }
    DropdownMenu.displayName = 'DropdownMenu';
    DropdownMenu.defaultProps = {
        className: '',
        isOpen: true,
        openedOnEnter: false,
        autoFocus: true,
        position: exports.DropdownPosition.left,
        component: 'ul',
        isGrouped: false,
        setMenuComponentRef: null
    };
    DropdownMenu.validToggleClasses = [styles$c.dropdownToggle, styles$c.dropdownToggleButton];
    DropdownMenu.focusFirstRef = (refCollection) => {
        if (refCollection && refCollection[0] && refCollection[0].focus) {
            setTimeout(() => refCollection[0].focus());
        }
    };
    DropdownMenu.contextType = DropdownContext;

    class DropdownWithContext extends React.Component {
        constructor(props) {
            super(props);
            this.openedOnEnter = false;
            this.baseComponentRef = React.createRef();
            this.menuComponentRef = React.createRef();
            this.onEnter = () => {
                this.openedOnEnter = true;
            };
            this.setMenuComponentRef = (element) => {
                this.menuComponentRef = element;
            };
            this.getMenuComponentRef = () => this.menuComponentRef;
            if (props.dropdownItems && props.dropdownItems.length > 0 && props.children) {
                // eslint-disable-next-line no-console
                console.error('Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered');
            }
        }
        componentDidUpdate() {
            if (!this.props.isOpen) {
                this.openedOnEnter = false;
            }
        }
        render() {
            const _a = this.props, { children, className, direction, dropdownItems, isOpen, isPlain, isGrouped, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onSelect, position, toggle, autoFocus, menuAppendTo } = _a, props = __rest(_a, ["children", "className", "direction", "dropdownItems", "isOpen", "isPlain", "isGrouped", "onSelect", "position", "toggle", "autoFocus", "menuAppendTo"]);
            const id = toggle.props.id || `pf-dropdown-toggle-id-${DropdownWithContext.currentId++}`;
            let component;
            let renderedContent;
            let ariaHasPopup = false;
            if (dropdownItems && dropdownItems.length > 0) {
                component = 'ul';
                renderedContent = dropdownItems;
                ariaHasPopup = true;
            }
            else {
                component = 'div';
                renderedContent = React.Children.toArray(children);
            }
            const openedOnEnter = this.openedOnEnter;
            return (React.createElement(DropdownContext.Consumer, null, ({ baseClass, baseComponent, id: contextId, ouiaId, ouiaComponentType, ouiaSafe }) => {
                const BaseComponent = baseComponent;
                const menuContainer = (React.createElement(DropdownMenu, { setMenuComponentRef: this.setMenuComponentRef, component: component, isOpen: isOpen, position: position, "aria-labelledby": contextId ? `${contextId}-toggle` : id, isGrouped: isGrouped, autoFocus: openedOnEnter && autoFocus }, renderedContent));
                const popperContainer = (React.createElement("div", { className: css(baseClass, direction === exports.DropdownDirection.up && styles$c.modifiers.top, position === exports.DropdownPosition.right && styles$c.modifiers.alignRight, isOpen && styles$c.modifiers.expanded, className) }, isOpen && menuContainer));
                const mainContainer = (React.createElement(BaseComponent, Object.assign({}, props, { className: css(baseClass, direction === exports.DropdownDirection.up && styles$c.modifiers.top, position === exports.DropdownPosition.right && styles$c.modifiers.alignRight, isOpen && styles$c.modifiers.expanded, className), ref: this.baseComponentRef }, getOUIAProps(ouiaComponentType, ouiaId, ouiaSafe)),
                    React.Children.map(toggle, oneToggle => React.cloneElement(oneToggle, {
                        parentRef: this.baseComponentRef,
                        getMenuRef: this.getMenuComponentRef,
                        isOpen,
                        id,
                        isPlain,
                        'aria-haspopup': ariaHasPopup,
                        onEnter: () => this.onEnter()
                    })),
                    menuAppendTo === 'inline' && isOpen && menuContainer));
                const getParentElement = () => {
                    if (this.baseComponentRef && this.baseComponentRef.current) {
                        return this.baseComponentRef.current.parentElement;
                    }
                    return null;
                };
                return menuAppendTo === 'inline' ? (mainContainer) : (React.createElement(Popper, { trigger: mainContainer, popper: popperContainer, direction: direction, position: position, appendTo: menuAppendTo === 'parent' ? getParentElement() : menuAppendTo, isVisible: isOpen }));
            }));
        }
    }
    DropdownWithContext.displayName = 'DropdownWithContext';
    // seed for the aria-labelledby ID
    DropdownWithContext.currentId = 0;
    DropdownWithContext.defaultProps = {
        className: '',
        dropdownItems: [],
        isOpen: false,
        isPlain: false,
        isGrouped: false,
        position: exports.DropdownPosition.left,
        direction: exports.DropdownDirection.down,
        onSelect: () => undefined,
        autoFocus: true,
        menuAppendTo: 'inline'
    };

    const Dropdown = (_a) => {
        var { onSelect, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ref, // Types of Ref are different for React.FC vs React.Component
        ouiaId, ouiaSafe } = _a, props = __rest(_a, ["onSelect", "ref", "ouiaId", "ouiaSafe"]);
        return (React.createElement(DropdownContext.Provider, { value: {
                onSelect: event => onSelect && onSelect(event),
                toggleTextClass: styles$c.dropdownToggleText,
                toggleIconClass: styles$c.dropdownToggleImage,
                toggleIndicatorClass: styles$c.dropdownToggleIcon,
                menuClass: styles$c.dropdownMenu,
                itemClass: styles$c.dropdownMenuItem,
                toggleClass: styles$c.dropdownToggle,
                baseClass: styles$c.dropdown,
                baseComponent: 'div',
                sectionClass: styles$c.dropdownGroup,
                sectionTitleClass: styles$c.dropdownGroupTitle,
                sectionComponent: 'section',
                disabledClass: styles$c.modifiers.disabled,
                plainTextClass: styles$c.modifiers.text,
                ouiaId: useOUIAId(Dropdown.displayName, ouiaId),
                ouiaSafe,
                ouiaComponentType: Dropdown.displayName
            } },
            React.createElement(DropdownWithContext, Object.assign({}, props))));
    };
    Dropdown.displayName = 'Dropdown';

    const DropdownGroup = ({ children = null, className = '', label = '' }) => (React.createElement(DropdownContext.Consumer, null, ({ sectionClass, sectionTitleClass, sectionComponent }) => {
        const SectionComponent = sectionComponent;
        return (React.createElement(SectionComponent, { className: css(sectionClass, className) },
            label && (React.createElement("h1", { className: css(sectionTitleClass), "aria-hidden": true }, label)),
            React.createElement("ul", { role: "none" }, children)));
    }));
    DropdownGroup.displayName = 'DropdownGroup';

    class InternalDropdownItem extends React.Component {
        constructor() {
            super(...arguments);
            this.ref = React.createRef();
            this.additionalRef = React.createRef();
            this.getInnerNode = (node) => (node && node.childNodes && node.childNodes.length ? node.childNodes[0] : node);
            this.onKeyDown = (event) => {
                // Detected key press on this item, notify the menu parent so that the appropriate item can be focused
                const innerIndex = event.target === this.ref.current ? 0 : 1;
                if (!this.props.customChild) {
                    event.preventDefault();
                }
                if (event.key === 'ArrowUp') {
                    this.props.context.keyHandler(this.props.index, innerIndex, KEYHANDLER_DIRECTION.UP);
                }
                else if (event.key === 'ArrowDown') {
                    this.props.context.keyHandler(this.props.index, innerIndex, KEYHANDLER_DIRECTION.DOWN);
                }
                else if (event.key === 'ArrowRight') {
                    this.props.context.keyHandler(this.props.index, innerIndex, KEYHANDLER_DIRECTION.RIGHT);
                }
                else if (event.key === 'ArrowLeft') {
                    this.props.context.keyHandler(this.props.index, innerIndex, KEYHANDLER_DIRECTION.LEFT);
                }
                else if (event.key === 'Enter' || event.key === ' ') {
                    event.target.click();
                    this.props.enterTriggersArrowDown &&
                        this.props.context.keyHandler(this.props.index, innerIndex, KEYHANDLER_DIRECTION.DOWN);
                }
            };
        }
        componentDidMount() {
            const { context, index, isDisabled, role, customChild, autoFocus } = this.props;
            const customRef = customChild ? this.getInnerNode(this.ref.current) : this.ref.current;
            context.sendRef(index, [customRef, customChild ? customRef : this.additionalRef.current], isDisabled, role === 'separator');
            autoFocus && setTimeout(() => customRef.focus());
        }
        componentDidUpdate() {
            const { context, index, isDisabled, role, customChild } = this.props;
            const customRef = customChild ? this.getInnerNode(this.ref.current) : this.ref.current;
            context.sendRef(index, [customRef, customChild ? customRef : this.additionalRef.current], isDisabled, role === 'separator');
        }
        extendAdditionalChildRef() {
            const { additionalChild } = this.props;
            return React.cloneElement(additionalChild, {
                ref: this.additionalRef
            });
        }
        render() {
            /* eslint-disable @typescript-eslint/no-unused-vars */
            const _a = this.props, { className, children, isHovered, context, onClick, component, role, isDisabled, isPlainText, index, href, tooltip, tooltipProps, id, componentID, listItemClassName, additionalChild, customChild, enterTriggersArrowDown, icon, autoFocus, styleChildren, description, inoperableEvents } = _a, additionalProps = __rest(_a, ["className", "children", "isHovered", "context", "onClick", "component", "role", "isDisabled", "isPlainText", "index", "href", "tooltip", "tooltipProps", "id", "componentID", "listItemClassName", "additionalChild", "customChild", "enterTriggersArrowDown", "icon", "autoFocus", "styleChildren", "description", "inoperableEvents"]);
            /* eslint-enable @typescript-eslint/no-unused-vars */
            let classes = css(icon && styles$c.modifiers.icon, className);
            if (component === 'a') {
                additionalProps['aria-disabled'] = isDisabled;
            }
            else if (component === 'button') {
                additionalProps['aria-disabled'] = isDisabled;
                additionalProps.type = additionalProps.type || 'button';
            }
            const renderWithTooltip = (childNode) => tooltip ? (React.createElement(Tooltip, Object.assign({ content: tooltip }, tooltipProps), childNode)) : (childNode);
            const renderClonedComponent = (element) => React.cloneElement(element, Object.assign({}, (styleChildren && {
                className: css(element.props.className, classes)
            })));
            const renderDefaultComponent = (tag) => {
                const Component = tag;
                const componentContent = description ? (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: styles$c.dropdownMenuItemMain },
                        icon && React.createElement("span", { className: css(styles$c.dropdownMenuItemIcon) }, icon),
                        children),
                    React.createElement("div", { className: styles$c.dropdownMenuItemDescription }, description))) : (React.createElement(React.Fragment, null,
                    icon && React.createElement("span", { className: css(styles$c.dropdownMenuItemIcon) }, icon),
                    children));
                return (React.createElement(Component, Object.assign({}, additionalProps, (isDisabled ? preventedEvents(inoperableEvents) : null), { href: href, ref: this.ref, className: classes, id: componentID }), componentContent));
            };
            return (React.createElement(DropdownContext.Consumer, null, ({ onSelect, itemClass, disabledClass, plainTextClass }) => {
                if (this.props.role !== 'separator') {
                    classes = css(classes, isDisabled && disabledClass, isPlainText && plainTextClass, itemClass, description && styles$c.modifiers.description);
                }
                if (customChild) {
                    return React.cloneElement(customChild, {
                        ref: this.ref,
                        onKeyDown: this.onKeyDown
                    });
                }
                return (React.createElement("li", { className: listItemClassName || null, role: role, onKeyDown: this.onKeyDown, onClick: (event) => {
                        if (!isDisabled) {
                            onClick(event);
                            onSelect(event);
                        }
                    }, id: id },
                    renderWithTooltip(React.isValidElement(component)
                        ? renderClonedComponent(component)
                        : renderDefaultComponent(component)),
                    additionalChild && this.extendAdditionalChildRef()));
            }));
        }
    }
    InternalDropdownItem.displayName = 'InternalDropdownItem';
    InternalDropdownItem.defaultProps = {
        className: '',
        isHovered: false,
        component: 'a',
        role: 'none',
        isDisabled: false,
        isPlainText: false,
        tooltipProps: {},
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onClick: (event) => undefined,
        index: -1,
        context: {
            keyHandler: () => { },
            sendRef: () => { }
        },
        enterTriggersArrowDown: false,
        icon: null,
        styleChildren: true,
        description: null,
        inoperableEvents: ['onClick', 'onKeyPress']
    };

    const DropdownItem = (_a) => {
        var { children, className, component = 'a', isDisabled = false, isPlainText = false, isHovered = false, href, tooltip, tooltipProps = {}, listItemClassName, onClick, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ref, // Types of Ref are different for React.FC vs React.Component
        additionalChild, customChild, tabIndex = -1, icon = null, autoFocus, description = null, styleChildren, ouiaId, ouiaSafe } = _a, props = __rest(_a, ["children", "className", "component", "isDisabled", "isPlainText", "isHovered", "href", "tooltip", "tooltipProps", "listItemClassName", "onClick", "ref", "additionalChild", "customChild", "tabIndex", "icon", "autoFocus", "description", "styleChildren", "ouiaId", "ouiaSafe"]);
        const ouiaProps = useOUIAProps(DropdownItem.displayName, ouiaId, ouiaSafe);
        return (React.createElement(DropdownArrowContext.Consumer, null, context => (React.createElement(InternalDropdownItem, Object.assign({ context: context, role: "menuitem", tabIndex: tabIndex, className: className, component: component, isDisabled: isDisabled, isPlainText: isPlainText, isHovered: isHovered, href: href, tooltip: tooltip, tooltipProps: tooltipProps, listItemClassName: listItemClassName, onClick: onClick, additionalChild: additionalChild, customChild: customChild, icon: icon, autoFocus: autoFocus, styleChildren: styleChildren, description: description }, ouiaProps, props), children))));
    };
    DropdownItem.displayName = 'DropdownItem';

    var divider = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "divider": "pf-c-divider",
      "modifiers": {
        "vertical": "pf-m-vertical",
        "insetNone": "pf-m-inset-none",
        "insetXs": "pf-m-inset-xs",
        "insetSm": "pf-m-inset-sm",
        "insetMd": "pf-m-inset-md",
        "insetLg": "pf-m-inset-lg",
        "insetXl": "pf-m-inset-xl",
        "inset_2xl": "pf-m-inset-2xl",
        "inset_3xl": "pf-m-inset-3xl",
        "insetNoneOnSm": "pf-m-inset-none-on-sm",
        "insetXsOnSm": "pf-m-inset-xs-on-sm",
        "insetSmOnSm": "pf-m-inset-sm-on-sm",
        "insetMdOnSm": "pf-m-inset-md-on-sm",
        "insetLgOnSm": "pf-m-inset-lg-on-sm",
        "insetXlOnSm": "pf-m-inset-xl-on-sm",
        "inset_2xlOnSm": "pf-m-inset-2xl-on-sm",
        "inset_3xlOnSm": "pf-m-inset-3xl-on-sm",
        "insetNoneOnMd": "pf-m-inset-none-on-md",
        "insetXsOnMd": "pf-m-inset-xs-on-md",
        "insetSmOnMd": "pf-m-inset-sm-on-md",
        "insetMdOnMd": "pf-m-inset-md-on-md",
        "insetLgOnMd": "pf-m-inset-lg-on-md",
        "insetXlOnMd": "pf-m-inset-xl-on-md",
        "inset_2xlOnMd": "pf-m-inset-2xl-on-md",
        "inset_3xlOnMd": "pf-m-inset-3xl-on-md",
        "insetNoneOnLg": "pf-m-inset-none-on-lg",
        "insetXsOnLg": "pf-m-inset-xs-on-lg",
        "insetSmOnLg": "pf-m-inset-sm-on-lg",
        "insetMdOnLg": "pf-m-inset-md-on-lg",
        "insetLgOnLg": "pf-m-inset-lg-on-lg",
        "insetXlOnLg": "pf-m-inset-xl-on-lg",
        "inset_2xlOnLg": "pf-m-inset-2xl-on-lg",
        "inset_3xlOnLg": "pf-m-inset-3xl-on-lg",
        "insetNoneOnXl": "pf-m-inset-none-on-xl",
        "insetXsOnXl": "pf-m-inset-xs-on-xl",
        "insetSmOnXl": "pf-m-inset-sm-on-xl",
        "insetMdOnXl": "pf-m-inset-md-on-xl",
        "insetLgOnXl": "pf-m-inset-lg-on-xl",
        "insetXlOnXl": "pf-m-inset-xl-on-xl",
        "inset_2xlOnXl": "pf-m-inset-2xl-on-xl",
        "inset_3xlOnXl": "pf-m-inset-3xl-on-xl",
        "insetNoneOn_2xl": "pf-m-inset-none-on-2xl",
        "insetXsOn_2xl": "pf-m-inset-xs-on-2xl",
        "insetSmOn_2xl": "pf-m-inset-sm-on-2xl",
        "insetMdOn_2xl": "pf-m-inset-md-on-2xl",
        "insetLgOn_2xl": "pf-m-inset-lg-on-2xl",
        "insetXlOn_2xl": "pf-m-inset-xl-on-2xl",
        "inset_2xlOn_2xl": "pf-m-inset-2xl-on-2xl",
        "inset_3xlOn_2xl": "pf-m-inset-3xl-on-2xl"
      }
    };
    });

    var styles$d = unwrapExports(divider);

    (function (DividerVariant) {
        DividerVariant["hr"] = "hr";
        DividerVariant["li"] = "li";
        DividerVariant["div"] = "div";
    })(exports.DividerVariant || (exports.DividerVariant = {}));
    const Divider = (_a) => {
        var { className, component = exports.DividerVariant.hr, isVertical = false, inset } = _a, props = __rest(_a, ["className", "component", "isVertical", "inset"]);
        const Component = component;
        return (React.createElement(Component, Object.assign({ className: css(styles$d.divider, isVertical && styles$d.modifiers.vertical, formatBreakpointMods(inset, styles$d), className) }, (component !== 'hr' && { role: 'separator' }), props)));
    };
    Divider.displayName = 'Divider';

    const DropdownSeparator = (_a) => {
        var { className = '', 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ref, // Types of Ref are different for React.FC vs React.Component
        ouiaId, ouiaSafe } = _a, props = __rest(_a, ["className", "ref", "ouiaId", "ouiaSafe"]);
        const ouiaProps = useOUIAProps(DropdownSeparator.displayName, ouiaId, ouiaSafe);
        return (React.createElement(DropdownArrowContext.Consumer, null, context => (React.createElement(InternalDropdownItem, Object.assign({}, props, { context: context, component: React.createElement(Divider, { component: exports.DividerVariant.div }), className: className, role: "separator" }, ouiaProps)))));
    };
    DropdownSeparator.displayName = 'DropdownSeparator';

    const EllipsisVIconConfig = {
      name: 'EllipsisVIcon',
      height: 512,
      width: 192,
      svgPath: 'M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z',
      yOffset: 0,
      xOffset: 0,
    };

    const EllipsisVIcon = createIcon(EllipsisVIconConfig);

    class Toggle extends React.Component {
        constructor() {
            super(...arguments);
            this.buttonRef = React.createRef();
            this.componentDidMount = () => {
                document.addEventListener('mousedown', this.onDocClick);
                document.addEventListener('touchstart', this.onDocClick);
                document.addEventListener('keydown', this.onEscPress);
            };
            this.componentWillUnmount = () => {
                document.removeEventListener('mousedown', this.onDocClick);
                document.removeEventListener('touchstart', this.onDocClick);
                document.removeEventListener('keydown', this.onEscPress);
            };
            this.onDocClick = (event) => {
                const { isOpen, parentRef, onToggle, getMenuRef } = this.props;
                const menuRef = getMenuRef && getMenuRef();
                const clickedOnToggle = parentRef && parentRef.current && parentRef.current.contains(event.target);
                const clickedWithinMenu = menuRef && menuRef.contains && menuRef.contains(event.target);
                if (isOpen && !(clickedOnToggle || clickedWithinMenu)) {
                    onToggle(false, event);
                    this.buttonRef.current.focus();
                }
            };
            this.onEscPress = (event) => {
                const { parentRef, getMenuRef } = this.props;
                const keyCode = event.keyCode || event.which;
                const menuRef = getMenuRef && getMenuRef();
                const escFromToggle = parentRef && parentRef.current && parentRef.current.contains(event.target);
                const escFromWithinMenu = menuRef && menuRef.contains && menuRef.contains(event.target);
                if (this.props.isOpen &&
                    (keyCode === KEY_CODES.ESCAPE_KEY || event.key === 'Tab') &&
                    (escFromToggle || escFromWithinMenu)) {
                    this.props.onToggle(false, event);
                    this.buttonRef.current.focus();
                }
            };
            this.onKeyDown = (event) => {
                if (event.key === 'Tab' && !this.props.isOpen) {
                    return;
                }
                if (!this.props.bubbleEvent) {
                    event.stopPropagation();
                }
                event.preventDefault();
                if ((event.key === 'Tab' || event.key === 'Enter' || event.key === ' ') && this.props.isOpen) {
                    this.props.onToggle(!this.props.isOpen, event);
                }
                else if ((event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') && !this.props.isOpen) {
                    this.props.onToggle(!this.props.isOpen, event);
                    this.props.onEnter();
                }
            };
        }
        render() {
            const _a = this.props, { className, children, isOpen, isDisabled, isPlain, isPrimary, isSplitButton, onToggle, 'aria-haspopup': ariaHasPopup, 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            isActive, bubbleEvent, onEnter, parentRef, getMenuRef, 
            /* eslint-enable @typescript-eslint/no-unused-vars */
            id, type } = _a, props = __rest(_a, ["className", "children", "isOpen", "isDisabled", "isPlain", "isPrimary", "isSplitButton", "onToggle", 'aria-haspopup', "isActive", "bubbleEvent", "onEnter", "parentRef", "getMenuRef", "id", "type"]);
            return (React.createElement(DropdownContext.Consumer, null, ({ toggleClass }) => (React.createElement("button", Object.assign({}, props, { id: id, ref: this.buttonRef, className: css(isSplitButton ? styles$c.dropdownToggleButton : toggleClass || styles$c.dropdownToggle, isActive && styles$c.modifiers.active, isPlain && styles$c.modifiers.plain, isPrimary && styles$c.modifiers.primary, className), type: type || 'button', onClick: event => onToggle(!isOpen, event), "aria-expanded": isOpen, "aria-haspopup": ariaHasPopup, onKeyDown: event => this.onKeyDown(event), disabled: isDisabled }), children))));
        }
    }
    Toggle.displayName = 'Toggle';
    Toggle.defaultProps = {
        className: '',
        isOpen: false,
        isActive: false,
        isDisabled: false,
        isPlain: false,
        isPrimary: false,
        isSplitButton: false,
        onToggle: () => { },
        onEnter: () => { },
        bubbleEvent: false
    };

    const KebabToggle = (_a) => {
        var { id = '', 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        children = null, className = '', isOpen = false, 'aria-label': ariaLabel = 'Actions', parentRef = null, getMenuRef = null, isActive = false, isPlain = false, isDisabled = false, bubbleEvent = false, onToggle = () => undefined, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ref } = _a, // Types of Ref are different for React.FC vs React.Component
        props = __rest(_a, ["id", "children", "className", "isOpen", 'aria-label', "parentRef", "getMenuRef", "isActive", "isPlain", "isDisabled", "bubbleEvent", "onToggle", "ref"]);
        return (React.createElement(Toggle, Object.assign({ id: id, className: className, isOpen: isOpen, "aria-label": ariaLabel, parentRef: parentRef, getMenuRef: getMenuRef, isActive: isActive, isPlain: isPlain, isDisabled: isDisabled, onToggle: onToggle, bubbleEvent: bubbleEvent }, props),
            React.createElement(EllipsisVIcon, null)));
    };
    KebabToggle.displayName = 'KebabToggle';

    const CaretDownIconConfig = {
      name: 'CaretDownIcon',
      height: 512,
      width: 320,
      svgPath: 'M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z',
      yOffset: 0,
      xOffset: 0,
    };

    const CaretDownIcon = createIcon(CaretDownIconConfig);

    const DropdownToggle = (_a) => {
        var { id = '', children = null, className = '', isOpen = false, parentRef = null, getMenuRef = null, isDisabled = false, isPlain = false, isPrimary = false, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isActive = false, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onToggle = (_isOpen) => undefined, icon = null, toggleIndicator: ToggleIndicator = CaretDownIcon, splitButtonItems, splitButtonVariant = 'checkbox', 'aria-haspopup': ariaHasPopup, ouiaId, ouiaSafe, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ref } = _a, // Types of Ref are different for React.FC vs React.Component
        props = __rest(_a, ["id", "children", "className", "isOpen", "parentRef", "getMenuRef", "isDisabled", "isPlain", "isPrimary", "isActive", "onToggle", "icon", "toggleIndicator", "splitButtonItems", "splitButtonVariant", 'aria-haspopup', "ouiaId", "ouiaSafe", "ref"]);
        const ouiaProps = useOUIAProps(DropdownToggle.displayName, ouiaId, ouiaSafe);
        const toggle = (React.createElement(DropdownContext.Consumer, null, ({ toggleTextClass, toggleIndicatorClass, toggleIconClass }) => (React.createElement(Toggle, Object.assign({}, props, { id: id, className: className, isOpen: isOpen, parentRef: parentRef, getMenuRef: getMenuRef, isActive: isActive, isDisabled: isDisabled, isPlain: isPlain, isPrimary: isPrimary, onToggle: onToggle, "aria-haspopup": ariaHasPopup }, ouiaProps, (splitButtonItems && { isSplitButton: true, 'aria-label': props['aria-label'] || 'Select' })),
            icon && React.createElement("span", { className: css(toggleIconClass) }, icon),
            children && React.createElement("span", { className: ToggleIndicator && css(toggleTextClass) }, children),
            ToggleIndicator && (React.createElement("span", { className: css(!splitButtonItems && toggleIndicatorClass) },
                React.createElement(ToggleIndicator, null)))))));
        if (splitButtonItems) {
            return (React.createElement("div", { className: css(styles$c.dropdownToggle, styles$c.modifiers.splitButton, splitButtonVariant === 'action' && styles$c.modifiers.action, isDisabled && styles$c.modifiers.disabled) },
                splitButtonItems,
                toggle));
        }
        return toggle;
    };
    DropdownToggle.displayName = 'DropdownToggle';

    class DropdownToggleCheckbox extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = (event) => {
                this.props.onChange(event.target.checked, event);
            };
            this.calculateChecked = () => {
                const { isChecked, checked } = this.props;
                if (isChecked === null) {
                    // return false here and the indeterminate state will be set to true through the ref
                    return false;
                }
                else if (isChecked !== undefined) {
                    return isChecked;
                }
                return checked;
            };
            this.state = {
                ouiaStateId: getDefaultOUIAId(DropdownToggleCheckbox.displayName)
            };
        }
        render() {
            const _a = this.props, { className, isValid, isDisabled, isChecked, children, ouiaId, ouiaSafe, 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            onChange, checked } = _a, 
            /* eslint-enable @typescript-eslint/no-unused-vars */
            props = __rest(_a, ["className", "isValid", "isDisabled", "isChecked", "children", "ouiaId", "ouiaSafe", "onChange", "checked"]);
            const text = children && (React.createElement("span", { className: css(styles$c.dropdownToggleText, className), "aria-hidden": "true", id: `${props.id}-text` }, children));
            return (React.createElement("label", { className: css(styles$c.dropdownToggleCheck, className), htmlFor: props.id },
                React.createElement("input", Object.assign({}, props, (this.calculateChecked() !== undefined && { onChange: this.handleChange }), { type: "checkbox", ref: elem => elem && (elem.indeterminate = isChecked === null), "aria-invalid": !isValid, disabled: isDisabled, checked: this.calculateChecked() }, getOUIAProps(DropdownToggleCheckbox.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe))),
                text));
        }
    }
    DropdownToggleCheckbox.displayName = 'DropdownToggleCheckbox';
    DropdownToggleCheckbox.defaultProps = {
        className: '',
        isValid: true,
        isDisabled: false,
        onChange: () => undefined
    };

    class DropdownToggleAction extends React.Component {
        render() {
            const _a = this.props, { id, className, onClick, isDisabled, children } = _a, props = __rest(_a, ["id", "className", "onClick", "isDisabled", "children"]);
            return (React.createElement("button", Object.assign({ id: id, className: css(styles$c.dropdownToggleButton, className), onClick: onClick }, (isDisabled && { disabled: true, 'aria-disabled': true }), props), children));
        }
    }
    DropdownToggleAction.displayName = 'DropdownToggleAction';
    DropdownToggleAction.defaultProps = {
        className: '',
        isDisabled: false,
        onClick: () => { }
    };

    const ApplicationLauncherGroup = (_a) => {
        var { children } = _a, props = __rest(_a, ["children"]);
        return React.createElement(DropdownGroup, Object.assign({}, props), children);
    };
    ApplicationLauncherGroup.displayName = 'ApplicationLauncherGroup';

    const ApplicationLauncherSeparator = (_a) => {
        var props = __rest(_a, ["children"]);
        return React.createElement(DropdownSeparator, Object.assign({}, props));
    };
    ApplicationLauncherSeparator.displayName = 'ApplicationLauncherSeparator';

    const ApplicationLauncherIcon = (_a) => {
        var { 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        className = '', children } = _a, props = __rest(_a, ["className", "children"]);
        return (React.createElement("span", Object.assign({ className: css(styles$b.appLauncherMenuItemIcon) }, props), children));
    };
    ApplicationLauncherIcon.displayName = 'ApplicationLauncherIcon';

    const ApplicationLauncherText = (_a) => {
        var { className = '', children } = _a, props = __rest(_a, ["className", "children"]);
        return (React.createElement("span", Object.assign({ className: css('pf-c-app-launcher__menu-item-text', className) }, props), children));
    };
    ApplicationLauncherText.displayName = 'ApplicationLauncherText';

    const ExternalLinkAltIconConfig = {
      name: 'ExternalLinkAltIcon',
      height: 512,
      width: 512,
      svgPath: 'M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z',
      yOffset: 0,
      xOffset: 0,
    };

    const ExternalLinkAltIcon = createIcon(ExternalLinkAltIconConfig);

    const ApplicationLauncherItemContext = React.createContext({ isExternal: false, icon: null });

    const ApplicationLauncherContent = ({ children }) => (React.createElement(ApplicationLauncherItemContext.Consumer, null, ({ isExternal, icon }) => (React.createElement(React.Fragment, null,
        icon && React.createElement(ApplicationLauncherIcon, null, icon),
        icon ? React.createElement(ApplicationLauncherText, null, children) : children,
        isExternal && (React.createElement(React.Fragment, null,
            React.createElement("span", { className: css(styles$b.appLauncherMenuItemExternalIcon) },
                React.createElement(ExternalLinkAltIcon, null)),
            React.createElement("span", { className: css(a11yStyles.screenReader) }, "(opens new window)")))))));
    ApplicationLauncherContent.displayName = 'ApplicationLauncherContent';

    const ApplicationLauncherContext = React.createContext({
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onFavorite: (itemId, isFavorite) => { }
    });

    const StarIconConfig = {
      name: 'StarIcon',
      height: 512,
      width: 576,
      svgPath: 'M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z',
      yOffset: 0,
      xOffset: 0,
    };

    const StarIcon = createIcon(StarIconConfig);

    const ApplicationLauncherItem = (_a) => {
        var { className = '', id, children, icon = null, isExternal = false, href, tooltip = null, tooltipProps = null, component = 'a', isFavorite = null, ariaIsFavoriteLabel = 'starred', ariaIsNotFavoriteLabel = 'not starred', customChild, enterTriggersArrowDown = false } = _a, props = __rest(_a, ["className", "id", "children", "icon", "isExternal", "href", "tooltip", "tooltipProps", "component", "isFavorite", "ariaIsFavoriteLabel", "ariaIsNotFavoriteLabel", "customChild", "enterTriggersArrowDown"]);
        return (React.createElement(ApplicationLauncherItemContext.Provider, { value: { isExternal, icon } },
            React.createElement(ApplicationLauncherContext.Consumer, null, ({ onFavorite }) => (React.createElement(DropdownItem, Object.assign({ id: id, component: component, href: href || null, className: css(isExternal && styles$b.modifiers.external, isFavorite !== null && styles$b.modifiers.link, className), listItemClassName: css(onFavorite && styles$b.appLauncherMenuWrapper, isFavorite && styles$b.modifiers.favorite), tooltip: tooltip, tooltipProps: tooltipProps }, (enterTriggersArrowDown === true && { enterTriggersArrowDown }), (customChild && { customChild }), (isFavorite !== null && {
                additionalChild: (React.createElement("button", { className: css(styles$b.appLauncherMenuItem, styles$b.modifiers.action), "aria-label": isFavorite ? ariaIsFavoriteLabel : ariaIsNotFavoriteLabel, onClick: () => {
                        onFavorite(id, isFavorite);
                    } },
                    React.createElement(StarIcon, null)))
            }), props), children && React.createElement(ApplicationLauncherContent, null, children))))));
    };
    ApplicationLauncherItem.displayName = 'ApplicationLauncherItem';

    class ApplicationLauncher extends React.Component {
        constructor() {
            super(...arguments);
            this.createSearchBox = () => {
                const { onSearch, searchPlaceholderText, searchProps } = this.props;
                return (React.createElement("div", { key: "search", className: css(styles$b.appLauncherMenuSearch) },
                    React.createElement(ApplicationLauncherItem, { customChild: React.createElement("input", Object.assign({ type: "search", className: css(formStyles.formControl), placeholder: searchPlaceholderText, onChange: e => onSearch(e.target.value) }, searchProps)) })));
            };
            this.createRenderableFavorites = () => {
                const { items, isGrouped, favorites } = this.props;
                if (isGrouped) {
                    const favoriteItems = [];
                    items.forEach(group => group.props.children
                        .filter(item => favorites.includes(item.props.id))
                        .map(item => favoriteItems.push(React.cloneElement(item, { isFavorite: true, enterTriggersArrowDown: true }))));
                    return favoriteItems;
                }
                return items
                    .filter(item => favorites.includes(item.props.id))
                    .map(item => React.cloneElement(item, { isFavorite: true, enterTriggersArrowDown: true }));
            };
            this.extendItemsWithFavorite = () => {
                const { items, isGrouped, favorites } = this.props;
                if (isGrouped) {
                    return items.map(group => React.cloneElement(group, {
                        children: React.Children.map(group.props.children, item => {
                            if (item.type === ApplicationLauncherSeparator) {
                                return item;
                            }
                            return React.cloneElement(item, {
                                isFavorite: favorites.some(favoriteId => favoriteId === item.props.id)
                            });
                        })
                    }));
                }
                return items.map(item => React.cloneElement(item, {
                    isFavorite: favorites.some(favoriteId => favoriteId === item.props.id)
                }));
            };
        }
        render() {
            const _a = this.props, { 'aria-label': ariaLabel, isOpen, onToggle, toggleIcon, toggleId, onSelect, isDisabled, className, isGrouped, favorites, onFavorite, onSearch, items, 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            searchPlaceholderText, searchProps, ref, 
            /* eslint-enable @typescript-eslint/no-unused-vars */
            favoritesLabel, searchNoResultsText, menuAppendTo } = _a, props = __rest(_a, ['aria-label', "isOpen", "onToggle", "toggleIcon", "toggleId", "onSelect", "isDisabled", "className", "isGrouped", "favorites", "onFavorite", "onSearch", "items", "searchPlaceholderText", "searchProps", "ref", "favoritesLabel", "searchNoResultsText", "menuAppendTo"]);
            let renderableItems = [];
            if (onFavorite) {
                let favoritesGroup = [];
                let renderableFavorites = [];
                if (favorites.length > 0) {
                    renderableFavorites = this.createRenderableFavorites();
                    favoritesGroup = [
                        React.createElement(ApplicationLauncherGroup, { key: "favorites", label: favoritesLabel },
                            renderableFavorites,
                            React.createElement(ApplicationLauncherSeparator, { key: "separator" }))
                    ];
                }
                if (renderableFavorites.length > 0) {
                    renderableItems = favoritesGroup.concat(this.extendItemsWithFavorite());
                }
                else {
                    renderableItems = this.extendItemsWithFavorite();
                }
            }
            else {
                renderableItems = items;
            }
            if (items.length === 0) {
                renderableItems = [
                    React.createElement(ApplicationLauncherGroup, { key: "no-results-group" },
                        React.createElement(ApplicationLauncherItem, { key: "no-results" }, searchNoResultsText))
                ];
            }
            if (onSearch) {
                renderableItems = [this.createSearchBox(), ...renderableItems];
            }
            return (React.createElement(ApplicationLauncherContext.Provider, { value: { onFavorite } },
                React.createElement(DropdownContext.Provider, { value: {
                        onSelect,
                        menuClass: styles$b.appLauncherMenu,
                        itemClass: styles$b.appLauncherMenuItem,
                        toggleClass: styles$b.appLauncherToggle,
                        baseClass: styles$b.appLauncher,
                        baseComponent: 'nav',
                        sectionClass: styles$b.appLauncherGroup,
                        sectionTitleClass: styles$b.appLauncherGroupTitle,
                        sectionComponent: 'section',
                        disabledClass: styles$b.modifiers.disabled,
                        ouiaComponentType: ApplicationLauncher.displayName
                    } },
                    React.createElement(DropdownWithContext, Object.assign({}, props, { dropdownItems: renderableItems, isOpen: isOpen, className: className, "aria-label": ariaLabel, menuAppendTo: menuAppendTo, toggle: React.createElement(DropdownToggle, { id: toggleId, toggleIndicator: null, isOpen: isOpen, onToggle: onToggle, isDisabled: isDisabled, "aria-label": ariaLabel }, toggleIcon), isGrouped: isGrouped })))));
        }
    }
    ApplicationLauncher.displayName = 'ApplicationLauncher';
    ApplicationLauncher.defaultProps = {
        className: '',
        isDisabled: false,
        direction: exports.DropdownDirection.down,
        favorites: [],
        isOpen: false,
        position: exports.DropdownPosition.left,
        /* eslint-disable @typescript-eslint/no-unused-vars */
        onSelect: (_event) => undefined,
        onToggle: (_value) => undefined,
        /* eslint-enable @typescript-eslint/no-unused-vars */
        'aria-label': 'Application launcher',
        isGrouped: false,
        toggleIcon: React.createElement(ThIcon, null),
        searchPlaceholderText: 'Filter by name...',
        searchNoResultsText: 'No results found',
        favoritesLabel: 'Favorites',
        menuAppendTo: 'inline'
    };

    var avatar = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "avatar": "pf-c-avatar"
    };
    });

    var styles$e = unwrapExports(avatar);

    const Avatar = (_a) => {
        var { className = '', src = '', alt } = _a, props = __rest(_a, ["className", "src", "alt"]);
        return React.createElement("img", Object.assign({}, props, { src: src, alt: alt, className: css(styles$e.avatar, className) }));
    };
    Avatar.displayName = 'Avatar';

    const c_background_image_BackgroundImage = {
      "name": "--pf-c-background-image--BackgroundImage",
      "value": "url(\"../../assets/images/pfbg_576.jpg\")",
      "var": "var(--pf-c-background-image--BackgroundImage)"
    };

    const c_background_image_BackgroundImage_2x = {
      "name": "--pf-c-background-image--BackgroundImage-2x",
      "value": "url(\"../../assets/images/pfbg_576@2x.jpg\")",
      "var": "var(--pf-c-background-image--BackgroundImage-2x)"
    };

    const c_background_image_BackgroundImage_sm = {
      "name": "--pf-c-background-image--BackgroundImage--sm",
      "value": "url(\"../../assets/images/pfbg_768.jpg\")",
      "var": "var(--pf-c-background-image--BackgroundImage--sm)"
    };

    const c_background_image_BackgroundImage_sm_2x = {
      "name": "--pf-c-background-image--BackgroundImage--sm-2x",
      "value": "url(\"../../assets/images/pfbg_768@2x.jpg\")",
      "var": "var(--pf-c-background-image--BackgroundImage--sm-2x)"
    };

    const c_background_image_BackgroundImage_lg = {
      "name": "--pf-c-background-image--BackgroundImage--lg",
      "value": "url(\"../../assets/images/pfbg_2000.jpg\")",
      "var": "var(--pf-c-background-image--BackgroundImage--lg)"
    };

    const c_background_image_Filter = {
      "name": "--pf-c-background-image--Filter",
      "value": "url(\"#image_overlay\")",
      "var": "var(--pf-c-background-image--Filter)"
    };

    var backgroundImage = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "backgroundImage": "pf-c-background-image",
      "backgroundImageFilter": "pf-c-background-image__filter"
    };
    });

    var styles$f = unwrapExports(backgroundImage);

    const defaultFilter = (React.createElement("filter", null,
        React.createElement("feColorMatrix", { type: "matrix", values: "1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0" }),
        React.createElement("feComponentTransfer", { colorInterpolationFilters: "sRGB", result: "duotone" },
            React.createElement("feFuncR", { type: "table", tableValues: "0.086274509803922 0.43921568627451" }),
            React.createElement("feFuncG", { type: "table", tableValues: "0.086274509803922 0.43921568627451" }),
            React.createElement("feFuncB", { type: "table", tableValues: "0.086274509803922 0.43921568627451" }),
            React.createElement("feFuncA", { type: "table", tableValues: "0 1" }))));
    let filterCounter = 0;
    const BackgroundImage = (_a) => {
        var { className, src, filter = defaultFilter } = _a, props = __rest(_a, ["className", "src", "filter"]);
        const getUrlValue = (size) => {
            if (typeof src === 'string') {
                return `url(${src})`;
            }
            else if (typeof src === 'object') {
                return `url(${src[size]})`;
            }
            return '';
        };
        const filterId = `patternfly-background-image-filter-overlay${filterCounter++}`;
        const style = {
            [c_background_image_BackgroundImage.name]: getUrlValue('xs'),
            [c_background_image_BackgroundImage_2x.name]: getUrlValue('xs2x'),
            [c_background_image_BackgroundImage_sm.name]: getUrlValue('sm'),
            [c_background_image_BackgroundImage_sm_2x.name]: getUrlValue('sm2x'),
            [c_background_image_BackgroundImage_lg.name]: getUrlValue('lg'),
            [c_background_image_Filter.name]: `url(#${filterId})`
        };
        return (React.createElement("div", Object.assign({ className: css(styles$f.backgroundImage, className), style: style }, props),
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "pf-c-background-image__filter", width: "0", height: "0" }, React.cloneElement(filter, { id: filterId }))));
    };
    BackgroundImage.displayName = 'BackgroundImage';

    var badge = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "badge": "pf-c-badge",
      "modifiers": {
        "read": "pf-m-read",
        "unread": "pf-m-unread"
      }
    };
    });

    var badgeStyles = unwrapExports(badge);

    const Badge = (_a) => {
        var { isRead = false, className = '', children = '' } = _a, props = __rest(_a, ["isRead", "className", "children"]);
        return (React.createElement("span", Object.assign({}, props, { className: css(badgeStyles.badge, (isRead ? badgeStyles.modifiers.read : badgeStyles.modifiers.unread), className) }), children));
    };
    Badge.displayName = 'Badge';

    var banner = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "banner": "pf-c-banner",
      "button": "pf-c-button",
      "card": "pf-c-card",
      "modifiers": {
        "info": "pf-m-info",
        "warning": "pf-m-warning",
        "danger": "pf-m-danger",
        "success": "pf-m-success",
        "sticky": "pf-m-sticky"
      }
    };
    });

    var styles$g = unwrapExports(banner);

    const Banner = ({ children, className, variant = 'default', isSticky = false }) => (React.createElement("div", { className: css(styles$g.banner, styles$g.modifiers[variant], isSticky && styles$g.modifiers.sticky, className) }, children));
    Banner.displayName = 'Banner';

    const Brand = (_a) => {
        var { className = '', src = '', alt } = _a, props = __rest(_a, ["className", "src", "alt"]);
        return (
        /** the brand component currently contains no styling the 'pf-c-brand' string will be used for the className */
        React.createElement("img", Object.assign({}, props, { className: css('pf-c-brand', className), src: src, alt: alt })));
    };
    Brand.displayName = 'Brand';

    var breadcrumb = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "breadcrumb": "pf-c-breadcrumb",
      "breadcrumbHeading": "pf-c-breadcrumb__heading",
      "breadcrumbItem": "pf-c-breadcrumb__item",
      "breadcrumbItemDivider": "pf-c-breadcrumb__item-divider",
      "breadcrumbLink": "pf-c-breadcrumb__link",
      "breadcrumbList": "pf-c-breadcrumb__list",
      "modifiers": {
        "current": "pf-m-current",
        "overpassFont": "pf-m-overpass-font"
      }
    };
    });

    var styles$h = unwrapExports(breadcrumb);

    const Breadcrumb = (_a) => {
        var { children = null, className = '', 'aria-label': ariaLabel = 'Breadcrumb', ouiaId, ouiaSafe = true } = _a, props = __rest(_a, ["children", "className", 'aria-label', "ouiaId", "ouiaSafe"]);
        const ouiaProps = useOUIAProps(Breadcrumb.displayName, ouiaId, ouiaSafe);
        return (React.createElement("nav", Object.assign({}, props, { "aria-label": ariaLabel, className: css(styles$h.breadcrumb, className) }, ouiaProps),
            React.createElement("ol", { className: styles$h.breadcrumbList }, React.Children.map(children, (child, index) => {
                const showDivider = index > 0;
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { showDivider });
                }
                return child;
            }))));
    };
    Breadcrumb.displayName = 'Breadcrumb';

    const BreadcrumbItem = (_a) => {
        var { children = null, className = '', to = null, isActive = false, showDivider, target = null, component = 'a' } = _a, props = __rest(_a, ["children", "className", "to", "isActive", "showDivider", "target", "component"]);
        const Component = component;
        return (React.createElement("li", Object.assign({}, props, { className: css(styles$h.breadcrumbItem, className) }),
            showDivider && (React.createElement("span", { className: styles$h.breadcrumbItemDivider },
                React.createElement(AngleRightIcon, null))),
            to && (React.createElement(Component, { href: to, target: target, className: css(styles$h.breadcrumbLink, isActive && styles$h.modifiers.current), "aria-current": isActive ? 'page' : undefined }, children)),
            !to && React.createElement(React.Fragment, null, children)));
    };
    BreadcrumbItem.displayName = 'BreadcrumbItem';

    const BreadcrumbHeading = (_a) => {
        var { children = null, className = '', to = null, target = null, component = 'a', showDivider } = _a, props = __rest(_a, ["children", "className", "to", "target", "component", "showDivider"]);
        const Component = component;
        return (React.createElement("li", Object.assign({}, props, { className: css(styles$h.breadcrumbItem, className) }),
            React.createElement("h1", { className: styles$h.breadcrumbHeading },
                showDivider && (React.createElement("span", { className: styles$h.breadcrumbItemDivider },
                    React.createElement(AngleRightIcon, null))),
                to && (React.createElement(Component, { href: to, target: target, className: css(styles$h.breadcrumbLink, styles$h.modifiers.current), "aria-current": "page" }, children)),
                !to && React.createElement(React.Fragment, null, children))));
    };
    BreadcrumbHeading.displayName = 'BreadcrumbHeading';

    (function (TextInputTypes) {
        TextInputTypes["text"] = "text";
        TextInputTypes["date"] = "date";
        TextInputTypes["datetimeLocal"] = "datetime-local";
        TextInputTypes["email"] = "email";
        TextInputTypes["month"] = "month";
        TextInputTypes["number"] = "number";
        TextInputTypes["password"] = "password";
        TextInputTypes["search"] = "search";
        TextInputTypes["tel"] = "tel";
        TextInputTypes["time"] = "time";
        TextInputTypes["url"] = "url";
    })(exports.TextInputTypes || (exports.TextInputTypes = {}));
    class TextInputBase extends React.Component {
        constructor(props) {
            super(props);
            this.inputRef = React.createRef();
            this.handleChange = (event) => {
                if (this.props.onChange) {
                    this.props.onChange(event.currentTarget.value, event);
                }
            };
            this.handleResize = () => {
                const inputRef = this.props.innerRef || this.inputRef;
                if (inputRef && inputRef.current) {
                    trimLeft(inputRef.current, String(this.props.value));
                }
            };
            this.restoreText = () => {
                const inputRef = this.props.innerRef || this.inputRef;
                // restore the value
                inputRef.current.value = String(this.props.value);
                // make sure we still see the rightmost value to preserve cursor click position
                inputRef.current.scrollLeft = inputRef.current.scrollWidth;
            };
            this.onFocus = (event) => {
                const { isLeftTruncated, onFocus } = this.props;
                if (isLeftTruncated) {
                    this.restoreText();
                }
                onFocus && onFocus(event);
            };
            this.onBlur = (event) => {
                const { isLeftTruncated, onBlur } = this.props;
                if (isLeftTruncated) {
                    this.handleResize();
                }
                onBlur && onBlur(event);
            };
            if (!props.id && !props['aria-label'] && !props['aria-labelledby']) {
                // eslint-disable-next-line no-console
                console.error('Text input:', 'Text input requires either an id or aria-label to be specified');
            }
        }
        componentDidMount() {
            if (this.props.isLeftTruncated) {
                this.handleResize();
                window.addEventListener('resize', debounce(this.handleResize, 250));
            }
        }
        componentWillUnmount() {
            if (this.props.isLeftTruncated) {
                window.removeEventListener('resize', debounce(this.handleResize, 250));
            }
        }
        render() {
            const _a = this.props, { innerRef, className, type, value, validated, 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            onChange, onFocus, onBlur, isLeftTruncated, 
            /* eslint-enable @typescript-eslint/no-unused-vars */
            isReadOnly, isRequired, isDisabled, iconVariant, customIconUrl, customIconDimensions } = _a, props = __rest(_a, ["innerRef", "className", "type", "value", "validated", "onChange", "onFocus", "onBlur", "isLeftTruncated", "isReadOnly", "isRequired", "isDisabled", "iconVariant", "customIconUrl", "customIconDimensions"]);
            const customIconStyle = {};
            if (customIconUrl) {
                customIconStyle.backgroundImage = `url('${customIconUrl}')`;
            }
            if (customIconDimensions) {
                customIconStyle.backgroundSize = customIconDimensions;
            }
            return (React.createElement("input", Object.assign({}, props, { onFocus: this.onFocus, onBlur: this.onBlur, className: css(formStyles.formControl, validated === exports.ValidatedOptions.success && formStyles.modifiers.success, validated === exports.ValidatedOptions.warning && formStyles.modifiers.warning, ((iconVariant && iconVariant !== 'search') || customIconUrl) && formStyles.modifiers.icon, iconVariant && formStyles.modifiers[iconVariant], className), onChange: this.handleChange, type: type, value: value, "aria-invalid": validated === exports.ValidatedOptions.error, required: isRequired, disabled: isDisabled, readOnly: isReadOnly, ref: innerRef || this.inputRef }, ((customIconUrl || customIconDimensions) && { style: customIconStyle }))));
        }
    }
    TextInputBase.displayName = 'TextInputBase';
    TextInputBase.defaultProps = {
        'aria-label': null,
        className: '',
        isRequired: false,
        validated: 'default',
        isDisabled: false,
        isReadOnly: false,
        type: exports.TextInputTypes.text,
        isLeftTruncated: false,
        onChange: () => undefined
    };
    const TextInput = React.forwardRef((props, ref) => (React.createElement(TextInputBase, Object.assign({}, props, { innerRef: ref }))));
    TextInput.displayName = 'TextInput';

    var select = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "check": "pf-c-check",
      "checkLabel": "pf-c-check__label",
      "chipGroup": "pf-c-chip-group",
      "divider": "pf-c-divider",
      "formControl": "pf-c-form-control",
      "modifiers": {
        "disabled": "pf-m-disabled",
        "active": "pf-m-active",
        "expanded": "pf-m-expanded",
        "plain": "pf-m-plain",
        "typeahead": "pf-m-typeahead",
        "top": "pf-m-top",
        "alignRight": "pf-m-align-right",
        "favorite": "pf-m-favorite",
        "favoriteAction": "pf-m-favorite-action",
        "focus": "pf-m-focus",
        "link": "pf-m-link",
        "action": "pf-m-action",
        "selected": "pf-m-selected",
        "description": "pf-m-description"
      },
      "select": "pf-c-select",
      "selectMenu": "pf-c-select__menu",
      "selectMenuFieldset": "pf-c-select__menu-fieldset",
      "selectMenuGroup": "pf-c-select__menu-group",
      "selectMenuGroupTitle": "pf-c-select__menu-group-title",
      "selectMenuItem": "pf-c-select__menu-item",
      "selectMenuItemActionIcon": "pf-c-select__menu-item-action-icon",
      "selectMenuItemDescription": "pf-c-select__menu-item-description",
      "selectMenuItemIcon": "pf-c-select__menu-item-icon",
      "selectMenuItemMain": "pf-c-select__menu-item-main",
      "selectMenuItemMatch": "pf-c-select__menu-item--match",
      "selectMenuSearch": "pf-c-select__menu-search",
      "selectMenuWrapper": "pf-c-select__menu-wrapper",
      "selectToggle": "pf-c-select__toggle",
      "selectToggleArrow": "pf-c-select__toggle-arrow",
      "selectToggleBadge": "pf-c-select__toggle-badge",
      "selectToggleButton": "pf-c-select__toggle-button",
      "selectToggleClear": "pf-c-select__toggle-clear",
      "selectToggleIcon": "pf-c-select__toggle-icon",
      "selectToggleText": "pf-c-select__toggle-text",
      "selectToggleTypeahead": "pf-c-select__toggle-typeahead",
      "selectToggleWrapper": "pf-c-select__toggle-wrapper"
    };
    });

    var styles$i = unwrapExports(select);

    const TimesCircleIconConfig = {
      name: 'TimesCircleIcon',
      height: 512,
      width: 512,
      svgPath: 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z',
      yOffset: 0,
      xOffset: 0,
    };

    const TimesCircleIcon = createIcon(TimesCircleIconConfig);

    var form = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "form": "pf-c-form",
      "formActions": "pf-c-form__actions",
      "formFieldGroup": "pf-c-form__field-group",
      "formFieldGroupBody": "pf-c-form__field-group-body",
      "formFieldGroupHeader": "pf-c-form__field-group-header",
      "formFieldGroupHeaderActions": "pf-c-form__field-group-header-actions",
      "formFieldGroupHeaderDescription": "pf-c-form__field-group-header-description",
      "formFieldGroupHeaderMain": "pf-c-form__field-group-header-main",
      "formFieldGroupHeaderTitle": "pf-c-form__field-group-header-title",
      "formFieldGroupHeaderTitleText": "pf-c-form__field-group-header-title-text",
      "formFieldGroupToggle": "pf-c-form__field-group-toggle",
      "formFieldGroupToggleButton": "pf-c-form__field-group-toggle-button",
      "formFieldGroupToggleIcon": "pf-c-form__field-group-toggle-icon",
      "formFieldset": "pf-c-form__fieldset",
      "formGroup": "pf-c-form__group",
      "formGroupControl": "pf-c-form__group-control",
      "formGroupLabel": "pf-c-form__group-label",
      "formGroupLabelHelp": "pf-c-form__group-label-help",
      "formHelperText": "pf-c-form__helper-text",
      "formHelperTextIcon": "pf-c-form__helper-text-icon",
      "formLabel": "pf-c-form__label",
      "formLabelRequired": "pf-c-form__label-required",
      "formLabelText": "pf-c-form__label-text",
      "formSection": "pf-c-form__section",
      "modifiers": {
        "horizontal": "pf-m-horizontal",
        "alignRight": "pf-m-align-right",
        "noPaddingTop": "pf-m-no-padding-top",
        "limitWidth": "pf-m-limit-width",
        "action": "pf-m-action",
        "disabled": "pf-m-disabled",
        "inline": "pf-m-inline",
        "error": "pf-m-error",
        "success": "pf-m-success",
        "warning": "pf-m-warning",
        "inactive": "pf-m-inactive",
        "hidden": "pf-m-hidden",
        "expanded": "pf-m-expanded"
      }
    };
    });

    var styles$j = unwrapExports(form);

    var check = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "check": "pf-c-check",
      "checkDescription": "pf-c-check__description",
      "checkInput": "pf-c-check__input",
      "checkLabel": "pf-c-check__label",
      "modifiers": {
        "disabled": "pf-m-disabled"
      }
    };
    });

    var styles$k = unwrapExports(check);

    const CheckIconConfig = {
      name: 'CheckIcon',
      height: 512,
      width: 512,
      svgPath: 'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z',
      yOffset: 0,
      xOffset: 0,
    };

    const CheckIcon = createIcon(CheckIconConfig);

    const SelectContext = React.createContext(null);
    const SelectProvider = SelectContext.Provider;
    const SelectConsumer = SelectContext.Consumer;
    (function (SelectVariant) {
        SelectVariant["single"] = "single";
        SelectVariant["checkbox"] = "checkbox";
        SelectVariant["typeahead"] = "typeahead";
        SelectVariant["typeaheadMulti"] = "typeaheadmulti";
        SelectVariant["panel"] = "panel";
    })(exports.SelectVariant || (exports.SelectVariant = {}));
    (function (SelectDirection) {
        SelectDirection["up"] = "up";
        SelectDirection["down"] = "down";
    })(exports.SelectDirection || (exports.SelectDirection = {}));
    const KeyTypes = {
        Tab: 'Tab',
        Space: ' ',
        Escape: 'Escape',
        Enter: 'Enter',
        ArrowUp: 'ArrowUp',
        ArrowDown: 'ArrowDown',
        ArrowLeft: 'ArrowLeft',
        ArrowRight: 'ArrowRight'
    };

    class SelectOption extends React.Component {
        constructor() {
            super(...arguments);
            this.ref = React.createRef();
            this.liRef = React.createRef();
            this.favoriteRef = React.createRef();
            this.onKeyDown = (event, innerIndex, onEnter) => {
                const { index, keyHandler } = this.props;
                if (event.key === KeyTypes.Tab) {
                    keyHandler(index, innerIndex, 'tab');
                }
                event.preventDefault();
                if (event.key === KeyTypes.ArrowUp) {
                    keyHandler(index, innerIndex, 'up');
                }
                else if (event.key === KeyTypes.ArrowDown) {
                    keyHandler(index, innerIndex, 'down');
                }
                else if (event.key === KeyTypes.ArrowLeft) {
                    keyHandler(index, innerIndex, 'left');
                }
                else if (event.key === KeyTypes.ArrowRight) {
                    keyHandler(index, innerIndex, 'right');
                }
                else if (event.key === KeyTypes.Enter) {
                    if (onEnter !== undefined) {
                        onEnter();
                    }
                    else {
                        this.ref.current.click();
                        if (this.context.variant === exports.SelectVariant.checkbox) {
                            this.ref.current.focus();
                        }
                    }
                }
            };
        }
        componentDidMount() {
            this.props.sendRef(this.props.isDisabled ? null : this.ref.current, this.props.isDisabled ? null : this.favoriteRef.current, this.props.isDisabled ? null : this.liRef.current, this.props.index);
        }
        componentDidUpdate() {
            this.props.sendRef(this.props.isDisabled ? null : this.ref.current, this.props.isDisabled ? null : this.favoriteRef.current, this.props.isDisabled ? null : this.liRef.current, this.props.index);
        }
        render() {
            /* eslint-disable @typescript-eslint/no-unused-vars */
            const _a = this.props, { children, className, id, description, value, onClick, isDisabled, isPlaceholder, isNoResultsOption, isSelected, isChecked, isFocused, sendRef, keyHandler, index, component, inputId, isFavorite, ariaIsFavoriteLabel = 'starred', ariaIsNotFavoriteLabel = 'not starred' } = _a, props = __rest(_a, ["children", "className", "id", "description", "value", "onClick", "isDisabled", "isPlaceholder", "isNoResultsOption", "isSelected", "isChecked", "isFocused", "sendRef", "keyHandler", "index", "component", "inputId", "isFavorite", "ariaIsFavoriteLabel", "ariaIsNotFavoriteLabel"]);
            /* eslint-enable @typescript-eslint/no-unused-vars */
            const Component = component;
            if (!id && isFavorite !== null) {
                // eslint-disable-next-line no-console
                console.error('Please provide an id to use the favorites feature.');
            }
            const generatedId = id || getUniqueId('select-option');
            const favoriteButton = (onFavorite) => (React.createElement("button", { className: css(styles$i.selectMenuItem, styles$i.modifiers.action, styles$i.modifiers.favoriteAction), "aria-label": isFavorite ? ariaIsFavoriteLabel : ariaIsNotFavoriteLabel, onClick: () => {
                    onFavorite(generatedId.replace('favorite-', ''), isFavorite);
                }, onKeyDown: event => {
                    this.onKeyDown(event, 1, () => onFavorite(generatedId.replace('favorite-', ''), isFavorite));
                }, ref: this.favoriteRef },
                React.createElement("span", { className: css(styles$i.selectMenuItemActionIcon) },
                    React.createElement(StarIcon, null))));
            return (React.createElement(SelectConsumer, null, ({ onSelect, onClose, variant, inputIdPrefix, onFavorite }) => (React.createElement(React.Fragment, null,
                variant !== exports.SelectVariant.checkbox && (React.createElement("li", { id: generatedId, role: "presentation", className: css(styles$i.selectMenuWrapper, isFavorite && styles$i.modifiers.favorite, isFocused && styles$i.modifiers.focus), ref: this.liRef },
                    React.createElement(Component, Object.assign({}, props, { className: css(styles$i.selectMenuItem, isSelected && styles$i.modifiers.selected, isDisabled && styles$i.modifiers.disabled, description && styles$i.modifiers.description, isFavorite !== null && styles$i.modifiers.link, className), onClick: (event) => {
                            if (!isDisabled) {
                                onClick(event);
                                onSelect(event, value, isPlaceholder);
                                onClose();
                            }
                        }, role: "option", "aria-selected": isSelected || null, ref: this.ref, onKeyDown: (event) => {
                            this.onKeyDown(event, 0);
                        }, type: "button" }),
                        description && (React.createElement(React.Fragment, null,
                            React.createElement("span", { className: css(styles$i.selectMenuItemMain) },
                                children || value.toString(),
                                isSelected && (React.createElement("span", { className: css(styles$i.selectMenuItemIcon) },
                                    React.createElement(CheckIcon, { "aria-hidden": true })))),
                            React.createElement("span", { className: css(styles$i.selectMenuItemDescription) }, description))),
                        !description && (React.createElement(React.Fragment, null,
                            children || value.toString(),
                            isSelected && (React.createElement("span", { className: css(styles$i.selectMenuItemIcon) },
                                React.createElement(CheckIcon, { "aria-hidden": true })))))),
                    isFavorite !== null && id && favoriteButton(onFavorite))),
                variant === exports.SelectVariant.checkbox && !isNoResultsOption && (React.createElement("label", Object.assign({}, props, { className: css(styles$k.check, styles$i.selectMenuItem, isDisabled && styles$i.modifiers.disabled, description && styles$i.modifiers.description, className), onKeyDown: (event) => {
                        this.onKeyDown(event, 0);
                    } }),
                    React.createElement("input", { id: inputId || `${inputIdPrefix}-${value.toString()}`, className: css(styles$k.checkInput), type: "checkbox", onChange: event => {
                            if (!isDisabled) {
                                onClick(event);
                                onSelect(event, value);
                            }
                        }, ref: this.ref, checked: isChecked || false, disabled: isDisabled }),
                    React.createElement("span", { className: css(styles$k.checkLabel, isDisabled && styles$i.modifiers.disabled) }, children || value.toString()),
                    description && React.createElement("div", { className: css(styles$k.checkDescription) }, description))),
                variant === exports.SelectVariant.checkbox && isNoResultsOption && (React.createElement("div", null,
                    React.createElement(Component, Object.assign({}, props, { className: css(styles$i.selectMenuItem, isSelected && styles$i.modifiers.selected, isDisabled && styles$i.modifiers.disabled, className), role: "option", "aria-selected": isSelected || null, ref: this.ref, onKeyDown: this.onKeyDown, type: "button" }), children || value.toString())))))));
        }
    }
    SelectOption.displayName = 'SelectOption';
    SelectOption.defaultProps = {
        className: '',
        value: '',
        index: 0,
        isDisabled: false,
        isPlaceholder: false,
        isSelected: false,
        isChecked: false,
        isNoResultsOption: false,
        component: 'button',
        onClick: () => { },
        sendRef: () => { },
        keyHandler: () => { },
        inputId: '',
        isFavorite: null
    };

    const SelectGroup = (_a) => {
        var { children = [], className = '', label = '', titleId = '' } = _a, props = __rest(_a, ["children", "className", "label", "titleId"]);
        return (React.createElement(SelectConsumer, null, ({ variant }) => (React.createElement("div", Object.assign({}, props, { className: css(styles$i.selectMenuGroup, className) }),
            React.createElement("div", { className: css(styles$i.selectMenuGroupTitle), id: titleId, "aria-hidden": true }, label),
            variant === exports.SelectVariant.checkbox ? children : React.createElement("ul", { role: "listbox" }, children)))));
    };
    SelectGroup.displayName = 'SelectGroup';

    class SelectMenuWithRef extends React.Component {
        extendChildren(randomId) {
            const { children, isGrouped } = this.props;
            const childrenArray = children;
            if (isGrouped) {
                let index = 0;
                return React.Children.map(childrenArray, (group) => {
                    if (group.type === SelectGroup) {
                        return React.cloneElement(group, {
                            titleId: group.props.label && group.props.label.replace(/\W/g, '-'),
                            children: React.Children.map(group.props.children, (option) => this.cloneOption(option, index++, randomId))
                        });
                    }
                    else {
                        return this.cloneOption(group, index++, randomId);
                    }
                });
            }
            return React.Children.map(childrenArray, (child, index) => this.cloneOption(child, index, randomId));
        }
        cloneOption(child, index, randomId) {
            const { selected, sendRef, keyHandler } = this.props;
            const isSelected = this.checkForValue(child.props.value, selected);
            if (child.type === Divider) {
                return child;
            }
            return React.cloneElement(child, {
                inputId: `${randomId}-${index}`,
                isSelected,
                sendRef,
                keyHandler,
                index
            });
        }
        checkForValue(valueToCheck, options) {
            if (!options) {
                return false;
            }
            const isSelectOptionObject = valueToCheck !== undefined &&
                typeof valueToCheck !== 'string' &&
                valueToCheck.toString &&
                valueToCheck.compareTo;
            if (Array.isArray(options)) {
                if (isSelectOptionObject) {
                    return options.some(option => option.compareTo(valueToCheck));
                }
                else {
                    return options.includes(valueToCheck);
                }
            }
            else {
                if (isSelectOptionObject) {
                    return options.compareTo(valueToCheck);
                }
                else {
                    return options === valueToCheck;
                }
            }
        }
        extendCheckboxChildren(children) {
            const { isGrouped, checked, sendRef, keyHandler, hasInlineFilter } = this.props;
            let index = hasInlineFilter ? 1 : 0;
            if (isGrouped) {
                return React.Children.map(children, (group) => {
                    if (group.type === SelectOption || group.type === Divider) {
                        return group;
                    }
                    return React.cloneElement(group, {
                        titleId: group.props.label && group.props.label.replace(/\W/g, '-'),
                        children: (React.createElement("fieldset", { "aria-labelledby": group.props.label && group.props.label.replace(/\W/g, '-'), className: css(styles$i.selectMenuFieldset) }, React.Children.map(group.props.children, (option) => option.type === Divider
                            ? option
                            : React.cloneElement(option, {
                                isChecked: this.checkForValue(option.props.value, checked),
                                sendRef,
                                keyHandler,
                                index: index++
                            }))))
                    });
                });
            }
            return React.Children.map(children, (child) => child.type === Divider
                ? child
                : React.cloneElement(child, {
                    isChecked: this.checkForValue(child.props.value, checked),
                    sendRef,
                    keyHandler,
                    index: index++
                }));
        }
        render() {
            /* eslint-disable @typescript-eslint/no-unused-vars */
            const _a = this.props, { children, isCustomContent, className, isExpanded, openedOnEnter, selected, checked, isGrouped, sendRef, keyHandler, maxHeight, noResultsFoundText, createText, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, hasInlineFilter, innerRef } = _a, props = __rest(_a, ["children", "isCustomContent", "className", "isExpanded", "openedOnEnter", "selected", "checked", "isGrouped", "sendRef", "keyHandler", "maxHeight", "noResultsFoundText", "createText", 'aria-label', 'aria-labelledby', "hasInlineFilter", "innerRef"]);
            /* eslint-enable @typescript-eslint/no-unused-vars */
            return (React.createElement(SelectConsumer, null, ({ variant, inputIdPrefix }) => (React.createElement(React.Fragment, null,
                isCustomContent && (React.createElement("div", Object.assign({ ref: innerRef, className: css(styles$i.selectMenu, className) }, (maxHeight && { style: { maxHeight, overflow: 'auto' } }), props), children)),
                variant !== exports.SelectVariant.checkbox &&
                    !isCustomContent &&
                    (!isGrouped ? (React.createElement("ul", Object.assign({ ref: innerRef, className: css(styles$i.selectMenu, className), role: "listbox", "aria-label": ariaLabel, "aria-labelledby": (!ariaLabel && ariaLabelledBy) || null }, (maxHeight && { style: { maxHeight, overflow: 'auto' } }), props), this.extendChildren(inputIdPrefix))) : (React.createElement("div", Object.assign({ ref: innerRef, className: css(styles$i.selectMenu, className) }, (maxHeight && { style: { maxHeight, overflow: 'auto' } }), props), this.extendChildren(inputIdPrefix)))),
                variant === exports.SelectVariant.checkbox && !isCustomContent && React.Children.count(children) > 0 && (React.createElement(FocusTrap, { focusTrapOptions: { clickOutsideDeactivates: true, preventScroll: true } },
                    React.createElement("div", Object.assign({ ref: innerRef, className: css(styles$i.selectMenu, className) }, (maxHeight && { style: { maxHeight, overflow: 'auto' } })),
                        React.createElement("fieldset", Object.assign({}, props, { "aria-label": ariaLabel, "aria-labelledby": (!ariaLabel && ariaLabelledBy) || null, className: css(styles$j.formFieldset) }),
                            hasInlineFilter && [
                                children.shift(),
                                ...this.extendCheckboxChildren(children)
                            ],
                            !hasInlineFilter && this.extendCheckboxChildren(children))))),
                variant === exports.SelectVariant.checkbox && !isCustomContent && React.Children.count(children) === 0 && (React.createElement("div", Object.assign({ ref: innerRef, className: css(styles$i.selectMenu, className) }, (maxHeight && { style: { maxHeight, overflow: 'auto' } })),
                    React.createElement("fieldset", { className: css(styles$i.selectMenuFieldset) })))))));
        }
    }
    SelectMenuWithRef.displayName = 'SelectMenu';
    SelectMenuWithRef.defaultProps = {
        className: '',
        isExpanded: false,
        isGrouped: false,
        openedOnEnter: false,
        selected: '',
        maxHeight: '',
        sendRef: () => { },
        keyHandler: () => { },
        isCustomContent: false,
        hasInlineFilter: false
    };
    const SelectMenu = React.forwardRef((props, ref) => (React.createElement(SelectMenuWithRef, Object.assign({ innerRef: ref }, props), props.children)));

    class SelectToggle extends React.Component {
        constructor(props) {
            super(props);
            this.onDocClick = (event) => {
                const { parentRef, menuRef, isOpen, onToggle, onClose } = this.props;
                const clickedOnToggle = parentRef && parentRef.current && parentRef.current.contains(event.target);
                const clickedWithinMenu = menuRef && menuRef.current && menuRef.current.contains && menuRef.current.contains(event.target);
                if (isOpen && !(clickedOnToggle || clickedWithinMenu)) {
                    onToggle(false);
                    onClose();
                    this.toggle.current.focus();
                }
            };
            this.handleGlobalKeys = (event) => {
                const { parentRef, menuRef, isOpen, variant, onToggle, onClose } = this.props;
                if (event.key === KeyTypes.Tab && variant === exports.SelectVariant.checkbox) {
                    return;
                }
                const escFromToggle = parentRef && parentRef.current && parentRef.current.contains(event.target);
                const escFromWithinMenu = menuRef && menuRef.current && menuRef.current.contains && menuRef.current.contains(event.target);
                if (isOpen &&
                    event.key === KeyTypes.Tab &&
                    (variant === exports.SelectVariant.typeahead || variant === exports.SelectVariant.typeaheadMulti)) {
                    this.props.handleTypeaheadKeys('tab');
                    event.preventDefault();
                    return;
                }
                if (isOpen &&
                    (event.key === KeyTypes.Escape || event.key === KeyTypes.Tab) &&
                    (escFromToggle || escFromWithinMenu)) {
                    onToggle(false);
                    onClose();
                    this.toggle.current.focus();
                }
            };
            this.onKeyDown = (event) => {
                const { isOpen, onToggle, variant, onClose, onEnter, handleTypeaheadKeys } = this.props;
                if (variant === exports.SelectVariant.typeahead || variant === exports.SelectVariant.typeaheadMulti) {
                    if (event.key === KeyTypes.ArrowDown || event.key === KeyTypes.ArrowUp) {
                        handleTypeaheadKeys((event.key === KeyTypes.ArrowDown && 'down') || (event.key === KeyTypes.ArrowUp && 'up'));
                        event.preventDefault();
                    }
                    else if (event.key === KeyTypes.Enter) {
                        if (isOpen) {
                            handleTypeaheadKeys('enter');
                        }
                        else {
                            onToggle(!isOpen);
                        }
                    }
                }
                if (variant === exports.SelectVariant.typeahead ||
                    variant === exports.SelectVariant.typeaheadMulti ||
                    (event.key === KeyTypes.Tab && variant === exports.SelectVariant.checkbox) ||
                    (event.key === KeyTypes.Tab && !isOpen) ||
                    (event.key !== KeyTypes.Enter && event.key !== KeyTypes.Space)) {
                    return;
                }
                event.preventDefault();
                if ((event.key === KeyTypes.Tab || event.key === KeyTypes.Enter || event.key === KeyTypes.Space) && isOpen) {
                    onToggle(!isOpen);
                    onClose();
                    this.toggle.current.focus();
                }
                else if ((event.key === KeyTypes.Enter || event.key === KeyTypes.Space) && !isOpen) {
                    onToggle(!isOpen);
                    onEnter();
                }
            };
            const { variant } = props;
            const isTypeahead = variant === exports.SelectVariant.typeahead || variant === exports.SelectVariant.typeaheadMulti;
            this.toggle = isTypeahead ? React.createRef() : React.createRef();
        }
        componentDidMount() {
            document.addEventListener('mousedown', this.onDocClick);
            document.addEventListener('touchstart', this.onDocClick);
            document.addEventListener('keydown', this.handleGlobalKeys);
        }
        componentWillUnmount() {
            document.removeEventListener('mousedown', this.onDocClick);
            document.removeEventListener('touchstart', this.onDocClick);
            document.removeEventListener('keydown', this.handleGlobalKeys);
        }
        render() {
            /* eslint-disable @typescript-eslint/no-unused-vars */
            const _a = this.props, { className, children, isOpen, isActive, isPlain, isDisabled, variant, onToggle, onEnter, onClose, onClickTypeaheadToggleButton, handleTypeaheadKeys, parentRef, menuRef, id, type, hasClearButton, 'aria-labelledby': ariaLabelledBy, 'aria-label': ariaLabel } = _a, props = __rest(_a, ["className", "children", "isOpen", "isActive", "isPlain", "isDisabled", "variant", "onToggle", "onEnter", "onClose", "onClickTypeaheadToggleButton", "handleTypeaheadKeys", "parentRef", "menuRef", "id", "type", "hasClearButton", 'aria-labelledby', 'aria-label']);
            /* eslint-enable @typescript-eslint/no-unused-vars */
            const isTypeahead = variant === exports.SelectVariant.typeahead || variant === exports.SelectVariant.typeaheadMulti || hasClearButton;
            const toggleProps = {
                id,
                'aria-labelledby': ariaLabelledBy,
                'aria-expanded': isOpen,
                'aria-haspopup': (variant !== exports.SelectVariant.checkbox && 'listbox') || null
            };
            return (React.createElement(React.Fragment, null,
                !isTypeahead && (React.createElement("button", Object.assign({}, props, toggleProps, { ref: this.toggle, type: type, className: css(styles$i.selectToggle, isDisabled && styles$i.modifiers.disabled, isPlain && styles$i.modifiers.plain, isActive && styles$i.modifiers.active, className), 
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    onClick: _event => {
                        onToggle(!isOpen);
                        if (isOpen) {
                            onClose();
                        }
                    }, onKeyDown: this.onKeyDown, disabled: isDisabled }),
                    children,
                    React.createElement("span", { className: css(styles$i.selectToggleArrow) },
                        React.createElement(CaretDownIcon, null)))),
                isTypeahead && (React.createElement("div", Object.assign({}, props, { ref: this.toggle, className: css(styles$i.selectToggle, isDisabled && styles$i.modifiers.disabled, isPlain && styles$i.modifiers.plain, isTypeahead && styles$i.modifiers.typeahead, className), 
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    onClick: _event => {
                        if (!isDisabled) {
                            onToggle(true);
                        }
                    }, onKeyDown: this.onKeyDown }),
                    children,
                    React.createElement("button", Object.assign({}, toggleProps, { type: type, className: css(buttonStyles.button, styles$i.selectToggleButton, styles$i.modifiers.plain), "aria-label": ariaLabel, onClick: _event => {
                            _event.stopPropagation();
                            onToggle(!isOpen);
                            if (isOpen) {
                                onClose();
                            }
                            onClickTypeaheadToggleButton();
                        } }, ((variant === exports.SelectVariant.typeahead || variant === exports.SelectVariant.typeaheadMulti) && {
                        tabIndex: -1
                    }), { disabled: isDisabled }),
                        React.createElement(CaretDownIcon, { className: css(styles$i.selectToggleArrow) }))))));
        }
    }
    SelectToggle.displayName = 'SelectToggle';
    SelectToggle.defaultProps = {
        className: '',
        isOpen: false,
        isActive: false,
        isPlain: false,
        isDisabled: false,
        hasClearButton: false,
        variant: 'single',
        'aria-labelledby': '',
        'aria-label': '',
        type: 'button',
        onToggle: () => { },
        onEnter: () => { },
        onClose: () => { },
        onClickTypeaheadToggleButton: () => { }
    };

    var chipGroup = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "chipGroup": "pf-c-chip-group",
      "chipGroupClose": "pf-c-chip-group__close",
      "chipGroupLabel": "pf-c-chip-group__label",
      "chipGroupList": "pf-c-chip-group__list",
      "chipGroupListItem": "pf-c-chip-group__list-item",
      "chipGroupMain": "pf-c-chip-group__main",
      "modifiers": {
        "category": "pf-m-category"
      }
    };
    });

    var styles$l = unwrapExports(chipGroup);

    var chip = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "badge": "pf-c-badge",
      "button": "pf-c-button",
      "chip": "pf-c-chip",
      "chipIcon": "pf-c-chip__icon",
      "chipText": "pf-c-chip__text",
      "modifiers": {
        "overflow": "pf-m-overflow",
        "draggable": "pf-m-draggable"
      }
    };
    });

    var styles$m = unwrapExports(chip);

    class Chip extends React.Component {
        constructor(props) {
            super(props);
            this.span = React.createRef();
            this.renderOverflowChip = () => {
                const { children, className, onClick, ouiaId } = this.props;
                const Component = this.props.component;
                return (React.createElement(Component, Object.assign({ onClick: onClick, className: css(styles$m.chip, styles$m.modifiers.overflow, className) }, (this.props.component === 'button' ? { type: 'button' } : {}), getOUIAProps('OverflowChip', ouiaId !== undefined ? ouiaId : this.state.ouiaStateId)),
                    React.createElement("span", { className: css(styles$m.chipText) }, children)));
            };
            this.renderChip = (randomId) => {
                const { children, tooltipPosition } = this.props;
                if (this.state.isTooltipVisible) {
                    return (React.createElement(Tooltip, { position: tooltipPosition, content: children }, this.renderInnerChip(randomId)));
                }
                return this.renderInnerChip(randomId);
            };
            this.state = {
                isTooltipVisible: false,
                ouiaStateId: getDefaultOUIAId(Chip.displayName)
            };
        }
        componentDidMount() {
            this.setState({
                isTooltipVisible: Boolean(this.span.current && this.span.current.offsetWidth < this.span.current.scrollWidth)
            });
        }
        renderInnerChip(id) {
            const { children, className, onClick, closeBtnAriaLabel, isReadOnly, component, ouiaId } = this.props;
            const Component = component;
            return (React.createElement(Component, Object.assign({ className: css(styles$m.chip, className) }, (this.state.isTooltipVisible && { tabIndex: 0 }), getOUIAProps(Chip.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId)),
                React.createElement("span", { ref: this.span, className: css(styles$m.chipText), id: id }, children),
                !isReadOnly && (React.createElement(Button, { onClick: onClick, variant: "plain", "aria-label": closeBtnAriaLabel, id: `remove_${id}`, "aria-labelledby": `remove_${id} ${id}`, ouiaId: ouiaId || closeBtnAriaLabel },
                    React.createElement(TimesIcon, { "aria-hidden": "true" })))));
        }
        render() {
            const { isOverflowChip } = this.props;
            return (React.createElement(GenerateId, null, randomId => (isOverflowChip ? this.renderOverflowChip() : this.renderChip(this.props.id || randomId))));
        }
    }
    Chip.displayName = 'Chip';
    Chip.defaultProps = {
        closeBtnAriaLabel: 'close',
        className: '',
        isOverflowChip: false,
        isReadOnly: false,
        tooltipPosition: 'top',
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onClick: (_e) => undefined,
        component: 'div'
    };

    class ChipGroup extends React.Component {
        constructor(props) {
            super(props);
            this.headingRef = React.createRef();
            this.toggleCollapse = () => {
                this.setState(prevState => ({
                    isOpen: !prevState.isOpen,
                    isTooltipVisible: Boolean(this.headingRef.current && this.headingRef.current.offsetWidth < this.headingRef.current.scrollWidth)
                }));
            };
            this.state = {
                isOpen: this.props.defaultIsOpen,
                isTooltipVisible: false
            };
        }
        componentDidMount() {
            this.setState({
                isTooltipVisible: Boolean(this.headingRef.current && this.headingRef.current.offsetWidth < this.headingRef.current.scrollWidth)
            });
        }
        renderLabel(id) {
            const { categoryName, tooltipPosition } = this.props;
            const { isTooltipVisible } = this.state;
            return isTooltipVisible ? (React.createElement(Tooltip, { position: tooltipPosition, content: categoryName },
                React.createElement("span", { tabIndex: 0, ref: this.headingRef, className: css(styles$l.chipGroupLabel), id: id, "aria-label": categoryName },
                    React.createElement("span", { "aria-hidden": "true" }, categoryName)))) : (React.createElement("span", { ref: this.headingRef, className: css(styles$l.chipGroupLabel), "aria-hidden": "true", id: id }, categoryName));
        }
        render() {
            const _a = this.props, { categoryName, children, className, isClosable, closeBtnAriaLabel, 'aria-label': ariaLabel, onClick, numChips, expandedText, collapsedText, ouiaId, 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            defaultIsOpen, tooltipPosition } = _a, 
            /* eslint-enable @typescript-eslint/no-unused-vars */
            rest = __rest(_a, ["categoryName", "children", "className", "isClosable", "closeBtnAriaLabel", 'aria-label', "onClick", "numChips", "expandedText", "collapsedText", "ouiaId", "defaultIsOpen", "tooltipPosition"]);
            const { isOpen } = this.state;
            const numChildren = React.Children.count(children);
            const collapsedTextResult = fillTemplate(collapsedText, {
                remaining: React.Children.count(children) - numChips
            });
            const renderChipGroup = (id) => {
                const chipArray = !isOpen
                    ? React.Children.toArray(children).slice(0, numChips)
                    : React.Children.toArray(children);
                return (React.createElement("div", Object.assign({ className: css(styles$l.chipGroup, className, categoryName && styles$l.modifiers.category) }, getOUIAProps(ChipGroup.displayName, ouiaId)),
                    React.createElement("div", { className: css(styles$l.chipGroupMain) },
                        categoryName && this.renderLabel(id),
                        React.createElement("ul", Object.assign({ className: css(styles$l.chipGroupList) }, (categoryName && { 'aria-labelledby': id }), (!categoryName && { 'aria-label': ariaLabel }), { role: "list" }, rest),
                            chipArray.map((child, i) => (React.createElement("li", { className: css(styles$l.chipGroupListItem), key: i }, child))),
                            numChildren > numChips && (React.createElement("li", { className: css(styles$l.chipGroupListItem) },
                                React.createElement(Chip, { isOverflowChip: true, onClick: this.toggleCollapse, component: "button" }, isOpen ? expandedText : collapsedTextResult))))),
                    isClosable && (React.createElement("div", { className: css(styles$l.chipGroupClose) },
                        React.createElement(Button, { variant: "plain", "aria-label": closeBtnAriaLabel, onClick: onClick, id: `remove_group_${id}`, "aria-labelledby": `remove_group_${id} ${id}`, ouiaId: ouiaId || closeBtnAriaLabel },
                            React.createElement(TimesCircleIcon, { "aria-hidden": "true" }))))));
            };
            return numChildren === 0 ? null : React.createElement(GenerateId, null, randomId => renderChipGroup(this.props.id || randomId));
        }
    }
    ChipGroup.displayName = 'ChipGroup';
    ChipGroup.defaultProps = {
        expandedText: 'Show Less',
        collapsedText: '${remaining} more',
        categoryName: '',
        defaultIsOpen: false,
        numChips: 3,
        isClosable: false,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onClick: (_e) => undefined,
        closeBtnAriaLabel: 'Close chip group',
        tooltipPosition: 'top',
        'aria-label': 'Chip group category'
    };

    /**
     * This function is a helper for creating an array of renderable favorite items for the Application launcher or Select
     *
     * @param {object} items The items rendered in Select or Application aLauncher
     * @param {boolean} isGrouped Flag indicating if items are grouped
     * @param {any[]} favorites Array of ids of favorited items
     * @param {boolean} isEnterTriggersArrowDown Flag indicating if we should add isEnterTriggersArrowDown to favorited item
     */
    const createRenderableFavorites = (items, isGrouped, favorites, isEnterTriggersArrowDown) => {
        if (isGrouped) {
            const favoriteItems = [];
            items.forEach(group => {
                if (favorites.length > 0) {
                    return (group.props.children &&
                        group.props.children
                            .filter(item => favorites.includes(item.props.id))
                            .map(item => {
                            if (isEnterTriggersArrowDown) {
                                return favoriteItems.push(React.cloneElement(item, {
                                    isFavorite: true,
                                    enterTriggersArrowDown: isEnterTriggersArrowDown,
                                    id: `favorite-${item.props.id}`
                                }));
                            }
                            else {
                                return favoriteItems.push(React.cloneElement(item, { isFavorite: true, id: `favorite-${item.props.id}` }));
                            }
                        }));
                }
            });
            return favoriteItems;
        }
        return items
            .filter(item => favorites.includes(item.props.id))
            .map(item => React.cloneElement(item, { isFavorite: true, enterTriggersArrowDown: isEnterTriggersArrowDown }));
    };
    /**
     * This function is a helper for extending the array of renderable favorite with the select/application launcher items to  render in the Application launcher or Select
     *
     * @param {object} items The items rendered in Select or Application aLauncher
     * @param {boolean} isGrouped Flag indicating if items are grouped
     * @param {any[]} favorites Array of ids of favorited items
     */
    const extendItemsWithFavorite = (items, isGrouped, favorites) => {
        if (isGrouped) {
            return items.map(group => React.cloneElement(group, {
                children: React.Children.map(group.props.children, item => {
                    if (item.type === ApplicationLauncherSeparator || item.type === Divider) {
                        return item;
                    }
                    return React.cloneElement(item, {
                        isFavorite: favorites.some(favoriteId => favoriteId === item.props.id || `favorite-${favoriteId}` === item.props.id)
                    });
                })
            }));
        }
        return items.map(item => React.cloneElement(item, {
            isFavorite: favorites.some(favoriteId => favoriteId === item.props.id)
        }));
    };

    // seed for the aria-labelledby ID
    let currentId$2 = 0;
    class Select extends React.Component {
        constructor() {
            super(...arguments);
            this.parentRef = React.createRef();
            this.menuComponentRef = React.createRef();
            this.filterRef = React.createRef();
            this.clearRef = React.createRef();
            this.inputRef = React.createRef();
            this.refCollection = [[]];
            this.optionContainerRefCollection = [];
            this.state = {
                openedOnEnter: false,
                typeaheadInputValue: null,
                typeaheadFilteredChildren: React.Children.toArray(this.props.children),
                favoritesGroup: [],
                typeaheadCurrIndex: -1,
                typeaheadStoredIndex: -1,
                creatableValue: '',
                tabbedIntoFavoritesMenu: false,
                ouiaStateId: getDefaultOUIAId(Select.displayName, this.props.variant)
            };
            this.getTypeaheadActiveChild = (typeaheadCurrIndex) => this.refCollection[typeaheadCurrIndex] ? this.refCollection[typeaheadCurrIndex][0] : null;
            this.componentDidUpdate = (prevProps, prevState) => {
                if (this.props.hasInlineFilter) {
                    this.refCollection[0][0] = this.filterRef.current;
                }
                if (!prevState.openedOnEnter && this.state.openedOnEnter && !this.props.customContent && this.refCollection[0]) {
                    this.refCollection[0][0].focus();
                }
                if (prevProps.children !== this.props.children) {
                    this.setState({
                        typeaheadFilteredChildren: React.Children.toArray(this.props.children)
                    });
                }
                if (this.props.onFavorite &&
                    (this.props.favorites.length !== prevProps.favorites.length ||
                        this.state.typeaheadFilteredChildren !== prevState.typeaheadFilteredChildren)) {
                    const tempRenderableChildren = this.props.variant === 'typeahead' || this.props.variant === 'typeaheadmulti'
                        ? this.state.typeaheadFilteredChildren
                        : this.props.children;
                    const renderableFavorites = createRenderableFavorites(tempRenderableChildren, this.props.isGrouped, this.props.favorites);
                    const favoritesGroup = renderableFavorites.length
                        ? [
                            React.createElement(SelectGroup, { key: "favorites", label: this.props.favoritesLabel }, renderableFavorites),
                            React.createElement(Divider, { key: "favorites-group-divider" })
                        ]
                        : [];
                    this.setState({ favoritesGroup });
                }
            };
            this.onEnter = () => {
                this.setState({ openedOnEnter: true });
            };
            this.onClose = () => {
                this.setState({
                    openedOnEnter: false,
                    typeaheadInputValue: null,
                    typeaheadFilteredChildren: React.Children.toArray(this.props.children),
                    typeaheadCurrIndex: -1,
                    tabbedIntoFavoritesMenu: false
                });
            };
            this.onChange = (e) => {
                const { onFilter, isCreatable, onCreateOption, createText, noResultsFoundText, children, isGrouped } = this.props;
                let typeaheadFilteredChildren;
                if (e.target.value.toString() !== '' && !this.props.isOpen) {
                    this.props.onToggle(true);
                }
                if (onFilter) {
                    typeaheadFilteredChildren = onFilter(e) || children;
                }
                else {
                    let input;
                    try {
                        input = new RegExp(e.target.value.toString(), 'i');
                    }
                    catch (err) {
                        input = new RegExp(e.target.value.toString().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
                    }
                    const childrenArray = React.Children.toArray(children);
                    if (isGrouped) {
                        const childFilter = (child) => child.props.value && this.getDisplay(child.props.value.toString(), 'text').search(input) === 0;
                        typeaheadFilteredChildren =
                            e.target.value.toString() !== ''
                                ? React.Children.map(children, group => {
                                    if (group.type === SelectGroup) {
                                        const filteredGroupChildren = React.Children.toArray(group.props.children).filter(childFilter);
                                        if (filteredGroupChildren.length > 0) {
                                            return React.cloneElement(group, {
                                                titleId: group.props.label && group.props.label.replace(/\W/g, '-'),
                                                children: filteredGroupChildren
                                            });
                                        }
                                    }
                                    else {
                                        return React.Children.toArray(group).filter(childFilter);
                                    }
                                })
                                : childrenArray;
                    }
                    else {
                        typeaheadFilteredChildren =
                            e.target.value.toString() !== ''
                                ? childrenArray.filter(child => this.getDisplay(child.props.value.toString(), 'text').search(input) === 0)
                                : childrenArray;
                    }
                }
                if (!typeaheadFilteredChildren) {
                    typeaheadFilteredChildren = [];
                }
                if (typeaheadFilteredChildren.length === 0) {
                    !isCreatable &&
                        typeaheadFilteredChildren.push(React.createElement(SelectOption, { isDisabled: true, key: 0, value: noResultsFoundText, isNoResultsOption: true }));
                }
                if (isCreatable && e.target.value !== '') {
                    const newValue = e.target.value;
                    typeaheadFilteredChildren.push(React.createElement(SelectOption, { key: 0, value: newValue, onClick: () => onCreateOption && onCreateOption(newValue) },
                        createText,
                        " \"",
                        newValue,
                        "\""));
                }
                this.setState({
                    typeaheadInputValue: e.target.value,
                    typeaheadCurrIndex: -1,
                    typeaheadFilteredChildren,
                    creatableValue: e.target.value
                });
                this.refCollection = [[]];
            };
            this.onClick = (e) => {
                if (!this.props.isOpen) {
                    this.props.onToggle(true);
                }
                e.stopPropagation();
            };
            this.clearSelection = (e) => {
                e.stopPropagation();
                this.setState({
                    typeaheadInputValue: null,
                    typeaheadFilteredChildren: React.Children.toArray(this.props.children),
                    typeaheadCurrIndex: -1
                });
            };
            this.sendRef = (optionRef, favoriteRef, optionContainerRef, index) => {
                this.refCollection[index] = [optionRef, favoriteRef];
                this.optionContainerRefCollection[index] = optionContainerRef;
            };
            this.handleMenuKeys = (index, innerIndex, position) => {
                keyHandler(index, innerIndex, position, this.refCollection, this.refCollection);
                if (this.props.variant === exports.SelectVariant.typeahead || this.props.variant === exports.SelectVariant.typeaheadMulti) {
                    if (position !== 'tab') {
                        this.handleTypeaheadKeys(position);
                    }
                }
            };
            this.moveFocus = (nextIndex, updateCurrentIndex = true) => {
                const { isCreatable, createText } = this.props;
                const hasDescriptionElm = Boolean(this.refCollection[nextIndex][0] && this.refCollection[nextIndex][0].classList.contains('pf-m-description'));
                const optionTextElm = hasDescriptionElm
                    ? this.refCollection[nextIndex][0].firstElementChild
                    : this.refCollection[nextIndex][0];
                this.setState(prevState => ({
                    typeaheadCurrIndex: updateCurrentIndex ? nextIndex : prevState.typeaheadCurrIndex,
                    typeaheadStoredIndex: nextIndex,
                    typeaheadInputValue: isCreatable && optionTextElm.innerText.includes(createText)
                        ? this.state.creatableValue
                        : optionTextElm
                            ? optionTextElm.innerText
                            : ''
                }));
            };
            this.handleTypeaheadKeys = (position) => {
                const { isOpen, onFavorite } = this.props;
                const { typeaheadCurrIndex, tabbedIntoFavoritesMenu, typeaheadStoredIndex } = this.state;
                const typeaheadActiveChild = this.getTypeaheadActiveChild(typeaheadCurrIndex);
                if (isOpen) {
                    if (position === 'enter') {
                        if (typeaheadActiveChild || (this.refCollection[0] && this.refCollection[0][0])) {
                            this.setState({
                                typeaheadInputValue: (typeaheadActiveChild && typeaheadActiveChild.innerText) || this.refCollection[0][0].innerText
                            });
                            if (typeaheadActiveChild) {
                                typeaheadActiveChild.click();
                            }
                            else {
                                this.refCollection[0][0].click();
                            }
                        }
                    }
                    else if (position === 'tab') {
                        if (onFavorite) {
                            if (this.inputRef.current === document.activeElement) {
                                const indexForFocus = typeaheadCurrIndex !== -1 ? typeaheadCurrIndex : typeaheadStoredIndex !== -1 ? typeaheadStoredIndex : 0;
                                if (this.refCollection[indexForFocus] !== null && this.refCollection[indexForFocus][0] !== null) {
                                    this.refCollection[indexForFocus][0].focus();
                                }
                                else {
                                    this.clearRef.current.focus();
                                }
                                this.setState({
                                    tabbedIntoFavoritesMenu: true,
                                    typeaheadCurrIndex: -1
                                });
                            }
                            else {
                                this.inputRef.current.focus();
                                this.setState({ tabbedIntoFavoritesMenu: false });
                            }
                        }
                        else {
                            this.props.onToggle(false);
                        }
                    }
                    else if (!tabbedIntoFavoritesMenu) {
                        let nextIndex;
                        if (typeaheadCurrIndex === -1 && position === 'down') {
                            nextIndex = 0;
                        }
                        else if (typeaheadCurrIndex === -1 && position === 'up') {
                            nextIndex = this.refCollection.length - 1;
                        }
                        else if (position !== 'left' && position !== 'right') {
                            nextIndex = getNextIndex(typeaheadCurrIndex, position, this.refCollection);
                        }
                        else {
                            nextIndex = typeaheadCurrIndex;
                        }
                        if (this.refCollection[nextIndex] === null) {
                            return;
                        }
                        this.moveFocus(nextIndex);
                    }
                    else {
                        const nextIndex = this.refCollection.findIndex(ref => ref !== undefined && (ref[0] === document.activeElement || ref[1] === document.activeElement));
                        this.moveFocus(nextIndex);
                    }
                }
            };
            this.onClickTypeaheadToggleButton = () => {
                if (this.inputRef && this.inputRef.current) {
                    this.inputRef.current.focus();
                }
            };
            this.getDisplay = (value, type = 'node') => {
                if (!value) {
                    return;
                }
                const item = this.props.isGrouped
                    ? React.Children.toArray(this.props.children)
                        .reduce((acc, curr) => [...acc, ...React.Children.toArray(curr.props.children)], [])
                        .find(child => child.props.value.toString() === value.toString())
                    : React.Children.toArray(this.props.children).find(child => child.props.value &&
                        child.props.value.toString() === value.toString());
                if (item) {
                    if (item && item.props.children) {
                        if (type === 'node') {
                            return item.props.children;
                        }
                        return this.findText(item);
                    }
                    return item.props.value.toString();
                }
                return value.toString();
            };
            this.findText = (item) => {
                if (typeof item === 'string') {
                    return item;
                }
                else if (!React.isValidElement(item)) {
                    return '';
                }
                else {
                    const multi = [];
                    React.Children.toArray(item.props.children).forEach(child => multi.push(this.findText(child)));
                    return multi.join('');
                }
            };
            this.generateSelectedBadge = () => {
                const { customBadgeText, selections } = this.props;
                if (customBadgeText !== null) {
                    return customBadgeText;
                }
                if (Array.isArray(selections) && selections.length > 0) {
                    return selections.length;
                }
                return null;
            };
        }
        extendTypeaheadChildren(typeaheadCurrIndex, favoritesGroup) {
            const { isGrouped, onFavorite } = this.props;
            const typeaheadChildren = favoritesGroup
                ? favoritesGroup.concat(this.state.typeaheadFilteredChildren)
                : this.state.typeaheadFilteredChildren;
            const activeElement = this.optionContainerRefCollection[typeaheadCurrIndex];
            let typeaheadActiveChild = this.getTypeaheadActiveChild(typeaheadCurrIndex);
            if (typeaheadActiveChild && typeaheadActiveChild.classList.contains('pf-m-description')) {
                typeaheadActiveChild = typeaheadActiveChild.firstElementChild;
            }
            this.refCollection = [[]];
            this.optionContainerRefCollection = [];
            if (isGrouped) {
                return React.Children.map(typeaheadChildren, (group) => {
                    if (group.type === Divider) {
                        return group;
                    }
                    else if (group.type === SelectGroup && onFavorite) {
                        return React.cloneElement(group, {
                            titleId: group.props.label && group.props.label.replace(/\W/g, '-'),
                            children: React.Children.map(group.props.children, (child) => child.type === Divider
                                ? child
                                : React.cloneElement(child, {
                                    isFocused: activeElement &&
                                        (activeElement.id === child.props.id ||
                                            (this.props.isCreatable &&
                                                typeaheadActiveChild.innerText ===
                                                    `{createText} "${group.props.value}"`))
                                }))
                        });
                    }
                    else if (group.type === SelectGroup) {
                        return React.cloneElement(group, {
                            titleId: group.props.label && group.props.label.replace(/\W/g, '-'),
                            children: React.Children.map(group.props.children, (child) => child.type === Divider
                                ? child
                                : React.cloneElement(child, {
                                    isFocused: typeaheadActiveChild &&
                                        (typeaheadActiveChild.innerText === child.props.value.toString() ||
                                            (this.props.isCreatable &&
                                                typeaheadActiveChild.innerText ===
                                                    `{createText} "${child.props.value}"`))
                                }))
                        });
                    }
                    else {
                        // group has been filtered down to SelectOption
                        return React.cloneElement(group, {
                            isFocused: typeaheadActiveChild &&
                                (typeaheadActiveChild.innerText === group.props.value.toString() ||
                                    (this.props.isCreatable && typeaheadActiveChild.innerText === `{createText} "${group.props.value}"`))
                        });
                    }
                });
            }
            return typeaheadChildren.map((child) => {
                const childElement = child;
                return childElement.type.displayName === 'Divider'
                    ? child
                    : React.cloneElement(child, {
                        isFocused: typeaheadActiveChild &&
                            (typeaheadActiveChild.innerText === child.props.value.toString() ||
                                (this.props.isCreatable &&
                                    typeaheadActiveChild.innerText === `{createText} "${child.props.value}"`))
                    });
            });
        }
        render() {
            const _a = this.props, { children, chipGroupProps, chipGroupComponent, className, customContent, variant, direction, onToggle, onSelect, onClear, toggleId, isOpen, isGrouped, isPlain, isDisabled, selections: selectionsProp, typeAheadAriaLabel, clearSelectionsAriaLabel, toggleAriaLabel, removeSelectionAriaLabel, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, placeholderText, width, maxHeight, toggleIcon, ouiaId, ouiaSafe, hasInlineFilter, isCheckboxSelectionBadgeHidden, inlineFilterPlaceholderText, 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            onFilter, onCreateOption, isCreatable, createText, noResultsFoundText, customBadgeText, inputIdPrefix, 
            /* eslint-enable @typescript-eslint/no-unused-vars */
            menuAppendTo, favorites, onFavorite, 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            favoritesLabel } = _a, props = __rest(_a, ["children", "chipGroupProps", "chipGroupComponent", "className", "customContent", "variant", "direction", "onToggle", "onSelect", "onClear", "toggleId", "isOpen", "isGrouped", "isPlain", "isDisabled", "selections", "typeAheadAriaLabel", "clearSelectionsAriaLabel", "toggleAriaLabel", "removeSelectionAriaLabel", 'aria-label', 'aria-labelledby', "placeholderText", "width", "maxHeight", "toggleIcon", "ouiaId", "ouiaSafe", "hasInlineFilter", "isCheckboxSelectionBadgeHidden", "inlineFilterPlaceholderText", "onFilter", "onCreateOption", "isCreatable", "createText", "noResultsFoundText", "customBadgeText", "inputIdPrefix", "menuAppendTo", "favorites", "onFavorite", "favoritesLabel"]);
            const { openedOnEnter, typeaheadCurrIndex, typeaheadInputValue, typeaheadFilteredChildren, favoritesGroup } = this.state;
            const selectToggleId = toggleId || `pf-select-toggle-id-${currentId$2++}`;
            const selections = Array.isArray(selectionsProp) ? selectionsProp : [selectionsProp];
            const hasAnySelections = Boolean(selections[0] && selections[0] !== '');
            const typeaheadActiveChild = this.getTypeaheadActiveChild(typeaheadCurrIndex);
            let childPlaceholderText = null;
            // If onFavorites is set,  add isFavorite prop to children and add a Favorites group to the SelectMenu
            let renderableItems = [];
            if (onFavorite) {
                // if variant is type-ahead call the extendTypeaheadChildren before adding favorites
                const tempExtendedChildren = variant === 'typeahead' || variant === 'typeaheadmulti'
                    ? this.extendTypeaheadChildren(typeaheadCurrIndex, favoritesGroup)
                    : onFavorite
                        ? favoritesGroup.concat(children)
                        : children;
                // mark items that are favorited with isFavorite
                renderableItems = extendItemsWithFavorite(tempExtendedChildren, isGrouped, favorites);
            }
            else {
                renderableItems = children;
            }
            if (!customContent) {
                if (!hasAnySelections && !placeholderText) {
                    const childPlaceholder = React.Children.toArray(children).filter((child) => child.props.isPlaceholder === true);
                    childPlaceholderText =
                        (childPlaceholder[0] && this.getDisplay(childPlaceholder[0].props.value, 'node')) ||
                            (children[0] && this.getDisplay(children[0].props.value, 'node'));
                }
            }
            const hasOnClear = onClear !== Select.defaultProps.onClear;
            const clearBtn = (React.createElement("button", { className: css(buttonStyles.button, buttonStyles.modifiers.plain, styles$i.selectToggleClear), onClick: e => {
                    this.clearSelection(e);
                    onClear(e);
                }, "aria-label": clearSelectionsAriaLabel, type: "button", disabled: isDisabled, ref: this.clearRef, onKeyDown: event => {
                    if (event.key === KeyTypes.Enter) {
                        this.clearRef.current.click();
                    }
                } },
                React.createElement(TimesCircleIcon, { "aria-hidden": true })));
            let selectedChips = null;
            if (variant === exports.SelectVariant.typeaheadMulti) {
                selectedChips = chipGroupComponent ? (chipGroupComponent) : (React.createElement(ChipGroup, Object.assign({}, chipGroupProps), selections &&
                    selections.map(item => (React.createElement(Chip, { key: item, onClick: (e) => onSelect(e, item), closeBtnAriaLabel: removeSelectionAriaLabel }, this.getDisplay(item, 'node'))))));
            }
            let filterWithChildren = children;
            if (hasInlineFilter) {
                const filterBox = (React.createElement(React.Fragment, null,
                    React.createElement("div", { key: "inline-filter", className: css(styles$i.selectMenuSearch) },
                        React.createElement("input", { key: "inline-filter-input", type: "search", className: css(formStyles.formControl, formStyles.modifiers.search), onChange: this.onChange, placeholder: inlineFilterPlaceholderText, onKeyDown: event => {
                                if (event.key === KeyTypes.ArrowUp) {
                                    this.handleMenuKeys(0, 0, 'up');
                                }
                                else if (event.key === KeyTypes.ArrowDown) {
                                    this.handleMenuKeys(0, 0, 'down');
                                }
                                else if (event.key === KeyTypes.ArrowLeft) {
                                    this.handleMenuKeys(0, 0, 'left');
                                }
                                else if (event.key === KeyTypes.ArrowRight) {
                                    this.handleMenuKeys(0, 0, 'right');
                                }
                            }, ref: this.filterRef, autoComplete: "off" })),
                    React.createElement(Divider, { key: "inline-filter-divider" })));
                this.refCollection[0][0] = this.filterRef.current;
                filterWithChildren = [filterBox, ...typeaheadFilteredChildren].map((option, index) => React.cloneElement(option, { key: index }));
            }
            let variantProps;
            let variantChildren;
            if (customContent) {
                variantProps = {
                    selected: selections,
                    openedOnEnter,
                    isCustomContent: true
                };
                variantChildren = customContent;
            }
            else {
                switch (variant) {
                    case 'single':
                        variantProps = {
                            selected: selections[0],
                            openedOnEnter
                        };
                        variantChildren = renderableItems;
                        break;
                    case 'checkbox':
                        variantProps = {
                            checked: selections,
                            isGrouped,
                            hasInlineFilter
                        };
                        variantChildren = filterWithChildren;
                        break;
                    case 'typeahead':
                        variantProps = {
                            selected: selections[0],
                            openedOnEnter
                        };
                        variantChildren = onFavorite ? renderableItems : this.extendTypeaheadChildren(typeaheadCurrIndex);
                        if (variantChildren.length === 0) {
                            variantChildren.push(React.createElement(SelectOption, { isDisabled: true, key: 0, value: noResultsFoundText, isNoResultsOption: true }));
                        }
                        break;
                    case 'typeaheadmulti':
                        variantProps = {
                            selected: selections,
                            openedOnEnter
                        };
                        variantChildren = onFavorite ? renderableItems : this.extendTypeaheadChildren(typeaheadCurrIndex);
                        if (variantChildren.length === 0) {
                            variantChildren.push(React.createElement(SelectOption, { isDisabled: true, key: 0, value: noResultsFoundText, isNoResultsOption: true }));
                        }
                        break;
                }
            }
            const menuContainer = (React.createElement(SelectMenu, Object.assign({}, props, { isGrouped: isGrouped, selected: selections }, variantProps, { openedOnEnter: openedOnEnter, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, sendRef: this.sendRef, keyHandler: this.handleMenuKeys, maxHeight: maxHeight, ref: this.menuComponentRef }), variantChildren));
            const popperContainer = (React.createElement("div", Object.assign({ className: css(styles$i.select, isOpen && styles$i.modifiers.expanded, direction === exports.SelectDirection.up && styles$i.modifiers.top, className) }, (width && { style: { width } })), isOpen && menuContainer));
            const mainContainer = (React.createElement("div", Object.assign({ className: css(styles$i.select, isOpen && styles$i.modifiers.expanded, direction === exports.SelectDirection.up && styles$i.modifiers.top, className), ref: this.parentRef }, getOUIAProps(Select.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe), (width && { style: { width } })),
                React.createElement(SelectToggle, { id: selectToggleId, parentRef: this.parentRef, menuRef: this.menuComponentRef, isOpen: isOpen, isPlain: isPlain, onToggle: onToggle, onEnter: this.onEnter, onClose: this.onClose, variant: variant, "aria-labelledby": `${ariaLabelledBy || ''} ${selectToggleId}`, "aria-label": toggleAriaLabel, handleTypeaheadKeys: this.handleTypeaheadKeys, isDisabled: isDisabled, hasClearButton: hasOnClear, onClickTypeaheadToggleButton: this.onClickTypeaheadToggleButton },
                    customContent && (React.createElement("div", { className: css(styles$i.selectToggleWrapper) },
                        toggleIcon && React.createElement("span", { className: css(styles$i.selectToggleIcon) }, toggleIcon),
                        React.createElement("span", { className: css(styles$i.selectToggleText) }, placeholderText))),
                    variant === exports.SelectVariant.single && !customContent && (React.createElement(React.Fragment, null,
                        React.createElement("div", { className: css(styles$i.selectToggleWrapper) },
                            toggleIcon && React.createElement("span", { className: css(styles$i.selectToggleIcon) }, toggleIcon),
                            React.createElement("span", { className: css(styles$i.selectToggleText) }, this.getDisplay(selections[0], 'node') || placeholderText || childPlaceholderText)),
                        hasOnClear && hasAnySelections && clearBtn)),
                    variant === exports.SelectVariant.checkbox && !customContent && (React.createElement(React.Fragment, null,
                        React.createElement("div", { className: css(styles$i.selectToggleWrapper) },
                            toggleIcon && React.createElement("span", { className: css(styles$i.selectToggleIcon) }, toggleIcon),
                            React.createElement("span", { className: css(styles$i.selectToggleText) }, placeholderText),
                            !isCheckboxSelectionBadgeHidden && hasAnySelections && (React.createElement("div", { className: css(styles$i.selectToggleBadge) },
                                React.createElement("span", { className: css(badgeStyles.badge, badgeStyles.modifiers.read) }, this.generateSelectedBadge())))),
                        hasOnClear && hasAnySelections && clearBtn)),
                    variant === exports.SelectVariant.typeahead && !customContent && (React.createElement(React.Fragment, null,
                        React.createElement("div", { className: css(styles$i.selectToggleWrapper) },
                            toggleIcon && React.createElement("span", { className: css(styles$i.selectToggleIcon) }, toggleIcon),
                            React.createElement("input", { className: css(formStyles.formControl, styles$i.selectToggleTypeahead), "aria-activedescendant": typeaheadActiveChild && typeaheadActiveChild.id, id: `${selectToggleId}-select-typeahead`, "aria-label": typeAheadAriaLabel, placeholder: placeholderText, value: typeaheadInputValue !== null
                                    ? typeaheadInputValue
                                    : this.getDisplay(selections[0], 'text') || '', type: "text", onClick: this.onClick, onChange: this.onChange, autoComplete: "off", disabled: isDisabled, ref: this.inputRef })),
                        hasOnClear && (selections[0] || typeaheadInputValue) && clearBtn)),
                    variant === exports.SelectVariant.typeaheadMulti && !customContent && (React.createElement(React.Fragment, null,
                        React.createElement("div", { className: css(styles$i.selectToggleWrapper) },
                            toggleIcon && React.createElement("span", { className: css(styles$i.selectToggleIcon) }, toggleIcon),
                            selections && Array.isArray(selections) && selections.length > 0 && selectedChips,
                            React.createElement("input", { className: css(formStyles.formControl, styles$i.selectToggleTypeahead), "aria-activedescendant": typeaheadActiveChild && typeaheadActiveChild.id, id: `${selectToggleId}-select-multi-typeahead-typeahead`, "aria-label": typeAheadAriaLabel, placeholder: placeholderText, value: typeaheadInputValue !== null ? typeaheadInputValue : '', type: "text", onChange: this.onChange, onClick: this.onClick, autoComplete: "off", disabled: isDisabled, ref: this.inputRef })),
                        hasOnClear && ((selections && selections.length > 0) || typeaheadInputValue) && clearBtn))),
                isOpen && menuAppendTo === 'inline' && menuContainer));
            const getParentElement = () => {
                if (this.parentRef && this.parentRef.current) {
                    return this.parentRef.current.parentElement;
                }
                return null;
            };
            return (React.createElement(GenerateId, null, randomId => (React.createElement(SelectContext.Provider, { value: { onSelect, onFavorite, onClose: this.onClose, variant, inputIdPrefix: inputIdPrefix || randomId } }, menuAppendTo === 'inline' ? (mainContainer) : (React.createElement(Popper, { trigger: mainContainer, popper: popperContainer, direction: direction, appendTo: menuAppendTo === 'parent' ? getParentElement() : menuAppendTo, isVisible: isOpen }))))));
        }
    }
    Select.displayName = 'Select';
    Select.defaultProps = {
        children: [],
        className: '',
        direction: exports.SelectDirection.down,
        toggleId: null,
        isOpen: false,
        isGrouped: false,
        isPlain: false,
        isDisabled: false,
        isCreatable: false,
        'aria-label': '',
        'aria-labelledby': '',
        typeAheadAriaLabel: '',
        clearSelectionsAriaLabel: 'Clear all',
        toggleAriaLabel: 'Options menu',
        removeSelectionAriaLabel: 'Remove',
        selections: [],
        createText: 'Create',
        placeholderText: '',
        noResultsFoundText: 'No results found',
        variant: exports.SelectVariant.single,
        width: '',
        onClear: () => undefined,
        onCreateOption: () => undefined,
        toggleIcon: null,
        onFilter: null,
        customContent: null,
        hasInlineFilter: false,
        inlineFilterPlaceholderText: null,
        customBadgeText: null,
        inputIdPrefix: '',
        menuAppendTo: 'inline',
        favorites: [],
        favoritesLabel: 'Favorites',
        ouiaSafe: true,
        chipGroupComponent: null
    };

    const ArrowLeftIconConfig = {
      name: 'ArrowLeftIcon',
      height: 512,
      width: 448,
      svgPath: 'M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z',
      yOffset: 0,
      xOffset: 0,
    };

    const ArrowLeftIcon = createIcon(ArrowLeftIconConfig);

    const ArrowRightIconConfig = {
      name: 'ArrowRightIcon',
      height: 512,
      width: 448,
      svgPath: 'M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z',
      yOffset: 0,
      xOffset: 0,
    };

    const ArrowRightIcon = createIcon(ArrowRightIconConfig);

    var calendarMonth = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "calendarMonth": "pf-c-calendar-month",
      "calendarMonthCalendar": "pf-c-calendar-month__calendar",
      "calendarMonthDate": "pf-c-calendar-month__date",
      "calendarMonthDatesCell": "pf-c-calendar-month__dates-cell",
      "calendarMonthDatesRow": "pf-c-calendar-month__dates-row",
      "calendarMonthDay": "pf-c-calendar-month__day",
      "calendarMonthDays": "pf-c-calendar-month__days",
      "calendarMonthHeader": "pf-c-calendar-month__header",
      "calendarMonthHeaderMonth": "pf-c-calendar-month__header-month",
      "calendarMonthHeaderNavControl": "pf-c-calendar-month__header-nav-control",
      "calendarMonthHeaderYear": "pf-c-calendar-month__header-year",
      "modifiers": {
        "prevMonth": "pf-m-prev-month",
        "nextMonth": "pf-m-next-month",
        "current": "pf-m-current",
        "inRange": "pf-m-in-range",
        "startRange": "pf-m-start-range",
        "endRange": "pf-m-end-range",
        "adjacentMonth": "pf-m-adjacent-month",
        "selected": "pf-m-selected",
        "disabled": "pf-m-disabled",
        "hover": "pf-m-hover",
        "focus": "pf-m-focus"
      }
    };
    });

    var styles$n = unwrapExports(calendarMonth);

    (function (Weekday) {
        Weekday[Weekday["Sunday"] = 0] = "Sunday";
        Weekday[Weekday["Monday"] = 1] = "Monday";
        Weekday[Weekday["Tuesday"] = 2] = "Tuesday";
        Weekday[Weekday["Wednesday"] = 3] = "Wednesday";
        Weekday[Weekday["Thursday"] = 4] = "Thursday";
        Weekday[Weekday["Friday"] = 5] = "Friday";
        Weekday[Weekday["Saturday"] = 6] = "Saturday";
    })(exports.Weekday || (exports.Weekday = {}));
    // Must be numeric given current header design
    const yearFormat = (date) => date.getFullYear();
    const buildCalendar = (year, month, weekStart, validators) => {
        const selectedDate = new Date(year, month);
        const firstDayOfWeek = new Date(selectedDate);
        firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay() + weekStart);
        // We will always show 6 weeks like google calendar
        // Assume we just want the numbers for now...
        const calendarWeeks = [];
        for (let i = 0; i < 6; i++) {
            const week = [];
            for (let j = 0; j < 7; j++) {
                const date = new Date(firstDayOfWeek);
                week.push({
                    date,
                    isValid: validators.every(validator => validator(date))
                });
                firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1);
            }
            calendarWeeks.push(week);
        }
        return calendarWeeks;
    };
    const isSameDate = (d1, d2) => d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
    const isValidDate = (date) => Boolean(date && !isNaN(date));
    const today = new Date();
    const CalendarMonth = (_a) => {
        var { date: dateProp = today, locale = undefined, monthFormat = date => date.toLocaleDateString(locale, { month: 'long' }), weekdayFormat = date => date.toLocaleDateString(locale, { weekday: 'narrow' }), longWeekdayFormat = date => date.toLocaleDateString(locale, { weekday: 'long' }), dayFormat = date => date.getDate(), weekStart = 0, // Use the American Sunday as a default
        onChange = () => { }, validators = [() => true], className, onSelectToggle = () => { }, rangeStart, prevMonthAriaLabel = 'Previous month', nextMonthAriaLabel = 'Next month', yearInputAriaLabel = 'Select year', cellAriaLabel } = _a, props = __rest(_a, ["date", "locale", "monthFormat", "weekdayFormat", "longWeekdayFormat", "dayFormat", "weekStart", "onChange", "validators", "className", "onSelectToggle", "rangeStart", "prevMonthAriaLabel", "nextMonthAriaLabel", "yearInputAriaLabel", "cellAriaLabel"]);
        const longMonths = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(monthNum => new Date(1990, monthNum)).map(monthFormat);
        const [isSelectOpen, setIsSelectOpen] = React__default['default'].useState(false);
        // eslint-disable-next-line prefer-const
        let [focusedDate, setFocusedDate] = React__default['default'].useState(new Date(dateProp));
        if (!isValidDate(focusedDate)) {
            focusedDate = today;
        }
        const [hoveredDate, setHoveredDate] = React__default['default'].useState(new Date(focusedDate));
        const focusRef = React__default['default'].useRef();
        const [hiddenMonthId] = React__default['default'].useState(getUniqueId('hidden-month-span'));
        const [shouldFocus, setShouldFocus] = React__default['default'].useState(true);
        const isValidated = (date) => validators.every(validator => validator(date));
        const focusedDateValidated = isValidated(focusedDate);
        React.useEffect(() => {
            if (!(isValidDate(dateProp) && isSameDate(focusedDate, dateProp))) {
                setFocusedDate(dateProp);
            }
        }, [dateProp]);
        React.useEffect(() => {
            // When using header controls don't move focus
            if (shouldFocus) {
                if (focusRef.current && focusedDateValidated) {
                    focusRef.current.focus();
                }
            }
            else {
                setShouldFocus(true);
            }
        }, [focusedDate]);
        const onMonthClick = (newDate) => {
            setFocusedDate(newDate);
            setHoveredDate(newDate);
            setShouldFocus(false);
        };
        const onKeyDown = (ev) => {
            const newDate = new Date(focusedDate);
            if (ev.key === 'ArrowUp') {
                newDate.setDate(newDate.getDate() - 7);
            }
            else if (ev.key === 'ArrowRight') {
                newDate.setDate(newDate.getDate() + 1);
            }
            else if (ev.key === 'ArrowDown') {
                newDate.setDate(newDate.getDate() + 7);
            }
            else if (ev.key === 'ArrowLeft') {
                newDate.setDate(newDate.getDate() - 1);
            }
            if (newDate.getTime() !== focusedDate.getTime() && isValidated(newDate)) {
                ev.preventDefault();
                setFocusedDate(newDate);
                setHoveredDate(newDate);
                setShouldFocus(true);
            }
        };
        const addMonth = (toAdd) => {
            const newDate = new Date(focusedDate);
            newDate.setMonth(newDate.getMonth() + toAdd);
            return newDate;
        };
        const prevMonth = addMonth(-1);
        const nextMonth = addMonth(1);
        const focusedYear = focusedDate.getFullYear();
        const focusedMonth = focusedDate.getMonth();
        const calendar = React__default['default'].useMemo(() => buildCalendar(focusedYear, focusedMonth, weekStart, validators), [
            focusedYear,
            focusedMonth,
            weekStart
        ]);
        if (!focusedDateValidated) {
            const toFocus = calendar
                .reduce((acc, cur) => [...acc, ...cur], [])
                .filter(({ date, isValid }) => isValid && date.getMonth() === focusedMonth)
                .map(({ date }) => ({ date, days: Math.abs(focusedDate.getTime() - date.getTime()) }))
                .sort((o1, o2) => o1.days - o2.days)
                .map(({ date }) => date)[0];
            if (toFocus) {
                setFocusedDate(toFocus);
                setHoveredDate(toFocus);
            }
        }
        const isHoveredDateValid = isValidated(hoveredDate);
        const monthFormatted = monthFormat(focusedDate);
        const yearFormatted = yearFormat(focusedDate);
        return (React__default['default'].createElement("div", Object.assign({ className: css(styles$n.calendarMonth, className) }, props),
            React__default['default'].createElement("div", { className: styles$n.calendarMonthHeader },
                React__default['default'].createElement("div", { className: css(styles$n.calendarMonthHeaderNavControl, styles$n.modifiers.prevMonth) },
                    React__default['default'].createElement(Button, { variant: "plain", "aria-label": prevMonthAriaLabel, onClick: () => onMonthClick(prevMonth) },
                        React__default['default'].createElement(ArrowLeftIcon, { "aria-hidden": true }))),
                React__default['default'].createElement("div", { className: styles$n.calendarMonthHeaderMonth },
                    React__default['default'].createElement("span", { id: hiddenMonthId, hidden: true }, "Month"),
                    React__default['default'].createElement(Select
                    // Max width with "September"
                    , { 
                        // Max width with "September"
                        width: "140px", "aria-labelledby": hiddenMonthId, isOpen: isSelectOpen, onToggle: () => {
                            setIsSelectOpen(!isSelectOpen);
                            onSelectToggle(!isSelectOpen);
                        }, onSelect: (_ev, monthNum) => {
                            // When we put CalendarMonth in a Popover we want the Popover's onDocumentClick
                            // to see the SelectOption as a child so it doesn't close the Popover.
                            setIsSelectOpen(false);
                            onSelectToggle(false);
                            const newDate = new Date(focusedDate);
                            newDate.setMonth(Number(monthNum));
                            setFocusedDate(newDate);
                            setHoveredDate(newDate);
                            setShouldFocus(false);
                        }, variant: "single", selections: monthFormatted }, longMonths.map((longMonth, index) => (React__default['default'].createElement(SelectOption, { key: index, value: index, isSelected: longMonth === monthFormatted }, longMonth))))),
                React__default['default'].createElement("div", { className: styles$n.calendarMonthHeaderYear },
                    React__default['default'].createElement(TextInput, { "aria-label": yearInputAriaLabel, type: "number", value: yearFormatted, onChange: year => {
                            const newDate = new Date(focusedDate);
                            newDate.setFullYear(+year);
                            setFocusedDate(newDate);
                            setHoveredDate(newDate);
                            setShouldFocus(false);
                        } })),
                React__default['default'].createElement("div", { className: css(styles$n.calendarMonthHeaderNavControl, styles$n.modifiers.nextMonth) },
                    React__default['default'].createElement(Button, { variant: "plain", "aria-label": nextMonthAriaLabel, onClick: () => onMonthClick(nextMonth) },
                        React__default['default'].createElement(ArrowRightIcon, { "aria-hidden": true })))),
            React__default['default'].createElement("table", { className: styles$n.calendarMonthCalendar },
                React__default['default'].createElement("thead", { className: styles$n.calendarMonthDays },
                    React__default['default'].createElement("tr", null, calendar[0].map(({ date }, index) => (React__default['default'].createElement("th", { key: index, className: styles$n.calendarMonthDay, scope: "col" },
                        React__default['default'].createElement("span", { className: "pf-screen-reader" }, longWeekdayFormat(date)),
                        React__default['default'].createElement("span", { "aria-hidden": true }, weekdayFormat(date))))))),
                React__default['default'].createElement("tbody", { onKeyDown: onKeyDown }, calendar.map((week, index) => (React__default['default'].createElement("tr", { key: index, className: styles$n.calendarMonthDatesRow }, week.map(({ date, isValid }, index) => {
                    const dayFormatted = dayFormat(date);
                    const isToday = isSameDate(date, today);
                    const isSelected = isValidDate(dateProp) && isSameDate(date, dateProp);
                    const isFocused = isSameDate(date, focusedDate);
                    const isAdjacentMonth = date.getMonth() !== focusedDate.getMonth();
                    let isInRange = false;
                    let isRangeStart = false;
                    let isRangeEnd = false;
                    if (isValidDate(rangeStart) && isHoveredDateValid) {
                        if (hoveredDate > rangeStart || isSameDate(hoveredDate, rangeStart)) {
                            isInRange = date > rangeStart && date < hoveredDate;
                            isRangeStart = isSameDate(date, rangeStart);
                            isRangeEnd = isSameDate(date, hoveredDate);
                        }
                        // Don't handle focused dates before start dates for now.
                        // Core would likely need new styles
                    }
                    return (React__default['default'].createElement("td", { key: index, className: css(styles$n.calendarMonthDatesCell, isAdjacentMonth && styles$n.modifiers.adjacentMonth, isToday && styles$n.modifiers.current, (isSelected || isRangeStart) && styles$n.modifiers.selected, !isValid && styles$n.modifiers.disabled, (isInRange || isRangeStart || isRangeEnd) && styles$n.modifiers.inRange, isRangeStart && styles$n.modifiers.startRange, isRangeEnd && styles$n.modifiers.endRange) },
                        React__default['default'].createElement("button", Object.assign({ className: css(styles$n.calendarMonthDate, isRangeEnd && styles$n.modifiers.hover, !isValid && styles$n.modifiers.disabled), onClick: () => onChange(date), onMouseOver: () => setHoveredDate(date), tabIndex: isFocused ? 0 : -1, disabled: !isValid, "aria-label": cellAriaLabel ? cellAriaLabel(date) : `${dayFormatted} ${monthFormatted} ${yearFormatted}` }, (isFocused && { ref: focusRef })), dayFormatted)));
                }))))))));
    };

    var card = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "card": "pf-c-card",
      "cardActions": "pf-c-card__actions",
      "cardBody": "pf-c-card__body",
      "cardExpandableContent": "pf-c-card__expandable-content",
      "cardFooter": "pf-c-card__footer",
      "cardHeader": "pf-c-card__header",
      "cardHeaderToggle": "pf-c-card__header-toggle",
      "cardHeaderToggleIcon": "pf-c-card__header-toggle-icon",
      "cardTitle": "pf-c-card__title",
      "divider": "pf-c-divider",
      "modifiers": {
        "hoverable": "pf-m-hoverable",
        "selectable": "pf-m-selectable",
        "selected": "pf-m-selected",
        "compact": "pf-m-compact",
        "flat": "pf-m-flat",
        "expanded": "pf-m-expanded",
        "noFill": "pf-m-no-fill",
        "overpassFont": "pf-m-overpass-font"
      }
    };
    });

    var styles$o = unwrapExports(card);

    const CardContext = React.createContext({
        cardId: '',
        isExpanded: false
    });
    const Card = (_a) => {
        var { children = null, id = '', className = '', component = 'article', isHoverable = false, isCompact = false, isSelectable = false, isSelected = false, isFlat = false, isExpanded = false, ouiaId, ouiaSafe = true } = _a, props = __rest(_a, ["children", "id", "className", "component", "isHoverable", "isCompact", "isSelectable", "isSelected", "isFlat", "isExpanded", "ouiaId", "ouiaSafe"]);
        const Component = component;
        const ouiaProps = useOUIAProps(Card.displayName, ouiaId, ouiaSafe);
        return (React.createElement(CardContext.Provider, { value: {
                cardId: id,
                isExpanded
            } },
            React.createElement(Component, Object.assign({ id: id, className: css(styles$o.card, isHoverable && styles$o.modifiers.hoverable, isCompact && styles$o.modifiers.compact, isSelectable && styles$o.modifiers.selectable, isSelected && isSelectable && styles$o.modifiers.selected, isExpanded && styles$o.modifiers.expanded, isFlat && styles$o.modifiers.flat, className), tabIndex: isSelectable ? '0' : undefined }, props, ouiaProps), children)));
    };
    Card.displayName = 'Card';

    const CardActions = (_a) => {
        var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("div", Object.assign({ className: css(styles$o.cardActions, className) }, props), children));
    };
    CardActions.displayName = 'CardActions';

    const CardBody = (_a) => {
        var { children = null, className = '', component = 'div', isFilled = true } = _a, props = __rest(_a, ["children", "className", "component", "isFilled"]);
        const Component = component;
        return (React.createElement(Component, Object.assign({ className: css(styles$o.cardBody, !isFilled && styles$o.modifiers.noFill, className) }, props), children));
    };
    CardBody.displayName = 'CardBody';

    const CardExpandableContent = (_a) => {
        var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement(CardContext.Consumer, null, ({ isExpanded }) => isExpanded ? (React.createElement("div", Object.assign({ className: css(styles$o.cardExpandableContent, className) }, props), children)) : null));
    };
    CardExpandableContent.displayName = 'CardExpandableContent';

    const CardFooter = (_a) => {
        var { children = null, className = '', component = 'div' } = _a, props = __rest(_a, ["children", "className", "component"]);
        const Component = component;
        return (React.createElement(Component, Object.assign({ className: css(styles$o.cardFooter, className) }, props), children));
    };
    CardFooter.displayName = 'CardFooter';

    const CardTitle = (_a) => {
        var { children = null, className = '', component = 'div' } = _a, props = __rest(_a, ["children", "className", "component"]);
        const Component = component;
        return (React.createElement(Component, Object.assign({ className: css(styles$o.cardTitle, className) }, props), children));
    };
    CardTitle.displayName = 'CardTitle';

    const CardHeader = (_a) => {
        var { children = null, className = '', id, onExpand, toggleButtonProps } = _a, props = __rest(_a, ["children", "className", "id", "onExpand", "toggleButtonProps"]);
        return (React.createElement(CardContext.Consumer, null, ({ cardId }) => (React.createElement("div", Object.assign({ className: css(styles$o.cardHeader, className), id: id }, props),
            onExpand && (React.createElement("div", { className: css(styles$o.cardHeaderToggle) },
                React.createElement(Button, Object.assign({ variant: "plain", type: "button", onClick: evt => {
                        onExpand(evt, cardId);
                    } }, toggleButtonProps),
                    React.createElement("span", { className: css(styles$o.cardHeaderToggleIcon) },
                        React.createElement(AngleRightIcon, { "aria-hidden": "true" }))))),
            children))));
    };
    CardHeader.displayName = 'CardHeader';

    const CardHeaderMain = (_a) => {
        var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("div", Object.assign({ className: className }, props), children));
    };
    CardHeaderMain.displayName = 'CardHeaderMain';

    // tslint:disable-next-line:no-empty
    const defaultOnChange = () => { };
    class Checkbox extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = (event) => {
                this.props.onChange(event.currentTarget.checked, event);
            };
        }
        render() {
            const _a = this.props, { 'aria-label': ariaLabel, className, onChange, isValid, isDisabled, isChecked, label, checked, defaultChecked, description } = _a, props = __rest(_a, ['aria-label', "className", "onChange", "isValid", "isDisabled", "isChecked", "label", "checked", "defaultChecked", "description"]);
            const checkedProps = {};
            if ([true, false].includes(checked) || isChecked === true) {
                checkedProps.checked = checked || isChecked;
            }
            if (onChange !== defaultOnChange) {
                checkedProps.checked = isChecked;
            }
            if ([false, true].includes(defaultChecked)) {
                checkedProps.defaultChecked = defaultChecked;
            }
            checkedProps.checked = checkedProps.checked === null ? false : checkedProps.checked;
            return (React.createElement("div", { className: css(styles$k.check, className) },
                React.createElement("input", Object.assign({}, props, { className: css(styles$k.checkInput), type: "checkbox", onChange: this.handleChange, "aria-invalid": !isValid, "aria-label": ariaLabel, disabled: isDisabled, ref: elem => elem && (elem.indeterminate = isChecked === null) }, checkedProps)),
                label && (React.createElement("label", { className: css(styles$k.checkLabel, isDisabled && styles$k.modifiers.disabled), htmlFor: props.id }, label)),
                description && React.createElement("div", { className: css(styles$k.checkDescription) }, description)));
        }
    }
    Checkbox.displayName = 'Checkbox';
    Checkbox.defaultProps = {
        className: '',
        isValid: true,
        isDisabled: false,
        isChecked: false,
        onChange: defaultOnChange
    };

    var clipboardCopy = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "clipboardCopy": "pf-c-clipboard-copy",
      "clipboardCopyExpandableContent": "pf-c-clipboard-copy__expandable-content",
      "clipboardCopyGroup": "pf-c-clipboard-copy__group",
      "clipboardCopyToggleIcon": "pf-c-clipboard-copy__toggle-icon",
      "modifiers": {
        "expanded": "pf-m-expanded"
      }
    };
    });

    var styles$p = unwrapExports(clipboardCopy);

    const CopyIconConfig = {
      name: 'CopyIcon',
      height: 512,
      width: 448,
      svgPath: 'M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z',
      yOffset: 0,
      xOffset: 0,
    };

    const CopyIcon = createIcon(CopyIconConfig);

    const ClipboardCopyButton = (_a) => {
        var { onClick, exitDelay = 100, entryDelay = 100, maxWidth = '100px', position = 'top', 'aria-label': ariaLabel = 'Copyable input', id, textId, children } = _a, props = __rest(_a, ["onClick", "exitDelay", "entryDelay", "maxWidth", "position", 'aria-label', "id", "textId", "children"]);
        return (React.createElement(Tooltip, { trigger: "mouseenter focus click", exitDelay: exitDelay, entryDelay: entryDelay, maxWidth: maxWidth, position: position, content: React.createElement("div", null, children) },
            React.createElement(Button, Object.assign({ type: "button", variant: "control", onClick: onClick, "aria-label": ariaLabel, id: id, "aria-labelledby": `${id} ${textId}` }, props),
                React.createElement(CopyIcon, null))));
    };
    ClipboardCopyButton.displayName = 'ClipboardCopyButton';

    const AngleDownIconConfig = {
      name: 'AngleDownIcon',
      height: 512,
      width: 320,
      svgPath: 'M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z',
      yOffset: 0,
      xOffset: 0,
    };

    const AngleDownIcon = createIcon(AngleDownIconConfig);

    const ClipboardCopyToggle = (_a) => {
        var { onClick, id, textId, contentId, isExpanded = false } = _a, props = __rest(_a, ["onClick", "id", "textId", "contentId", "isExpanded"]);
        return (React.createElement(Button, Object.assign({ type: "button", variant: "control", onClick: onClick, id: id, "aria-labelledby": `${id} ${textId}`, "aria-controls": `${id} ${contentId}`, "aria-expanded": isExpanded }, props), isExpanded ? React.createElement(AngleDownIcon, { "aria-hidden": "true" }) : React.createElement(AngleRightIcon, { "aria-hidden": "true" })));
    };
    ClipboardCopyToggle.displayName = 'ClipboardCopyToggle';

    class ClipboardCopyExpanded extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            const _a = this.props, { className, children, onChange, isReadOnly, isCode } = _a, props = __rest(_a, ["className", "children", "onChange", "isReadOnly", "isCode"]);
            return (React.createElement("div", Object.assign({ suppressContentEditableWarning: true, className: css(styles$p.clipboardCopyExpandableContent, className), onInput: (e) => onChange(e.target.innerText, e), contentEditable: !isReadOnly }, props), isCode ? React.createElement("pre", null, children) : children));
        }
    }
    ClipboardCopyExpanded.displayName = 'ClipboardCopyExpanded';
    ClipboardCopyExpanded.defaultProps = {
        onChange: () => undefined,
        className: '',
        isReadOnly: false,
        isCode: false
    };

    const clipboardCopyFunc = (event, text) => {
        const clipboard = event.currentTarget.parentElement;
        const el = document.createElement('textarea');
        el.value = text.toString();
        clipboard.appendChild(el);
        el.select();
        document.execCommand('copy');
        clipboard.removeChild(el);
    };
    (function (ClipboardCopyVariant) {
        ClipboardCopyVariant["inline"] = "inline";
        ClipboardCopyVariant["expansion"] = "expansion";
    })(exports.ClipboardCopyVariant || (exports.ClipboardCopyVariant = {}));
    class ClipboardCopy extends React.Component {
        constructor(props) {
            super(props);
            this.timer = null;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            this.componentDidUpdate = (prevProps, prevState) => {
                if (prevProps.children !== this.props.children) {
                    this.updateText(this.props.children);
                }
            };
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            this.expandContent = (_event) => {
                this.setState(prevState => ({
                    expanded: !prevState.expanded
                }));
            };
            this.updateText = (text) => {
                this.setState({ text });
                this.props.onChange(text);
            };
            this.render = () => {
                const _a = this.props, { 
                /* eslint-disable @typescript-eslint/no-unused-vars */
                isExpanded, onChange, // Don't pass to <div>
                /* eslint-enable @typescript-eslint/no-unused-vars */
                isReadOnly, isCode, exitDelay, maxWidth, entryDelay, switchDelay, onCopy, hoverTip, clickTip, textAriaLabel, toggleAriaLabel, variant, position, className } = _a, divProps = __rest(_a, ["isExpanded", "onChange", "isReadOnly", "isCode", "exitDelay", "maxWidth", "entryDelay", "switchDelay", "onCopy", "hoverTip", "clickTip", "textAriaLabel", "toggleAriaLabel", "variant", "position", "className"]);
                const textIdPrefix = 'text-input-';
                const toggleIdPrefix = 'toggle-';
                const contentIdPrefix = 'content-';
                return (React.createElement("div", Object.assign({ className: css(styles$p.clipboardCopy, this.state.expanded && styles$p.modifiers.expanded, className) }, divProps),
                    React.createElement(GenerateId, { prefix: "" }, id => (React.createElement(React.Fragment, null,
                        React.createElement("div", { className: css(styles$p.clipboardCopyGroup) },
                            variant === 'expansion' && (React.createElement(ClipboardCopyToggle, { isExpanded: this.state.expanded, onClick: this.expandContent, id: `${toggleIdPrefix}-${id}`, textId: `${textIdPrefix}-${id}`, contentId: `${contentIdPrefix}-${id}`, "aria-label": toggleAriaLabel })),
                            React.createElement(TextInput, { isReadOnly: isReadOnly || this.state.expanded, onChange: this.updateText, value: this.state.text, id: `text-input-${id}`, "aria-label": textAriaLabel }),
                            React.createElement(ClipboardCopyButton, { exitDelay: exitDelay, entryDelay: entryDelay, maxWidth: maxWidth, position: position, id: `copy-button-${id}`, textId: `text-input-${id}`, "aria-label": hoverTip, onClick: (event) => {
                                    if (this.timer) {
                                        window.clearTimeout(this.timer);
                                        this.setState({ copied: false });
                                    }
                                    onCopy(event, this.state.text);
                                    this.setState({ copied: true }, () => {
                                        this.timer = window.setTimeout(() => {
                                            this.setState({ copied: false });
                                            this.timer = null;
                                        }, switchDelay);
                                    });
                                } }, this.state.copied ? clickTip : hoverTip)),
                        this.state.expanded && (React.createElement(ClipboardCopyExpanded, { isReadOnly: isReadOnly, isCode: isCode, id: `content-${id}`, onChange: this.updateText }, this.state.text)))))));
            };
            this.state = {
                text: this.props.children,
                expanded: this.props.isExpanded,
                copied: false
            };
        }
    }
    ClipboardCopy.displayName = 'ClipboardCopy';
    ClipboardCopy.defaultProps = {
        hoverTip: 'Copy to clipboard',
        clickTip: 'Successfully copied to clipboard!',
        isReadOnly: false,
        isExpanded: false,
        isCode: false,
        variant: 'inline',
        position: exports.TooltipPosition.top,
        maxWidth: '150px',
        exitDelay: 1600,
        entryDelay: 100,
        switchDelay: 2000,
        onCopy: clipboardCopyFunc,
        onChange: () => undefined,
        textAriaLabel: 'Copyable input',
        toggleAriaLabel: 'Show content'
    };

    var contextSelector = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "contextSelector": "pf-c-context-selector",
      "contextSelectorMenu": "pf-c-context-selector__menu",
      "contextSelectorMenuFooter": "pf-c-context-selector__menu-footer",
      "contextSelectorMenuList": "pf-c-context-selector__menu-list",
      "contextSelectorMenuListItem": "pf-c-context-selector__menu-list-item",
      "contextSelectorMenuSearch": "pf-c-context-selector__menu-search",
      "contextSelectorToggle": "pf-c-context-selector__toggle",
      "contextSelectorToggleIcon": "pf-c-context-selector__toggle-icon",
      "contextSelectorToggleText": "pf-c-context-selector__toggle-text",
      "modifiers": {
        "active": "pf-m-active",
        "expanded": "pf-m-expanded"
      }
    };
    });

    var styles$q = unwrapExports(contextSelector);

    const SearchIconConfig = {
      name: 'SearchIcon',
      height: 512,
      width: 512,
      svgPath: 'M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z',
      yOffset: 0,
      xOffset: 0,
    };

    const SearchIcon = createIcon(SearchIconConfig);

    class ContextSelectorToggle extends React.Component {
        constructor() {
            super(...arguments);
            this.toggle = React.createRef();
            this.componentDidMount = () => {
                document.addEventListener('mousedown', this.onDocClick);
                document.addEventListener('touchstart', this.onDocClick);
                document.addEventListener('keydown', this.onEscPress);
            };
            this.componentWillUnmount = () => {
                document.removeEventListener('mousedown', this.onDocClick);
                document.removeEventListener('touchstart', this.onDocClick);
                document.removeEventListener('keydown', this.onEscPress);
            };
            this.onDocClick = (event) => {
                const { isOpen, parentRef, onToggle } = this.props;
                if (isOpen && parentRef && !parentRef.contains(event.target)) {
                    onToggle(null, false);
                    this.toggle.current.focus();
                }
            };
            this.onEscPress = (event) => {
                const { isOpen, parentRef, onToggle } = this.props;
                const keyCode = event.keyCode || event.which;
                if (isOpen && keyCode === KEY_CODES.ESCAPE_KEY && parentRef && parentRef.contains(event.target)) {
                    onToggle(null, false);
                    this.toggle.current.focus();
                }
            };
            this.onKeyDown = (event) => {
                const { isOpen, onToggle, onEnter } = this.props;
                if ((event.keyCode === KEY_CODES.TAB && !isOpen) || event.key !== KEY_CODES.ENTER) {
                    return;
                }
                event.preventDefault();
                if ((event.keyCode === KEY_CODES.TAB || event.keyCode === KEY_CODES.ENTER || event.key !== KEY_CODES.SPACE) &&
                    isOpen) {
                    onToggle(null, !isOpen);
                }
                else if ((event.keyCode === KEY_CODES.ENTER || event.key === ' ') && !isOpen) {
                    onToggle(null, !isOpen);
                    onEnter();
                }
            };
        }
        render() {
            const _a = this.props, { className, toggleText, isOpen, onToggle, id, 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            isActive, onEnter, parentRef } = _a, 
            /* eslint-enable @typescript-eslint/no-unused-vars */
            props = __rest(_a, ["className", "toggleText", "isOpen", "onToggle", "id", "isActive", "onEnter", "parentRef"]);
            return (React.createElement("button", Object.assign({}, props, { id: id, ref: this.toggle, className: css(styles$q.contextSelectorToggle, isActive && styles$q.modifiers.active, className), type: "button", onClick: event => onToggle(event, !isOpen), "aria-expanded": isOpen, onKeyDown: this.onKeyDown }),
                React.createElement("span", { className: css(styles$q.contextSelectorToggleText) }, toggleText),
                React.createElement("span", { className: css(styles$q.contextSelectorToggleIcon) },
                    React.createElement(CaretDownIcon, { "aria-hidden": true }))));
        }
    }
    ContextSelectorToggle.displayName = 'ContextSelectorToggle';
    ContextSelectorToggle.defaultProps = {
        className: '',
        toggleText: '',
        isOpen: false,
        onEnter: () => undefined,
        parentRef: null,
        isActive: false,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onToggle: (event, value) => undefined
    };

    class ContextSelectorMenuList extends React.Component {
        constructor() {
            super(...arguments);
            this.refsCollection = [];
            this.sendRef = (index, ref) => {
                this.refsCollection[index] = ref;
            };
            this.render = () => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _a = this.props, { className, isOpen, children } = _a, props = __rest(_a, ["className", "isOpen", "children"]);
                return (React.createElement("ul", Object.assign({ className: css(styles$q.contextSelectorMenuList, className), hidden: !isOpen, role: "menu" }, props), this.extendChildren()));
            };
        }
        extendChildren() {
            return React.Children.map(this.props.children, (child, index) => React.cloneElement(child, {
                sendRef: this.sendRef,
                index
            }));
        }
    }
    ContextSelectorMenuList.displayName = 'ContextSelectorMenuList';
    ContextSelectorMenuList.defaultProps = {
        children: null,
        className: '',
        isOpen: true
    };

    const ContextSelectorContext = React.createContext({
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onSelect: (event, value) => undefined
    });

    var inputGroup = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "formControl": "pf-c-form-control",
      "inputGroup": "pf-c-input-group",
      "inputGroupText": "pf-c-input-group__text",
      "modifiers": {
        "plain": "pf-m-plain"
      }
    };
    });

    var styles$r = unwrapExports(inputGroup);

    class FormSelect extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = (event) => {
                this.props.onChange(event.currentTarget.value, event);
            };
            if (!props.id && !props['aria-label']) {
                // eslint-disable-next-line no-console
                console.error('FormSelect requires either an id or aria-label to be specified');
            }
            this.state = {
                ouiaStateId: getDefaultOUIAId(FormSelect.displayName, props.validated)
            };
        }
        render() {
            const _a = this.props, { children, className, value, validated, isDisabled, isRequired, ouiaId, ouiaSafe } = _a, props = __rest(_a, ["children", "className", "value", "validated", "isDisabled", "isRequired", "ouiaId", "ouiaSafe"]);
            return (React.createElement("select", Object.assign({}, props, { className: css(formStyles.formControl, className, validated === exports.ValidatedOptions.success && formStyles.modifiers.success, validated === exports.ValidatedOptions.warning && formStyles.modifiers.warning), "aria-invalid": validated === exports.ValidatedOptions.error }, getOUIAProps(FormSelect.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe), { onChange: this.handleChange, disabled: isDisabled, required: isRequired, value: value }), children));
        }
    }
    FormSelect.displayName = 'FormSelect';
    FormSelect.defaultProps = {
        className: '',
        value: '',
        validated: 'default',
        isDisabled: false,
        isRequired: false,
        onBlur: () => undefined,
        onFocus: () => undefined,
        onChange: () => undefined,
        ouiaSafe: true
    };

    const FormSelectOption = (_a) => {
        var { className = '', value = '', isDisabled = false, label } = _a, props = __rest(_a, ["className", "value", "isDisabled", "label"]);
        return (React.createElement("option", Object.assign({}, props, { className: className, value: value, disabled: isDisabled }), label));
    };
    FormSelectOption.displayName = 'FormSelectOption';

    const FormSelectOptionGroup = (_a) => {
        var { children = null, className = '', isDisabled = false, label } = _a, props = __rest(_a, ["children", "className", "isDisabled", "label"]);
        return (React.createElement("optgroup", Object.assign({}, props, { disabled: !!isDisabled, className: className, label: label }), children));
    };
    FormSelectOptionGroup.displayName = 'FormSelectOptionGroup';

    (function (TextAreResizeOrientation) {
        TextAreResizeOrientation["horizontal"] = "horizontal";
        TextAreResizeOrientation["vertical"] = "vertical";
        TextAreResizeOrientation["both"] = "both";
    })(exports.TextAreResizeOrientation || (exports.TextAreResizeOrientation = {}));
    class TextAreaBase extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = (event) => {
                if (this.props.onChange) {
                    this.props.onChange(event.currentTarget.value, event);
                }
            };
            if (!props.id && !props['aria-label']) {
                // eslint-disable-next-line no-console
                console.error('TextArea: TextArea requires either an id or aria-label to be specified');
            }
        }
        render() {
            const _a = this.props, { className, value, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onChange, validated, isRequired, isDisabled, isReadOnly, resizeOrientation, innerRef, readOnly, disabled } = _a, props = __rest(_a, ["className", "value", "onChange", "validated", "isRequired", "isDisabled", "isReadOnly", "resizeOrientation", "innerRef", "readOnly", "disabled"]);
            const orientation = `resize${capitalize(resizeOrientation)}`;
            return (React.createElement("textarea", Object.assign({ className: css(formStyles.formControl, className, resizeOrientation !== exports.TextAreResizeOrientation.both && formStyles.modifiers[orientation], validated === exports.ValidatedOptions.success && formStyles.modifiers.success, validated === exports.ValidatedOptions.warning && formStyles.modifiers.warning), onChange: this.handleChange }, (typeof this.props.defaultValue !== 'string' && { value }), { "aria-invalid": validated === exports.ValidatedOptions.error, required: isRequired, disabled: isDisabled || disabled, readOnly: isReadOnly || readOnly, ref: innerRef }, props)));
        }
    }
    TextAreaBase.displayName = 'TextArea';
    TextAreaBase.defaultProps = {
        innerRef: React.createRef(),
        className: '',
        isRequired: false,
        isDisabled: false,
        validated: 'default',
        resizeOrientation: 'both',
        'aria-label': null
    };
    const TextArea = React.forwardRef((props, ref) => (React.createElement(TextAreaBase, Object.assign({}, props, { innerRef: ref }))));
    TextArea.displayName = 'TextArea';

    const InputGroup = (_a) => {
        var { className = '', children } = _a, props = __rest(_a, ["className", "children"]);
        const formCtrls = [FormSelect, TextArea, TextInput].map(comp => comp.displayName);
        const idItem = React.Children.toArray(children).find((child) => !formCtrls.includes(child.type.displayName) && child.props.id);
        return (React.createElement("div", Object.assign({ className: css(styles$r.inputGroup, className) }, props), idItem
            ? React.Children.map(children, (child) => formCtrls.includes(child.type.displayName)
                ? React.cloneElement(child, { 'aria-describedby': idItem.props.id })
                : child)
            : children));
    };
    InputGroup.displayName = 'InputGroup';

    const InputGroupText = (_a) => {
        var { className = '', component = 'span', children } = _a, props = __rest(_a, ["className", "component", "children"]);
        const Component = component;
        return (React.createElement(Component, Object.assign({ className: css(styles$r.inputGroupText, className) }, props), children));
    };
    InputGroupText.displayName = 'InputGroupText';

    // seed for the aria-labelledby ID
    let currentId$3 = 0;
    const newId = currentId$3++;
    class ContextSelector extends React.Component {
        constructor(props) {
            super(props);
            this.parentRef = React.createRef();
            this.onEnterPressed = (event) => {
                if (event.charCode === KEY_CODES.ENTER) {
                    this.props.onSearchButtonClick();
                }
            };
            this.state = {
                ouiaStateId: getDefaultOUIAId(ContextSelector.displayName)
            };
        }
        render() {
            const toggleId = `pf-context-selector-toggle-id-${newId}`;
            const screenReaderLabelId = `pf-context-selector-label-id-${newId}`;
            const searchButtonId = `pf-context-selector-search-button-id-${newId}`;
            const _a = this.props, { children, className, isOpen, onToggle, onSelect, screenReaderLabel, toggleText, searchButtonAriaLabel, searchInputValue, onSearchInputChange, searchInputPlaceholder, onSearchButtonClick, menuAppendTo, ouiaId, ouiaSafe, footer } = _a, props = __rest(_a, ["children", "className", "isOpen", "onToggle", "onSelect", "screenReaderLabel", "toggleText", "searchButtonAriaLabel", "searchInputValue", "onSearchInputChange", "searchInputPlaceholder", "onSearchButtonClick", "menuAppendTo", "ouiaId", "ouiaSafe", "footer"]);
            const menuContainer = (React.createElement("div", { className: css(styles$q.contextSelectorMenu) }, isOpen && (React.createElement(FocusTrap, { focusTrapOptions: { clickOutsideDeactivates: true } },
                React.createElement("div", { className: css(styles$q.contextSelectorMenuSearch) },
                    React.createElement(InputGroup, null,
                        React.createElement(TextInput, { value: searchInputValue, type: "search", placeholder: searchInputPlaceholder, onChange: onSearchInputChange, onKeyPress: this.onEnterPressed, "aria-labelledby": searchButtonId }),
                        React.createElement(Button, { variant: exports.ButtonVariant.control, "aria-label": searchButtonAriaLabel, id: searchButtonId, onClick: onSearchButtonClick },
                            React.createElement(SearchIcon, { "aria-hidden": "true" })))),
                React.createElement(ContextSelectorContext.Provider, { value: { onSelect } },
                    React.createElement(ContextSelectorMenuList, { isOpen: isOpen }, children)),
                footer))));
            const popperContainer = (React.createElement("div", Object.assign({ className: css(styles$q.contextSelector, isOpen && styles$q.modifiers.expanded, className), ref: this.parentRef }, props), isOpen && menuContainer));
            const mainContainer = (React.createElement("div", Object.assign({ className: css(styles$q.contextSelector, isOpen && styles$q.modifiers.expanded, className), ref: this.parentRef }, getOUIAProps(ContextSelector.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe), props),
                screenReaderLabel && (React.createElement("span", { id: screenReaderLabelId, hidden: true }, screenReaderLabel)),
                React.createElement(ContextSelectorToggle, { onToggle: onToggle, isOpen: isOpen, toggleText: toggleText, id: toggleId, parentRef: this.parentRef.current, "aria-labelledby": `${screenReaderLabelId} ${toggleId}` }),
                isOpen && menuAppendTo === 'inline' && menuContainer));
            const getParentElement = () => {
                if (this.parentRef && this.parentRef.current) {
                    return this.parentRef.current.parentElement;
                }
                return null;
            };
            return menuAppendTo === 'inline' ? (mainContainer) : (React.createElement(Popper, { trigger: mainContainer, popper: popperContainer, appendTo: menuAppendTo === 'parent' ? getParentElement() : menuAppendTo, isVisible: isOpen }));
        }
    }
    ContextSelector.displayName = 'ContextSelector';
    ContextSelector.defaultProps = {
        children: null,
        className: '',
        isOpen: false,
        onToggle: () => undefined,
        onSelect: () => undefined,
        screenReaderLabel: '',
        toggleText: '',
        searchButtonAriaLabel: 'Search menu items',
        searchInputValue: '',
        onSearchInputChange: () => undefined,
        searchInputPlaceholder: 'Search',
        onSearchButtonClick: () => undefined,
        menuAppendTo: 'inline',
        ouiaSafe: true,
        footer: null
    };

    class ContextSelectorItem extends React.Component {
        constructor() {
            super(...arguments);
            this.ref = React.createRef();
        }
        componentDidMount() {
            /* eslint-disable-next-line */
            this.props.sendRef(this.props.index, this.ref.current);
        }
        render() {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _a = this.props, { className, children, onClick, isDisabled, index, sendRef } = _a, props = __rest(_a, ["className", "children", "onClick", "isDisabled", "index", "sendRef"]);
            return (React.createElement(ContextSelectorContext.Consumer, null, ({ onSelect }) => (React.createElement("li", { role: "none" },
                React.createElement("button", Object.assign({ className: css(styles$q.contextSelectorMenuListItem, className), ref: this.ref, onClick: event => {
                        if (!isDisabled) {
                            onClick(event);
                            onSelect(event, children);
                        }
                    }, disabled: isDisabled }, props), children)))));
        }
    }
    ContextSelectorItem.displayName = 'ContextSelectorItem';
    ContextSelectorItem.defaultProps = {
        children: null,
        className: '',
        isDisabled: false,
        onClick: () => undefined,
        index: undefined,
        sendRef: () => { }
    };

    const ContextSelectorFooter = (_a) => {
        var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("div", Object.assign({}, props, { className: css(styles$q.contextSelectorMenuFooter, className) }), children));
    };
    ContextSelectorFooter.displayName = 'ContextSelectorFooter';

    var dataList = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "dataList": "pf-c-data-list",
      "dataListAction": "pf-c-data-list__action",
      "dataListCell": "pf-c-data-list__cell",
      "dataListCheck": "pf-c-data-list__check",
      "dataListExpandableContent": "pf-c-data-list__expandable-content",
      "dataListExpandableContentBody": "pf-c-data-list__expandable-content-body",
      "dataListItem": "pf-c-data-list__item",
      "dataListItemAction": "pf-c-data-list__item-action",
      "dataListItemContent": "pf-c-data-list__item-content",
      "dataListItemControl": "pf-c-data-list__item-control",
      "dataListItemDraggableButton": "pf-c-data-list__item-draggable-button",
      "dataListItemDraggableIcon": "pf-c-data-list__item-draggable-icon",
      "dataListItemRow": "pf-c-data-list__item-row",
      "dataListText": "pf-c-data-list__text",
      "dataListToggle": "pf-c-data-list__toggle",
      "dataListToggleIcon": "pf-c-data-list__toggle-icon",
      "modifiers": {
        "hidden": "pf-m-hidden",
        "hiddenOnSm": "pf-m-hidden-on-sm",
        "visibleOnSm": "pf-m-visible-on-sm",
        "hiddenOnMd": "pf-m-hidden-on-md",
        "visibleOnMd": "pf-m-visible-on-md",
        "hiddenOnLg": "pf-m-hidden-on-lg",
        "visibleOnLg": "pf-m-visible-on-lg",
        "hiddenOnXl": "pf-m-hidden-on-xl",
        "visibleOnXl": "pf-m-visible-on-xl",
        "hiddenOn_2xl": "pf-m-hidden-on-2xl",
        "visibleOn_2xl": "pf-m-visible-on-2xl",
        "icon": "pf-m-icon",
        "alignRight": "pf-m-align-right",
        "noFill": "pf-m-no-fill",
        "flex_2": "pf-m-flex-2",
        "flex_3": "pf-m-flex-3",
        "flex_4": "pf-m-flex-4",
        "flex_5": "pf-m-flex-5",
        "gridNone": "pf-m-grid-none",
        "gridSm": "pf-m-grid-sm",
        "gridMd": "pf-m-grid-md",
        "gridLg": "pf-m-grid-lg",
        "gridXl": "pf-m-grid-xl",
        "grid_2xl": "pf-m-grid-2xl",
        "compact": "pf-m-compact",
        "dragOver": "pf-m-drag-over",
        "truncate": "pf-m-truncate",
        "breakWord": "pf-m-break-word",
        "nowrap": "pf-m-nowrap",
        "selectable": "pf-m-selectable",
        "selected": "pf-m-selected",
        "ghostRow": "pf-m-ghost-row",
        "expanded": "pf-m-expanded",
        "disabled": "pf-m-disabled",
        "noPadding": "pf-m-no-padding"
      }
    };
    });

    var styles$s = unwrapExports(dataList);

    var dataListGrid = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "dataList": "pf-c-data-list",
      "dataListCell": "pf-c-data-list__cell",
      "dataListExpandableContent": "pf-c-data-list__expandable-content",
      "dataListItemContent": "pf-c-data-list__item-content",
      "modifiers": {
        "icon": "pf-m-icon",
        "alignRight": "pf-m-align-right",
        "noFill": "pf-m-no-fill",
        "flex_2": "pf-m-flex-2",
        "flex_3": "pf-m-flex-3",
        "flex_4": "pf-m-flex-4",
        "flex_5": "pf-m-flex-5",
        "gridNone": "pf-m-grid-none",
        "gridSm": "pf-m-grid-sm",
        "gridMd": "pf-m-grid-md",
        "gridLg": "pf-m-grid-lg",
        "gridXl": "pf-m-grid-xl",
        "grid_2xl": "pf-m-grid-2xl"
      }
    };
    });

    var stylesGrid = unwrapExports(dataListGrid);

    const gridBreakpointClasses = {
        none: stylesGrid.modifiers.gridNone,
        always: 'pf-m-grid',
        sm: stylesGrid.modifiers.gridSm,
        md: stylesGrid.modifiers.gridMd,
        lg: stylesGrid.modifiers.gridLg,
        xl: stylesGrid.modifiers.gridXl,
        '2xl': stylesGrid.modifiers.grid_2xl
    };
    (function (DataListWrapModifier) {
        DataListWrapModifier["nowrap"] = "nowrap";
        DataListWrapModifier["truncate"] = "truncate";
        DataListWrapModifier["breakWord"] = "breakWord";
    })(exports.DataListWrapModifier || (exports.DataListWrapModifier = {}));
    const DataListContext = React.createContext({
        isSelectable: false
    });
    const moveItem = (arr, i1, toIndex) => {
        const fromIndex = arr.indexOf(i1);
        if (fromIndex === toIndex) {
            return arr;
        }
        const temp = arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, temp[0]);
        return arr;
    };
    class DataList extends React.Component {
        constructor() {
            super(...arguments);
            this.dragFinished = false;
            this.arrayCopy = React.Children.toArray(this.props.children);
            this.ref = React.createRef();
            this.state = {
                tempItemOrder: [],
                draggedItemId: null,
                draggingToItemIndex: null,
                dragging: false
            };
            this.getIndex = (id) => Array.from(this.ref.current.children).findIndex(item => item.id === id);
            this.move = (itemOrder) => {
                const ulNode = this.ref.current;
                const nodes = Array.from(ulNode.children);
                if (nodes.map(node => node.id).every((id, i) => id === itemOrder[i])) {
                    return;
                }
                while (ulNode.firstChild) {
                    ulNode.removeChild(ulNode.lastChild);
                }
                itemOrder.forEach(id => {
                    ulNode.appendChild(nodes.find(n => n.id === id));
                });
            };
            this.dragStart0 = (el) => {
                const { onDragStart } = this.props;
                const draggedItemId = el.id;
                el.classList.add(styles$s.modifiers.ghostRow);
                el.setAttribute('aria-pressed', 'true');
                this.setState({
                    draggedItemId,
                    dragging: true
                });
                onDragStart && onDragStart(draggedItemId);
            };
            this.dragStart = (evt) => {
                evt.dataTransfer.effectAllowed = 'move';
                evt.dataTransfer.setData('text/plain', evt.currentTarget.id);
                this.dragStart0(evt.currentTarget);
            };
            this.onDragCancel = () => {
                this.move(this.props.itemOrder);
                Array.from(this.ref.current.children).forEach(el => {
                    el.classList.remove(styles$s.modifiers.ghostRow);
                    el.setAttribute('aria-pressed', 'false');
                });
                this.setState({
                    draggedItemId: null,
                    draggingToItemIndex: null,
                    dragging: false
                });
                if (this.props.onDragCancel) {
                    this.props.onDragCancel();
                }
            };
            this.dragLeave = (evt) => {
                // This event false fires when we call `this.move()`, so double check we're out of zone
                if (!this.isValidDrop(evt)) {
                    this.move(this.props.itemOrder);
                    this.setState({
                        draggingToItemIndex: null
                    });
                }
            };
            this.dragEnd0 = (el) => {
                el.classList.remove(styles$s.modifiers.ghostRow);
                el.setAttribute('aria-pressed', 'false');
                this.props.onDragFinish(this.state.tempItemOrder);
            };
            this.isValidDrop = (evt) => {
                const ulRect = this.ref.current.getBoundingClientRect();
                return (evt.clientX > ulRect.x &&
                    evt.clientX < ulRect.x + ulRect.width &&
                    evt.clientY > ulRect.y &&
                    evt.clientY < ulRect.y + ulRect.height);
            };
            this.dragEnd = (evt) => {
                if (this.isValidDrop(evt)) {
                    this.dragEnd0(evt.currentTarget);
                }
                else {
                    this.onDragCancel();
                }
            };
            this.dragOver0 = (id) => {
                const draggingToItemIndex = Array.from(this.ref.current.children).findIndex(item => item.id === id);
                if (draggingToItemIndex !== this.state.draggingToItemIndex) {
                    const tempItemOrder = moveItem([...this.props.itemOrder], this.state.draggedItemId, draggingToItemIndex);
                    this.move(tempItemOrder);
                    this.setState({
                        draggingToItemIndex,
                        tempItemOrder
                    });
                }
            };
            this.dragOver = (evt) => {
                evt.preventDefault();
                const curListItem = evt.target.closest('li');
                if (!curListItem || !this.ref.current.contains(curListItem) || curListItem.id === this.state.draggedItemId) {
                    // We're going nowhere, don't bother calling `dragOver0`
                    return null;
                }
                else {
                    this.dragOver0(curListItem.id);
                }
            };
            this.handleDragButtonKeys = (evt) => {
                const { dragging } = this.state;
                if (evt.key !== ' ' &&
                    evt.key !== 'Escape' &&
                    evt.key !== 'Enter' &&
                    evt.key !== 'ArrowUp' &&
                    evt.key !== 'ArrowDown') {
                    if (dragging) {
                        evt.preventDefault();
                    }
                    return;
                }
                evt.preventDefault();
                const dragItem = evt.target.closest('li');
                if (evt.key === ' ' || (evt.key === 'Enter' && !dragging)) {
                    this.dragStart0(dragItem);
                }
                else if (dragging) {
                    if (evt.key === 'Escape' || evt.key === 'Enter') {
                        this.setState({
                            dragging: false
                        });
                        this.dragFinished = true;
                        if (evt.key === 'Enter') {
                            this.dragEnd0(dragItem);
                        }
                        else {
                            this.onDragCancel();
                        }
                    }
                    else if (evt.key === 'ArrowUp') {
                        const nextSelection = dragItem.previousSibling;
                        if (nextSelection) {
                            this.dragOver0(nextSelection.id);
                            dragItem.querySelector(`.${styles$s.dataListItemDraggableButton}`).focus();
                        }
                    }
                    else if (evt.key === 'ArrowDown') {
                        const nextSelection = dragItem.nextSibling;
                        if (nextSelection) {
                            this.dragOver0(nextSelection.id);
                            dragItem.querySelector(`.${styles$s.dataListItemDraggableButton}`).focus();
                        }
                    }
                }
            };
        }
        componentDidUpdate(oldProps) {
            if (this.dragFinished) {
                this.dragFinished = false;
                this.setState({
                    tempItemOrder: [...this.props.itemOrder],
                    draggedItemId: null,
                    dragging: false
                });
            }
            if (oldProps.itemOrder !== this.props.itemOrder) {
                this.move(this.props.itemOrder);
            }
        }
        render() {
            const _a = this.props, { className, children, onSelectDataListItem, selectedDataListItemId, isCompact, wrapModifier, 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            onDragStart, onDragMove, onDragCancel, onDragFinish, gridBreakpoint, itemOrder } = _a, 
            /* eslint-enable @typescript-eslint/no-unused-vars */
            props = __rest(_a, ["className", "children", "onSelectDataListItem", "selectedDataListItemId", "isCompact", "wrapModifier", "onDragStart", "onDragMove", "onDragCancel", "onDragFinish", "gridBreakpoint", "itemOrder"]);
            const { dragging } = this.state;
            const isSelectable = onSelectDataListItem !== undefined;
            const isDraggable = onDragFinish !== undefined;
            const updateSelectedDataListItem = (id) => {
                onSelectDataListItem(id);
            };
            const dragProps = isDraggable && {
                onDragOver: this.dragOver,
                onDrop: this.dragOver,
                onDragLeave: this.dragLeave
            };
            return (React.createElement(DataListContext.Provider, { value: {
                    isSelectable,
                    selectedDataListItemId,
                    updateSelectedDataListItem,
                    isDraggable,
                    dragStart: this.dragStart,
                    dragEnd: this.dragEnd,
                    dragKeyHandler: this.handleDragButtonKeys
                } },
                React.createElement("ul", Object.assign({ className: css(styles$s.dataList, isCompact && styles$s.modifiers.compact, gridBreakpointClasses[gridBreakpoint], wrapModifier && styles$s.modifiers[wrapModifier], className), style: Object.assign(Object.assign({}, (dragging && { overflowAnchor: 'none' })), props.style) }, props, dragProps, { ref: this.ref }), children)));
        }
    }
    DataList.displayName = 'DataList';
    DataList.defaultProps = {
        children: null,
        className: '',
        selectedDataListItemId: '',
        isCompact: false,
        gridBreakpoint: 'md',
        wrapModifier: null
    };

    const DataListAction = (_a) => {
        var { children, className, visibility, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        id, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, isPlainButtonAction } = _a, 
        /* eslint-enable @typescript-eslint/no-unused-vars */
        props = __rest(_a, ["children", "className", "visibility", "id", 'aria-label', 'aria-labelledby', "isPlainButtonAction"]);
        return (React.createElement("div", Object.assign({ className: css(styles$s.dataListItemAction, formatBreakpointMods(visibility, styles$s), className) }, props), isPlainButtonAction ? React.createElement("div", { className: css(styles$s.dataListAction) }, children) : children));
    };
    DataListAction.displayName = 'DataListAction';

    const DataListCell = (_a) => {
        var { children = null, className = '', width = 1, isFilled = true, alignRight = false, isIcon = false, wrapModifier = null } = _a, props = __rest(_a, ["children", "className", "width", "isFilled", "alignRight", "isIcon", "wrapModifier"]);
        return (React.createElement("div", Object.assign({ className: css(styles$s.dataListCell, width > 1 && styles$s.modifiers[`flex_${width}`], !isFilled && styles$s.modifiers.noFill, alignRight && styles$s.modifiers.alignRight, isIcon && styles$s.modifiers.icon, className, wrapModifier && styles$s.modifiers[wrapModifier]) }, props), children));
    };
    DataListCell.displayName = 'DataListCell';

    const DataListCheck = (_a) => {
        var { className = '', 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onChange = (checked, event) => { }, isValid = true, isDisabled = false, isChecked = null, checked = null, otherControls = false } = _a, props = __rest(_a, ["className", "onChange", "isValid", "isDisabled", "isChecked", "checked", "otherControls"]);
        const check = (React.createElement("div", { className: css(styles$s.dataListCheck) },
            React.createElement("input", Object.assign({}, props, { type: "checkbox", onChange: event => onChange(event.currentTarget.checked, event), "aria-invalid": !isValid, disabled: isDisabled, checked: isChecked || checked }))));
        return (React.createElement(React.Fragment, null,
            !otherControls && React.createElement("div", { className: css(styles$s.dataListItemControl, className) }, check),
            otherControls && check));
    };
    DataListCheck.displayName = 'DataListCheck';

    const DataListControl = (_a) => {
        var { children, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("div", Object.assign({ className: css(styles$s.dataListItemControl, className) }, props), children));
    };
    DataListControl.displayName = 'DataListControl';

    const GripVerticalIconConfig = {
      name: 'GripVerticalIcon',
      height: 512,
      width: 320,
      svgPath: 'M96 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM288 32h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z',
      yOffset: 0,
      xOffset: 0,
    };

    const GripVerticalIcon = createIcon(GripVerticalIconConfig);

    const DataListDragButton = (_a) => {
        var { className = '', isDisabled = false } = _a, props = __rest(_a, ["className", "isDisabled"]);
        return (React.createElement(DataListContext.Consumer, null, ({ dragKeyHandler }) => (React.createElement("button", Object.assign({ className: css(styles$s.dataListItemDraggableButton, isDisabled && styles$s.modifiers.disabled, className), onKeyDown: dragKeyHandler, type: "button", disabled: isDisabled }, props),
            React.createElement("span", { className: css(styles$s.dataListItemDraggableIcon) },
                React.createElement(GripVerticalIcon, null))))));
    };
    DataListDragButton.displayName = 'DataListDragButton';

    function findDataListDragButton(node) {
        if (!React.isValidElement(node)) {
            return null;
        }
        if (node.type === DataListDragButton) {
            return node;
        }
        if (node.props.children) {
            for (const child of React.Children.toArray(node.props.children)) {
                const button = findDataListDragButton(child);
                if (button) {
                    return button;
                }
            }
        }
        return null;
    }
    class DataListItem extends React.Component {
        render() {
            const _a = this.props, { children, isExpanded, className, id, 'aria-labelledby': ariaLabelledBy } = _a, props = __rest(_a, ["children", "isExpanded", "className", "id", 'aria-labelledby']);
            return (React.createElement(DataListContext.Consumer, null, ({ isSelectable, selectedDataListItemId, updateSelectedDataListItem, isDraggable, dragStart, dragEnd }) => {
                const selectDataListItem = (event) => {
                    let target = event.target;
                    while (event.currentTarget !== target) {
                        if (('onclick' in target && target.onclick) ||
                            target.parentNode.classList.contains(styles$s.dataListItemAction) ||
                            target.parentNode.classList.contains(styles$s.dataListItemControl)) {
                            // check other event handlers are not present.
                            return;
                        }
                        else {
                            target = target.parentNode;
                        }
                    }
                    updateSelectedDataListItem(id);
                };
                const onKeyDown = (event) => {
                    if (event.key === KeyTypes.Enter) {
                        updateSelectedDataListItem(id);
                    }
                };
                // We made the DataListDragButton determine if the entire item is draggable instead of
                // DataListItem like we should have.
                // Recursively search children for the DataListDragButton and see if it's disabled...
                const dragButton = findDataListDragButton(children);
                const dragProps = isDraggable && {
                    draggable: dragButton ? !dragButton.props.isDisabled : true,
                    onDragEnd: dragEnd,
                    onDragStart: dragStart
                };
                return (React.createElement("li", Object.assign({ id: id, className: css(styles$s.dataListItem, isExpanded && styles$s.modifiers.expanded, isSelectable && styles$s.modifiers.selectable, selectedDataListItemId && selectedDataListItemId === id && styles$s.modifiers.selected, className), "aria-labelledby": ariaLabelledBy }, (isSelectable && { tabIndex: 0, onClick: selectDataListItem, onKeyDown }), (isSelectable && selectedDataListItemId === id && { 'aria-selected': true }), props, dragProps), React.Children.map(children, child => React.isValidElement(child) &&
                    React.cloneElement(child, {
                        rowid: ariaLabelledBy
                    }))));
            }));
        }
    }
    DataListItem.displayName = 'DataListItem';
    DataListItem.defaultProps = {
        isExpanded: false,
        className: '',
        id: '',
        children: null,
        'aria-labelledby': ''
    };

    const DataListItemCells = (_a) => {
        var { className = '', dataListCells, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        rowid = '' } = _a, props = __rest(_a, ["className", "dataListCells", "rowid"]);
        return (React.createElement("div", Object.assign({ className: css(styles$s.dataListItemContent, className) }, props), dataListCells));
    };
    DataListItemCells.displayName = 'DataListItemCells';

    const DataListItemRow = (_a) => {
        var { children, className = '', rowid = '', wrapModifier = null } = _a, props = __rest(_a, ["children", "className", "rowid", "wrapModifier"]);
        return (React.createElement("div", Object.assign({ className: css(styles$s.dataListItemRow, className, wrapModifier && styles$s.modifiers[wrapModifier]) }, props), React.Children.map(children, child => React.isValidElement(child) &&
            React.cloneElement(child, {
                rowid
            }))));
    };
    DataListItemRow.displayName = 'DataListItemRow';

    const DataListToggle = (_a) => {
        var { className = '', isExpanded = false, 'aria-controls': ariaControls = '', 'aria-label': ariaLabel = 'Details', rowid = '', id } = _a, props = __rest(_a, ["className", "isExpanded", 'aria-controls', 'aria-label', "rowid", "id"]);
        return (React.createElement("div", Object.assign({ className: css(styles$s.dataListItemControl, className) }, props),
            React.createElement("div", { className: css(styles$s.dataListToggle) },
                React.createElement(Button, { id: id, variant: exports.ButtonVariant.plain, "aria-controls": ariaControls !== '' && ariaControls, "aria-label": ariaLabel, "aria-labelledby": ariaLabel !== 'Details' ? null : `${rowid} ${id}`, "aria-expanded": isExpanded },
                    React.createElement("div", { className: css(styles$s.dataListToggleIcon) },
                        React.createElement(AngleRightIcon, null))))));
    };
    DataListToggle.displayName = 'DataListToggle';

    const DataListContent = (_a) => {
        var { className = '', children = null, id = '', isHidden = false, 'aria-label': ariaLabel, hasNoPadding = false, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        rowid = '' } = _a, props = __rest(_a, ["className", "children", "id", "isHidden", 'aria-label', "hasNoPadding", "rowid"]);
        return (React.createElement("section", Object.assign({ id: id, className: css(styles$s.dataListExpandableContent, className), hidden: isHidden, "aria-label": ariaLabel }, props),
            React.createElement("div", { className: css(styles$s.dataListExpandableContentBody, hasNoPadding && styles$s.modifiers.noPadding) }, children)));
    };
    DataListContent.displayName = 'DataListContent';

    const DataListText = (_a) => {
        var { children = null, className = '', component = 'span', wrapModifier = null, tooltip: tooltipProp = '', onMouseEnter: onMouseEnterProp = () => { } } = _a, props = __rest(_a, ["children", "className", "component", "wrapModifier", "tooltip", "onMouseEnter"]);
        const Component = component;
        const [tooltip, setTooltip] = React.useState('');
        const onMouseEnter = (event) => {
            if (event.target.offsetWidth < event.target.scrollWidth) {
                setTooltip(tooltipProp || event.target.innerHTML);
            }
            else {
                setTooltip('');
            }
            onMouseEnterProp(event);
        };
        const text = (React.createElement(Component, Object.assign({ onMouseEnter: onMouseEnter, className: css(className, wrapModifier && styles$s.modifiers[wrapModifier], styles$s.dataListText) }, props), children));
        return tooltip !== '' ? (React.createElement(Tooltip, { content: tooltip, isVisible: true }, text)) : (text);
    };
    DataListText.displayName = 'DataListText';

    var datePicker = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "datePicker": "pf-c-date-picker",
      "datePickerCalendar": "pf-c-date-picker__calendar",
      "datePickerHelperText": "pf-c-date-picker__helper-text",
      "datePickerInput": "pf-c-date-picker__input",
      "formControl": "pf-c-form-control",
      "modifiers": {
        "error": "pf-m-error",
        "alignRight": "pf-m-align-right",
        "top": "pf-m-top"
      }
    };
    });

    var datePickerStyles = unwrapExports(datePicker);

    var popover = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "button": "pf-c-button",
      "modifiers": {
        "noPadding": "pf-m-no-padding",
        "widthAuto": "pf-m-width-auto",
        "top": "pf-m-top",
        "bottom": "pf-m-bottom",
        "left": "pf-m-left",
        "right": "pf-m-right"
      },
      "popover": "pf-c-popover",
      "popoverArrow": "pf-c-popover__arrow",
      "popoverBody": "pf-c-popover__body",
      "popoverContent": "pf-c-popover__content",
      "popoverFooter": "pf-c-popover__footer",
      "title": "pf-c-title"
    };
    });

    var styles$t = unwrapExports(popover);

    const PopoverContent = (_a) => {
        var { className = null, children } = _a, props = __rest(_a, ["className", "children"]);
        return (React.createElement("div", Object.assign({ className: css(styles$t.popoverContent, className) }, props), children));
    };
    PopoverContent.displayName = 'PopoverContent';

    const PopoverBody = (_a) => {
        var { children, id } = _a, props = __rest(_a, ["children", "id"]);
        return (React.createElement("div", Object.assign({ className: css(styles$t.popoverBody), id: id }, props), children));
    };
    PopoverBody.displayName = 'PopoverBody';

    const PopoverHeader = (_a) => {
        var { children, id } = _a, props = __rest(_a, ["children", "id"]);
        return (React.createElement(Title, Object.assign({ headingLevel: "h6", size: exports.TitleSizes.md, id: id }, props), children));
    };
    PopoverHeader.displayName = 'PopoverHeader';

    const PopoverFooter = (_a) => {
        var { children, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("footer", Object.assign({ className: css(styles$t.popoverFooter, className) }, props), children));
    };
    PopoverFooter.displayName = 'PopoverFooter';

    const PopoverCloseButton = (_a) => {
        var { onClose = () => undefined } = _a, props = __rest(_a, ["onClose"]);
        const [closeButtonElement, setCloseButtonElement] = React.useState(null);
        React.useEffect(() => {
            closeButtonElement && closeButtonElement.addEventListener('click', onClose, false);
            return () => {
                closeButtonElement && closeButtonElement.removeEventListener('click', onClose, false);
            };
        }, [closeButtonElement]);
        return (React.createElement(FindRefWrapper, { onFoundRef: (foundRef) => setCloseButtonElement(foundRef) },
            React.createElement(Button, Object.assign({ variant: "plain", "aria-label": true }, props, { style: { pointerEvents: 'auto' } }),
                React.createElement(TimesIcon, null))));
    };
    PopoverCloseButton.displayName = 'PopoverCloseButton';

    const PopoverArrow = (_a) => {
        var { className = '' } = _a, props = __rest(_a, ["className"]);
        return React.createElement("div", Object.assign({ className: css(styles$t.popoverArrow, className) }, props));
    };
    PopoverArrow.displayName = 'PopoverArrow';

    const c_popover_MaxWidth = {
      "name": "--pf-c-popover--MaxWidth",
      "value": "none",
      "var": "var(--pf-c-popover--MaxWidth)"
    };

    const c_popover_MinWidth = {
      "name": "--pf-c-popover--MinWidth",
      "value": "auto",
      "var": "var(--pf-c-popover--MinWidth)"
    };

    (function (PopoverPosition) {
        PopoverPosition["auto"] = "auto";
        PopoverPosition["top"] = "top";
        PopoverPosition["bottom"] = "bottom";
        PopoverPosition["left"] = "left";
        PopoverPosition["right"] = "right";
    })(exports.PopoverPosition || (exports.PopoverPosition = {}));
    const Popover = (_a) => {
        var { children, position = 'top', enableFlip = true, className = '', isVisible = null, shouldClose = () => null, shouldOpen = () => null, 'aria-label': ariaLabel = '', bodyContent, headerContent = null, footerContent = null, appendTo = () => document.body, hideOnOutsideClick = true, onHide = () => null, onHidden = () => null, onShow = () => null, onShown = () => null, onMount = () => null, zIndex = 9999, minWidth = c_popover_MinWidth && c_popover_MinWidth.value, maxWidth = c_popover_MaxWidth && c_popover_MaxWidth.value, closeBtnAriaLabel = 'Close', showClose = true, distance = 25, 
        // For every initial starting position, there are 3 escape positions
        flipBehavior = ['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom'], animationDuration = 300, id, withFocusTrap: propWithFocusTrap, boundary, tippyProps, reference, hasNoPadding = false, hasAutoWidth = false } = _a, rest = __rest(_a, ["children", "position", "enableFlip", "className", "isVisible", "shouldClose", "shouldOpen", 'aria-label', "bodyContent", "headerContent", "footerContent", "appendTo", "hideOnOutsideClick", "onHide", "onHidden", "onShow", "onShown", "onMount", "zIndex", "minWidth", "maxWidth", "closeBtnAriaLabel", "showClose", "distance", "flipBehavior", "animationDuration", "id", "withFocusTrap", "boundary", "tippyProps", "reference", "hasNoPadding", "hasAutoWidth"]);
        {
            boundary !== undefined &&
                console.warn('The Popover boundary prop has been deprecated. If you want to constrain the popper to a specific element use the appendTo prop instead.');
            tippyProps !== undefined && console.warn('The Popover tippyProps prop has been deprecated and is no longer used.');
        }
        // could make this a prop in the future (true | false | 'toggle')
        // const hideOnClick = true;
        const uniqueId = id || getUniqueId();
        const triggerManually = isVisible !== null;
        const [visible, setVisible] = React.useState(false);
        const [opacity, setOpacity] = React.useState(0);
        const [focusTrapActive, setFocusTrapActive] = React.useState(Boolean(propWithFocusTrap));
        const transitionTimerRef = React.useRef(null);
        const showTimerRef = React.useRef(null);
        const hideTimerRef = React.useRef(null);
        React.useEffect(() => {
            onMount();
        }, []);
        React.useEffect(() => {
            if (triggerManually) {
                if (isVisible) {
                    show();
                }
                else {
                    hide();
                }
            }
        }, [isVisible, triggerManually]);
        const show = (withFocusTrap) => {
            onShow();
            if (transitionTimerRef.current) {
                clearTimeout(transitionTimerRef.current);
            }
            if (hideTimerRef.current) {
                clearTimeout(hideTimerRef.current);
            }
            showTimerRef.current = setTimeout(() => {
                setVisible(true);
                setOpacity(1);
                propWithFocusTrap !== false && withFocusTrap && setFocusTrapActive(true);
                onShown();
            }, 0);
        };
        const hide = () => {
            onHide();
            if (showTimerRef.current) {
                clearTimeout(showTimerRef.current);
            }
            hideTimerRef.current = setTimeout(() => {
                setOpacity(0);
                setFocusTrapActive(false);
                transitionTimerRef.current = setTimeout(() => {
                    setVisible(false);
                    onHidden();
                }, animationDuration);
            }, 0);
        };
        const positionModifiers = {
            top: styles$t.modifiers.top,
            bottom: styles$t.modifiers.bottom,
            left: styles$t.modifiers.left,
            right: styles$t.modifiers.right
        };
        const hasCustomMinWidth = minWidth !== c_popover_MinWidth.value;
        const hasCustomMaxWidth = maxWidth !== c_popover_MaxWidth.value;
        const onDocumentKeyDown = (event) => {
            if (event.keyCode === KEY_CODES.ESCAPE_KEY && visible) {
                if (triggerManually) {
                    shouldClose(null, hide, event);
                }
                else {
                    hide();
                }
            }
        };
        const onDocumentClick = (event, triggerElement, popperElement) => {
            if (hideOnOutsideClick && visible) {
                // check if we clicked within the popper, if so don't do anything
                const isChild = popperElement && popperElement.contains(event.target);
                if (isChild) {
                    // clicked within the popper
                    return;
                }
                if (triggerManually) {
                    shouldClose(null, hide, event);
                }
                else {
                    hide();
                }
            }
        };
        const onTriggerEnter = (event) => {
            if (event.keyCode === KEY_CODES.ENTER) {
                if (!visible) {
                    if (triggerManually) {
                        shouldOpen(show, event);
                    }
                    else {
                        show(true);
                    }
                }
                else {
                    if (triggerManually) {
                        shouldClose(null, hide, event);
                    }
                    else {
                        hide();
                    }
                }
            }
        };
        const onTriggerClick = (event) => {
            if (triggerManually) {
                if (visible) {
                    shouldClose(null, hide, event);
                }
                else {
                    shouldOpen(show, event);
                }
            }
            else {
                if (visible) {
                    hide();
                }
                else {
                    show();
                }
            }
        };
        const onContentMouseDown = () => {
            if (focusTrapActive) {
                setFocusTrapActive(false);
            }
        };
        const closePopover = (event) => {
            event.stopPropagation();
            if (triggerManually) {
                shouldClose(null, hide, event);
            }
            else {
                hide();
            }
        };
        const content = (React.createElement(FocusTrap, Object.assign({ active: focusTrapActive, focusTrapOptions: { returnFocusOnDeactivate: true, clickOutsideDeactivates: true }, className: css(styles$t.popover, hasNoPadding && styles$t.modifiers.noPadding, hasAutoWidth && styles$t.modifiers.widthAuto, className), role: "dialog", "aria-modal": "true", "aria-label": headerContent ? undefined : ariaLabel, "aria-labelledby": headerContent ? `popover-${uniqueId}-header` : undefined, "aria-describedby": `popover-${uniqueId}-body`, onMouseDown: onContentMouseDown, style: {
                minWidth: hasCustomMinWidth ? minWidth : null,
                maxWidth: hasCustomMaxWidth ? maxWidth : null,
                opacity,
                transition: getOpacityTransition(animationDuration)
            } }, rest),
            React.createElement(PopoverArrow, null),
            React.createElement(PopoverContent, null,
                showClose && React.createElement(PopoverCloseButton, { onClose: closePopover, "aria-label": closeBtnAriaLabel }),
                headerContent && (React.createElement(PopoverHeader, { id: `popover-${uniqueId}-header` }, typeof headerContent === 'function' ? headerContent(hide) : headerContent)),
                React.createElement(PopoverBody, { id: `popover-${uniqueId}-body` }, typeof bodyContent === 'function' ? bodyContent(hide) : bodyContent),
                footerContent && (React.createElement(PopoverFooter, { id: `popover-${uniqueId}-footer` }, typeof footerContent === 'function' ? footerContent(hide) : footerContent)))));
        return (React.createElement(Popper, { trigger: children, reference: reference, popper: content, popperMatchesTriggerWidth: false, appendTo: appendTo, isVisible: visible, positionModifiers: positionModifiers, distance: distance, placement: position, onTriggerClick: onTriggerClick, onTriggerEnter: onTriggerEnter, onDocumentClick: onDocumentClick, onDocumentKeyDown: onDocumentKeyDown, enableFlip: enableFlip, zIndex: zIndex, flipBehavior: flipBehavior }));
    };
    Popover.displayName = 'Popover';

    const OutlinedCalendarAltIconConfig = {
      name: 'OutlinedCalendarAltIcon',
      height: 512,
      width: 448,
      svgPath: 'M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z',
      yOffset: 0,
      xOffset: 0,
    };

    const OutlinedCalendarAltIcon = createIcon(OutlinedCalendarAltIconConfig);

    const DatePicker = (_a) => {
        var { className, locale = undefined, dateFormat = (date) => date.toISOString().substring(0, 10), dateParse = (val) => new Date(`${val}T00:00:00`), isDisabled = false, placeholder = 'yyyy-MM-dd', value: valueProp = '', 'aria-label': ariaLabel = 'Date picker', buttonAriaLabel = 'Toggle date picker', onChange = () => undefined, invalidFormatText = 'Invalid date', helperText, appendTo, popoverProps, monthFormat, weekdayFormat, longWeekdayFormat, dayFormat, weekStart, validators = [], rangeStart, style = {} } = _a, props = __rest(_a, ["className", "locale", "dateFormat", "dateParse", "isDisabled", "placeholder", "value", 'aria-label', "buttonAriaLabel", "onChange", "invalidFormatText", "helperText", "appendTo", "popoverProps", "monthFormat", "weekdayFormat", "longWeekdayFormat", "dayFormat", "weekStart", "validators", "rangeStart", "style"]);
        const [value, setValue] = React.useState(valueProp);
        const [valueDate, setValueDate] = React.useState(dateParse(value));
        const [errorText, setErrorText] = React.useState('');
        const [popoverOpen, setPopoverOpen] = React.useState(false);
        const [selectOpen, setSelectOpen] = React.useState(false);
        const [pristine, setPristine] = React.useState(true);
        const widthChars = React.useMemo(() => Math.max(dateFormat(new Date()).length, placeholder.length), [dateFormat]);
        style['--pf-c-date-picker__input--c-form-control--width-chars'] = widthChars;
        const buttonRef = React.useRef();
        React.useEffect(() => {
            setValue(valueProp);
            setValueDate(dateParse(valueProp));
        }, [valueProp]);
        const setError = (date) => setErrorText(validators.map(validator => validator(date)).join('\n') || '');
        const onTextInput = (value) => {
            setPristine(false);
            setValue(value);
            const newValueDate = dateParse(value);
            setValueDate(newValueDate);
            if (isValidDate(newValueDate)) {
                onChange(value, new Date(newValueDate));
            }
            else {
                onChange(value);
            }
        };
        const onBlur = () => {
            if (pristine) {
                return;
            }
            const newValueDate = dateParse(value);
            if (isValidDate(newValueDate)) {
                setError(newValueDate);
            }
            else {
                setErrorText(invalidFormatText);
            }
        };
        const onDateClick = (newValueDate) => {
            const newValue = dateFormat(newValueDate);
            setValue(newValue);
            setValueDate(newValueDate);
            setError(newValueDate);
            setPopoverOpen(false);
            onChange(newValue, new Date(newValueDate));
        };
        const onKeyPress = (ev) => {
            if (ev.key === 'Enter' && value) {
                if (isValidDate(valueDate)) {
                    setError(valueDate);
                }
                else {
                    setErrorText(invalidFormatText);
                }
            }
        };
        return (React.createElement("div", Object.assign({ className: css(datePickerStyles.datePicker, className), style: style }, props),
            React.createElement(Popover, Object.assign({ position: "bottom", bodyContent: React.createElement(CalendarMonth, { date: valueDate, onChange: onDateClick, locale: locale, 
                    // Use truthy values of strings
                    validators: validators.map(validator => (date) => !validator(date)), onSelectToggle: open => setSelectOpen(open), monthFormat: monthFormat, weekdayFormat: weekdayFormat, longWeekdayFormat: longWeekdayFormat, dayFormat: dayFormat, weekStart: weekStart, rangeStart: rangeStart }), showClose: false, isVisible: popoverOpen, shouldClose: (_1, _2, event) => {
                    event = event;
                    // Let the select menu close
                    if (event.keyCode && event.keyCode === 27 && selectOpen) {
                        return false;
                    }
                    // Let our button handle toggling
                    if (buttonRef.current && buttonRef.current.contains(event.target)) {
                        return false;
                    }
                    setPopoverOpen(false);
                    return true;
                }, withFocusTrap: true, hasNoPadding: true, hasAutoWidth: true, appendTo: appendTo }, popoverProps),
                React.createElement("div", { className: datePickerStyles.datePickerInput },
                    React.createElement(InputGroup, null,
                        React.createElement(TextInput, { isDisabled: isDisabled, "aria-label": ariaLabel, placeholder: placeholder, validated: errorText ? 'error' : 'default', value: value, onChange: onTextInput, onBlur: onBlur, onKeyPress: onKeyPress }),
                        React.createElement("button", { ref: buttonRef, className: css(buttonStyles.button, buttonStyles.modifiers.control), "aria-label": buttonAriaLabel, onClick: () => setPopoverOpen(!popoverOpen), disabled: isDisabled },
                            React.createElement(OutlinedCalendarAltIcon, null))))),
            helperText && React.createElement("div", { className: datePickerStyles.datePickerHelperText }, helperText),
            errorText && React.createElement("div", { className: css(datePickerStyles.datePickerHelperText, datePickerStyles.modifiers.error) }, errorText)));
    };
    DatePicker.displayName = 'DatePicker';

    var descriptionList = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "descriptionList": "pf-c-description-list",
      "descriptionListDescription": "pf-c-description-list__description",
      "descriptionListGroup": "pf-c-description-list__group",
      "descriptionListTerm": "pf-c-description-list__term",
      "descriptionListText": "pf-c-description-list__text",
      "modifiers": {
        "horizontal": "pf-m-horizontal",
        "inlineGrid": "pf-m-inline-grid",
        "autoColumnWidths": "pf-m-auto-column-widths",
        "autoFit": "pf-m-auto-fit",
        "1Col": "pf-m-1-col",
        "2Col": "pf-m-2-col",
        "3Col": "pf-m-3-col",
        "1ColOnMd": "pf-m-1-col-on-md",
        "2ColOnMd": "pf-m-2-col-on-md",
        "3ColOnMd": "pf-m-3-col-on-md",
        "1ColOnLg": "pf-m-1-col-on-lg",
        "2ColOnLg": "pf-m-2-col-on-lg",
        "3ColOnLg": "pf-m-3-col-on-lg",
        "1ColOnXl": "pf-m-1-col-on-xl",
        "2ColOnXl": "pf-m-2-col-on-xl",
        "3ColOnXl": "pf-m-3-col-on-xl",
        "1ColOn_2xl": "pf-m-1-col-on-2xl",
        "2ColOn_2xl": "pf-m-2-col-on-2xl",
        "3ColOn_2xl": "pf-m-3-col-on-2xl"
      }
    };
    });

    var styles$u = unwrapExports(descriptionList);

    const setAutoFitMinModifiers = (autoFitMinModifier) => {
        const prefix = '--pf-c-description-list--GridTemplateColumns--min';
        const mods = autoFitMinModifier;
        return Object.keys(mods || {}).reduce((acc, curr) => curr === 'default' ? Object.assign(Object.assign({}, acc), { [prefix]: mods[curr] }) : Object.assign(Object.assign({}, acc), { [`${prefix}-on-${curr}`]: mods[curr] }), {});
    };
    const DescriptionList = (_a) => {
        var { className = '', children = null, isHorizontal = false, isAutoColumnWidths, isAutoFit, isInlineGrid, columnModifier, autoFitMinModifier, style } = _a, props = __rest(_a, ["className", "children", "isHorizontal", "isAutoColumnWidths", "isAutoFit", "isInlineGrid", "columnModifier", "autoFitMinModifier", "style"]);
        return (React.createElement("dl", Object.assign({ className: css(styles$u.descriptionList, isHorizontal && styles$u.modifiers.horizontal, isAutoColumnWidths && styles$u.modifiers.autoColumnWidths, isAutoFit && styles$u.modifiers.autoFit, formatBreakpointMods(columnModifier, styles$u), isInlineGrid && styles$u.modifiers.inlineGrid, className), style: autoFitMinModifier || style
                ? Object.assign(Object.assign({}, (isAutoFit ? setAutoFitMinModifiers(autoFitMinModifier) : {})), style) : undefined }, props), children));
    };
    DescriptionList.displayName = 'DescriptionList';

    const DescriptionListGroup = ({ className, children }) => React.createElement("div", { className: css(styles$u.descriptionListGroup, className) }, children);
    DescriptionListGroup.displayName = 'DescriptionListGroup';

    const DescriptionListTerm = (_a) => {
        var { children, className } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("dt", Object.assign({ className: css(styles$u.descriptionListTerm, className) }, props),
            React.createElement("span", { className: 'pf-c-description-list__text' }, children)));
    };
    DescriptionListTerm.displayName = 'DescriptionListTerm';

    const DescriptionListDescription = (_a) => {
        var { children = null, className } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("dd", Object.assign({ className: css(styles$u.descriptionListDescription, className) }, props),
            React.createElement("div", { className: 'pf-c-description-list__text' }, children)));
    };
    DescriptionListDescription.displayName = 'DescriptionListDescription';

    var drawer = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "drawer": "pf-c-drawer",
      "drawerActions": "pf-c-drawer__actions",
      "drawerBody": "pf-c-drawer__body",
      "drawerClose": "pf-c-drawer__close",
      "drawerContent": "pf-c-drawer__content",
      "drawerHead": "pf-c-drawer__head",
      "drawerMain": "pf-c-drawer__main",
      "drawerPanel": "pf-c-drawer__panel",
      "drawerSection": "pf-c-drawer__section",
      "drawerSplitter": "pf-c-drawer__splitter",
      "drawerSplitterHandle": "pf-c-drawer__splitter-handle",
      "modifiers": {
        "panelBottom": "pf-m-panel-bottom",
        "inline": "pf-m-inline",
        "static": "pf-m-static",
        "panelLeft": "pf-m-panel-left",
        "expanded": "pf-m-expanded",
        "noBackground": "pf-m-no-background",
        "noPadding": "pf-m-no-padding",
        "padding": "pf-m-padding",
        "vertical": "pf-m-vertical",
        "resizable": "pf-m-resizable",
        "noBorder": "pf-m-no-border",
        "width_25": "pf-m-width-25",
        "width_33": "pf-m-width-33",
        "width_50": "pf-m-width-50",
        "width_66": "pf-m-width-66",
        "width_75": "pf-m-width-75",
        "width_100": "pf-m-width-100",
        "width_25OnLg": "pf-m-width-25-on-lg",
        "width_33OnLg": "pf-m-width-33-on-lg",
        "width_50OnLg": "pf-m-width-50-on-lg",
        "width_66OnLg": "pf-m-width-66-on-lg",
        "width_75OnLg": "pf-m-width-75-on-lg",
        "width_100OnLg": "pf-m-width-100-on-lg",
        "width_25OnXl": "pf-m-width-25-on-xl",
        "width_33OnXl": "pf-m-width-33-on-xl",
        "width_50OnXl": "pf-m-width-50-on-xl",
        "width_66OnXl": "pf-m-width-66-on-xl",
        "width_75OnXl": "pf-m-width-75-on-xl",
        "width_100OnXl": "pf-m-width-100-on-xl",
        "width_25On_2xl": "pf-m-width-25-on-2xl",
        "width_33On_2xl": "pf-m-width-33-on-2xl",
        "width_50On_2xl": "pf-m-width-50-on-2xl",
        "width_66On_2xl": "pf-m-width-66-on-2xl",
        "width_75On_2xl": "pf-m-width-75-on-2xl",
        "width_100On_2xl": "pf-m-width-100-on-2xl",
        "inlineOnLg": "pf-m-inline-on-lg",
        "staticOnLg": "pf-m-static-on-lg",
        "inlineOnXl": "pf-m-inline-on-xl",
        "staticOnXl": "pf-m-static-on-xl",
        "inlineOn_2xl": "pf-m-inline-on-2xl",
        "staticOn_2xl": "pf-m-static-on-2xl"
      },
      "pageMain": "pf-c-page__main"
    };
    });

    var styles$v = unwrapExports(drawer);

    const DrawerContext = React.createContext({
        isExpanded: false,
        isStatic: false,
        onExpand: () => { },
        position: 'right'
    });
    const Drawer = (_a) => {
        var { className = '', children, isExpanded = false, isInline = false, isStatic = false, position = 'right', onExpand = () => { } } = _a, props = __rest(_a, ["className", "children", "isExpanded", "isInline", "isStatic", "position", "onExpand"]);
        return (React.createElement(DrawerContext.Provider, { value: { isExpanded, isStatic, onExpand, position } },
            React.createElement("div", Object.assign({ className: css(styles$v.drawer, isExpanded && styles$v.modifiers.expanded, isInline && styles$v.modifiers.inline, isStatic && styles$v.modifiers.static, position === 'left' && styles$v.modifiers.panelLeft, position === 'bottom' && styles$v.modifiers.panelBottom, className) }, props), children)));
    };
    Drawer.displayName = 'Drawer';

    const DrawerActions = (_a) => {
        var { 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        className = '', children } = _a, props = __rest(_a, ["className", "children"]);
        return (React.createElement("div", Object.assign({ className: css(styles$v.drawerActions, className) }, props), children));
    };
    DrawerActions.displayName = 'DrawerActions';

    const DrawerCloseButton = (_a) => {
        var { 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        className = '', onClose = () => undefined, 'aria-label': ariaLabel = 'Close drawer panel' } = _a, props = __rest(_a, ["className", "onClose", 'aria-label']);
        return (React.createElement("div", Object.assign({ className: css(styles$v.drawerClose, className) }, props),
            React.createElement(Button, { variant: "plain", onClick: onClose, "aria-label": ariaLabel },
                React.createElement(TimesIcon, null))));
    };
    DrawerCloseButton.displayName = 'DrawerCloseButton';

    const DrawerMain = (_a) => {
        var { 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        className = '', children } = _a, props = __rest(_a, ["className", "children"]);
        return (React.createElement("div", Object.assign({ className: css(styles$v.drawerMain, className) }, props), children));
    };
    DrawerMain.displayName = 'DrawerMain';

    const DrawerContent = (_a) => {
        var { 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        className = '', children, panelContent } = _a, props = __rest(_a, ["className", "children", "panelContent"]);
        return (React.createElement(DrawerMain, null,
            React.createElement("div", Object.assign({ className: css(styles$v.drawerContent, className) }, props), children),
            panelContent));
    };
    DrawerContent.displayName = 'DrawerContent';

    const DrawerContentBody = (_a) => {
        var { 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        className = '', children, hasPadding = false } = _a, props = __rest(_a, ["className", "children", "hasPadding"]);
        return (React.createElement("div", Object.assign({ className: css(styles$v.drawerBody, hasPadding && styles$v.modifiers.padding, className) }, props), children));
    };
    DrawerContentBody.displayName = 'DrawerContentBody';

    const DrawerPanelBody = (_a) => {
        var { 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        className = '', children, hasNoPadding = false } = _a, props = __rest(_a, ["className", "children", "hasNoPadding"]);
        return (React.createElement("div", Object.assign({ className: css(styles$v.drawerBody, hasNoPadding && styles$v.modifiers.noPadding, className) }, props), children));
    };
    DrawerPanelBody.displayName = 'DrawerPanelBody';

    const DrawerHead = (_a) => {
        var { 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        className = '', children, hasNoPadding = false } = _a, props = __rest(_a, ["className", "children", "hasNoPadding"]);
        return (React.createElement(DrawerPanelBody, { hasNoPadding: hasNoPadding },
            React.createElement("div", Object.assign({ className: css(styles$v.drawerHead, className) }, props), children)));
    };
    DrawerHead.displayName = 'DrawerHead';

    let isResizing = null;
    let newSize = 0;
    const DrawerPanelContent = (_a) => {
        var { className = '', children, hasNoBorder = false, isResizable = false, minSize, maxSize, increment = 5, resizeAriaLabel = 'Resize', resizeAriaDescribedBy = 'Press space to begin resizing, and use the arrow keys to grow or shrink the panel. Press enter or escape to finish resizing.', widths } = _a, props = __rest(_a, ["className", "children", "hasNoBorder", "isResizable", "minSize", "maxSize", "increment", "resizeAriaLabel", "resizeAriaDescribedBy", "widths"]);
        const panel = React.useRef();
        const { position, isExpanded, isStatic, onExpand } = React.useContext(DrawerContext);
        const handleMousedown = (e) => {
            e.stopPropagation();
            e.preventDefault();
            document.addEventListener('mousemove', callbackMouseMove);
            document.addEventListener('mouseup', callbackMouseUp);
            isResizing = true;
        };
        const handleMousemove = (e) => {
            if (!isResizing) {
                return;
            }
            const panelRect = panel.current.getBoundingClientRect();
            const parentRect = panel.current.parentElement.getBoundingClientRect();
            const min = minSize ? minSize : 0;
            const max = maxSize ? maxSize : position === 'bottom' ? parentRect.height : parentRect.width;
            const mousePos = position === 'bottom' ? e.clientY : e.clientX;
            let newSize = 0;
            if (position === 'right') {
                newSize = panelRect.right - mousePos;
            }
            else if (position === 'left') {
                newSize = mousePos - panelRect.left;
            }
            else {
                newSize = panelRect.bottom - mousePos;
            }
            if (newSize >= min && newSize <= max) {
                if (position === 'bottom') {
                    panel.current.style.overflowAnchor = 'none';
                }
                if (maxSize) {
                    panel.current.style.setProperty('--pf-c-drawer__panel--FlexBasis', newSize + 'px');
                }
                else {
                    panel.current.style.setProperty('--pf-c-drawer__panel--FlexBasis', (newSize / max) * 100 + '%');
                }
            }
        };
        const handleMouseup = () => {
            if (!isResizing) {
                return;
            }
            isResizing = false;
            document.removeEventListener('mousemove', callbackMouseMove);
            document.removeEventListener('mouseup', callbackMouseUp);
        };
        const callbackMouseMove = React.useCallback(handleMousemove, []);
        const callbackMouseUp = React.useCallback(handleMouseup, []);
        const handleKeys = (e) => {
            const key = e.key;
            if (key !== ' ' &&
                key !== 'Escape' &&
                key !== 'Enter' &&
                key !== 'ArrowUp' &&
                key !== 'ArrowDown' &&
                key !== 'ArrowLeft' &&
                key !== 'ArrowRight') {
                if (isResizing) {
                    e.preventDefault();
                }
                return;
            }
            e.preventDefault();
            if (key === ' ' || key === 'Escape' || key === 'Enter') {
                if (key === ' ') {
                    isResizing = true;
                }
                else {
                    isResizing = false;
                }
                const panelRect = panel.current.getBoundingClientRect();
                newSize = position === 'bottom' ? panelRect.height : panelRect.width;
            }
            if (isResizing) {
                const parentRect = panel.current.parentElement.getBoundingClientRect();
                const min = minSize ? minSize : 0;
                const max = maxSize ? maxSize : position === 'bottom' ? parentRect.height : parentRect.width;
                let delta = 0;
                if (key === 'ArrowRight') {
                    delta = position === 'left' ? increment : -increment;
                }
                else if (key === 'ArrowLeft') {
                    delta = position === 'left' ? -increment : increment;
                }
                else if (key === 'ArrowUp') {
                    delta = increment;
                }
                else if (key === 'ArrowDown') {
                    delta = -increment;
                }
                if (newSize + delta >= min && newSize + delta <= max) {
                    newSize = newSize + delta;
                    if (position === 'bottom') {
                        panel.current.style.overflowAnchor = 'none';
                    }
                    if (maxSize) {
                        panel.current.style.setProperty('--pf-c-drawer__panel--FlexBasis', newSize + 'px');
                    }
                    else {
                        panel.current.style.setProperty('--pf-c-drawer__panel--FlexBasis', (newSize / max) * 100 + '%');
                    }
                }
            }
        };
        const hidden = isStatic ? false : !isExpanded;
        return (React.createElement("div", Object.assign({ className: css(styles$v.drawerPanel, isResizable && styles$v.modifiers.resizable, hasNoBorder && styles$v.modifiers.noBorder, formatBreakpointMods(widths, styles$v), className), ref: panel, onTransitionEnd: ev => {
                if (!hidden && ev.nativeEvent.propertyName === 'transform') {
                    onExpand();
                }
            }, hidden: hidden }, props), !hidden && (React.createElement(React.Fragment, null,
            isResizable && (React.createElement("div", { className: css(styles$v.drawerSplitter, position !== 'bottom' && styles$v.modifiers.vertical), role: "separator", tabIndex: 0, "aria-orientation": position === 'bottom' ? 'horizontal' : 'vertical', "aria-label": resizeAriaLabel, "aria-describedby": resizeAriaDescribedBy, onMouseDown: handleMousedown, onKeyDown: handleKeys },
                React.createElement("div", { className: css(styles$v.drawerSplitterHandle), "aria-hidden": true }))),
            children))));
    };
    DrawerPanelContent.displayName = 'DrawerPanelContent';

    const DrawerSection = (_a) => {
        var { 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        className = '', children } = _a, props = __rest(_a, ["className", "children"]);
        return (React.createElement("div", Object.assign({ className: css(styles$v.drawerSection, className) }, props), children));
    };
    DrawerSection.displayName = 'DrawerSection';

    var dualListSelector = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "badge": "pf-c-badge",
      "dualListSelector": "pf-c-dual-list-selector",
      "dualListSelectorControls": "pf-c-dual-list-selector__controls",
      "dualListSelectorHeader": "pf-c-dual-list-selector__header",
      "dualListSelectorItem": "pf-c-dual-list-selector__item",
      "dualListSelectorItemCheck": "pf-c-dual-list-selector__item-check",
      "dualListSelectorItemCount": "pf-c-dual-list-selector__item-count",
      "dualListSelectorItemMain": "pf-c-dual-list-selector__item-main",
      "dualListSelectorItemText": "pf-c-dual-list-selector__item-text",
      "dualListSelectorItemToggle": "pf-c-dual-list-selector__item-toggle",
      "dualListSelectorItemToggleIcon": "pf-c-dual-list-selector__item-toggle-icon",
      "dualListSelectorList": "pf-c-dual-list-selector__list",
      "dualListSelectorListItem": "pf-c-dual-list-selector__list-item",
      "dualListSelectorMain": "pf-c-dual-list-selector__main",
      "dualListSelectorMenu": "pf-c-dual-list-selector__menu",
      "dualListSelectorPane": "pf-c-dual-list-selector__pane",
      "dualListSelectorStatus": "pf-c-dual-list-selector__status",
      "dualListSelectorStatusText": "pf-c-dual-list-selector__status-text",
      "dualListSelectorTitleText": "pf-c-dual-list-selector__title-text",
      "dualListSelectorTools": "pf-c-dual-list-selector__tools",
      "dualListSelectorToolsActions": "pf-c-dual-list-selector__tools-actions",
      "dualListSelectorToolsFilter": "pf-c-dual-list-selector__tools-filter",
      "modifiers": {
        "chosen": "pf-m-chosen",
        "expandable": "pf-m-expandable",
        "expanded": "pf-m-expanded",
        "selected": "pf-m-selected",
        "check": "pf-m-check",
        "read": "pf-m-read"
      }
    };
    });

    var styles$w = unwrapExports(dualListSelector);

    const AngleDoubleLeftIconConfig = {
      name: 'AngleDoubleLeftIcon',
      height: 512,
      width: 448,
      svgPath: 'M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z',
      yOffset: 0,
      xOffset: 0,
    };

    const AngleDoubleLeftIcon = createIcon(AngleDoubleLeftIconConfig);

    const AngleLeftIconConfig = {
      name: 'AngleLeftIcon',
      height: 512,
      width: 256,
      svgPath: 'M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z',
      yOffset: 0,
      xOffset: 0,
    };

    const AngleLeftIcon = createIcon(AngleLeftIconConfig);

    const AngleDoubleRightIconConfig = {
      name: 'AngleDoubleRightIcon',
      height: 512,
      width: 448,
      svgPath: 'M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z',
      yOffset: 0,
      xOffset: 0,
    };

    const AngleDoubleRightIcon = createIcon(AngleDoubleRightIconConfig);

    class DualListSelectorListItem extends React.Component {
        constructor() {
            super(...arguments);
            this.ref = React.createRef();
        }
        componentDidMount() {
            this.props.sendRef(this.ref.current, this.props.filteredIndex);
        }
        componentDidUpdate() {
            this.props.sendRef(this.ref.current, this.props.filteredIndex);
        }
        render() {
            const _a = this.props, { onOptionSelect, orderIndex, children, className, id, isSelected, isChosen, 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            sendRef, filteredIndex } = _a, props = __rest(_a, ["onOptionSelect", "orderIndex", "children", "className", "id", "isSelected", "isChosen", "sendRef", "filteredIndex"]);
            return (React.createElement("li", Object.assign({ className: css(styles$w.dualListSelectorListItem, className), key: orderIndex }, props, { "aria-selected": isSelected, role: "option" }),
                React.createElement("button", { className: css(styles$w.dualListSelectorItem, isSelected && styles$w.modifiers.selected), onClick: e => onOptionSelect(e, orderIndex, isChosen), id: id, ref: this.ref, tabIndex: -1 },
                    React.createElement("span", { className: css(styles$w.dualListSelectorItemMain) },
                        React.createElement("span", { className: css(styles$w.dualListSelectorItemText) }, children)))));
        }
    }
    DualListSelectorListItem.displayName = 'DualListSelectorListItem';

    function flattenTree(tree) {
        let result = [];
        tree.forEach(item => {
            if (item.children) {
                result = result.concat(flattenTree(item.children));
            }
            else {
                result.push(item.id);
            }
        });
        return result;
    }
    function flattenTreeWithFolders(tree) {
        let result = [];
        tree.forEach(item => {
            result.push(item.id);
            if (item.children) {
                result = result.concat(flattenTreeWithFolders(item.children));
            }
        });
        return result;
    }
    function filterFolders(tree, inputList) {
        let result = [];
        tree.forEach(item => {
            if (item.children) {
                result = result.concat(filterFolders(item.children, inputList));
            }
            else {
                if (inputList.includes(item.id)) {
                    result.push(item.id);
                }
            }
        });
        return result;
    }
    function filterTreeItems(item, inputList) {
        if (inputList.includes(item.id)) {
            return true;
        }
        if (item.children) {
            return ((item.children = item.children
                .map(opt => Object.assign({}, opt))
                .filter(child => filterTreeItems(child, inputList))).length > 0);
        }
    }
    function filterTreeItemsWithoutFolders(item, inputList) {
        if (item.children) {
            return ((item.children = item.children
                .map(opt => Object.assign({}, opt))
                .filter(child => filterTreeItems(child, inputList))).length > 0);
        }
        if (inputList.includes(item.id)) {
            return true;
        }
    }
    function filterRestTreeItems(item, inputList) {
        if (item.children) {
            const child = (item.children = item.children
                .map(opt => Object.assign({}, opt))
                .filter(child => filterRestTreeItems(child, inputList))).length > 0;
            return child;
        }
        if (!inputList.includes(item.id)) {
            return true;
        }
    }

    class DualListSelectorTreeItem extends React.Component {
        constructor() {
            super(...arguments);
            this.ref = React.createRef();
            this.state = {
                isExpanded: this.props.defaultExpanded || false
            };
        }
        render() {
            const _a = this.props, { onOptionCheck, 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            onOptionSelect, children, className, id, text, isSelected, isChosen, defaultExpanded, hasBadge, isChecked, checkProps, badgeProps, parentItem, itemData } = _a, props = __rest(_a, ["onOptionCheck", "onOptionSelect", "children", "className", "id", "text", "isSelected", "isChosen", "defaultExpanded", "hasBadge", "isChecked", "checkProps", "badgeProps", "parentItem", "itemData"]);
            const { isExpanded } = this.state;
            return (React.createElement("li", Object.assign({ className: css(styles$w.dualListSelectorListItem, className, children && styles$w.modifiers.expandable, isExpanded && styles$w.modifiers.expanded), id: id }, props, { "aria-selected": isSelected, role: "treeitem" }, (isExpanded && { 'aria-expanded': 'true' })),
                React.createElement("div", { className: css(styles$w.dualListSelectorItem, isSelected && styles$w.modifiers.selected, styles$w.modifiers.check), ref: this.ref, tabIndex: -1, onClick: evt => {
                        onOptionCheck && onOptionCheck(evt, !isChecked, isChosen, itemData);
                    } },
                    React.createElement("span", { className: css(styles$w.dualListSelectorItemMain) },
                        children && (React.createElement("div", { className: css(styles$w.dualListSelectorItemToggle), onClick: e => {
                                if (children) {
                                    this.setState({ isExpanded: !this.state.isExpanded });
                                }
                                e.stopPropagation();
                            } },
                            React.createElement("span", { className: css(styles$w.dualListSelectorItemToggleIcon) },
                                React.createElement(AngleRightIcon, { "aria-hidden": true })))),
                        React.createElement("span", { className: css(styles$w.dualListSelectorItemCheck) },
                            React.createElement("input", Object.assign({ type: "checkbox", onChange: (evt) => onOptionCheck && onOptionCheck(evt, !isChecked, isChosen, itemData), onClick: (evt) => evt.stopPropagation(), ref: elem => elem && (elem.indeterminate = isChecked === null), checked: isChecked || false }, checkProps))),
                        React.createElement("span", { className: css(styles$w.dualListSelectorItemText) }, text),
                        hasBadge && children && (React.createElement("span", { className: css(styles$w.dualListSelectorItemCount) },
                            React.createElement(Badge, Object.assign({}, badgeProps), flattenTree(children.props.data).length))))),
                isExpanded && children));
        }
    }
    DualListSelectorTreeItem.displayName = 'DualListSelectorTreeItem';

    const DualListSelectorTree = (_a) => {
        var { data, isChosen, hasBadges = false, isNested = false, defaultAllExpanded = false, parentItem, onOptionSelect, onOptionCheck, selectedOptions = [] } = _a, props = __rest(_a, ["data", "isChosen", "hasBadges", "isNested", "defaultAllExpanded", "parentItem", "onOptionSelect", "onOptionCheck", "selectedOptions"]);
        return (React.createElement("ul", Object.assign({ className: css(styles$w.dualListSelectorList), role: isNested ? 'group' : 'tree' }, props), data.map(item => (React.createElement(DualListSelectorTreeItem, Object.assign({ key: item.id, text: item.text, id: item.id, isChosen: isChosen, isSelected: selectedOptions.includes(item.id), defaultExpanded: item.defaultExpanded !== undefined ? item.defaultExpanded : defaultAllExpanded, onOptionSelect: onOptionSelect, onOptionCheck: onOptionCheck, isChecked: item.isChecked, checkProps: item.checkProps, hasBadge: item.hasBadge !== undefined ? item.hasBadge : hasBadges, badgeProps: item.badgeProps, parentItem: parentItem, itemData: item }, (item.children && {
            children: (React.createElement(DualListSelectorTree, { isNested: true, data: item.children, parentItem: item, hasBadges: hasBadges, isChosen: isChosen, defaultAllExpanded: defaultAllExpanded, onOptionSelect: onOptionSelect, onOptionCheck: onOptionCheck, selectedOptions: selectedOptions }))
        })))))));
    };
    DualListSelectorTree.displayName = 'DualListSelectorTree';

    class DualListSelectorPane extends React.Component {
        constructor(props) {
            super(props);
            this.menuEl = React.createRef();
            this.optionsRefs = [];
            this.onChange = (e) => {
                this.setState({ input: e.target.value });
                this.optionsRefs = [];
            };
            this.sendRef = (optionRef, index) => {
                this.optionsRefs[index] = optionRef;
            };
            this.handleKeys = (event) => {
                const key = event.key;
                let moveFocus = false;
                let currentIndex = -1;
                if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
                    if (document.activeElement === this.menuEl.current) {
                        currentIndex = 0;
                        moveFocus = true;
                        event.preventDefault();
                    }
                    else {
                        this.optionsRefs.forEach((option, index) => {
                            if (document.activeElement === option) {
                                currentIndex = key === 'ArrowUp' || key === 'ArrowLeft' ? index - 1 : index + 1;
                                moveFocus = true;
                                event.preventDefault();
                            }
                        });
                    }
                }
                if (moveFocus && this.optionsRefs[currentIndex]) {
                    this.optionsRefs[currentIndex].focus();
                    this.setState({ focusedOption: `${this.props.id}-option-${currentIndex}` });
                }
            };
            this.filterInput = (item, input) => {
                if (this.props.filterOption) {
                    return this.props.filterOption(item, input);
                }
                else {
                    if (item.text.toLowerCase().includes(input.toLowerCase()) || input === '') {
                        return true;
                    }
                }
                if (item.children) {
                    return ((item.children = item.children
                        .map(opt => Object.assign({}, opt))
                        .filter(child => this.filterInput(child, input))).length > 0);
                }
            };
            this.displayOption = (option, input) => {
                if (this.props.filterOption) {
                    return this.props.filterOption(option, input);
                }
                else {
                    return option
                        .toString()
                        .toLowerCase()
                        .includes(input.toLowerCase());
                }
            };
            this.onOptionSelect = (e, index, isChosen, text, itemData, parentItem) => {
                this.setState({ focusedOption: `${this.props.id}-option-${index}` });
                this.props.onOptionSelect(e, index, isChosen, text, itemData, parentItem);
            };
            this.state = {
                input: '',
                focusedOption: null
            };
        }
        componentDidMount() {
            window.addEventListener('keydown', this.handleKeys);
        }
        componentWillUnmount() {
            window.removeEventListener('keydown', this.handleKeys);
        }
        render() {
            const _a = this.props, { isChosen, title, actions, isSearchable, isTree, searchInputAriaLabel, className, status, selectedOptions, options, id, 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            filterOption, onOptionSelect, onOptionCheck } = _a, props = __rest(_a, ["isChosen", "title", "actions", "isSearchable", "isTree", "searchInputAriaLabel", "className", "status", "selectedOptions", "options", "id", "filterOption", "onOptionSelect", "onOptionCheck"]);
            const { input, focusedOption } = this.state;
            let displayIndex = -1;
            return (React.createElement("div", Object.assign({ className: css(styles$w.dualListSelectorPane, isChosen ? styles$w.modifiers.chosen : 'pf-m-available', className) }, props),
                title && (React.createElement("div", { className: css(styles$w.dualListSelectorHeader) },
                    React.createElement("div", { className: "pf-c-dual-list-selector__title" },
                        React.createElement("div", { className: css(styles$w.dualListSelectorTitleText) }, title)))),
                (actions || isSearchable) && (React.createElement("div", { className: css(styles$w.dualListSelectorTools) },
                    isSearchable && (React.createElement("div", { className: css(styles$w.dualListSelectorToolsFilter) },
                        React.createElement("input", { className: css(formStyles.formControl, formStyles.modifiers.search), type: "search", onChange: this.onChange, "aria-label": searchInputAriaLabel }))),
                    actions && React.createElement("div", { className: css(styles$w.dualListSelectorToolsActions) }, actions))),
                status && (React.createElement("div", { className: css(styles$w.dualListSelectorStatus) },
                    React.createElement("div", { className: css(styles$w.dualListSelectorStatusText), id: `${id}-status` }, status))),
                options && !isTree && (React.createElement("div", { className: css(styles$w.dualListSelectorMenu), ref: this.menuEl, tabIndex: 0 },
                    React.createElement("ul", { className: css(styles$w.dualListSelectorList), role: "listbox", "aria-multiselectable": "true", "aria-labelledby": `${id}-status`, "aria-activedescendant": focusedOption }, options.map((option, index) => {
                        if (this.displayOption(option, input)) {
                            displayIndex = displayIndex + 1;
                            return (React.createElement(DualListSelectorListItem, { key: index, isSelected: selectedOptions.indexOf(index) !== -1, onOptionSelect: this.onOptionSelect, isChosen: isChosen, orderIndex: index, filteredIndex: displayIndex, sendRef: this.sendRef, id: `${id}-option-${index}` }, option));
                        }
                        return;
                    })))),
                options && isTree && (React.createElement("div", { className: css(styles$w.dualListSelectorMenu), ref: this.menuEl, tabIndex: 0 },
                    React.createElement(DualListSelectorTree, { data: isSearchable
                            ? options
                                .map(opt => Object.assign({}, opt))
                                .filter(item => this.filterInput(item, input))
                            : options, isChosen: isChosen, onOptionSelect: this.onOptionSelect, onOptionCheck: onOptionCheck, selectedOptions: selectedOptions })))));
        }
    }
    DualListSelectorPane.displayName = 'DualListSelectorPane';
    DualListSelectorPane.defaultProps = {
        isChosen: false,
        status: '',
        title: '',
        options: [],
        selectedOptions: [],
        isSearchable: false,
        searchInputAriaLabel: ''
    };

    class DualListSelector extends React.Component {
        constructor(props) {
            super(props);
            this.controlsEl = React.createRef();
            this.originalCopy = this.props.availableOptions;
            this.addAll = () => {
                this.setState(prevState => {
                    let newChosen = [];
                    if (this.props.isTree) {
                        newChosen = this.originalCopy;
                    }
                    else {
                        newChosen = [...prevState.chosenOptions, ...prevState.availableOptions];
                    }
                    this.props.addAll && this.props.addAll([], newChosen);
                    this.props.onListChange && this.props.onListChange([], newChosen);
                    return {
                        availableOptions: [],
                        availableOptionsSelected: [],
                        chosenOptions: newChosen,
                        chosenOptionsSelected: []
                    };
                });
            };
            this.removeAll = () => {
                this.setState(prevState => {
                    let newAvailable = [];
                    if (this.props.isTree) {
                        newAvailable = this.originalCopy;
                    }
                    else {
                        newAvailable = [...prevState.chosenOptions, ...prevState.availableOptions];
                    }
                    this.props.removeAll && this.props.removeAll(newAvailable, []);
                    this.props.onListChange && this.props.onListChange(newAvailable, []);
                    return {
                        availableOptions: newAvailable,
                        availableOptionsSelected: [],
                        chosenOptions: [],
                        chosenOptionsSelected: []
                    };
                });
            };
            this.addSelected = () => {
                this.setState(prevState => {
                    const itemsToRemove = [];
                    const newAvailable = [];
                    prevState.availableOptions.forEach((value, index) => {
                        if (prevState.availableOptionsSelected.indexOf(index) !== -1) {
                            itemsToRemove.push(value);
                        }
                        else {
                            newAvailable.push(value);
                        }
                    });
                    const newChosen = [...prevState.chosenOptions, ...itemsToRemove];
                    this.props.addSelected && this.props.addSelected(newAvailable, newChosen);
                    this.props.onListChange && this.props.onListChange(newAvailable, newChosen);
                    return {
                        chosenOptionsSelected: [],
                        availableOptionsSelected: [],
                        chosenOptions: newChosen,
                        availableOptions: newAvailable
                    };
                });
            };
            this.addTreeSelected = () => {
                this.setState(prevState => {
                    // Remove selected available nodes from current available nodes
                    const newAvailable = prevState.availableOptions
                        .map(opt => Object.assign({}, opt))
                        .filter(item => filterRestTreeItems(item, prevState.availableTreeOptionsSelected));
                    // Get next chosen options from current + new nodes and remap from base
                    const currChosen = flattenTree(prevState.chosenOptions);
                    const nextChosenOptions = currChosen.concat(prevState.availableTreeOptionsSelected);
                    const newChosen = this.originalCopy
                        .map(opt => Object.assign({}, opt))
                        .filter(item => filterTreeItemsWithoutFolders(item, nextChosenOptions));
                    this.props.addSelected && this.props.addSelected(newAvailable, newChosen);
                    this.props.onListChange && this.props.onListChange(newAvailable, newChosen);
                    return {
                        availableTreeOptionsSelected: [],
                        chosenTreeOptionsSelected: [],
                        availableTreeOptionsChecked: [],
                        chosenTreeOptionsChecked: [],
                        availableOptions: newAvailable,
                        chosenOptions: newChosen
                    };
                });
            };
            this.removeSelected = () => {
                this.setState(prevState => {
                    const itemsToRemove = [];
                    const newChosen = [];
                    prevState.chosenOptions.forEach((value, index) => {
                        if (prevState.chosenOptionsSelected.indexOf(index) !== -1) {
                            itemsToRemove.push(value);
                        }
                        else {
                            newChosen.push(value);
                        }
                    });
                    const newAvailable = [...prevState.availableOptions, ...itemsToRemove];
                    this.props.removeSelected && this.props.removeSelected(newAvailable, newChosen);
                    this.props.onListChange && this.props.onListChange(newAvailable, newChosen);
                    return {
                        chosenOptionsSelected: [],
                        availableOptionsSelected: [],
                        chosenOptions: newChosen,
                        availableOptions: newAvailable
                    };
                });
            };
            this.removeTreeSelected = () => {
                this.setState(prevState => {
                    // Remove selected chosen nodes from current chosen nodes
                    const newChosen = prevState.chosenOptions
                        .map(opt => Object.assign({}, opt))
                        .filter(item => filterRestTreeItems(item, prevState.chosenTreeOptionsSelected));
                    // Get next chosen options from current and remap from base
                    const currAvailable = flattenTree(prevState.availableOptions);
                    const nextAvailableOptions = currAvailable.concat(prevState.chosenTreeOptionsSelected);
                    const newAvailable = this.originalCopy
                        .map(opt => Object.assign({}, opt))
                        .filter(item => filterTreeItemsWithoutFolders(item, nextAvailableOptions));
                    this.props.removeSelected && this.props.removeSelected(newAvailable, newChosen);
                    this.props.onListChange && this.props.onListChange(newAvailable, newChosen);
                    return {
                        availableTreeOptionsSelected: [],
                        chosenTreeOptionsSelected: [],
                        availableTreeOptionsChecked: [],
                        chosenTreeOptionsChecked: [],
                        availableOptions: newAvailable,
                        chosenOptions: newChosen
                    };
                });
            };
            this.onOptionSelect = (e, index, isChosen, 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            id, itemData, parentData
            /* eslint-enable @typescript-eslint/no-unused-vars */
            ) => {
                this.setState(prevState => {
                    const originalArray = isChosen ? prevState.chosenOptionsSelected : prevState.availableOptionsSelected;
                    let updatedArray = null;
                    if (originalArray.indexOf(index) !== -1) {
                        updatedArray = originalArray.filter(value => value !== index);
                    }
                    else {
                        updatedArray = [...originalArray, index];
                    }
                    return {
                        chosenOptionsSelected: isChosen ? updatedArray : prevState.chosenOptionsSelected,
                        availableOptionsSelected: isChosen ? prevState.availableOptionsSelected : updatedArray
                    };
                });
                this.props.onOptionSelect && this.props.onOptionSelect(e);
            };
            this.onTreeOptionSelect = (e, index, isChosen, id, itemData, 
            /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
            parentData) => {
                this.setState(prevState => {
                    const selectedOptions = isChosen ? prevState.chosenTreeOptionsSelected : prevState.availableTreeOptionsSelected;
                    let updatedArray = null;
                    if (itemData.children) {
                        const panelOptions = isChosen ? this.state.chosenOptions : this.state.availableOptions;
                        const selectedOptionTree = panelOptions
                            .map(opt => Object.assign({}, opt))
                            .filter(item => filterTreeItems(item, [id]));
                        const flatSelectedItems = flattenTreeWithFolders(selectedOptionTree);
                        if (selectedOptions.includes(id)) {
                            updatedArray = selectedOptions.filter(id => !flatSelectedItems.includes(id));
                        }
                        else {
                            updatedArray = selectedOptions.concat(flatSelectedItems.filter(id => !selectedOptions.includes(id)));
                        }
                    }
                    else {
                        if (selectedOptions.includes(id)) {
                            updatedArray = selectedOptions.filter(id => !selectedOptions.includes(id));
                        }
                        else {
                            updatedArray = [...selectedOptions, id];
                        }
                    }
                    return {
                        chosenTreeOptionsSelected: isChosen ? updatedArray : prevState.chosenTreeOptionsSelected,
                        availableTreeOptionsSelected: isChosen ? prevState.availableTreeOptionsSelected : updatedArray
                    };
                });
                this.props.onOptionSelect && this.props.onOptionSelect(e);
            };
            this.isChecked = (treeItem, isChosen) => isChosen
                ? this.state.chosenTreeOptionsChecked.includes(treeItem.id)
                : this.state.availableTreeOptionsChecked.includes(treeItem.id);
            this.areAllDescendantsChecked = (treeItem, isChosen) => treeItem.children
                ? treeItem.children.every(child => this.areAllDescendantsChecked(child, isChosen))
                : this.isChecked(treeItem, isChosen);
            this.areSomeDescendantsChecked = (treeItem, isChosen) => treeItem.children
                ? treeItem.children.some(child => this.areSomeDescendantsChecked(child, isChosen))
                : this.isChecked(treeItem, isChosen);
            this.mapChecked = (item, isChosen) => {
                const hasCheck = this.areAllDescendantsChecked(item, isChosen);
                item.isChecked = false;
                if (hasCheck) {
                    item.isChecked = true;
                }
                else {
                    const hasPartialCheck = this.areSomeDescendantsChecked(item, isChosen);
                    if (hasPartialCheck) {
                        item.isChecked = null;
                    }
                }
                if (item.children) {
                    return Object.assign(Object.assign({}, item), { children: item.children.map(child => this.mapChecked(child, isChosen)) });
                }
                return item;
            };
            this.onTreeOptionCheck = (evt, isChecked, isChosen, itemData) => {
                const checked = evt.target.checked
                    ? evt.target.checked
                    : isChecked;
                const panelOptions = isChosen ? this.state.chosenOptions : this.state.availableOptions;
                const checkedOptionTree = panelOptions
                    .map(opt => Object.assign({}, opt))
                    .filter(item => filterTreeItems(item, [itemData.id]));
                const flatTree = flattenTreeWithFolders(checkedOptionTree);
                const prevChecked = isChosen ? this.state.chosenTreeOptionsChecked : this.state.availableTreeOptionsChecked;
                let updatedChecked = [];
                let updatedSelected = [];
                const selectedOptions = isChosen ? this.state.chosenTreeOptionsSelected : this.state.availableTreeOptionsSelected;
                if (checked) {
                    updatedChecked = prevChecked.concat(flatTree.filter(id => !prevChecked.includes(id)));
                    updatedSelected = selectedOptions.concat(flatTree.filter(id => !selectedOptions.includes(id)));
                }
                else {
                    updatedChecked = prevChecked.filter(id => !flatTree.includes(id));
                    updatedSelected = selectedOptions.filter(id => !flatTree.includes(id));
                }
                this.setState(prevState => ({
                    availableTreeOptionsChecked: isChosen ? prevState.availableTreeOptionsChecked : updatedChecked,
                    chosenTreeOptionsChecked: isChosen ? updatedChecked : prevState.chosenTreeOptionsChecked,
                    availableTreeOptionsSelected: isChosen ? prevState.availableTreeOptionsSelected : updatedSelected,
                    chosenTreeOptionsSelected: isChosen ? updatedSelected : prevState.chosenTreeOptionsSelected
                }), () => {
                    this.props.onOptionCheck && this.props.onOptionCheck(evt, isChecked, itemData.id, updatedChecked);
                });
                this.props.onOptionSelect && this.props.onOptionSelect(evt);
            };
            this.handleKeys = (event) => {
                const key = event.key;
                let moveFocus = false;
                let currentIndex = -1;
                const controls = Array.from(this.controlsEl.current.getElementsByClassName('pf-c-button'));
                if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
                    if (document.activeElement === this.controlsEl.current) {
                        currentIndex = 0;
                        while (currentIndex < controls.length &&
                            currentIndex >= 0 &&
                            controls[currentIndex].classList.contains('pf-m-disabled')) {
                            currentIndex = currentIndex + 1;
                        }
                        moveFocus = true;
                        event.preventDefault();
                    }
                    else {
                        controls.forEach((control, index) => {
                            if (document.activeElement === control) {
                                const increment = key === 'ArrowUp' || key === 'ArrowLeft' ? -1 : 1;
                                currentIndex = index + increment;
                                while (currentIndex < controls.length &&
                                    currentIndex >= 0 &&
                                    controls[currentIndex].classList.contains('pf-m-disabled')) {
                                    currentIndex = currentIndex + increment;
                                }
                                moveFocus = true;
                                event.preventDefault();
                            }
                        });
                    }
                }
                if (moveFocus && controls[currentIndex]) {
                    controls[currentIndex].focus();
                }
            };
            this.state = {
                availableOptions: [...this.props.availableOptions],
                availableOptionsSelected: [],
                chosenOptions: [...this.props.chosenOptions],
                chosenOptionsSelected: [],
                availableTreeOptionsSelected: [],
                chosenTreeOptionsSelected: [],
                availableTreeOptionsChecked: [],
                chosenTreeOptionsChecked: []
            };
        }
        componentDidUpdate() {
            if (JSON.stringify(this.props.availableOptions) !== JSON.stringify(this.state.availableOptions) ||
                JSON.stringify(this.props.chosenOptions) !== JSON.stringify(this.state.chosenOptions)) {
                this.setState({
                    availableOptions: [...this.props.availableOptions],
                    chosenOptions: [...this.props.chosenOptions]
                });
            }
        }
        componentDidMount() {
            window.addEventListener('keydown', this.handleKeys);
        }
        componentWillUnmount() {
            window.removeEventListener('keydown', this.handleKeys);
        }
        render() {
            const _a = this.props, { availableOptionsTitle, availableOptionsActions, availableOptionsSearchAriaLabel, className, chosenOptionsTitle, chosenOptionsActions, chosenOptionsSearchAriaLabel, filterOption, isSearchable, chosenOptionsStatus, availableOptionsStatus, controlsAriaLabel, addAllAriaLabel, addSelectedAriaLabel, removeSelectedAriaLabel, removeAllAriaLabel, 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            availableOptions: consumerPassedAvailableOptions, chosenOptions: consumerPassedChosenOptions, removeSelected, addAll, removeAll, addSelected, onListChange, id, isTree } = _a, props = __rest(_a, ["availableOptionsTitle", "availableOptionsActions", "availableOptionsSearchAriaLabel", "className", "chosenOptionsTitle", "chosenOptionsActions", "chosenOptionsSearchAriaLabel", "filterOption", "isSearchable", "chosenOptionsStatus", "availableOptionsStatus", "controlsAriaLabel", "addAllAriaLabel", "addSelectedAriaLabel", "removeSelectedAriaLabel", "removeAllAriaLabel", "availableOptions", "chosenOptions", "removeSelected", "addAll", "removeAll", "addSelected", "onListChange", "id", "isTree"]);
            const { availableOptions, chosenOptions, chosenOptionsSelected, availableOptionsSelected, chosenTreeOptionsSelected, availableTreeOptionsSelected } = this.state;
            const availableOptionsStatusToDisplay = availableOptionsStatus ||
                (isTree
                    ? `${filterFolders(availableOptions, availableTreeOptionsSelected).length} of ${flattenTree(availableOptions).length} items selected`
                    : `${availableOptionsSelected.length} of ${availableOptions.length} items selected`);
            const chosenOptionsStatusToDisplay = chosenOptionsStatus ||
                (isTree
                    ? `${filterFolders(chosenOptions, chosenTreeOptionsSelected).length} of ${flattenTree(chosenOptions).length} items selected`
                    : `${chosenOptionsSelected.length} of ${chosenOptions.length} items selected`);
            const available = isTree
                ? availableOptions.map(item => this.mapChecked(item, false))
                : availableOptions;
            const chosen = isTree
                ? chosenOptions.map(item => this.mapChecked(item, true))
                : chosenOptions;
            return (React.createElement("div", Object.assign({ className: css(styles$w.dualListSelector, className), id: id }, props),
                React.createElement(DualListSelectorPane, { isSearchable: isSearchable, searchInputAriaLabel: availableOptionsSearchAriaLabel, filterOption: filterOption, status: availableOptionsStatusToDisplay, title: availableOptionsTitle, options: available, selectedOptions: isTree ? availableTreeOptionsSelected : availableOptionsSelected, onOptionSelect: isTree ? this.onTreeOptionSelect : this.onOptionSelect, onOptionCheck: this.onTreeOptionCheck, actions: availableOptionsActions, id: `${id}-available-pane`, isTree: isTree }),
                React.createElement("div", { className: css(styles$w.dualListSelectorControls), tabIndex: 0, ref: this.controlsEl, "aria-label": controlsAriaLabel },
                    React.createElement("div", { className: css('pf-c-dual-list-selector__controls-item') },
                        React.createElement(Button, { isDisabled: availableOptions.length === 0, "aria-disabled": availableOptions.length === 0, variant: exports.ButtonVariant.plain, onClick: this.addAll, "aria-label": addAllAriaLabel, tabIndex: -1 },
                            React.createElement(AngleDoubleRightIcon, null))),
                    React.createElement("div", { className: css('pf-c-dual-list-selector__controls-item') },
                        React.createElement(Button, { isDisabled: isTree ? availableTreeOptionsSelected.length === 0 : availableOptionsSelected.length === 0, "aria-disabled": isTree ? availableTreeOptionsSelected.length === 0 : availableOptionsSelected.length === 0, variant: exports.ButtonVariant.plain, onClick: isTree ? this.addTreeSelected : this.addSelected, "aria-label": addSelectedAriaLabel, tabIndex: -1 },
                            React.createElement(AngleRightIcon, null))),
                    React.createElement("div", { className: css('pf-c-dual-list-selector__controls-item') },
                        React.createElement(Button, { variant: exports.ButtonVariant.plain, onClick: isTree ? this.removeTreeSelected : this.removeSelected, "aria-label": removeSelectedAriaLabel, tabIndex: -1, isDisabled: isTree ? chosenTreeOptionsSelected.length === 0 : chosenOptionsSelected.length === 0, "aria-disabled": isTree ? chosenTreeOptionsSelected.length === 0 : chosenOptionsSelected.length === 0 },
                            React.createElement(AngleLeftIcon, null))),
                    React.createElement("div", { className: css('pf-c-dual-list-selector__controls-item') },
                        React.createElement(Button, { isDisabled: chosenOptions.length === 0, "aria-disabled": chosenOptions.length === 0, variant: exports.ButtonVariant.plain, onClick: this.removeAll, "aria-label": removeAllAriaLabel, tabIndex: -1 },
                            React.createElement(AngleDoubleLeftIcon, null)))),
                React.createElement(DualListSelectorPane, { isChosen: true, isSearchable: isSearchable, searchInputAriaLabel: chosenOptionsSearchAriaLabel, filterOption: filterOption, title: chosenOptionsTitle, status: chosenOptionsStatusToDisplay, options: chosen, selectedOptions: isTree ? chosenTreeOptionsSelected : chosenOptionsSelected, onOptionSelect: isTree ? this.onTreeOptionSelect : this.onOptionSelect, onOptionCheck: this.onTreeOptionCheck, actions: chosenOptionsActions, id: `${id}-chosen-pane`, isTree: isTree })));
        }
    }
    DualListSelector.displayName = 'DualListSelector';
    DualListSelector.defaultProps = {
        availableOptions: [],
        availableOptionsTitle: 'Available options',
        availableOptionsSearchAriaLabel: 'Available search input',
        chosenOptions: [],
        chosenOptionsTitle: 'Chosen options',
        chosenOptionsSearchAriaLabel: 'Chosen search input',
        id: getUniqueId('dual-list-selector'),
        controlsAriaLabel: 'Selector controls',
        addAllAriaLabel: 'Add all',
        addSelectedAriaLabel: 'Add selected',
        removeSelectedAriaLabel: 'Remove selected',
        removeAllAriaLabel: 'Remove all'
    };

    var emptyState = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "button": "pf-c-button",
      "emptyState": "pf-c-empty-state",
      "emptyStateBody": "pf-c-empty-state__body",
      "emptyStateContent": "pf-c-empty-state__content",
      "emptyStateIcon": "pf-c-empty-state__icon",
      "emptyStatePrimary": "pf-c-empty-state__primary",
      "emptyStateSecondary": "pf-c-empty-state__secondary",
      "modifiers": {
        "xs": "pf-m-xs",
        "sm": "pf-m-sm",
        "lg": "pf-m-lg",
        "xl": "pf-m-xl",
        "fullHeight": "pf-m-full-height",
        "primary": "pf-m-primary",
        "overpassFont": "pf-m-overpass-font"
      },
      "title": "pf-c-title"
    };
    });

    var styles$x = unwrapExports(emptyState);

    (function (EmptyStateVariant) {
        EmptyStateVariant["xs"] = "xs";
        EmptyStateVariant["small"] = "small";
        EmptyStateVariant["large"] = "large";
        EmptyStateVariant["xl"] = "xl";
        EmptyStateVariant["full"] = "full";
    })(exports.EmptyStateVariant || (exports.EmptyStateVariant = {}));
    const EmptyState = (_a) => {
        var { children, className = '', variant = exports.EmptyStateVariant.full, isFullHeight } = _a, props = __rest(_a, ["children", "className", "variant", "isFullHeight"]);
        return (React.createElement("div", Object.assign({ className: css(styles$x.emptyState, variant === 'xs' && styles$x.modifiers.xs, variant === 'small' && styles$x.modifiers.sm, variant === 'large' && styles$x.modifiers.lg, variant === 'xl' && styles$x.modifiers.xl, isFullHeight && styles$x.modifiers.fullHeight, className) }, props),
            React.createElement("div", { className: css(styles$x.emptyStateContent) }, children)));
    };
    EmptyState.displayName = 'EmptyState';

    const EmptyStateBody = (_a) => {
        var { children, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("div", Object.assign({ className: css(styles$x.emptyStateBody, className) }, props), children));
    };
    EmptyStateBody.displayName = 'EmptyStateBody';

    const EmptyStateIcon = (_a) => {
        var { className = '', icon: IconComponent, component: AnyComponent, variant = 'icon' } = _a, props = __rest(_a, ["className", "icon", "component", "variant"]);
        const classNames = css(styles$x.emptyStateIcon, className);
        return variant === 'icon' ? (React.createElement(IconComponent, Object.assign({ className: classNames }, props, { "aria-hidden": "true" }))) : (React.createElement("div", { className: classNames },
            React.createElement(AnyComponent, null)));
    };
    EmptyStateIcon.displayName = 'EmptyStateIcon';

    const EmptyStateSecondaryActions = (_a) => {
        var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("div", Object.assign({ className: css(styles$x.emptyStateSecondary, className) }, props), children));
    };
    EmptyStateSecondaryActions.displayName = 'EmptyStateSecondaryActions';

    const EmptyStatePrimary = (_a) => {
        var { children, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("div", Object.assign({ className: css(styles$x.emptyStatePrimary, className) }, props), children));
    };
    EmptyStatePrimary.displayName = 'EmptyStatePrimary';

    var expandableSection = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "expandableSection": "pf-c-expandable-section",
      "expandableSectionContent": "pf-c-expandable-section__content",
      "expandableSectionToggle": "pf-c-expandable-section__toggle",
      "expandableSectionToggleIcon": "pf-c-expandable-section__toggle-icon",
      "expandableSectionToggleText": "pf-c-expandable-section__toggle-text",
      "modifiers": {
        "expanded": "pf-m-expanded",
        "active": "pf-m-active",
        "overpassFont": "pf-m-overpass-font"
      }
    };
    });

    var styles$y = unwrapExports(expandableSection);

    class ExpandableSection extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isExpanded: props.isExpanded
            };
        }
        calculateToggleText(toggleText, toggleTextExpanded, toggleTextCollapsed, propOrStateIsExpanded) {
            if (propOrStateIsExpanded && toggleTextExpanded !== '') {
                return toggleTextExpanded;
            }
            if (!propOrStateIsExpanded && toggleTextCollapsed !== '') {
                return toggleTextCollapsed;
            }
            return toggleText;
        }
        render() {
            const _a = this.props, { onToggle: onToggleProp, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            isActive, className, toggleText, toggleTextExpanded, toggleTextCollapsed, children, isExpanded } = _a, props = __rest(_a, ["onToggle", "isActive", "className", "toggleText", "toggleTextExpanded", "toggleTextCollapsed", "children", "isExpanded"]);
            let onToggle = onToggleProp;
            let propOrStateIsExpanded = isExpanded;
            // uncontrolled
            if (isExpanded === undefined) {
                propOrStateIsExpanded = this.state.isExpanded;
                onToggle = isOpen => {
                    this.setState({ isExpanded: isOpen }, () => onToggleProp(this.state.isExpanded));
                };
            }
            const computedToggleText = this.calculateToggleText(toggleText, toggleTextExpanded, toggleTextCollapsed, propOrStateIsExpanded);
            return (React.createElement("div", Object.assign({}, props, { className: css(styles$y.expandableSection, propOrStateIsExpanded && styles$y.modifiers.expanded, isActive && styles$y.modifiers.active, className) }),
                React.createElement("button", { className: css(styles$y.expandableSectionToggle), type: "button", "aria-expanded": propOrStateIsExpanded, onClick: () => onToggle(!propOrStateIsExpanded) },
                    React.createElement("span", { className: css(styles$y.expandableSectionToggleIcon) },
                        React.createElement(AngleRightIcon, { "aria-hidden": true })),
                    React.createElement("span", { className: css(styles$y.expandableSectionToggleText) }, computedToggleText)),
                React.createElement("div", { className: css(styles$y.expandableSectionContent), hidden: !propOrStateIsExpanded }, children)));
        }
    }
    ExpandableSection.displayName = 'ExpandableSection';
    ExpandableSection.defaultProps = {
        className: '',
        toggleText: '',
        toggleTextExpanded: '',
        toggleTextCollapsed: '',
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onToggle: (isExpanded) => undefined,
        isActive: false
    };

    var fileUpload = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "button": "pf-c-button",
      "fileUpload": "pf-c-file-upload",
      "fileUploadFileDetails": "pf-c-file-upload__file-details",
      "fileUploadFileDetailsSpinner": "pf-c-file-upload__file-details-spinner",
      "fileUploadFileSelect": "pf-c-file-upload__file-select",
      "formControl": "pf-c-form-control",
      "modifiers": {
        "dragHover": "pf-m-drag-hover",
        "loading": "pf-m-loading",
        "control": "pf-m-control"
      }
    };
    });

    var styles$z = unwrapExports(fileUpload);

    var fileReaderType;
    (function (fileReaderType) {
        fileReaderType["text"] = "text";
        fileReaderType["dataURL"] = "dataURL";
    })(fileReaderType || (fileReaderType = {}));
    /**
     * Read a file using the FileReader API, either as a plain text string or as a DataURL string.
     * Returns a promise which will resolve with the file contents as a string or reject with a DOMException.
     *
     * @param {File} fileHandle - File object to read
     * @param {fileReaderType} type - How to read it
     */
    function readFile(fileHandle, type) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            if (type === fileReaderType.text) {
                reader.readAsText(fileHandle);
            }
            else if (type === fileReaderType.dataURL) {
                reader.readAsDataURL(fileHandle);
            }
            else {
                reject('unknown type');
            }
        });
    }

    const FileUploadField = (_a) => {
        var { id, type, value = '', filename = '', onChange = () => { }, onBrowseButtonClick = () => { }, onClearButtonClick = () => { }, className = '', isDisabled = false, isReadOnly = false, isLoading = false, spinnerAriaValueText, isRequired = false, isDragActive = false, validated = 'default', 'aria-label': ariaLabel = 'File upload', filenamePlaceholder = 'Drag a file here or browse to upload', filenameAriaLabel = filename ? 'Read only filename' : filenamePlaceholder, browseButtonText = 'Browse...', clearButtonText = 'Clear', isClearButtonDisabled = !filename && !value, containerRef = null, allowEditingUploadedText = false, hideDefaultPreview = false, children = null } = _a, props = __rest(_a, ["id", "type", "value", "filename", "onChange", "onBrowseButtonClick", "onClearButtonClick", "className", "isDisabled", "isReadOnly", "isLoading", "spinnerAriaValueText", "isRequired", "isDragActive", "validated", 'aria-label', "filenamePlaceholder", "filenameAriaLabel", "browseButtonText", "clearButtonText", "isClearButtonDisabled", "containerRef", "allowEditingUploadedText", "hideDefaultPreview", "children"]);
        const onTextAreaChange = (newValue, event) => {
            onChange(newValue, filename, event);
        };
        return (React.createElement("div", Object.assign({ className: css(styles$z.fileUpload, isDragActive && styles$z.modifiers.dragHover, isLoading && styles$z.modifiers.loading, className), ref: containerRef }, props),
            React.createElement("div", { className: styles$z.fileUploadFileSelect },
                React.createElement(InputGroup, null,
                    React.createElement(TextInput, { isReadOnly // Always read-only regardless of isReadOnly prop (which is just for the TextArea)
                        : true, isDisabled: isDisabled, id: `${id}-filename`, name: `${id}-filename`, "aria-label": filenameAriaLabel, placeholder: filenamePlaceholder, "aria-describedby": `${id}-browse-button`, value: filename }),
                    React.createElement(Button, { id: `${id}-browse-button`, variant: exports.ButtonVariant.control, onClick: onBrowseButtonClick, isDisabled: isDisabled }, browseButtonText),
                    React.createElement(Button, { variant: exports.ButtonVariant.control, isDisabled: isDisabled || isClearButtonDisabled, onClick: onClearButtonClick }, clearButtonText))),
            React.createElement("div", { className: styles$z.fileUploadFileDetails },
                !hideDefaultPreview && type === fileReaderType.text && (React.createElement(TextArea, { readOnly: isReadOnly || (!!filename && !allowEditingUploadedText), disabled: isDisabled, isRequired: isRequired, resizeOrientation: exports.TextAreResizeOrientation.vertical, validated: validated, id: id, name: id, "aria-label": ariaLabel, value: value, onChange: onTextAreaChange })),
                isLoading && (React.createElement("div", { className: styles$z.fileUploadFileDetailsSpinner },
                    React.createElement(Spinner, { size: exports.spinnerSize.lg, "aria-valuetext": spinnerAriaValueText })))),
            children));
    };
    FileUploadField.displayName = 'FileUploadField';

    var COMMON_MIME_TYPES = new Map([
        ['avi', 'video/avi'],
        ['gif', 'image/gif'],
        ['ico', 'image/x-icon'],
        ['jpeg', 'image/jpeg'],
        ['jpg', 'image/jpeg'],
        ['mkv', 'video/x-matroska'],
        ['mov', 'video/quicktime'],
        ['mp4', 'video/mp4'],
        ['pdf', 'application/pdf'],
        ['png', 'image/png'],
        ['zip', 'application/zip'],
        ['doc', 'application/msword'],
        ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    ]);
    function toFileWithPath(file, path) {
        var f = withMimeType(file);
        if (typeof f.path !== 'string') { // on electron, path is already set to the absolute path
            var webkitRelativePath = file.webkitRelativePath;
            Object.defineProperty(f, 'path', {
                value: typeof path === 'string'
                    ? path
                    // If <input webkitdirectory> is set,
                    // the File will have a {webkitRelativePath} property
                    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
                    : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0
                        ? webkitRelativePath
                        : file.name,
                writable: false,
                configurable: false,
                enumerable: true
            });
        }
        return f;
    }
    function withMimeType(file) {
        var name = file.name;
        var hasExtension = name && name.lastIndexOf('.') !== -1;
        if (hasExtension && !file.type) {
            var ext = name.split('.')
                .pop().toLowerCase();
            var type = COMMON_MIME_TYPES.get(ext);
            if (type) {
                Object.defineProperty(file, 'type', {
                    value: type,
                    writable: false,
                    configurable: false,
                    enumerable: true
                });
            }
        }
        return file;
    }

    var FILES_TO_IGNORE = [
        // Thumbnail cache files for macOS and Windows
        '.DS_Store',
        'Thumbs.db' // Windows
    ];
    /**
     * Convert a DragEvent's DataTrasfer object to a list of File objects
     * NOTE: If some of the items are folders,
     * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
     * @param evt
     */
    function fromEvent(evt) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, isDragEvt(evt) && evt.dataTransfer
                        ? getDataTransferFiles(evt.dataTransfer, evt.type)
                        : getInputFiles(evt)];
            });
        });
    }
    function isDragEvt(value) {
        return !!value.dataTransfer;
    }
    function getInputFiles(evt) {
        var files = isInput$1(evt.target)
            ? evt.target.files
                ? fromList(evt.target.files)
                : []
            : [];
        return files.map(function (file) { return toFileWithPath(file); });
    }
    function isInput$1(value) {
        return value !== null;
    }
    function getDataTransferFiles(dt, type) {
        return __awaiter(this, void 0, void 0, function () {
            var items, files;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!dt.items) return [3 /*break*/, 2];
                        items = fromList(dt.items)
                            .filter(function (item) { return item.kind === 'file'; });
                        // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
                        // only 'dragstart' and 'drop' has access to the data (source node)
                        if (type !== 'drop') {
                            return [2 /*return*/, items];
                        }
                        return [4 /*yield*/, Promise.all(items.map(toFilePromises))];
                    case 1:
                        files = _a.sent();
                        return [2 /*return*/, noIgnoredFiles(flatten(files))];
                    case 2: return [2 /*return*/, noIgnoredFiles(fromList(dt.files)
                            .map(function (file) { return toFileWithPath(file); }))];
                }
            });
        });
    }
    function noIgnoredFiles(files) {
        return files.filter(function (file) { return FILES_TO_IGNORE.indexOf(file.name) === -1; });
    }
    // IE11 does not support Array.from()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
    // https://developer.mozilla.org/en-US/docs/Web/API/FileList
    // https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList
    function fromList(items) {
        var files = [];
        // tslint:disable: prefer-for-of
        for (var i = 0; i < items.length; i++) {
            var file = items[i];
            files.push(file);
        }
        return files;
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
    function toFilePromises(item) {
        if (typeof item.webkitGetAsEntry !== 'function') {
            return fromDataTransferItem(item);
        }
        var entry = item.webkitGetAsEntry();
        // Safari supports dropping an image node from a different window and can be retrieved using
        // the DataTransferItem.getAsFile() API
        // NOTE: FileSystemEntry.file() throws if trying to get the file
        if (entry && entry.isDirectory) {
            return fromDirEntry(entry);
        }
        return fromDataTransferItem(item);
    }
    function flatten(items) {
        return items.reduce(function (acc, files) { return __spread(acc, (Array.isArray(files) ? flatten(files) : [files])); }, []);
    }
    function fromDataTransferItem(item) {
        var file = item.getAsFile();
        if (!file) {
            return Promise.reject(item + " is not a File");
        }
        var fwp = toFileWithPath(file);
        return Promise.resolve(fwp);
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
    function fromEntry(entry) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
            });
        });
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
    function fromDirEntry(entry) {
        var reader = entry.createReader();
        return new Promise(function (resolve, reject) {
            var entries = [];
            function readEntries() {
                var _this = this;
                // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
                // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
                reader.readEntries(function (batch) { return __awaiter(_this, void 0, void 0, function () {
                    var files, err_1, items;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!!batch.length) return [3 /*break*/, 5];
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, Promise.all(entries)];
                            case 2:
                                files = _a.sent();
                                resolve(files);
                                return [3 /*break*/, 4];
                            case 3:
                                err_1 = _a.sent();
                                reject(err_1);
                                return [3 /*break*/, 4];
                            case 4: return [3 /*break*/, 6];
                            case 5:
                                items = Promise.all(batch.map(fromEntry));
                                entries.push(items);
                                // Continue reading
                                readEntries();
                                _a.label = 6;
                            case 6: return [2 /*return*/];
                        }
                    });
                }); }, function (err) {
                    reject(err);
                });
            }
            readEntries();
        });
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry
    function fromFileEntry(entry) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        entry.file(function (file) {
                            var fwp = toFileWithPath(file, entry.fullPath);
                            resolve(fwp);
                        }, function (err) {
                            reject(err);
                        });
                    })];
            });
        });
    }

    var reactIs_development = createCommonjsModule(function (module, exports) {



    {
      (function() {

    Object.defineProperty(exports, '__esModule', { value: true });

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
    }

    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */
    var lowPriorityWarningWithoutStack = function () {};

    {
      var printWarning = function (format) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });

        if (typeof console !== 'undefined') {
          console.warn(message);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarningWithoutStack = function (condition, format) {
        if (format === undefined) {
          throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
        }

        if (!condition) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(void 0, [format].concat(args));
        }
      };
    }

    var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_LAZY_TYPE:
          case REACT_MEMO_TYPE:
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode

    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true;
          lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }

      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.typeOf = typeOf;
    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isValidElementType = isValidElementType;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
      })();
    }
    });

    unwrapExports(reactIs_development);
    var reactIs_development_1 = reactIs_development.typeOf;
    var reactIs_development_2 = reactIs_development.AsyncMode;
    var reactIs_development_3 = reactIs_development.ConcurrentMode;
    var reactIs_development_4 = reactIs_development.ContextConsumer;
    var reactIs_development_5 = reactIs_development.ContextProvider;
    var reactIs_development_6 = reactIs_development.Element;
    var reactIs_development_7 = reactIs_development.ForwardRef;
    var reactIs_development_8 = reactIs_development.Fragment;
    var reactIs_development_9 = reactIs_development.Lazy;
    var reactIs_development_10 = reactIs_development.Memo;
    var reactIs_development_11 = reactIs_development.Portal;
    var reactIs_development_12 = reactIs_development.Profiler;
    var reactIs_development_13 = reactIs_development.StrictMode;
    var reactIs_development_14 = reactIs_development.Suspense;
    var reactIs_development_15 = reactIs_development.isValidElementType;
    var reactIs_development_16 = reactIs_development.isAsyncMode;
    var reactIs_development_17 = reactIs_development.isConcurrentMode;
    var reactIs_development_18 = reactIs_development.isContextConsumer;
    var reactIs_development_19 = reactIs_development.isContextProvider;
    var reactIs_development_20 = reactIs_development.isElement;
    var reactIs_development_21 = reactIs_development.isForwardRef;
    var reactIs_development_22 = reactIs_development.isFragment;
    var reactIs_development_23 = reactIs_development.isLazy;
    var reactIs_development_24 = reactIs_development.isMemo;
    var reactIs_development_25 = reactIs_development.isPortal;
    var reactIs_development_26 = reactIs_development.isProfiler;
    var reactIs_development_27 = reactIs_development.isStrictMode;
    var reactIs_development_28 = reactIs_development.isSuspense;

    var reactIs = createCommonjsModule(function (module) {

    {
      module.exports = reactIs_development;
    }
    });

    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    /* eslint-disable no-unused-vars */
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;

    function toObject(val) {
    	if (val === null || val === undefined) {
    		throw new TypeError('Object.assign cannot be called with null or undefined');
    	}

    	return Object(val);
    }

    function shouldUseNative() {
    	try {
    		if (!Object.assign) {
    			return false;
    		}

    		// Detect buggy property enumeration order in older V8 versions.

    		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
    		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
    		test1[5] = 'de';
    		if (Object.getOwnPropertyNames(test1)[0] === '5') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test2 = {};
    		for (var i = 0; i < 10; i++) {
    			test2['_' + String.fromCharCode(i)] = i;
    		}
    		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
    			return test2[n];
    		});
    		if (order2.join('') !== '0123456789') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test3 = {};
    		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
    			test3[letter] = letter;
    		});
    		if (Object.keys(Object.assign({}, test3)).join('') !==
    				'abcdefghijklmnopqrst') {
    			return false;
    		}

    		return true;
    	} catch (err) {
    		// We don't expect any of the above to throw, but better to be safe.
    		return false;
    	}
    }

    var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    	var from;
    	var to = toObject(target);
    	var symbols;

    	for (var s = 1; s < arguments.length; s++) {
    		from = Object(arguments[s]);

    		for (var key in from) {
    			if (hasOwnProperty.call(from, key)) {
    				to[key] = from[key];
    			}
    		}

    		if (getOwnPropertySymbols) {
    			symbols = getOwnPropertySymbols(from);
    			for (var i = 0; i < symbols.length; i++) {
    				if (propIsEnumerable.call(from, symbols[i])) {
    					to[symbols[i]] = from[symbols[i]];
    				}
    			}
    		}
    	}

    	return to;
    };

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

    var ReactPropTypesSecret_1 = ReactPropTypesSecret;

    var printWarning = function() {};

    {
      var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
      var loggedTypeFailures = {};
      var has = Function.call.bind(Object.prototype.hasOwnProperty);

      printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };
    }

    /**
     * Assert that the values match with the type specs.
     * Error messages are memorized and will only be shown once.
     *
     * @param {object} typeSpecs Map of name to a ReactPropType
     * @param {object} values Runtime values that need to be type-checked
     * @param {string} location e.g. "prop", "context", "child context"
     * @param {string} componentName Name of the component for error messages.
     * @param {?Function} getStack Returns the component stack.
     * @private
     */
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
              // This is intentionally an invariant that gets caught. It's the same
              // behavior as without this statement except with a better message.
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error(
                  (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                  'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
                );
                err.name = 'Invariant Violation';
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || 'React class') + ': type specification of ' +
                location + ' `' + typeSpecName + '` is invalid; the type checker ' +
                'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
                'You may have forgotten to pass an argument to the type checker ' +
                'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                'shape all require an argument).'
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              // Only monitor this failure once because there tends to be a lot of the
              // same error.
              loggedTypeFailures[error.message] = true;

              var stack = getStack ? getStack() : '';

              printWarning(
                'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
              );
            }
          }
        }
      }
    }

    /**
     * Resets warning cache when testing.
     *
     * @private
     */
    checkPropTypes.resetWarningCache = function() {
      {
        loggedTypeFailures = {};
      }
    };

    var checkPropTypes_1 = checkPropTypes;

    var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
    var printWarning$1 = function() {};

    {
      printWarning$1 = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };
    }

    function emptyFunctionThatReturnsNull() {
      return null;
    }

    var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
      /* global Symbol */
      var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

      /**
       * Returns the iterator method function contained on the iterable object.
       *
       * Be sure to invoke the function with the iterable as context:
       *
       *     var iteratorFn = getIteratorFn(myIterable);
       *     if (iteratorFn) {
       *       var iterator = iteratorFn.call(myIterable);
       *       ...
       *     }
       *
       * @param {?object} maybeIterable
       * @return {?function}
       */
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
          return iteratorFn;
        }
      }

      /**
       * Collection of methods that allow declaration and validation of props that are
       * supplied to React components. Example usage:
       *
       *   var Props = require('ReactPropTypes');
       *   var MyArticle = React.createClass({
       *     propTypes: {
       *       // An optional string prop named "description".
       *       description: Props.string,
       *
       *       // A required enum prop named "category".
       *       category: Props.oneOf(['News','Photos']).isRequired,
       *
       *       // A prop named "dialog" that requires an instance of Dialog.
       *       dialog: Props.instanceOf(Dialog).isRequired
       *     },
       *     render: function() { ... }
       *   });
       *
       * A more formal specification of how these methods are used:
       *
       *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
       *   decl := ReactPropTypes.{type}(.isRequired)?
       *
       * Each and every declaration produces a function with the same signature. This
       * allows the creation of custom validation functions. For example:
       *
       *  var MyLink = React.createClass({
       *    propTypes: {
       *      // An optional string or URI prop named "href".
       *      href: function(props, propName, componentName) {
       *        var propValue = props[propName];
       *        if (propValue != null && typeof propValue !== 'string' &&
       *            !(propValue instanceof URI)) {
       *          return new Error(
       *            'Expected a string or an URI for ' + propName + ' in ' +
       *            componentName
       *          );
       *        }
       *      }
       *    },
       *    render: function() {...}
       *  });
       *
       * @internal
       */

      var ANONYMOUS = '<<anonymous>>';

      // Important!
      // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),

        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker,
      };

      /**
       * inlined Object.is polyfill to avoid requiring consumers ship their own
       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
       */
      /*eslint-disable no-self-compare*/
      function is(x, y) {
        // SameValue algorithm
        if (x === y) {
          // Steps 1-5, 7-10
          // Steps 6.b-6.e: +0 != -0
          return x !== 0 || 1 / x === 1 / y;
        } else {
          // Step 6.a: NaN == NaN
          return x !== x && y !== y;
        }
      }
      /*eslint-enable no-self-compare*/

      /**
       * We use an Error-like object for backward compatibility as people may call
       * PropTypes directly and inspect their output. However, we don't use real
       * Errors anymore. We don't inspect their stack anyway, and creating them
       * is prohibitively expensive if they are created too often, such as what
       * happens in oneOfType() for any type before the one that matched.
       */
      function PropTypeError(message) {
        this.message = message;
        this.stack = '';
      }
      // Make `instanceof Error` still work for returned errors.
      PropTypeError.prototype = Error.prototype;

      function createChainableTypeChecker(validate) {
        {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;

          if (secret !== ReactPropTypesSecret_1) {
            if (throwOnDirectAccess) {
              // New behavior only for users of `prop-types` package
              var err = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                'Use `PropTypes.checkPropTypes()` to call them. ' +
                'Read more at http://fb.me/use-check-prop-types'
              );
              err.name = 'Invariant Violation';
              throw err;
            } else if ( typeof console !== 'undefined') {
              // Old behavior for people using React.PropTypes
              var cacheKey = componentName + ':' + propName;
              if (
                !manualPropTypeCallCache[cacheKey] &&
                // Avoid spamming the console because they are often not actionable except for lib authors
                manualPropTypeWarningCount < 3
              ) {
                printWarning$1(
                  'You are manually calling a React.PropTypes validation ' +
                  'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
                  'and will throw in the standalone `prop-types` package. ' +
                  'You may be seeing this warning due to a third-party PropTypes ' +
                  'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
              }
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }

        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);

        return chainedCheckType;
      }

      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            // `propValue` being instance of, say, date/regexp, pass the 'object'
            // check, but we can offer a more precise error message here rather than
            // 'of type `object`'.
            var preciseType = getPreciseType(propValue);

            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }

      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!reactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          {
            if (arguments.length > 1) {
              printWarning$1(
                'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
                'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
              );
            } else {
              printWarning$1('Invalid argument supplied to oneOf, expected an array.');
            }
          }
          return emptyFunctionThatReturnsNull;
        }

        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }

          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === 'symbol') {
              return String(value);
            }
            return value;
          });
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
      }

      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
          }
          for (var key in propValue) {
            if (has$1(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
           printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') ;
          return emptyFunctionThatReturnsNull;
        }

        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== 'function') {
            printWarning$1(
              'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
              'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
            );
            return emptyFunctionThatReturnsNull;
          }
        }

        function validate(props, propName, componentName, location, propFullName) {
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
              return null;
            }
          }

          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
        }
        return createChainableTypeChecker(validate);
      }

      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (!checker) {
              continue;
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          // We need to check all keys in case some are required but missing from
          // props.
          var allKeys = objectAssign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (!checker) {
              return new PropTypeError(
                'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
                '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
                '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error) {
              return error;
            }
          }
          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function isNode(propValue) {
        switch (typeof propValue) {
          case 'number':
          case 'string':
          case 'undefined':
            return true;
          case 'boolean':
            return !propValue;
          case 'object':
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }

            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                // Iterator will provide entry [k,v] tuples rather than values.
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }

            return true;
          default:
            return false;
        }
      }

      function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
          return true;
        }

        // falsy value can't be a Symbol
        if (!propValue) {
          return false;
        }

        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
          return true;
        }

        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
          return true;
        }

        return false;
      }

      // Equivalent of `typeof` but with special handling for array and regexp.
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return 'array';
        }
        if (propValue instanceof RegExp) {
          // Old webkits (at least until Android 4.0) return 'function' rather than
          // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
          // passes PropTypes.object.
          return 'object';
        }
        if (isSymbol(propType, propValue)) {
          return 'symbol';
        }
        return propType;
      }

      // This handles more types than `getPropType`. Only used for error messages.
      // See `createPrimitiveTypeChecker`.
      function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
          return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
          if (propValue instanceof Date) {
            return 'date';
          } else if (propValue instanceof RegExp) {
            return 'regexp';
          }
        }
        return propType;
      }

      // Returns a string that is postfixed to a warning about an invalid type.
      // For example, "undefined" or "of type array"
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case 'array':
          case 'object':
            return 'an ' + type;
          case 'boolean':
          case 'date':
          case 'regexp':
            return 'a ' + type;
          default:
            return type;
        }
      }

      // Returns class name of the object, if any.
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }

      ReactPropTypes.checkPropTypes = checkPropTypes_1;
      ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;

      return ReactPropTypes;
    };

    var propTypes = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    {
      var ReactIs = reactIs;

      // By explicitly using `prop-types` you are opting into new development behavior.
      // http://fb.me/prop-types-in-prod
      var throwOnDirectAccess = true;
      module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
    }
    });

    var dist = createCommonjsModule(function (module) {
    module.exports=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e});},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=13)}([function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r);},function(t,n){t.exports=function(t){return "object"==typeof t?null!==t:"function"==typeof t};},function(t,n){var r=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=r);},function(t,n,r){t.exports=!r(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});},function(t,n){t.exports=function(t){try{return !!t()}catch(t){return !0}};},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)};},function(t,n,r){var e=r(32)("wks"),o=r(9),i=r(0).Symbol,u="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=e;},function(t,n,r){var e=r(0),o=r(2),i=r(8),u=r(22),c=r(10),f=function(t,n,r){var a,s,p,l,v=t&f.F,y=t&f.G,h=t&f.S,d=t&f.P,x=t&f.B,g=y?e:h?e[n]||(e[n]={}):(e[n]||{}).prototype,m=y?o:o[n]||(o[n]={}),b=m.prototype||(m.prototype={});y&&(r=n);for(a in r)s=!v&&g&&void 0!==g[a],p=(s?g:r)[a],l=x&&s?c(p,e):d&&"function"==typeof p?c(Function.call,p):p,g&&u(g,a,p,t&f.U),m[a]!=p&&i(m,a,l),d&&b[a]!=p&&(b[a]=p);};e.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f;},function(t,n,r){var e=r(16),o=r(21);t.exports=r(3)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t};},function(t,n){var r=0,e=Math.random();t.exports=function(t){return "Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))};},function(t,n,r){var e=r(24);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}};},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t};},function(t,n,r){var e=r(28),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0};},function(t,n,r){n.__esModule=!0,n.default=function(t,n){if(t&&n){var r=Array.isArray(n)?n:n.split(","),e=t.name||"",o=t.type||"",i=o.replace(/\/.*$/,"");return r.some(function(t){var n=t.trim();return "."===n.charAt(0)?e.toLowerCase().endsWith(n.toLowerCase()):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n})}return !0},r(14),r(34);},function(t,n,r){r(15),t.exports=r(2).Array.some;},function(t,n,r){var e=r(7),o=r(25)(3);e(e.P+e.F*!r(33)([].some,!0),"Array",{some:function(t){return o(this,t,arguments[1])}});},function(t,n,r){var e=r(17),o=r(18),i=r(20),u=Object.defineProperty;n.f=r(3)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return "value"in r&&(t[n]=r.value),t};},function(t,n,r){var e=r(1);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t};},function(t,n,r){t.exports=!r(3)&&!r(4)(function(){return 7!=Object.defineProperty(r(19)("div"),"a",{get:function(){return 7}}).a});},function(t,n,r){var e=r(1),o=r(0).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}};},function(t,n,r){var e=r(1);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")};},function(t,n){t.exports=function(t,n){return {enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}};},function(t,n,r){var e=r(0),o=r(8),i=r(23),u=r(9)("src"),c=Function.toString,f=(""+c).split("toString");r(2).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,c){var a="function"==typeof r;a&&(i(r,"name")||o(r,"name",n)),t[n]!==r&&(a&&(i(r,u)||o(r,u,t[n]?""+t[n]:f.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:o(t,n,r):(delete t[n],o(t,n,r)));})(Function.prototype,"toString",function(){return "function"==typeof this&&this[u]||c.call(this)});},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)};},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t};},function(t,n,r){var e=r(10),o=r(26),i=r(27),u=r(12),c=r(29);t.exports=function(t,n){var r=1==t,f=2==t,a=3==t,s=4==t,p=6==t,l=5==t||p,v=n||c;return function(n,c,y){for(var h,d,x=i(n),g=o(x),m=e(c,y,3),b=u(g.length),_=0,w=r?v(n,b):f?v(n,0):void 0;b>_;_++)if((l||_ in g)&&(h=g[_],d=m(h,_,x),t))if(r)w[_]=d;else if(d)switch(t){case 3:return !0;case 5:return h;case 6:return _;case 2:w.push(h);}else if(s)return !1;return p?-1:a||s?s:w}};},function(t,n,r){var e=r(5);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return "String"==e(t)?t.split(""):Object(t)};},function(t,n,r){var e=r(11);t.exports=function(t){return Object(e(t))};},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)};},function(t,n,r){var e=r(30);t.exports=function(t,n){return new(e(t))(n)};},function(t,n,r){var e=r(1),o=r(31),i=r(6)("species");t.exports=function(t){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)||(n=void 0),e(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n};},function(t,n,r){var e=r(5);t.exports=Array.isArray||function(t){return "Array"==e(t)};},function(t,n,r){var e=r(0),o=e["__core-js_shared__"]||(e["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})};},function(t,n,r){var e=r(4);t.exports=function(t,n){return !!t&&e(function(){n?t.call(null,function(){},1):t.call(null);})};},function(t,n,r){r(35),t.exports=r(2).String.endsWith;},function(t,n,r){var e=r(7),o=r(12),i=r(36),u="".endsWith;e(e.P+e.F*r(38)("endsWith"),"String",{endsWith:function(t){var n=i(this,t,"endsWith"),r=arguments.length>1?arguments[1]:void 0,e=o(n.length),c=void 0===r?e:Math.min(o(r),e),f=String(t);return u?u.call(n,f,c):n.slice(c-f.length,c)===f}});},function(t,n,r){var e=r(37),o=r(11);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))};},function(t,n,r){var e=r(1),o=r(5),i=r(6)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))};},function(t,n,r){var e=r(6)("match");t.exports=function(t){var n=/./;try{"/./"[t](n);}catch(r){try{return n[e]=!1,!"/./"[t](n)}catch(t){}}return !0};}]);
    });

    var accepts = unwrapExports(dist);

    var supportMultiple = typeof document !== 'undefined' && document && document.createElement ? 'multiple' in document.createElement('input') : true;

    // Firefox versions prior to 53 return a bogus MIME type for every file drag, so dragovers with
    // that MIME type will always be accepted
    function fileAccepted(file, accept) {
      return file.type === 'application/x-moz-file' || accepts(file, accept);
    }

    function fileMatchSize(file, maxSize, minSize) {
      return file.size <= maxSize && file.size >= minSize;
    }

    function allFilesAccepted(files, accept) {
      return files.every(function (file) {
        return fileAccepted(file, accept);
      });
    }

    // React's synthetic events has evt.isPropagationStopped,
    // but to remain compatibility with other libs (Preact) fall back
    // to check evt.cancelBubble
    function isPropagationStopped(evt) {
      if (typeof evt.isPropagationStopped === 'function') {
        return evt.isPropagationStopped();
      } else if (typeof evt.cancelBubble !== 'undefined') {
        return evt.cancelBubble;
      }
      return false;
    }

    // React's synthetic events has evt.isDefaultPrevented,
    // but to remain compatibility with other libs (Preact) first
    // check evt.defaultPrevented
    function isDefaultPrevented(evt) {
      if (typeof evt.defaultPrevented !== 'undefined') {
        return evt.defaultPrevented;
      } else if (typeof evt.isDefaultPrevented === 'function') {
        return evt.isDefaultPrevented();
      }
      return false;
    }

    function isDragDataWithFiles(evt) {
      if (!evt.dataTransfer) {
        return true;
      }
      // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
      // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file
      return Array.prototype.some.call(evt.dataTransfer.types, function (type) {
        return type === 'Files' || type === 'application/x-moz-file';
      });
    }

    // allow the entire document to be a drag target
    function onDocumentDragOver(evt) {
      evt.preventDefault();
    }

    function isIe(userAgent) {
      return userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') !== -1;
    }

    function isEdge(userAgent) {
      return userAgent.indexOf('Edge/') !== -1;
    }

    function isIeOrEdge() {
      var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;

      return isIe(userAgent) || isEdge(userAgent);
    }

    /**
     * This is intended to be used to compose event handlers
     * They are executed in order until one of them calls `event.preventDefault()`.
     * Not sure this is the best way to do this, but it seems legit.
     * @param {Function} fns the event hanlder functions
     * @return {Function} the event handler to add to an element
     */
    function composeEventHandlers() {
      for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
        fns[_key] = arguments[_key];
      }

      return function (event) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        return fns.some(function (fn) {
          fn && fn.apply(undefined, [event].concat(args));
          return event.defaultPrevented;
        });
      };
    }

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

    function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

    function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var Dropzone = function (_React$Component) {
      _inherits(Dropzone, _React$Component);

      function Dropzone() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Dropzone);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropzone.__proto__ || Object.getPrototypeOf(Dropzone)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          draggedFiles: [],
          acceptedFiles: [],
          rejectedFiles: []
        }, _this.isFileDialogActive = false, _this.onDocumentDrop = function (evt) {
          if (_this.node && _this.node.contains(evt.target)) {
            // if we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
            return;
          }
          evt.preventDefault();
          _this.dragTargets = [];
        }, _this.onDragStart = function (evt) {
          evt.persist();
          if (_this.props.onDragStart && isDragDataWithFiles(evt)) {
            _this.props.onDragStart.call(_this, evt);
          }
        }, _this.onDragEnter = function (evt) {
          evt.preventDefault();

          // Count the dropzone and any children that are entered.
          if (_this.dragTargets.indexOf(evt.target) === -1) {
            _this.dragTargets.push(evt.target);
          }

          evt.persist();

          if (isDragDataWithFiles(evt)) {
            Promise.resolve(_this.props.getDataTransferItems(evt)).then(function (draggedFiles) {
              if (isPropagationStopped(evt)) {
                return;
              }

              _this.setState({
                draggedFiles: draggedFiles,
                // Do not rely on files for the drag state. It doesn't work in Safari.
                isDragActive: true
              });
            });

            if (_this.props.onDragEnter) {
              _this.props.onDragEnter.call(_this, evt);
            }
          }
        }, _this.onDragOver = function (evt) {
          // eslint-disable-line class-methods-use-this
          evt.preventDefault();
          evt.persist();

          if (evt.dataTransfer) {
            evt.dataTransfer.dropEffect = 'copy';
          }

          if (_this.props.onDragOver && isDragDataWithFiles(evt)) {
            _this.props.onDragOver.call(_this, evt);
          }

          return false;
        }, _this.onDragLeave = function (evt) {
          evt.preventDefault();
          evt.persist();

          // Only deactivate once the dropzone and all children have been left.
          _this.dragTargets = _this.dragTargets.filter(function (el) {
            return el !== evt.target && _this.node.contains(el);
          });
          if (_this.dragTargets.length > 0) {
            return;
          }

          // Clear dragging files state
          _this.setState({
            isDragActive: false,
            draggedFiles: []
          });

          if (_this.props.onDragLeave && isDragDataWithFiles(evt)) {
            _this.props.onDragLeave.call(_this, evt);
          }
        }, _this.onDrop = function (evt) {
          var _this$props = _this.props,
              onDrop = _this$props.onDrop,
              onDropAccepted = _this$props.onDropAccepted,
              onDropRejected = _this$props.onDropRejected,
              multiple = _this$props.multiple,
              accept = _this$props.accept,
              getDataTransferItems = _this$props.getDataTransferItems;

          // Stop default browser behavior

          evt.preventDefault();

          // Persist event for later usage
          evt.persist();

          // Reset the counter along with the drag on a drop.
          _this.dragTargets = [];
          _this.isFileDialogActive = false;

          // Clear files value
          _this.draggedFiles = null;

          // Reset drag state
          _this.setState({
            isDragActive: false,
            draggedFiles: []
          });

          if (isDragDataWithFiles(evt)) {
            Promise.resolve(getDataTransferItems(evt)).then(function (fileList) {
              var acceptedFiles = [];
              var rejectedFiles = [];

              if (isPropagationStopped(evt)) {
                return;
              }

              fileList.forEach(function (file) {
                if (fileAccepted(file, accept) && fileMatchSize(file, _this.props.maxSize, _this.props.minSize)) {
                  acceptedFiles.push(file);
                } else {
                  rejectedFiles.push(file);
                }
              });

              if (!multiple && acceptedFiles.length > 1) {
                // if not in multi mode add any extra accepted files to rejected.
                // This will allow end users to easily ignore a multi file drop in "single" mode.
                rejectedFiles.push.apply(rejectedFiles, _toConsumableArray(acceptedFiles.splice(0)));
              }

              // Update `acceptedFiles` and `rejectedFiles` state
              // This will make children render functions receive the appropriate
              // values
              _this.setState({ acceptedFiles: acceptedFiles, rejectedFiles: rejectedFiles }, function () {
                if (onDrop) {
                  onDrop.call(_this, acceptedFiles, rejectedFiles, evt);
                }

                if (rejectedFiles.length > 0 && onDropRejected) {
                  onDropRejected.call(_this, rejectedFiles, evt);
                }

                if (acceptedFiles.length > 0 && onDropAccepted) {
                  onDropAccepted.call(_this, acceptedFiles, evt);
                }
              });
            });
          }
        }, _this.onClick = function (evt) {
          var onClick = _this.props.onClick;

          // if onClick prop is given, run it first

          if (onClick) {
            onClick.call(_this, evt);
          }

          // If the event hasn't been default prevented from within
          // the onClick listener, open the file dialog
          if (!isDefaultPrevented(evt)) {
            evt.stopPropagation();

            // in IE11/Edge the file-browser dialog is blocking, ensure this is behind setTimeout
            // this is so react can handle state changes in the onClick prop above above
            // see: https://github.com/react-dropzone/react-dropzone/issues/450
            if (isIeOrEdge()) {
              setTimeout(_this.open, 0);
            } else {
              _this.open();
            }
          }
        }, _this.onInputElementClick = function (evt) {
          evt.stopPropagation();
        }, _this.onFileDialogCancel = function () {
          // timeout will not recognize context of this method
          var onFileDialogCancel = _this.props.onFileDialogCancel;
          // execute the timeout only if the FileDialog is opened in the browser

          if (_this.isFileDialogActive) {
            setTimeout(function () {
              if (_this.input != null) {
                // Returns an object as FileList
                var files = _this.input.files;


                if (!files.length) {
                  _this.isFileDialogActive = false;

                  if (typeof onFileDialogCancel === 'function') {
                    onFileDialogCancel();
                  }
                }
              }
            }, 300);
          }
        }, _this.onFocus = function (evt) {
          var onFocus = _this.props.onFocus;

          if (onFocus) {
            onFocus.call(_this, evt);
          }
          if (!isDefaultPrevented(evt)) {
            _this.setState({ isFocused: true });
          }
        }, _this.onBlur = function (evt) {
          var onBlur = _this.props.onBlur;

          if (onBlur) {
            onBlur.call(_this, evt);
          }
          if (!isDefaultPrevented(evt)) {
            _this.setState({ isFocused: false });
          }
        }, _this.onKeyDown = function (evt) {
          var onKeyDown = _this.props.onKeyDown;

          if (!_this.node.isEqualNode(evt.target)) {
            return;
          }

          if (onKeyDown) {
            onKeyDown.call(_this, evt);
          }

          if (!isDefaultPrevented(evt) && (evt.keyCode === 32 || evt.keyCode === 13)) {
            evt.preventDefault();
            _this.open();
          }
        }, _this.composeHandler = function (handler) {
          if (_this.props.disabled) {
            return null;
          }
          return handler;
        }, _this.getRootProps = function () {
          var _extends2;

          var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          var _ref2$refKey = _ref2.refKey,
              refKey = _ref2$refKey === undefined ? 'ref' : _ref2$refKey,
              onKeyDown = _ref2.onKeyDown,
              onFocus = _ref2.onFocus,
              onBlur = _ref2.onBlur,
              onClick = _ref2.onClick,
              onDragStart = _ref2.onDragStart,
              onDragEnter = _ref2.onDragEnter,
              onDragOver = _ref2.onDragOver,
              onDragLeave = _ref2.onDragLeave,
              onDrop = _ref2.onDrop,
              rest = _objectWithoutProperties(_ref2, ['refKey', 'onKeyDown', 'onFocus', 'onBlur', 'onClick', 'onDragStart', 'onDragEnter', 'onDragOver', 'onDragLeave', 'onDrop']);

          return _extends((_extends2 = {
            onKeyDown: _this.composeHandler(onKeyDown ? composeEventHandlers(onKeyDown, _this.onKeyDown) : _this.onKeyDown),
            onFocus: _this.composeHandler(onFocus ? composeEventHandlers(onFocus, _this.onFocus) : _this.onFocus),
            onBlur: _this.composeHandler(onBlur ? composeEventHandlers(onBlur, _this.onBlur) : _this.onBlur),
            onClick: _this.composeHandler(onClick ? composeEventHandlers(onClick, _this.onClick) : _this.onClick),
            onDragStart: _this.composeHandler(onDragStart ? composeEventHandlers(onDragStart, _this.onDragStart) : _this.onDragStart),
            onDragEnter: _this.composeHandler(onDragEnter ? composeEventHandlers(onDragEnter, _this.onDragEnter) : _this.onDragEnter),
            onDragOver: _this.composeHandler(onDragOver ? composeEventHandlers(onDragOver, _this.onDragOver) : _this.onDragOver),
            onDragLeave: _this.composeHandler(onDragLeave ? composeEventHandlers(onDragLeave, _this.onDragLeave) : _this.onDragLeave),
            onDrop: _this.composeHandler(onDrop ? composeEventHandlers(onDrop, _this.onDrop) : _this.onDrop)
          }, _defineProperty$1(_extends2, refKey, _this.setNodeRef), _defineProperty$1(_extends2, 'tabIndex', _this.props.disabled ? -1 : 0), _extends2), rest);
        }, _this.getInputProps = function () {
          var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          var _ref3$refKey = _ref3.refKey,
              refKey = _ref3$refKey === undefined ? 'ref' : _ref3$refKey,
              onChange = _ref3.onChange,
              onClick = _ref3.onClick,
              rest = _objectWithoutProperties(_ref3, ['refKey', 'onChange', 'onClick']);

          var _this$props2 = _this.props,
              accept = _this$props2.accept,
              multiple = _this$props2.multiple,
              name = _this$props2.name;

          var inputProps = _defineProperty$1({
            accept: accept,
            type: 'file',
            style: { display: 'none' },
            multiple: supportMultiple && multiple,
            onChange: composeEventHandlers(onChange, _this.onDrop),
            onClick: composeEventHandlers(onClick, _this.onInputElementClick),
            autoComplete: 'off',
            tabIndex: -1
          }, refKey, _this.setInputRef);
          if (name && name.length) {
            inputProps.name = name;
          }
          return _extends({}, inputProps, rest);
        }, _this.setNodeRef = function (node) {
          _this.node = node;
        }, _this.setInputRef = function (input) {
          _this.input = input;
        }, _this.open = function () {
          _this.isFileDialogActive = true;
          if (_this.input) {
            _this.input.value = null;
            _this.input.click();
          }
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(Dropzone, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          var preventDropOnDocument = this.props.preventDropOnDocument;

          this.dragTargets = [];

          if (preventDropOnDocument) {
            document.addEventListener('dragover', onDocumentDragOver, false);
            document.addEventListener('drop', this.onDocumentDrop, false);
          }

          window.addEventListener('focus', this.onFileDialogCancel, false);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          var preventDropOnDocument = this.props.preventDropOnDocument;

          if (preventDropOnDocument) {
            document.removeEventListener('dragover', onDocumentDragOver);
            document.removeEventListener('drop', this.onDocumentDrop);
          }

          window.removeEventListener('focus', this.onFileDialogCancel, false);
        }

        /**
         * Open system file upload dialog.
         *
         * @public
         */

      }, {
        key: 'render',
        value: function render() {
          var _props = this.props,
              children = _props.children,
              multiple = _props.multiple,
              disabled = _props.disabled;
          var _state = this.state,
              isDragActive = _state.isDragActive,
              isFocused = _state.isFocused,
              draggedFiles = _state.draggedFiles,
              acceptedFiles = _state.acceptedFiles,
              rejectedFiles = _state.rejectedFiles;


          var filesCount = draggedFiles.length;
          var isMultipleAllowed = multiple || filesCount <= 1;
          var isDragAccept = filesCount > 0 && allFilesAccepted(draggedFiles, this.props.accept);
          var isDragReject = filesCount > 0 && (!isDragAccept || !isMultipleAllowed);

          return children({
            isDragActive: isDragActive,
            isDragAccept: isDragAccept,
            isDragReject: isDragReject,
            draggedFiles: draggedFiles,
            acceptedFiles: acceptedFiles,
            rejectedFiles: rejectedFiles,
            isFocused: isFocused && !disabled,
            getRootProps: this.getRootProps,
            getInputProps: this.getInputProps,
            open: this.open
          });
        }
      }]);

      return Dropzone;
    }(React__default['default'].Component);

    Dropzone.propTypes = {
      /**
       * Allow specific types of files. See https://github.com/okonet/attr-accept for more information.
       * Keep in mind that mime type determination is not reliable across platforms. CSV files,
       * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
       * Windows. In some cases there might not be a mime type set at all.
       * See: https://github.com/react-dropzone/react-dropzone/issues/276
       */
      accept: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),

      /**
       * Render function that renders the actual component
       *
       * @param {Object} props
       * @param {Function} props.getRootProps Returns the props you should apply to the root drop container you render
       * @param {Function} props.getInputProps Returns the props you should apply to hidden file input you render
       * @param {Function} props.open Open the native file selection dialog
       * @param {Boolean} props.isFocused Dropzone area is in focus
       * @param {Boolean} props.isDragActive Active drag is in progress
       * @param {Boolean} props.isDragAccept Dragged files are accepted
       * @param {Boolean} props.isDragReject Some dragged files are rejected
       * @param {Array} props.draggedFiles Files in active drag
       * @param {Array} props.acceptedFiles Accepted files
       * @param {Array} props.rejectedFiles Rejected files
       */
      children: propTypes.func,

      /**
       * Enable/disable the dropzone entirely
       */
      disabled: propTypes.bool,

      /**
       * If false, allow dropped items to take over the current browser window
       */
      preventDropOnDocument: propTypes.bool,

      /**
       * Allow dropping multiple files
       */
      multiple: propTypes.bool,

      /**
       * `name` attribute for the input tag
       */
      name: propTypes.string,

      /**
       * Maximum file size (in bytes)
       */
      maxSize: propTypes.number,

      /**
       * Minimum file size (in bytes)
       */
      minSize: propTypes.number,

      /**
       * getDataTransferItems handler
       * @param {Event} event
       * @returns {Array} array of File objects
       */
      getDataTransferItems: propTypes.func,

      /**
       * onClick callback
       * @param {Event} event
       */
      onClick: propTypes.func,

      /**
       * onFocus callback
       */
      onFocus: propTypes.func,

      /**
       * onBlur callback
       */
      onBlur: propTypes.func,

      /**
       * onKeyDown callback
       */
      onKeyDown: propTypes.func,

      /**
       * The `onDrop` method that accepts two arguments.
       * The first argument represents the accepted files and the second argument the rejected files.
       *
       * ```javascript
       * function onDrop(acceptedFiles, rejectedFiles) {
       *   // do stuff with files...
       * }
       * ```
       *
       * Files are accepted or rejected based on the `accept` prop.
       * This must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
       *
       * Note that the `onDrop` callback will always be called regardless if the dropped files were accepted or rejected.
       * You can use the `onDropAccepted`/`onDropRejected` props if you'd like to react to a specific event instead of the `onDrop` prop.
       *
       * The `onDrop` callback will provide you with an array of [Files](https://developer.mozilla.org/en-US/docs/Web/API/File) which you can then process and send to a server.
       * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
       *
       * ```javascript
       * function onDrop(acceptedFiles) {
       *   const req = request.post('/upload')
       *   acceptedFiles.forEach(file => {
       *     req.attach(file.name, file)
       *   })
       *   req.end(callback)
       * }
       * ```
       */
      onDrop: propTypes.func,

      /**
       * onDropAccepted callback
       */
      onDropAccepted: propTypes.func,

      /**
       * onDropRejected callback
       */
      onDropRejected: propTypes.func,

      /**
       * onDragStart callback
       */
      onDragStart: propTypes.func,

      /**
       * onDragEnter callback
       */
      onDragEnter: propTypes.func,

      /**
       * onDragOver callback
       */
      onDragOver: propTypes.func,

      /**
       * onDragLeave callback
       */
      onDragLeave: propTypes.func,

      /**
       * Provide a callback on clicking the cancel button of the file dialog
       */
      onFileDialogCancel: propTypes.func
    };

    Dropzone.defaultProps = {
      preventDropOnDocument: true,
      disabled: false,
      multiple: true,
      maxSize: Infinity,
      minSize: 0,
      getDataTransferItems: fromEvent
    };

    const FileUpload = (_a) => {
        var { id, type, value = type === fileReaderType.text || type === fileReaderType.dataURL ? '' : null, filename = '', children = null, onChange = () => { }, onReadStarted = () => { }, onReadFinished = () => { }, onReadFailed = () => { }, dropzoneProps = {} } = _a, props = __rest(_a, ["id", "type", "value", "filename", "children", "onChange", "onReadStarted", "onReadFinished", "onReadFailed", "dropzoneProps"]);
        const onDropAccepted = (acceptedFiles, event) => {
            if (acceptedFiles.length > 0) {
                const fileHandle = acceptedFiles[0];
                if (type === fileReaderType.text || type === fileReaderType.dataURL) {
                    onChange('', fileHandle.name, event); // Show the filename while reading
                    onReadStarted(fileHandle);
                    readFile(fileHandle, type)
                        .then(data => {
                        onReadFinished(fileHandle);
                        onChange(data, fileHandle.name, event);
                    })
                        .catch((error) => {
                        onReadFailed(error, fileHandle);
                        onReadFinished(fileHandle);
                        onChange('', '', event); // Clear the filename field on a failure
                    });
                }
                else {
                    onChange(fileHandle, fileHandle.name, event);
                }
            }
            dropzoneProps.onDropAccepted && dropzoneProps.onDropAccepted(acceptedFiles, event);
        };
        const onDropRejected = (rejectedFiles, event) => {
            if (rejectedFiles.length > 0) {
                onChange('', rejectedFiles[0].name, event);
            }
            dropzoneProps.onDropRejected && dropzoneProps.onDropRejected(rejectedFiles, event);
        };
        const onClearButtonClick = (event) => {
            onChange('', '', event);
        };
        return (React.createElement(Dropzone, Object.assign({ multiple: false }, dropzoneProps, { onDropAccepted: onDropAccepted, onDropRejected: onDropRejected }), ({ getRootProps, getInputProps, isDragActive, open }) => (React.createElement(FileUploadField, Object.assign({}, getRootProps(Object.assign(Object.assign({}, props), { refKey: 'containerRef', onClick: event => event.preventDefault() // Prevents clicking TextArea from opening file dialog
         })), { tabIndex: null, id: id, type: type, filename: filename, value: value, onChange: onChange, isDragActive: isDragActive, onBrowseButtonClick: open, onClearButtonClick: onClearButtonClick }),
            React.createElement("input", Object.assign({}, getInputProps())),
            children))));
    };
    FileUpload.displayName = 'FileUpload';

    const ActionGroup = (_a) => {
        var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        const customClassName = css(styles$j.formGroup, styles$j.modifiers.action, className);
        const formActionsComponent = React.createElement("div", { className: css(styles$j.formActions) }, children);
        return (React.createElement("div", Object.assign({}, props, { className: customClassName }),
            React.createElement("div", { className: css(styles$j.formGroupControl) }, formActionsComponent)));
    };
    ActionGroup.displayName = 'ActionGroup';

    const Form = (_a) => {
        var { children = null, className = '', isHorizontal = false, isWidthLimited = false } = _a, props = __rest(_a, ["children", "className", "isHorizontal", "isWidthLimited"]);
        return (React.createElement("form", Object.assign({ noValidate: true }, props, { className: css(styles$j.form, isHorizontal && styles$j.modifiers.horizontal, isWidthLimited && styles$j.modifiers.limitWidth, className) }), children));
    };
    Form.displayName = 'Form';

    const FormAlert = (_a) => {
        var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (
        // There are currently no associated styles with the pf-c-form_alert class.
        // Therefore, it does not exist in react-styles
        React.createElement("div", Object.assign({}, props, { className: css('pf-c-form__alert', className) }), children));
    };
    FormAlert.displayName = 'FormAlert';

    const FormGroup = (_a) => {
        var { children = null, className = '', label, labelIcon, isRequired = false, validated = 'default', isInline = false, hasNoPaddingTop = false, helperText, isHelperTextBeforeField = false, helperTextInvalid, helperTextIcon, helperTextInvalidIcon, fieldId } = _a, props = __rest(_a, ["children", "className", "label", "labelIcon", "isRequired", "validated", "isInline", "hasNoPaddingTop", "helperText", "isHelperTextBeforeField", "helperTextInvalid", "helperTextIcon", "helperTextInvalidIcon", "fieldId"]);
        const validHelperText = typeof helperText !== 'string' ? (helperText) : (React.createElement("div", { className: css(styles$j.formHelperText, validated === exports.ValidatedOptions.success && styles$j.modifiers.success, validated === exports.ValidatedOptions.warning && styles$j.modifiers.warning), id: `${fieldId}-helper`, "aria-live": "polite" },
            helperTextIcon && React.createElement("span", { className: css(styles$j.formHelperTextIcon) }, helperTextIcon),
            helperText));
        const inValidHelperText = typeof helperTextInvalid !== 'string' ? (helperTextInvalid) : (React.createElement("div", { className: css(styles$j.formHelperText, styles$j.modifiers.error), id: `${fieldId}-helper`, "aria-live": "polite" },
            helperTextInvalidIcon && React.createElement("span", { className: css(styles$j.formHelperTextIcon) }, helperTextInvalidIcon),
            helperTextInvalid));
        const showValidHelperTxt = (validationType) => validationType !== exports.ValidatedOptions.error && helperText ? validHelperText : '';
        const helperTextToDisplay = validated === exports.ValidatedOptions.error && helperTextInvalid ? inValidHelperText : showValidHelperTxt(validated);
        return (React.createElement("div", Object.assign({}, props, { className: css(styles$j.formGroup, className) }),
            label && (React.createElement("div", { className: css(styles$j.formGroupLabel, hasNoPaddingTop && styles$j.modifiers.noPaddingTop) },
                React.createElement("label", { className: css(styles$j.formLabel), htmlFor: fieldId },
                    React.createElement("span", { className: css(styles$j.formLabelText) }, label),
                    isRequired && (React.createElement("span", { className: css(styles$j.formLabelRequired), "aria-hidden": "true" },
                        ' ',
                        ASTERISK))),
                ' ',
                React.isValidElement(labelIcon) && labelIcon)),
            React.createElement("div", { className: css(styles$j.formGroupControl, isInline && styles$j.modifiers.inline) },
                isHelperTextBeforeField && helperTextToDisplay,
                children,
                !isHelperTextBeforeField && helperTextToDisplay)));
    };
    FormGroup.displayName = 'FormGroup';

    const FormHelperText = (_a) => {
        var { children = null, isError = false, isHidden = true, className = '', icon = null } = _a, props = __rest(_a, ["children", "isError", "isHidden", "className", "icon"]);
        return (React.createElement("p", Object.assign({ className: css(styles$j.formHelperText, isError && styles$j.modifiers.error, isHidden && styles$j.modifiers.hidden, className) }, props),
            icon && React.createElement("span", { className: css(styles$j.formHelperTextIcon) }, icon),
            children));
    };
    FormHelperText.displayName = 'FormHelperText';

    const FormSection = (_a) => {
        var { className = '', children } = _a, props = __rest(_a, ["className", "children"]);
        return (React.createElement("section", Object.assign({}, props, { className: css(styles$j.formSection, className) }), children));
    };
    FormSection.displayName = 'FormSection';

    var hint = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "button": "pf-c-button",
      "dropdown": "pf-c-dropdown",
      "dropdownToggle": "pf-c-dropdown__toggle",
      "hint": "pf-c-hint",
      "hintActions": "pf-c-hint__actions",
      "hintBody": "pf-c-hint__body",
      "hintFooter": "pf-c-hint__footer",
      "hintTitle": "pf-c-hint__title",
      "modifiers": {
        "link": "pf-m-link",
        "inline": "pf-m-inline",
        "plain": "pf-m-plain"
      }
    };
    });

    var styles$A = unwrapExports(hint);

    const Hint = (_a) => {
        var { children, className, actions } = _a, props = __rest(_a, ["children", "className", "actions"]);
        return (React.createElement("div", Object.assign({ className: css(styles$A.hint, className) }, props),
            React.createElement("div", { className: css(styles$A.hintActions) }, actions),
            children));
    };
    Hint.displayName = 'Hint';

    const HintBody = (_a) => {
        var { children, className } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("div", Object.assign({ className: css(styles$A.hintBody, className) }, props), children));
    };
    HintBody.displayName = 'HintBody';

    const HintFooter = (_a) => {
        var { children, className } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("div", Object.assign({ className: css(styles$A.hintFooter, className) }, props), children));
    };
    HintFooter.displayName = 'HintFooter';

    const HintTitle = (_a) => {
        var { children, className } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("div", Object.assign({ className: css(styles$A.hintTitle, className) }, props), children));
    };
    HintTitle.displayName = 'HintTitle';

    var jumpLinks = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "jumpLinks": "pf-c-jump-links",
      "jumpLinksItem": "pf-c-jump-links__item",
      "jumpLinksLabel": "pf-c-jump-links__label",
      "jumpLinksLink": "pf-c-jump-links__link",
      "jumpLinksLinkText": "pf-c-jump-links__link-text",
      "jumpLinksList": "pf-c-jump-links__list",
      "jumpLinksMain": "pf-c-jump-links__main",
      "modifiers": {
        "center": "pf-m-center",
        "vertical": "pf-m-vertical",
        "current": "pf-m-current"
      }
    };
    });

    var styles$B = unwrapExports(jumpLinks);

    const JumpLinksItem = (_a) => {
        var { isActive, href, children, onClick } = _a, props = __rest(_a, ["isActive", "href", "children", "onClick"]);
        return (React.createElement("li", Object.assign({ className: css(styles$B.jumpLinksItem, isActive && styles$B.modifiers.current) }, props),
            React.createElement("a", { className: styles$B.jumpLinksLink, href: href, onClick: onClick },
                React.createElement("span", { className: styles$B.jumpLinksLinkText }, children))));
    };
    JumpLinksItem.displayName = 'JumpLinksItem';

    const getScrollItems = (children, hasScrollSpy) => React.Children.toArray(children).map((child) => {
        if (hasScrollSpy && typeof document !== 'undefined' && child.type === JumpLinksItem) {
            const scrollNode = child.props.node || child.props.href;
            if (typeof scrollNode === 'string' && typeof document !== 'undefined') {
                return document.querySelector(scrollNode);
            }
            else if (scrollNode instanceof HTMLElement) {
                return scrollNode;
            }
        }
        return null;
    });
    const JumpLinks = (_a) => {
        var { isCentered, isVertical, children, label, 'aria-label': ariaLabel = typeof label === 'string' ? label : null, scrollableSelector, activeIndex: activeIndexProp = 0, offset = 0 } = _a, props = __rest(_a, ["isCentered", "isVertical", "children", "label", 'aria-label', "scrollableSelector", "activeIndex", "offset"]);
        const hasScrollSpy = Boolean(scrollableSelector);
        const [scrollItems, setScrollItems] = React.useState(getScrollItems(children, hasScrollSpy));
        const [activeIndex, setActiveIndex] = React.useState(activeIndexProp);
        if (hasScrollSpy) {
            React.useEffect(() => {
                if (typeof window === 'undefined') {
                    return;
                }
                const scrollableElement = document.querySelector(scrollableSelector);
                if (!(scrollableElement instanceof HTMLElement)) {
                    return;
                }
                function scrollSpy() {
                    const scrollPosition = scrollableElement.scrollTop + offset;
                    window.requestAnimationFrame(() => {
                        let newScrollItems = scrollItems;
                        // Items might have rendered after this component. Do a quick refresh.
                        if (!newScrollItems[0]) {
                            newScrollItems = getScrollItems(children, hasScrollSpy);
                            setScrollItems(newScrollItems);
                        }
                        const scrollElements = newScrollItems
                            .map((e, index) => ({
                            y: e ? e.offsetTop : null,
                            index
                        }))
                            .filter(({ y }) => y !== null)
                            .sort((e1, e2) => e2.y - e1.y);
                        for (const { y, index } of scrollElements) {
                            if (scrollPosition >= y) {
                                return setActiveIndex(index);
                            }
                        }
                    });
                }
                if (scrollableElement) {
                    scrollSpy();
                    scrollableElement.addEventListener('scroll', scrollSpy);
                }
                return () => scrollableElement.removeEventListener('scroll', scrollSpy);
            }, [scrollItems, hasScrollSpy]);
        }
        return (React.createElement("nav", Object.assign({ className: css(styles$B.jumpLinks, isCentered && styles$B.modifiers.center, isVertical && styles$B.modifiers.vertical), "aria-label": ariaLabel }, props),
            React.createElement("div", { className: styles$B.jumpLinksMain },
                label && React.createElement("div", { className: styles$B.jumpLinksLabel }, label),
                React.createElement("ul", { className: styles$B.jumpLinksList }, React.Children.map(children, (child, i) => {
                    if (hasScrollSpy && child.type === JumpLinksItem) {
                        const { onClick: onClickProp, isActive: isActiveProp } = child.props;
                        const scrollItem = scrollItems[i];
                        return React.cloneElement(child, {
                            onClick(ev) {
                                // Items might have rendered after this component. Do a quick refresh.
                                let newScrollItems;
                                if (!scrollItem) {
                                    newScrollItems = getScrollItems(children, hasScrollSpy);
                                    setScrollItems(newScrollItems);
                                }
                                const newScrollItem = scrollItem || newScrollItems[i];
                                if (newScrollItem) {
                                    newScrollItem.scrollIntoView();
                                    newScrollItem.focus();
                                    ev.preventDefault();
                                }
                                if (onClickProp) {
                                    onClickProp(ev);
                                }
                            },
                            isActive: isActiveProp || activeIndex === i
                        });
                    }
                    return child;
                })))));
    };
    JumpLinks.displayName = 'JumpLinks';

    var label = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "button": "pf-c-button",
      "label": "pf-c-label",
      "labelContent": "pf-c-label__content",
      "labelIcon": "pf-c-label__icon",
      "labelText": "pf-c-label__text",
      "modifiers": {
        "blue": "pf-m-blue",
        "green": "pf-m-green",
        "orange": "pf-m-orange",
        "red": "pf-m-red",
        "purple": "pf-m-purple",
        "cyan": "pf-m-cyan",
        "outline": "pf-m-outline",
        "overflow": "pf-m-overflow"
      }
    };
    });

    var styles$C = unwrapExports(label);

    const colorStyles = {
        blue: styles$C.modifiers.blue,
        cyan: styles$C.modifiers.cyan,
        green: styles$C.modifiers.green,
        orange: styles$C.modifiers.orange,
        purple: styles$C.modifiers.purple,
        red: styles$C.modifiers.red,
        grey: ''
    };
    const Label = (_a) => {
        var { children, className = '', color = 'grey', variant = 'filled', isTruncated = false, tooltipPosition, icon, onClose, closeBtn, closeBtnProps, href, isOverflowLabel, render } = _a, props = __rest(_a, ["children", "className", "color", "variant", "isTruncated", "tooltipPosition", "icon", "onClose", "closeBtn", "closeBtnProps", "href", "isOverflowLabel", "render"]);
        const LabelComponent = (isOverflowLabel ? 'button' : 'span');
        const Component = href ? 'a' : 'span';
        const button = closeBtn ? (closeBtn) : (React.createElement(Button, Object.assign({ type: "button", variant: "plain", onClick: onClose }, Object.assign({ 'aria-label': 'label-close-button' }, closeBtnProps)),
            React.createElement(TimesIcon, null)));
        const textRef = React.createRef();
        // ref to apply tooltip when rendered is used
        const componentRef = React.useRef();
        const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
        React.useLayoutEffect(() => {
            setIsTooltipVisible(textRef.current && textRef.current.offsetWidth < textRef.current.scrollWidth);
        }, []);
        const content = (React.createElement(React.Fragment, null,
            icon && React.createElement("span", { className: css(styles$C.labelIcon) }, icon),
            isTruncated && (React.createElement("span", { ref: textRef, className: css(styles$C.labelText) }, children)),
            !isTruncated && children));
        return (React.createElement(LabelComponent, Object.assign({}, props, { className: css(styles$C.label, colorStyles[color], variant === 'outline' && styles$C.modifiers.outline, isOverflowLabel && styles$C.modifiers.overflow, className) }),
            render ? (React.createElement(React.Fragment, null,
                isTooltipVisible && React.createElement(Tooltip, { reference: componentRef, content: children, position: tooltipPosition }),
                render({
                    className: styles$C.labelContent,
                    content,
                    componentRef
                }))) : isTooltipVisible ? (React.createElement(Tooltip, { content: children, position: tooltipPosition },
                React.createElement(Component, Object.assign({ className: css(styles$C.labelContent) }, (href && { href })), content))) : (React.createElement(Component, Object.assign({ className: css(styles$C.labelContent) }, (href && { href })), content)),
            onClose && button));
    };
    Label.displayName = 'Label';

    var labelGroup = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "button": "pf-c-button",
      "labelGroup": "pf-c-label-group",
      "labelGroupClose": "pf-c-label-group__close",
      "labelGroupLabel": "pf-c-label-group__label",
      "labelGroupList": "pf-c-label-group__list",
      "labelGroupListItem": "pf-c-label-group__list-item",
      "labelGroupMain": "pf-c-label-group__main",
      "modifiers": {
        "category": "pf-m-category",
        "vertical": "pf-m-vertical"
      }
    };
    });

    var styles$D = unwrapExports(labelGroup);

    class LabelGroup extends React.Component {
        constructor(props) {
            super(props);
            this.headingRef = React.createRef();
            this.toggleCollapse = () => {
                this.setState(prevState => ({
                    isOpen: !prevState.isOpen,
                    isTooltipVisible: Boolean(this.headingRef.current && this.headingRef.current.offsetWidth < this.headingRef.current.scrollWidth)
                }));
            };
            this.state = {
                isOpen: this.props.defaultIsOpen,
                isTooltipVisible: false
            };
        }
        componentDidMount() {
            this.setState({
                isTooltipVisible: Boolean(this.headingRef.current && this.headingRef.current.offsetWidth < this.headingRef.current.scrollWidth)
            });
        }
        renderLabel(id) {
            const { categoryName, tooltipPosition } = this.props;
            const { isTooltipVisible } = this.state;
            return isTooltipVisible ? (React.createElement(Tooltip, { position: tooltipPosition, content: categoryName },
                React.createElement("span", { tabIndex: 0, ref: this.headingRef, className: css(styles$D.labelGroupLabel), id: id, "aria-label": categoryName },
                    React.createElement("span", { "aria-hidden": "true" }, categoryName)))) : (React.createElement("span", { ref: this.headingRef, className: css(styles$D.labelGroupLabel), "aria-hidden": "true", id: id }, categoryName));
        }
        render() {
            const _a = this.props, { categoryName, children, className, isClosable, closeBtnAriaLabel, 'aria-label': ariaLabel, onClick, numLabels, expandedText, collapsedText, 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            defaultIsOpen, tooltipPosition, isVertical } = _a, 
            /* eslint-enable @typescript-eslint/no-unused-vars */
            rest = __rest(_a, ["categoryName", "children", "className", "isClosable", "closeBtnAriaLabel", 'aria-label', "onClick", "numLabels", "expandedText", "collapsedText", "defaultIsOpen", "tooltipPosition", "isVertical"]);
            const { isOpen } = this.state;
            const numChildren = React.Children.count(children);
            const collapsedTextResult = fillTemplate(collapsedText, {
                remaining: React.Children.count(children) - numLabels
            });
            const renderLabelGroup = (id) => {
                const labelArray = !isOpen
                    ? React.Children.toArray(children).slice(0, numLabels)
                    : React.Children.toArray(children);
                const content = (React.createElement(React.Fragment, null,
                    categoryName && this.renderLabel(id),
                    React.createElement("ul", Object.assign({ className: css(styles$D.labelGroupList) }, (categoryName && { 'aria-labelledby': id }), (!categoryName && { 'aria-label': ariaLabel }), { role: "list" }, rest),
                        labelArray.map((child, i) => (React.createElement("li", { className: css(styles$D.labelGroupListItem), key: i }, child))),
                        numChildren > numLabels && (React.createElement("li", { className: css(styles$D.labelGroupListItem) },
                            React.createElement(Label, { isOverflowLabel: true, onClick: this.toggleCollapse }, isOpen ? expandedText : collapsedTextResult))))));
                const close = (React.createElement("div", { className: css(styles$D.labelGroupClose) },
                    React.createElement(Button, { variant: "plain", "aria-label": closeBtnAriaLabel, onClick: onClick, id: `remove_group_${id}`, "aria-labelledby": `remove_group_${id} ${id}` },
                        React.createElement(TimesCircleIcon, { "aria-hidden": "true" }))));
                return (React.createElement("div", { className: css(styles$D.labelGroup, className, categoryName && styles$D.modifiers.category, isVertical && styles$D.modifiers.vertical) },
                    React.createElement("div", { className: css(styles$D.labelGroupMain) }, content),
                    isClosable && close));
            };
            return numChildren === 0 ? null : (React.createElement(GenerateId, null, randomId => renderLabelGroup(this.props.id || randomId)));
        }
    }
    LabelGroup.displayName = 'LabelGroup';
    LabelGroup.defaultProps = {
        expandedText: 'Show Less',
        collapsedText: '${remaining} more',
        categoryName: '',
        defaultIsOpen: false,
        numLabels: 3,
        isClosable: false,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onClick: (_e) => undefined,
        closeBtnAriaLabel: 'Close label group',
        tooltipPosition: 'top',
        'aria-label': 'Label group category',
        isVertical: false
    };

    var list = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "list": "pf-c-list",
      "modifiers": {
        "inline": "pf-m-inline"
      }
    };
    });

    var styles$E = unwrapExports(list);

    (function (OrderType) {
        OrderType["number"] = "1";
        OrderType["lowercaseLetter"] = "a";
        OrderType["uppercaseLetter"] = "A";
        OrderType["lowercaseRomanNumber"] = "i";
        OrderType["uppercaseRomanNumber"] = "I";
    })(exports.OrderType || (exports.OrderType = {}));
    (function (ListVariant) {
        ListVariant["inline"] = "inline";
    })(exports.ListVariant || (exports.ListVariant = {}));
    (function (ListComponent) {
        ListComponent["ol"] = "ol";
        ListComponent["ul"] = "ul";
    })(exports.ListComponent || (exports.ListComponent = {}));
    const List = (_a) => {
        var { className = '', children = null, variant = null, type = exports.OrderType.number, ref = null, component = exports.ListComponent.ul } = _a, props = __rest(_a, ["className", "children", "variant", "type", "ref", "component"]);
        return component === exports.ListComponent.ol ? (React.createElement("ol", Object.assign({ ref: ref, type: type }, props, { className: css(styles$E.list, variant && styles$E.modifiers[variant], className) }), children)) : (React.createElement("ul", Object.assign({ ref: ref }, props, { className: css(styles$E.list, variant && styles$E.modifiers[variant], className) }), children));
    };
    List.displayName = 'List';

    const ListItem = (_a) => {
        var { children = null } = _a, props = __rest(_a, ["children"]);
        return (React.createElement("li", Object.assign({}, props), children));
    };
    ListItem.displayName = 'ListItem';

    var login = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "brand": "pf-c-brand",
      "button": "pf-c-button",
      "card": "pf-c-card",
      "dropdown": "pf-c-dropdown",
      "list": "pf-c-list",
      "login": "pf-c-login",
      "loginContainer": "pf-c-login__container",
      "loginFooter": "pf-c-login__footer",
      "loginHeader": "pf-c-login__header",
      "loginMain": "pf-c-login__main",
      "loginMainBody": "pf-c-login__main-body",
      "loginMainFooter": "pf-c-login__main-footer",
      "loginMainFooterBand": "pf-c-login__main-footer-band",
      "loginMainFooterLinks": "pf-c-login__main-footer-links",
      "loginMainFooterLinksItem": "pf-c-login__main-footer-links-item",
      "loginMainFooterLinksItemLink": "pf-c-login__main-footer-links-item-link",
      "loginMainHeader": "pf-c-login__main-header",
      "loginMainHeaderDesc": "pf-c-login__main-header-desc",
      "title": "pf-c-title"
    };
    });

    var styles$F = unwrapExports(login);

    const Login = (_a) => {
        var { className = '', children = null, footer = null, header = null } = _a, props = __rest(_a, ["className", "children", "footer", "header"]);
        return (React.createElement("div", Object.assign({}, props, { className: css(styles$F.login, className) }),
            React.createElement("div", { className: css(styles$F.loginContainer) },
                header,
                React.createElement("main", { className: css(styles$F.loginMain) }, children),
                footer)));
    };
    Login.displayName = 'Login';

    const LoginHeader = (_a) => {
        var { className = '', children = null, headerBrand = null } = _a, props = __rest(_a, ["className", "children", "headerBrand"]);
        return (React.createElement("header", Object.assign({ className: css(styles$F.loginHeader, className) }, props),
            headerBrand,
            children));
    };
    LoginHeader.displayName = 'LoginHeader';

    const LoginFooter = (_a) => {
        var { className = '', children = null } = _a, props = __rest(_a, ["className", "children"]);
        return (React.createElement("footer", Object.assign({ className: css(styles$F.loginFooter, className) }, props), children));
    };
    LoginFooter.displayName = 'LoginFooter';

    const LoginMainHeader = (_a) => {
        var { children = null, className = '', title = '', subtitle = '' } = _a, props = __rest(_a, ["children", "className", "title", "subtitle"]);
        return (React.createElement("header", Object.assign({ className: css(styles$F.loginMainHeader, className) }, props),
            title && (React.createElement(Title, { headingLevel: "h2", size: exports.TitleSizes['3xl'] }, title)),
            subtitle && React.createElement("p", { className: css(styles$F.loginMainHeaderDesc) }, subtitle),
            children));
    };
    LoginMainHeader.displayName = 'LoginMainHeader';

    const LoginMainBody = (_a) => {
        var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("div", Object.assign({ className: css(styles$F.loginMainBody, className) }, props), children));
    };
    LoginMainBody.displayName = 'LoginMainBody';

    const LoginMainFooter = (_a) => {
        var { children = null, socialMediaLoginContent = null, signUpForAccountMessage = null, forgotCredentials = null, className = '' } = _a, props = __rest(_a, ["children", "socialMediaLoginContent", "signUpForAccountMessage", "forgotCredentials", "className"]);
        return (React.createElement("div", Object.assign({ className: css(styles$F.loginMainFooter, className) }, props),
            children,
            socialMediaLoginContent && React.createElement("ul", { className: css(styles$F.loginMainFooterLinks) }, socialMediaLoginContent),
            (signUpForAccountMessage || forgotCredentials) && (React.createElement("div", { className: css(styles$F.loginMainFooterBand) },
                signUpForAccountMessage,
                forgotCredentials))));
    };
    LoginMainFooter.displayName = 'LoginMainFooter';

    const LoginPage = (_a) => {
        var { children = null, className = '', brandImgSrc = '', brandImgAlt = '', backgroundImgSrc = '', backgroundImgAlt = '', footerListItems = null, textContent = '', footerListVariants, loginTitle, loginSubtitle, signUpForAccountMessage = null, forgotCredentials = null, socialMediaLoginContent = null } = _a, props = __rest(_a, ["children", "className", "brandImgSrc", "brandImgAlt", "backgroundImgSrc", "backgroundImgAlt", "footerListItems", "textContent", "footerListVariants", "loginTitle", "loginSubtitle", "signUpForAccountMessage", "forgotCredentials", "socialMediaLoginContent"]);
        const HeaderBrand = (React.createElement(React.Fragment, null,
            React.createElement(Brand, { src: brandImgSrc, alt: brandImgAlt })));
        const Header = React.createElement(LoginHeader, { headerBrand: HeaderBrand });
        const Footer = (React.createElement(LoginFooter, null,
            React.createElement("p", null, textContent),
            React.createElement(List, { variant: footerListVariants }, footerListItems)));
        return (React.createElement(React.Fragment, null,
            backgroundImgSrc && React.createElement(BackgroundImage, { src: backgroundImgSrc, alt: backgroundImgAlt }),
            React.createElement(Login, Object.assign({ header: Header, footer: Footer, className: css(className) }, props),
                React.createElement(LoginMainHeader, { title: loginTitle, subtitle: loginSubtitle }),
                React.createElement(LoginMainBody, null, children),
                (socialMediaLoginContent || forgotCredentials || signUpForAccountMessage) && (React.createElement(LoginMainFooter, { socialMediaLoginContent: socialMediaLoginContent, forgotCredentials: forgotCredentials, signUpForAccountMessage: signUpForAccountMessage })))));
    };
    LoginPage.displayName = 'LoginPage';

    const LoginForm = (_a) => {
        var { noAutoFocus = false, className = '', showHelperText = false, helperText = null, helperTextIcon = null, usernameLabel = 'Username', usernameValue = '', onChangeUsername = () => undefined, isValidUsername = true, passwordLabel = 'Password', passwordValue = '', onChangePassword = () => undefined, isValidPassword = true, loginButtonLabel = 'Log In', isLoginButtonDisabled = false, onLoginButtonClick = () => undefined, rememberMeLabel = '', isRememberMeChecked = false, onChangeRememberMe = () => undefined } = _a, props = __rest(_a, ["noAutoFocus", "className", "showHelperText", "helperText", "helperTextIcon", "usernameLabel", "usernameValue", "onChangeUsername", "isValidUsername", "passwordLabel", "passwordValue", "onChangePassword", "isValidPassword", "loginButtonLabel", "isLoginButtonDisabled", "onLoginButtonClick", "rememberMeLabel", "isRememberMeChecked", "onChangeRememberMe"]);
        return (React.createElement(Form, Object.assign({ className: className }, props),
            React.createElement(FormHelperText, { isError: !isValidUsername || !isValidPassword, isHidden: !showHelperText, icon: helperTextIcon }, helperText),
            React.createElement(FormGroup, { label: usernameLabel, isRequired: true, validated: isValidUsername ? exports.ValidatedOptions.default : exports.ValidatedOptions.error, fieldId: "pf-login-username-id" },
                React.createElement(TextInput, { autoFocus: !noAutoFocus, id: "pf-login-username-id", isRequired: true, validated: isValidUsername ? exports.ValidatedOptions.default : exports.ValidatedOptions.error, type: "text", name: "pf-login-username-id", value: usernameValue, onChange: onChangeUsername })),
            React.createElement(FormGroup, { label: passwordLabel, isRequired: true, validated: isValidPassword ? exports.ValidatedOptions.default : exports.ValidatedOptions.error, fieldId: "pf-login-password-id" },
                React.createElement(TextInput, { isRequired: true, type: "password", id: "pf-login-password-id", name: "pf-login-password-id", validated: isValidPassword ? exports.ValidatedOptions.default : exports.ValidatedOptions.error, value: passwordValue, onChange: onChangePassword })),
            rememberMeLabel.length > 0 && (React.createElement(FormGroup, { fieldId: "pf-login-remember-me-id" },
                React.createElement(Checkbox, { id: "pf-login-remember-me-id", label: rememberMeLabel, isChecked: isRememberMeChecked, onChange: onChangeRememberMe }))),
            React.createElement(ActionGroup, null,
                React.createElement(Button, { variant: "primary", type: "submit", onClick: onLoginButtonClick, isBlock: true, isDisabled: isLoginButtonDisabled }, loginButtonLabel))));
    };
    LoginForm.displayName = 'LoginForm';

    const LoginFooterItem = (_a) => {
        var { 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        className = '', children = null, href = '#', target = '_blank' } = _a, props = __rest(_a, ["className", "children", "href", "target"]);
        return React.isValidElement(children) ? (children) : (React.createElement("a", Object.assign({ target: target, href: href }, props), children));
    };
    LoginFooterItem.displayName = 'LoginFooterItem';

    const LoginMainFooterBandItem = (_a) => {
        var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("p", Object.assign({ className: css(`${styles$F.loginMainFooterBand}-item`, className) }, props), children));
    };
    LoginMainFooterBandItem.displayName = 'LoginMainFooterBandItem';

    const LoginMainFooterLinksItem = (_a) => {
        var { children = null, href = '', target = '', className = '', linkComponent = 'a', linkComponentProps } = _a, props = __rest(_a, ["children", "href", "target", "className", "linkComponent", "linkComponentProps"]);
        const LinkComponent = linkComponent;
        return (React.createElement("li", Object.assign({ className: css(styles$F.loginMainFooterLinksItem, className) }, props),
            React.createElement(LinkComponent, Object.assign({ className: css(styles$F.loginMainFooterLinksItemLink), href: href, target: target }, linkComponentProps), children)));
    };
    LoginMainFooterLinksItem.displayName = 'LoginMainFooterLinksItem';

    var menu = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "divider": "pf-c-divider",
      "menu": "pf-c-menu",
      "menuContent": "pf-c-menu__content",
      "menuGroupTitle": "pf-c-menu__group-title",
      "menuItem": "pf-c-menu__item",
      "menuItemAction": "pf-c-menu__item-action",
      "menuItemActionIcon": "pf-c-menu__item-action-icon",
      "menuItemDescription": "pf-c-menu__item-description",
      "menuItemExternalIcon": "pf-c-menu__item-external-icon",
      "menuItemIcon": "pf-c-menu__item-icon",
      "menuItemMain": "pf-c-menu__item-main",
      "menuItemSelectIcon": "pf-c-menu__item-select-icon",
      "menuItemText": "pf-c-menu__item-text",
      "menuItemToggleIcon": "pf-c-menu__item-toggle-icon",
      "menuList": "pf-c-menu__list",
      "menuListItem": "pf-c-menu__list-item",
      "menuSearch": "pf-c-menu__search",
      "modifiers": {
        "flyout": "pf-m-flyout",
        "drilldown": "pf-m-drilldown",
        "drilledIn": "pf-m-drilled-in",
        "currentPath": "pf-m-current-path",
        "disabled": "pf-m-disabled",
        "selected": "pf-m-selected",
        "favorite": "pf-m-favorite",
        "favorited": "pf-m-favorited"
      }
    };
    });

    var styles$G = unwrapExports(menu);

    const MenuContext = React.createContext({
        onActionClick: () => null,
        onSelect: () => null,
        activeItemId: null,
        selected: null
    });
    const MenuItemContext = React.createContext({
        itemId: null,
        isDisabled: false
    });

    class MenuBase extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                ouiaStateId: getDefaultOUIAId(Menu.displayName),
                searchInputValue: ''
            };
        }
        render() {
            const _a = this.props, { 'aria-label': ariaLabel, children, className, onSelect, selected = null, onActionClick, ouiaId, ouiaSafe, containsFlyout, activeItemId = null, innerRef } = _a, props = __rest(_a, ['aria-label', "children", "className", "onSelect", "selected", "onActionClick", "ouiaId", "ouiaSafe", "containsFlyout", "activeItemId", "innerRef"]);
            return (React.createElement(MenuContext.Provider, { value: { onSelect, onActionClick, activeItemId, selected } },
                React.createElement("div", Object.assign({ className: css(styles$G.menu, containsFlyout && styles$G.modifiers.flyout, className), "aria-label": ariaLabel || containsFlyout ? 'Local' : 'Global', ref: innerRef }, getOUIAProps(Menu.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe), props), children)));
        }
    }
    MenuBase.defaultProps = {
        ouiaSafe: true
    };
    const Menu = React.forwardRef((props, ref) => (React.createElement(MenuBase, Object.assign({}, props, { innerRef: ref }))));
    Menu.displayName = 'Menu';

    const MenuContent = React.forwardRef((props, ref) => (React.createElement("div", Object.assign({}, props, { className: css(styles$G.menuContent, props.className), ref: ref }))));
    MenuContent.displayName = 'MenuContent';

    const MenuInput = React.forwardRef((props, ref) => (React.createElement("div", Object.assign({}, props, { className: css(styles$G.menuSearch, props.className), ref: ref }))));
    MenuInput.displayName = 'MenuInput';

    const MenuGroupBase = (_a) => {
        var { children, className = '', label = '', titleId = '', innerRef } = _a, props = __rest(_a, ["children", "className", "label", "titleId", "innerRef"]);
        return (React.createElement("section", Object.assign({}, props, { className: css('pf-c-menu__group', className), ref: innerRef }),
            label && (React.createElement("h1", { className: css(styles$G.menuGroupTitle), id: titleId }, label)),
            children));
    };
    const MenuGroup = React.forwardRef((props, ref) => (React.createElement(MenuGroupBase, Object.assign({}, props, { innerRef: ref }))));
    MenuGroup.displayName = 'MenuGroup';

    const MenuItemActionBase = (_a) => {
        var { className = '', icon, onClick, 'aria-label': ariaLabel, isFavorited = null, isDisabled, actionId, innerRef } = _a, props = __rest(_a, ["className", "icon", "onClick", 'aria-label', "isFavorited", "isDisabled", "actionId", "innerRef"]);
        return (React.createElement(MenuContext.Consumer, null, ({ onActionClick }) => (React.createElement(MenuItemContext.Consumer, null, ({ itemId, isDisabled: isDisabledContext }) => {
            const onClickButton = (event) => {
                // event specified on the MenuItemAction
                onClick && onClick(event);
                // event specified on the Menu
                onActionClick && onActionClick(event, itemId, actionId);
            };
            return (React.createElement("button", Object.assign({ className: css(styles$G.menuItemAction, isFavorited !== null && styles$G.modifiers.favorite, isFavorited && styles$G.modifiers.favorited, className), "aria-label": ariaLabel, onClick: onClickButton }, ((isDisabled === true || isDisabledContext === true) && { disabled: true }), { ref: innerRef }, props),
                React.createElement("span", { className: css(styles$G.menuItemActionIcon) }, icon === 'favorites' || isFavorited !== null ? React.createElement(StarIcon, { "aria-hidden": true }) : icon)));
        }))));
    };
    const MenuItemAction = React.forwardRef((props, ref) => (React.createElement(MenuItemActionBase, Object.assign({}, props, { innerRef: ref }))));
    MenuItemAction.displayName = 'MenuItemAction';

    const MenuItemBase = (_a) => {
        var { children, className, itemId = null, to, isActive = null, isFavorited = null, flyoutMenu, description = null, onClick = () => { }, component, isDisabled = false, isExternalLink = false, isSelected = null, icon, actions, onShowFlyout, innerRef } = _a, props = __rest(_a, ["children", "className", "itemId", "to", "isActive", "isFavorited", "flyoutMenu", "description", "onClick", "component", "isDisabled", "isExternalLink", "isSelected", "icon", "actions", "onShowFlyout", "innerRef"]);
        const Component = component || to ? 'a' : 'button';
        const [flyoutVisible, setFlyoutVisible] = React.useState(false);
        const showFlyout = (displayFlyout) => {
            setFlyoutVisible(displayFlyout);
            onShowFlyout && displayFlyout && onShowFlyout();
        };
        const onItemSelect = (event, onSelect) => {
            // Trigger callback for Menu onSelect
            onSelect && onSelect(event, itemId);
            // Trigger callback for item onClick
            onClick && onClick(event);
        };
        const renderItem = (onSelect, activeItemId, selected) => {
            const additionalProps = Component === 'a'
                ? {
                    href: to,
                    'aria-disabled': isDisabled ? true : null,
                    tabIndex: isDisabled ? -1 : null
                }
                : {};
            const getAriaCurrent = () => {
                if (isActive !== null) {
                    if (isActive) {
                        return 'page';
                    }
                    else {
                        return null;
                    }
                }
                else if (itemId !== null && activeItemId !== null) {
                    return itemId === activeItemId;
                }
                return null;
            };
            const getIsSelected = () => {
                if (isSelected !== null) {
                    return isSelected;
                }
                else if (selected !== null && itemId !== null) {
                    return (Array.isArray(selected) && selected.includes(itemId)) || itemId === selected;
                }
                return false;
            };
            return (React.createElement(React.Fragment, null,
                React.createElement(Component, Object.assign({ onClick: (event) => onItemSelect(event, onSelect), className: css(styles$G.menuItem, getIsSelected() && styles$G.modifiers.selected, className), "aria-current": getAriaCurrent() }, (isDisabled && { disabled: true }), additionalProps),
                    React.createElement("div", { className: css(styles$G.menuItemMain) },
                        icon && React.createElement("span", { className: css(styles$G.menuItemIcon) }, icon),
                        React.createElement("span", { className: css(styles$G.menuItemText) }, children),
                        isExternalLink && (React.createElement("span", { className: css(styles$G.menuItemExternalIcon) },
                            React.createElement(ExternalLinkAltIcon, { "aria-hidden": true }))),
                        flyoutMenu && (React.createElement("span", { className: css(styles$G.menuItemToggleIcon) },
                            React.createElement(AngleRightIcon, { "aria-hidden": true }))),
                        getIsSelected() && (React.createElement("span", { className: css(styles$G.menuItemSelectIcon) },
                            React.createElement(CheckIcon, { "aria-hidden": true })))),
                    description && (React.createElement("div", { className: css(styles$G.menuItemDescription) },
                        React.createElement("span", null, description)))),
                flyoutVisible && flyoutMenu));
        };
        return (React.createElement("li", Object.assign({ className: css(styles$G.menuListItem, isDisabled && styles$G.modifiers.disabled, className), onMouseOver: flyoutMenu !== undefined ? () => showFlyout(true) : undefined, onMouseLeave: flyoutMenu !== undefined ? () => showFlyout(false) : undefined, ref: innerRef }, props),
            React.createElement(MenuContext.Consumer, null, ({ onSelect, onActionClick, activeItemId, selected }) => (React.createElement(React.Fragment, null,
                renderItem(onSelect, activeItemId, selected),
                React.createElement(MenuItemContext.Provider, { value: { itemId, isDisabled } },
                    actions,
                    isFavorited !== null && (React.createElement(MenuItemAction, { icon: "favorites", isFavorited: isFavorited, "aria-label": isFavorited ? 'starred' : 'not starred', onClick: event => onActionClick(event, itemId), actionId: "fav" }))))))));
    };
    const MenuItem = React.forwardRef((props, ref) => (React.createElement(MenuItemBase, Object.assign({}, props, { innerRef: ref }))));
    MenuItem.displayName = 'MenuItem';

    const MenuListBase = (_a) => {
        var { children = null, className, innerRef } = _a, props = __rest(_a, ["children", "className", "innerRef"]);
        return (React.createElement("ul", Object.assign({ className: css(styles$G.menuList, className), ref: innerRef }, props), children));
    };
    const MenuList = React.forwardRef((props, ref) => (React.createElement(MenuListBase, Object.assign({}, props, { innerRef: ref }))));
    MenuList.displayName = 'MenuList';

    var modalBox = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "button": "pf-c-button",
      "modalBox": "pf-c-modal-box",
      "modalBoxBody": "pf-c-modal-box__body",
      "modalBoxDescription": "pf-c-modal-box__description",
      "modalBoxFooter": "pf-c-modal-box__footer",
      "modalBoxHeader": "pf-c-modal-box__header",
      "modalBoxHeaderMain": "pf-c-modal-box__header-main",
      "modalBoxTitle": "pf-c-modal-box__title",
      "modalBoxTitleIcon": "pf-c-modal-box__title-icon",
      "modalBoxTitleText": "pf-c-modal-box__title-text",
      "modifiers": {
        "sm": "pf-m-sm",
        "md": "pf-m-md",
        "lg": "pf-m-lg",
        "alignTop": "pf-m-align-top",
        "danger": "pf-m-danger",
        "warning": "pf-m-warning",
        "success": "pf-m-success",
        "default": "pf-m-default",
        "info": "pf-m-info",
        "help": "pf-m-help",
        "icon": "pf-m-icon"
      }
    };
    });

    var modalStyles = unwrapExports(modalBox);

    const ModalBoxBody = (_a) => {
        var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("div", Object.assign({}, props, { className: css(modalStyles.modalBoxBody, className) }), children));
    };
    ModalBoxBody.displayName = 'ModalBoxBody';

    const ModalBoxCloseButton = (_a) => {
        var { className = '', onClose = () => undefined } = _a, props = __rest(_a, ["className", "onClose"]);
        return (React.createElement(Button, Object.assign({ className: className, variant: "plain", onClick: onClose, "aria-label": "Close" }, props),
            React.createElement(TimesIcon, null)));
    };
    ModalBoxCloseButton.displayName = 'ModalBoxCloseButton';

    const c_modal_box_m_align_top_spacer = {
      "name": "--pf-c-modal-box--m-align-top--spacer",
      "value": "0.5rem",
      "var": "var(--pf-c-modal-box--m-align-top--spacer)"
    };

    const ModalBox = (_a) => {
        var { children, className = '', variant = 'default', position, positionOffset, 'aria-labelledby': ariaLabelledby, 'aria-label': ariaLabel = '', 'aria-describedby': ariaDescribedby, style } = _a, props = __rest(_a, ["children", "className", "variant", "position", "positionOffset", 'aria-labelledby', 'aria-label', 'aria-describedby', "style"]);
        if (positionOffset) {
            style = style || {};
            style[c_modal_box_m_align_top_spacer.name] = positionOffset;
        }
        return (React.createElement("div", Object.assign({}, props, { role: "dialog", "aria-label": ariaLabel || null, "aria-labelledby": ariaLabelledby || null, "aria-describedby": ariaDescribedby, "aria-modal": "true", className: css(modalStyles.modalBox, className, position === 'top' && modalStyles.modifiers.alignTop, variant === 'large' && modalStyles.modifiers.lg, variant === 'small' && modalStyles.modifiers.sm, variant === 'medium' && modalStyles.modifiers.md), style: style }), children));
    };
    ModalBox.displayName = 'ModalBox';

    const ModalBoxFooter = (_a) => {
        var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("footer", Object.assign({}, props, { className: css(modalStyles.modalBoxFooter, className) }), children));
    };
    ModalBoxFooter.displayName = 'ModalBoxFooter';

    const ModalBoxDescription = (_a) => {
        var { children = null, className = '', id = '' } = _a, props = __rest(_a, ["children", "className", "id"]);
        return (React.createElement("div", Object.assign({}, props, { id: id, className: css(modalStyles.modalBoxDescription, className) }), children));
    };
    ModalBoxDescription.displayName = 'ModalBoxDescription';

    const ModalBoxHeader = (_a) => {
        var { children = null, className = '', help = null } = _a, props = __rest(_a, ["children", "className", "help"]);
        return (React.createElement("header", Object.assign({ className: css(modalStyles.modalBoxHeader, help && modalStyles.modifiers.help, className) }, props),
            help && (React.createElement(React.Fragment, null,
                React.createElement("div", { className: css(modalStyles.modalBoxHeaderMain) }, children),
                React.createElement("div", { className: "pf-c-modal-box__header-help" }, help))),
            !help && children));
    };
    ModalBoxHeader.displayName = 'ModalBoxHeader';

    const isVariantIcon = (icon) => ['success', 'danger', 'warning', 'info', 'defaut'].includes(icon);
    const ModalBoxTitle = (_a) => {
        var { className = '', id, title, titleIconVariant, titleLabel = '' } = _a, props = __rest(_a, ["className", "id", "title", "titleIconVariant", "titleLabel"]);
        const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
        const h1 = React.useRef();
        const label = titleLabel || (isVariantIcon(titleIconVariant) ? `${capitalize(titleIconVariant)} alert:` : titleLabel);
        const variantIcons = {
            success: React.createElement(CheckCircleIcon, null),
            danger: React.createElement(ExclamationCircleIcon, null),
            warning: React.createElement(ExclamationTriangleIcon, null),
            info: React.createElement(InfoCircleIcon, null),
            default: React.createElement(BellIcon, null)
        };
        const CustomIcon = !isVariantIcon(titleIconVariant) && titleIconVariant;
        React.useLayoutEffect(() => {
            setIsTooltipVisible(h1.current && h1.current.offsetWidth < h1.current.scrollWidth);
        }, []);
        const content = (React.createElement("h1", Object.assign({ id: id, ref: h1, className: css(modalStyles.modalBoxTitle, titleIconVariant && modalStyles.modifiers.icon, className) }, props),
            titleIconVariant && (React.createElement("span", { className: css(modalStyles.modalBoxTitleIcon) }, isVariantIcon(titleIconVariant) ? variantIcons[titleIconVariant] : React.createElement(CustomIcon, null))),
            label && React.createElement("span", { className: css(a11yStyles.screenReader) }, label),
            React.createElement("span", { className: css(modalStyles.modalBoxTitleText) }, title)));
        return isTooltipVisible ? (React.createElement(Tooltip, { content: title, isVisible: true }, content)) : (content);
    };
    ModalBoxTitle.displayName = 'ModalBoxTitle';

    const ModalContent = (_a) => {
        var { children, className = '', isOpen = false, header = null, help = null, description = null, title = '', titleIconVariant = null, titleLabel = '', 'aria-label': ariaLabel = '', 'aria-describedby': ariaDescribedby, 'aria-labelledby': ariaLabelledby, showClose = true, footer = null, actions = [], onClose = () => undefined, variant = 'default', position, positionOffset, width = -1, boxId, labelId, descriptorId, disableFocusTrap = false, hasNoBodyWrapper = false, ouiaId, ouiaSafe = true } = _a, props = __rest(_a, ["children", "className", "isOpen", "header", "help", "description", "title", "titleIconVariant", "titleLabel", 'aria-label', 'aria-describedby', 'aria-labelledby', "showClose", "footer", "actions", "onClose", "variant", "position", "positionOffset", "width", "boxId", "labelId", "descriptorId", "disableFocusTrap", "hasNoBodyWrapper", "ouiaId", "ouiaSafe"]);
        if (!isOpen) {
            return null;
        }
        const modalBoxHeader = header ? (React.createElement(ModalBoxHeader, { help: help }, header)) : (title && (React.createElement(ModalBoxHeader, { help: help },
            React.createElement(ModalBoxTitle, { title: title, titleIconVariant: titleIconVariant, titleLabel: titleLabel, id: labelId }),
            description && React.createElement(ModalBoxDescription, { id: descriptorId }, description))));
        const modalBoxFooter = footer ? (React.createElement(ModalBoxFooter, null, footer)) : (actions.length > 0 && React.createElement(ModalBoxFooter, null, actions));
        const modalBody = hasNoBodyWrapper ? (children) : (React.createElement(ModalBoxBody, Object.assign({}, props, (!description && !ariaDescribedby && { id: descriptorId })), children));
        const boxStyle = width === -1 ? {} : { width };
        const ariaLabelledbyFormatted = () => {
            if (ariaLabelledby === null) {
                return null;
            }
            const idRefList = [];
            if ((ariaLabel && boxId) !== '') {
                idRefList.push(ariaLabel && boxId);
            }
            if (ariaLabelledby) {
                idRefList.push(ariaLabelledby);
            }
            if (title) {
                idRefList.push(labelId);
            }
            return idRefList.join(' ');
        };
        const modalBox = (React.createElement(ModalBox, Object.assign({ id: boxId, style: boxStyle, className: css(className, isVariantIcon(titleIconVariant) &&
                modalStyles.modifiers[titleIconVariant]), variant: variant, position: position, positionOffset: positionOffset, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledbyFormatted(), "aria-describedby": ariaDescribedby || (hasNoBodyWrapper ? null : descriptorId) }, getOUIAProps(ModalContent.displayName, ouiaId, ouiaSafe)),
            showClose && React.createElement(ModalBoxCloseButton, { onClose: onClose }),
            modalBoxHeader,
            modalBody,
            modalBoxFooter));
        return (React.createElement(Backdrop, null,
            React.createElement(FocusTrap, { active: !disableFocusTrap, focusTrapOptions: { clickOutsideDeactivates: true }, className: css(styles$1.bullseye) }, modalBox)));
    };
    ModalContent.displayName = 'ModalContent';

    (function (ModalVariant) {
        ModalVariant["small"] = "small";
        ModalVariant["medium"] = "medium";
        ModalVariant["large"] = "large";
        ModalVariant["default"] = "default";
    })(exports.ModalVariant || (exports.ModalVariant = {}));
    class Modal extends React.Component {
        constructor(props) {
            super(props);
            this.boxId = '';
            this.labelId = '';
            this.descriptorId = '';
            this.handleEscKeyClick = (event) => {
                const { onEscapePress } = this.props;
                if (event.keyCode === KEY_CODES.ESCAPE_KEY && this.props.isOpen) {
                    onEscapePress ? onEscapePress(event) : this.props.onClose();
                }
            };
            this.getElement = (appendTo) => {
                if (typeof appendTo === 'function') {
                    return appendTo();
                }
                return appendTo || document.body;
            };
            this.toggleSiblingsFromScreenReaders = (hide) => {
                const { appendTo } = this.props;
                const target = this.getElement(appendTo);
                const bodyChildren = target.children;
                for (const child of Array.from(bodyChildren)) {
                    if (child !== this.state.container) {
                        hide ? child.setAttribute('aria-hidden', '' + hide) : child.removeAttribute('aria-hidden');
                    }
                }
            };
            this.isEmpty = (value) => value === null || value === undefined || value === '';
            const boxIdNum = Modal.currentId++;
            const labelIdNum = boxIdNum + 1;
            const descriptorIdNum = boxIdNum + 2;
            this.boxId = props.id || `pf-modal-part-${boxIdNum}`;
            this.labelId = `pf-modal-part-${labelIdNum}`;
            this.descriptorId = `pf-modal-part-${descriptorIdNum}`;
            this.state = {
                container: undefined,
                ouiaStateId: getDefaultOUIAId(Modal.displayName, props.variant)
            };
        }
        componentDidMount() {
            const { appendTo, title, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, hasNoBodyWrapper, header } = this.props;
            const target = this.getElement(appendTo);
            const container = document.createElement('div');
            this.setState({ container });
            target.appendChild(container);
            target.addEventListener('keydown', this.handleEscKeyClick, false);
            if (this.props.isOpen) {
                target.classList.add(css(styles.backdropOpen));
            }
            else {
                target.classList.remove(css(styles.backdropOpen));
            }
            if (this.isEmpty(title) && this.isEmpty(ariaLabel) && this.isEmpty(ariaLabelledby)) {
                // eslint-disable-next-line no-console
                console.error('Modal: Specify at least one of: title, aria-label, aria-labelledby.');
            }
            if (this.isEmpty(ariaLabel) && this.isEmpty(ariaLabelledby) && (hasNoBodyWrapper || header)) {
                // eslint-disable-next-line no-console
                console.error('Modal: When using hasNoBodyWrapper or setting a custom header, ensure you assign an accessible name to the the modal container with aria-label or aria-labelledby.');
            }
        }
        componentDidUpdate() {
            const { appendTo } = this.props;
            const target = this.getElement(appendTo);
            if (this.props.isOpen) {
                target.classList.add(css(styles.backdropOpen));
                this.toggleSiblingsFromScreenReaders(true);
            }
            else {
                target.classList.remove(css(styles.backdropOpen));
                this.toggleSiblingsFromScreenReaders(false);
            }
        }
        componentWillUnmount() {
            const { appendTo } = this.props;
            const target = this.getElement(appendTo);
            if (this.state.container) {
                target.removeChild(this.state.container);
            }
            target.removeEventListener('keydown', this.handleEscKeyClick, false);
            target.classList.remove(css(styles.backdropOpen));
        }
        render() {
            const _a = this.props, { 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            appendTo, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onEscapePress, 'aria-labelledby': ariaLabelledby, 'aria-label': ariaLabel, 'aria-describedby': ariaDescribedby, title, titleIconVariant, titleLabel, ouiaId, ouiaSafe } = _a, props = __rest(_a, ["appendTo", "onEscapePress", 'aria-labelledby', 'aria-label', 'aria-describedby', "title", "titleIconVariant", "titleLabel", "ouiaId", "ouiaSafe"]);
            const { container } = this.state;
            if (!canUseDOM || !container) {
                return null;
            }
            return ReactDOM.createPortal(React.createElement(ModalContent, Object.assign({}, props, { boxId: this.boxId, labelId: this.labelId, descriptorId: this.descriptorId, title: title, titleIconVariant: titleIconVariant, titleLabel: titleLabel, "aria-label": ariaLabel, "aria-describedby": ariaDescribedby, "aria-labelledby": ariaLabelledby, ouiaId: ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe: ouiaSafe })), container);
        }
    }
    Modal.displayName = 'Modal';
    Modal.currentId = 0;
    Modal.defaultProps = {
        className: '',
        isOpen: false,
        title: '',
        titleIconVariant: null,
        titleLabel: '',
        'aria-label': '',
        showClose: true,
        'aria-describedby': '',
        'aria-labelledby': '',
        id: undefined,
        actions: [],
        onClose: () => undefined,
        variant: 'default',
        hasNoBodyWrapper: false,
        appendTo: () => document.body,
        ouiaSafe: true
    };

    var nav = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "divider": "pf-c-divider",
      "modifiers": {
        "horizontal": "pf-m-horizontal",
        "tertiary": "pf-m-tertiary",
        "light": "pf-m-light",
        "scrollable": "pf-m-scrollable",
        "expandable": "pf-m-expandable",
        "current": "pf-m-current",
        "expanded": "pf-m-expanded"
      },
      "nav": "pf-c-nav",
      "navItem": "pf-c-nav__item",
      "navLink": "pf-c-nav__link",
      "navList": "pf-c-nav__list",
      "navScrollButton": "pf-c-nav__scroll-button",
      "navSection": "pf-c-nav__section",
      "navSectionTitle": "pf-c-nav__section-title",
      "navSubnav": "pf-c-nav__subnav",
      "navToggle": "pf-c-nav__toggle",
      "navToggleIcon": "pf-c-nav__toggle-icon"
    };
    });

    var styles$H = unwrapExports(nav);

    const NavContext = React.createContext({});
    class Nav extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                isScrollable: false,
                ouiaStateId: getDefaultOUIAId(Nav.displayName, this.props.variant)
            };
        }
        // Callback from NavItem
        onSelect(event, groupId, itemId, to, preventDefault, onClick) {
            if (preventDefault) {
                event.preventDefault();
            }
            this.props.onSelect({ groupId, itemId, event, to });
            if (onClick) {
                onClick(event, itemId, groupId, to);
            }
        }
        // Callback from NavExpandable
        onToggle(event, groupId, toggleValue) {
            this.props.onToggle({
                event,
                groupId,
                isExpanded: toggleValue
            });
        }
        render() {
            const _a = this.props, { 'aria-label': ariaLabel, children, className, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onSelect, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onToggle, theme, ouiaId, ouiaSafe, variant } = _a, props = __rest(_a, ['aria-label', "children", "className", "onSelect", "onToggle", "theme", "ouiaId", "ouiaSafe", "variant"]);
            const isHorizontal = ['horizontal', 'tertiary'].includes(variant);
            return (React.createElement(NavContext.Provider, { value: {
                    onSelect: (event, groupId, itemId, to, preventDefault, onClick) => this.onSelect(event, groupId, itemId, to, preventDefault, onClick),
                    onToggle: (event, groupId, expanded) => this.onToggle(event, groupId, expanded),
                    updateIsScrollable: (isScrollable) => this.setState({ isScrollable }),
                    isHorizontal
                } },
                React.createElement("nav", Object.assign({ className: css(styles$H.nav, theme === 'light' && styles$H.modifiers.light, isHorizontal && styles$H.modifiers.horizontal, variant === 'tertiary' && styles$H.modifiers.tertiary, this.state.isScrollable && styles$H.modifiers.scrollable, className), "aria-label": ariaLabel || (variant === 'tertiary' ? 'Local' : 'Global') }, getOUIAProps(Nav.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe), props), children)));
        }
    }
    Nav.displayName = 'Nav';
    Nav.defaultProps = {
        onSelect: () => undefined,
        onToggle: () => undefined,
        theme: 'dark',
        ouiaSafe: true
    };

    class NavList extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                scrollViewAtStart: false,
                scrollViewAtEnd: false
            };
            this.navList = React.createRef();
            this.handleScrollButtons = () => {
                const container = this.navList.current;
                if (container) {
                    // check if it elements are in view
                    const scrollViewAtStart = isElementInView(container, container.firstChild, false);
                    const scrollViewAtEnd = isElementInView(container, container.lastChild, false);
                    this.setState({
                        scrollViewAtStart,
                        scrollViewAtEnd
                    });
                    this.context.updateIsScrollable(!scrollViewAtStart || !scrollViewAtEnd);
                }
            };
            this.scrollLeft = () => {
                // find first Element that is fully in view on the left, then scroll to the element before it
                const container = this.navList.current;
                if (container) {
                    const childrenArr = Array.from(container.children);
                    let firstElementInView;
                    let lastElementOutOfView;
                    for (let i = 0; i < childrenArr.length && !firstElementInView; i++) {
                        if (isElementInView(container, childrenArr[i], false)) {
                            firstElementInView = childrenArr[i];
                            lastElementOutOfView = childrenArr[i - 1];
                        }
                    }
                    if (lastElementOutOfView) {
                        container.scrollLeft -= lastElementOutOfView.scrollWidth;
                    }
                    this.handleScrollButtons();
                }
            };
            this.scrollRight = () => {
                // find last Element that is fully in view on the right, then scroll to the element after it
                const container = this.navList.current;
                if (container) {
                    const childrenArr = Array.from(container.children);
                    let lastElementInView;
                    let firstElementOutOfView;
                    for (let i = childrenArr.length - 1; i >= 0 && !lastElementInView; i--) {
                        if (isElementInView(container, childrenArr[i], false)) {
                            lastElementInView = childrenArr[i];
                            firstElementOutOfView = childrenArr[i + 1];
                        }
                    }
                    if (firstElementOutOfView) {
                        container.scrollLeft += firstElementOutOfView.scrollWidth;
                    }
                    this.handleScrollButtons();
                }
            };
        }
        componentDidMount() {
            window.addEventListener('resize', this.handleScrollButtons, false);
            this.handleScrollButtons();
        }
        componentWillUnmount() {
            window.removeEventListener('resize', this.handleScrollButtons, false);
        }
        render() {
            const _a = this.props, { children, className, ariaLeftScroll, ariaRightScroll } = _a, props = __rest(_a, ["children", "className", "ariaLeftScroll", "ariaRightScroll"]);
            const { scrollViewAtStart, scrollViewAtEnd } = this.state;
            return (React.createElement(NavContext.Consumer, null, ({ isHorizontal }) => (React.createElement(React.Fragment, null,
                isHorizontal && (React.createElement("button", { className: css(styles$H.navScrollButton), "aria-label": ariaLeftScroll, onClick: this.scrollLeft, disabled: scrollViewAtStart },
                    React.createElement(AngleLeftIcon, null))),
                React.createElement("ul", Object.assign({ ref: this.navList, className: css(styles$H.navList, className), onScroll: this.handleScrollButtons }, props), children),
                isHorizontal && (React.createElement("button", { className: css(styles$H.navScrollButton), "aria-label": ariaRightScroll, onClick: this.scrollRight, disabled: scrollViewAtEnd },
                    React.createElement(AngleRightIcon, null)))))));
        }
    }
    NavList.displayName = 'NavList';
    NavList.contextType = NavContext;
    NavList.defaultProps = {
        ariaLeftScroll: 'Scroll left',
        ariaRightScroll: 'Scroll right'
    };

    const NavGroup = (_a) => {
        var { title, children = null, className = '', id = getUniqueId() } = _a, props = __rest(_a, ["title", "children", "className", "id"]);
        return (React.createElement("section", Object.assign({ className: css(styles$H.navSection, className), "aria-labelledby": id }, props),
            React.createElement("h2", { className: css(styles$H.navSectionTitle), id: id }, title),
            React.createElement("ul", null, children)));
    };
    NavGroup.displayName = 'NavGroup';

    const NavItem = (_a) => {
        var { children, styleChildren = true, className, to, isActive = false, groupId = null, itemId = null, preventDefault = false, onClick = null, component = 'a', ouiaId, ouiaSafe } = _a, props = __rest(_a, ["children", "styleChildren", "className", "to", "isActive", "groupId", "itemId", "preventDefault", "onClick", "component", "ouiaId", "ouiaSafe"]);
        const Component = component;
        const renderDefaultLink = (context) => {
            const preventLinkDefault = preventDefault || !to;
            return (React.createElement(Component, Object.assign({ href: to, onClick: (e) => context.onSelect(e, groupId, itemId, to, preventLinkDefault, onClick), className: css(styles$H.navLink, isActive && styles$H.modifiers.current, className), "aria-current": isActive ? 'page' : null }, props), children));
        };
        const renderClonedChild = (context, child) => React.cloneElement(child, Object.assign({ onClick: (e) => context.onSelect(e, groupId, itemId, to, preventDefault, onClick), 'aria-current': isActive ? 'page' : null }, (styleChildren && {
            className: css(styles$H.navLink, isActive && styles$H.modifiers.current, child.props && child.props.className)
        })));
        const ouiaProps = useOUIAProps(NavItem.displayName, ouiaId, ouiaSafe);
        return (React.createElement("li", Object.assign({ className: css(styles$H.navItem, className) }, ouiaProps),
            React.createElement(NavContext.Consumer, null, context => React.isValidElement(children)
                ? renderClonedChild(context, children)
                : renderDefaultLink(context))));
    };
    NavItem.displayName = 'NavItem';

    const NavItemSeparator = (_a) => {
        var { component = 'li' } = _a, props = __rest(_a, ["component"]);
        return React.createElement(Divider, Object.assign({ component: component }, props));
    };
    NavItemSeparator.displayName = 'NavItemSeparator';

    class NavExpandable extends React.Component {
        constructor() {
            super(...arguments);
            this.expandableRef = React.createRef();
            this.id = this.props.id || getUniqueId();
            this.state = {
                expandedState: this.props.isExpanded,
                ouiaStateId: getDefaultOUIAId(NavExpandable.displayName)
            };
            this.onExpand = (e, val) => {
                if (this.props.onExpand) {
                    this.props.onExpand(e, val);
                }
                else {
                    this.setState({ expandedState: val });
                }
            };
            this.handleToggle = (e, onToggle) => {
                // Item events can bubble up, ignore those
                if (!this.expandableRef.current || !this.expandableRef.current.contains(e.target)) {
                    return;
                }
                const { groupId } = this.props;
                const { expandedState } = this.state;
                onToggle(e, groupId, !expandedState);
                this.onExpand(e, !expandedState);
            };
        }
        componentDidMount() {
            this.setState({ expandedState: this.props.isExpanded });
        }
        componentDidUpdate(prevProps) {
            if (this.props.isExpanded !== prevProps.isExpanded) {
                this.setState({ expandedState: this.props.isExpanded });
            }
        }
        render() {
            const _a = this.props, { title, srText, children, className, isActive, ouiaId, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            groupId, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            id, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            isExpanded } = _a, props = __rest(_a, ["title", "srText", "children", "className", "isActive", "ouiaId", "groupId", "id", "isExpanded"]);
            const { expandedState, ouiaStateId } = this.state;
            const onClick = () => {
                this.setState(prevState => ({ expandedState: !prevState.expandedState }));
            };
            return (React.createElement(NavContext.Consumer, null, (context) => (React.createElement("li", Object.assign({ className: css(styles$H.navItem, styles$H.modifiers.expandable, expandedState && styles$H.modifiers.expanded, isActive && styles$H.modifiers.current, className) }, getOUIAProps(NavExpandable.displayName, ouiaId !== undefined ? ouiaId : ouiaStateId), { onClick: (e) => this.handleToggle(e, context.onToggle) }, props),
                React.createElement("button", { className: styles$H.navLink, id: srText ? null : this.id, onClick: onClick, onMouseDown: e => e.preventDefault(), "aria-expanded": expandedState },
                    title,
                    React.createElement("span", { className: css(styles$H.navToggle) },
                        React.createElement("span", { className: css(styles$H.navToggleIcon) },
                            React.createElement(AngleRightIcon, { "aria-hidden": "true" })))),
                React.createElement("section", { className: css(styles$H.navSubnav), "aria-labelledby": this.id, hidden: expandedState ? null : true },
                    srText && (React.createElement("h2", { className: css(a11yStyles.screenReader), id: this.id }, srText)),
                    React.createElement("ul", { className: css(styles$H.navList) }, children))))));
        }
    }
    NavExpandable.displayName = 'NavExpandable';
    NavExpandable.defaultProps = {
        srText: '',
        isExpanded: false,
        children: '',
        className: '',
        groupId: null,
        isActive: false,
        id: ''
    };

    var notificationBadge = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "iconAttentionBell": "pf-icon-attention-bell",
      "iconBell": "pf-icon-bell",
      "modifiers": {
        "read": "pf-m-read",
        "unread": "pf-m-unread",
        "attention": "pf-m-attention"
      },
      "notificationBadge": "pf-c-notification-badge",
      "notificationBadgeCount": "pf-c-notification-badge__count"
    };
    });

    var styles$I = unwrapExports(notificationBadge);

    const AttentionBellIconConfig = {
      name: 'AttentionBellIcon',
      height: 1024,
      width: 896,
      svgPath: 'M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z M475,192 L421,192 C400.565464,192 384,208.565464 384,229 L384,539 C384,559.434536 400.565464,576 421,576 L475,576 C495.434536,576 512,559.434536 512,539 L512,229 C512,208.565464 495.434536,192 475,192 Z M448,640 C412.653776,640 384,668.653776 384,704 C384,739.346224 412.653776,768 448,768 C483.346224,768 512,739.346224 512,704 C512,668.653776 483.346224,640 448,640 Z',
      yOffset: 0,
      xOffset: 0,
    };

    const AttentionBellIcon = createIcon(AttentionBellIconConfig);

    (function (NotificationBadgeVariant) {
        NotificationBadgeVariant["read"] = "read";
        NotificationBadgeVariant["unread"] = "unread";
        NotificationBadgeVariant["attention"] = "attention";
    })(exports.NotificationBadgeVariant || (exports.NotificationBadgeVariant = {}));
    const NotificationBadge = (_a) => {
        var { isRead, children, variant = isRead ? 'read' : 'unread', count = 0, attentionIcon = React.createElement(AttentionBellIcon, null), icon = React.createElement(BellIcon, null), className } = _a, props = __rest(_a, ["isRead", "children", "variant", "count", "attentionIcon", "icon", "className"]);
        return (React.createElement(Button, Object.assign({ variant: exports.ButtonVariant.plain, className: className }, props),
            React.createElement("span", { className: css(styles$I.notificationBadge, styles$I.modifiers[variant]) },
                children !== undefined ? children : variant === exports.NotificationBadgeVariant.attention ? attentionIcon : icon,
                count > 0 && React.createElement("span", { className: css(styles$I.notificationBadgeCount) }, count))));
    };
    NotificationBadge.displayName = 'NotificationBadge';

    var notificationDrawer = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "modifiers": {
        "read": "pf-m-read",
        "info": "pf-m-info",
        "warning": "pf-m-warning",
        "danger": "pf-m-danger",
        "success": "pf-m-success",
        "default": "pf-m-default",
        "hoverable": "pf-m-hoverable",
        "truncate": "pf-m-truncate",
        "expanded": "pf-m-expanded"
      },
      "notificationDrawer": "pf-c-notification-drawer",
      "notificationDrawerBody": "pf-c-notification-drawer__body",
      "notificationDrawerGroup": "pf-c-notification-drawer__group",
      "notificationDrawerGroupList": "pf-c-notification-drawer__group-list",
      "notificationDrawerGroupToggle": "pf-c-notification-drawer__group-toggle",
      "notificationDrawerGroupToggleCount": "pf-c-notification-drawer__group-toggle-count",
      "notificationDrawerGroupToggleIcon": "pf-c-notification-drawer__group-toggle-icon",
      "notificationDrawerGroupToggleTitle": "pf-c-notification-drawer__group-toggle-title",
      "notificationDrawerHeader": "pf-c-notification-drawer__header",
      "notificationDrawerHeaderAction": "pf-c-notification-drawer__header-action",
      "notificationDrawerHeaderStatus": "pf-c-notification-drawer__header-status",
      "notificationDrawerHeaderTitle": "pf-c-notification-drawer__header-title",
      "notificationDrawerListItem": "pf-c-notification-drawer__list-item",
      "notificationDrawerListItemAction": "pf-c-notification-drawer__list-item-action",
      "notificationDrawerListItemDescription": "pf-c-notification-drawer__list-item-description",
      "notificationDrawerListItemHeader": "pf-c-notification-drawer__list-item-header",
      "notificationDrawerListItemHeaderIcon": "pf-c-notification-drawer__list-item-header-icon",
      "notificationDrawerListItemHeaderTitle": "pf-c-notification-drawer__list-item-header-title",
      "notificationDrawerListItemTimestamp": "pf-c-notification-drawer__list-item-timestamp"
    };
    });

    var styles$J = unwrapExports(notificationDrawer);

    const NotificationDrawer = (_a) => {
        var { children, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("div", Object.assign({}, props, { className: css(styles$J.notificationDrawer, className) }), children));
    };
    NotificationDrawer.displayName = 'NotificationDrawer';

    const NotificationDrawerBody = (_a) => {
        var { children, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("div", Object.assign({}, props, { className: css(styles$J.notificationDrawerBody, className) }), children));
    };
    NotificationDrawerBody.displayName = 'NotificationDrawerBody';

    const c_notification_drawer__group_toggle_title_max_lines = {
      "name": "--pf-c-notification-drawer__group-toggle-title--max-lines",
      "value": "1",
      "var": "var(--pf-c-notification-drawer__group-toggle-title--max-lines)"
    };

    const NotificationDrawerGroup = (_a) => {
        var { children, className = '', count, isExpanded, isRead = false, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onExpand = (event, expanded) => undefined, title, truncateTitle = 0, tooltipPosition } = _a, props = __rest(_a, ["children", "className", "count", "isExpanded", "isRead", "onExpand", "title", "truncateTitle", "tooltipPosition"]);
        const titleRef = React.useRef(null);
        const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
        React.useEffect(() => {
            // Title will always truncate on overflow regardless of truncateTitle prop
            const showTooltip = titleRef.current && titleRef.current.offsetHeight < titleRef.current.scrollHeight;
            if (isTooltipVisible !== showTooltip) {
                setIsTooltipVisible(showTooltip);
            }
            if (!titleRef.current || !truncateTitle) {
                return;
            }
            titleRef.current.style.setProperty(c_notification_drawer__group_toggle_title_max_lines.name, truncateTitle.toString());
        }, [titleRef, truncateTitle, isTooltipVisible]);
        const Title = (React.createElement("div", Object.assign({}, (isTooltipVisible && { tabIndex: 0 }), { ref: titleRef, className: css(styles$J.notificationDrawerGroupToggleTitle) }), title));
        return (React.createElement("section", Object.assign({}, props, { className: css(styles$J.notificationDrawerGroup, isExpanded && styles$J.modifiers.expanded, className) }),
            React.createElement("h1", null,
                React.createElement("button", { className: css(styles$J.notificationDrawerGroupToggle), "aria-expanded": isExpanded, onClick: e => onExpand(e, !isExpanded), onKeyDown: e => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            onExpand(e, !isExpanded);
                        }
                    } },
                    isTooltipVisible ? (React.createElement(Tooltip, { content: title, position: tooltipPosition }, Title)) : (Title),
                    React.createElement("div", { className: css(styles$J.notificationDrawerGroupToggleCount) },
                        React.createElement(Badge, { isRead: isRead }, count)),
                    React.createElement("span", { className: "pf-c-notification-drawer__group-toggle-icon" },
                        React.createElement(AngleRightIcon, null)))),
            children));
    };
    NotificationDrawerGroup.displayName = 'NotificationDrawerGroup';

    const NotificationDrawerGroupList = (_a) => {
        var { children, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("div", Object.assign({}, props, { className: css(styles$J.notificationDrawerGroupList, className) }), children));
    };
    NotificationDrawerGroupList.displayName = 'NotificationDrawerGroupList';

    const TextContent = (_a) => {
        var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("div", Object.assign({}, props, { className: css(styles$3.content, className) }), children));
    };
    TextContent.displayName = 'TextContent';

    (function (TextVariants) {
        TextVariants["h1"] = "h1";
        TextVariants["h2"] = "h2";
        TextVariants["h3"] = "h3";
        TextVariants["h4"] = "h4";
        TextVariants["h5"] = "h5";
        TextVariants["h6"] = "h6";
        TextVariants["p"] = "p";
        TextVariants["a"] = "a";
        TextVariants["small"] = "small";
        TextVariants["blockquote"] = "blockquote";
        TextVariants["pre"] = "pre";
    })(exports.TextVariants || (exports.TextVariants = {}));
    const Text = (_a) => {
        var { children = null, className = '', component = exports.TextVariants.p } = _a, props = __rest(_a, ["children", "className", "component"]);
        const Component = component;
        return (React.createElement(Component, Object.assign({}, props, { "data-pf-content": true, className: css(className) }), children));
    };
    Text.displayName = 'Text';

    (function (TextListVariants) {
        TextListVariants["ul"] = "ul";
        TextListVariants["ol"] = "ol";
        TextListVariants["dl"] = "dl";
    })(exports.TextListVariants || (exports.TextListVariants = {}));
    const TextList = (_a) => {
        var { children = null, className = '', component = exports.TextListVariants.ul } = _a, props = __rest(_a, ["children", "className", "component"]);
        const Component = component;
        return (React.createElement(Component, Object.assign({}, props, { "data-pf-content": true, className: css(className) }), children));
    };
    TextList.displayName = 'TextList';

    (function (TextListItemVariants) {
        TextListItemVariants["li"] = "li";
        TextListItemVariants["dt"] = "dt";
        TextListItemVariants["dd"] = "dd";
    })(exports.TextListItemVariants || (exports.TextListItemVariants = {}));
    const TextListItem = (_a) => {
        var { children = null, className = '', component = exports.TextListItemVariants.li } = _a, props = __rest(_a, ["children", "className", "component"]);
        const Component = component;
        return (React.createElement(Component, Object.assign({}, props, { "data-pf-content": true, className: css(className) }), children));
    };
    TextListItem.displayName = 'TextListItem';

    const NotificationDrawerHeader = (_a) => {
        var { children, className = '', count, closeButtonAriaLabel = 'Close', customText, onClose, title = 'Notifications', unreadText = 'unread' } = _a, props = __rest(_a, ["children", "className", "count", "closeButtonAriaLabel", "customText", "onClose", "title", "unreadText"]);
        return (React.createElement("div", Object.assign({}, props, { className: css(styles$J.notificationDrawerHeader, className) }),
            React.createElement(Text, { component: exports.TextVariants.h1, className: css(styles$J.notificationDrawerHeaderTitle) }, title),
            (customText !== undefined || count !== undefined) && (React.createElement("span", { className: css(styles$J.notificationDrawerHeaderStatus) }, customText || `${count} ${unreadText}`)),
            children && (React.createElement("div", { className: css(styles$J.notificationDrawerHeaderAction) },
                children,
                onClose && (React.createElement("div", null,
                    React.createElement(Button, { variant: exports.ButtonVariant.plain, "aria-label": closeButtonAriaLabel, onClick: onClose },
                        React.createElement(TimesIcon, { "aria-hidden": "true" }))))))));
    };
    NotificationDrawerHeader.displayName = 'NotificationDrawerHeader';

    const NotificationDrawerList = (_a) => {
        var { children, className = '', isHidden = false } = _a, props = __rest(_a, ["children", "className", "isHidden"]);
        return (React.createElement("ul", Object.assign({}, props, { className: css('pf-c-notification-drawer__list', className), hidden: isHidden }), children));
    };
    NotificationDrawerList.displayName = 'NotificationDrawerList';

    const NotificationDrawerListItem = (_a) => {
        var { children = null, className = '', isHoverable = true, isRead = false, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onClick = (event) => undefined, tabIndex = 0, variant = 'default' } = _a, props = __rest(_a, ["children", "className", "isHoverable", "isRead", "onClick", "tabIndex", "variant"]);
        const onKeyDown = (event) => {
            // Accessibility function. Click on the list item when pressing Enter or Space on it.
            if (event.key === 'Enter' || event.key === ' ') {
                event.target.click();
            }
        };
        return (React.createElement("li", Object.assign({}, props, { className: css(styles$J.notificationDrawerListItem, isHoverable && styles$J.modifiers.hoverable, styles$J.modifiers[variant], isRead && styles$J.modifiers.read, className), tabIndex: tabIndex, onClick: e => onClick(e), onKeyDown: onKeyDown }), children));
    };
    NotificationDrawerListItem.displayName = 'NotificationDrawerListItem';

    const NotificationDrawerListItemBody = (_a) => {
        var { children, className = '', timestamp } = _a, props = __rest(_a, ["children", "className", "timestamp"]);
        return (React.createElement(React.Fragment, null,
            React.createElement("div", Object.assign({}, props, { className: css(styles$J.notificationDrawerListItemDescription, className) }), children),
            timestamp && React.createElement("div", { className: css(styles$J.notificationDrawerListItemTimestamp, className) }, timestamp)));
    };
    NotificationDrawerListItemBody.displayName = 'NotificationDrawerListItemBody';

    const c_notification_drawer__list_item_header_title_max_lines = {
      "name": "--pf-c-notification-drawer__list-item-header-title--max-lines",
      "value": "1",
      "var": "var(--pf-c-notification-drawer__list-item-header-title--max-lines)"
    };

    const variantIcons$1 = {
        success: CheckCircleIcon,
        danger: ExclamationCircleIcon,
        warning: ExclamationTriangleIcon,
        info: InfoCircleIcon,
        default: BellIcon
    };
    const NotificationDrawerListItemHeader = (_a) => {
        var { children, className = '', icon = null, srTitle, title, variant = 'default', truncateTitle = 0, tooltipPosition } = _a, props = __rest(_a, ["children", "className", "icon", "srTitle", "title", "variant", "truncateTitle", "tooltipPosition"]);
        const titleRef = React.useRef(null);
        const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
        React.useEffect(() => {
            if (!titleRef.current || !truncateTitle) {
                return;
            }
            titleRef.current.style.setProperty(c_notification_drawer__list_item_header_title_max_lines.name, truncateTitle.toString());
            const showTooltip = titleRef.current && titleRef.current.offsetHeight < titleRef.current.scrollHeight;
            if (isTooltipVisible !== showTooltip) {
                setIsTooltipVisible(showTooltip);
            }
        }, [titleRef, truncateTitle, isTooltipVisible]);
        const Icon = variantIcons$1[variant];
        const Title = (React.createElement("h2", Object.assign({}, (isTooltipVisible && { tabIndex: 0 }), { ref: titleRef, className: css(styles$J.notificationDrawerListItemHeaderTitle, truncateTitle && styles$J.modifiers.truncate) }),
            srTitle && React.createElement("span", { className: css(a11yStyles.screenReader) }, srTitle),
            title));
        return (React.createElement(React.Fragment, null,
            React.createElement("div", Object.assign({}, props, { className: css(styles$J.notificationDrawerListItemHeader, className) }),
                React.createElement("span", { className: css(styles$J.notificationDrawerListItemHeaderIcon) }, icon ? icon : React.createElement(Icon, null)),
                isTooltipVisible ? (React.createElement(Tooltip, { content: title, position: tooltipPosition }, Title)) : (Title)),
            children && React.createElement("div", { className: css(styles$J.notificationDrawerListItemAction) }, children)));
    };
    NotificationDrawerListItemHeader.displayName = 'NotificationDrawerListItemHeader';

    var optionsMenu = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "divider": "pf-c-divider",
      "modifiers": {
        "plain": "pf-m-plain",
        "text": "pf-m-text",
        "active": "pf-m-active",
        "expanded": "pf-m-expanded",
        "disabled": "pf-m-disabled",
        "top": "pf-m-top",
        "alignRight": "pf-m-align-right"
      },
      "optionsMenu": "pf-c-options-menu",
      "optionsMenuGroup": "pf-c-options-menu__group",
      "optionsMenuGroupTitle": "pf-c-options-menu__group-title",
      "optionsMenuMenu": "pf-c-options-menu__menu",
      "optionsMenuMenuItem": "pf-c-options-menu__menu-item",
      "optionsMenuMenuItemIcon": "pf-c-options-menu__menu-item-icon",
      "optionsMenuToggle": "pf-c-options-menu__toggle",
      "optionsMenuToggleButton": "pf-c-options-menu__toggle-button",
      "optionsMenuToggleButtonIcon": "pf-c-options-menu__toggle-button-icon",
      "optionsMenuToggleIcon": "pf-c-options-menu__toggle-icon",
      "optionsMenuToggleText": "pf-c-options-menu__toggle-text"
    };
    });

    var styles$K = unwrapExports(optionsMenu);

    (function (OptionsMenuPosition) {
        OptionsMenuPosition["right"] = "right";
        OptionsMenuPosition["left"] = "left";
    })(exports.OptionsMenuPosition || (exports.OptionsMenuPosition = {}));
    (function (OptionsMenuDirection) {
        OptionsMenuDirection["up"] = "up";
        OptionsMenuDirection["down"] = "down";
    })(exports.OptionsMenuDirection || (exports.OptionsMenuDirection = {}));
    const OptionsMenu = (_a) => {
        var { className = '', menuItems, toggle, isText = false, isGrouped = false, id, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ref, menuAppendTo = 'inline', ouiaId, ouiaSafe = true } = _a, props = __rest(_a, ["className", "menuItems", "toggle", "isText", "isGrouped", "id", "ref", "menuAppendTo", "ouiaId", "ouiaSafe"]);
        return (React.createElement(DropdownContext.Provider, { value: {
                id,
                onSelect: () => undefined,
                toggleIndicatorClass: styles$K.optionsMenuToggleIcon,
                toggleTextClass: styles$K.optionsMenuToggleText,
                menuClass: styles$K.optionsMenuMenu,
                itemClass: styles$K.optionsMenuMenuItem,
                toggleClass: isText ? styles$K.optionsMenuToggleButton : styles$K.optionsMenuToggle,
                baseClass: styles$K.optionsMenu,
                disabledClass: styles$K.modifiers.disabled,
                menuComponent: isGrouped ? 'div' : 'ul',
                baseComponent: 'div',
                ouiaId: useOUIAId(OptionsMenu.displayName, ouiaId),
                ouiaSafe,
                ouiaComponentType: OptionsMenu.displayName
            } },
            React.createElement(DropdownWithContext, Object.assign({}, props, { id: id, dropdownItems: menuItems, className: className, isGrouped: isGrouped, toggle: toggle, menuAppendTo: menuAppendTo }))));
    };
    OptionsMenu.displayName = 'OptionsMenu';

    const OptionsMenuToggle = (_a) => {
        var { isPlain = false, isDisabled = false, isOpen = false, parentId = '', toggleTemplate = React.createElement(React.Fragment, null), hideCaret = false, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isActive = false, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isSplitButton = false, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        type, 'aria-label': ariaLabel = 'Options menu' } = _a, props = __rest(_a, ["isPlain", "isDisabled", "isOpen", "parentId", "toggleTemplate", "hideCaret", "isActive", "isSplitButton", "type", 'aria-label']);
        return (React.createElement(DropdownContext.Consumer, null, ({ id: contextId }) => (React.createElement(DropdownToggle, Object.assign({}, ((isPlain || hideCaret) && { toggleIndicator: null }), props, { isPlain: isPlain, isOpen: isOpen, isDisabled: isDisabled, isActive: isActive, id: parentId ? `${parentId}-toggle` : `${contextId}-toggle`, "aria-haspopup": "listbox", "aria-label": ariaLabel, "aria-expanded": isOpen }, (toggleTemplate ? { children: toggleTemplate } : {}))))));
    };
    OptionsMenuToggle.displayName = 'OptionsMenuToggle';

    const OptionsMenuItemGroup = (_a) => {
        var { className = '', 'aria-label': ariaLabel = '', groupTitle = '', children = null, hasSeparator = false } = _a, props = __rest(_a, ["className", 'aria-label', "groupTitle", "children", "hasSeparator"]);
        return (React.createElement("section", Object.assign({}, props, { className: css(styles$K.optionsMenuGroup) }),
            groupTitle && React.createElement("h1", { className: css(styles$K.optionsMenuGroupTitle) }, groupTitle),
            React.createElement("ul", { className: className, "aria-label": ariaLabel },
                children,
                hasSeparator && React.createElement(Divider, { component: "li", role: "separator" }))));
    };
    OptionsMenuItemGroup.displayName = 'OptionsMenuItemGroup';

    const OptionsMenuItem = (_a) => {
        var { children = null, isSelected = false, onSelect = () => null, id = '', isDisabled } = _a, props = __rest(_a, ["children", "isSelected", "onSelect", "id", "isDisabled"]);
        return (React.createElement(DropdownItem, Object.assign({ id: id, component: "button", isDisabled: isDisabled, onClick: (event) => onSelect(event) }, (isDisabled && { 'aria-disabled': true }), props),
            children,
            isSelected && (React.createElement("span", { className: css(styles$K.optionsMenuMenuItemIcon) },
                React.createElement(CheckIcon, { "aria-hidden": isSelected })))));
    };
    OptionsMenuItem.displayName = 'OptionsMenuItem';

    const OptionsMenuSeparator = (_a) => {
        var { component = 'li' } = _a, props = __rest(_a, ["component"]);
        return React.createElement(Divider, Object.assign({ component: component }, props));
    };
    OptionsMenuSeparator.displayName = 'OptionsMenuSeparator';

    const OptionsMenuToggleWithText = (_a) => {
        var { parentId = '', toggleText, toggleTextClassName = '', toggleButtonContents, toggleButtonContentsClassName = '', onToggle = () => null, isOpen = false, isPlain = false, isDisabled = false, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        isActive = false, 'aria-haspopup': ariaHasPopup, parentRef, onEnter, 
        /* eslint-enable @typescript-eslint/no-unused-vars */
        'aria-label': ariaLabel = 'Options menu' } = _a, props = __rest(_a, ["parentId", "toggleText", "toggleTextClassName", "toggleButtonContents", "toggleButtonContentsClassName", "onToggle", "isOpen", "isPlain", "isDisabled", "isActive", 'aria-haspopup', "parentRef", "onEnter", 'aria-label']);
        const buttonRef = React.useRef();
        React.useEffect(() => {
            document.addEventListener('mousedown', onDocClick);
            document.addEventListener('touchstart', onDocClick);
            document.addEventListener('keydown', onEscPress);
            return () => {
                document.removeEventListener('mousedown', onDocClick);
                document.removeEventListener('touchstart', onDocClick);
                document.removeEventListener('keydown', onEscPress);
            };
        });
        const onDocClick = (event) => {
            if (isOpen && parentRef && parentRef.current && !parentRef.current.contains(event.target)) {
                onToggle(false);
                buttonRef.current.focus();
            }
        };
        const onKeyDown = (event) => {
            if (event.key === 'Tab' && !isOpen) {
                return;
            }
            event.preventDefault();
            if ((event.key === 'Enter' || event.key === ' ') && isOpen) {
                onToggle(!isOpen);
            }
            else if ((event.key === 'Enter' || event.key === ' ') && !isOpen) {
                onToggle(!isOpen);
                onEnter(event);
            }
        };
        const onEscPress = (event) => {
            const keyCode = event.keyCode || event.which;
            if (isOpen &&
                (keyCode === KEY_CODES.ESCAPE_KEY || event.key === 'Tab') &&
                parentRef &&
                parentRef.current &&
                parentRef.current.contains(event.target)) {
                onToggle(false);
                buttonRef.current.focus();
            }
        };
        return (React.createElement("div", Object.assign({ className: css(styles$K.optionsMenuToggle, styles$K.modifiers.text, isPlain && styles$K.modifiers.plain, isDisabled && styles$K.modifiers.disabled, isActive && styles$K.modifiers.active) }, props),
            React.createElement("span", { className: css(styles$K.optionsMenuToggleText, toggleTextClassName) }, toggleText),
            React.createElement("button", { className: css(styles$K.optionsMenuToggleButton, toggleButtonContentsClassName), id: `${parentId}-toggle`, "aria-haspopup": "listbox", "aria-label": ariaLabel, "aria-expanded": isOpen, ref: buttonRef, disabled: isDisabled, onClick: () => onToggle(!isOpen), onKeyDown: onKeyDown },
                React.createElement("span", { className: css(styles$K.optionsMenuToggleButtonIcon) }, toggleButtonContents))));
    };
    OptionsMenuToggleWithText.displayName = 'OptionsMenuToggleWithText';

    var overflowMenu = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "divider": "pf-c-divider",
      "modifiers": {
        "buttonGroup": "pf-m-button-group",
        "iconButtonGroup": "pf-m-icon-button-group",
        "vertical": "pf-m-vertical"
      },
      "overflowMenu": "pf-c-overflow-menu",
      "overflowMenuContent": "pf-c-overflow-menu__content",
      "overflowMenuControl": "pf-c-overflow-menu__control",
      "overflowMenuGroup": "pf-c-overflow-menu__group",
      "overflowMenuItem": "pf-c-overflow-menu__item"
    };
    });

    var styles$L = unwrapExports(overflowMenu);

    const OverflowMenuContext = React.createContext({
        isBelowBreakpoint: false
    });

    const global_breakpoint_md = {
      "name": "--pf-global--breakpoint--md",
      "value": "768px",
      "var": "var(--pf-global--breakpoint--md)"
    };

    const global_breakpoint_lg = {
      "name": "--pf-global--breakpoint--lg",
      "value": "992px",
      "var": "var(--pf-global--breakpoint--lg)"
    };

    const global_breakpoint_xl = {
      "name": "--pf-global--breakpoint--xl",
      "value": "1200px",
      "var": "var(--pf-global--breakpoint--xl)"
    };

    const global_breakpoint_2xl = {
      "name": "--pf-global--breakpoint--2xl",
      "value": "1450px",
      "var": "var(--pf-global--breakpoint--2xl)"
    };

    const breakpoints = {
        md: global_breakpoint_md,
        lg: global_breakpoint_lg,
        xl: global_breakpoint_xl,
        '2xl': global_breakpoint_2xl
    };
    class OverflowMenu extends React.Component {
        constructor(props) {
            super(props);
            this.handleResize = () => {
                const breakpointPx = breakpoints[this.props.breakpoint];
                if (!breakpointPx) {
                    // eslint-disable-next-line no-console
                    console.error('OverflowMenu will not be visible without a valid breakpoint.');
                    return;
                }
                const breakpointWidth = Number(breakpointPx.value.replace('px', ''));
                const isBelowBreakpoint = window.innerWidth < breakpointWidth;
                this.setState({ isBelowBreakpoint });
            };
            this.state = {
                isBelowBreakpoint: false
            };
        }
        componentDidMount() {
            this.handleResize();
            window.addEventListener('resize', debounce(this.handleResize, 250));
        }
        componentWillUnmount() {
            window.removeEventListener('resize', debounce(this.handleResize, 250));
        }
        render() {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _a = this.props, { className, breakpoint, children } = _a, props = __rest(_a, ["className", "breakpoint", "children"]);
            return (React.createElement("div", Object.assign({}, props, { className: css(styles$L.overflowMenu, className) }),
                React.createElement(OverflowMenuContext.Provider, { value: { isBelowBreakpoint: this.state.isBelowBreakpoint } }, children)));
        }
    }
    OverflowMenu.displayName = 'OverflowMenu';
    OverflowMenu.contextType = OverflowMenuContext;

    const OverflowMenuControl = ({ className, children, hasAdditionalOptions }) => (React.createElement(OverflowMenuContext.Consumer, null, value => (value.isBelowBreakpoint || hasAdditionalOptions) && (React.createElement("div", { className: css(styles$L.overflowMenuControl, className) },
        " ",
        children,
        " "))));
    OverflowMenuControl.displayName = 'OverflowMenuControl';

    const OverflowMenuContent = ({ className, children, isPersistent }) => (React.createElement(OverflowMenuContext.Consumer, null, value => (!value.isBelowBreakpoint || isPersistent) && (React.createElement("div", { className: css(styles$L.overflowMenuContent, className) }, children))));
    OverflowMenuContent.displayName = 'OverflowMenuContent';

    const OverflowMenuGroup = ({ className, children, isPersistent = false, groupType }) => (React.createElement(OverflowMenuContext.Consumer, null, value => (isPersistent || !value.isBelowBreakpoint) && (React.createElement("div", { className: css(styles$L.overflowMenuGroup, groupType === 'button' && styles$L.modifiers.buttonGroup, groupType === 'icon' && styles$L.modifiers.iconButtonGroup, className) }, children))));
    OverflowMenuGroup.displayName = 'OverflowMenuGroup';

    const OverflowMenuItem = ({ className, children, isPersistent = false }) => (React.createElement(OverflowMenuContext.Consumer, null, value => (isPersistent || !value.isBelowBreakpoint) && (React.createElement("div", { className: css(styles$L.overflowMenuItem, className) },
        " ",
        children,
        " "))));
    OverflowMenuItem.displayName = 'OverflowMenuItem';

    const OverflowMenuDropdownItem = (_a) => {
        var { children, isShared = false, index } = _a, additionalProps = __rest(_a, ["children", "isShared", "index"]);
        return (React.createElement(OverflowMenuContext.Consumer, null, value => (!isShared || value.isBelowBreakpoint) && (React.createElement(DropdownItem, Object.assign({ component: "button", index: index }, additionalProps), children))));
    };
    OverflowMenuDropdownItem.displayName = 'OverflowMenuDropdownItem';

    var page = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "avatar": "pf-c-avatar",
      "brand": "pf-c-brand",
      "button": "pf-c-button",
      "card": "pf-c-card",
      "drawer": "pf-c-drawer",
      "modifiers": {
        "light": "pf-m-light",
        "hidden": "pf-m-hidden",
        "hiddenOnSm": "pf-m-hidden-on-sm",
        "visibleOnSm": "pf-m-visible-on-sm",
        "hiddenOnMd": "pf-m-hidden-on-md",
        "visibleOnMd": "pf-m-visible-on-md",
        "hiddenOnLg": "pf-m-hidden-on-lg",
        "visibleOnLg": "pf-m-visible-on-lg",
        "hiddenOnXl": "pf-m-hidden-on-xl",
        "visibleOnXl": "pf-m-visible-on-xl",
        "hiddenOn_2xl": "pf-m-hidden-on-2xl",
        "visibleOn_2xl": "pf-m-visible-on-2xl",
        "read": "pf-m-read",
        "selected": "pf-m-selected",
        "unread": "pf-m-unread",
        "attention": "pf-m-attention",
        "expanded": "pf-m-expanded",
        "collapsed": "pf-m-collapsed",
        "limitWidth": "pf-m-limit-width",
        "stickyTop": "pf-m-sticky-top",
        "stickyBottom": "pf-m-sticky-bottom",
        "overflowScroll": "pf-m-overflow-scroll",
        "shadowBottom": "pf-m-shadow-bottom",
        "shadowTop": "pf-m-shadow-top",
        "fill": "pf-m-fill",
        "noFill": "pf-m-no-fill",
        "dark_100": "pf-m-dark-100",
        "dark_200": "pf-m-dark-200",
        "padding": "pf-m-padding",
        "noPadding": "pf-m-no-padding",
        "paddingOnSm": "pf-m-padding-on-sm",
        "noPaddingOnSm": "pf-m-no-padding-on-sm",
        "paddingOnMd": "pf-m-padding-on-md",
        "noPaddingOnMd": "pf-m-no-padding-on-md",
        "paddingOnLg": "pf-m-padding-on-lg",
        "noPaddingOnLg": "pf-m-no-padding-on-lg",
        "paddingOnXl": "pf-m-padding-on-xl",
        "noPaddingOnXl": "pf-m-no-padding-on-xl",
        "paddingOn_2xl": "pf-m-padding-on-2xl",
        "noPaddingOn_2xl": "pf-m-no-padding-on-2xl"
      },
      "nav": "pf-c-nav",
      "notificationBadge": "pf-c-notification-badge",
      "page": "pf-c-page",
      "pageDrawer": "pf-c-page__drawer",
      "pageHeader": "pf-c-page__header",
      "pageHeaderBrand": "pf-c-page__header-brand",
      "pageHeaderBrandLink": "pf-c-page__header-brand-link",
      "pageHeaderBrandToggle": "pf-c-page__header-brand-toggle",
      "pageHeaderNav": "pf-c-page__header-nav",
      "pageHeaderTools": "pf-c-page__header-tools",
      "pageHeaderToolsGroup": "pf-c-page__header-tools-group",
      "pageHeaderToolsItem": "pf-c-page__header-tools-item",
      "pageMain": "pf-c-page__main",
      "pageMainBody": "pf-c-page__main-body",
      "pageMainBreadcrumb": "pf-c-page__main-breadcrumb",
      "pageMainDrawer": "pf-c-page__main-drawer",
      "pageMainGroup": "pf-c-page__main-group",
      "pageMainNav": "pf-c-page__main-nav",
      "pageMainSection": "pf-c-page__main-section",
      "pageMainWizard": "pf-c-page__main-wizard",
      "pageSidebar": "pf-c-page__sidebar",
      "pageSidebarBody": "pf-c-page__sidebar-body"
    };
    });

    var styles$M = unwrapExports(page);

    const PageGroup = (_a) => {
        var { className = '', children, sticky, hasShadowTop = false, hasShadowBottom = false, hasOverflowScroll = false } = _a, props = __rest(_a, ["className", "children", "sticky", "hasShadowTop", "hasShadowBottom", "hasOverflowScroll"]);
        return (React.createElement("div", Object.assign({}, props, { className: css(styles$M.pageMainGroup, sticky === 'top' && styles$M.modifiers.stickyTop, sticky === 'bottom' && styles$M.modifiers.stickyBottom, hasShadowTop && styles$M.modifiers.shadowTop, hasShadowBottom && styles$M.modifiers.shadowBottom, hasOverflowScroll && styles$M.modifiers.overflowScroll, className) }), children));
    };
    PageGroup.displayName = 'PageGroup';

    (function (PageLayouts) {
        PageLayouts["vertical"] = "vertical";
        PageLayouts["horizontal"] = "horizontal";
    })(exports.PageLayouts || (exports.PageLayouts = {}));
    const PageContext = React.createContext({
        isManagedSidebar: false,
        isNavOpen: false,
        onNavToggle: () => null
    });
    const PageContextProvider = PageContext.Provider;
    const PageContextConsumer = PageContext.Consumer;
    class Page extends React.Component {
        constructor(props) {
            super(props);
            this.mainRef = React.createRef();
            this.isMobile = () => 
            // eslint-disable-next-line radix
            window.innerWidth < Number.parseInt(global_breakpoint_xl.value, 10);
            this.resize = () => {
                const { onPageResize } = this.props;
                const mobileView = this.isMobile();
                if (onPageResize) {
                    onPageResize({ mobileView, windowSize: window.innerWidth });
                }
                if (mobileView !== this.state.mobileView) {
                    this.setState({ mobileView });
                }
            };
            this.handleResize = debounce(this.resize, 250);
            this.handleMainClick = () => {
                if (this.isMobile() && this.state.mobileIsNavOpen && this.mainRef.current) {
                    this.setState({ mobileIsNavOpen: false });
                }
            };
            this.onNavToggleMobile = () => {
                this.setState(prevState => ({
                    mobileIsNavOpen: !prevState.mobileIsNavOpen
                }));
            };
            this.onNavToggleDesktop = () => {
                this.setState(prevState => ({
                    desktopIsNavOpen: !prevState.desktopIsNavOpen
                }));
            };
            const { isManagedSidebar, defaultManagedSidebarIsOpen } = props;
            const managedSidebarOpen = !isManagedSidebar ? true : defaultManagedSidebarIsOpen;
            this.state = {
                desktopIsNavOpen: managedSidebarOpen,
                mobileIsNavOpen: false,
                mobileView: false
            };
        }
        componentDidMount() {
            const { isManagedSidebar, onPageResize } = this.props;
            if (isManagedSidebar || onPageResize) {
                window.addEventListener('resize', this.handleResize);
                const currentRef = this.mainRef.current;
                if (currentRef) {
                    currentRef.addEventListener('mousedown', this.handleMainClick);
                    currentRef.addEventListener('touchstart', this.handleMainClick);
                }
                // Initial check if should be shown
                this.resize();
            }
        }
        componentWillUnmount() {
            const { isManagedSidebar, onPageResize } = this.props;
            if (isManagedSidebar || onPageResize) {
                window.removeEventListener('resize', this.handleResize);
                const currentRef = this.mainRef.current;
                if (currentRef) {
                    currentRef.removeEventListener('mousedown', this.handleMainClick);
                    currentRef.removeEventListener('touchstart', this.handleMainClick);
                }
            }
        }
        render() {
            const _a = this.props, { breadcrumb, isBreadcrumbWidthLimited, className, children, header, sidebar, notificationDrawer, isNotificationDrawerExpanded, onNotificationDrawerExpand, isTertiaryNavWidthLimited, skipToContent, role, mainContainerId, isManagedSidebar, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            defaultManagedSidebarIsOpen, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onPageResize, mainAriaLabel, mainTabIndex, tertiaryNav, isTertiaryNavGrouped, isBreadcrumbGrouped, additionalGroupedContent, groupProps } = _a, rest = __rest(_a, ["breadcrumb", "isBreadcrumbWidthLimited", "className", "children", "header", "sidebar", "notificationDrawer", "isNotificationDrawerExpanded", "onNotificationDrawerExpand", "isTertiaryNavWidthLimited", "skipToContent", "role", "mainContainerId", "isManagedSidebar", "defaultManagedSidebarIsOpen", "onPageResize", "mainAriaLabel", "mainTabIndex", "tertiaryNav", "isTertiaryNavGrouped", "isBreadcrumbGrouped", "additionalGroupedContent", "groupProps"]);
            const { mobileView, mobileIsNavOpen, desktopIsNavOpen } = this.state;
            const context = {
                isManagedSidebar,
                onNavToggle: mobileView ? this.onNavToggleMobile : this.onNavToggleDesktop,
                isNavOpen: mobileView ? mobileIsNavOpen : desktopIsNavOpen
            };
            const nav = tertiaryNav ? (isTertiaryNavWidthLimited ? (React.createElement("div", { className: css(styles$M.pageMainNav, styles$M.modifiers.limitWidth) },
                React.createElement("div", { className: css(styles$M.pageMainBody) }, tertiaryNav))) : (React.createElement("div", { className: css(styles$M.pageMainNav) }, tertiaryNav))) : null;
            const crumb = breadcrumb ? (isBreadcrumbWidthLimited ? (React.createElement("section", { className: css(styles$M.pageMainBreadcrumb, styles$M.modifiers.limitWidth) },
                React.createElement("div", { className: css(styles$M.pageMainBody) }, breadcrumb))) : (React.createElement("section", { className: css(styles$M.pageMainBreadcrumb) }, breadcrumb))) : null;
            const isGrouped = isTertiaryNavGrouped || isBreadcrumbGrouped || additionalGroupedContent;
            const group = isGrouped ? (React.createElement(PageGroup, Object.assign({}, groupProps),
                isTertiaryNavGrouped && nav,
                isBreadcrumbGrouped && crumb,
                additionalGroupedContent)) : null;
            const main = (React.createElement("main", { ref: this.mainRef, role: role, id: mainContainerId, className: css(styles$M.pageMain), tabIndex: mainTabIndex, "aria-label": mainAriaLabel },
                group,
                !isTertiaryNavGrouped && nav,
                !isBreadcrumbGrouped && crumb,
                children));
            const panelContent = React.createElement(DrawerPanelContent, null, notificationDrawer);
            return (React.createElement(PageContextProvider, { value: context },
                React.createElement("div", Object.assign({}, rest, { className: css(styles$M.page, className) }),
                    skipToContent,
                    header,
                    sidebar,
                    notificationDrawer && (React.createElement("div", { className: css(styles$M.pageDrawer) },
                        React.createElement(Drawer, { isExpanded: isNotificationDrawerExpanded, onExpand: onNotificationDrawerExpand },
                            React.createElement(DrawerContent, { panelContent: panelContent },
                                React.createElement(DrawerContentBody, null, main))))),
                    !notificationDrawer && main)));
        }
    }
    Page.displayName = 'Page';
    Page.defaultProps = {
        isManagedSidebar: false,
        isBreadcrumbWidthLimited: false,
        defaultManagedSidebarIsOpen: true,
        onPageResize: () => null,
        mainTabIndex: -1,
        isNotificationDrawerExpanded: false,
        onNotificationDrawerExpand: () => null
    };

    const PageBreadcrumb = (_a) => {
        var { className = '', children, isWidthLimited, sticky, hasShadowTop = false, hasShadowBottom = false, hasOverflowScroll = false } = _a, props = __rest(_a, ["className", "children", "isWidthLimited", "sticky", "hasShadowTop", "hasShadowBottom", "hasOverflowScroll"]);
        return (React.createElement("section", Object.assign({ className: css(styles$M.pageMainBreadcrumb, isWidthLimited && styles$M.modifiers.limitWidth, sticky === 'top' && styles$M.modifiers.stickyTop, sticky === 'bottom' && styles$M.modifiers.stickyBottom, hasShadowTop && styles$M.modifiers.shadowTop, hasShadowBottom && styles$M.modifiers.shadowBottom, hasOverflowScroll && styles$M.modifiers.overflowScroll, className) }, props),
            isWidthLimited && React.createElement("div", { className: css(styles$M.pageMainBody) }, children),
            !isWidthLimited && children));
    };
    PageBreadcrumb.displayName = 'PageBreadcrumb';

    const BarsIconConfig = {
      name: 'BarsIcon',
      height: 512,
      width: 448,
      svgPath: 'M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z',
      yOffset: 0,
      xOffset: 0,
    };

    const BarsIcon = createIcon(BarsIconConfig);

    const PageHeader = (_a) => {
        var { className = '', logo = null, logoProps = null, logoComponent = 'a', headerTools = null, topNav = null, isNavOpen = true, isManagedSidebar: deprecatedIsManagedSidebar = undefined, role = undefined, showNavToggle = false, onNavToggle = () => undefined, 'aria-label': ariaLabel = 'Global navigation', 'aria-controls': ariaControls = null } = _a, props = __rest(_a, ["className", "logo", "logoProps", "logoComponent", "headerTools", "topNav", "isNavOpen", "isManagedSidebar", "role", "showNavToggle", "onNavToggle", 'aria-label', 'aria-controls']);
        const LogoComponent = logoComponent;
        if ([false, true].includes(deprecatedIsManagedSidebar)) {
            console.warn('isManagedSidebar is deprecated in the PageHeader component. To make the sidebar toggle uncontrolled, pass this prop in the Page component');
        }
        return (React.createElement(PageContextConsumer, null, ({ isManagedSidebar, onNavToggle: managedOnNavToggle, isNavOpen: managedIsNavOpen }) => {
            const navToggle = isManagedSidebar ? managedOnNavToggle : onNavToggle;
            const navOpen = isManagedSidebar ? managedIsNavOpen : isNavOpen;
            return (React.createElement("header", Object.assign({ role: role, className: css(styles$M.pageHeader, className) }, props),
                (showNavToggle || logo) && (React.createElement("div", { className: css(styles$M.pageHeaderBrand) },
                    showNavToggle && (React.createElement("div", { className: css(styles$M.pageHeaderBrandToggle) },
                        React.createElement(Button, { id: "nav-toggle", onClick: navToggle, "aria-label": ariaLabel, "aria-controls": ariaControls, "aria-expanded": navOpen ? 'true' : 'false', variant: exports.ButtonVariant.plain },
                            React.createElement(BarsIcon, null)))),
                    logo && (React.createElement(LogoComponent, Object.assign({ className: css(styles$M.pageHeaderBrandLink) }, logoProps), logo)))),
                topNav && React.createElement("div", { className: css(styles$M.pageHeaderNav) }, topNav),
                headerTools));
        }));
    };
    PageHeader.displayName = 'PageHeader';

    const PageSidebar = (_a) => {
        var { className = '', nav, isNavOpen = true, theme = 'dark' } = _a, props = __rest(_a, ["className", "nav", "isNavOpen", "theme"]);
        return (React.createElement(PageContextConsumer, null, ({ isManagedSidebar, isNavOpen: managedIsNavOpen }) => {
            const navOpen = isManagedSidebar ? managedIsNavOpen : isNavOpen;
            return (React.createElement("div", Object.assign({ id: "page-sidebar", className: css(styles$M.pageSidebar, theme === 'light' && styles$M.modifiers.light, navOpen && styles$M.modifiers.expanded, !navOpen && styles$M.modifiers.collapsed, className) }, props),
                React.createElement("div", { className: css(styles$M.pageSidebarBody) }, nav)));
        }));
    };
    PageSidebar.displayName = 'PageSidebar';

    (function (PageSectionVariants) {
        PageSectionVariants["default"] = "default";
        PageSectionVariants["light"] = "light";
        PageSectionVariants["dark"] = "dark";
        PageSectionVariants["darker"] = "darker";
    })(exports.PageSectionVariants || (exports.PageSectionVariants = {}));
    (function (PageSectionTypes) {
        PageSectionTypes["default"] = "default";
        PageSectionTypes["nav"] = "nav";
    })(exports.PageSectionTypes || (exports.PageSectionTypes = {}));
    const variantType = {
        [exports.PageSectionTypes.default]: styles$M.pageMainSection,
        [exports.PageSectionTypes.nav]: styles$M.pageMainNav
    };
    const variantStyle = {
        [exports.PageSectionVariants.default]: '',
        [exports.PageSectionVariants.light]: styles$M.modifiers.light,
        [exports.PageSectionVariants.dark]: styles$M.modifiers.dark_200,
        [exports.PageSectionVariants.darker]: styles$M.modifiers.dark_100
    };
    const PageSection = (_a) => {
        var { className = '', children, variant = 'default', type = 'default', padding, isFilled, isWidthLimited = false, sticky, hasShadowTop = false, hasShadowBottom = false, hasOverflowScroll = false } = _a, props = __rest(_a, ["className", "children", "variant", "type", "padding", "isFilled", "isWidthLimited", "sticky", "hasShadowTop", "hasShadowBottom", "hasOverflowScroll"]);
        return (React.createElement("section", Object.assign({}, props, { className: css(variantType[type], formatBreakpointMods(padding, styles$M), variantStyle[variant], isFilled === false && styles$M.modifiers.noFill, isFilled === true && styles$M.modifiers.fill, isWidthLimited && styles$M.modifiers.limitWidth, sticky === 'top' && styles$M.modifiers.stickyTop, sticky === 'bottom' && styles$M.modifiers.stickyBottom, hasShadowTop && styles$M.modifiers.shadowTop, hasShadowBottom && styles$M.modifiers.shadowBottom, hasOverflowScroll && styles$M.modifiers.overflowScroll, className) }),
            isWidthLimited && React.createElement("div", { className: css(styles$M.pageMainBody) }, children),
            !isWidthLimited && children));
    };
    PageSection.displayName = 'PageSection';

    const PageHeaderTools = (_a) => {
        var { children, className } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("div", Object.assign({ className: css(styles$M.pageHeaderTools, className) }, props), children));
    };
    PageHeaderTools.displayName = 'PageHeaderTools';

    const PageHeaderToolsGroup = (_a) => {
        var { children, className, visibility } = _a, props = __rest(_a, ["children", "className", "visibility"]);
        return (React.createElement("div", Object.assign({ className: css(styles$M.pageHeaderToolsGroup, formatBreakpointMods(visibility, styles$M), className) }, props), children));
    };
    PageHeaderToolsGroup.displayName = 'PageHeaderToolsGroup';

    const PageHeaderToolsItem = ({ children, id, className, visibility, isSelected }) => (React.createElement("div", { className: css(styles$M.pageHeaderToolsItem, isSelected && styles$M.modifiers.selected, formatBreakpointMods(visibility, styles$M), className), id: id }, children));
    PageHeaderToolsItem.displayName = 'PageHeaderToolsItem';

    const PageNavigation = (_a) => {
        var { className = '', children, isWidthLimited, sticky, hasShadowTop = false, hasShadowBottom = false, hasOverflowScroll = false } = _a, props = __rest(_a, ["className", "children", "isWidthLimited", "sticky", "hasShadowTop", "hasShadowBottom", "hasOverflowScroll"]);
        return (React.createElement("div", Object.assign({ className: css(styles$M.pageMainNav, isWidthLimited && styles$M.modifiers.limitWidth, sticky === 'top' && styles$M.modifiers.stickyTop, sticky === 'bottom' && styles$M.modifiers.stickyBottom, hasShadowTop && styles$M.modifiers.shadowTop, hasShadowBottom && styles$M.modifiers.shadowBottom, hasOverflowScroll && styles$M.modifiers.overflowScroll, className) }, props),
            isWidthLimited && React.createElement("div", { className: css(styles$M.pageMainBody) }, children),
            !isWidthLimited && children));
    };
    PageNavigation.displayName = 'PageNavigation';

    const ToggleTemplate = ({ firstIndex = 0, lastIndex = 0, itemCount = 0, itemsTitle = 'items' }) => (React.createElement(React.Fragment, null,
        React.createElement("b", null,
            firstIndex,
            " - ",
            lastIndex),
        ' ',
        "of ",
        React.createElement("b", null, itemCount),
        " ",
        itemsTitle));
    ToggleTemplate.displayName = 'ToggleTemplate';

    var pagination = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "button": "pf-c-button",
      "formControl": "pf-c-form-control",
      "modifiers": {
        "bottom": "pf-m-bottom",
        "static": "pf-m-static",
        "first": "pf-m-first",
        "last": "pf-m-last",
        "sticky": "pf-m-sticky",
        "compact": "pf-m-compact",
        "displaySummary": "pf-m-display-summary",
        "displayFull": "pf-m-display-full",
        "displaySummaryOnSm": "pf-m-display-summary-on-sm",
        "displayFullOnSm": "pf-m-display-full-on-sm",
        "displaySummaryOnMd": "pf-m-display-summary-on-md",
        "displayFullOnMd": "pf-m-display-full-on-md",
        "displaySummaryOnLg": "pf-m-display-summary-on-lg",
        "displayFullOnLg": "pf-m-display-full-on-lg",
        "displaySummaryOnXl": "pf-m-display-summary-on-xl",
        "displayFullOnXl": "pf-m-display-full-on-xl",
        "displaySummaryOn_2xl": "pf-m-display-summary-on-2xl",
        "displayFullOn_2xl": "pf-m-display-full-on-2xl"
      },
      "optionsMenu": "pf-c-options-menu",
      "optionsMenuToggle": "pf-c-options-menu__toggle",
      "pagination": "pf-c-pagination",
      "paginationNav": "pf-c-pagination__nav",
      "paginationNavControl": "pf-c-pagination__nav-control",
      "paginationNavPageSelect": "pf-c-pagination__nav-page-select",
      "paginationTotalItems": "pf-c-pagination__total-items"
    };
    });

    var styles$N = unwrapExports(pagination);

    class Navigation extends React.Component {
        constructor(props) {
            super(props);
            this.handleNewPage = (_evt, newPage) => {
                const { perPage, onSetPage } = this.props;
                const startIdx = (newPage - 1) * perPage;
                const endIdx = newPage * perPage;
                return onSetPage(_evt, newPage, perPage, startIdx, endIdx);
            };
            this.state = { userInputPage: this.props.page };
        }
        static parseInteger(input, lastPage) {
            // eslint-disable-next-line radix
            let inputPage = Number.parseInt(input, 10);
            if (!Number.isNaN(inputPage)) {
                inputPage = inputPage > lastPage ? lastPage : inputPage;
                inputPage = inputPage < 1 ? 1 : inputPage;
            }
            return inputPage;
        }
        onChange(event, lastPage) {
            const inputPage = Navigation.parseInteger(event.target.value, lastPage);
            this.setState({ userInputPage: Number.isNaN(inputPage) ? event.target.value : inputPage });
        }
        onKeyDown(event, page, lastPage, onPageInput) {
            if (event.keyCode === KEY_CODES.ENTER) {
                const inputPage = Navigation.parseInteger(this.state.userInputPage, lastPage);
                onPageInput(event, Number.isNaN(inputPage) ? page : inputPage);
                this.handleNewPage(event, Number.isNaN(inputPage) ? page : inputPage);
            }
        }
        componentDidUpdate(lastState) {
            if (this.props.page !== lastState.page &&
                this.props.page <= this.props.lastPage &&
                this.state.userInputPage !== this.props.page) {
                this.setState({ userInputPage: this.props.page });
            }
        }
        render() {
            const _a = this.props, { page, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            perPage, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onSetPage, isDisabled, lastPage, firstPage, pagesTitle, toLastPage, toNextPage, toFirstPage, toPreviousPage, currPage, paginationTitle, onNextClick, onPreviousClick, onFirstClick, onLastClick, onPageInput, className, isCompact } = _a, props = __rest(_a, ["page", "perPage", "onSetPage", "isDisabled", "lastPage", "firstPage", "pagesTitle", "toLastPage", "toNextPage", "toFirstPage", "toPreviousPage", "currPage", "paginationTitle", "onNextClick", "onPreviousClick", "onFirstClick", "onLastClick", "onPageInput", "className", "isCompact"]);
            const { userInputPage } = this.state;
            return (React.createElement("nav", Object.assign({ className: css(styles$N.paginationNav, className), "aria-label": paginationTitle }, props),
                !isCompact && (React.createElement("div", { className: css(styles$N.paginationNavControl, styles$N.modifiers.first) },
                    React.createElement(Button, { variant: exports.ButtonVariant.plain, isDisabled: isDisabled || page === firstPage || page === 0, "aria-label": toFirstPage, "data-action": "first", onClick: event => {
                            onFirstClick(event, 1);
                            this.handleNewPage(event, 1);
                            this.setState({ userInputPage: 1 });
                        } },
                        React.createElement(AngleDoubleLeftIcon, null)))),
                React.createElement("div", { className: styles$N.paginationNavControl },
                    React.createElement(Button, { variant: exports.ButtonVariant.plain, isDisabled: isDisabled || page === firstPage || page === 0, "data-action": "previous", onClick: event => {
                            const newPage = page - 1 >= 1 ? page - 1 : 1;
                            onPreviousClick(event, newPage);
                            this.handleNewPage(event, newPage);
                            this.setState({ userInputPage: newPage });
                        }, "aria-label": toPreviousPage },
                        React.createElement(AngleLeftIcon, null))),
                !isCompact && (React.createElement("div", { className: styles$N.paginationNavPageSelect },
                    React.createElement("input", { className: css(styles$N.formControl), "aria-label": currPage, type: "number", disabled: isDisabled || (page === firstPage && page === lastPage) || page === 0, min: lastPage <= 0 && firstPage <= 0 ? 0 : 1, max: lastPage, value: userInputPage, onKeyDown: event => this.onKeyDown(event, page, lastPage, onPageInput), onChange: event => this.onChange(event, lastPage) }),
                    React.createElement("span", { "aria-hidden": "true" },
                        "of ",
                        pagesTitle ? pluralize(lastPage, pagesTitle) : lastPage))),
                React.createElement("div", { className: styles$N.paginationNavControl },
                    React.createElement(Button, { variant: exports.ButtonVariant.plain, isDisabled: isDisabled || page === lastPage, "aria-label": toNextPage, "data-action": "next", onClick: event => {
                            const newPage = page + 1 <= lastPage ? page + 1 : lastPage;
                            onNextClick(event, newPage);
                            this.handleNewPage(event, newPage);
                            this.setState({ userInputPage: newPage });
                        } },
                        React.createElement(AngleRightIcon, null))),
                !isCompact && (React.createElement("div", { className: css(styles$N.paginationNavControl, styles$N.modifiers.last) },
                    React.createElement(Button, { variant: exports.ButtonVariant.plain, isDisabled: isDisabled || page === lastPage, "aria-label": toLastPage, "data-action": "last", onClick: event => {
                            onLastClick(event, lastPage);
                            this.handleNewPage(event, lastPage);
                            this.setState({ userInputPage: lastPage });
                        } },
                        React.createElement(AngleDoubleRightIcon, null))))));
        }
    }
    Navigation.displayName = 'Navigation';
    Navigation.defaultProps = {
        className: '',
        isDisabled: false,
        isCompact: false,
        lastPage: 0,
        firstPage: 0,
        pagesTitle: '',
        toLastPage: 'Go to last page',
        toNextPage: 'Go to next page',
        toFirstPage: 'Go to first page',
        toPreviousPage: 'Go to previous page',
        currPage: 'Current page',
        paginationTitle: 'Pagination',
        onNextClick: () => undefined,
        onPreviousClick: () => undefined,
        onFirstClick: () => undefined,
        onLastClick: () => undefined,
        onPageInput: () => undefined
    };

    let toggleId = 0;
    const OptionsToggle = ({ itemsTitle = 'items', optionsToggle = 'Select', 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    itemsPerPageTitle = 'Items per page', firstIndex = 0, lastIndex = 0, itemCount = 0, widgetId = '', showToggle = true, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onToggle = (_isOpen) => undefined, isOpen = false, isDisabled = false, parentRef = null, toggleTemplate: ToggleTemplate = '', onEnter = null }) => (React.createElement("div", { className: css(styles$K.optionsMenuToggle, isDisabled && styles$K.modifiers.disabled, styles$K.modifiers.plain, styles$K.modifiers.text) }, showToggle && (React.createElement(React.Fragment, null,
        React.createElement("span", { className: css(styles$K.optionsMenuToggleText) }, typeof ToggleTemplate === 'string' ? (fillTemplate(ToggleTemplate, { firstIndex, lastIndex, itemCount, itemsTitle })) : (React.createElement(ToggleTemplate, { firstIndex: firstIndex, lastIndex: lastIndex, itemCount: itemCount, itemsTitle: itemsTitle }))),
        React.createElement(DropdownToggle, { onEnter: onEnter, "aria-label": optionsToggle, onToggle: onToggle, isDisabled: isDisabled || itemCount <= 0, isOpen: isOpen, id: `${widgetId}-toggle-${toggleId++}`, className: styles$K.optionsMenuToggleButton, parentRef: parentRef })))));
    OptionsToggle.displayName = 'OptionsToggle';

    class PaginationOptionsMenu extends React.Component {
        constructor(props) {
            super(props);
            this.parentRef = React.createRef();
            this.onToggle = (isOpen) => {
                this.setState({ isOpen });
            };
            this.onSelect = () => {
                this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
            };
            this.handleNewPerPage = (_evt, newPerPage) => {
                const { page, onPerPageSelect, itemCount, defaultToFullPage } = this.props;
                let newPage = page;
                while (Math.ceil(itemCount / newPerPage) < newPage) {
                    newPage--;
                }
                if (defaultToFullPage) {
                    if (itemCount / newPerPage !== newPage) {
                        while (newPage > 1 && itemCount - newPerPage * newPage < 0) {
                            newPage--;
                        }
                    }
                }
                const startIdx = (newPage - 1) * newPerPage;
                const endIdx = newPage * newPerPage;
                return onPerPageSelect(_evt, newPerPage, newPage, startIdx, endIdx);
            };
            this.renderItems = () => {
                const { perPageOptions, perPage, perPageSuffix } = this.props;
                return perPageOptions.map(({ value, title }) => (React.createElement(DropdownItem, { key: value, component: "button", "data-action": `per-page-${value}`, className: css(perPage === value && 'pf-m-selected'), onClick: event => this.handleNewPerPage(event, value) },
                    title,
                    ` ${perPageSuffix}`,
                    perPage === value && (React.createElement("div", { className: css(styles$K.optionsMenuMenuItemIcon) },
                        React.createElement(CheckIcon, null))))));
            };
            this.state = {
                isOpen: false
            };
        }
        render() {
            const { widgetId, isDisabled, itemsPerPageTitle, dropDirection, optionsToggle, perPageOptions, toggleTemplate, firstIndex, lastIndex, itemCount, itemsTitle } = this.props;
            const { isOpen } = this.state;
            return (React.createElement(DropdownContext.Provider, { value: {
                    id: widgetId,
                    onSelect: this.onSelect,
                    toggleIndicatorClass: styles$K.optionsMenuToggleButtonIcon,
                    toggleTextClass: styles$K.optionsMenuToggleText,
                    menuClass: styles$K.optionsMenuMenu,
                    itemClass: styles$K.optionsMenuMenuItem,
                    toggleClass: ' ',
                    baseClass: styles$K.optionsMenu,
                    disabledClass: styles$K.modifiers.disabled,
                    menuComponent: 'ul',
                    baseComponent: 'div',
                    ouiaComponentType: PaginationOptionsMenu.displayName
                } },
                React.createElement(DropdownWithContext, { direction: dropDirection, isOpen: isOpen, toggle: React.createElement(OptionsToggle, { optionsToggle: optionsToggle, itemsPerPageTitle: itemsPerPageTitle, showToggle: perPageOptions && perPageOptions.length > 0, onToggle: this.onToggle, isOpen: isOpen, widgetId: widgetId, firstIndex: firstIndex, lastIndex: lastIndex, itemCount: itemCount, itemsTitle: itemsTitle, toggleTemplate: toggleTemplate, parentRef: this.parentRef.current, isDisabled: isDisabled }), dropdownItems: this.renderItems(), isPlain: true })));
        }
    }
    PaginationOptionsMenu.displayName = 'PaginationOptionsMenu';
    PaginationOptionsMenu.defaultProps = {
        className: '',
        widgetId: '',
        isDisabled: false,
        dropDirection: exports.DropdownDirection.down,
        perPageOptions: [],
        itemsPerPageTitle: 'Items per page',
        perPageSuffix: 'per page',
        optionsToggle: 'Select',
        perPage: 0,
        firstIndex: 0,
        lastIndex: 0,
        defaultToFullPage: false,
        itemCount: 0,
        itemsTitle: 'items',
        toggleTemplate: ({ firstIndex, lastIndex, itemCount, itemsTitle }) => (React.createElement(React.Fragment, null,
            React.createElement("b", null,
                firstIndex,
                " - ",
                lastIndex),
            ' ',
            "of",
            React.createElement("b", null, itemCount),
            " ",
            itemsTitle)),
        onPerPageSelect: () => null
    };

    const c_pagination__nav_page_select_c_form_control_width_chars = {
      "name": "--pf-c-pagination__nav-page-select--c-form-control--width-chars",
      "value": "2",
      "var": "var(--pf-c-pagination__nav-page-select--c-form-control--width-chars)"
    };

    (function (PaginationVariant) {
        PaginationVariant["top"] = "top";
        PaginationVariant["bottom"] = "bottom";
    })(exports.PaginationVariant || (exports.PaginationVariant = {}));
    const defaultPerPageOptions = [
        {
            title: '10',
            value: 10
        },
        {
            title: '20',
            value: 20
        },
        {
            title: '50',
            value: 50
        },
        {
            title: '100',
            value: 100
        }
    ];
    const handleInputWidth = (lastPage, node) => {
        if (!node) {
            return;
        }
        const len = String(lastPage).length;
        if (len >= 3) {
            node.style.setProperty(c_pagination__nav_page_select_c_form_control_width_chars.name, `${len}`);
        }
        else {
            node.style.setProperty(c_pagination__nav_page_select_c_form_control_width_chars.name, '2');
        }
    };
    let paginationId = 0;
    class Pagination extends React.Component {
        constructor() {
            super(...arguments);
            this.paginationRef = React.createRef();
            this.state = {
                ouiaStateId: getDefaultOUIAId(Pagination.displayName, this.props.variant)
            };
        }
        getLastPage() {
            const { itemCount, perPage } = this.props;
            return Math.ceil(itemCount / perPage) || 0;
        }
        componentDidMount() {
            const node = this.paginationRef.current;
            handleInputWidth(this.getLastPage(), node);
        }
        componentDidUpdate(prevProps) {
            const node = this.paginationRef.current;
            if (prevProps.perPage !== this.props.perPage || prevProps.itemCount !== this.props.itemCount) {
                handleInputWidth(this.getLastPage(), node);
            }
        }
        render() {
            const _a = this.props, { children, className, variant, isDisabled, isCompact, isStatic, isSticky, perPage, titles, firstPage, page: propPage, offset, defaultToFullPage, itemCount, itemsStart, itemsEnd, perPageOptions, dropDirection: dropDirectionProp, widgetId, toggleTemplate, onSetPage, onPerPageSelect, onFirstClick, onPreviousClick, onNextClick, onPageInput, onLastClick, ouiaId, ouiaSafe } = _a, props = __rest(_a, ["children", "className", "variant", "isDisabled", "isCompact", "isStatic", "isSticky", "perPage", "titles", "firstPage", "page", "offset", "defaultToFullPage", "itemCount", "itemsStart", "itemsEnd", "perPageOptions", "dropDirection", "widgetId", "toggleTemplate", "onSetPage", "onPerPageSelect", "onFirstClick", "onPreviousClick", "onNextClick", "onPageInput", "onLastClick", "ouiaId", "ouiaSafe"]);
            const dropDirection = dropDirectionProp || (variant === 'bottom' && !isStatic ? 'up' : 'down');
            let page = propPage;
            if (!page && offset) {
                page = Math.ceil(offset / perPage);
            }
            const lastPage = this.getLastPage();
            if (page < firstPage && itemCount > 0) {
                page = firstPage;
            }
            else if (page > lastPage) {
                page = lastPage;
            }
            const firstIndex = itemCount <= 0 ? 0 : (page - 1) * perPage + 1;
            let lastIndex;
            if (itemCount <= 0) {
                lastIndex = 0;
            }
            else {
                lastIndex = page === lastPage ? itemCount : page * perPage;
            }
            return (React.createElement("div", Object.assign({ ref: this.paginationRef, className: css(styles$N.pagination, variant === exports.PaginationVariant.bottom && styles$N.modifiers.bottom, isCompact && styles$N.modifiers.compact, isStatic && styles$N.modifiers.static, isSticky && styles$N.modifiers.sticky, className), id: `${widgetId}-${paginationId++}` }, getOUIAProps(Pagination.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe), props),
                variant === exports.PaginationVariant.top && (React.createElement("div", { className: css(styles$N.paginationTotalItems) },
                    React.createElement(ToggleTemplate, { firstIndex: firstIndex, lastIndex: lastIndex, itemCount: itemCount, itemsTitle: titles.items }))),
                React.createElement(PaginationOptionsMenu, { itemsPerPageTitle: titles.itemsPerPage, perPageSuffix: titles.perPageSuffix, itemsTitle: isCompact ? '' : titles.items, optionsToggle: titles.optionsToggle, perPageOptions: perPageOptions, firstIndex: itemsStart !== null ? itemsStart : firstIndex, lastIndex: itemsEnd !== null ? itemsEnd : lastIndex, defaultToFullPage: defaultToFullPage, itemCount: itemCount, page: page, perPage: perPage, lastPage: lastPage, onPerPageSelect: onPerPageSelect, dropDirection: dropDirection, widgetId: widgetId, toggleTemplate: toggleTemplate, isDisabled: isDisabled }),
                React.createElement(Navigation, { pagesTitle: titles.page, toLastPage: titles.toLastPage, toPreviousPage: titles.toPreviousPage, toNextPage: titles.toNextPage, toFirstPage: titles.toFirstPage, currPage: titles.currPage, paginationTitle: titles.paginationTitle, page: itemCount <= 0 ? 0 : page, perPage: perPage, firstPage: itemsStart !== null ? itemsStart : 1, lastPage: lastPage, onSetPage: onSetPage, onFirstClick: onFirstClick, onPreviousClick: onPreviousClick, onNextClick: onNextClick, onLastClick: onLastClick, onPageInput: onPageInput, isDisabled: isDisabled, isCompact: isCompact }),
                children));
        }
    }
    Pagination.displayName = 'Pagination';
    Pagination.defaultProps = {
        children: null,
        className: '',
        variant: exports.PaginationVariant.top,
        isDisabled: false,
        isCompact: false,
        isSticky: false,
        perPage: defaultPerPageOptions[0].value,
        titles: {
            items: '',
            page: '',
            itemsPerPage: 'Items per page',
            perPageSuffix: 'per page',
            toFirstPage: 'Go to first page',
            toPreviousPage: 'Go to previous page',
            toLastPage: 'Go to last page',
            toNextPage: 'Go to next page',
            optionsToggle: 'Items per page',
            currPage: 'Current page',
            paginationTitle: 'Pagination'
        },
        firstPage: 1,
        page: 0,
        offset: 0,
        defaultToFullPage: false,
        itemsStart: null,
        itemsEnd: null,
        perPageOptions: defaultPerPageOptions,
        widgetId: 'pagination-options-menu',
        toggleTemplate: ToggleTemplate,
        onSetPage: () => undefined,
        onPerPageSelect: () => undefined,
        onFirstClick: () => undefined,
        onPreviousClick: () => undefined,
        onNextClick: () => undefined,
        onPageInput: () => undefined,
        onLastClick: () => undefined,
        ouiaSafe: true
    };

    var progress = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "modifiers": {
        "sm": "pf-m-sm",
        "lg": "pf-m-lg",
        "inside": "pf-m-inside",
        "outside": "pf-m-outside",
        "staticWidth": "pf-m-static-width",
        "singleline": "pf-m-singleline",
        "success": "pf-m-success",
        "warning": "pf-m-warning",
        "danger": "pf-m-danger",
        "truncate": "pf-m-truncate"
      },
      "progress": "pf-c-progress",
      "progressBar": "pf-c-progress__bar",
      "progressDescription": "pf-c-progress__description",
      "progressIndicator": "pf-c-progress__indicator",
      "progressMeasure": "pf-c-progress__measure",
      "progressStatus": "pf-c-progress__status",
      "progressStatusIcon": "pf-c-progress__status-icon"
    };
    });

    var styles$O = unwrapExports(progress);

    const ProgressBar = (_a) => {
        var { progressBarAriaProps, className = '', children = null, value } = _a, props = __rest(_a, ["progressBarAriaProps", "className", "children", "value"]);
        return (React.createElement("div", Object.assign({}, props, { className: css(styles$O.progressBar, className) }, progressBarAriaProps),
            React.createElement("div", { className: css(styles$O.progressIndicator), style: { width: `${value}%` } },
                React.createElement("span", { className: css(styles$O.progressMeasure) }, children))));
    };
    ProgressBar.displayName = 'ProgressBar';

    (function (ProgressMeasureLocation) {
        ProgressMeasureLocation["outside"] = "outside";
        ProgressMeasureLocation["inside"] = "inside";
        ProgressMeasureLocation["top"] = "top";
        ProgressMeasureLocation["none"] = "none";
    })(exports.ProgressMeasureLocation || (exports.ProgressMeasureLocation = {}));
    (function (ProgressVariant) {
        ProgressVariant["danger"] = "danger";
        ProgressVariant["success"] = "success";
        ProgressVariant["warning"] = "warning";
    })(exports.ProgressVariant || (exports.ProgressVariant = {}));
    const variantToIcon = {
        danger: TimesCircleIcon,
        success: CheckCircleIcon,
        warning: ExclamationTriangleIcon
    };
    const ProgressContainer = ({ progressBarAriaProps, value, title = '', parentId, label = null, variant = null, measureLocation = exports.ProgressMeasureLocation.top, isTitleTruncated = false, tooltipPosition }) => {
        const StatusIcon = variantToIcon.hasOwnProperty(variant) && variantToIcon[variant];
        const [tooltip, setTooltip] = React.useState('');
        const onMouseEnter = (event) => {
            if (event.target.offsetWidth < event.target.scrollWidth) {
                setTooltip(title || event.target.innerHTML);
            }
            else {
                setTooltip('');
            }
        };
        const Title = (React.createElement("div", { className: css(styles$O.progressDescription, isTitleTruncated && styles$O.modifiers.truncate), id: `${parentId}-description`, "aria-hidden": "true", onMouseEnter: isTitleTruncated ? onMouseEnter : null }, title));
        return (React.createElement(React.Fragment, null,
            tooltip ? (React.createElement(Tooltip, { position: tooltipPosition, content: tooltip, isVisible: true }, Title)) : (Title),
            React.createElement("div", { className: css(styles$O.progressStatus), "aria-hidden": "true" },
                (measureLocation === exports.ProgressMeasureLocation.top || measureLocation === exports.ProgressMeasureLocation.outside) && (React.createElement("span", { className: css(styles$O.progressMeasure) }, label || `${value}%`)),
                variantToIcon.hasOwnProperty(variant) && (React.createElement("span", { className: css(styles$O.progressStatusIcon) },
                    React.createElement(StatusIcon, null)))),
            React.createElement(ProgressBar, { role: "progressbar", progressBarAriaProps: progressBarAriaProps, value: value }, measureLocation === exports.ProgressMeasureLocation.inside && `${value}%`)));
    };
    ProgressContainer.displayName = 'ProgressContainer';

    (function (ProgressSize) {
        ProgressSize["sm"] = "sm";
        ProgressSize["md"] = "md";
        ProgressSize["lg"] = "lg";
    })(exports.ProgressSize || (exports.ProgressSize = {}));
    class Progress extends React.Component {
        constructor() {
            super(...arguments);
            this.id = this.props.id || getUniqueId();
        }
        render() {
            const _a = this.props, { 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            id, size, 
            /* eslint-enable @typescript-eslint/no-unused-vars */
            className, value, title, label, variant, measureLocation, min, max, valueText, isTitleTruncated, tooltipPosition } = _a, props = __rest(_a, ["id", "size", "className", "value", "title", "label", "variant", "measureLocation", "min", "max", "valueText", "isTitleTruncated", "tooltipPosition"]);
            const progressBarAriaProps = {
                'aria-labelledby': `${this.id}-description`,
                'aria-valuemin': min,
                'aria-valuenow': value,
                'aria-valuemax': max
            };
            if (valueText) {
                progressBarAriaProps['aria-valuetext'] = valueText;
            }
            const scaledValue = Math.min(100, Math.max(0, Math.floor(((value - min) / (max - min)) * 100)));
            return (React.createElement("div", Object.assign({}, props, { className: css(styles$O.progress, styles$O.modifiers[variant], ['inside', 'outside'].includes(measureLocation) && styles$O.modifiers[measureLocation], measureLocation === 'inside' ? styles$O.modifiers[exports.ProgressSize.lg] : styles$O.modifiers[size], !title && styles$O.modifiers.singleline, className), id: this.id }),
                React.createElement(ProgressContainer, { parentId: this.id, value: scaledValue, title: title, label: label, variant: variant, measureLocation: measureLocation, progressBarAriaProps: progressBarAriaProps, isTitleTruncated: isTitleTruncated, tooltipPosition: tooltipPosition })));
        }
    }
    Progress.displayName = 'Progress';
    Progress.defaultProps = {
        className: '',
        measureLocation: exports.ProgressMeasureLocation.top,
        variant: null,
        id: '',
        title: '',
        min: 0,
        max: 100,
        size: null,
        label: null,
        value: 0,
        valueText: null,
        isTitleTruncated: false,
        tooltipPosition: 'top'
    };

    var radio = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "modifiers": {
        "disabled": "pf-m-disabled"
      },
      "radio": "pf-c-radio",
      "radioDescription": "pf-c-radio__description",
      "radioInput": "pf-c-radio__input",
      "radioLabel": "pf-c-radio__label"
    };
    });

    var styles$P = unwrapExports(radio);

    class Radio extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = (event) => {
                this.props.onChange(event.currentTarget.checked, event);
            };
            if (!props.label && !props['aria-label']) {
                // eslint-disable-next-line no-console
                console.error('Radio:', 'Radio requires an aria-label to be specified');
            }
            this.state = {
                ouiaStateId: getDefaultOUIAId(Radio.displayName)
            };
        }
        render() {
            const _a = this.props, { 'aria-label': ariaLabel, checked, className, defaultChecked, isLabelWrapped, isLabelBeforeButton, isChecked, isDisabled, isValid, label, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onChange, description, ouiaId, ouiaSafe = true } = _a, props = __rest(_a, ['aria-label', "checked", "className", "defaultChecked", "isLabelWrapped", "isLabelBeforeButton", "isChecked", "isDisabled", "isValid", "label", "onChange", "description", "ouiaId", "ouiaSafe"]);
            const inputRendered = (React.createElement("input", Object.assign({}, props, { className: css(styles$P.radioInput), type: "radio", onChange: this.handleChange, "aria-invalid": !isValid, disabled: isDisabled, checked: checked || isChecked }, (checked === undefined && { defaultChecked }), (!label && { 'aria-label': ariaLabel }), getOUIAProps(Radio.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe))));
            const labelRendered = !label ? null : isLabelWrapped ? (React.createElement("span", { className: css(styles$P.radioLabel, isDisabled && styles$P.modifiers.disabled) }, label)) : (React.createElement("label", { className: css(styles$P.radioLabel, isDisabled && styles$P.modifiers.disabled), htmlFor: props.id }, label));
            const descRender = description ? React.createElement("div", { className: css(styles$P.radioDescription) }, description) : null;
            const childrenRendered = isLabelBeforeButton ? (React.createElement(React.Fragment, null,
                labelRendered,
                inputRendered,
                descRender)) : (React.createElement(React.Fragment, null,
                inputRendered,
                labelRendered,
                descRender));
            return isLabelWrapped ? (React.createElement("label", { className: css(styles$P.radio, className), htmlFor: props.id }, childrenRendered)) : (React.createElement("div", { className: css(styles$P.radio, className) }, childrenRendered));
        }
    }
    Radio.displayName = 'Radio';
    Radio.defaultProps = {
        className: '',
        isDisabled: false,
        isValid: true,
        onChange: () => { }
    };

    var searchInput = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "button": "pf-c-button",
      "searchInput": "pf-c-search-input",
      "searchInputCount": "pf-c-search-input__count",
      "searchInputIcon": "pf-c-search-input__icon",
      "searchInputNav": "pf-c-search-input__nav",
      "searchInputText": "pf-c-search-input__text",
      "searchInputTextInput": "pf-c-search-input__text-input",
      "searchInputUtilities": "pf-c-search-input__utilities"
    };
    });

    var styles$Q = unwrapExports(searchInput);

    const AngleUpIconConfig = {
      name: 'AngleUpIcon',
      height: 512,
      width: 320,
      svgPath: 'M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z',
      yOffset: 0,
      xOffset: 0,
    };

    const AngleUpIcon = createIcon(AngleUpIconConfig);

    const SearchInput = (_a) => {
        var { className, value = '', placeholder, onChange, onClear, resultsCount, onNextClick, onPreviousClick, 'aria-label': ariaLabel = 'Search input' } = _a, props = __rest(_a, ["className", "value", "placeholder", "onChange", "onClear", "resultsCount", "onNextClick", "onPreviousClick", 'aria-label']);
        const onChangeHandler = (event) => {
            if (onChange) {
                onChange(event.currentTarget.value, event);
            }
        };
        return (React.createElement("div", Object.assign({ className: css(className, styles$Q.searchInput) }, props),
            React.createElement("span", { className: css(styles$Q.searchInputText) },
                React.createElement("span", { className: css(styles$Q.searchInputIcon) },
                    React.createElement(SearchIcon, null)),
                React.createElement("input", { className: css(styles$Q.searchInputTextInput), value: value, placeholder: placeholder, "aria-label": ariaLabel, onChange: onChangeHandler })),
            value && (React.createElement("span", { className: css(styles$Q.searchInputUtilities) },
                resultsCount && (React.createElement("span", { className: css(styles$Q.searchInputCount) },
                    React.createElement(Badge, { isRead: true }, resultsCount))),
                !!onNextClick && !!onPreviousClick && (React.createElement("span", { className: css(styles$Q.searchInputNav) },
                    React.createElement(Button, { variant: exports.ButtonVariant.plain, "aria-label": "Previous", onClick: onPreviousClick },
                        React.createElement(AngleUpIcon, null)),
                    React.createElement(Button, { variant: exports.ButtonVariant.plain, "aria-label": "Next", onClick: onNextClick },
                        React.createElement(AngleDownIcon, null)))),
                React.createElement("span", { className: "pf-c-search-input__clear" },
                    React.createElement(Button, { variant: exports.ButtonVariant.plain, "aria-label": "Clear", onClick: onClear },
                        React.createElement(TimesIcon, null)))))));
    };
    SearchInput.displayName = 'SearchInput';

    var simpleList = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "modifiers": {
        "current": "pf-m-current"
      },
      "simpleList": "pf-c-simple-list",
      "simpleListItemLink": "pf-c-simple-list__item-link",
      "simpleListSection": "pf-c-simple-list__section",
      "simpleListTitle": "pf-c-simple-list__title"
    };
    });

    var styles$R = unwrapExports(simpleList);

    const SimpleListGroup = (_a) => {
        var { children = null, className = '', title = '', titleClassName = '', id = '' } = _a, props = __rest(_a, ["children", "className", "title", "titleClassName", "id"]);
        return (React.createElement("section", Object.assign({ className: css(styles$R.simpleListSection) }, props),
            React.createElement("h2", { id: id, className: css(styles$R.simpleListTitle, titleClassName), "aria-hidden": "true" }, title),
            React.createElement("ul", { className: css(className), "aria-labelledby": id }, children)));
    };
    SimpleListGroup.displayName = 'SimpleListGroup';

    const SimpleListContext = React.createContext({});
    class SimpleList extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                currentRef: null
            };
            this.handleCurrentUpdate = (newCurrentRef, itemProps) => {
                this.setState({ currentRef: newCurrentRef });
                const { onSelect } = this.props;
                onSelect && onSelect(newCurrentRef, itemProps);
            };
        }
        componentDidMount() {
            if (!SimpleList.hasWarnBeta && 'development' !== 'production') {
                // eslint-disable-next-line no-console
                console.warn('This component is in beta and subject to change.');
                SimpleList.hasWarnBeta = true;
            }
        }
        render() {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _a = this.props, { children, className, onSelect } = _a, props = __rest(_a, ["children", "className", "onSelect"]);
            let isGrouped = false;
            if (children) {
                isGrouped = React.Children.toArray(children)[0].type === SimpleListGroup;
            }
            return (React.createElement(SimpleListContext.Provider, { value: {
                    currentRef: this.state.currentRef,
                    updateCurrentRef: this.handleCurrentUpdate
                } },
                React.createElement("div", Object.assign({ className: css(styles$R.simpleList, className) }, props, (isGrouped && { role: 'list' })),
                    isGrouped && children,
                    !isGrouped && React.createElement("ul", null, children))));
        }
    }
    SimpleList.displayName = 'SimpleList';
    SimpleList.hasWarnBeta = false;
    SimpleList.defaultProps = {
        children: null,
        className: ''
    };

    class SimpleListItem extends React.Component {
        constructor() {
            super(...arguments);
            this.ref = React.createRef();
        }
        render() {
            const _a = this.props, { children, isCurrent, className, component: Component, componentClassName, componentProps, onClick, type, href } = _a, props = __rest(_a, ["children", "isCurrent", "className", "component", "componentClassName", "componentProps", "onClick", "type", "href"]);
            return (React.createElement(SimpleListContext.Consumer, null, ({ currentRef, updateCurrentRef }) => {
                const isButton = Component === 'button';
                const isCurrentItem = this.ref && currentRef ? currentRef.current === this.ref.current : isCurrent;
                const additionalComponentProps = isButton
                    ? {
                        type
                    }
                    : {
                        tabIndex: 0,
                        href
                    };
                return (React.createElement("li", Object.assign({ className: css(className) }, props),
                    React.createElement(Component, Object.assign({ className: css(styles$R.simpleListItemLink, isCurrentItem && styles$R.modifiers.current, componentClassName), onClick: (evt) => {
                            onClick(evt);
                            updateCurrentRef(this.ref, this.props);
                        }, ref: this.ref }, componentProps, additionalComponentProps), children)));
            }));
        }
    }
    SimpleListItem.displayName = 'SimpleListItem';
    SimpleListItem.defaultProps = {
        children: null,
        className: '',
        isCurrent: false,
        component: 'button',
        componentClassName: '',
        type: 'button',
        href: '',
        onClick: () => { }
    };

    var skeleton = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "modifiers": {
        "circle": "pf-m-circle",
        "square": "pf-m-square",
        "widthSm": "pf-m-width-sm",
        "widthMd": "pf-m-width-md",
        "widthLg": "pf-m-width-lg",
        "width_25": "pf-m-width-25",
        "width_33": "pf-m-width-33",
        "width_50": "pf-m-width-50",
        "width_66": "pf-m-width-66",
        "width_75": "pf-m-width-75",
        "heightSm": "pf-m-height-sm",
        "heightMd": "pf-m-height-md",
        "heightLg": "pf-m-height-lg",
        "height_25": "pf-m-height-25",
        "height_33": "pf-m-height-33",
        "height_50": "pf-m-height-50",
        "height_66": "pf-m-height-66",
        "height_75": "pf-m-height-75",
        "height_100": "pf-m-height-100",
        "text_4xl": "pf-m-text-4xl",
        "text_3xl": "pf-m-text-3xl",
        "text_2xl": "pf-m-text-2xl",
        "textXl": "pf-m-text-xl",
        "textLg": "pf-m-text-lg",
        "textMd": "pf-m-text-md",
        "textSm": "pf-m-text-sm"
      },
      "skeleton": "pf-c-skeleton"
    };
    });

    var styles$S = unwrapExports(skeleton);

    const Skeleton = (_a) => {
        var { className, width, height, fontSize, shape, screenreaderText } = _a, props = __rest(_a, ["className", "width", "height", "fontSize", "shape", "screenreaderText"]);
        const fontHeightClassName = fontSize
            ? Object.values(styles$S.modifiers).find(key => key === `pf-m-text-${fontSize}`)
            : undefined;
        return (React.createElement("div", Object.assign({}, props, { className: css(styles$S.skeleton, fontSize && fontHeightClassName, shape === 'circle' && styles$S.modifiers.circle, shape === 'square' && styles$S.modifiers.square, className) }, ((width || height) && {
            style: Object.assign({ '--pf-c-skeleton--Width': width ? width : undefined, '--pf-c-skeleton--Height': height ? height : undefined }, props.style)
        })),
            React.createElement("span", { className: "pf-u-screen-reader" }, screenreaderText)));
    };
    Skeleton.displayName = 'Skeleton';

    var skipToContent = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "skipToContent": "pf-c-skip-to-content"
    };
    });

    var styles$T = unwrapExports(skipToContent);

    class SkipToContent extends React.Component {
        constructor() {
            super(...arguments);
            this.componentRef = React.createRef();
        }
        componentDidMount() {
            if (this.props.show && this.componentRef.current) {
                this.componentRef.current.focus();
            }
        }
        render() {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _a = this.props, { children, className, href, show, type } = _a, rest = __rest(_a, ["children", "className", "href", "show", "type"]);
            return (React.createElement("a", Object.assign({}, rest, { className: css(buttonStyles.button, buttonStyles.modifiers.primary, styles$T.skipToContent, className), ref: this.componentRef, href: href }), children));
        }
    }
    SkipToContent.displayName = 'SkipToContent';
    SkipToContent.defaultProps = {
        show: false
    };

    var _switch = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "modifiers": {
        "off": "pf-m-off",
        "on": "pf-m-on"
      },
      "switch": "pf-c-switch",
      "switchInput": "pf-c-switch__input",
      "switchLabel": "pf-c-switch__label",
      "switchToggle": "pf-c-switch__toggle",
      "switchToggleIcon": "pf-c-switch__toggle-icon"
    };
    });

    var styles$U = unwrapExports(_switch);

    class Switch extends React.Component {
        constructor(props) {
            super(props);
            if (!props.id && !props['aria-label']) {
                // eslint-disable-next-line no-console
                console.error('Switch: Switch requires either an id or aria-label to be specified');
            }
            this.id = props.id || getUniqueId();
            this.state = {
                ouiaStateId: getDefaultOUIAId(Switch.displayName)
            };
        }
        render() {
            const _a = this.props, { 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            id, className, label, labelOff, isChecked, isDisabled, onChange, ouiaId, ouiaSafe } = _a, props = __rest(_a, ["id", "className", "label", "labelOff", "isChecked", "isDisabled", "onChange", "ouiaId", "ouiaSafe"]);
            const isAriaLabelledBy = props['aria-label'] === '';
            return (React.createElement("label", Object.assign({ className: css(styles$U.switch, className), htmlFor: this.id }, getOUIAProps(Switch.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe)),
                React.createElement("input", Object.assign({ id: this.id, className: css(styles$U.switchInput), type: "checkbox", onChange: event => onChange(event.target.checked, event), checked: isChecked, disabled: isDisabled, "aria-labelledby": isAriaLabelledBy ? `${this.id}-on` : null }, props)),
                label !== undefined ? (React.createElement(React.Fragment, null,
                    React.createElement("span", { className: css(styles$U.switchToggle) }),
                    React.createElement("span", { className: css(styles$U.switchLabel, styles$U.modifiers.on), id: isAriaLabelledBy ? `${this.id}-on` : null, "aria-hidden": "true" }, label),
                    React.createElement("span", { className: css(styles$U.switchLabel, styles$U.modifiers.off), id: isAriaLabelledBy ? `${this.id}-off` : null, "aria-hidden": "true" }, labelOff !== undefined ? labelOff : label))) : (React.createElement("span", { className: css(styles$U.switchToggle) },
                    React.createElement("div", { className: css(styles$U.switchToggleIcon), "aria-hidden": "true" },
                        React.createElement(CheckIcon, { noVerticalAlign: true }))))));
        }
    }
    Switch.displayName = 'Switch';
    Switch.defaultProps = {
        isChecked: true,
        isDisabled: false,
        'aria-label': '',
        onChange: () => undefined
    };

    /** The parent <Tabs> component accecesses this component's propeties directly in order to present each Tab */
    const Tab = (_props) => null;
    Tab.displayName = 'Tab';

    var tabs = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "modifiers": {
        "fill": "pf-m-fill",
        "scrollable": "pf-m-scrollable",
        "secondary": "pf-m-secondary",
        "noBorderBottom": "pf-m-no-border-bottom",
        "box": "pf-m-box",
        "vertical": "pf-m-vertical",
        "current": "pf-m-current",
        "colorSchemeLight_300": "pf-m-color-scheme--light-300",
        "insetNone": "pf-m-inset-none",
        "insetSm": "pf-m-inset-sm",
        "insetMd": "pf-m-inset-md",
        "insetLg": "pf-m-inset-lg",
        "insetXl": "pf-m-inset-xl",
        "inset_2xl": "pf-m-inset-2xl",
        "insetNoneOnSm": "pf-m-inset-none-on-sm",
        "insetSmOnSm": "pf-m-inset-sm-on-sm",
        "insetMdOnSm": "pf-m-inset-md-on-sm",
        "insetLgOnSm": "pf-m-inset-lg-on-sm",
        "insetXlOnSm": "pf-m-inset-xl-on-sm",
        "inset_2xlOnSm": "pf-m-inset-2xl-on-sm",
        "insetNoneOnMd": "pf-m-inset-none-on-md",
        "insetSmOnMd": "pf-m-inset-sm-on-md",
        "insetMdOnMd": "pf-m-inset-md-on-md",
        "insetLgOnMd": "pf-m-inset-lg-on-md",
        "insetXlOnMd": "pf-m-inset-xl-on-md",
        "inset_2xlOnMd": "pf-m-inset-2xl-on-md",
        "insetNoneOnLg": "pf-m-inset-none-on-lg",
        "insetSmOnLg": "pf-m-inset-sm-on-lg",
        "insetMdOnLg": "pf-m-inset-md-on-lg",
        "insetLgOnLg": "pf-m-inset-lg-on-lg",
        "insetXlOnLg": "pf-m-inset-xl-on-lg",
        "inset_2xlOnLg": "pf-m-inset-2xl-on-lg",
        "insetNoneOnXl": "pf-m-inset-none-on-xl",
        "insetSmOnXl": "pf-m-inset-sm-on-xl",
        "insetMdOnXl": "pf-m-inset-md-on-xl",
        "insetLgOnXl": "pf-m-inset-lg-on-xl",
        "insetXlOnXl": "pf-m-inset-xl-on-xl",
        "inset_2xlOnXl": "pf-m-inset-2xl-on-xl",
        "insetNoneOn_2xl": "pf-m-inset-none-on-2xl",
        "insetSmOn_2xl": "pf-m-inset-sm-on-2xl",
        "insetMdOn_2xl": "pf-m-inset-md-on-2xl",
        "insetLgOn_2xl": "pf-m-inset-lg-on-2xl",
        "insetXlOn_2xl": "pf-m-inset-xl-on-2xl",
        "inset_2xlOn_2xl": "pf-m-inset-2xl-on-2xl"
      },
      "tabs": "pf-c-tabs",
      "tabsItem": "pf-c-tabs__item",
      "tabsItemIcon": "pf-c-tabs__item-icon",
      "tabsItemText": "pf-c-tabs__item-text",
      "tabsLink": "pf-c-tabs__link",
      "tabsList": "pf-c-tabs__list",
      "tabsScrollButton": "pf-c-tabs__scroll-button"
    };
    });

    var styles$V = unwrapExports(tabs);

    const TabButton = (_a) => {
        var { children, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        tabContentRef, ouiaId, ouiaSafe } = _a, props = __rest(_a, ["children", "tabContentRef", "ouiaId", "ouiaSafe"]);
        const Component = (props.href ? 'a' : 'button');
        return (React.createElement(Component, Object.assign({}, getOUIAProps(TabButton.displayName, ouiaId, ouiaSafe), props), children));
    };
    TabButton.displayName = 'TabButton';

    var tabContent = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "modifiers": {
        "light_300": "pf-m-light-300"
      },
      "tabContent": "pf-c-tab-content"
    };
    });

    var styles$W = unwrapExports(tabContent);

    const TabsContext = React.createContext({
        variant: 'default'
    });
    const TabsContextProvider = TabsContext.Provider;
    const TabsContextConsumer = TabsContext.Consumer;

    const variantStyle$1 = {
        default: '',
        light300: styles$W.modifiers.light_300
    };
    const TabContentBase = (_a) => {
        var { id, activeKey, 'aria-label': ariaLabel, child, children, className, eventKey, innerRef, ouiaId, ouiaSafe } = _a, props = __rest(_a, ["id", "activeKey", 'aria-label', "child", "children", "className", "eventKey", "innerRef", "ouiaId", "ouiaSafe"]);
        if (children || child) {
            let labelledBy;
            if (ariaLabel) {
                labelledBy = null;
            }
            else {
                labelledBy = children ? `pf-tab-${eventKey}-${id}` : `pf-tab-${child.props.eventKey}-${id}`;
            }
            return (React.createElement(TabsContextConsumer, null, ({ variant }) => (React.createElement("section", Object.assign({ ref: innerRef, hidden: children ? null : child.props.eventKey !== activeKey, className: children
                    ? css('pf-c-tab-content', className, variantStyle$1[variant])
                    : css('pf-c-tab-content', child.props.className, variantStyle$1[variant]), id: children ? id : `pf-tab-section-${child.props.eventKey}-${id}`, "aria-label": ariaLabel, "aria-labelledby": labelledBy, role: "tabpanel", tabIndex: 0 }, getOUIAProps('TabContent', ouiaId, ouiaSafe), props), children || child.props.children))));
        }
        return null;
    };
    const TabContent = React.forwardRef((props, ref) => (React.createElement(TabContentBase, Object.assign({}, props, { innerRef: ref }))));

    (function (TabsComponent) {
        TabsComponent["div"] = "div";
        TabsComponent["nav"] = "nav";
    })(exports.TabsComponent || (exports.TabsComponent = {}));
    const variantStyle$2 = {
        default: '',
        light300: styles$V.modifiers.colorSchemeLight_300
    };
    class Tabs extends React.Component {
        constructor(props) {
            super(props);
            this.tabList = React.createRef();
            this.handleScrollButtons = () => {
                if (this.tabList.current && !this.props.isVertical) {
                    const container = this.tabList.current;
                    // get first element and check if it is in view
                    const overflowOnLeft = !isElementInView(container, container.firstChild, false);
                    // get last element and check if it is in view
                    const overflowOnRight = !isElementInView(container, container.lastChild, false);
                    const showScrollButtons = overflowOnLeft || overflowOnRight;
                    const disableLeftScrollButton = !overflowOnLeft;
                    const disableRightScrollButton = !overflowOnRight;
                    this.setState({
                        showScrollButtons,
                        disableLeftScrollButton,
                        disableRightScrollButton
                    });
                }
            };
            this.scrollLeft = () => {
                // find first Element that is fully in view on the left, then scroll to the element before it
                if (this.tabList.current) {
                    const container = this.tabList.current;
                    const childrenArr = Array.from(container.children);
                    let firstElementInView;
                    let lastElementOutOfView;
                    let i;
                    for (i = 0; i < childrenArr.length && !firstElementInView; i++) {
                        if (isElementInView(container, childrenArr[i], false)) {
                            firstElementInView = childrenArr[i];
                            lastElementOutOfView = childrenArr[i - 1];
                        }
                    }
                    if (lastElementOutOfView) {
                        container.scrollLeft -= lastElementOutOfView.scrollWidth;
                    }
                }
            };
            this.scrollRight = () => {
                // find last Element that is fully in view on the right, then scroll to the element after it
                if (this.tabList.current) {
                    const container = this.tabList.current;
                    const childrenArr = Array.from(container.children);
                    let lastElementInView;
                    let firstElementOutOfView;
                    for (let i = childrenArr.length - 1; i >= 0 && !lastElementInView; i--) {
                        if (isElementInView(container, childrenArr[i], false)) {
                            lastElementInView = childrenArr[i];
                            firstElementOutOfView = childrenArr[i + 1];
                        }
                    }
                    if (firstElementOutOfView) {
                        container.scrollLeft += firstElementOutOfView.scrollWidth;
                    }
                }
            };
            this.state = {
                showScrollButtons: false,
                disableLeftScrollButton: false,
                disableRightScrollButton: false,
                shownKeys: [this.props.activeKey],
                ouiaStateId: getDefaultOUIAId(Tabs.displayName)
            };
        }
        handleTabClick(event, eventKey, tabContentRef, mountOnEnter) {
            const { shownKeys } = this.state;
            this.props.onSelect(event, eventKey);
            // process any tab content sections outside of the component
            if (tabContentRef) {
                React.Children.toArray(this.props.children)
                    .map(child => child)
                    .filter(child => child.props && child.props.tabContentRef && child.props.tabContentRef.current)
                    .forEach(child => (child.props.tabContentRef.current.hidden = true));
                // most recently selected tabContent
                if (tabContentRef.current) {
                    tabContentRef.current.hidden = false;
                }
            }
            if (mountOnEnter) {
                this.setState({
                    shownKeys: shownKeys.concat(eventKey)
                });
            }
        }
        componentDidMount() {
            if (!this.props.isVertical) {
                window.addEventListener('resize', this.handleScrollButtons, false);
                // call the handle resize function to check if scroll buttons should be shown
                this.handleScrollButtons();
            }
        }
        componentWillUnmount() {
            if (!this.props.isVertical) {
                window.removeEventListener('resize', this.handleScrollButtons, false);
            }
        }
        componentDidUpdate(prevProps) {
            const { activeKey, mountOnEnter } = this.props;
            const { shownKeys } = this.state;
            if (prevProps.activeKey !== activeKey && mountOnEnter && shownKeys.indexOf(activeKey) < 0) {
                this.setState({
                    shownKeys: shownKeys.concat(activeKey)
                });
            }
        }
        render() {
            const _a = this.props, { className, children, activeKey, id, isFilled, isSecondary, isVertical, isBox, leftScrollAriaLabel, rightScrollAriaLabel, 'aria-label': ariaLabel, component, ouiaId, ouiaSafe, mountOnEnter, unmountOnExit, inset, variant } = _a, props = __rest(_a, ["className", "children", "activeKey", "id", "isFilled", "isSecondary", "isVertical", "isBox", "leftScrollAriaLabel", "rightScrollAriaLabel", 'aria-label', "component", "ouiaId", "ouiaSafe", "mountOnEnter", "unmountOnExit", "inset", "variant"]);
            const { showScrollButtons, disableLeftScrollButton, disableRightScrollButton, shownKeys } = this.state;
            const filteredChildren = React.Children.toArray(children)
                .filter(Boolean)
                .filter(child => !child.props.isHidden);
            const uniqueId = id || getUniqueId();
            const Component = component === exports.TabsComponent.nav ? 'nav' : 'div';
            return (React.createElement(TabsContextProvider, { value: { variant } },
                React.createElement(Component, Object.assign({ "aria-label": ariaLabel, className: css(styles$V.tabs, isFilled && styles$V.modifiers.fill, isSecondary && styles$V.modifiers.secondary, isVertical && styles$V.modifiers.vertical, isBox && styles$V.modifiers.box, showScrollButtons && !isVertical && styles$V.modifiers.scrollable, formatBreakpointMods(inset, styles$V), variantStyle$2[variant], className) }, getOUIAProps(Tabs.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe), { id: id && id }, props),
                    React.createElement("button", { className: css(styles$V.tabsScrollButton, isSecondary && buttonStyles.modifiers.secondary), "aria-label": leftScrollAriaLabel, onClick: this.scrollLeft, disabled: disableLeftScrollButton, "aria-hidden": disableLeftScrollButton },
                        React.createElement(AngleLeftIcon, null)),
                    React.createElement("ul", { className: css(styles$V.tabsList), ref: this.tabList, onScroll: this.handleScrollButtons }, filteredChildren.map((child, index) => {
                        const _a = child.props, { title, eventKey, tabContentRef, id: childId, tabContentId, className: childClassName = '', ouiaId: childOuiaId, 
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        isHidden } = _a, rest = __rest(_a, ["title", "eventKey", "tabContentRef", "id", "tabContentId", "className", "ouiaId", "isHidden"]);
                        let ariaControls = tabContentId ? `${tabContentId}` : `pf-tab-section-${eventKey}-${childId || uniqueId}`;
                        if ((mountOnEnter || unmountOnExit) && eventKey !== activeKey) {
                            ariaControls = undefined;
                        }
                        return (React.createElement("li", { key: index, className: css(styles$V.tabsItem, eventKey === activeKey && styles$V.modifiers.current, childClassName) },
                            React.createElement(TabButton, Object.assign({ className: css(styles$V.tabsLink), onClick: (event) => this.handleTabClick(event, eventKey, tabContentRef, mountOnEnter), id: `pf-tab-${eventKey}-${childId || uniqueId}`, "aria-controls": ariaControls, tabContentRef: tabContentRef, ouiaId: childOuiaId }, rest), title)));
                    })),
                    React.createElement("button", { className: css(styles$V.tabsScrollButton, isSecondary && buttonStyles.modifiers.secondary), "aria-label": rightScrollAriaLabel, onClick: this.scrollRight, disabled: disableRightScrollButton, "aria-hidden": disableRightScrollButton },
                        React.createElement(AngleRightIcon, null))),
                filteredChildren
                    .filter(child => child.props.children &&
                    !(unmountOnExit && child.props.eventKey !== activeKey) &&
                    !(mountOnEnter && shownKeys.indexOf(child.props.eventKey) === -1))
                    .map((child, index) => (React.createElement(TabContent, { key: index, activeKey: activeKey, child: child, id: child.props.id || uniqueId, ouiaId: child.props.ouiaId })))));
        }
    }
    Tabs.displayName = 'Tabs';
    Tabs.defaultProps = {
        activeKey: 0,
        onSelect: () => undefined,
        isFilled: false,
        isSecondary: false,
        isVertical: false,
        isBox: false,
        leftScrollAriaLabel: 'Scroll left',
        rightScrollAriaLabel: 'Scroll right',
        component: exports.TabsComponent.div,
        mountOnEnter: false,
        unmountOnExit: false,
        ouiaSafe: true,
        variant: 'default'
    };

    const TabTitleText = (_a) => {
        var { children, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("span", Object.assign({ className: css(styles$V.tabsItemText, className) }, props), children));
    };
    TabTitleText.displayName = 'TabTitleText';

    const TabTitleIcon = (_a) => {
        var { children, className = '' } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("span", Object.assign({ className: css(styles$V.tabsItemIcon, className) }, props), children));
    };
    TabTitleIcon.displayName = 'TabTitleIcon';

    var tile = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "modifiers": {
        "selected": "pf-m-selected",
        "disabled": "pf-m-disabled",
        "displayLg": "pf-m-display-lg",
        "stacked": "pf-m-stacked"
      },
      "tile": "pf-c-tile",
      "tileBody": "pf-c-tile__body",
      "tileHeader": "pf-c-tile__header",
      "tileIcon": "pf-c-tile__icon",
      "tileTitle": "pf-c-tile__title"
    };
    });

    var styles$X = unwrapExports(tile);

    const Tile = (_a) => {
        var { children, title, icon, isStacked, isSelected, isDisabled, isDisplayLarge, className } = _a, props = __rest(_a, ["children", "title", "icon", "isStacked", "isSelected", "isDisabled", "isDisplayLarge", "className"]);
        return (React.createElement("div", Object.assign({ className: css(styles$X.tile, isSelected && styles$X.modifiers.selected, isDisabled && styles$X.modifiers.disabled, isDisplayLarge && styles$X.modifiers.displayLg, className), tabIndex: 0 }, props),
            React.createElement("div", { className: css(styles$X.tileHeader, isStacked && styles$X.modifiers.stacked) },
                icon && React.createElement("div", { className: css(styles$X.tileIcon) }, icon),
                React.createElement("div", { className: css(styles$X.tileTitle) }, title)),
            children && React.createElement("div", { className: css(styles$X.tileBody) }, children)));
    };
    Tile.displayName = 'Tile';

    const TimeOption = (_a) => {
        var { className = '', value = '', index = 0, onSelect = () => { }, children, id, isFocused } = _a, props = __rest(_a, ["className", "value", "index", "onSelect", "children", "id", "isFocused"]);
        return (React.createElement("li", Object.assign({ role: "presentation", className: css(styles$i.selectMenuWrapper, isFocused && styles$i.modifiers.focus, className) }, props),
            React.createElement("button", { className: css(styles$i.selectMenuItem), onClick: () => {
                    onSelect(value, index);
                }, role: "option", type: "button", id: id }, children || value.toString())));
    };
    TimeOption.displayName = 'TimeOption';

    const makeTimeOptions = (stepMinutes, hour12, delimiter) => {
        const res = [];
        const iter = new Date(new Date().setHours(0, 0, 0, 0));
        const iterDay = iter.getDay();
        while (iter.getDay() === iterDay) {
            let hour = iter.getHours();
            let suffix = 'am';
            if (hour12) {
                if (hour === 0) {
                    hour = 12; // 12am
                }
                else if (hour >= 12) {
                    suffix = 'pm';
                }
                if (hour > 12) {
                    hour %= 12;
                }
            }
            res.push((hour12 ? hour.toString() : hour.toString().padStart(2, '0')) +
                delimiter +
                iter
                    .getMinutes()
                    .toString()
                    .padStart(2, '0') +
                (hour12 ? suffix : ''));
            iter.setMinutes(iter.getMinutes() + stepMinutes);
        }
        return res;
    };
    const parseTime = (time, timeRegex, delimiter, is12Hour) => {
        const date = new Date(time);
        // if default time is a ISO 8601 formatted date string, we parse it to hh:mm(am/pm) format
        if (!isNaN(date.getDate()) && time.includes('T')) {
            const hours = is12Hour
                ? `${date.getHours() > 11 ? date.getHours() - 12 : date.getHours()}`
                : `${date.getHours()}`.padStart(2, '0');
            const minutes = `${date.getMinutes()}`.padStart(2, '0');
            return `${hours}${delimiter}${minutes}${is12Hour ? (date.getHours() > 11 ? 'pm' : 'am') : ''}`;
        }
        else if (
        // if this 12 hour time is missing am/pm but otherwise valid, append am/pm
        is12Hour &&
            validateTime(time, timeRegex, delimiter, is12Hour) &&
            time !== '' &&
            !time.toLowerCase().includes('am') &&
            !time.toLowerCase().includes('pm')) {
            return `${time}${new Date().getHours() > 11 ? 'pm' : 'am'}`; // if currently morning append am, otherwise pm
        }
        return time;
    };
    const validateTime = (time, timeRegex, delimiter, is12Hour) => {
        // ISO 8601 format is valid
        const date = new Date(time);
        if (!isNaN(date.getDate()) && time.includes('T')) {
            return true;
        }
        // hours only valid if they are [0-23] or [0-12]
        const hours = parseInt(time.split(delimiter)[0]);
        const validHours = hours >= 0 && hours <= (is12Hour ? 12 : 23);
        // empty string is valid
        return time === '' || (timeRegex.test(time) && validHours);
    };

    class TimePicker extends React.Component {
        constructor(props) {
            super(props);
            this.parentRef = React.createRef();
            this.toggleRef = React.createRef();
            this.inputRef = React.createRef();
            this.menuRef = React.createRef();
            this.onDocClick = (event) => {
                const clickedOnToggle = this.parentRef && this.parentRef.current && this.parentRef.current.contains(event.target);
                const clickedWithinMenu = this.menuRef &&
                    this.menuRef.current &&
                    this.menuRef.current.contains &&
                    this.menuRef.current.contains(event.target);
                if (this.state.isOpen && !(clickedOnToggle || clickedWithinMenu)) {
                    this.onToggle(false);
                }
            };
            this.handleGlobalKeys = (event) => {
                const { isOpen, focusedIndex } = this.state;
                // keyboard pressed while focus on toggle
                if (this.inputRef && this.inputRef.current && this.inputRef.current.contains(event.target)) {
                    if (!isOpen && event.key !== KeyTypes.Tab) {
                        this.onToggle(true);
                    }
                    else if (isOpen) {
                        if (event.key === KeyTypes.Escape) {
                            this.onToggle(false);
                        }
                        else if (event.key === KeyTypes.Tab) {
                            this.onToggle(false);
                        }
                        else if (event.key === KeyTypes.Enter) {
                            if (focusedIndex !== null) {
                                this.onSelect(this.getOptions()[focusedIndex].innerText, focusedIndex);
                                event.stopPropagation();
                            }
                            else {
                                this.onToggle(false);
                            }
                        }
                        else if (event.key === KeyTypes.ArrowDown) {
                            this.updateFocusedIndex(1);
                            event.preventDefault();
                        }
                        else if (event.key === KeyTypes.ArrowUp) {
                            this.updateFocusedIndex(-1);
                            event.preventDefault();
                        }
                    }
                }
            };
            this.updateFocusedIndex = (increment) => {
                this.setState(prevState => {
                    const maxIndex = this.getOptions().length - 1;
                    let nextIndex = prevState.focusedIndex !== null ? prevState.focusedIndex + increment : prevState.scrollIndex;
                    if (nextIndex < 0) {
                        nextIndex = maxIndex;
                    }
                    else if (nextIndex > maxIndex) {
                        nextIndex = 0;
                    }
                    this.scrollToIndex(nextIndex);
                    return {
                        focusedIndex: nextIndex,
                        time: this.getOptions()[nextIndex].innerText
                    };
                });
            };
            this.scrollToIndex = (index) => {
                this.getOptions()[index].offsetParent.scrollTop = this.getOptions()[index].offsetTop;
            };
            this.scrollToSelection = (time) => {
                const { delimiter, is24Hour } = this.props;
                let splitTime = time.split(this.props.delimiter);
                let focusedIndex = null;
                // build out the rest of the time assuming hh:00 if it's a partial time
                if (splitTime.length < 2) {
                    time = `${time}${delimiter}00`;
                    splitTime = time.split(delimiter);
                }
                // for 12hr variant, autoscroll to pm if it's currently the afternoon, otherwise autoscroll to am
                if (!is24Hour && splitTime.length > 1 && splitTime[1].length < 2) {
                    const minutes = splitTime[1].length === 0 ? '00' : splitTime[1] + '0';
                    time = `${splitTime[0]}${delimiter}${minutes}${new Date().getHours() > 11 ? 'pm' : 'am'}`;
                }
                else if (!is24Hour &&
                    splitTime.length > 1 &&
                    splitTime[1].length === 2 &&
                    !time.toLowerCase().includes('am') &&
                    !time.toLowerCase().includes('pm')) {
                    time = `${time}${new Date().getHours() > 11 ? 'pm' : 'am'}`;
                }
                let scrollIndex = this.getOptions().findIndex(option => option.innerText.includes(time.toLowerCase()));
                // if we found an exact match, scroll to match and return index of match for focus
                if (scrollIndex !== -1) {
                    this.scrollToIndex(scrollIndex);
                    focusedIndex = scrollIndex;
                }
                else if (splitTime.length === 2) {
                    // no exact match, scroll to closes match but don't return index for focus
                    const minutes = splitTime[1].length === 1 ? splitTime[1] + '0' : '00';
                    const amPm = !is24Hour
                        ? splitTime[1].toLowerCase().includes('a')
                            ? 'am'
                            : splitTime[1].toLowerCase().includes('p')
                                ? 'pm'
                                : new Date().getHours() > 11
                                    ? 'pm'
                                    : 'am'
                        : '';
                    time = `${splitTime[0]}${delimiter}${minutes}${amPm}`;
                    scrollIndex = this.getOptions().findIndex(option => option.innerText.includes(time));
                    if (scrollIndex !== -1) {
                        this.scrollToIndex(scrollIndex);
                    }
                }
                this.setState({
                    focusedIndex,
                    scrollIndex
                });
            };
            this.getRegExp = () => !this.props.is24Hour
                ? new RegExp(`\\b\\d\\d?${this.props.delimiter}?[0-5]\\d\\s?([AaPp][Mm])?\\b`)
                : new RegExp(`\\b\\d\\d?${this.props.delimiter}?[0-5]\\d\\b`);
            this.getOptions = () => (this.menuRef && this.menuRef.current ? Array.from(this.menuRef.current.children) : []);
            this.onToggle = (isOpen) => {
                // on close, parse and validate input
                this.setState(prevState => {
                    const { timeRegex, isInvalid } = prevState;
                    const { delimiter, is24Hour } = this.props;
                    const time = parseTime(prevState.time, timeRegex, delimiter, !is24Hour);
                    return {
                        isOpen,
                        time,
                        isInvalid: isOpen ? isInvalid : !validateTime(time, timeRegex, delimiter, !is24Hour)
                    };
                });
            };
            this.onSelect = (selection, index) => {
                const { timeRegex } = this.state;
                const { delimiter, is24Hour } = this.props;
                const time = parseTime(selection, timeRegex, delimiter, !is24Hour);
                this.setState({
                    time,
                    isInvalid: !validateTime(time, timeRegex, delimiter, !is24Hour),
                    isOpen: false,
                    focusedIndex: index,
                    scrollIndex: index
                });
            };
            this.onInputFocus = (e) => {
                if (!this.state.isOpen) {
                    this.onToggle(true);
                }
                e.stopPropagation();
            };
            this.onInputChange = (time, event) => {
                if (this.props.onChange) {
                    this.props.onChange(time, event);
                }
                this.scrollToSelection(time);
                this.setState({
                    time,
                    isInvalid: false
                });
            };
            this.onBlur = (event) => {
                const { timeRegex } = this.state;
                const { delimiter, is24Hour } = this.props;
                this.setState({
                    isInvalid: !validateTime(parseTime(event.currentTarget.value, timeRegex, delimiter, !is24Hour), timeRegex, delimiter, !is24Hour)
                });
            };
            const { is24Hour, delimiter, defaultTime } = this.props;
            const timeRegex = this.getRegExp();
            this.state = {
                isInvalid: false,
                isOpen: false,
                time: parseTime(defaultTime, timeRegex, delimiter, !is24Hour),
                focusedIndex: null,
                scrollIndex: 0,
                timeRegex
            };
        }
        componentDidMount() {
            document.addEventListener('mousedown', this.onDocClick);
            document.addEventListener('touchstart', this.onDocClick);
            document.addEventListener('keydown', this.handleGlobalKeys);
        }
        componentWillUnmount() {
            document.removeEventListener('mousedown', this.onDocClick);
            document.removeEventListener('touchstart', this.onDocClick);
            document.removeEventListener('keydown', this.handleGlobalKeys);
        }
        componentDidUpdate(prevProps, prevState) {
            const { time, isOpen, isInvalid, timeRegex } = this.state;
            const { defaultTime, is24Hour, delimiter } = this.props;
            if (isOpen && !prevState.isOpen && time && !isInvalid) {
                this.scrollToSelection(time);
            }
            if (delimiter !== prevProps.delimiter) {
                this.setState({
                    timeRegex: this.getRegExp()
                });
            }
            if (defaultTime !== '' && defaultTime !== prevProps.defaultTime) {
                this.setState({
                    time: parseTime(defaultTime, timeRegex, delimiter, !is24Hour)
                });
            }
        }
        render() {
            const _a = this.props, { 'aria-label': ariaLabel, isDisabled, className, placeholder, id, menuAppendTo, is24Hour, invalidFormatErrorMessage, direction, stepMinutes, width, delimiter, 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            onChange, defaultTime } = _a, props = __rest(_a, ['aria-label', "isDisabled", "className", "placeholder", "id", "menuAppendTo", "is24Hour", "invalidFormatErrorMessage", "direction", "stepMinutes", "width", "delimiter", "onChange", "defaultTime"]);
            const { time, isOpen, isInvalid, focusedIndex } = this.state;
            const style = { '--pf-c-date-picker__input--c-form-control--Width': width };
            const options = makeTimeOptions(stepMinutes, !is24Hour, delimiter);
            const randomId = id || getUniqueId('time-picker');
            const menuContainer = (React.createElement("ul", { ref: this.menuRef, className: css(styles$i.selectMenu), role: "listbox", "aria-labelledby": `${id}-input`, style: { maxHeight: '200px', overflowY: 'auto' } }, options.map((option, index) => (React.createElement(TimeOption, { key: index, value: option, index: index, onSelect: this.onSelect, isFocused: index === focusedIndex, id: `${id}-option-${index}` })))));
            const inputAndToggle = (React.createElement("div", Object.assign({ className: css(datePickerStyles.datePickerInput), style: style }, props),
                React.createElement(InputGroup, null,
                    React.createElement("div", { className: css(styles$i.select, isOpen && styles$i.modifiers.expanded, direction === exports.SelectDirection.up && styles$i.modifiers.top, className), id: randomId, ref: this.parentRef },
                        React.createElement("div", { ref: this.toggleRef, className: css(styles$i.selectToggle, isDisabled && styles$i.modifiers.disabled, styles$i.modifiers.typeahead), style: { paddingLeft: '0' } },
                            React.createElement(TextInput, { className: css(formStyles.formControl, styles$i.selectToggleTypeahead), id: `${randomId}-input`, "aria-label": ariaLabel, validated: isInvalid ? 'error' : 'default', placeholder: placeholder, value: time || '', type: "text", iconVariant: "clock", onClick: this.onInputFocus, onFocus: this.onInputFocus, onChange: this.onInputChange, onBlur: this.onBlur, autoComplete: "off", isDisabled: isDisabled, ref: this.inputRef })),
                        isOpen && menuAppendTo === 'inline' && menuContainer)),
                isInvalid && (React.createElement("div", { className: css(datePickerStyles.datePickerHelperText, datePickerStyles.modifiers.error) }, invalidFormatErrorMessage))));
            const popperContainer = (React.createElement("div", { className: css(styles$i.select, isOpen && styles$i.modifiers.expanded, className) }, isOpen && menuContainer));
            return (React.createElement("div", { className: css(datePickerStyles.datePicker, className) }, menuAppendTo === 'inline' ? (inputAndToggle) : (React.createElement(Popper, { trigger: inputAndToggle, popper: popperContainer, direction: direction, appendTo: menuAppendTo, isVisible: isOpen }))));
        }
    }
    TimePicker.displayName = 'TimePicker';
    TimePicker.defaultProps = {
        className: '',
        isDisabled: false,
        defaultTime: '',
        is24Hour: false,
        invalidFormatErrorMessage: 'Invalid time format',
        placeholder: 'hh:mm',
        delimiter: ':',
        'aria-label': 'Time picker',
        menuAppendTo: 'inline',
        direction: 'down',
        width: 150,
        stepMinutes: 30
    };

    var toggleGroup = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "modifiers": {
        "light": "pf-m-light",
        "selected": "pf-m-selected",
        "disabled": "pf-m-disabled"
      },
      "toggleGroup": "pf-c-toggle-group",
      "toggleGroupButton": "pf-c-toggle-group__button",
      "toggleGroupIcon": "pf-c-toggle-group__icon",
      "toggleGroupItem": "pf-c-toggle-group__item",
      "toggleGroupText": "pf-c-toggle-group__text"
    };
    });

    var styles$Y = unwrapExports(toggleGroup);

    const ToggleGroupContext = React.createContext({
        variant: 'default'
    });

    (function (ToggleGroupVariant) {
        ToggleGroupVariant["default"] = "default";
        ToggleGroupVariant["light"] = "light";
    })(exports.ToggleGroupVariant || (exports.ToggleGroupVariant = {}));
    const ToggleGroup = (_a) => {
        var { className, children, variant = exports.ToggleGroupVariant.default, 'aria-label': ariaLabel } = _a, props = __rest(_a, ["className", "children", "variant", 'aria-label']);
        const toggleGroupItemList = [];
        const length = React.Children.count(children);
        React.Children.forEach(children, (child, index) => {
            toggleGroupItemList.push(child);
            const dividerKey = `${index} divider`;
            if (index !== length - 1) {
                toggleGroupItemList.push(React.createElement(Divider, { key: dividerKey, isVertical: true, component: "div" }));
            }
        });
        return (React.createElement(ToggleGroupContext.Provider, { value: { variant } },
            React.createElement("div", Object.assign({ className: css(styles$Y.toggleGroup, className), role: "group", "aria-label": ariaLabel }, props), toggleGroupItemList)));
    };
    ToggleGroup.displayName = 'ToggleGroup';

    var ToggleGroupItemVariant;
    (function (ToggleGroupItemVariant) {
        ToggleGroupItemVariant["icon"] = "icon";
        ToggleGroupItemVariant["text"] = "text";
    })(ToggleGroupItemVariant || (ToggleGroupItemVariant = {}));
    const ToggleGroupItemElement = ({ variant, children }) => (React.createElement("span", { className: css(variant === 'icon' && styles$Y.toggleGroupIcon, variant === 'text' && styles$Y.toggleGroupText) }, children));
    ToggleGroupItemElement.displayName = 'ToggleGroupItemElement';

    const ToggleGroupItem = (_a) => {
        var { text, icon, className, isDisabled = false, isSelected = false, 'aria-label': ariaLabel = '', onChange = () => { }, buttonId = '' } = _a, props = __rest(_a, ["text", "icon", "className", "isDisabled", "isSelected", 'aria-label', "onChange", "buttonId"]);
        const toggleGroupContext = React.useContext(ToggleGroupContext);
        const handleChange = (event) => {
            onChange(!isSelected, event);
        };
        if (!ariaLabel && icon && !text) {
            /* eslint-disable no-console */
            console.warn('An accessible aria-label is required when using the toggle group item icon variant.');
        }
        return (React.createElement("div", Object.assign({ className: css(styles$Y.toggleGroupItem, className) }, props),
            React.createElement("button", Object.assign({ className: css(styles$Y.toggleGroupButton, toggleGroupContext.variant === 'light' && styles$Y.modifiers.light, isSelected && styles$Y.modifiers.selected), "aria-pressed": isSelected, onClick: handleChange }, (ariaLabel && { 'aria-label': ariaLabel }), (isDisabled && { disabled: true }), (buttonId && { id: buttonId })),
                icon ? React.createElement(ToggleGroupItemElement, { variant: ToggleGroupItemVariant.icon }, icon) : null,
                text ? React.createElement(ToggleGroupItemElement, { variant: ToggleGroupItemVariant.text }, text) : null)));
    };
    ToggleGroupItem.displayName = 'ToggleGroupItem';

    var toolbar = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "button": "pf-c-button",
      "chipGroup": "pf-c-chip-group",
      "divider": "pf-c-divider",
      "modifiers": {
        "pageInsets": "pf-m-page-insets",
        "vertical": "pf-m-vertical",
        "buttonGroup": "pf-m-button-group",
        "iconButtonGroup": "pf-m-icon-button-group",
        "filterGroup": "pf-m-filter-group",
        "toggleGroup": "pf-m-toggle-group",
        "overflowMenu": "pf-m-overflow-menu",
        "bulkSelect": "pf-m-bulk-select",
        "expandAll": "pf-m-expand-all",
        "expanded": "pf-m-expanded",
        "searchFilter": "pf-m-search-filter",
        "chipGroup": "pf-m-chip-group",
        "label": "pf-m-label",
        "pagination": "pf-m-pagination",
        "chipContainer": "pf-m-chip-container",
        "plain": "pf-m-plain",
        "show": "pf-m-show",
        "showOnSm": "pf-m-show-on-sm",
        "showOnMd": "pf-m-show-on-md",
        "showOnLg": "pf-m-show-on-lg",
        "showOnXl": "pf-m-show-on-xl",
        "showOn_2xl": "pf-m-show-on-2xl",
        "alignRight": "pf-m-align-right",
        "alignLeft": "pf-m-align-left",
        "hidden": "pf-m-hidden",
        "visible": "pf-m-visible",
        "nowrap": "pf-m-nowrap",
        "wrap": "pf-m-wrap",
        "alignRightOnSm": "pf-m-align-right-on-sm",
        "alignLeftOnSm": "pf-m-align-left-on-sm",
        "hiddenOnSm": "pf-m-hidden-on-sm",
        "visibleOnSm": "pf-m-visible-on-sm",
        "nowrapOnSm": "pf-m-nowrap-on-sm",
        "wrapOnSm": "pf-m-wrap-on-sm",
        "alignRightOnMd": "pf-m-align-right-on-md",
        "alignLeftOnMd": "pf-m-align-left-on-md",
        "hiddenOnMd": "pf-m-hidden-on-md",
        "visibleOnMd": "pf-m-visible-on-md",
        "nowrapOnMd": "pf-m-nowrap-on-md",
        "wrapOnMd": "pf-m-wrap-on-md",
        "alignRightOnLg": "pf-m-align-right-on-lg",
        "alignLeftOnLg": "pf-m-align-left-on-lg",
        "hiddenOnLg": "pf-m-hidden-on-lg",
        "visibleOnLg": "pf-m-visible-on-lg",
        "nowrapOnLg": "pf-m-nowrap-on-lg",
        "wrapOnLg": "pf-m-wrap-on-lg",
        "alignRightOnXl": "pf-m-align-right-on-xl",
        "alignLeftOnXl": "pf-m-align-left-on-xl",
        "hiddenOnXl": "pf-m-hidden-on-xl",
        "visibleOnXl": "pf-m-visible-on-xl",
        "nowrapOnXl": "pf-m-nowrap-on-xl",
        "wrapOnXl": "pf-m-wrap-on-xl",
        "alignRightOn_2xl": "pf-m-align-right-on-2xl",
        "alignLeftOn_2xl": "pf-m-align-left-on-2xl",
        "hiddenOn_2xl": "pf-m-hidden-on-2xl",
        "visibleOn_2xl": "pf-m-visible-on-2xl",
        "nowrapOn_2xl": "pf-m-nowrap-on-2xl",
        "wrapOn_2xl": "pf-m-wrap-on-2xl",
        "spaceItemsNone": "pf-m-space-items-none",
        "spaceItemsSm": "pf-m-space-items-sm",
        "spaceItemsMd": "pf-m-space-items-md",
        "spaceItemsLg": "pf-m-space-items-lg",
        "spaceItemsNoneOnSm": "pf-m-space-items-none-on-sm",
        "spaceItemsSmOnSm": "pf-m-space-items-sm-on-sm",
        "spaceItemsMdOnSm": "pf-m-space-items-md-on-sm",
        "spaceItemsLgOnSm": "pf-m-space-items-lg-on-sm",
        "spaceItemsNoneOnMd": "pf-m-space-items-none-on-md",
        "spaceItemsSmOnMd": "pf-m-space-items-sm-on-md",
        "spaceItemsMdOnMd": "pf-m-space-items-md-on-md",
        "spaceItemsLgOnMd": "pf-m-space-items-lg-on-md",
        "spaceItemsNoneOnLg": "pf-m-space-items-none-on-lg",
        "spaceItemsSmOnLg": "pf-m-space-items-sm-on-lg",
        "spaceItemsMdOnLg": "pf-m-space-items-md-on-lg",
        "spaceItemsLgOnLg": "pf-m-space-items-lg-on-lg",
        "spaceItemsNoneOnXl": "pf-m-space-items-none-on-xl",
        "spaceItemsSmOnXl": "pf-m-space-items-sm-on-xl",
        "spaceItemsMdOnXl": "pf-m-space-items-md-on-xl",
        "spaceItemsLgOnXl": "pf-m-space-items-lg-on-xl",
        "spaceItemsNoneOn_2xl": "pf-m-space-items-none-on-2xl",
        "spaceItemsSmOn_2xl": "pf-m-space-items-sm-on-2xl",
        "spaceItemsMdOn_2xl": "pf-m-space-items-md-on-2xl",
        "spaceItemsLgOn_2xl": "pf-m-space-items-lg-on-2xl",
        "spacerNone": "pf-m-spacer-none",
        "spacerSm": "pf-m-spacer-sm",
        "spacerMd": "pf-m-spacer-md",
        "spacerLg": "pf-m-spacer-lg",
        "spacerNoneOnSm": "pf-m-spacer-none-on-sm",
        "spacerSmOnSm": "pf-m-spacer-sm-on-sm",
        "spacerMdOnSm": "pf-m-spacer-md-on-sm",
        "spacerLgOnSm": "pf-m-spacer-lg-on-sm",
        "spacerNoneOnMd": "pf-m-spacer-none-on-md",
        "spacerSmOnMd": "pf-m-spacer-sm-on-md",
        "spacerMdOnMd": "pf-m-spacer-md-on-md",
        "spacerLgOnMd": "pf-m-spacer-lg-on-md",
        "spacerNoneOnLg": "pf-m-spacer-none-on-lg",
        "spacerSmOnLg": "pf-m-spacer-sm-on-lg",
        "spacerMdOnLg": "pf-m-spacer-md-on-lg",
        "spacerLgOnLg": "pf-m-spacer-lg-on-lg",
        "spacerNoneOnXl": "pf-m-spacer-none-on-xl",
        "spacerSmOnXl": "pf-m-spacer-sm-on-xl",
        "spacerMdOnXl": "pf-m-spacer-md-on-xl",
        "spacerLgOnXl": "pf-m-spacer-lg-on-xl",
        "spacerNoneOn_2xl": "pf-m-spacer-none-on-2xl",
        "spacerSmOn_2xl": "pf-m-spacer-sm-on-2xl",
        "spacerMdOn_2xl": "pf-m-spacer-md-on-2xl",
        "spacerLgOn_2xl": "pf-m-spacer-lg-on-2xl",
        "insetNone": "pf-m-inset-none",
        "insetSm": "pf-m-inset-sm",
        "insetMd": "pf-m-inset-md",
        "insetLg": "pf-m-inset-lg",
        "insetXl": "pf-m-inset-xl",
        "inset_2xl": "pf-m-inset-2xl",
        "insetNoneOnSm": "pf-m-inset-none-on-sm",
        "insetSmOnSm": "pf-m-inset-sm-on-sm",
        "insetMdOnSm": "pf-m-inset-md-on-sm",
        "insetLgOnSm": "pf-m-inset-lg-on-sm",
        "insetXlOnSm": "pf-m-inset-xl-on-sm",
        "inset_2xlOnSm": "pf-m-inset-2xl-on-sm",
        "insetNoneOnMd": "pf-m-inset-none-on-md",
        "insetSmOnMd": "pf-m-inset-sm-on-md",
        "insetMdOnMd": "pf-m-inset-md-on-md",
        "insetLgOnMd": "pf-m-inset-lg-on-md",
        "insetXlOnMd": "pf-m-inset-xl-on-md",
        "inset_2xlOnMd": "pf-m-inset-2xl-on-md",
        "insetNoneOnLg": "pf-m-inset-none-on-lg",
        "insetSmOnLg": "pf-m-inset-sm-on-lg",
        "insetMdOnLg": "pf-m-inset-md-on-lg",
        "insetLgOnLg": "pf-m-inset-lg-on-lg",
        "insetXlOnLg": "pf-m-inset-xl-on-lg",
        "inset_2xlOnLg": "pf-m-inset-2xl-on-lg",
        "insetNoneOnXl": "pf-m-inset-none-on-xl",
        "insetSmOnXl": "pf-m-inset-sm-on-xl",
        "insetMdOnXl": "pf-m-inset-md-on-xl",
        "insetLgOnXl": "pf-m-inset-lg-on-xl",
        "insetXlOnXl": "pf-m-inset-xl-on-xl",
        "inset_2xlOnXl": "pf-m-inset-2xl-on-xl",
        "insetNoneOn_2xl": "pf-m-inset-none-on-2xl",
        "insetSmOn_2xl": "pf-m-inset-sm-on-2xl",
        "insetMdOn_2xl": "pf-m-inset-md-on-2xl",
        "insetLgOn_2xl": "pf-m-inset-lg-on-2xl",
        "insetXlOn_2xl": "pf-m-inset-xl-on-2xl",
        "inset_2xlOn_2xl": "pf-m-inset-2xl-on-2xl"
      },
      "pagination": "pf-c-pagination",
      "toolbar": "pf-c-toolbar",
      "toolbarContent": "pf-c-toolbar__content",
      "toolbarContentSection": "pf-c-toolbar__content-section",
      "toolbarExpandAllIcon": "pf-c-toolbar__expand-all-icon",
      "toolbarExpandableContent": "pf-c-toolbar__expandable-content",
      "toolbarGroup": "pf-c-toolbar__group",
      "toolbarItem": "pf-c-toolbar__item",
      "toolbarToggle": "pf-c-toolbar__toggle"
    };
    });

    var styles$Z = unwrapExports(toolbar);

    const ToolbarContext = React.createContext({
        isExpanded: false,
        toggleIsExpanded: () => { },
        chipGroupContentRef: null,
        updateNumberFilters: () => { },
        numberOfFilters: 0,
        clearAllFilters: () => { }
    });
    const ToolbarContentContext = React.createContext({
        expandableContentRef: null,
        expandableContentId: '',
        chipContainerRef: null
    });
    const globalBreakpoints = {
        md: parseInt(global_breakpoint_md.value),
        lg: parseInt(global_breakpoint_lg.value),
        xl: parseInt(global_breakpoint_xl.value),
        '2xl': parseInt(global_breakpoint_2xl.value)
    };

    (function (ToolbarItemVariant) {
        ToolbarItemVariant["separator"] = "separator";
        ToolbarItemVariant["bulk-select"] = "bulk-select";
        ToolbarItemVariant["overflow-menu"] = "overflow-menu";
        ToolbarItemVariant["pagination"] = "pagination";
        ToolbarItemVariant["search-filter"] = "search-filter";
        ToolbarItemVariant["label"] = "label";
        ToolbarItemVariant["chip-group"] = "chip-group";
        ToolbarItemVariant["expand-all"] = "expand-all";
    })(exports.ToolbarItemVariant || (exports.ToolbarItemVariant = {}));
    const ToolbarItem = (_a) => {
        var { className, variant, visibility, visiblity, alignment, spacer, id, children, isAllExpanded } = _a, props = __rest(_a, ["className", "variant", "visibility", "visiblity", "alignment", "spacer", "id", "children", "isAllExpanded"]);
        if (variant === exports.ToolbarItemVariant.separator) {
            return React.createElement(Divider, Object.assign({ className: css(styles$Z.modifiers.vertical, className) }, props));
        }
        if (visiblity !== undefined) {
            // eslint-disable-next-line no-console
            console.warn('The ToolbarItem visiblity prop has been deprecated. ' +
                'Please use the correctly spelled visibility prop instead.');
        }
        return (React.createElement("div", Object.assign({ className: css(styles$Z.toolbarItem, variant &&
                styles$Z.modifiers[toCamel(variant)], isAllExpanded && styles$Z.modifiers.expanded, formatBreakpointMods(visibility || visiblity, styles$Z), formatBreakpointMods(alignment, styles$Z), formatBreakpointMods(spacer, styles$Z), className) }, (variant === 'label' && { 'aria-hidden': true }), { id: id }, props), children));
    };
    ToolbarItem.displayName = 'ToolbarItem';

    (function (ToolbarGroupVariant) {
        ToolbarGroupVariant["filter-group"] = "filter-group";
        ToolbarGroupVariant["icon-button-group"] = "icon-button-group";
        ToolbarGroupVariant["button-group"] = "button-group";
    })(exports.ToolbarGroupVariant || (exports.ToolbarGroupVariant = {}));
    class ToolbarGroupWithRef extends React.Component {
        render() {
            const _a = this.props, { visibility, visiblity, alignment, spacer, spaceItems, className, variant, children, innerRef } = _a, props = __rest(_a, ["visibility", "visiblity", "alignment", "spacer", "spaceItems", "className", "variant", "children", "innerRef"]);
            if (visiblity !== undefined) {
                // eslint-disable-next-line no-console
                console.warn('The ToolbarGroup visiblity prop has been deprecated. ' +
                    'Please use the correctly spelled visibility prop instead.');
            }
            return (React.createElement("div", Object.assign({ className: css(styles$Z.toolbarGroup, variant && styles$Z.modifiers[toCamel(variant)], formatBreakpointMods(visibility || visiblity, styles$Z), formatBreakpointMods(alignment, styles$Z), formatBreakpointMods(spacer, styles$Z), formatBreakpointMods(spaceItems, styles$Z), className) }, props, { ref: innerRef }), children));
        }
    }
    const ToolbarGroup = React.forwardRef((props, ref) => (React.createElement(ToolbarGroupWithRef, Object.assign({}, props, { innerRef: ref }))));

    class ToolbarChipGroupContent extends React.Component {
        render() {
            const _a = this.props, { className, isExpanded, chipGroupContentRef, clearAllFilters, showClearFiltersButton, clearFiltersButtonText, collapseListedFiltersBreakpoint, numberOfFilters } = _a, props = __rest(_a, ["className", "isExpanded", "chipGroupContentRef", "clearAllFilters", "showClearFiltersButton", "clearFiltersButtonText", "collapseListedFiltersBreakpoint", "numberOfFilters"]);
            const clearChipGroups = () => {
                clearAllFilters();
            };
            const collapseListedFilters = collapseListedFiltersBreakpoint === 'all'
                ? true
                : typeof window !== 'undefined'
                    ? window.innerWidth < globalBreakpoints[collapseListedFiltersBreakpoint]
                    : false;
            return (React.createElement("div", Object.assign({ className: css(styles$Z.toolbarContent, (numberOfFilters === 0 || isExpanded) && styles$Z.modifiers.hidden, className) }, ((numberOfFilters === 0 || isExpanded) && { hidden: true }), { ref: chipGroupContentRef }, props),
                React.createElement(ToolbarGroup, Object.assign({ className: css(collapseListedFilters && styles$Z.modifiers.hidden) }, (collapseListedFilters && { hidden: true }), (collapseListedFilters && { 'aria-hidden': true }))),
                collapseListedFilters && numberOfFilters > 0 && !isExpanded && (React.createElement(ToolbarGroup, null,
                    React.createElement(ToolbarItem, null,
                        numberOfFilters,
                        " filters applied"))),
                showClearFiltersButton && !isExpanded && (React.createElement(ToolbarItem, null,
                    React.createElement(Button, { variant: "link", onClick: clearChipGroups, isInline: true }, clearFiltersButtonText)))));
        }
    }
    ToolbarChipGroupContent.displayName = 'ToolbarChipGroupContent';
    ToolbarChipGroupContent.defaultProps = {
        clearFiltersButtonText: 'Clear all filters',
        collapseListedFiltersBreakpoint: 'lg'
    };

    class Toolbar extends React.Component {
        constructor() {
            super(...arguments);
            this.chipGroupContentRef = React.createRef();
            this.staticFilterInfo = {};
            this.state = {
                isManagedToggleExpanded: false,
                filterInfo: {}
            };
            this.isToggleManaged = () => !(this.props.isExpanded || !!this.props.toggleIsExpanded);
            this.toggleIsExpanded = () => {
                this.setState(prevState => ({
                    isManagedToggleExpanded: !prevState.isManagedToggleExpanded
                }));
            };
            this.closeExpandableContent = () => {
                this.setState(() => ({
                    isManagedToggleExpanded: false
                }));
            };
            this.updateNumberFilters = (categoryName, numberOfFilters) => {
                const filterInfoToUpdate = Object.assign({}, this.staticFilterInfo);
                if (!filterInfoToUpdate.hasOwnProperty(categoryName) || filterInfoToUpdate[categoryName] !== numberOfFilters) {
                    filterInfoToUpdate[categoryName] = numberOfFilters;
                    this.staticFilterInfo = filterInfoToUpdate;
                    this.setState({ filterInfo: filterInfoToUpdate });
                }
            };
            this.getNumberOfFilters = () => Object.values(this.state.filterInfo).reduce((acc, cur) => acc + cur, 0);
            this.renderToolbar = (randomId) => {
                const _a = this.props, { clearAllFilters, clearFiltersButtonText, collapseListedFiltersBreakpoint, isExpanded: isExpandedProp, toggleIsExpanded, className, children, inset, usePageInsets } = _a, props = __rest(_a, ["clearAllFilters", "clearFiltersButtonText", "collapseListedFiltersBreakpoint", "isExpanded", "toggleIsExpanded", "className", "children", "inset", "usePageInsets"]);
                const { isManagedToggleExpanded } = this.state;
                const isToggleManaged = this.isToggleManaged();
                const isExpanded = isToggleManaged ? isManagedToggleExpanded : isExpandedProp;
                const numberOfFilters = this.getNumberOfFilters();
                const showClearFiltersButton = numberOfFilters > 0;
                return (React.createElement("div", Object.assign({ className: css(styles$Z.toolbar, usePageInsets && styles$Z.modifiers.pageInsets, formatBreakpointMods(inset, styles$Z), className), id: randomId }, props),
                    React.createElement(ToolbarContext.Provider, { value: {
                            isExpanded,
                            toggleIsExpanded: isToggleManaged ? this.toggleIsExpanded : toggleIsExpanded,
                            chipGroupContentRef: this.chipGroupContentRef,
                            updateNumberFilters: this.updateNumberFilters,
                            numberOfFilters,
                            clearAllFilters,
                            clearFiltersButtonText,
                            showClearFiltersButton,
                            toolbarId: randomId
                        } },
                        children,
                        React.createElement(ToolbarChipGroupContent, { isExpanded: isExpanded, chipGroupContentRef: this.chipGroupContentRef, clearAllFilters: clearAllFilters, showClearFiltersButton: showClearFiltersButton, clearFiltersButtonText: clearFiltersButtonText, numberOfFilters: numberOfFilters, collapseListedFiltersBreakpoint: collapseListedFiltersBreakpoint }))));
            };
        }
        componentDidMount() {
            if (this.isToggleManaged()) {
                window.addEventListener('resize', this.closeExpandableContent);
            }
        }
        componentWillUnmount() {
            if (this.isToggleManaged()) {
                window.removeEventListener('resize', this.closeExpandableContent);
            }
        }
        render() {
            return this.props.id ? (this.renderToolbar(this.props.id)) : (React.createElement(GenerateId, null, randomId => this.renderToolbar(randomId)));
        }
    }
    Toolbar.displayName = 'Toolbar';

    class ToolbarExpandableContent extends React.Component {
        render() {
            const _a = this.props, { className, expandableContentRef, chipContainerRef, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            isExpanded, clearAllFilters, clearFiltersButtonText, showClearFiltersButton } = _a, props = __rest(_a, ["className", "expandableContentRef", "chipContainerRef", "isExpanded", "clearAllFilters", "clearFiltersButtonText", "showClearFiltersButton"]);
            const { numberOfFilters } = this.context;
            const clearChipGroups = () => {
                clearAllFilters();
            };
            return (React.createElement("div", Object.assign({ className: css(styles$Z.toolbarExpandableContent, className), ref: expandableContentRef }, props),
                React.createElement(ToolbarGroup, null),
                numberOfFilters > 0 && (React.createElement(ToolbarGroup, { className: styles$Z.modifiers.chipContainer },
                    React.createElement(ToolbarGroup, { ref: chipContainerRef }),
                    showClearFiltersButton && (React.createElement(ToolbarItem, null,
                        React.createElement(Button, { variant: "link", onClick: clearChipGroups, isInline: true }, clearFiltersButtonText)))))));
        }
    }
    ToolbarExpandableContent.displayName = 'ToolbarExpandableContent';
    ToolbarExpandableContent.contextType = ToolbarContext;
    ToolbarExpandableContent.defaultProps = {
        isExpanded: false,
        clearFiltersButtonText: 'Clear all filters'
    };

    class ToolbarContent extends React.Component {
        constructor() {
            super(...arguments);
            this.expandableContentRef = React.createRef();
            this.chipContainerRef = React.createRef();
        }
        render() {
            const _a = this.props, { className, children, isExpanded, toolbarId, visibility, visiblity, alignment, clearAllFilters, showClearFiltersButton, clearFiltersButtonText } = _a, props = __rest(_a, ["className", "children", "isExpanded", "toolbarId", "visibility", "visiblity", "alignment", "clearAllFilters", "showClearFiltersButton", "clearFiltersButtonText"]);
            if (visiblity !== undefined) {
                // eslint-disable-next-line no-console
                console.warn('The ToolbarContent visiblity prop has been deprecated. ' +
                    'Please use the correctly spelled visibility prop instead.');
            }
            return (React.createElement("div", Object.assign({ className: css(styles$Z.toolbarContent, formatBreakpointMods(visibility || visiblity, styles$Z), formatBreakpointMods(alignment, styles$Z), className) }, props),
                React.createElement(ToolbarContext.Consumer, null, ({ clearAllFilters: clearAllFiltersContext, clearFiltersButtonText: clearFiltersButtonContext, showClearFiltersButton: showClearFiltersButtonContext, toolbarId: toolbarIdContext }) => {
                    const expandableContentId = `${toolbarId ||
                    toolbarIdContext}-expandable-content-${ToolbarContent.currentId++}`;
                    return (React.createElement(ToolbarContentContext.Provider, { value: {
                            expandableContentRef: this.expandableContentRef,
                            expandableContentId,
                            chipContainerRef: this.chipContainerRef
                        } },
                        React.createElement("div", { className: css(styles$Z.toolbarContentSection) }, children),
                        React.createElement(ToolbarExpandableContent, { id: expandableContentId, isExpanded: isExpanded, expandableContentRef: this.expandableContentRef, chipContainerRef: this.chipContainerRef, clearAllFilters: clearAllFilters || clearAllFiltersContext, showClearFiltersButton: showClearFiltersButton || showClearFiltersButtonContext, clearFiltersButtonText: clearFiltersButtonText || clearFiltersButtonContext })));
                })));
        }
    }
    ToolbarContent.displayName = 'ToolbarContent';
    ToolbarContent.currentId = 0;
    ToolbarContent.defaultProps = {
        isExpanded: false,
        showClearFiltersButton: false
    };

    const ToolbarExpandIconWrapper = (_a) => {
        var { children, className } = _a, props = __rest(_a, ["children", "className"]);
        return (React.createElement("span", Object.assign({}, props, { className: css(styles$Z.toolbarExpandAllIcon, className) }), children));
    };
    ToolbarExpandIconWrapper.displayName = 'ToolbarExpandIconWrapper';

    class ToolbarFilter extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isMounted: false
            };
        }
        componentDidMount() {
            const { categoryName, chips } = this.props;
            this.context.updateNumberFilters(typeof categoryName === 'string' ? categoryName : categoryName.name, chips.length);
            this.setState({ isMounted: true });
        }
        componentDidUpdate() {
            const { categoryName, chips } = this.props;
            this.context.updateNumberFilters(typeof categoryName === 'string' ? categoryName : categoryName.name, chips.length);
        }
        render() {
            const _a = this.props, { children, chips, deleteChipGroup, deleteChip, categoryName, showToolbarItem } = _a, props = __rest(_a, ["children", "chips", "deleteChipGroup", "deleteChip", "categoryName", "showToolbarItem"]);
            const { isExpanded, chipGroupContentRef } = this.context;
            const categoryKey = typeof categoryName !== 'string' && categoryName.hasOwnProperty('key')
                ? categoryName.key
                : categoryName.toString();
            const chipGroup = chips.length ? (React.createElement(ToolbarItem, { variant: "chip-group" },
                React.createElement(ChipGroup, { key: categoryKey, categoryName: typeof categoryName === 'string' ? categoryName : categoryName.name, isClosable: deleteChipGroup !== undefined, onClick: () => deleteChipGroup(categoryName) }, chips.map(chip => typeof chip === 'string' ? (React.createElement(Chip, { key: chip, onClick: () => deleteChip(categoryKey, chip) }, chip)) : (React.createElement(Chip, { key: chip.key, onClick: () => deleteChip(categoryKey, chip) }, chip.node)))))) : null;
            if (!isExpanded && this.state.isMounted) {
                return (React.createElement(React.Fragment, null,
                    showToolbarItem && React.createElement(ToolbarItem, Object.assign({}, props), children),
                    ReactDOM.createPortal(chipGroup, chipGroupContentRef.current.firstElementChild)));
            }
            return (React.createElement(ToolbarContentContext.Consumer, null, ({ chipContainerRef }) => (React.createElement(React.Fragment, null,
                showToolbarItem && React.createElement(ToolbarItem, Object.assign({}, props), children),
                chipContainerRef.current && ReactDOM.createPortal(chipGroup, chipContainerRef.current)))));
        }
    }
    ToolbarFilter.displayName = 'ToolbarFilter';
    ToolbarFilter.contextType = ToolbarContext;
    ToolbarFilter.defaultProps = {
        chips: [],
        showToolbarItem: true
    };

    class ToolbarToggleGroup extends React.Component {
        constructor() {
            super(...arguments);
            this.isContentPopup = () => {
                const viewportSize = window.innerWidth;
                const lgBreakpointValue = parseInt(global_breakpoint_lg.value);
                return viewportSize < lgBreakpointValue;
            };
        }
        render() {
            const _a = this.props, { toggleIcon, variant, visibility, visiblity, breakpoint, alignment, spacer, spaceItems, className, children } = _a, props = __rest(_a, ["toggleIcon", "variant", "visibility", "visiblity", "breakpoint", "alignment", "spacer", "spaceItems", "className", "children"]);
            if (!breakpoint && !toggleIcon) {
                // eslint-disable-next-line no-console
                console.error('ToolbarToggleGroup will not be visible without a breakpoint or toggleIcon.');
            }
            if (visiblity !== undefined) {
                // eslint-disable-next-line no-console
                console.warn('The ToolbarToggleGroup visiblity prop has been deprecated. ' +
                    'Please use the correctly spelled visibility prop instead.');
            }
            return (React.createElement(ToolbarContext.Consumer, null, ({ isExpanded, toggleIsExpanded }) => (React.createElement(ToolbarContentContext.Consumer, null, ({ expandableContentRef, expandableContentId }) => {
                if (expandableContentRef.current && expandableContentRef.current.classList) {
                    if (isExpanded) {
                        expandableContentRef.current.classList.add(styles$Z.modifiers.expanded);
                    }
                    else {
                        expandableContentRef.current.classList.remove(styles$Z.modifiers.expanded);
                    }
                }
                return (React.createElement("div", Object.assign({ className: css(styles$Z.toolbarGroup, styles$Z.modifiers.toggleGroup, variant && styles$Z.modifiers[toCamel(variant)], breakpoint &&
                        styles$Z.modifiers[`showOn${capitalize(breakpoint.replace('2xl', '_2xl'))}`], formatBreakpointMods(visibility || visiblity, styles$Z), formatBreakpointMods(alignment, styles$Z), formatBreakpointMods(spacer, styles$Z), formatBreakpointMods(spaceItems, styles$Z), className) }, props),
                    React.createElement("div", { className: css(styles$Z.toolbarToggle) },
                        React.createElement(Button, Object.assign({ variant: "plain", onClick: toggleIsExpanded, "aria-label": "Show Filters" }, (isExpanded && { 'aria-expanded': true }), { "aria-haspopup": isExpanded && this.isContentPopup(), "aria-controls": expandableContentId }), toggleIcon)),
                    isExpanded
                        ? ReactDOM.createPortal(children, expandableContentRef.current.firstElementChild)
                        : children));
            }))));
        }
    }
    ToolbarToggleGroup.displayName = 'ToolbarToggleGroup';

    var touchspin = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "formControl": "pf-c-form-control",
      "inputGroup": "pf-c-input-group",
      "touchspin": "pf-c-touchspin",
      "touchspinIcon": "pf-c-touchspin__icon",
      "touchspinUnit": "pf-c-touchspin__unit"
    };
    });

    var styles$_ = unwrapExports(touchspin);

    const MinusIconConfig = {
      name: 'MinusIcon',
      height: 512,
      width: 448,
      svgPath: 'M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z',
      yOffset: 0,
      xOffset: 0,
    };

    const MinusIcon = createIcon(MinusIconConfig);

    const PlusIconConfig = {
      name: 'PlusIcon',
      height: 512,
      width: 448,
      svgPath: 'M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z',
      yOffset: 0,
      xOffset: 0,
    };

    const PlusIcon = createIcon(PlusIconConfig);

    const Touchspin = (_a) => {
        var { value = 0, className, widthChars, isDisabled = false, onMinus, onChange, onPlus, unit, unitPosition = 'after', min, max, inputName, inputAriaLabel = 'Input', minusBtnAriaLabel = 'Minus', plusBtnAriaLabel = 'Plus', inputProps, minusBtnProps, plusBtnProps } = _a, props = __rest(_a, ["value", "className", "widthChars", "isDisabled", "onMinus", "onChange", "onPlus", "unit", "unitPosition", "min", "max", "inputName", "inputAriaLabel", "minusBtnAriaLabel", "plusBtnAriaLabel", "inputProps", "minusBtnProps", "plusBtnProps"]);
        const touchspinUnit = React.createElement("div", { className: css(styles$_.touchspinUnit) }, unit);
        return (React.createElement("div", Object.assign({ className: css(styles$_.touchspin, className) }, (widthChars && {
            style: Object.assign({ '--pf-c-touchspin--c-form-control--width-chars': widthChars }, props.style)
        }), props),
            unit && unitPosition === 'before' && touchspinUnit,
            React.createElement("div", { className: css(styles$_.inputGroup) },
                React.createElement(Button, Object.assign({ variant: "control", "aria-label": minusBtnAriaLabel, isDisabled: isDisabled || value === min, onClick: evt => onMinus(evt, inputName) }, minusBtnProps),
                    React.createElement("span", { className: css(styles$_.touchspinIcon) },
                        React.createElement(MinusIcon, { "aria-hidden": "true" }))),
                React.createElement("input", Object.assign({ className: css(styles$_.formControl), type: "text", value: value, name: inputName, "aria-label": inputAriaLabel }, (isDisabled && { disabled: isDisabled }), (onChange && { onChange }), (!onChange && { readOnly: true }), inputProps)),
                React.createElement(Button, Object.assign({ variant: "control", "aria-label": plusBtnAriaLabel, isDisabled: isDisabled || value === max, onClick: evt => onPlus(evt, inputName) }, plusBtnProps),
                    React.createElement("span", { className: css(styles$_.touchspinIcon) },
                        React.createElement(PlusIcon, { "aria-hidden": "true" })))),
            unit && unitPosition === 'after' && touchspinUnit));
    };
    Touchspin.displayName = 'Touchspin';

    var treeView = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "badge": "pf-c-badge",
      "modifiers": {
        "expanded": "pf-m-expanded",
        "current": "pf-m-current",
        "read": "pf-m-read"
      },
      "treeView": "pf-c-tree-view",
      "treeViewAction": "pf-c-tree-view__action",
      "treeViewContent": "pf-c-tree-view__content",
      "treeViewListItem": "pf-c-tree-view__list-item",
      "treeViewNode": "pf-c-tree-view__node",
      "treeViewNodeCheck": "pf-c-tree-view__node-check",
      "treeViewNodeCount": "pf-c-tree-view__node-count",
      "treeViewNodeIcon": "pf-c-tree-view__node-icon",
      "treeViewNodeText": "pf-c-tree-view__node-text",
      "treeViewNodeToggle": "pf-c-tree-view__node-toggle",
      "treeViewNodeToggleIcon": "pf-c-tree-view__node-toggle-icon",
      "treeViewSearch": "pf-c-tree-view__search"
    };
    });

    var styles$$ = unwrapExports(treeView);

    const TreeViewSearch = (_a) => {
        var props = __rest(_a, []);
        return (React.createElement("div", { className: css(styles$$.treeViewSearch) },
            React.createElement("input", Object.assign({ className: css(formStyles.formControl, formStyles.modifiers.search), type: "search" }, props))));
    };
    TreeViewSearch.displayName = 'TreeViewSearch';

    const TreeViewList = (_a) => {
        var { isNested = false, onSearch, searchProps, children } = _a, props = __rest(_a, ["isNested", "onSearch", "searchProps", "children"]);
        return (React.createElement(React.Fragment, null,
            onSearch && (React.createElement(React.Fragment, null,
                React.createElement(TreeViewSearch, Object.assign({ onChange: onSearch }, searchProps)),
                React.createElement(Divider, null))),
            React.createElement("ul", Object.assign({ className: css('pf-c-tree-view__list'), role: isNested ? 'group' : 'tree' }, props), children)));
    };
    TreeViewList.displayName = 'TreeViewList';

    const TreeViewListItem = ({ name, id, defaultExpanded = false, children = null, onSelect, onCheck, hasCheck = false, checkProps = {
        checked: false
    }, hasBadge = false, badgeProps = { isRead: true }, activeItems = [], itemData, parentItem, icon, expandedIcon, action, compareItems }) => {
        const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);
        const Component = hasCheck ? 'div' : 'button';
        const ToggleComponent = hasCheck ? 'button' : 'div';
        return (React__default['default'].createElement("li", Object.assign({ id: id, className: css(styles$$.treeViewListItem, isExpanded && styles$$.modifiers.expanded) }, (isExpanded && { 'aria-expanded': 'true' }), { role: "treeitem", tabIndex: 0 }),
            React__default['default'].createElement("div", { className: css(styles$$.treeViewContent) },
                React__default['default'].createElement(GenerateId, { prefix: "checkbox-id" }, randomId => (React__default['default'].createElement(Component, { className: css(styles$$.treeViewNode, !children &&
                        activeItems &&
                        activeItems.length > 0 &&
                        activeItems.some(item => compareItems && item && compareItems(item, itemData))
                        ? styles$$.modifiers.current
                        : ''), onClick: (evt) => {
                        if (!hasCheck) {
                            if (children) {
                                setIsExpanded(!isExpanded);
                            }
                            onSelect && onSelect(evt, itemData, parentItem);
                        }
                    } },
                    children && (React__default['default'].createElement(ToggleComponent, Object.assign({ className: css(styles$$.treeViewNodeToggle), onClick: () => {
                            if (hasCheck) {
                                setIsExpanded(!isExpanded);
                            }
                        } }, (hasCheck && { 'aria-labelledby': `label-${randomId}` })),
                        React__default['default'].createElement("span", { className: css(styles$$.treeViewNodeToggleIcon) },
                            React__default['default'].createElement(AngleRightIcon, { "aria-hidden": "true" })))),
                    hasCheck && (React__default['default'].createElement("span", { className: css(styles$$.treeViewNodeCheck) },
                        React__default['default'].createElement("input", Object.assign({ type: "checkbox", onChange: (evt) => onCheck && onCheck(evt, itemData, parentItem), onClick: (evt) => evt.stopPropagation(), ref: elem => elem && (elem.indeterminate = checkProps.checked === null) }, checkProps, { id: randomId })))),
                    icon && (React__default['default'].createElement("span", { className: css(styles$$.treeViewNodeIcon) },
                        !isExpanded && icon,
                        isExpanded && (expandedIcon || icon))),
                    hasCheck ? (React__default['default'].createElement("label", { className: css(styles$$.treeViewNodeText), htmlFor: randomId, id: `label-${randomId}` }, name)) : (React__default['default'].createElement("span", { className: css(styles$$.treeViewNodeText) }, name)),
                    hasBadge && children && (React__default['default'].createElement("span", { className: css(styles$$.treeViewNodeCount) },
                        React__default['default'].createElement(Badge, Object.assign({}, badgeProps), children.props.data.length)))))),
                action && React__default['default'].createElement("div", { className: css(styles$$.treeViewAction) }, action)),
            isExpanded && children));
    };
    TreeViewListItem.displayName = 'TreeViewListItem';

    const TreeView = (_a) => {
        var { data, isNested = false, hasChecks = false, hasBadges = false, defaultAllExpanded = false, icon, expandedIcon, parentItem, onSelect, onCheck, onSearch, searchProps, activeItems, compareItems = (item, itemToCheck) => item.id === itemToCheck.id } = _a, props = __rest(_a, ["data", "isNested", "hasChecks", "hasBadges", "defaultAllExpanded", "icon", "expandedIcon", "parentItem", "onSelect", "onCheck", "onSearch", "searchProps", "activeItems", "compareItems"]);
        const treeViewList = (React.createElement(TreeViewList, { isNested: isNested, onSearch: onSearch, searchProps: searchProps }, data.map(item => (React.createElement(TreeViewListItem, Object.assign({ key: item.name.toString(), name: item.name, id: item.id, defaultExpanded: item.defaultExpanded !== undefined ? item.defaultExpanded : defaultAllExpanded, onSelect: onSelect, onCheck: onCheck, hasCheck: item.hasCheck !== undefined ? item.hasCheck : hasChecks, checkProps: item.checkProps, hasBadge: item.hasBadge !== undefined ? item.hasBadge : hasBadges, badgeProps: item.badgeProps, activeItems: activeItems, parentItem: parentItem, itemData: item, icon: item.icon !== undefined ? item.icon : icon, expandedIcon: item.expandedIcon !== undefined ? item.expandedIcon : expandedIcon, action: item.action, compareItems: compareItems }, (item.children && {
            children: (React.createElement(TreeView, { data: item.children, isNested: true, parentItem: item, hasChecks: hasChecks, hasBadges: hasBadges, defaultAllExpanded: defaultAllExpanded, onSelect: onSelect, onCheck: onCheck, activeItems: activeItems, icon: icon, expandedIcon: expandedIcon }))
        })))))));
        return (React.createElement(React.Fragment, null, parentItem ? (treeViewList) : (React.createElement("div", Object.assign({ className: css(styles$$.treeView) }, props), treeViewList))));
    };
    TreeView.displayName = 'TreeView';

    var wizard = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "button": "pf-c-button",
      "card": "pf-c-card",
      "modalBox": "pf-c-modal-box",
      "modifiers": {
        "finished": "pf-m-finished",
        "expanded": "pf-m-expanded",
        "current": "pf-m-current",
        "disabled": "pf-m-disabled",
        "noPadding": "pf-m-no-padding"
      },
      "wizard": "pf-c-wizard",
      "wizardClose": "pf-c-wizard__close",
      "wizardDescription": "pf-c-wizard__description",
      "wizardFooter": "pf-c-wizard__footer",
      "wizardHeader": "pf-c-wizard__header",
      "wizardInnerWrap": "pf-c-wizard__inner-wrap",
      "wizardMain": "pf-c-wizard__main",
      "wizardMainBody": "pf-c-wizard__main-body",
      "wizardNav": "pf-c-wizard__nav",
      "wizardNavItem": "pf-c-wizard__nav-item",
      "wizardNavLink": "pf-c-wizard__nav-link",
      "wizardNavList": "pf-c-wizard__nav-list",
      "wizardOuterWrap": "pf-c-wizard__outer-wrap",
      "wizardTitle": "pf-c-wizard__title",
      "wizardToggle": "pf-c-wizard__toggle",
      "wizardToggleIcon": "pf-c-wizard__toggle-icon",
      "wizardToggleList": "pf-c-wizard__toggle-list",
      "wizardToggleListItem": "pf-c-wizard__toggle-list-item",
      "wizardToggleNum": "pf-c-wizard__toggle-num",
      "wizardToggleSeparator": "pf-c-wizard__toggle-separator"
    };
    });

    var styles$10 = unwrapExports(wizard);

    const WizardFooterInternal = ({ onNext, onBack, onClose, isValid, firstStep, activeStep, nextButtonText, backButtonText, cancelButtonText }) => (React.createElement("footer", { className: css(styles$10.wizardFooter) },
        React.createElement(Button, { variant: exports.ButtonVariant.primary, type: "submit", onClick: onNext, isDisabled: !isValid }, nextButtonText),
        !activeStep.hideBackButton && (React.createElement(Button, { variant: exports.ButtonVariant.secondary, onClick: onBack, className: css(firstStep && 'pf-m-disabled') }, backButtonText)),
        !activeStep.hideCancelButton && (React.createElement(Button, { variant: exports.ButtonVariant.link, onClick: onClose }, cancelButtonText))));
    WizardFooterInternal.displayName = 'WizardFooterInternal';

    const WizardBody = ({ children, hasNoBodyPadding = false, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, mainComponent = 'div' }) => {
        const MainComponent = mainComponent;
        return (React.createElement(MainComponent, { "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, className: css(styles$10.wizardMain) },
            React.createElement("div", { className: css(styles$10.wizardMainBody, hasNoBodyPadding && styles$10.modifiers.noPadding) }, children)));
    };
    WizardBody.displayName = 'WizardBody';

    const WizardToggle = ({ isNavOpen, onNavToggle, nav, steps, activeStep, children, hasNoBodyPadding = false, 'aria-label': ariaLabel = 'Wizard Toggle', mainAriaLabelledBy = null, mainAriaLabel = null, isInPage = true }) => {
        let activeStepIndex;
        let activeStepName;
        let activeStepSubName;
        for (let i = 0; i < steps.length; i++) {
            if ((activeStep.id && steps[i].id === activeStep.id) || steps[i].name === activeStep.name) {
                activeStepIndex = i + 1;
                activeStepName = steps[i].name;
                break;
            }
            else if (steps[i].steps) {
                for (const step of steps[i].steps) {
                    if ((activeStep.id && step.id === activeStep.id) || step.name === activeStep.name) {
                        activeStepIndex = i + 1;
                        activeStepName = steps[i].name;
                        activeStepSubName = step.name;
                        break;
                    }
                }
            }
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("button", { onClick: () => onNavToggle(!isNavOpen), className: css(styles$10.wizardToggle, isNavOpen && 'pf-m-expanded'), "aria-label": ariaLabel, "aria-expanded": isNavOpen },
                React.createElement("ol", { className: css(styles$10.wizardToggleList) },
                    React.createElement("li", { className: css(styles$10.wizardToggleListItem) },
                        React.createElement("span", { className: css(styles$10.wizardToggleNum) }, activeStepIndex),
                        " ",
                        activeStepName,
                        activeStepSubName && React.createElement(AngleRightIcon, { className: css(styles$10.wizardToggleSeparator), "aria-hidden": "true" })),
                    activeStepSubName && React.createElement("li", { className: css(styles$10.wizardToggleListItem) }, activeStepSubName)),
                React.createElement("span", { className: css(styles$10.wizardToggleIcon) },
                    React.createElement(CaretDownIcon, { "aria-hidden": "true" }))),
            React.createElement("div", { className: css(styles$10.wizardOuterWrap) },
                React.createElement("div", { className: css(styles$10.wizardInnerWrap) },
                    nav(isNavOpen),
                    React.createElement(WizardBody, { mainComponent: isInPage ? 'div' : 'main', "aria-label": mainAriaLabel, "aria-labelledby": mainAriaLabelledBy, hasNoBodyPadding: hasNoBodyPadding }, activeStep.component)),
                children)));
    };
    WizardToggle.displayName = 'WizardToggle';

    const WizardNav = ({ children, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, isOpen = false, returnList = false }) => {
        const innerList = React.createElement("ol", { className: css(styles$10.wizardNavList) }, children);
        if (returnList) {
            return innerList;
        }
        return (React.createElement("nav", { className: css(styles$10.wizardNav, isOpen && styles$10.modifiers.expanded), "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy },
            React.createElement("ol", { className: css(styles$10.wizardNavList) }, children)));
    };
    WizardNav.displayName = 'WizardNav';

    const WizardNavItem = (_a) => {
        var { children = null, content = '', isCurrent = false, isDisabled = false, step, onNavItemClick = () => undefined, navItemComponent = 'button', href = null } = _a, rest = __rest(_a, ["children", "content", "isCurrent", "isDisabled", "step", "onNavItemClick", "navItemComponent", "href"]);
        const NavItemComponent = navItemComponent;
        if (navItemComponent === 'a' && !href && 'development' !== 'production') {
            // eslint-disable-next-line no-console
            console.error('WizardNavItem: When using an anchor, please provide an href');
        }
        const btnProps = {
            disabled: isDisabled
        };
        const linkProps = {
            tabIndex: isDisabled ? -1 : undefined,
            href
        };
        return (React.createElement("li", { className: css(styles$10.wizardNavItem) },
            React.createElement(NavItemComponent, Object.assign({}, rest, (navItemComponent === 'a' ? Object.assign({}, linkProps) : Object.assign({}, btnProps)), { onClick: () => onNavItemClick(step), className: css(styles$10.wizardNavLink, isCurrent && 'pf-m-current', isDisabled && 'pf-m-disabled'), "aria-disabled": isDisabled ? true : null, "aria-current": isCurrent && !children ? 'page' : false }), content),
            children));
    };
    WizardNavItem.displayName = 'WizardNavItem';

    const WizardContext = React.createContext({
        goToStepById: () => null,
        goToStepByName: () => null,
        onNext: () => null,
        onBack: () => null,
        onClose: () => null,
        activeStep: { name: null }
    });
    const WizardContextProvider = WizardContext.Provider;
    const WizardContextConsumer = WizardContext.Consumer;

    const WizardHeader = ({ onClose = () => undefined, title, description, hideClose, closeButtonAriaLabel, titleId, descriptionId }) => (React.createElement("div", { className: css(styles$10.wizardHeader) },
        !hideClose && (React.createElement(Button, { variant: "plain", className: css(styles$10.wizardClose), "aria-label": closeButtonAriaLabel, onClick: onClose },
            React.createElement(TimesIcon, { "aria-hidden": "true" }))),
        React.createElement(Title, { headingLevel: "h2", size: "3xl", className: css(styles$10.wizardTitle), "aria-label": title, id: titleId }, title || React.createElement(React.Fragment, null, "\u00A0")),
        description && (React.createElement("p", { className: css(styles$10.wizardDescription), id: descriptionId }, description))));
    WizardHeader.displayName = 'WizardHeader';

    class Wizard extends React.Component {
        constructor(props) {
            super(props);
            this.handleKeyClicks = (event) => {
                if (event.keyCode === KEY_CODES.ESCAPE_KEY) {
                    if (this.state.isNavOpen) {
                        this.setState({ isNavOpen: !this.state.isNavOpen });
                    }
                    else if (this.props.isOpen) {
                        this.props.onClose();
                    }
                }
            };
            this.onNext = () => {
                const { onNext, onClose, onSave } = this.props;
                const { currentStep } = this.state;
                const flattenedSteps = this.getFlattenedSteps();
                const maxSteps = flattenedSteps.length;
                if (currentStep >= maxSteps) {
                    // Hit the save button at the end of the wizard
                    if (onSave) {
                        return onSave();
                    }
                    return onClose();
                }
                else {
                    const newStep = currentStep + 1;
                    this.setState({
                        currentStep: newStep
                    });
                    const { id: prevId, name: prevName } = flattenedSteps[currentStep - 1];
                    const { id, name } = flattenedSteps[newStep - 1];
                    return onNext && onNext({ id, name }, { prevId, prevName });
                }
            };
            this.onBack = () => {
                const { onBack } = this.props;
                const { currentStep } = this.state;
                const flattenedSteps = this.getFlattenedSteps();
                if (flattenedSteps.length < currentStep) {
                    // Previous step was removed, just update the currentStep state
                    const adjustedStep = flattenedSteps.length;
                    this.setState({
                        currentStep: adjustedStep
                    });
                }
                else {
                    const newStep = currentStep - 1 <= 0 ? 0 : currentStep - 1;
                    this.setState({
                        currentStep: newStep
                    });
                    const { id: prevId, name: prevName } = flattenedSteps[newStep];
                    const { id, name } = flattenedSteps[newStep - 1];
                    return onBack && onBack({ id, name }, { prevId, prevName });
                }
            };
            this.goToStep = (step) => {
                const { onGoToStep } = this.props;
                const { currentStep } = this.state;
                const flattenedSteps = this.getFlattenedSteps();
                const maxSteps = flattenedSteps.length;
                if (step < 1) {
                    step = 1;
                }
                else if (step > maxSteps) {
                    step = maxSteps;
                }
                this.setState({ currentStep: step, isNavOpen: false });
                const { id: prevId, name: prevName } = flattenedSteps[currentStep - 1];
                const { id, name } = flattenedSteps[step - 1];
                return onGoToStep && onGoToStep({ id, name }, { prevId, prevName });
            };
            this.goToStepById = (stepId) => {
                const flattenedSteps = this.getFlattenedSteps();
                let step;
                for (let i = 0; i < flattenedSteps.length; i++) {
                    if (flattenedSteps[i].id === stepId) {
                        step = i + 1;
                        break;
                    }
                }
                if (step) {
                    this.setState({ currentStep: step });
                }
            };
            this.goToStepByName = (stepName) => {
                const flattenedSteps = this.getFlattenedSteps();
                let step;
                for (let i = 0; i < flattenedSteps.length; i++) {
                    if (flattenedSteps[i].name === stepName) {
                        step = i + 1;
                        break;
                    }
                }
                if (step) {
                    this.setState({ currentStep: step });
                }
            };
            this.getFlattenedSteps = () => {
                const { steps } = this.props;
                const flattenedSteps = [];
                for (const step of steps) {
                    if (step.steps) {
                        for (const childStep of step.steps) {
                            flattenedSteps.push(childStep);
                        }
                    }
                    else {
                        flattenedSteps.push(step);
                    }
                }
                return flattenedSteps;
            };
            this.getFlattenedStepsIndex = (flattenedSteps, stepName) => {
                for (let i = 0; i < flattenedSteps.length; i++) {
                    if (flattenedSteps[i].name === stepName) {
                        return i + 1;
                    }
                }
                return 0;
            };
            this.initSteps = (steps) => {
                // Set default Step values
                for (let i = 0; i < steps.length; i++) {
                    if (steps[i].steps) {
                        for (let j = 0; j < steps[i].steps.length; j++) {
                            steps[i].steps[j] = Object.assign({ canJumpTo: true }, steps[i].steps[j]);
                        }
                    }
                    steps[i] = Object.assign({ canJumpTo: true }, steps[i]);
                }
                return steps;
            };
            this.getElement = (appendTo) => {
                if (typeof appendTo === 'function') {
                    return appendTo();
                }
                return appendTo || document.body;
            };
            const newId = Wizard.currentId++;
            this.titleId = props.titleId || `pf-wizard-title-${newId}`;
            this.descriptionId = props.descriptionId || `pf-wizard-description-${newId}`;
            this.state = {
                currentStep: this.props.startAtStep && Number.isInteger(this.props.startAtStep) ? this.props.startAtStep : 1,
                isNavOpen: false
            };
        }
        componentDidMount() {
            const target = typeof document !== 'undefined' ? document.body : null;
            if (target) {
                target.addEventListener('keydown', this.handleKeyClicks, false);
            }
        }
        componentWillUnmount() {
            const target = (typeof document !== 'undefined' && document.body) || null;
            if (target) {
                target.removeEventListener('keydown', this.handleKeyClicks, false);
            }
        }
        render() {
            const _a = this.props, { 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            width, height, title, description, onClose, onSave, onBack, onNext, onGoToStep, className, steps, startAtStep, nextButtonText = 'Next', backButtonText = 'Back', cancelButtonText = 'Cancel', hideClose, closeButtonAriaLabel = 'Close', navAriaLabel, navAriaLabelledBy, mainAriaLabel, mainAriaLabelledBy, hasNoBodyPadding, footer, appendTo, isOpen, titleId, descriptionId } = _a, rest = __rest(_a, ["width", "height", "title", "description", "onClose", "onSave", "onBack", "onNext", "onGoToStep", "className", "steps", "startAtStep", "nextButtonText", "backButtonText", "cancelButtonText", "hideClose", "closeButtonAriaLabel", "navAriaLabel", "navAriaLabelledBy", "mainAriaLabel", "mainAriaLabelledBy", "hasNoBodyPadding", "footer", "appendTo", "isOpen", "titleId", "descriptionId"])
            /* eslint-enable @typescript-eslint/no-unused-vars */
            ;
            const { currentStep } = this.state;
            const flattenedSteps = this.getFlattenedSteps();
            const adjustedStep = flattenedSteps.length < currentStep ? flattenedSteps.length : currentStep;
            const activeStep = flattenedSteps[adjustedStep - 1];
            const computedSteps = this.initSteps(steps);
            const firstStep = activeStep === flattenedSteps[0];
            const isValid = activeStep && activeStep.enableNext !== undefined ? activeStep.enableNext : true;
            const nav = (isWizardNavOpen) => {
                const wizNavAProps = {
                    isOpen: isWizardNavOpen,
                    'aria-label': navAriaLabel,
                    'aria-labelledby': (title || navAriaLabelledBy) && (navAriaLabelledBy || this.titleId)
                };
                return (React.createElement(WizardNav, Object.assign({}, wizNavAProps), computedSteps.map((step, index) => {
                    if (step.isFinishedStep) {
                        // Don't show finished step in the side nav
                        return;
                    }
                    let enabled;
                    let navItemStep;
                    if (step.steps) {
                        let hasActiveChild = false;
                        let canJumpToParent = false;
                        for (const subStep of step.steps) {
                            if (activeStep.name === subStep.name) {
                                // one of the children matches
                                hasActiveChild = true;
                            }
                            if (subStep.canJumpTo) {
                                canJumpToParent = true;
                            }
                        }
                        navItemStep = this.getFlattenedStepsIndex(flattenedSteps, step.steps[0].name);
                        return (React.createElement(WizardNavItem, { key: index, content: step.name, isCurrent: hasActiveChild, isDisabled: !canJumpToParent, step: navItemStep, onNavItemClick: this.goToStep },
                            React.createElement(WizardNav, Object.assign({}, wizNavAProps, { returnList: true }), step.steps.map((childStep, indexChild) => {
                                if (childStep.isFinishedStep) {
                                    // Don't show finished step in the side nav
                                    return;
                                }
                                navItemStep = this.getFlattenedStepsIndex(flattenedSteps, childStep.name);
                                enabled = childStep.canJumpTo;
                                return (React.createElement(WizardNavItem, { key: `child_${indexChild}`, content: childStep.name, isCurrent: activeStep.name === childStep.name, isDisabled: !enabled, step: navItemStep, onNavItemClick: this.goToStep }));
                            }))));
                    }
                    navItemStep = this.getFlattenedStepsIndex(flattenedSteps, step.name);
                    enabled = step.canJumpTo;
                    return (React.createElement(WizardNavItem, Object.assign({}, step.stepNavItemProps, { key: index, content: step.name, isCurrent: activeStep.name === step.name, isDisabled: !enabled, step: navItemStep, onNavItemClick: this.goToStep })));
                })));
            };
            const context = {
                goToStepById: this.goToStepById,
                goToStepByName: this.goToStepByName,
                onNext: this.onNext,
                onBack: this.onBack,
                onClose,
                activeStep
            };
            const wizard = (React.createElement(WizardContextProvider, { value: context },
                React.createElement("div", Object.assign({}, rest, { className: css(styles$10.wizard, activeStep && activeStep.isFinishedStep && 'pf-m-finished', className) }, (height && { style: { height } })),
                    title && (React.createElement(WizardHeader, { titleId: this.titleId, descriptionId: this.descriptionId, onClose: onClose, title: title, description: description, closeButtonAriaLabel: closeButtonAriaLabel, hideClose: hideClose })),
                    React.createElement(WizardToggle, { mainAriaLabel: mainAriaLabel, isInPage: isOpen === undefined, mainAriaLabelledBy: (title || mainAriaLabelledBy) && (mainAriaLabelledBy || this.titleId), isNavOpen: this.state.isNavOpen, onNavToggle: isNavOpen => this.setState({ isNavOpen }), nav: nav, steps: steps, activeStep: activeStep, hasNoBodyPadding: hasNoBodyPadding }, footer || (React.createElement(WizardFooterInternal, { onNext: this.onNext, onBack: this.onBack, onClose: onClose, isValid: isValid, firstStep: firstStep, activeStep: activeStep, nextButtonText: (activeStep && activeStep.nextButtonText) || nextButtonText, backButtonText: backButtonText, cancelButtonText: cancelButtonText }))))));
            if (isOpen !== undefined) {
                return (React.createElement(Modal, { isOpen: isOpen, variant: exports.ModalVariant.large, "aria-labelledby": this.titleId, "aria-describedby": this.descriptionId, showClose: false, hasNoBodyWrapper: true }, wizard));
            }
            return wizard;
        }
    }
    Wizard.displayName = 'Wizard';
    Wizard.currentId = 0;
    Wizard.defaultProps = {
        title: null,
        description: '',
        className: '',
        startAtStep: 1,
        nextButtonText: 'Next',
        backButtonText: 'Back',
        cancelButtonText: 'Cancel',
        hideClose: false,
        closeButtonAriaLabel: 'Close',
        navAriaLabel: null,
        navAriaLabelledBy: null,
        mainAriaLabel: null,
        mainAriaLabelledBy: null,
        hasNoBodyPadding: false,
        onBack: null,
        onNext: null,
        onGoToStep: null,
        width: null,
        height: null,
        footer: null,
        onClose: () => undefined,
        appendTo: null,
        isOpen: undefined
    };

    const WizardFooter = ({ children }) => (React.createElement("footer", { className: css(styles$10.wizardFooter) }, children));
    WizardFooter.displayName = 'WizardFooter';

    const Bullseye = (_a) => {
        var { children = null, className = '', component = 'div' } = _a, props = __rest(_a, ["children", "className", "component"]);
        const Component = component;
        return (React.createElement(Component, Object.assign({ className: css(styles$1.bullseye, className) }, props), children));
    };
    Bullseye.displayName = 'Bullseye';

    var flex = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "flex": "pf-l-flex",
      "modifiers": {
        "flex": "pf-m-flex",
        "inlineFlex": "pf-m-inline-flex",
        "column": "pf-m-column",
        "columnReverse": "pf-m-column-reverse",
        "row": "pf-m-row",
        "rowReverse": "pf-m-row-reverse",
        "wrap": "pf-m-wrap",
        "wrapReverse": "pf-m-wrap-reverse",
        "nowrap": "pf-m-nowrap",
        "justifyContentFlexStart": "pf-m-justify-content-flex-start",
        "justifyContentFlexEnd": "pf-m-justify-content-flex-end",
        "justifyContentCenter": "pf-m-justify-content-center",
        "justifyContentSpaceBetween": "pf-m-justify-content-space-between",
        "justifyContentSpaceAround": "pf-m-justify-content-space-around",
        "justifyContentSpaceEvenly": "pf-m-justify-content-space-evenly",
        "alignItemsFlexStart": "pf-m-align-items-flex-start",
        "alignItemsFlexEnd": "pf-m-align-items-flex-end",
        "alignItemsCenter": "pf-m-align-items-center",
        "alignItemsStretch": "pf-m-align-items-stretch",
        "alignItemsBaseline": "pf-m-align-items-baseline",
        "alignContentFlexStart": "pf-m-align-content-flex-start",
        "alignContentFlexEnd": "pf-m-align-content-flex-end",
        "alignContentCenter": "pf-m-align-content-center",
        "alignContentStretch": "pf-m-align-content-stretch",
        "alignContentSpaceBetween": "pf-m-align-content-space-between",
        "alignContentSpaceAround": "pf-m-align-content-space-around",
        "alignRight": "pf-m-align-right",
        "alignLeft": "pf-m-align-left",
        "grow": "pf-m-grow",
        "shrink": "pf-m-shrink",
        "fullWidth": "pf-m-full-width",
        "flex_1": "pf-m-flex-1",
        "flex_2": "pf-m-flex-2",
        "flex_3": "pf-m-flex-3",
        "flex_4": "pf-m-flex-4",
        "flexDefault": "pf-m-flex-default",
        "flexNone": "pf-m-flex-none",
        "alignSelfFlexStart": "pf-m-align-self-flex-start",
        "alignSelfFlexEnd": "pf-m-align-self-flex-end",
        "alignSelfCenter": "pf-m-align-self-center",
        "alignSelfBaseline": "pf-m-align-self-baseline",
        "alignSelfStretch": "pf-m-align-self-stretch",
        "flexOnSm": "pf-m-flex-on-sm",
        "inlineFlexOnSm": "pf-m-inline-flex-on-sm",
        "columnOnSm": "pf-m-column-on-sm",
        "columnReverseOnSm": "pf-m-column-reverse-on-sm",
        "rowOnSm": "pf-m-row-on-sm",
        "rowReverseOnSm": "pf-m-row-reverse-on-sm",
        "wrapOnSm": "pf-m-wrap-on-sm",
        "wrapReverseOnSm": "pf-m-wrap-reverse-on-sm",
        "nowrapOnSm": "pf-m-nowrap-on-sm",
        "justifyContentFlexStartOnSm": "pf-m-justify-content-flex-start-on-sm",
        "justifyContentFlexEndOnSm": "pf-m-justify-content-flex-end-on-sm",
        "justifyContentCenterOnSm": "pf-m-justify-content-center-on-sm",
        "justifyContentSpaceBetweenOnSm": "pf-m-justify-content-space-between-on-sm",
        "justifyContentSpaceAroundOnSm": "pf-m-justify-content-space-around-on-sm",
        "justifyContentSpaceEvenlyOnSm": "pf-m-justify-content-space-evenly-on-sm",
        "alignItemsFlexStartOnSm": "pf-m-align-items-flex-start-on-sm",
        "alignItemsFlexEndOnSm": "pf-m-align-items-flex-end-on-sm",
        "alignItemsCenterOnSm": "pf-m-align-items-center-on-sm",
        "alignItemsStretchOnSm": "pf-m-align-items-stretch-on-sm",
        "alignItemsBaselineOnSm": "pf-m-align-items-baseline-on-sm",
        "alignContentFlexStartOnSm": "pf-m-align-content-flex-start-on-sm",
        "alignContentFlexEndOnSm": "pf-m-align-content-flex-end-on-sm",
        "alignContentCenterOnSm": "pf-m-align-content-center-on-sm",
        "alignContentStretchOnSm": "pf-m-align-content-stretch-on-sm",
        "alignContentSpaceBetweenOnSm": "pf-m-align-content-space-between-on-sm",
        "alignContentSpaceAroundOnSm": "pf-m-align-content-space-around-on-sm",
        "alignRightOnSm": "pf-m-align-right-on-sm",
        "alignLeftOnSm": "pf-m-align-left-on-sm",
        "growOnSm": "pf-m-grow-on-sm",
        "shrinkOnSm": "pf-m-shrink-on-sm",
        "fullWidthOnSm": "pf-m-full-width-on-sm",
        "flex_1OnSm": "pf-m-flex-1-on-sm",
        "flex_2OnSm": "pf-m-flex-2-on-sm",
        "flex_3OnSm": "pf-m-flex-3-on-sm",
        "flex_4OnSm": "pf-m-flex-4-on-sm",
        "flexDefaultOnSm": "pf-m-flex-default-on-sm",
        "flexNoneOnSm": "pf-m-flex-none-on-sm",
        "alignSelfFlexStartOnSm": "pf-m-align-self-flex-start-on-sm",
        "alignSelfFlexEndOnSm": "pf-m-align-self-flex-end-on-sm",
        "alignSelfCenterOnSm": "pf-m-align-self-center-on-sm",
        "alignSelfBaselineOnSm": "pf-m-align-self-baseline-on-sm",
        "alignSelfStretchOnSm": "pf-m-align-self-stretch-on-sm",
        "flexOnMd": "pf-m-flex-on-md",
        "inlineFlexOnMd": "pf-m-inline-flex-on-md",
        "columnOnMd": "pf-m-column-on-md",
        "columnReverseOnMd": "pf-m-column-reverse-on-md",
        "rowOnMd": "pf-m-row-on-md",
        "rowReverseOnMd": "pf-m-row-reverse-on-md",
        "wrapOnMd": "pf-m-wrap-on-md",
        "wrapReverseOnMd": "pf-m-wrap-reverse-on-md",
        "nowrapOnMd": "pf-m-nowrap-on-md",
        "justifyContentFlexStartOnMd": "pf-m-justify-content-flex-start-on-md",
        "justifyContentFlexEndOnMd": "pf-m-justify-content-flex-end-on-md",
        "justifyContentCenterOnMd": "pf-m-justify-content-center-on-md",
        "justifyContentSpaceBetweenOnMd": "pf-m-justify-content-space-between-on-md",
        "justifyContentSpaceAroundOnMd": "pf-m-justify-content-space-around-on-md",
        "justifyContentSpaceEvenlyOnMd": "pf-m-justify-content-space-evenly-on-md",
        "alignItemsFlexStartOnMd": "pf-m-align-items-flex-start-on-md",
        "alignItemsFlexEndOnMd": "pf-m-align-items-flex-end-on-md",
        "alignItemsCenterOnMd": "pf-m-align-items-center-on-md",
        "alignItemsStretchOnMd": "pf-m-align-items-stretch-on-md",
        "alignItemsBaselineOnMd": "pf-m-align-items-baseline-on-md",
        "alignContentFlexStartOnMd": "pf-m-align-content-flex-start-on-md",
        "alignContentFlexEndOnMd": "pf-m-align-content-flex-end-on-md",
        "alignContentCenterOnMd": "pf-m-align-content-center-on-md",
        "alignContentStretchOnMd": "pf-m-align-content-stretch-on-md",
        "alignContentSpaceBetweenOnMd": "pf-m-align-content-space-between-on-md",
        "alignContentSpaceAroundOnMd": "pf-m-align-content-space-around-on-md",
        "alignRightOnMd": "pf-m-align-right-on-md",
        "alignLeftOnMd": "pf-m-align-left-on-md",
        "growOnMd": "pf-m-grow-on-md",
        "shrinkOnMd": "pf-m-shrink-on-md",
        "fullWidthOnMd": "pf-m-full-width-on-md",
        "flex_1OnMd": "pf-m-flex-1-on-md",
        "flex_2OnMd": "pf-m-flex-2-on-md",
        "flex_3OnMd": "pf-m-flex-3-on-md",
        "flex_4OnMd": "pf-m-flex-4-on-md",
        "flexDefaultOnMd": "pf-m-flex-default-on-md",
        "flexNoneOnMd": "pf-m-flex-none-on-md",
        "alignSelfFlexStartOnMd": "pf-m-align-self-flex-start-on-md",
        "alignSelfFlexEndOnMd": "pf-m-align-self-flex-end-on-md",
        "alignSelfCenterOnMd": "pf-m-align-self-center-on-md",
        "alignSelfBaselineOnMd": "pf-m-align-self-baseline-on-md",
        "alignSelfStretchOnMd": "pf-m-align-self-stretch-on-md",
        "flexOnLg": "pf-m-flex-on-lg",
        "inlineFlexOnLg": "pf-m-inline-flex-on-lg",
        "columnOnLg": "pf-m-column-on-lg",
        "columnReverseOnLg": "pf-m-column-reverse-on-lg",
        "rowOnLg": "pf-m-row-on-lg",
        "rowReverseOnLg": "pf-m-row-reverse-on-lg",
        "wrapOnLg": "pf-m-wrap-on-lg",
        "wrapReverseOnLg": "pf-m-wrap-reverse-on-lg",
        "nowrapOnLg": "pf-m-nowrap-on-lg",
        "justifyContentFlexStartOnLg": "pf-m-justify-content-flex-start-on-lg",
        "justifyContentFlexEndOnLg": "pf-m-justify-content-flex-end-on-lg",
        "justifyContentCenterOnLg": "pf-m-justify-content-center-on-lg",
        "justifyContentSpaceBetweenOnLg": "pf-m-justify-content-space-between-on-lg",
        "justifyContentSpaceAroundOnLg": "pf-m-justify-content-space-around-on-lg",
        "justifyContentSpaceEvenlyOnLg": "pf-m-justify-content-space-evenly-on-lg",
        "alignItemsFlexStartOnLg": "pf-m-align-items-flex-start-on-lg",
        "alignItemsFlexEndOnLg": "pf-m-align-items-flex-end-on-lg",
        "alignItemsCenterOnLg": "pf-m-align-items-center-on-lg",
        "alignItemsStretchOnLg": "pf-m-align-items-stretch-on-lg",
        "alignItemsBaselineOnLg": "pf-m-align-items-baseline-on-lg",
        "alignContentFlexStartOnLg": "pf-m-align-content-flex-start-on-lg",
        "alignContentFlexEndOnLg": "pf-m-align-content-flex-end-on-lg",
        "alignContentCenterOnLg": "pf-m-align-content-center-on-lg",
        "alignContentStretchOnLg": "pf-m-align-content-stretch-on-lg",
        "alignContentSpaceBetweenOnLg": "pf-m-align-content-space-between-on-lg",
        "alignContentSpaceAroundOnLg": "pf-m-align-content-space-around-on-lg",
        "alignRightOnLg": "pf-m-align-right-on-lg",
        "alignLeftOnLg": "pf-m-align-left-on-lg",
        "growOnLg": "pf-m-grow-on-lg",
        "shrinkOnLg": "pf-m-shrink-on-lg",
        "fullWidthOnLg": "pf-m-full-width-on-lg",
        "flex_1OnLg": "pf-m-flex-1-on-lg",
        "flex_2OnLg": "pf-m-flex-2-on-lg",
        "flex_3OnLg": "pf-m-flex-3-on-lg",
        "flex_4OnLg": "pf-m-flex-4-on-lg",
        "flexDefaultOnLg": "pf-m-flex-default-on-lg",
        "flexNoneOnLg": "pf-m-flex-none-on-lg",
        "alignSelfFlexStartOnLg": "pf-m-align-self-flex-start-on-lg",
        "alignSelfFlexEndOnLg": "pf-m-align-self-flex-end-on-lg",
        "alignSelfCenterOnLg": "pf-m-align-self-center-on-lg",
        "alignSelfBaselineOnLg": "pf-m-align-self-baseline-on-lg",
        "alignSelfStretchOnLg": "pf-m-align-self-stretch-on-lg",
        "flexOnXl": "pf-m-flex-on-xl",
        "inlineFlexOnXl": "pf-m-inline-flex-on-xl",
        "columnOnXl": "pf-m-column-on-xl",
        "columnReverseOnXl": "pf-m-column-reverse-on-xl",
        "rowOnXl": "pf-m-row-on-xl",
        "rowReverseOnXl": "pf-m-row-reverse-on-xl",
        "wrapOnXl": "pf-m-wrap-on-xl",
        "wrapReverseOnXl": "pf-m-wrap-reverse-on-xl",
        "nowrapOnXl": "pf-m-nowrap-on-xl",
        "justifyContentFlexStartOnXl": "pf-m-justify-content-flex-start-on-xl",
        "justifyContentFlexEndOnXl": "pf-m-justify-content-flex-end-on-xl",
        "justifyContentCenterOnXl": "pf-m-justify-content-center-on-xl",
        "justifyContentSpaceBetweenOnXl": "pf-m-justify-content-space-between-on-xl",
        "justifyContentSpaceAroundOnXl": "pf-m-justify-content-space-around-on-xl",
        "justifyContentSpaceEvenlyOnXl": "pf-m-justify-content-space-evenly-on-xl",
        "alignItemsFlexStartOnXl": "pf-m-align-items-flex-start-on-xl",
        "alignItemsFlexEndOnXl": "pf-m-align-items-flex-end-on-xl",
        "alignItemsCenterOnXl": "pf-m-align-items-center-on-xl",
        "alignItemsStretchOnXl": "pf-m-align-items-stretch-on-xl",
        "alignItemsBaselineOnXl": "pf-m-align-items-baseline-on-xl",
        "alignContentFlexStartOnXl": "pf-m-align-content-flex-start-on-xl",
        "alignContentFlexEndOnXl": "pf-m-align-content-flex-end-on-xl",
        "alignContentCenterOnXl": "pf-m-align-content-center-on-xl",
        "alignContentStretchOnXl": "pf-m-align-content-stretch-on-xl",
        "alignContentSpaceBetweenOnXl": "pf-m-align-content-space-between-on-xl",
        "alignContentSpaceAroundOnXl": "pf-m-align-content-space-around-on-xl",
        "alignRightOnXl": "pf-m-align-right-on-xl",
        "alignLeftOnXl": "pf-m-align-left-on-xl",
        "growOnXl": "pf-m-grow-on-xl",
        "shrinkOnXl": "pf-m-shrink-on-xl",
        "fullWidthOnXl": "pf-m-full-width-on-xl",
        "flex_1OnXl": "pf-m-flex-1-on-xl",
        "flex_2OnXl": "pf-m-flex-2-on-xl",
        "flex_3OnXl": "pf-m-flex-3-on-xl",
        "flex_4OnXl": "pf-m-flex-4-on-xl",
        "flexDefaultOnXl": "pf-m-flex-default-on-xl",
        "flexNoneOnXl": "pf-m-flex-none-on-xl",
        "alignSelfFlexStartOnXl": "pf-m-align-self-flex-start-on-xl",
        "alignSelfFlexEndOnXl": "pf-m-align-self-flex-end-on-xl",
        "alignSelfCenterOnXl": "pf-m-align-self-center-on-xl",
        "alignSelfBaselineOnXl": "pf-m-align-self-baseline-on-xl",
        "alignSelfStretchOnXl": "pf-m-align-self-stretch-on-xl",
        "flexOn_2xl": "pf-m-flex-on-2xl",
        "inlineFlexOn_2xl": "pf-m-inline-flex-on-2xl",
        "columnOn_2xl": "pf-m-column-on-2xl",
        "columnReverseOn_2xl": "pf-m-column-reverse-on-2xl",
        "rowOn_2xl": "pf-m-row-on-2xl",
        "rowReverseOn_2xl": "pf-m-row-reverse-on-2xl",
        "wrapOn_2xl": "pf-m-wrap-on-2xl",
        "wrapReverseOn_2xl": "pf-m-wrap-reverse-on-2xl",
        "nowrapOn_2xl": "pf-m-nowrap-on-2xl",
        "justifyContentFlexStartOn_2xl": "pf-m-justify-content-flex-start-on-2xl",
        "justifyContentFlexEndOn_2xl": "pf-m-justify-content-flex-end-on-2xl",
        "justifyContentCenterOn_2xl": "pf-m-justify-content-center-on-2xl",
        "justifyContentSpaceBetweenOn_2xl": "pf-m-justify-content-space-between-on-2xl",
        "justifyContentSpaceAroundOn_2xl": "pf-m-justify-content-space-around-on-2xl",
        "justifyContentSpaceEvenlyOn_2xl": "pf-m-justify-content-space-evenly-on-2xl",
        "alignItemsFlexStartOn_2xl": "pf-m-align-items-flex-start-on-2xl",
        "alignItemsFlexEndOn_2xl": "pf-m-align-items-flex-end-on-2xl",
        "alignItemsCenterOn_2xl": "pf-m-align-items-center-on-2xl",
        "alignItemsStretchOn_2xl": "pf-m-align-items-stretch-on-2xl",
        "alignItemsBaselineOn_2xl": "pf-m-align-items-baseline-on-2xl",
        "alignContentFlexStartOn_2xl": "pf-m-align-content-flex-start-on-2xl",
        "alignContentFlexEndOn_2xl": "pf-m-align-content-flex-end-on-2xl",
        "alignContentCenterOn_2xl": "pf-m-align-content-center-on-2xl",
        "alignContentStretchOn_2xl": "pf-m-align-content-stretch-on-2xl",
        "alignContentSpaceBetweenOn_2xl": "pf-m-align-content-space-between-on-2xl",
        "alignContentSpaceAroundOn_2xl": "pf-m-align-content-space-around-on-2xl",
        "alignRightOn_2xl": "pf-m-align-right-on-2xl",
        "alignLeftOn_2xl": "pf-m-align-left-on-2xl",
        "growOn_2xl": "pf-m-grow-on-2xl",
        "shrinkOn_2xl": "pf-m-shrink-on-2xl",
        "fullWidthOn_2xl": "pf-m-full-width-on-2xl",
        "flex_1On_2xl": "pf-m-flex-1-on-2xl",
        "flex_2On_2xl": "pf-m-flex-2-on-2xl",
        "flex_3On_2xl": "pf-m-flex-3-on-2xl",
        "flex_4On_2xl": "pf-m-flex-4-on-2xl",
        "flexDefaultOn_2xl": "pf-m-flex-default-on-2xl",
        "flexNoneOn_2xl": "pf-m-flex-none-on-2xl",
        "alignSelfFlexStartOn_2xl": "pf-m-align-self-flex-start-on-2xl",
        "alignSelfFlexEndOn_2xl": "pf-m-align-self-flex-end-on-2xl",
        "alignSelfCenterOn_2xl": "pf-m-align-self-center-on-2xl",
        "alignSelfBaselineOn_2xl": "pf-m-align-self-baseline-on-2xl",
        "alignSelfStretchOn_2xl": "pf-m-align-self-stretch-on-2xl",
        "spaceItemsNone": "pf-m-space-items-none",
        "spaceItemsXs": "pf-m-space-items-xs",
        "spaceItemsSm": "pf-m-space-items-sm",
        "spaceItemsMd": "pf-m-space-items-md",
        "spaceItemsLg": "pf-m-space-items-lg",
        "spaceItemsXl": "pf-m-space-items-xl",
        "spaceItems_2xl": "pf-m-space-items-2xl",
        "spaceItems_3xl": "pf-m-space-items-3xl",
        "spaceItems_4xl": "pf-m-space-items-4xl",
        "spaceItemsNoneOnSm": "pf-m-space-items-none-on-sm",
        "spaceItemsXsOnSm": "pf-m-space-items-xs-on-sm",
        "spaceItemsSmOnSm": "pf-m-space-items-sm-on-sm",
        "spaceItemsMdOnSm": "pf-m-space-items-md-on-sm",
        "spaceItemsLgOnSm": "pf-m-space-items-lg-on-sm",
        "spaceItemsXlOnSm": "pf-m-space-items-xl-on-sm",
        "spaceItems_2xlOnSm": "pf-m-space-items-2xl-on-sm",
        "spaceItems_3xlOnSm": "pf-m-space-items-3xl-on-sm",
        "spaceItems_4xlOnSm": "pf-m-space-items-4xl-on-sm",
        "spaceItemsNoneOnMd": "pf-m-space-items-none-on-md",
        "spaceItemsXsOnMd": "pf-m-space-items-xs-on-md",
        "spaceItemsSmOnMd": "pf-m-space-items-sm-on-md",
        "spaceItemsMdOnMd": "pf-m-space-items-md-on-md",
        "spaceItemsLgOnMd": "pf-m-space-items-lg-on-md",
        "spaceItemsXlOnMd": "pf-m-space-items-xl-on-md",
        "spaceItems_2xlOnMd": "pf-m-space-items-2xl-on-md",
        "spaceItems_3xlOnMd": "pf-m-space-items-3xl-on-md",
        "spaceItems_4xlOnMd": "pf-m-space-items-4xl-on-md",
        "spaceItemsNoneOnLg": "pf-m-space-items-none-on-lg",
        "spaceItemsXsOnLg": "pf-m-space-items-xs-on-lg",
        "spaceItemsSmOnLg": "pf-m-space-items-sm-on-lg",
        "spaceItemsMdOnLg": "pf-m-space-items-md-on-lg",
        "spaceItemsLgOnLg": "pf-m-space-items-lg-on-lg",
        "spaceItemsXlOnLg": "pf-m-space-items-xl-on-lg",
        "spaceItems_2xlOnLg": "pf-m-space-items-2xl-on-lg",
        "spaceItems_3xlOnLg": "pf-m-space-items-3xl-on-lg",
        "spaceItems_4xlOnLg": "pf-m-space-items-4xl-on-lg",
        "spaceItemsNoneOnXl": "pf-m-space-items-none-on-xl",
        "spaceItemsXsOnXl": "pf-m-space-items-xs-on-xl",
        "spaceItemsSmOnXl": "pf-m-space-items-sm-on-xl",
        "spaceItemsMdOnXl": "pf-m-space-items-md-on-xl",
        "spaceItemsLgOnXl": "pf-m-space-items-lg-on-xl",
        "spaceItemsXlOnXl": "pf-m-space-items-xl-on-xl",
        "spaceItems_2xlOnXl": "pf-m-space-items-2xl-on-xl",
        "spaceItems_3xlOnXl": "pf-m-space-items-3xl-on-xl",
        "spaceItems_4xlOnXl": "pf-m-space-items-4xl-on-xl",
        "spaceItemsNoneOn_2xl": "pf-m-space-items-none-on-2xl",
        "spaceItemsXsOn_2xl": "pf-m-space-items-xs-on-2xl",
        "spaceItemsSmOn_2xl": "pf-m-space-items-sm-on-2xl",
        "spaceItemsMdOn_2xl": "pf-m-space-items-md-on-2xl",
        "spaceItemsLgOn_2xl": "pf-m-space-items-lg-on-2xl",
        "spaceItemsXlOn_2xl": "pf-m-space-items-xl-on-2xl",
        "spaceItems_2xlOn_2xl": "pf-m-space-items-2xl-on-2xl",
        "spaceItems_3xlOn_2xl": "pf-m-space-items-3xl-on-2xl",
        "spaceItems_4xlOn_2xl": "pf-m-space-items-4xl-on-2xl",
        "spacerNone": "pf-m-spacer-none",
        "spacerXs": "pf-m-spacer-xs",
        "spacerSm": "pf-m-spacer-sm",
        "spacerMd": "pf-m-spacer-md",
        "spacerLg": "pf-m-spacer-lg",
        "spacerXl": "pf-m-spacer-xl",
        "spacer_2xl": "pf-m-spacer-2xl",
        "spacer_3xl": "pf-m-spacer-3xl",
        "spacer_4xl": "pf-m-spacer-4xl",
        "spacerNoneOnSm": "pf-m-spacer-none-on-sm",
        "spacerXsOnSm": "pf-m-spacer-xs-on-sm",
        "spacerSmOnSm": "pf-m-spacer-sm-on-sm",
        "spacerMdOnSm": "pf-m-spacer-md-on-sm",
        "spacerLgOnSm": "pf-m-spacer-lg-on-sm",
        "spacerXlOnSm": "pf-m-spacer-xl-on-sm",
        "spacer_2xlOnSm": "pf-m-spacer-2xl-on-sm",
        "spacer_3xlOnSm": "pf-m-spacer-3xl-on-sm",
        "spacer_4xlOnSm": "pf-m-spacer-4xl-on-sm",
        "spacerNoneOnMd": "pf-m-spacer-none-on-md",
        "spacerXsOnMd": "pf-m-spacer-xs-on-md",
        "spacerSmOnMd": "pf-m-spacer-sm-on-md",
        "spacerMdOnMd": "pf-m-spacer-md-on-md",
        "spacerLgOnMd": "pf-m-spacer-lg-on-md",
        "spacerXlOnMd": "pf-m-spacer-xl-on-md",
        "spacer_2xlOnMd": "pf-m-spacer-2xl-on-md",
        "spacer_3xlOnMd": "pf-m-spacer-3xl-on-md",
        "spacer_4xlOnMd": "pf-m-spacer-4xl-on-md",
        "spacerNoneOnLg": "pf-m-spacer-none-on-lg",
        "spacerXsOnLg": "pf-m-spacer-xs-on-lg",
        "spacerSmOnLg": "pf-m-spacer-sm-on-lg",
        "spacerMdOnLg": "pf-m-spacer-md-on-lg",
        "spacerLgOnLg": "pf-m-spacer-lg-on-lg",
        "spacerXlOnLg": "pf-m-spacer-xl-on-lg",
        "spacer_2xlOnLg": "pf-m-spacer-2xl-on-lg",
        "spacer_3xlOnLg": "pf-m-spacer-3xl-on-lg",
        "spacer_4xlOnLg": "pf-m-spacer-4xl-on-lg",
        "spacerNoneOnXl": "pf-m-spacer-none-on-xl",
        "spacerXsOnXl": "pf-m-spacer-xs-on-xl",
        "spacerSmOnXl": "pf-m-spacer-sm-on-xl",
        "spacerMdOnXl": "pf-m-spacer-md-on-xl",
        "spacerLgOnXl": "pf-m-spacer-lg-on-xl",
        "spacerXlOnXl": "pf-m-spacer-xl-on-xl",
        "spacer_2xlOnXl": "pf-m-spacer-2xl-on-xl",
        "spacer_3xlOnXl": "pf-m-spacer-3xl-on-xl",
        "spacer_4xlOnXl": "pf-m-spacer-4xl-on-xl",
        "spacerNoneOn_2xl": "pf-m-spacer-none-on-2xl",
        "spacerXsOn_2xl": "pf-m-spacer-xs-on-2xl",
        "spacerSmOn_2xl": "pf-m-spacer-sm-on-2xl",
        "spacerMdOn_2xl": "pf-m-spacer-md-on-2xl",
        "spacerLgOn_2xl": "pf-m-spacer-lg-on-2xl",
        "spacerXlOn_2xl": "pf-m-spacer-xl-on-2xl",
        "spacer_2xlOn_2xl": "pf-m-spacer-2xl-on-2xl",
        "spacer_3xlOn_2xl": "pf-m-spacer-3xl-on-2xl",
        "spacer_4xlOn_2xl": "pf-m-spacer-4xl-on-2xl"
      }
    };
    });

    var styles$11 = unwrapExports(flex);

    const Flex = (_a) => {
        var { children = null, className = '', spacer, spaceItems, grow, shrink, flex, direction, alignItems, alignContent, alignSelf, align, justifyContent, display, fullWidth, flexWrap } = _a, props = __rest(_a, ["children", "className", "spacer", "spaceItems", "grow", "shrink", "flex", "direction", "alignItems", "alignContent", "alignSelf", "align", "justifyContent", "display", "fullWidth", "flexWrap"]);
        return (React.createElement("div", Object.assign({ className: css(styles$11.flex, formatBreakpointMods(spacer, styles$11), formatBreakpointMods(spaceItems, styles$11), formatBreakpointMods(grow, styles$11), formatBreakpointMods(shrink, styles$11), formatBreakpointMods(flex, styles$11), formatBreakpointMods(direction, styles$11), formatBreakpointMods(alignItems, styles$11), formatBreakpointMods(alignContent, styles$11), formatBreakpointMods(alignSelf, styles$11), formatBreakpointMods(align, styles$11), formatBreakpointMods(justifyContent, styles$11), formatBreakpointMods(display, styles$11), formatBreakpointMods(fullWidth, styles$11), formatBreakpointMods(flexWrap, styles$11), className) }, props), children));
    };
    Flex.displayName = 'Flex';

    const FlexItem = (_a) => {
        var { children = null, className = '', spacer, grow, shrink, flex, alignSelf, align, fullWidth } = _a, props = __rest(_a, ["children", "className", "spacer", "grow", "shrink", "flex", "alignSelf", "align", "fullWidth"]);
        return (React.createElement("div", Object.assign({}, props, { className: css(formatBreakpointMods(spacer, styles$11), formatBreakpointMods(grow, styles$11), formatBreakpointMods(shrink, styles$11), formatBreakpointMods(flex, styles$11), formatBreakpointMods(alignSelf, styles$11), formatBreakpointMods(align, styles$11), formatBreakpointMods(fullWidth, styles$11), className) }), children));
    };
    FlexItem.displayName = 'FlexItem';

    var gallery = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "gallery": "pf-l-gallery",
      "modifiers": {
        "gutter": "pf-m-gutter"
      }
    };
    });

    var styles$12 = unwrapExports(gallery);

    const Gallery = (_a) => {
        var { children = null, className = '', hasGutter = false } = _a, props = __rest(_a, ["children", "className", "hasGutter"]);
        return (React.createElement("div", Object.assign({ className: css(styles$12.gallery, hasGutter && styles$12.modifiers.gutter, className) }, props), children));
    };
    Gallery.displayName = 'Gallery';

    const GalleryItem = (_a) => {
        var { children = null } = _a, props = __rest(_a, ["children"]);
        return React.createElement("div", Object.assign({}, props), children);
    };
    GalleryItem.displayName = 'GalleryItem';

    var grid = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "grid": "pf-l-grid",
      "gridItem": "pf-l-grid__item",
      "modifiers": {
        "all_1Col": "pf-m-all-1-col",
        "all_2Col": "pf-m-all-2-col",
        "all_3Col": "pf-m-all-3-col",
        "all_4Col": "pf-m-all-4-col",
        "all_5Col": "pf-m-all-5-col",
        "all_6Col": "pf-m-all-6-col",
        "all_7Col": "pf-m-all-7-col",
        "all_8Col": "pf-m-all-8-col",
        "all_9Col": "pf-m-all-9-col",
        "all_10Col": "pf-m-all-10-col",
        "all_11Col": "pf-m-all-11-col",
        "all_12Col": "pf-m-all-12-col",
        "all_1ColOnSm": "pf-m-all-1-col-on-sm",
        "all_2ColOnSm": "pf-m-all-2-col-on-sm",
        "all_3ColOnSm": "pf-m-all-3-col-on-sm",
        "all_4ColOnSm": "pf-m-all-4-col-on-sm",
        "all_5ColOnSm": "pf-m-all-5-col-on-sm",
        "all_6ColOnSm": "pf-m-all-6-col-on-sm",
        "all_7ColOnSm": "pf-m-all-7-col-on-sm",
        "all_8ColOnSm": "pf-m-all-8-col-on-sm",
        "all_9ColOnSm": "pf-m-all-9-col-on-sm",
        "all_10ColOnSm": "pf-m-all-10-col-on-sm",
        "all_11ColOnSm": "pf-m-all-11-col-on-sm",
        "all_12ColOnSm": "pf-m-all-12-col-on-sm",
        "all_1ColOnMd": "pf-m-all-1-col-on-md",
        "all_2ColOnMd": "pf-m-all-2-col-on-md",
        "all_3ColOnMd": "pf-m-all-3-col-on-md",
        "all_4ColOnMd": "pf-m-all-4-col-on-md",
        "all_5ColOnMd": "pf-m-all-5-col-on-md",
        "all_6ColOnMd": "pf-m-all-6-col-on-md",
        "all_7ColOnMd": "pf-m-all-7-col-on-md",
        "all_8ColOnMd": "pf-m-all-8-col-on-md",
        "all_9ColOnMd": "pf-m-all-9-col-on-md",
        "all_10ColOnMd": "pf-m-all-10-col-on-md",
        "all_11ColOnMd": "pf-m-all-11-col-on-md",
        "all_12ColOnMd": "pf-m-all-12-col-on-md",
        "all_1ColOnLg": "pf-m-all-1-col-on-lg",
        "all_2ColOnLg": "pf-m-all-2-col-on-lg",
        "all_3ColOnLg": "pf-m-all-3-col-on-lg",
        "all_4ColOnLg": "pf-m-all-4-col-on-lg",
        "all_5ColOnLg": "pf-m-all-5-col-on-lg",
        "all_6ColOnLg": "pf-m-all-6-col-on-lg",
        "all_7ColOnLg": "pf-m-all-7-col-on-lg",
        "all_8ColOnLg": "pf-m-all-8-col-on-lg",
        "all_9ColOnLg": "pf-m-all-9-col-on-lg",
        "all_10ColOnLg": "pf-m-all-10-col-on-lg",
        "all_11ColOnLg": "pf-m-all-11-col-on-lg",
        "all_12ColOnLg": "pf-m-all-12-col-on-lg",
        "all_1ColOnXl": "pf-m-all-1-col-on-xl",
        "all_2ColOnXl": "pf-m-all-2-col-on-xl",
        "all_3ColOnXl": "pf-m-all-3-col-on-xl",
        "all_4ColOnXl": "pf-m-all-4-col-on-xl",
        "all_5ColOnXl": "pf-m-all-5-col-on-xl",
        "all_6ColOnXl": "pf-m-all-6-col-on-xl",
        "all_7ColOnXl": "pf-m-all-7-col-on-xl",
        "all_8ColOnXl": "pf-m-all-8-col-on-xl",
        "all_9ColOnXl": "pf-m-all-9-col-on-xl",
        "all_10ColOnXl": "pf-m-all-10-col-on-xl",
        "all_11ColOnXl": "pf-m-all-11-col-on-xl",
        "all_12ColOnXl": "pf-m-all-12-col-on-xl",
        "all_1ColOn_2xl": "pf-m-all-1-col-on-2xl",
        "all_2ColOn_2xl": "pf-m-all-2-col-on-2xl",
        "all_3ColOn_2xl": "pf-m-all-3-col-on-2xl",
        "all_4ColOn_2xl": "pf-m-all-4-col-on-2xl",
        "all_5ColOn_2xl": "pf-m-all-5-col-on-2xl",
        "all_6ColOn_2xl": "pf-m-all-6-col-on-2xl",
        "all_7ColOn_2xl": "pf-m-all-7-col-on-2xl",
        "all_8ColOn_2xl": "pf-m-all-8-col-on-2xl",
        "all_9ColOn_2xl": "pf-m-all-9-col-on-2xl",
        "all_10ColOn_2xl": "pf-m-all-10-col-on-2xl",
        "all_11ColOn_2xl": "pf-m-all-11-col-on-2xl",
        "all_12ColOn_2xl": "pf-m-all-12-col-on-2xl",
        "1Col": "pf-m-1-col",
        "2Col": "pf-m-2-col",
        "3Col": "pf-m-3-col",
        "4Col": "pf-m-4-col",
        "5Col": "pf-m-5-col",
        "6Col": "pf-m-6-col",
        "7Col": "pf-m-7-col",
        "8Col": "pf-m-8-col",
        "9Col": "pf-m-9-col",
        "10Col": "pf-m-10-col",
        "11Col": "pf-m-11-col",
        "12Col": "pf-m-12-col",
        "offset_1Col": "pf-m-offset-1-col",
        "offset_2Col": "pf-m-offset-2-col",
        "offset_3Col": "pf-m-offset-3-col",
        "offset_4Col": "pf-m-offset-4-col",
        "offset_5Col": "pf-m-offset-5-col",
        "offset_6Col": "pf-m-offset-6-col",
        "offset_7Col": "pf-m-offset-7-col",
        "offset_8Col": "pf-m-offset-8-col",
        "offset_9Col": "pf-m-offset-9-col",
        "offset_10Col": "pf-m-offset-10-col",
        "offset_11Col": "pf-m-offset-11-col",
        "offset_12Col": "pf-m-offset-12-col",
        "1Row": "pf-m-1-row",
        "2Row": "pf-m-2-row",
        "3Row": "pf-m-3-row",
        "4Row": "pf-m-4-row",
        "5Row": "pf-m-5-row",
        "6Row": "pf-m-6-row",
        "7Row": "pf-m-7-row",
        "8Row": "pf-m-8-row",
        "9Row": "pf-m-9-row",
        "10Row": "pf-m-10-row",
        "11Row": "pf-m-11-row",
        "12Row": "pf-m-12-row",
        "1ColOnSm": "pf-m-1-col-on-sm",
        "2ColOnSm": "pf-m-2-col-on-sm",
        "3ColOnSm": "pf-m-3-col-on-sm",
        "4ColOnSm": "pf-m-4-col-on-sm",
        "5ColOnSm": "pf-m-5-col-on-sm",
        "6ColOnSm": "pf-m-6-col-on-sm",
        "7ColOnSm": "pf-m-7-col-on-sm",
        "8ColOnSm": "pf-m-8-col-on-sm",
        "9ColOnSm": "pf-m-9-col-on-sm",
        "10ColOnSm": "pf-m-10-col-on-sm",
        "11ColOnSm": "pf-m-11-col-on-sm",
        "12ColOnSm": "pf-m-12-col-on-sm",
        "offset_1ColOnSm": "pf-m-offset-1-col-on-sm",
        "offset_2ColOnSm": "pf-m-offset-2-col-on-sm",
        "offset_3ColOnSm": "pf-m-offset-3-col-on-sm",
        "offset_4ColOnSm": "pf-m-offset-4-col-on-sm",
        "offset_5ColOnSm": "pf-m-offset-5-col-on-sm",
        "offset_6ColOnSm": "pf-m-offset-6-col-on-sm",
        "offset_7ColOnSm": "pf-m-offset-7-col-on-sm",
        "offset_8ColOnSm": "pf-m-offset-8-col-on-sm",
        "offset_9ColOnSm": "pf-m-offset-9-col-on-sm",
        "offset_10ColOnSm": "pf-m-offset-10-col-on-sm",
        "offset_11ColOnSm": "pf-m-offset-11-col-on-sm",
        "offset_12ColOnSm": "pf-m-offset-12-col-on-sm",
        "1RowOnSm": "pf-m-1-row-on-sm",
        "2RowOnSm": "pf-m-2-row-on-sm",
        "3RowOnSm": "pf-m-3-row-on-sm",
        "4RowOnSm": "pf-m-4-row-on-sm",
        "5RowOnSm": "pf-m-5-row-on-sm",
        "6RowOnSm": "pf-m-6-row-on-sm",
        "7RowOnSm": "pf-m-7-row-on-sm",
        "8RowOnSm": "pf-m-8-row-on-sm",
        "9RowOnSm": "pf-m-9-row-on-sm",
        "10RowOnSm": "pf-m-10-row-on-sm",
        "11RowOnSm": "pf-m-11-row-on-sm",
        "12RowOnSm": "pf-m-12-row-on-sm",
        "1ColOnMd": "pf-m-1-col-on-md",
        "2ColOnMd": "pf-m-2-col-on-md",
        "3ColOnMd": "pf-m-3-col-on-md",
        "4ColOnMd": "pf-m-4-col-on-md",
        "5ColOnMd": "pf-m-5-col-on-md",
        "6ColOnMd": "pf-m-6-col-on-md",
        "7ColOnMd": "pf-m-7-col-on-md",
        "8ColOnMd": "pf-m-8-col-on-md",
        "9ColOnMd": "pf-m-9-col-on-md",
        "10ColOnMd": "pf-m-10-col-on-md",
        "11ColOnMd": "pf-m-11-col-on-md",
        "12ColOnMd": "pf-m-12-col-on-md",
        "offset_1ColOnMd": "pf-m-offset-1-col-on-md",
        "offset_2ColOnMd": "pf-m-offset-2-col-on-md",
        "offset_3ColOnMd": "pf-m-offset-3-col-on-md",
        "offset_4ColOnMd": "pf-m-offset-4-col-on-md",
        "offset_5ColOnMd": "pf-m-offset-5-col-on-md",
        "offset_6ColOnMd": "pf-m-offset-6-col-on-md",
        "offset_7ColOnMd": "pf-m-offset-7-col-on-md",
        "offset_8ColOnMd": "pf-m-offset-8-col-on-md",
        "offset_9ColOnMd": "pf-m-offset-9-col-on-md",
        "offset_10ColOnMd": "pf-m-offset-10-col-on-md",
        "offset_11ColOnMd": "pf-m-offset-11-col-on-md",
        "offset_12ColOnMd": "pf-m-offset-12-col-on-md",
        "1RowOnMd": "pf-m-1-row-on-md",
        "2RowOnMd": "pf-m-2-row-on-md",
        "3RowOnMd": "pf-m-3-row-on-md",
        "4RowOnMd": "pf-m-4-row-on-md",
        "5RowOnMd": "pf-m-5-row-on-md",
        "6RowOnMd": "pf-m-6-row-on-md",
        "7RowOnMd": "pf-m-7-row-on-md",
        "8RowOnMd": "pf-m-8-row-on-md",
        "9RowOnMd": "pf-m-9-row-on-md",
        "10RowOnMd": "pf-m-10-row-on-md",
        "11RowOnMd": "pf-m-11-row-on-md",
        "12RowOnMd": "pf-m-12-row-on-md",
        "1ColOnLg": "pf-m-1-col-on-lg",
        "2ColOnLg": "pf-m-2-col-on-lg",
        "3ColOnLg": "pf-m-3-col-on-lg",
        "4ColOnLg": "pf-m-4-col-on-lg",
        "5ColOnLg": "pf-m-5-col-on-lg",
        "6ColOnLg": "pf-m-6-col-on-lg",
        "7ColOnLg": "pf-m-7-col-on-lg",
        "8ColOnLg": "pf-m-8-col-on-lg",
        "9ColOnLg": "pf-m-9-col-on-lg",
        "10ColOnLg": "pf-m-10-col-on-lg",
        "11ColOnLg": "pf-m-11-col-on-lg",
        "12ColOnLg": "pf-m-12-col-on-lg",
        "offset_1ColOnLg": "pf-m-offset-1-col-on-lg",
        "offset_2ColOnLg": "pf-m-offset-2-col-on-lg",
        "offset_3ColOnLg": "pf-m-offset-3-col-on-lg",
        "offset_4ColOnLg": "pf-m-offset-4-col-on-lg",
        "offset_5ColOnLg": "pf-m-offset-5-col-on-lg",
        "offset_6ColOnLg": "pf-m-offset-6-col-on-lg",
        "offset_7ColOnLg": "pf-m-offset-7-col-on-lg",
        "offset_8ColOnLg": "pf-m-offset-8-col-on-lg",
        "offset_9ColOnLg": "pf-m-offset-9-col-on-lg",
        "offset_10ColOnLg": "pf-m-offset-10-col-on-lg",
        "offset_11ColOnLg": "pf-m-offset-11-col-on-lg",
        "offset_12ColOnLg": "pf-m-offset-12-col-on-lg",
        "1RowOnLg": "pf-m-1-row-on-lg",
        "2RowOnLg": "pf-m-2-row-on-lg",
        "3RowOnLg": "pf-m-3-row-on-lg",
        "4RowOnLg": "pf-m-4-row-on-lg",
        "5RowOnLg": "pf-m-5-row-on-lg",
        "6RowOnLg": "pf-m-6-row-on-lg",
        "7RowOnLg": "pf-m-7-row-on-lg",
        "8RowOnLg": "pf-m-8-row-on-lg",
        "9RowOnLg": "pf-m-9-row-on-lg",
        "10RowOnLg": "pf-m-10-row-on-lg",
        "11RowOnLg": "pf-m-11-row-on-lg",
        "12RowOnLg": "pf-m-12-row-on-lg",
        "1ColOnXl": "pf-m-1-col-on-xl",
        "2ColOnXl": "pf-m-2-col-on-xl",
        "3ColOnXl": "pf-m-3-col-on-xl",
        "4ColOnXl": "pf-m-4-col-on-xl",
        "5ColOnXl": "pf-m-5-col-on-xl",
        "6ColOnXl": "pf-m-6-col-on-xl",
        "7ColOnXl": "pf-m-7-col-on-xl",
        "8ColOnXl": "pf-m-8-col-on-xl",
        "9ColOnXl": "pf-m-9-col-on-xl",
        "10ColOnXl": "pf-m-10-col-on-xl",
        "11ColOnXl": "pf-m-11-col-on-xl",
        "12ColOnXl": "pf-m-12-col-on-xl",
        "offset_1ColOnXl": "pf-m-offset-1-col-on-xl",
        "offset_2ColOnXl": "pf-m-offset-2-col-on-xl",
        "offset_3ColOnXl": "pf-m-offset-3-col-on-xl",
        "offset_4ColOnXl": "pf-m-offset-4-col-on-xl",
        "offset_5ColOnXl": "pf-m-offset-5-col-on-xl",
        "offset_6ColOnXl": "pf-m-offset-6-col-on-xl",
        "offset_7ColOnXl": "pf-m-offset-7-col-on-xl",
        "offset_8ColOnXl": "pf-m-offset-8-col-on-xl",
        "offset_9ColOnXl": "pf-m-offset-9-col-on-xl",
        "offset_10ColOnXl": "pf-m-offset-10-col-on-xl",
        "offset_11ColOnXl": "pf-m-offset-11-col-on-xl",
        "offset_12ColOnXl": "pf-m-offset-12-col-on-xl",
        "1RowOnXl": "pf-m-1-row-on-xl",
        "2RowOnXl": "pf-m-2-row-on-xl",
        "3RowOnXl": "pf-m-3-row-on-xl",
        "4RowOnXl": "pf-m-4-row-on-xl",
        "5RowOnXl": "pf-m-5-row-on-xl",
        "6RowOnXl": "pf-m-6-row-on-xl",
        "7RowOnXl": "pf-m-7-row-on-xl",
        "8RowOnXl": "pf-m-8-row-on-xl",
        "9RowOnXl": "pf-m-9-row-on-xl",
        "10RowOnXl": "pf-m-10-row-on-xl",
        "11RowOnXl": "pf-m-11-row-on-xl",
        "12RowOnXl": "pf-m-12-row-on-xl",
        "1ColOn_2xl": "pf-m-1-col-on-2xl",
        "2ColOn_2xl": "pf-m-2-col-on-2xl",
        "3ColOn_2xl": "pf-m-3-col-on-2xl",
        "4ColOn_2xl": "pf-m-4-col-on-2xl",
        "5ColOn_2xl": "pf-m-5-col-on-2xl",
        "6ColOn_2xl": "pf-m-6-col-on-2xl",
        "7ColOn_2xl": "pf-m-7-col-on-2xl",
        "8ColOn_2xl": "pf-m-8-col-on-2xl",
        "9ColOn_2xl": "pf-m-9-col-on-2xl",
        "10ColOn_2xl": "pf-m-10-col-on-2xl",
        "11ColOn_2xl": "pf-m-11-col-on-2xl",
        "12ColOn_2xl": "pf-m-12-col-on-2xl",
        "offset_1ColOn_2xl": "pf-m-offset-1-col-on-2xl",
        "offset_2ColOn_2xl": "pf-m-offset-2-col-on-2xl",
        "offset_3ColOn_2xl": "pf-m-offset-3-col-on-2xl",
        "offset_4ColOn_2xl": "pf-m-offset-4-col-on-2xl",
        "offset_5ColOn_2xl": "pf-m-offset-5-col-on-2xl",
        "offset_6ColOn_2xl": "pf-m-offset-6-col-on-2xl",
        "offset_7ColOn_2xl": "pf-m-offset-7-col-on-2xl",
        "offset_8ColOn_2xl": "pf-m-offset-8-col-on-2xl",
        "offset_9ColOn_2xl": "pf-m-offset-9-col-on-2xl",
        "offset_10ColOn_2xl": "pf-m-offset-10-col-on-2xl",
        "offset_11ColOn_2xl": "pf-m-offset-11-col-on-2xl",
        "offset_12ColOn_2xl": "pf-m-offset-12-col-on-2xl",
        "1RowOn_2xl": "pf-m-1-row-on-2xl",
        "2RowOn_2xl": "pf-m-2-row-on-2xl",
        "3RowOn_2xl": "pf-m-3-row-on-2xl",
        "4RowOn_2xl": "pf-m-4-row-on-2xl",
        "5RowOn_2xl": "pf-m-5-row-on-2xl",
        "6RowOn_2xl": "pf-m-6-row-on-2xl",
        "7RowOn_2xl": "pf-m-7-row-on-2xl",
        "8RowOn_2xl": "pf-m-8-row-on-2xl",
        "9RowOn_2xl": "pf-m-9-row-on-2xl",
        "10RowOn_2xl": "pf-m-10-row-on-2xl",
        "11RowOn_2xl": "pf-m-11-row-on-2xl",
        "12RowOn_2xl": "pf-m-12-row-on-2xl",
        "gutter": "pf-m-gutter"
      }
    };
    });

    var styles$13 = unwrapExports(grid);

    (function (BaseSizes) {
        BaseSizes["xs"] = "xs";
        BaseSizes["sm"] = "sm";
        BaseSizes["md"] = "md";
        BaseSizes["lg"] = "lg";
        BaseSizes["xl"] = "xl";
        BaseSizes["2xl"] = "2xl";
        BaseSizes["3xl"] = "3xl";
        BaseSizes["4xl"] = "4xl";
    })(exports.BaseSizes || (exports.BaseSizes = {}));
    (function (DeviceSizes) {
        DeviceSizes["sm"] = "Sm";
        DeviceSizes["md"] = "Md";
        DeviceSizes["lg"] = "Lg";
        DeviceSizes["xl"] = "Xl";
        DeviceSizes["xl2"] = "_2xl";
    })(exports.DeviceSizes || (exports.DeviceSizes = {}));

    const Grid = (_a) => {
        var { children = null, className = '', hasGutter, span = null } = _a, props = __rest(_a, ["children", "className", "hasGutter", "span"]);
        const classes = [styles$13.grid, span && styles$13.modifiers[`all_${span}Col`]];
        Object.entries(exports.DeviceSizes).forEach(([propKey, gridSpanModifier]) => {
            const key = propKey;
            const propValue = props[key];
            if (propValue) {
                classes.push(styles$13.modifiers[`all_${propValue}ColOn${gridSpanModifier}`]);
            }
            delete props[key];
        });
        return (React.createElement("div", Object.assign({ className: css(...classes, hasGutter && styles$13.modifiers.gutter, className) }, props), children));
    };
    Grid.displayName = 'Grid';

    const GridItem = (_a) => {
        var { children = null, className = '', span = null, rowSpan = null, offset = null } = _a, props = __rest(_a, ["children", "className", "span", "rowSpan", "offset"]);
        const classes = [
            styles$13.gridItem,
            span && styles$13.modifiers[`${span}Col`],
            rowSpan && styles$13.modifiers[`${rowSpan}Row`],
            offset && styles$13.modifiers[`offset_${offset}Col`]
        ];
        Object.entries(exports.DeviceSizes).forEach(([propKey, classModifier]) => {
            const key = propKey;
            const rowSpanKey = `${key}RowSpan`;
            const offsetKey = `${key}Offset`;
            const spanValue = props[key];
            const rowSpanValue = props[rowSpanKey];
            const offsetValue = props[offsetKey];
            if (spanValue) {
                classes.push(styles$13.modifiers[`${spanValue}ColOn${classModifier}`]);
            }
            if (rowSpanValue) {
                classes.push(styles$13.modifiers[`${rowSpanValue}RowOn${classModifier}`]);
            }
            if (offsetValue) {
                classes.push(styles$13.modifiers[`offset_${offsetValue}ColOn${classModifier}`]);
            }
            delete props[key];
            delete props[rowSpanKey];
            delete props[offsetKey];
        });
        return (React.createElement("div", Object.assign({ className: css(...classes, className) }, props), children));
    };
    GridItem.displayName = 'GridItem';

    var level = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "level": "pf-l-level",
      "modifiers": {
        "gutter": "pf-m-gutter"
      }
    };
    });

    var styles$14 = unwrapExports(level);

    const Level = (_a) => {
        var { hasGutter, className = '', children = null } = _a, props = __rest(_a, ["hasGutter", "className", "children"]);
        return (React.createElement("div", Object.assign({}, props, { className: css(styles$14.level, hasGutter && styles$14.modifiers.gutter, className) }), children));
    };
    Level.displayName = 'Level';

    const LevelItem = (_a) => {
        var { children = null } = _a, props = __rest(_a, ["children"]);
        return (React.createElement("div", Object.assign({}, props), children));
    };
    LevelItem.displayName = 'LevelItem';

    var split = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "modifiers": {
        "fill": "pf-m-fill",
        "gutter": "pf-m-gutter"
      },
      "split": "pf-l-split",
      "splitItem": "pf-l-split__item"
    };
    });

    var styles$15 = unwrapExports(split);

    const Split = (_a) => {
        var { hasGutter = false, className = '', children = null, component = 'div' } = _a, props = __rest(_a, ["hasGutter", "className", "children", "component"]);
        const Component = component;
        return (React.createElement(Component, Object.assign({}, props, { className: css(styles$15.split, hasGutter && styles$15.modifiers.gutter, className) }), children));
    };
    Split.displayName = 'Split';

    const SplitItem = (_a) => {
        var { isFilled = false, className = '', children = null } = _a, props = __rest(_a, ["isFilled", "className", "children"]);
        return (React.createElement("div", Object.assign({}, props, { className: css(styles$15.splitItem, isFilled && styles$15.modifiers.fill, className) }), children));
    };
    SplitItem.displayName = 'SplitItem';

    var stack = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    exports.default = {
      "modifiers": {
        "fill": "pf-m-fill",
        "gutter": "pf-m-gutter"
      },
      "stack": "pf-l-stack",
      "stackItem": "pf-l-stack__item"
    };
    });

    var styles$16 = unwrapExports(stack);

    const Stack = (_a) => {
        var { hasGutter = false, className = '', children = null, component = 'div' } = _a, props = __rest(_a, ["hasGutter", "className", "children", "component"]);
        const Component = component;
        return (React.createElement(Component, Object.assign({}, props, { className: css(styles$16.stack, hasGutter && styles$16.modifiers.gutter, className) }), children));
    };
    Stack.displayName = 'Stack';

    const StackItem = (_a) => {
        var { isFilled = false, className = '', children = null } = _a, props = __rest(_a, ["isFilled", "className", "children"]);
        return (React.createElement("div", Object.assign({}, props, { className: css(styles$16.stackItem, isFilled && styles$16.modifiers.fill, className) }), children));
    };
    StackItem.displayName = 'StackItem';

    exports.ASTERISK = ASTERISK;
    exports.AboutModal = AboutModal;
    exports.Accordion = Accordion;
    exports.AccordionContent = AccordionContent;
    exports.AccordionItem = AccordionItem;
    exports.AccordionToggle = AccordionToggle;
    exports.ActionGroup = ActionGroup;
    exports.ActionList = ActionList;
    exports.ActionListGroup = ActionListGroup;
    exports.ActionListItem = ActionListItem;
    exports.Alert = Alert;
    exports.AlertActionCloseButton = AlertActionCloseButton;
    exports.AlertActionLink = AlertActionLink;
    exports.AlertContext = AlertContext;
    exports.AlertGroup = AlertGroup;
    exports.ApplicationLauncher = ApplicationLauncher;
    exports.ApplicationLauncherContent = ApplicationLauncherContent;
    exports.ApplicationLauncherContext = ApplicationLauncherContext;
    exports.ApplicationLauncherGroup = ApplicationLauncherGroup;
    exports.ApplicationLauncherIcon = ApplicationLauncherIcon;
    exports.ApplicationLauncherItem = ApplicationLauncherItem;
    exports.ApplicationLauncherItemContext = ApplicationLauncherItemContext;
    exports.ApplicationLauncherSeparator = ApplicationLauncherSeparator;
    exports.ApplicationLauncherText = ApplicationLauncherText;
    exports.Avatar = Avatar;
    exports.Backdrop = Backdrop;
    exports.BackgroundImage = BackgroundImage;
    exports.Badge = Badge;
    exports.Banner = Banner;
    exports.Brand = Brand;
    exports.Breadcrumb = Breadcrumb;
    exports.BreadcrumbHeading = BreadcrumbHeading;
    exports.BreadcrumbItem = BreadcrumbItem;
    exports.Bullseye = Bullseye;
    exports.Button = Button;
    exports.CalendarMonth = CalendarMonth;
    exports.Card = Card;
    exports.CardActions = CardActions;
    exports.CardBody = CardBody;
    exports.CardContext = CardContext;
    exports.CardExpandableContent = CardExpandableContent;
    exports.CardFooter = CardFooter;
    exports.CardHeader = CardHeader;
    exports.CardHeaderMain = CardHeaderMain;
    exports.CardTitle = CardTitle;
    exports.Checkbox = Checkbox;
    exports.Chip = Chip;
    exports.ChipGroup = ChipGroup;
    exports.ClipboardCopy = ClipboardCopy;
    exports.ContextSelector = ContextSelector;
    exports.ContextSelectorFooter = ContextSelectorFooter;
    exports.ContextSelectorItem = ContextSelectorItem;
    exports.DataList = DataList;
    exports.DataListAction = DataListAction;
    exports.DataListCell = DataListCell;
    exports.DataListCheck = DataListCheck;
    exports.DataListContent = DataListContent;
    exports.DataListContext = DataListContext;
    exports.DataListControl = DataListControl;
    exports.DataListDragButton = DataListDragButton;
    exports.DataListItem = DataListItem;
    exports.DataListItemCells = DataListItemCells;
    exports.DataListItemRow = DataListItemRow;
    exports.DataListText = DataListText;
    exports.DataListToggle = DataListToggle;
    exports.DatePicker = DatePicker;
    exports.DescriptionList = DescriptionList;
    exports.DescriptionListDescription = DescriptionListDescription;
    exports.DescriptionListGroup = DescriptionListGroup;
    exports.DescriptionListTerm = DescriptionListTerm;
    exports.Divider = Divider;
    exports.Drawer = Drawer;
    exports.DrawerActions = DrawerActions;
    exports.DrawerCloseButton = DrawerCloseButton;
    exports.DrawerContent = DrawerContent;
    exports.DrawerContentBody = DrawerContentBody;
    exports.DrawerContext = DrawerContext;
    exports.DrawerHead = DrawerHead;
    exports.DrawerPanelBody = DrawerPanelBody;
    exports.DrawerPanelContent = DrawerPanelContent;
    exports.DrawerSection = DrawerSection;
    exports.Dropdown = Dropdown;
    exports.DropdownArrowContext = DropdownArrowContext;
    exports.DropdownContext = DropdownContext;
    exports.DropdownGroup = DropdownGroup;
    exports.DropdownItem = DropdownItem;
    exports.DropdownMenu = DropdownMenu;
    exports.DropdownSeparator = DropdownSeparator;
    exports.DropdownToggle = DropdownToggle;
    exports.DropdownToggleAction = DropdownToggleAction;
    exports.DropdownToggleCheckbox = DropdownToggleCheckbox;
    exports.DropdownWithContext = DropdownWithContext;
    exports.DualListSelector = DualListSelector;
    exports.EmptyState = EmptyState;
    exports.EmptyStateBody = EmptyStateBody;
    exports.EmptyStateIcon = EmptyStateIcon;
    exports.EmptyStatePrimary = EmptyStatePrimary;
    exports.EmptyStateSecondaryActions = EmptyStateSecondaryActions;
    exports.ExpandableSection = ExpandableSection;
    exports.FileUpload = FileUpload;
    exports.FileUploadField = FileUploadField;
    exports.Flex = Flex;
    exports.FlexItem = FlexItem;
    exports.FocusTrap = FocusTrap;
    exports.Form = Form;
    exports.FormAlert = FormAlert;
    exports.FormGroup = FormGroup;
    exports.FormHelperText = FormHelperText;
    exports.FormSection = FormSection;
    exports.FormSelect = FormSelect;
    exports.FormSelectOption = FormSelectOption;
    exports.FormSelectOptionGroup = FormSelectOptionGroup;
    exports.Gallery = Gallery;
    exports.GalleryItem = GalleryItem;
    exports.GenerateId = GenerateId;
    exports.Grid = Grid;
    exports.GridItem = GridItem;
    exports.Hint = Hint;
    exports.HintBody = HintBody;
    exports.HintFooter = HintFooter;
    exports.HintTitle = HintTitle;
    exports.InputGroup = InputGroup;
    exports.InputGroupText = InputGroupText;
    exports.JumpLinks = JumpLinks;
    exports.JumpLinksItem = JumpLinksItem;
    exports.KEYHANDLER_DIRECTION = KEYHANDLER_DIRECTION;
    exports.KEY_CODES = KEY_CODES;
    exports.KebabToggle = KebabToggle;
    exports.KeyTypes = KeyTypes;
    exports.Label = Label;
    exports.LabelGroup = LabelGroup;
    exports.Level = Level;
    exports.LevelItem = LevelItem;
    exports.List = List;
    exports.ListItem = ListItem;
    exports.Login = Login;
    exports.LoginFooter = LoginFooter;
    exports.LoginFooterItem = LoginFooterItem;
    exports.LoginForm = LoginForm;
    exports.LoginHeader = LoginHeader;
    exports.LoginMainBody = LoginMainBody;
    exports.LoginMainFooter = LoginMainFooter;
    exports.LoginMainFooterBandItem = LoginMainFooterBandItem;
    exports.LoginMainFooterLinksItem = LoginMainFooterLinksItem;
    exports.LoginMainHeader = LoginMainHeader;
    exports.LoginPage = LoginPage;
    exports.Menu = Menu;
    exports.MenuContent = MenuContent;
    exports.MenuGroup = MenuGroup;
    exports.MenuInput = MenuInput;
    exports.MenuItem = MenuItem;
    exports.MenuItemAction = MenuItemAction;
    exports.MenuList = MenuList;
    exports.Modal = Modal;
    exports.ModalBox = ModalBox;
    exports.ModalBoxBody = ModalBoxBody;
    exports.ModalBoxCloseButton = ModalBoxCloseButton;
    exports.ModalBoxFooter = ModalBoxFooter;
    exports.ModalBoxHeader = ModalBoxHeader;
    exports.ModalContent = ModalContent;
    exports.Nav = Nav;
    exports.NavContext = NavContext;
    exports.NavExpandable = NavExpandable;
    exports.NavGroup = NavGroup;
    exports.NavItem = NavItem;
    exports.NavItemSeparator = NavItemSeparator;
    exports.NavList = NavList;
    exports.NotificationBadge = NotificationBadge;
    exports.NotificationDrawer = NotificationDrawer;
    exports.NotificationDrawerBody = NotificationDrawerBody;
    exports.NotificationDrawerGroup = NotificationDrawerGroup;
    exports.NotificationDrawerGroupList = NotificationDrawerGroupList;
    exports.NotificationDrawerHeader = NotificationDrawerHeader;
    exports.NotificationDrawerList = NotificationDrawerList;
    exports.NotificationDrawerListItem = NotificationDrawerListItem;
    exports.NotificationDrawerListItemBody = NotificationDrawerListItemBody;
    exports.NotificationDrawerListItemHeader = NotificationDrawerListItemHeader;
    exports.OptionsMenu = OptionsMenu;
    exports.OptionsMenuItem = OptionsMenuItem;
    exports.OptionsMenuItemGroup = OptionsMenuItemGroup;
    exports.OptionsMenuSeparator = OptionsMenuSeparator;
    exports.OptionsMenuToggle = OptionsMenuToggle;
    exports.OptionsMenuToggleWithText = OptionsMenuToggleWithText;
    exports.OverflowMenu = OverflowMenu;
    exports.OverflowMenuContent = OverflowMenuContent;
    exports.OverflowMenuControl = OverflowMenuControl;
    exports.OverflowMenuDropdownItem = OverflowMenuDropdownItem;
    exports.OverflowMenuGroup = OverflowMenuGroup;
    exports.OverflowMenuItem = OverflowMenuItem;
    exports.Page = Page;
    exports.PageBreadcrumb = PageBreadcrumb;
    exports.PageContextConsumer = PageContextConsumer;
    exports.PageContextProvider = PageContextProvider;
    exports.PageGroup = PageGroup;
    exports.PageHeader = PageHeader;
    exports.PageHeaderTools = PageHeaderTools;
    exports.PageHeaderToolsGroup = PageHeaderToolsGroup;
    exports.PageHeaderToolsItem = PageHeaderToolsItem;
    exports.PageNavigation = PageNavigation;
    exports.PageSection = PageSection;
    exports.PageSidebar = PageSidebar;
    exports.Pagination = Pagination;
    exports.Popover = Popover;
    exports.Progress = Progress;
    exports.ProgressBar = ProgressBar;
    exports.ProgressContainer = ProgressContainer;
    exports.Radio = Radio;
    exports.SIDE = SIDE;
    exports.SearchInput = SearchInput;
    exports.Select = Select;
    exports.SelectConsumer = SelectConsumer;
    exports.SelectContext = SelectContext;
    exports.SelectGroup = SelectGroup;
    exports.SelectOption = SelectOption;
    exports.SelectProvider = SelectProvider;
    exports.SimpleList = SimpleList;
    exports.SimpleListContext = SimpleListContext;
    exports.SimpleListGroup = SimpleListGroup;
    exports.SimpleListItem = SimpleListItem;
    exports.Skeleton = Skeleton;
    exports.SkipToContent = SkipToContent;
    exports.Spinner = Spinner;
    exports.Split = Split;
    exports.SplitItem = SplitItem;
    exports.Stack = Stack;
    exports.StackItem = StackItem;
    exports.Switch = Switch;
    exports.Tab = Tab;
    exports.TabContent = TabContent;
    exports.TabTitleIcon = TabTitleIcon;
    exports.TabTitleText = TabTitleText;
    exports.Tabs = Tabs;
    exports.TabsContextConsumer = TabsContextConsumer;
    exports.TabsContextProvider = TabsContextProvider;
    exports.Text = Text;
    exports.TextArea = TextArea;
    exports.TextAreaBase = TextAreaBase;
    exports.TextContent = TextContent;
    exports.TextInput = TextInput;
    exports.TextInputBase = TextInputBase;
    exports.TextList = TextList;
    exports.TextListItem = TextListItem;
    exports.Tile = Tile;
    exports.TimeOption = TimeOption;
    exports.TimePicker = TimePicker;
    exports.Title = Title;
    exports.ToggleGroup = ToggleGroup;
    exports.ToggleGroupItem = ToggleGroupItem;
    exports.ToggleTemplate = ToggleTemplate;
    exports.Toolbar = Toolbar;
    exports.ToolbarContent = ToolbarContent;
    exports.ToolbarContentContext = ToolbarContentContext;
    exports.ToolbarContext = ToolbarContext;
    exports.ToolbarExpandIconWrapper = ToolbarExpandIconWrapper;
    exports.ToolbarFilter = ToolbarFilter;
    exports.ToolbarGroup = ToolbarGroup;
    exports.ToolbarItem = ToolbarItem;
    exports.ToolbarToggleGroup = ToolbarToggleGroup;
    exports.Tooltip = Tooltip;
    exports.Touchspin = Touchspin;
    exports.TreeView = TreeView;
    exports.TreeViewList = TreeViewList;
    exports.TreeViewListItem = TreeViewListItem;
    exports.TreeViewSearch = TreeViewSearch;
    exports.Wizard = Wizard;
    exports.WizardBody = WizardBody;
    exports.WizardContext = WizardContext;
    exports.WizardContextConsumer = WizardContextConsumer;
    exports.WizardContextProvider = WizardContextProvider;
    exports.WizardFooter = WizardFooter;
    exports.WizardHeader = WizardHeader;
    exports.WizardNav = WizardNav;
    exports.WizardNavItem = WizardNavItem;
    exports.WizardToggle = WizardToggle;
    exports.canUseDOM = canUseDOM;
    exports.capitalize = capitalize;
    exports.clipboardCopyFunc = clipboardCopyFunc;
    exports.debounce = debounce;
    exports.fillTemplate = fillTemplate;
    exports.formatBreakpointMods = formatBreakpointMods;
    exports.getDefaultOUIAId = getDefaultOUIAId;
    exports.getNextIndex = getNextIndex;
    exports.getOUIAProps = getOUIAProps;
    exports.getTextWidth = getTextWidth;
    exports.getUniqueId = getUniqueId;
    exports.globalBreakpoints = globalBreakpoints;
    exports.innerDimensions = innerDimensions;
    exports.isElementInView = isElementInView;
    exports.isValidDate = isValidDate;
    exports.keyHandler = keyHandler;
    exports.pluralize = pluralize;
    exports.preventedEvents = preventedEvents;
    exports.sideElementIsOutOfView = sideElementIsOutOfView;
    exports.toCamel = toCamel;
    exports.trimLeft = trimLeft;
    exports.useOUIAId = useOUIAId;
    exports.useOUIAProps = useOUIAProps;
    exports.variantIcons = variantIcons$1;

    Object.defineProperty(exports, '__esModule', { value: true });

})));