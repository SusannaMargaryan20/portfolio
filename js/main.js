(function () {
'use strict';

const themeBtn = document.getElementById('theme-btn');
const stored = localStorage.getItem('sm-theme');
if (stored) {
document.documentElement.setAttribute('data-theme', stored);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
document.documentElement.setAttribute('data-theme', 'light');
}

themeBtn.addEventListener('click', function () {
const cur = document.documentElement.getAttribute('data-theme');
const next = cur === 'dark' ? 'light' : 'dark';
document.documentElement.setAttribute('data-theme', next);
localStorage.setItem('sm-theme', next);
});

const mobToggle = document.getElementById('mobile-toggle');
const mobNav = document.getElementById('mobile-nav');

mobToggle.addEventListener('click', function () {
const exp = mobToggle.getAttribute('aria-expanded') === 'true';
mobToggle.setAttribute('aria-expanded', String(!exp));
mobNav.classList.toggle('open');
mobNav.setAttribute('aria-hidden', String(exp));
document.body.style.overflow = exp ? '' : 'hidden';
});

mobNav.querySelectorAll('a').forEach(function (a) {
a.addEventListener('click', function () {
mobToggle.setAttribute('aria-expanded', 'false');
mobNav.classList.remove('open');
mobNav.setAttribute('aria-hidden', 'true');
document.body.style.overflow = '';
});
});

const header = document.getElementById('site-header');
let ticking = false;

window.addEventListener('scroll', function () {
if (!ticking) {
window.requestAnimationFrame(function () {
header.classList.toggle('scrolled', window.scrollY > 20);
ticking = false;
});
ticking = true;
}
}, { passive: true });

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const spy = new IntersectionObserver(function (entries) {
entries.forEach(function (e) {
if (e.isIntersecting) {
const id = e.target.id;
navLinks.forEach(function (l) {
l.classList.toggle('active', l.getAttribute('data-section') === id);
});
}
});
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(function (s) { spy.observe(s); });

const reveal = new IntersectionObserver(function (entries) {
entries.forEach(function (e) {
if (e.isIntersecting) {
e.target.classList.add('revealed');
reveal.unobserve(e.target);
}
});
}, { threshold: 0.12 });

document.querySelectorAll('[data-reveal]').forEach(function (el) {
reveal.observe(el);
});

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(function (a) {
a.addEventListener('click', function (e) {
const targetId = a.getAttribute('href').substring(1);
const t = document.getElementById(targetId);
if (t) {
e.preventDefault();
t.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
});
});
})();