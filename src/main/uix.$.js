(function(global, Uix){
    'use strict';

    Uix.$ = {};

    Uix.$.parseToHtml = function parseToHtml(str){
        const template = document.createElement('template');
        template.innerHTML = str.trim();
        return template.content.childNodes[0];
    };

    Uix.$.removeAll = function removeAll(selector, fn){
        const elements = document.querySelectorAll(selector);
        return Array.prototype.forEach.call(elements, e => e.remove());
    }

})(window, window.Uix);