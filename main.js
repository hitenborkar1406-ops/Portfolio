/* Mobile nav toggle */
(function () {
  const nav = document.querySelector('.nav');
  const links = document.querySelector('.nav__links');
  if (!links) return;

  /* Create burger */
  const burger = document.createElement('button');
  burger.className = 'nav__burger';
  burger.setAttribute('aria-label', 'Open menu');
  burger.setAttribute('aria-expanded', 'false');
  burger.innerHTML = '<span></span><span></span><span></span>';
  nav.querySelector('.nav__inner').appendChild(burger);

  burger.addEventListener('click', function () {
    const open = links.classList.toggle('nav__links--open');
    burger.classList.toggle('nav__burger--open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  /* Close on link click */
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('nav__links--open');
      burger.classList.remove('nav__burger--open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
})();

