/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = function(exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function(value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() {
                return module['default'];
            } :
            /******/
            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 0);
    /******/
})
/************************************************************************/
/******/
([
    /* 0 */
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _blocks_banner_banner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        /* harmony import */
        var _blocks_banner_banner_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_blocks_banner_banner_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var _blocks_features_features_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
        /* harmony import */
        var _blocks_features_features_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_blocks_features_features_js__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */
        var _blocks_play_play_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
        /* harmony import */
        var _blocks_play_play_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_blocks_play_play_js__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */
        var _blocks_nav_mobile_nav_mobile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
        /* harmony import */
        var _blocks_nav_mobile_nav_mobile_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_blocks_nav_mobile_nav_mobile_js__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */
        var _blocks_faq_faq_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
        /* harmony import */
        var _blocks_faq_faq_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_blocks_faq_faq_js__WEBPACK_IMPORTED_MODULE_4__);
        /* harmony import */
        var _blocks_registration_registration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
        /* harmony import */
        var _blocks_registration_registration_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_blocks_registration_registration_js__WEBPACK_IMPORTED_MODULE_5__);
        /* harmony import */
        var _blocks_login_login_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
        /* harmony import */
        var _blocks_login_login_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_blocks_login_login_js__WEBPACK_IMPORTED_MODULE_6__);
        /* harmony import */
        var _blocks_success_success_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
        /* harmony import */
        var _blocks_success_success_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_blocks_success_success_js__WEBPACK_IMPORTED_MODULE_7__);
        /* harmony import */
        var _blocks_preloader_preloader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
        /* harmony import */
        var _blocks_preloader_preloader_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_blocks_preloader_preloader_js__WEBPACK_IMPORTED_MODULE_8__);
        /* harmony import */
        var _blocks_workflow_workflow_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
        /* harmony import */
        var _blocks_workflow_workflow_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_blocks_workflow_workflow_js__WEBPACK_IMPORTED_MODULE_9__);










        $(function() {
            $('a[href^="#"]').on('click', function() {
                $('.nav-mobile').hide();
                var href = $(this).attr('href');
                $('html, body').animate({
                    scrollTop: $(href).offset().top - 100
                }, 300);
            });

            function animate(el, step, posX, posY) {
                var valX = parseInt(el.css(posX));
                var valY = parseInt(el.css(posY));
                window.addEventListener('mousemove', function(e) {
                    var x = e.clientX / window.innerWidth;
                    var y = e.clientY / window.innerHeight;
                    var newValX = x * step + valX + 'px';
                    var newValY = y * step + valY + 'px';
                    el.css(posX, newValX);
                    el.css(posY, newValY);
                });
            }
            /*
                4 - скорость 30
                3 - скорость 80
                2 - скорость 130
                1 - скорость 180
            */


            animate($('.gem-1'), 180, 'left', 'top'); // 1

            animate($('.gem-2'), 30, 'left', 'top'); // 4

            animate($('.gem-3'), 30, 'left', 'top'); // 4

            animate($('.gem-4'), 180, 'left', 'top'); // 1

            animate($('.gem-5'), 130, 'left', 'top'); // 2

            animate($('.gem-6'), 80, 'right', 'top'); // 3

            animate($('.gem-7'), 130, 'right', 'top'); // 2

            animate($('.gem-8'), 180, 'right', 'top'); // 1

            animate($('.gem-9'), 80, 'right', 'top'); // 3

            animate($('.gem-10'), 30, 'right', 'top'); // 4

            animate($('.gem-11'), 30, 'right', 'top'); // 4
        });

        /***/
    }),
    /* 1 */
    /***/
    (function(module, exports) {

        $(function() {
            $('.banner__slider').bxSlider({
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 1,
                pager: true,
                responsive: true
            });
        });

        /***/
    }),
    /* 2 */
    /***/
    (function(module, exports) {

        $(function() {
            var width = $(window).width();

            if (width < 768) {
                $('.features__list').bxSlider({
                    minSlides: 1,
                    maxSlides: 1,
                    moveSlides: 1,
                    pager: false,
                    responsive: true
                });
            }
        });

        /***/
    }),
    /* 3 */
    /***/
    (function(module, exports) {

        $(function() {
            $('.play').hover(function() {
                $('.video__poster').css('display', 'none');
                $('.video__poster-color').css('display', 'block');
            }, function() {
                $('.video__poster').css('display', 'block');
                $('.video__poster-color').css('display', 'none');
            });
            $('.play').on('click', function() {
                $('.video-popup').css('display', 'flex');
                jQuery("iframe").each(function() {
                    jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                });
            });
            $('.video-popup').on('click', function() {
                $(this).hide();
                jQuery("iframe").each(function() {
                    jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                });
            });
        });

        /***/
    }),
    /* 4 */
    /***/
    (function(module, exports) {

        $(function() {
            $('.navbar__burger').on('click', function() {
                $('.nav-mobile').css('display', 'flex');
            });
            $('.nav-mobile').on('click', function() {
                $(this).hide();
            }).on('click', '.nav-mobile__container', function(e) {
                e.stopPropagation();
            });
        });

        /***/
    }),
    /* 5 */
    /***/
    (function(module, exports) {

        $(function() {
            $('.faq__question').on('click', function() {
                var parent = $(this).parents('.faq__item');
                var answer = parent.find('.faq__answer');
                answer.toggle(300);

                if (parent.hasClass('faq__item--open')) {
                    parent.removeClass('faq__item--open');
                    answer.hide(300);
                } else {
                    parent.addClass('faq__item--open');
                    answer.show(300);
                }
            });
        });

        /***/
    }),
    /* 6 */
    /***/
    (function(module, exports) {

        $(function() {
            $('.registration__btn').on('click', function() {
                var error = false;
                var siteUrl = document.location.href;
                var isEn = siteUrl.indexOf('/en');

                function empty($el) {
                    var val = $el.val();

                    if (val === '') {
                        var html;

                        if (isEn === -1) {
                            html = '<div class="registration__error">Обязательно к заполнению</div>';
                        } else {
                            html = '<div class="registration__error">Required to fill</div>';
                        }

                        $el.next().after(html);
                        $el.parent().addClass('registration__field--fail');
                        error = true;
                    } else {
                        $el.nextAll('.registration__error').remove();
                        $el.parent().removeClass('registration__field--fail');
                        error = false;
                    }

                    return error;
                }

                function email($el) {
                    var val = $el.val();
                    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

                    if (pattern.test(val)) {
                        $el.nextAll('.registration__error').remove();
                        $el.parent().removeClass('registration__field--fail');
                        error = false;
                    } else {
                        var html;

                        if (isEn === -1) {
                            html = '<div class="registration__error">Некорректный email</div>';
                        } else {
                            html = '<div class="registration__error">Invalid email</div>';
                        }

                        $el.next().after(html);
                        $el.parent().addClass('registration__field--fail');
                        error = true;
                    }

                    return error;
                }

                function passwordLength($el) {
                    var val = $el.val();

                    if (val.length < 6) {
                        var html;

                        if (isEn === -1) {
                            html = '<div class="registration__error">Пароль должен быть не менее 6 символов</div>';
                        } else {
                            html = '<div class="registration__error">Password must be at least 6 characters</div>';
                        }

                        $el.next().after(html);
                        $el.parent().addClass('registration__field--fail');
                        error = true;
                    } else {
                        $el.nextAll('.registration__error').remove();
                        $el.parent().removeClass('registration__field--fail');
                        error = false;
                    }

                    return error;
                }

                function passwordCompare($el, $el2) {
                    var val = $el.val();
                    var val2 = $el2.val();

                    if (val !== val2) {
                        var html;

                        if (isEn === -1) {
                            html = '<div class="registration__error">Пароли не совпадают</div>';
                        } else {
                            html = '<div class="registration__error">Password mismatch</div>';
                        }

                        $el.next().after(html);
                        $el.parent().addClass('registration__field--fail');
                        error = true;
                    } else {
                        $el.nextAll('.registration__error').remove();
                        $el.parent().removeClass('registration__field--fail');
                        error = false;
                    }

                    return error;
                }

                function url($el) {
                    var val = $el.val();
                    var pattern = new RegExp("^(http:\/\/|https:\/\/){1}([0-9A-Za-z]+\.)");

                    if (pattern.test(val)) {
                        $el.nextAll('.registration__error').remove();
                        $el.parent().removeClass('registration__field--fail');
                        error = false;
                    } else {
                        var html;

                        if (isEn === -1) {
                            html = '<div class="registration__error">Некорректный url</div>';
                        } else {
                            html = '<div class="registration__error">Invalid url</div>';
                        }

                        $el.next().after(html);
                        $el.parent().addClass('registration__field--fail');
                        error = true;
                    }

                    return error;
                }

                var loginEmpty = empty($('input[name="login"]'));
                var usernameEmpty = empty($('input[name="username"]'));
                var emailEmpty = empty($('input[name="email"]'));
                var emailValid;

                if (emailEmpty === false) {
                    emailValid = email($('input[name="email"]'));
                }

                var passwordEmpty = empty($('input[name="password"]'));
                var passwordValid;

                if (passwordEmpty === false) {
                    passwordValid = passwordLength($('input[name="password"]'));
                }

                var password2Empty = empty($('input[name="password2"]'));
                var password2Valid;

                if (password2Empty === false) {
                    password2Valid = passwordCompare($('input[name="password2"]'), $('input[name="password"]'));
                }

                var phoneEmpty = empty($('input[name="phone"]'));
                var contactsEmpty = empty($('input[name="contacts"]'));
                var urlEmpty = empty($('input[name="url"]'));
                var urlValid;

                if (urlEmpty === false) {
                    urlValid = url($('input[name="url"]'));
                }

                var agree = $('#agree').is(':checked');

                if (loginEmpty || usernameEmpty || emailEmpty || emailValid || passwordEmpty || passwordValid || password2Empty || password2Valid || phoneEmpty || contactsEmpty || urlEmpty || urlValid || !agree) {
                    $('.registration__btn').addClass('registration__btn--disabled');
                } else {
                    $('.registration__btn').removeClass('registration__btn--disabled');
                    $('.success').css('display', 'flex'); //console.log('Отправляем данные на сервер');
                }
            });
        });

        /***/
    }),
    /* 7 */
    /***/
    (function(module, exports) {

        $(function() {
            $('.login__btn').on('click', function() {
                var error = false;
                var siteUrl = document.location.href;
                var isEn = siteUrl.indexOf('/en');

                function empty($el) {
                    var val = $el.val();

                    if (val === '') {
                        var html;

                        if (isEn === -1) {
                            html = '<div class="login__error">Обязательно к заполнению</div>';
                        } else {
                            html = '<div class="login__error">Required to fill</div>';
                        }

                        $el.next().after(html);
                        $el.parent().addClass('login__field--fail');
                        error = true;
                    } else {
                        $el.nextAll('.login__error').remove();
                        $el.parent().removeClass('login__field--fail');
                        error = false;
                    }

                    return error;
                }

                var emailEmpty = empty($('input[name="email"]'));
                var passwordEmpty = empty($('input[name="password"]'));

                if (emailEmpty || passwordEmpty) {
                    $('.login__btn').addClass('login__btn--disabled');
                } else {
                    $('.login__btn').removeClass('login__btn--disabled'); //console.log('Отправляем данные на сервер');
                }
            });
            $('.login__recovery').on('click', function(e) {
                e.preventDefault();
                $('.recovery').css('display', 'flex');
            });
            $('.recovery').on('click', function() {
                $(this).hide();
            }).on('click', '.recovery__container', function(e) {
                e.stopPropagation();
            });
        });

        /***/
    }),
    /* 8 */
    /***/
    (function(module, exports) {

        $(function() {
            $('.success__btn').on('click', function() {
                $('.success').hide();
            });
            $('.success').on('click', function() {
                $(this).hide();
            }).on('click', '.success__container', function(e) {
                e.stopPropagation();
            });
        });

        /***/
    }),
    /* 9 */
    /***/
    (function(module, exports) {

        window.onload = function() {
            document.body.classList.add('loaded_hiding');
            window.setTimeout(function() {
                document.body.classList.add('loaded');
                document.body.classList.remove('loaded_hiding');
            }, 500);
        };

        /***/
    }),
    /* 10 */
    /***/
    (function(module, exports) {

        $(function() {});

        /***/
    })
    /******/
]);