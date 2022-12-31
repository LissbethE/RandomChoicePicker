'use strict';

const textarea = document.querySelector('.textarea');
const tags = document.querySelector('.tags');

textarea.focus();
textarea.addEventListener('keydown', function (e) {
  const text = e.target.value;
  const arrText = text
    .split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim());

  tags.innerHTML = '';

  arrText.forEach(tag =>
    tags.insertAdjacentHTML('beforeend', `<span class="tag">${tag}</span>`)
  );

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    randomSelect();
  }
});

function randomSelect() {
  const times = 30;

  const intervalo = setInterval(() => {
    const randomTag = pickRandomTag(times);

    highlightTag(randomTag);
    setTimeout(() => unHighlightTag(randomTag), 100);
  }, 100);

  // Se encarga de detenerlo y elegira una etiqueta aleatoria para resaltar
  setTimeout(() => {
    clearInterval(intervalo);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tag = Array.from(document.querySelectorAll('.tag'));

  return tag[Math.floor(Math.random() * tag.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}

/*
textarea.focus();
textarea.addEventListener('keydown', function (e) {
  const text = e.target.value;

  if (e.key === 'Enter' || text.endsWith(',')) {
    tags.insertAdjacentHTML('beforeend', `<span class="tag">${text}</span>`);
  }
});
*/
