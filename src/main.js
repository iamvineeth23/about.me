import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top">VP.</a>
    <nav aria-label="Main navigation"><a href="#about">About</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav>
  </header>
  <main id="top">
    <section class="hero" aria-labelledby="intro-title">
      <p class="eyebrow">Portfolio / 2026</p>
      <h1 id="intro-title">Vineeth B.<br />Prasanna</h1>
      <p class="lead">Senior Technical Security Engineer shaping secure, software-defined vehicles.</p>
      <a class="button" href="./09.2026_VPR_bw.pdf">Download résumé</a>
    </section>
    <section id="about" class="section"><p class="eyebrow">About</p><h2>Building security into complex automotive systems.</h2><p>Security engineer with 7+ years across product security architecture, vulnerability management, and offensive security.</p></section>
    <section id="experience" class="section"><p class="eyebrow">Selected experience</p><article><p>2022 — Present</p><div><h2>CARIAD SE</h2><p>Senior Technical Security Engineer · Security technology lead for secure onboard communication and ECU cybersecurity.</p></div></article><article><p>2019 — 2022</p><div><h2>Audi AG</h2><p>Technical Security Engineer · Offensive security and AI-assisted security tooling.</p></div></article></section>
    <section id="contact" class="section contact"><p class="eyebrow">Contact</p><h2>Let’s work on safer systems.</h2><a href="mailto:vineethpbharadwaj@gmail.com">vineethpbharadwaj@gmail.com</a></section>
  </main>
  <footer>© ${new Date().getFullYear()} Vineeth B. Prasanna</footer>
`;
