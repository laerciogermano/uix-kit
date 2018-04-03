#### dialog 

[Demo](https://jsfiddle.net/2u2mnypf/1/)

```javascript

Uix.dialog({
  title: 'Mudança de senha', 
  content: 'Deseja mesmo mudar sua senha?',
  buttons: ['Cancelar', 'Aceitar']
}).then(() => {
    console.log('accepted');
}).catch(() => {
    console.log('rejected');
});

```

