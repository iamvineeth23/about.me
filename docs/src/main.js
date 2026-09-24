const app = document.querySelector('#app');

app.innerHTML = `
  <header class="site-header"><a class="brand" href="#top">Vineeth</a><nav aria-label="Primary navigation"><a href="#summary">Summary</a><a href="#experience">Experience</a><a href="#training">Training</a><a href="#talks">Talks</a><a href="#education">Education</a><a href="#skills">Skills</a></nav></header>
  <main id="top">
    <section class="hero" aria-labelledby="name"><div class="hero-copy"><h1 id="name">Vineeth Bharadwaj<br />Prasanna</h1><p class="eyebrow">Cybersecurity · Product Security · Technical Leadership</p><p class="lead contact"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.1 7-13a7 7 0 1 0-14 0c0 6.9 7 13 7 13Zm0-9.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" /></svg>Ingolstadt, Germany</p><p class="lead contact"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3zM3 7l9 6 9-6" /></svg><a href="mailto:vineeth@bharadwaj.de">vineeth@bharadwaj.de</a></p><p class="social"><a href="https://x.com/vin_bharadwaj" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22H17l-4.9-6.4L6.5 22H3.4l7.3-8.3L3 2h6.4l4.4 5.8L18.9 2Zm-1.1 18h1.7L8.4 3.9H6.6L17.8 20Z" /></svg><span>vin_bharadwaj</span></a><a href="https://github.com/iamvineeth23" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.7-1.3-2.3-.3-4.7-1.1-4.7-5A3.9 3.9 0 0 1 6.7 8c-.1-.3-.5-1.3.1-2.8 0 0 .9-.3 2.9 1.1a10 10 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.6 1.5.2 2.5.1 2.8a3.9 3.9 0 0 1 1.1 2.7c0 3.9-2.4 4.7-4.7 5 .4.3.7.9.7 1.8V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" /></svg><span>iamvineeth23</span></a></p></div><img class="portrait" src="./support/cv_bg.PNG" alt="Vineeth B. Prasanna" /></section>
    <section class="section two-column" aria-labelledby="summary"><h2 id="summary">Summary</h2><div class="body-copy"><p>Senior cybersecurity engineer with <strong>7+ years of experience</strong> across product security architecture, vulnerability management and offensive security. Currently leading cross-platform security technologies and ECU cybersecurity at CARIAD across multiple vehicle platforms.</p><p><strong>OSCP+ certified</strong> with additional expertise in AI/ML-assisted security testing, cybersecurity regulation and technical security leadership across multi-organisation engineering programs.</p></div></section>
    <section class="section two-column" id="experience" aria-labelledby="experience-title"><h2 id="experience-title">Work Experience</h2><div><article class="role"><div class="role-meta"><strong>CARIAD SE</strong><span>Germany</span><span>2022 - Present</span></div><div><h3>Senior Technical Security Engineer</h3><h4>Security Technology Lead - Secure Onboard Communication (SecOC)</h4><ul><li>Leading a team of 4 defining and delivering the cross-functional strategy across 15+ ECUs and 3 vehicle platforms across the VW Group.</li><li>Own the end-to-end security technology across the complete V-model lifecycle, delivering across multiple vehicle platforms through SOP.</li></ul><h4>ECU Security Lead</h4><ul><li>Own and lead cybersecurity for the Gateway ECU, implementing security technologies, aligning suppliers, and internal stakeholders to achieve ECU and platform security goals.</li><li>Lead end-to-end product security across the complete V-model lifecycle, &amp; achieved successful SOP milestones.</li></ul><h4>PPE/PPC Vulnerability &amp; Risk Management</h4><ul><li>Designed &amp; established the PPE/PPC platform vulnerability &amp; risk management framework, coordinating vulnerability assessments, remediation across 3 VW Group brands and 10+ ECU SOPs.</li></ul><h4>China GB/T Security Platform Homologation</h4><ul><li>Established a cross-dimensional requirements traceability framework for China cybersecurity homologation by coordinating with Chinese government authorities.</li></ul><h4>Offensive Security</h4><ul><li>Conducted security testing on various features and functions of PPE/PPC Electronic Control Units (ECUs).</li></ul></div></article><article class="role"><div class="role-meta"><strong>Audi AG</strong><span>2019 - 2022</span></div><div><h3>Technical Security Engineer</h3><h4>Offensive Security</h4><ul><li>Conducted security assessments &amp; penetration testing in Audi Security Lab, identifying vulnerabilities across automotive systems.</li></ul><h4>AI-Assisted Security Tooling</h4><ul><li>Developed security testing tools and integrated AI/ML approaches to improve &amp; automate security testing workflows.</li></ul><h4>Graduate Trainee</h4><ul><li>Built detection lab for Audi CERT team with Splunk integration for forensic analysis of security incidents.</li><li>Built PoC for generative AI design tool using GANs for Audi Design Engineering team.</li></ul></div></article></div></section>
    <section class="section two-column" aria-labelledby="training"><h2 id="training">Professional Training</h2><div class="body-copy"><ul><li><strong>OSCP+ - OffSec Certified Professional</strong> - <a href="https://credentials.offsec.com/0db9217b-7e34-4708-b814-84db4315bd00#acc.NcQG0pvm" target="_blank" rel="noopener">Certificate</a></li><li><strong>SANS SEC542</strong> - Web App Penetration Testing and Ethical Hacking</li><li><strong>SANS SEC560</strong> - Network Penetration Testing and Ethical Hacking</li><li><strong>SANS SEC556</strong> - IoT Penetration Testing</li></ul></div></section>
    <section class="section two-column" aria-labelledby="talks"><h2 id="talks">Talks &amp; Guest Lectures</h2><div class="body-copy"><ul><li><strong>Sec.SDV Europe 2026</strong> - Closing the Vulnerability Management loop for SDV</li><li><strong>Sec.SDV Europe 2025</strong> - Beyond Regulations: Proactive Vulnerability Management for SDV</li><li><strong>Secure Our Streets 2024</strong> - Shifting Left Vulnerability Management (<a href="https://www.youtube.com/watch?v=EdPer-OhZd0" target="_blank" rel="noopener">YouTube</a>)</li><li><strong>VulnCon24</strong> - Finding Managing &amp; Preventing Vulnerabilities: An Automotive Perspective (<a href="https://www.youtube.com/watch?v=BX1b2i-uL8I" target="_blank" rel="noopener">YouTube</a>)</li><li><strong>FAU Erlangen University (WS23 &amp; WS24)</strong> - Finding, Handling &amp; Preventing Automotive Software Vulnerabilities</li></ul></div></section>
    <section class="section two-column" id="education" aria-labelledby="education-title"><h2 id="education-title">Education</h2><div><article class="role"><div class="role-meta"><strong>RWTH Aachen University</strong><span>Germany</span><span>2016-2019</span></div><div><h3>Master's in Simulation Science</h3><p>Special focus on artificial intelligence, parallel programming, and optimization techniques.</p><h4>Master's Thesis and Work Student</h4><p><strong>Audi Electronics Venture GmbH, Germany</strong></p><p>Artificial Intelligence assisted Fuzzing - integration of AI into automated software fuzzing, and evaluating performance of various AI models.</p></div></article><article class="role"><div class="role-meta"><strong>Vishveshwarya Technological University</strong><span>India</span><span>2011-2015</span></div><div><h3>Bachelor of Mechanical Engineering</h3><p>Ranked 1st in graduating class; Gold Medalist - CGPA 9.32/10.</p></div></article></div></section>
    <section class="section two-column" id="skills" aria-labelledby="skills-title"><h2 id="skills-title">Skills</h2><div class="body-copy"><h3>Professional</h3><div class="expertise"><span>AI / Machine Learning</span><span>Penetration Testing</span><span>Homologation</span><span>Technical Leadership</span><span>Product Security</span><span>Vulnerability Management</span><span>Risk Management</span><span>Requirements Engineering</span></div><h3>Languages</h3><div class="expertise"><span>English (C2)</span><span>German (B2)</span><span>Hindi (Native)</span><span>Kannada (Native)</span></div></div></section>
  </main>
  <footer>Vineeth B. Prasanna</footer>
`;

app.querySelector('.hero').insertAdjacentHTML('beforeend', '<a class="scroll-cue" href="#summary" aria-label="Scroll to summary"></a>');
app.querySelector('.hero').insertAdjacentHTML('afterend', '<div class="placeholder-stage" aria-hidden="true"><div class="collapsed-panels"></div><div class="placeholder-panels"><div class="placeholder-panel"></div><div class="placeholder-panel"></div><div class="placeholder-panel"></div><div class="placeholder-panel"></div></div></div>');

const placeholderCards = [...app.querySelectorAll('.placeholder-panel')];
const placeholderPanels = app.querySelector('.placeholder-panels');
const collapsedPanels = app.querySelector('.collapsed-panels');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const collapseDuration = 700;
let collapsedCount = 0;
let collapseScrolls = [];
let lastScrollY = scrollY;
let nextCollapseAfter = 0;

function movePlaceholderCard(card, destination) {
  const previous = placeholderCards.map((card) => card.getBoundingClientRect());
  destination(card);
  placeholderPanels.parentElement.classList.toggle('has-boxes', collapsedCount > 0);
  placeholderCards.forEach((card, index) => {
    const next = card.getBoundingClientRect();
    if (!reducedMotion && (previous[index].width !== next.width || previous[index].top !== next.top)) {
      card.getAnimations().forEach((animation) => animation.cancel());
      card.animate([{ transform: `translate(${previous[index].left - next.left}px, ${previous[index].top - next.top}px) scale(${previous[index].width / next.width}, ${previous[index].height / next.height})` }, { transform: 'none' }], { duration: collapseDuration, easing: 'ease', fill: 'both' });
    }
  });
}

function updatePlaceholderCards() {
  if (scrollY < lastScrollY) {
    if (collapsedCount && scrollY < collapseScrolls[collapsedCount - 1] - 64) {
      collapsedCount -= 1;
      collapseScrolls.length = collapsedCount;
      movePlaceholderCard(placeholderCards[collapsedCount], (card) => placeholderPanels.prepend(card));
    }
  } else if (collapsedCount < placeholderCards.length && performance.now() >= nextCollapseAfter && placeholderCards[collapsedCount].getBoundingClientRect().top < Math.max(window.innerHeight * .12, placeholderCards[collapsedCount].getBoundingClientRect().height + 48)) {
    const card = placeholderCards[collapsedCount];
    collapseScrolls.push(scrollY);
    collapsedCount += 1;
    nextCollapseAfter = performance.now() + collapseDuration;
    movePlaceholderCard(card, (panel) => collapsedPanels.append(panel));
  }
  lastScrollY = scrollY;
}

addEventListener('scroll', updatePlaceholderCards, { passive: true });
addEventListener('resize', updatePlaceholderCards);
addEventListener('load', updatePlaceholderCards);
updatePlaceholderCards();
