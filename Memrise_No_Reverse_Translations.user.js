// ==UserScript==
// @name           Memrise No Reverse Translations
// @namespace      https://github.com/cooljingle
// @description    Disables reverse translations when using Memrise
// @match          https://www.memrise.com/course/*/garden/*
// @match          https://www.memrise.com/garden/review/*
// @version        0.1.3
// @updateURL      https://github.com/cooljingle/memrise-no-reverse-translations/raw/master/Memrise_No_Reverse_Translations.user.js
// @downloadURL    https://github.com/cooljingle/memrise-no-reverse-translations/raw/master/Memrise_No_Reverse_Translations.user.js
// @grant          none
// ==/UserScript==

$(document).ready(function() {

    MEMRISE.garden.boxes.load = (function() {
        var cached_function = MEMRISE.garden.boxes.load;
        return function() {
            var result = cached_function.apply(this, arguments);
            enableNoReverseTranslations();
            return result;
        };
    }());

    function enableNoReverseTranslations() {
        MEMRISE.garden.session.box_factory.make = (function () {
            var cached_function = MEMRISE.garden.session.box_factory.make;
            return function () {
                var result = cached_function.apply(this, arguments);
                result.template = result.template.replace("reversed_", "");
                return result;
            };
        }());
    }
});
