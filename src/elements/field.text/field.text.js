(function(global, Uix, $){
    'use strict';

    $.keyup('.uix.input', (e) => {
        const target = e.target;

        target.value == ''
            ? target.classList.remove('active')
            : target.classList.add('active');
    });

})(window, Uix, Uix.$);