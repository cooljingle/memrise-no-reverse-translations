// ==UserScript==
// @name           Memrise No Reverse Translations
// @namespace      https://github.com/cooljingle
// @description    Disables reverse translations when using Memrise
// @match          http://www.memrise.com/course/*/garden/*
// @match          http://www.memrise.com/garden/review/*
// @version        0.1.0
// @updateURL      https://github.com/cooljingle/memrise-no-reverse-translations/raw/master/Memrise_No_Reverse_Translations.user.js
// @downloadURL    https://github.com/cooljingle/memrise-no-reverse-translations/raw/master/Memrise_No_Reverse_Translations.user.js
// @grant          none
// ==/UserScript==

$(document).ready(function() {

    MEMRISE.garden.boxes.load = (function() {
        var cached_function = MEMRISE.garden.boxes.load;
        return function() {
            enableNoReverseTranslations();
            return cached_function.apply(this, arguments);
        };
    }());
    
    function enableNoReverseTranslations() {
        MEMRISE.garden.session.box_factory.make = (function() {
            var cached_function = MEMRISE.garden.session.box_factory.make;
            return function() {         
                var result = cached_function.apply(this, arguments);
                arguments[0].forwards = true;
                return result;
            };
        }());
    }
});
