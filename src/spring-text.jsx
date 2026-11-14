import React from 'react';
import { createRoot } from 'react-dom/client';
import TextEngine from 'spring-text-engine';

/**
 * Spring-driven text animation for Hallmark portfolio.
 * Uses spring-text-engine@0.1.5 driven by @react-spring/web physics.
 * Config: tension: 200, friction: 22, stagger: 22ms, letterOut: { opacity: 0, scale: 0.6 }, letterIn: { opacity: 1, scale: 1 }
 */

function isElementCentered(el) {
  if (!el) return false;
  if (el.classList.contains('justify-center') || el.classList.contains('text-center')) {
    return true;
  }
  try {
    const style = window.getComputedStyle(el);
    if (style.textAlign === 'center') return true;
    const parentStyle = el.parentElement ? window.getComputedStyle(el.parentElement) : null;
    if (parentStyle && parentStyle.textAlign === 'center') return true;
  } catch (_) {}
  return false;
}

function parseElementContent(el) {
  // If the element contains multiple .mask-line or br tags, preserve the break
  const maskLines = Array.from(el.querySelectorAll('.mask-line'));
  if (maskLines.length > 1) {
    const items = [];
    maskLines.forEach((ml, idx) => {
      const txt = ml.textContent.trim();
      if (txt) {
        if (items.length > 0) {
          items.push(
            React.createElement('span', {
              key: `break-${idx}`,
              className: 'spring-text-break',
              'aria-hidden': 'true'
            })
          );
        }
        items.push(txt);
      }
    });
    if (items.length > 0) return items;
  }

  const brs = el.querySelectorAll('br');
  if (brs.length > 0) {
    const items = [];
    let curText = '';
    el.childNodes.forEach((node, idx) => {
      if (node.nodeType === Node.TEXT_NODE) {
        curText += node.textContent;
      } else if (node.nodeName === 'BR') {
        const trimmed = curText.trim();
        if (trimmed) items.push(trimmed);
        curText = '';
        items.push(
          React.createElement('span', {
            key: `br-${idx}`,
            className: 'spring-text-break',
            'aria-hidden': 'true'
          })
        );
      } else {
        curText += ' ' + node.textContent;
      }
    });
    const remaining = curText.trim();
    if (remaining) items.push(remaining);
    if (items.length > 0) return items;
  }

  const clean = el.textContent.trim();
  return clean;
}

function initSpringText() {
  if (typeof document === 'undefined') return;

  // Select all headings and body copy
  const selectors = [
    'h1.hero__headline',
    '.hero__sentence',
    'section .section__head h2',
    'section .section__head p.lead',
    'section .section__head p.section__lead',
    '.project-card h3',
    '.project-card .project-card__desc',
    '.book-showcase__title',
    '.book-showcase__desc',
    '.about__lead',
    '.about__item-detail',
    '.contact__text h2',
    '.contact__text p.lead',
    '[data-spring-text]'
  ];

  const elements = Array.from(document.querySelectorAll(selectors.join(', ')));

  elements.forEach((el) => {
    if (!el || el.dataset.springEngineMounted) return;
    el.dataset.springEngineMounted = 'true';

    // Remove old conflicting transition attributes
    if (el.hasAttribute('data-rv')) {
      el.removeAttribute('data-rv');
      el.classList.add('rv-in');
    }

    const content = parseElementContent(el);
    if (!content || (Array.isArray(content) && content.length === 0)) return;

    const centered = isElementCentered(el);
    const originalText = el.textContent.trim();

    // Prepare container
    el.innerHTML = '';
    const root = createRoot(el);

    root.render(
      React.createElement(
        TextEngine,
        {
          tag: 'span',
          mode: 'once',
          letterOut: { opacity: 0, scale: 0.6 },
          letterIn: { opacity: 1, scale: 1 },
          letterConfig: { tension: 200, friction: 22 },
          letterStagger: 22,
          className: centered ? 'justify-center' : '',
          style: {
            justifyContent: centered ? 'center' : 'flex-start',
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            lineHeight: 'inherit',
            letterSpacing: 'inherit',
            color: 'inherit'
          }
        },
        Array.isArray(content) ? content : originalText
      )
    );
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSpringText);
} else {
  initSpringText();
}

export { initSpringText };
