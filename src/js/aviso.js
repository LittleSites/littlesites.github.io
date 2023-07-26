const close = document.getElementById('close');
const content = document.querySelector('.content');
const text_av = document.getElementById('text-aviso');

content.style.visibility = 'hidden';

close.addEventListener('click', () => {
  content.style.visibility = 'hidden';
});

text_av.addEventListener('click', () => {
  content.style.visibility = 'visible';
});
