#### dialog 

[Demo](https://jsfiddle.net/488c3j2r/4/)

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

