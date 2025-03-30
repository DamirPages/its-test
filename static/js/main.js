"use strict";

var mobileMenuButton = document.querySelectorAll('.menu-button');
var mobileMenuContainer = document.querySelector('.banner-menu');
mobileMenuButton.forEach(function (item) {
  item.addEventListener('click', function () {
    mobileMenuContainer.classList.toggle('active');
  });
});
var anchorsLinks = document.querySelectorAll('[href^="#"]');
anchorsLinks.forEach(function (link) {
  var idElement = link.getAttribute('href').replace('#', '');
  link.addEventListener('click', function (e) {
    e.preventDefault();
    if (idElement.length) {
      var element = document.getElementById(idElement);
      var yOffset = 0;
      if (window.innerWidth >= 1241) {
        yOffset = -110;
      } else {
        yOffset = -84;
      }
      var y = element.getBoundingClientRect().top + yOffset;
      window.scrollBy({
        top: y,
        behavior: "smooth"
      });
    }
  });
});
var bannerMenu = document.querySelector('.banner-menu');
bannerMenu.addEventListener('click', function (e) {
  if (e.target.classList.contains('banner-menu-link')) {
    bannerMenu.classList.remove('active');
  }
});
"use strict";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grid: {
    rows: 2
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  spaceBetween: 30,
  navigation: {
    nextEl: '.cases__next',
    prevEl: '.cases__prev'
  },
  breakpoints: {
    // when window width is >= 320px
    1241: {
      slidesPerView: 3
    },
    767: {
      slidesPerView: 2
    }
  }
});
"use strict";

var titlesDrop = document.querySelectorAll('.competencies__title');
titlesDrop.forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('active');
  });
});
var interestingButton = document.querySelector('.interesting__moreitems');
interestingButton.addEventListener('click', function () {
  document.querySelector('.interesting__container').classList.add('more');
});
"use strict";

window.addEventListener('scroll', function () {
  var posTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  var fixedHeader = document.querySelector('.fixed-menu');
  var bannerMenu = document.querySelector('.banner-menu');
  if (posTop > window.innerHeight) {
    fixedHeader.classList.add('active');
    bannerMenu.classList.add('fixed');
  } else {
    fixedHeader.classList.remove('active');
    bannerMenu.classList.remove('fixed');
  }
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var inputContainers = document.querySelectorAll('.input, .textarea');
inputContainers.forEach(function (inputContainer) {
  var input = inputContainer.querySelector('input, textarea');
  var placeholder = inputContainer.querySelector('.placeholder');
  input.addEventListener('input', function () {
    if (input.value.trim()) {
      placeholder.classList.add('active');
    } else {
      placeholder.classList.remove('active');
    }
  });
});
var inputFiles = document.querySelectorAll('.brif__input');
inputFiles.forEach(function (container) {
  var input = container.querySelector('input');
  var clearBtn = container.querySelector('.brif__clear');
  var fileName = container.querySelector('.brif__file');
  var placeholder = container.querySelector('.brif__file').textContent;
  input.addEventListener('change', function (e) {
    if (typeof e.target.files[0] == 'undefined') {
      fileName.textContent = placeholder;
    } else {
      fileName.textContent = e.target.files[0].name;
    }
  });
  clearBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    input.value = "";
    fileName.textContent = placeholder;
    var event = new Event('change');
    input.dispatchEvent(event);
  });
});
var popupOpenButtons = document.querySelectorAll('[data-popup-open]');
popupOpenButtons.forEach(function (popupBtn) {
  popupBtn.addEventListener('click', function () {
    var popupName = popupBtn.dataset.popupOpen;
    var popupContainer = document.querySelector('.' + popupName);
    popupContainer.classList.add('active');
    document.body.classList.add('no-scroll');
  });
});
var popupCloseButtons = document.querySelectorAll('.popup__close');
popupCloseButtons.forEach(function (closeBtn) {
  var popupContainer = closeBtn.closest('.popup');
  closeBtn.addEventListener('click', function () {
    popupContainer.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});
var formsContainers = document.querySelectorAll('.popup__form');
formsContainers.forEach(function (form) {
  var formReq = form.querySelectorAll('.req');
  var formMail = form.querySelectorAll('.mail');
  var formCheck = form.querySelectorAll('.check');
  var formFile = form.querySelectorAll('.file');
  var button = form.querySelector('.button');
  formReq.forEach(function (item) {
    item.addEventListener('input', checkValid);
  });
  formMail.forEach(function (item) {
    item.addEventListener('input', checkValid);
  });
  formFile.forEach(function (item) {
    item.addEventListener('change', checkValid);
  });
  formCheck.forEach(function (item) {
    item.addEventListener('change', checkValid);
  });
  function checkValid() {
    var formValid = true;
    formReq.forEach(function (item) {
      if (!item.value.length) formValid = false;
    });
    formMail.forEach(function (item) {
      if (!validateEmail(item.value)) formValid = false;
    });
    formFile.forEach(function (item) {
      if (!item.value.length) formValid = false;
    });
    formCheck.forEach(function (item) {
      if (!item.checked) formValid = false;
    });
    if (formValid) {
      button.removeAttribute('disabled');
    } else {
      button.setAttribute('disabled', true);
    }
  }
});
var formsElements = document.querySelectorAll('.popup__form');
formsElements.forEach(function (form) {
  form.addEventListener('submit', function (e) {
    sendData(e, form);
  });
});
function sendData(_x, _x2) {
  return _sendData.apply(this, arguments);
}
function _sendData() {
  _sendData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e, currentForm) {
    var formData, response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();
          formData = new FormData(currentForm);
          _context.next = 4;
          return fetch('sendmail.php', {
            method: 'POST',
            body: formData
          });
        case 4:
          response = _context.sent;
          if (response.ok) {
            document.querySelector('.popup__thanks').classList.add('active');
            setTimeout(function () {
              document.querySelector('.popup__thanks').classList.remove('active');
            }, 3000);
            currentForm.reset();
          }
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _sendData.apply(this, arguments);
}
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
"use strict";

var swiper = new Swiper(".swiperReview", {
  slidesPerView: 1,
  grid: {
    rows: 3
  },
  pagination: {
    el: ".swiper-pagination-review",
    clickable: true,
  },
  spaceBetween: 15,
  breakpoints: {
    // when window width is >= 320px
    1241: {
      slidesPerView: 4
    },
    600: {
      slidesPerView: 2
    }
  }
});

const inputTels = document.querySelectorAll(".tel");

const prefixNumber = (str) => {
  if (str === "7") {
    return "7 (";
  }
  if (str === "8") {
    return "8 (";
  }
  if (str === "9") {
    return "7 (9";
  }
  return "7 (";
};

inputTels.forEach(input => {
  input.addEventListener("input", (e) => {
    const value = input.value.replace(/\D+/g, "");
    const numberLength = 11;
  
    let result;
    if (input.value.includes("+8") || input.value[0] === "8") {
      result = "";
    } else {
      result = "+";
    }
  
    //
    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 0:
          result += prefixNumber(value[i]);
          continue;
        case 4:
          result += ") ";
          break;
        case 7:
          result += "-";
          break;
        case 9:
          result += "-";
          break;
        default:
          break;
      }
      result += value[i];
    }
    //
    input.value = result;
  });
})


const cookieButton = document.querySelector('.cookie-button');
const cookiePopup = document.querySelector('.popup__usecookie');

const cookieAcept = localStorage.getItem('cookieAcept');

if(!cookieAcept){
    cookiePopup.classList.add('active');
}

cookieButton.addEventListener('click', function(){
    localStorage.setItem('cookieAcept', '1');
    cookiePopup.classList.remove('active');
});

Fancybox.bind("[data-fancybox]");

const popupOverlays = document.querySelectorAll('.popup__overlay');
popupOverlays.forEach(over => {
  over.addEventListener('click', () => {
    over.closest('.popup').classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});

const reviewsItems = [
  {
    logo: "./static/img/content/review1-logo.png",
    review: "./static/img/content/review1.png"
  },
  {
    logo: "./static/img/content/review2-logo.png",
    review: "./static/img/content/review2.png"
  },
  {
    logo: "./static/img/content/review3-logo.png",
    review: "./static/img/content/review3.png"
  },
  {
    logo: "./static/img/content/review4-logo.jpg",
    review: "./static/img/content/review4.png"
  },
  {
    logo: "./static/img/content/review5-logo.png",
    review: "./static/img/content/review5.png"
  },
  {
    logo: "./static/img/content/review6-logo.png",
    review: "./static/img/content/review6.png"
  },
  {
    logo: "./static/img/content/review7-logo.jpg",
    review: "./static/img/content/review7.png"
  },
  {
    logo: "./static/img/content/review8-logo.jpg",
    review: "./static/img/content/review8.png"
  },
  {
    logo: "./static/img/content/review9-logo.png",
    review: "./static/img/content/review9.png"
  },
  {
    logo: "./static/img/content/review10-logo.png",
    review: "./static/img/content/review10.png"
  },
  {
    logo: "./static/img/content/review11-logo.png",
    review: "./static/img/content/review11.png"
  },
  {
    logo: "./static/img/content/review12-logo.png",
    review: "./static/img/content/review12.png"
  }
];

const reviewViews = document.querySelectorAll('[data-review-count]');
const reviewImg = document.querySelector('#review-img');
const reviewLogo = document.querySelector('#review-logo');

reviewViews.forEach(btn => {
  const reviewCount = btn.dataset.reviewCount;
  const item = reviewsItems[+reviewCount];
  btn.addEventListener('click', () => {
    reviewImg.setAttribute('src', item.review);
    reviewLogo.setAttribute('src', item.logo);
  })
});

const prev = document.querySelector('.reviews-modal-prev');
const next = document.querySelector('.reviews-modal-next');

prev.addEventListener('click', () => {
  const path = reviewImg.getAttribute('src');
  let index = reviewsItems.findIndex(item => item.review === path);
  
  if(index !== 0){
    index--;
    reviewImg.setAttribute('src', reviewsItems[index].review);
    reviewLogo.setAttribute('src', reviewsItems[index].logo);
  }
});

next.addEventListener('click', () => {
  const path = reviewImg.getAttribute('src');
  let index = reviewsItems.findIndex(item => item.review === path);
  
  if(index !== reviewsItems.length){
    index++;
    reviewImg.setAttribute('src', reviewsItems[index].review);
    reviewLogo.setAttribute('src', reviewsItems[index].logo);
  }
});