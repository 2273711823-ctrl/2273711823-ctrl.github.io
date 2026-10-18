'use strict';

const english = {
  skip: 'Skip to content', navResearch: 'Research', navNotes: 'Notebook', navAbout: 'About',
  heroTitle: 'Following light.<br>Finding the<br><span class="serif-accent">unseen.</span>',
  heroIntro: 'Hello, I’m Hailing, an astronomy undergraduate at Shanghai Jiao Tong University. I’m learning to read the high-energy universe through photons and neutrinos.',
  exploreResearch: 'Explore my research', openNotebook: 'Open the notebook',
  location: 'SHANGHAI, CHINA · CURIOUS, ONE QUESTION AT A TIME',
  chartCaption: 'Sky illustration<br>Not observational data',
  interestLabel: 'EXPLORING', interest1: 'High-energy astrophysics', interest2: 'Multi-messenger astronomy', interest3: 'Physical intuition & science communication',
  researchHeading: 'From seeing to understanding.', researchSide: 'The calculation matters.<br>So does the physics behind it.',
  ongoing: 'Undergraduate research · ongoing',
  cygnusTitle: 'The Cygnus Bubble:<br>messengers beyond light',
  cygnusBody: 'If the Cygnus Bubble’s gamma rays come from high-energy protons colliding with surrounding matter, what should a neutrino telescope see?',
  cygnusWork: 'My work starts with gamma-ray spectra and spatial templates, predicts the neutrino flux, and folds it through IceCube’s effective area and detector response to estimate event counts and reconstructed distributions.',
  lhaasoPaper: 'LHAASO observations', icecubePaper: 'Related neutrino search',
  explorerTitle: 'How does a prediction take shape?',
  step0Label: 'Gamma rays', step1Label: 'Physics model', step2Label: 'Detector', step3Label: 'Events',
  explorerFoot: 'Choose a step to follow the path from source emission to detected events.',
  inDevelopment: 'Research toolkit · in development',
  toolkitText: 'Bringing gamma-ray to neutrino conversion and expected-event calculations into a reusable Python toolkit, with the physical assumptions of each step made explicit.',
  toolkitLink: 'Follow the calculation',
  notesHeading: 'A place for the “why.”', notesSide: 'Short notes shaped by learning and discussion.<br>Starting points for the next question.',
  notesCount: '03 ENTRIES / A GROWING NOTEBOOK', filterAll: 'All notes', filterPhysics: 'Physical intuition', filterMethod: 'Research methods',
  physicsCategory: 'PHYSICAL INTUITION / ACCRETION',
  eddingtonTitle: 'When light pushes back:<br>the Eddington limit',
  eddingtonSummary: 'Start with gravity pulling inward and radiation pushing outward. Give an equation a physical picture.',
  multimessengerCategory: 'PHYSICAL INTUITION / MULTI-MESSENGER',
  gammaTitle: 'From gamma-ray photons<br>to neutrino events',
  gammaSummary: 'What lies between a flux on the sky and a count in a detector? A short walk through the prediction.',
  methodCategory: 'RESEARCH METHODS / INFERENCE',
  inferenceTitle: 'Why observations give limits,<br>not always a unique answer',
  inferenceSummary: 'From models to data and back again: assumptions, degeneracies, and the boundaries of the evidence.',
  shortRead: 'A short exploration',
  aboutHeading: 'Looking up.<br>Staying close to<span>the world around me.</span>',
  aboutIntro: 'I’m Hailing Fang, studying astronomy at Shanghai Jiao Tong University. High-energy astrophysics fascinates me: we cannot visit these distant objects, yet their messengers let us piece together the stories of what happens there.',
  aboutWish: 'I hope to learn to ask better questions, understand what our models mean physically, and share astronomy with more people.',
  beyondLabel: 'AWAY FROM THE DESK', beyond1Title: 'Noticing along the way',
  beyond1Body: 'Drawing, running, and hiking. Changing pace to see the world a little differently.',
  beyond2Title: 'Giving science a voice',
  beyond2Body: 'Hosting, voice-over work, and event support for SJTU’s Master Forum—another way to learn how to communicate ideas clearly.',
  beyond3Title: 'Growing through understanding',
  beyond3Body: 'Starting with a concrete question, then connecting equations, observations, and physical intuition.',
  siteName: 'Between Light & Particles', footerSubtitle: 'An astronomy notebook, still growing.', backTop: 'Back to the stars',
  readerBottom: 'LEARNING NOTES · KEEP ASKING', closeNote: 'Back to the notebook ↙',
  ...window.learningContent.copy
};

const chinese = {};
document.querySelectorAll('[data-i18n]').forEach(el => { chinese[el.dataset.i18n] = el.innerHTML; });
let locale = 'zh';
try { if (localStorage.getItem('hailing-language') === 'en') locale = 'en'; } catch {}
let selectedStep = 0;
let selectedFilter = 'all';
let activeNote = null;
const dialog = document.querySelector('#note-dialog');

const steps = {
  zh: [
    {mark:'γ', title:'先问：光从哪里来？', description:'能谱告诉我们不同能量的光子有多少，空间模板告诉我们它们分布在哪里。两者共同构成预测的起点。', equation:'能谱 × 空间分布'},
    {mark:'γ → ν', title:'让假设连接两种信使', description:'在质子与物质碰撞的强子情景中，次级介子的衰变可以产生伽马射线和中微子。中微子预测取决于这个物理假设；看到伽马射线，并不自动等于找到了中微子源。', equation:'质子碰撞 → 次级介子 → γ 与 ν'},
    {mark:'A<sub>eff</sub>', title:'让望远镜进入计算', description:'有效面积描述不同能量、不同方向的中微子被探测到的能力。再用探测器响应，把真实能量与方向映射到重建量；天图不会被原样记录下来。', equation:'真实分布 → 有效面积 → 重建响应'},
    {mark:'N', title:'预测我们可能记录到什么', description:'对能量和天区积分，并乘以观测时间，得到预期事件数。重建分布可以用于后续统计比较，但预测本身还不等于探测；还要考虑背景和统计涨落。', equation:'通量 × 有效面积 × 时间 → 预期事件'}
  ],
  en: [
    {mark:'γ', title:'First: where does the light come from?', description:'An energy spectrum describes how many photons arrive at different energies. A spatial template describes where they come from. Together, they form the starting point.', equation:'Energy spectrum × spatial distribution'},
    {mark:'γ → ν', title:'Connect the messengers with a model', description:'In a hadronic scenario, proton–matter collisions produce secondary mesons whose decays yield gamma rays and neutrinos. The prediction depends on that assumption: gamma-ray emission alone does not establish a neutrino source.', equation:'Proton collisions → mesons → γ and ν'},
    {mark:'A<sub>eff</sub>', title:'Bring the telescope into the calculation', description:'Effective area describes sensitivity as a function of neutrino energy and direction. A detector response then maps true quantities to reconstructed ones: the recorded sky is a blurred view of the source.', equation:'True distribution → effective area → response'},
    {mark:'N', title:'Predict what might be recorded', description:'Integrate over energy and sky position, and multiply by observing time to obtain expected counts. Reconstructed distributions support later statistical comparisons. A prediction still needs background and fluctuations to become a detection test.', equation:'Flux × effective area × time → expected counts'}
  ]
};

const notes = {
  eddington: {
    zh: {
      category:'物理直觉 / ACCRETION', title:'光也会把物质推开：理解爱丁顿极限',
      lead:'想象天体附近的一小团气体。引力把它向内拉，来自中心的光也在传递动量，把它向外推。爱丁顿极限，来自这两股作用的比较。',
      body:`<h3>先比较力，而不是先记公式</h3><p>在球对称、稳态的简化图像里，距中心 r 处的辐射能流为 F = L / (4πr²)。如果气体对辐射的质量不透明度为 κ，那么单位质量气体受到的向外加速度是 κF / c；引力加速度则是 GM / r²。</p><div class="formula">κL / (4πr²c) = GM / r²<br>L<sub>Edd</sub> = 4πGMc / κ</div><p>两边的 r² 消掉了。这里的关键不是一个神奇的半径，而是：在这些假设下，引力和辐射作用都按距离平方反比衰减，它们的比值由光度、质量和不透明度决定。</p><h3>为什么质量越大，极限越高？</h3><p>中心质量越大，引力越强；要让辐射与之平衡，就需要更大的光度。所以在 κ 固定时，爱丁顿光度与质量成正比。对于电离气体，常见的简化处理使用电子散射不透明度。</p><h3>一个有条件的物理标尺</h3><p>推导依赖几何结构、气体与辐射的耦合方式以及不透明度等假设。盘状吸积、各向异性辐射等情形会改变简单图像。因此，某个源的推断光度“超过爱丁顿”，首先提示我们检查质量、几何和辐射模型。</p><p class="reader-aside">继续追问：如果辐射不是向所有方向均匀发出，我们从一个方向推算出的光度，还能直接用来判断整个源是否超过这一标尺吗？</p>`,
      source:'概念笔记 · 根据学习讨论整理；不是针对某个天体的观测测量。'
    },
    en: {
      category:'PHYSICAL INTUITION / ACCRETION', title:'When light pushes back: the Eddington limit',
      lead:'Picture a small parcel of gas near a luminous object. Gravity pulls it inward; radiation transfers momentum and pushes it outward. The Eddington limit compares those two effects.',
      body:`<h3>Compare forces before memorizing a formula</h3><p>In a simplified, steady, spherically symmetric picture, the radiative flux at radius r is F = L / (4πr²). With mass opacity κ, the outward acceleration is κF / c. Gravity supplies an inward acceleration GM / r².</p><div class="formula">κL / (4πr²c) = GM / r²<br>L<sub>Edd</sub> = 4πGMc / κ</div><p>The factors of r² cancel. Under these assumptions, both accelerations follow an inverse-square law, so their ratio depends on luminosity, mass, and opacity rather than a special radius.</p><h3>Why does the limit grow with mass?</h3><p>A larger central mass means stronger gravity, requiring more luminosity to balance it. At fixed opacity, the Eddington luminosity is proportional to mass. Electron scattering is a common opacity approximation for ionized gas.</p><h3>A physical benchmark with assumptions</h3><p>The result depends on geometry, opacity, and how radiation couples to the gas. Disk accretion and anisotropic emission can alter the simple picture. An inferred “super-Eddington” luminosity therefore invites us to examine the mass, geometry, and emission model.</p><p class="reader-aside">A question to keep: if radiation is not emitted uniformly in all directions, can a luminosity inferred along one line of sight directly tell us whether the entire source exceeds this benchmark?</p>`,
      source:'Conceptual learning note, developed from study discussions; not an observational measurement of a particular source.'
    }
  },
  gamma: {
    zh: {
      category:'物理直觉 / MULTI-MESSENGER', title:'从伽马光子，走到中微子事件',
      lead:'天体发出了多少中微子，与望远镜能记录多少事件，是两个相关但不同的问题。把这两层分开，计算链才容易看清。',
      body:`<h3>第一层：从源模型得到通量</h3><p>在高能质子与周围物质发生碰撞的强子情景中，产生的次级介子可以通过不同衰变过程贡献伽马射线和中微子。于是，伽马射线观测可以在给定模型下帮助预测中微子通量。</p><p>这一步属于源的物理。它需要说明辐射机制、谱形、空间分布等假设；不同转换模型和传播效应可能影响结果。并非所有伽马射线都来自这条通道。</p><h3>第二层：从通量得到事件数</h3><p>假设 φ(E, Ω) 是单位能量、单位立体角的中微子数通量，T 是观测时间，A<sub>eff</sub>(E, Ω) 是与所选中微子种类和事件样本一致的有效面积，那么预期事件数为：</p><div class="formula">N = T ∫ dE ∫ dΩ<br>φ(E, Ω) A<sub>eff</sub>(E, Ω)</div><p>检查单位很有帮助：通量乘面积、时间，再对能量与立体角积分，留下的是无量纲的预期计数。若空间模板按像素归一化，则要与通量定义一致地改用求和，不能重复乘立体角。</p><h3>真实天空还要经过重建</h3><p>中微子的真实能量和方向，与我们重建出的量并不完全相同。响应矩阵或点扩散函数描述这种映射。能量响应和角响应也可能相关，使用公开响应表时需要保留其定义与归一化约定。</p><p class="reader-aside">最值得保留的区分：源模型决定“到达地球的是什么”，探测器模型决定“我们能记录到什么”。预期计数还不是显著性；检验源的存在还需要背景模型和统计分析。</p>`,
      source:'研究背景阅读：<a href="https://arxiv.org/abs/2310.10100" target="_blank" rel="noopener noreferrer">LHAASO：天鹅座泡的伽马射线观测 ↗</a><br><a href="https://arxiv.org/abs/2402.17352" target="_blank" rel="noopener noreferrer">Search for neutrino emission from the Cygnus Bubble ↗</a>'
    },
    en: {
      category:'PHYSICAL INTUITION / MULTI-MESSENGER', title:'From gamma-ray photons to neutrino events',
      lead:'How many neutrinos arrive from a source and how many events a telescope records are related, but distinct, questions. Separating those layers makes the calculation easier to understand.',
      body:`<h3>Layer one: a source model predicts a flux</h3><p>In a hadronic scenario, high-energy protons collide with surrounding matter. Secondary mesons contribute gamma rays and neutrinos through different decay channels. Gamma-ray observations can then inform a neutrino-flux prediction within a specified model.</p><p>This is source physics. It requires assumptions about the emission mechanism, spectrum, and spatial distribution. Conversion models and propagation effects can matter; not all gamma rays originate in this channel.</p><h3>Layer two: a flux predicts detector counts</h3><p>Let φ(E, Ω) be the neutrino number flux per unit energy and solid angle, T the observing time, and A<sub>eff</sub>(E, Ω) the effective area appropriate to the neutrino species and selected event sample. The expected count is:</p><div class="formula">N = T ∫ dE ∫ dΩ<br>φ(E, Ω) A<sub>eff</sub>(E, Ω)</div><p>Check the units: flux times area and time, integrated over energy and solid angle, gives a dimensionless expected count. Pixel-normalized spatial templates require a consistent sum convention; the solid angle must not be counted twice.</p><h3>The true sky still passes through reconstruction</h3><p>True neutrino energies and directions differ from their reconstructed values. Response matrices and point-spread functions describe that mapping. Energy and angular responses may be correlated, so a public response table’s definitions and normalization conventions matter.</p><p class="reader-aside">Keep this distinction: source physics predicts what reaches Earth; detector physics predicts what we can record. Expected counts are not a detection significance. Testing a source also requires a background model and statistical analysis.</p>`,
      source:'Background reading: <a href="https://arxiv.org/abs/2310.10100" target="_blank" rel="noopener noreferrer">LHAASO observations of the Cygnus Bubble ↗</a><br><a href="https://arxiv.org/abs/2402.17352" target="_blank" rel="noopener noreferrer">Search for neutrino emission from the Cygnus Bubble ↗</a>'
    }
  },
  inference: {
    zh: {
      category:'科研方法 / INFERENCE', title:'为什么观测给出“限制”，而不总是一个答案？',
      lead:'给定一组物理参数，计算模型会产生怎样的观测量，是一个方向明确的问题。反过来，从观测量恢复参数，往往没有唯一答案。',
      body:`<h3>正向预测容易写，反向推断有条件</h3><p>设模型参数为 θ，模型预测为 f(θ)。我们把预测与数据比较，再用测量误差与统计模型判断哪些参数更相容。这个过程不是简单地把公式倒过来；它还依赖模型的结构和数据的精度。</p><div class="formula">参数 θ → 模型 f(θ) → 可观测量<br>数据 + 误差 + 假设 → 允许的参数范围</div><h3>不同的原因，可以留下相似的信号</h3><p>例如，一个源的亮度变化，可能与本征辐射功率有关，也可能与几何或视线方向有关。如果几种参数组合都能产生相似观测，就出现了“简并”。增加独立波段、时域或空间信息，有时可以帮助区分它们。</p><h3>限制仍然是知识</h3><p>数据可能排除某些模型，或在特定假设下给出质量、倾角、通量等量的允许范围。范围并不代表没有理解：它说明证据支持到哪里，也说明下一次观测最值得测什么。</p><p class="reader-aside">读论文时可以保留三个问题：哪些量被直接测量？哪些结论依赖模型？如果改变一个关键假设，结论还成立吗？</p>`,
      source:'科研方法笔记 · 图形仅为概念示意，不对应某篇论文的真实拟合结果。'
    },
    en: {
      category:'RESEARCH METHODS / INFERENCE', title:'Why observations give limits, not always a unique answer',
      lead:'Given physical parameters, a model predicts observables. Going backward—from observables to parameters—often has more than one possible answer.',
      body:`<h3>A forward prediction is not a unique inverse</h3><p>Let θ denote model parameters and f(θ) the prediction. We compare that prediction with data, then use measurement uncertainties and a statistical model to assess compatibility. The inference depends on the model structure and the precision of the observations.</p><div class="formula">Parameters θ → model f(θ) → observables<br>Data + uncertainty + assumptions → allowed parameters</div><h3>Different causes can leave similar signals</h3><p>A source’s apparent brightness may depend on its intrinsic power, geometry, or viewing direction. If several parameter combinations produce similar observations, we have a degeneracy. Independent wavelength, timing, or spatial information can sometimes help break it.</p><h3>A constraint is still knowledge</h3><p>Data may rule out models or, under specified assumptions, constrain a mass, inclination, or flux to a range. Such a range tells us how far the evidence reaches—and what a future observation should try to measure.</p><p class="reader-aside">Three useful reading questions: what is directly measured? What depends on a model? Would the conclusion survive a change in a key assumption?</p>`,
      source:'Research-methods learning note. The illustration is conceptual and does not reproduce a published fit.'
    }
  },
  ...window.learningContent.notes
};

function renderStep(index) {
  selectedStep = index;
  const step = steps[locale][index];
  document.querySelectorAll('[data-step]').forEach((button, i) => {
    button.setAttribute('aria-selected', String(i === index));
    button.tabIndex = i === index ? 0 : -1;
  });
  document.querySelector('#step-panel').setAttribute('aria-labelledby', `step-tab-${index}`);
  document.querySelector('#step-mark').innerHTML = step.mark;
  document.querySelector('#step-count').textContent = `STEP 0${index + 1} / 04`;
  document.querySelector('#step-title').textContent = step.title;
  document.querySelector('#step-description').textContent = step.description;
  document.querySelector('#step-equation').textContent = step.equation;
}

function renderNote(id) {
  const note = notes[id][locale];
  document.querySelector('#reader-content').innerHTML = `<p class="reader-category">${note.category}</p><h2 id="reader-title">${note.title}</h2><p class="reader-lead">${note.lead}</p>${note.body}<div class="reader-source">${note.source}</div>`;
  const isLearning = notes[id].section === 'learning';
  document.querySelector('.close-note-text').textContent = isLearning
    ? (locale === 'zh' ? '返回学习手记 ↙' : 'Back to learning notes ↙')
    : (locale === 'zh' ? '返回手记 ↙' : 'Back to the notebook ↙');
}

function openNote(id, updateHistory = true) {
  if (!Object.prototype.hasOwnProperty.call(notes, id)) return;
  activeNote = id;
  renderNote(id);
  if (!dialog.open) {
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  }
  dialog.scrollTop = 0;
  if (updateHistory && location.hash !== `#note-${id}`) history.pushState(null, '', `#note-${id}`);
}

function closeNote() { if (dialog.open) dialog.close(); }

function updateCount() {
  const count = [...document.querySelectorAll('.note-card')].filter(card => !card.hidden).length;
  document.querySelector('#note-count').textContent = `${String(count).padStart(2, '0')} ENTRIES / ${locale === 'zh' ? '持续生长' : 'A GROWING NOTEBOOK'}`;
}

function setLocale(value) {
  locale = value;
  document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
  document.body.classList.toggle('en', locale === 'en');
  const strings = locale === 'zh' ? chinese : english;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (strings[el.dataset.i18n] !== undefined) el.innerHTML = strings[el.dataset.i18n];
  });
  document.querySelector('#zh-label').classList.toggle('active', locale === 'zh');
  document.querySelector('#en-label').classList.toggle('active', locale === 'en');
  document.querySelector('#language-toggle').setAttribute('aria-label', locale === 'zh' ? 'Switch to English' : '切换到中文');
  document.querySelector('.close-reader').setAttribute('aria-label', locale === 'zh' ? '关闭笔记' : 'Close note');
  document.querySelector('.pipeline-tabs').setAttribute('aria-label', locale === 'zh' ? '研究预测步骤' : 'Research prediction steps');
  document.querySelector('.filters').setAttribute('aria-label', locale === 'zh' ? '筛选笔记' : 'Filter notes');
  document.querySelector('nav').setAttribute('aria-label', locale === 'zh' ? '主导航' : 'Main navigation');
  document.title = locale === 'zh' ? '光与粒子之间 · 方海玲 Hailing Fang' : 'Hailing Fang · Between Light & Particles';
  renderStep(selectedStep);
  updateCount();
  if (activeNote) renderNote(activeNote);
  try { localStorage.setItem('hailing-language', locale); } catch {}
}

document.querySelector('#language-toggle').addEventListener('click', () => setLocale(locale === 'zh' ? 'en' : 'zh'));
document.querySelectorAll('[data-step]').forEach(button => {
  button.addEventListener('click', () => renderStep(Number(button.dataset.step)));
  button.addEventListener('keydown', event => {
    let next = selectedStep;
    if (event.key === 'ArrowRight') next = (selectedStep + 1) % 4;
    else if (event.key === 'ArrowLeft') next = (selectedStep + 3) % 4;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = 3;
    else return;
    event.preventDefault();
    renderStep(next);
    document.querySelector(`#step-tab-${next}`).focus();
  });
});

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    selectedFilter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(filter => {
      const selected = filter.dataset.filter === selectedFilter;
      filter.classList.toggle('selected', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('.note-card').forEach(card => { card.hidden = selectedFilter !== 'all' && card.dataset.category !== selectedFilter; });
    updateCount();
  });
});

document.querySelectorAll('[data-open-note]').forEach(button => button.addEventListener('click', () => openNote(button.dataset.openNote)));
document.querySelector('.close-reader').addEventListener('click', closeNote);
document.querySelector('.close-note-text').addEventListener('click', closeNote);
dialog.addEventListener('close', () => {
  document.body.style.overflow = '';
  const returnSection = activeNote && notes[activeNote].section === 'learning' ? 'learning' : 'notebook';
  activeNote = null;
  if (location.hash.startsWith('#note-')) history.replaceState(null, '', `#${returnSection}`);
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeNote();
});

function syncHash() {
  if (location.hash.startsWith('#note-')) openNote(location.hash.slice(6), false);
  else closeNote();
}
window.addEventListener('popstate', syncHash);
window.addEventListener('hashchange', syncHash);

// Deterministic decorative stars. This illustration does not encode measured data.
const starField = document.querySelector('#field-stars');
let seed = 6417;
function random() { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }
for (let i = 0; i < 135; i++) {
  const star = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  star.setAttribute('cx', String(15 + random() * 550));
  star.setAttribute('cy', String(55 + random() * 410));
  star.setAttribute('r', String(.35 + random() * 1.05));
  star.setAttribute('opacity', String(.18 + random() * .5));
  star.setAttribute('fill', '#dbe5cb');
  starField.appendChild(star);
}

setLocale(locale);
syncHash();
