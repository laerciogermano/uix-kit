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

    Uix.$.keyup = function keyup(selector, fn){
        let $elements = document.querySelectorAll(selector);

        Array.prototype.forEach.call($elements, el => {
            insertListener(el);
        });
        
        document.addEventListener('DOMNodeInserted', e => {
            let $elements = document.querySelectorAll(selector);

            Array.prototype.forEach.call($elements, el => {
                Array.prototype.indexOf.call($elements, el) >= 0
                    && insertListener(el);
            });
        }); 

        function insertListener(target){
            target.addEventListener('keyup', fn);
        }
    };

})(window, window.Uix);