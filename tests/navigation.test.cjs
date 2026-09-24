const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

let scrollY = 0;
const events = {};
const element = () => ({
  children: [],
  attributes: {},
  append(child) { this.children.push(child); },
  prepend(child) { this.children.unshift(child); },
  setAttribute(name, value) { this.attributes[name] = value; },
  removeAttribute(name) { delete this.attributes[name]; },
});
const panels = ['Watch my talks..', 'My Projects', 'Resume', 'Contact Me'].map((label, index) => ({
  querySelector(selector) { return selector === 'span' ? { textContent: label } : { cloneNode: () => ({}) }; },
  getBoundingClientRect() { return { top: index * 1000 - scrollY, bottom: (index + 1) * 1000 - scrollY }; },
}));
const stage = { prepend(indicator) { this.indicator = indicator; } };
const app = {
  querySelector(selector) {
    if (selector === '.placeholder-window:nth-child(3) .placeholder-panel') return { className: '', innerHTML: '', replaceWith() {} };
    if (selector === '.placeholder-stage') return stage;
    return { insertAdjacentHTML() {}, innerHTML: '', href: '', ariaLabel: '' };
  },
  querySelectorAll(selector) { return selector === '.placeholder-window' ? panels : []; },
};
const document = { querySelector: () => app, createElement: element };
vm.runInNewContext(fs.readFileSync('docs/src/main.js', 'utf8'), {
  document, location: { pathname: '/index.html' },
  window: { addEventListener: (event, callback) => { events[event] = callback; } },
  innerHeight: 1000,
});
const links = stage.indicator.children;
const css = fs.readFileSync('docs/src/style.css', 'utf8');
assert.match(css, /\.panel-indicator \{[^}]*position: sticky/);
assert.match(css, /body \{[^}]*overflow-x: clip/);
assert.equal(links.length, 4);
assert.equal(links[0].attributes['aria-current'], 'step');
for (let index = 1; index < 4; index++) {
  scrollY = index * 1000;
  events.scroll();
  assert.equal(links.filter((link) => link.attributes['aria-current'] === 'step').length, 1);
  assert.equal(links[index].attributes['aria-current'], 'step');
  assert.equal(links[index].href, `#panel-${index + 1}`);
}
