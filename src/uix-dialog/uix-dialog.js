(function(global, Uix, $){
    'use strict';

    let timeout;

    Uix.dialog = function dialog(options){
        const $body   = document.body;
        const $dialog = startTemplate();

        // limpa o timeout
        clearTimeout(timeout);

        // Remove todas as máscaras
        $.removeAll('uix-mask');

        // Adiciona nosso template
        $body.appendChild($dialog);

        return new Promise((resolve, reject) => {
            const $accept = $dialog.querySelector('[uix-accept]');
            const $reject = $dialog.querySelector('[uix-reject]');
            
            $accept.addEventListener('click', onAccept);
            $reject.addEventListener('click', onReject);
    
            function onAccept(){
                hideAndClearDialog();
                resolve();
            }
    
            function onReject(){
                hideAndClearDialog();
                reject();
            }
        });

        function hideAndClearDialog(){
            $dialog.classList.add('hidden');
            $dialog.classList.remove('visible');
            timeout = setTimeout(() => {
                $.removeAll('uix-mask');
                console.log('removendo');
            }, 1000);
        }

        function startTemplate(){
            return $.parseToHtml(`
                <uix-mask class="visible">
                    <uix-dialog>
                        <span class="title">${options.title}</span>
                        <div class="content">${options.content}</div>
                        <div class="actions">
                            <button class="uix btn" uix-reject>${options.buttons[0]}</button>
                            <button class="uix btn" uix-accept>${options.buttons[1]}</button>
                        </div>
                    </uix-dialog>
                </uix-mask>
            `);
        }

    };

})(window, Uix, Uix.$);