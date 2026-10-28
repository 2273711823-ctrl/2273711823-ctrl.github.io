'use strict';

// Learning notes are editorial drafts, grounded in coursework and research reading.
window.learningContent = {
  copy: {
    navLearning: 'Learning',
    learningHeading: 'Connecting the pieces.',
    learningSide: 'One question at a time.<br>Building bridges between intuition and derivation.',
    learningIntro: 'A place for ideas from coursework and research reading that are worth returning to: the question, the physical picture, the equations, and the conditions that make them work.',
    learningStatus: 'LEARNING NOTES · DRAFTS TO GROW WITH',
    atmosphericCourse: 'Neutrino backgrounds',
    atmosphericTitle: 'Atmospheric neutrinos: from flux to background',
    atmosphericSummary: 'Exploring energy and zenith-angle dependence, and separating a flux model from a detector-level background prediction.',
    atmosphericTag1: 'Energy & zenith angle', atmosphericTag2: 'Learning draft · 2026-10-28',
    quantumCourse: 'Quantum mechanics',
    quantumTitle: 'Can wells and barriers fit into the same picture?',
    quantumSummary: 'Start with one Schrödinger equation. Use local solutions, boundary conditions, and normalization to connect bound states, scattering, and tunneling.',
    quantumTag1: 'Boundary conditions', quantumTag2: 'Discrete & continuous',
    mathCourse: 'Mathematical methods',
    taylorTitle: 'Taylor expansions: turning a function into local physics.',
    taylorSummary: 'Choose an expansion point and a small parameter. Understand why low-order terms help—and when the neglected terms deserve another look.',
    taylorTag1: 'Local approximation', taylorTag2: 'Convergence & remainder',
    stellarCourse: 'Stellar physics',
    gamowTitle: 'Why do stellar nuclear reactions favor an energy window?',
    gamowSummary: 'Energetic particles are rarer, but they tunnel through the Coulomb barrier more easily. Together, these effects select the Gamow peak.',
    gamowTag1: 'Thermal distribution & tunneling', gamowTag2: 'E<sub>G</sub> & E<sub>0</sub>',
    readLearning: 'Read the note',
    learningFoot: 'Conceptual drafts developed from our study topics, with room for personal derivations, diagrams, and revised understanding.'
  },
  notes: {
    'atmospheric-neutrinos': {
      section: 'learning',
      zh: {
        category: '学习手记 / 中微子背景 · 2026-10-28 · 初稿',
        title: '大气中微子：从通量到背景',
        lead: '在问天鹅座泡的信号能否被区分出来之前，先理解大气中微子通量随能量和天顶角怎样变化。',
        body: `<h3>先读懂通量模型</h3><p>我正在学习使用 nuflux 和 daemonflux 查询大气中微子通量，比较固定天顶角下的能谱，以及固定能量下的角度依赖。需要留意模型的单位、角度定义，以及中微子和反中微子的约定。</p><h3>再连接探测器</h3><p>通量并不是记录到的事件数。背景事件预测还需要与所选样本一致的有效面积、观测时间和重建响应。当前学习是在为这一步做准备，尚未形成最终的背景事件预测或天鹅座泡显著性结论。</p>`,
        source: '学习初稿 · 持续修订。工具参考：<a href="https://github.com/icecube/nuflux" target="_blank" rel="noopener noreferrer">nuflux ↗</a> · <a href="https://github.com/mceq-project/daemonflux" target="_blank" rel="noopener noreferrer">daemonflux ↗</a>'
      },
      en: {
        category: 'LEARNING NOTES / NEUTRINO BACKGROUNDS · 2026-10-28 · DRAFT',
        title: 'Atmospheric neutrinos: from flux to background',
        lead: 'Before asking whether a Cygnus Bubble signal can be distinguished, I’m learning how the atmospheric-neutrino flux depends on energy and zenith angle.',
        body: `<h3>Read the flux model first</h3><p>I’m learning to query atmospheric-neutrino fluxes with nuflux and daemonflux: comparing energy spectra at fixed zenith angles, then angular dependence at fixed energies. Units, angle definitions, and neutrino versus antineutrino conventions all need attention.</p><h3>Then connect it to a detector</h3><p>A flux is not a recorded event count. A background-event prediction also needs effective areas consistent with the selected sample, observing time, and a reconstruction response. This study is preparation for that step; it does not yet provide a final background-event prediction or a Cygnus Bubble significance result.</p>`,
        source: 'Learning draft · subject to revision. Tool references: <a href="https://github.com/icecube/nuflux" target="_blank" rel="noopener noreferrer">nuflux ↗</a> · <a href="https://github.com/mceq-project/daemonflux" target="_blank" rel="noopener noreferrer">daemonflux ↗</a>'
      }
    },
    'quantum-boundaries': {
      section: 'learning',
      zh: {
        category: '学习手记 / 量子力学 · 边界条件',
        title: '势阱和势垒，能放进同一张图里吗？',
        lead: '不同势能题目背后，可以保留一条共同的主线：先判断每个区域的解是什么样，再用边界条件把它们接成一个物理上允许的整体。',
        body: `<h3>同一个方程，两类局部形状</h3><p>在一维、定质量且势能分段为常数的区域，定态薛定谔方程可以写成：</p><div class="formula">ψ″(x) = 2m(V − E) ψ(x) / ℏ²</div><p>当 E &gt; V，解是振荡的，可以写成向左和向右传播的平面波的叠加；当 E &lt; V，解是增长或衰减的指数函数。先判断形状，再求系数，比把每一种势能都记成一道独立的题更容易串起来。</p><h3>边界条件在筛选整个解</h3><p>对有限的势能阶跃，在上述定质量模型中，ψ 和 ψ′ 都连续。区域内的局部解必须在交界处接上；如果是束缚态，还必须在无穷远足够快地衰减，才能归一化。无限高势垒或 δ 势需要各自的边界条件，不能直接照搬有限阶跃的结论。</p><p>以阱外 V = 0、阱内 V = −V₀ 的有限深方势阱为例，束缚态满足 −V₀ &lt; E &lt; 0。阱内振荡、阱外衰减，但不是任意 E 都能让所有边界条件同时成立。这种整体上的限制选出了离散的能量。</p><h3>散射态为什么又可以有连续能量？</h3><p>对于同一个局域势阱，E &gt; 0 时，远处允许传播的入射、反射和透射波。给定入射能量后，边界条件通常决定各波的振幅，而不是只允许几个离散的 E。散射定态通常使用流归一化或 δ 归一化；描述实际局域粒子时，可以叠加成波包。</p><p>势垒中的指数衰减也不等于粒子“必定过不去”。对于有限宽度势垒，另一侧仍可能出现透射波；这就是隧穿所需要的波动图像。</p><p class="reader-aside">回看一道题时，先问三件事：各区 E − V 的符号是什么？交界与无穷远要求什么？这些要求是在筛选能量，还是在决定给定能量下的振幅？</p>`,
        source: '学习手记初稿 · 根据势阱、势垒与散射态的学习讨论整理；使用非相对论一维、定质量模型。'
      },
      en: {
        category: 'LEARNING NOTES / QUANTUM MECHANICS · BOUNDARIES',
        title: 'Can wells and barriers fit into the same picture?',
        lead: 'Keep one thread through different potential problems: identify the local solutions, then join them using the conditions required of a physical state.',
        body: `<h3>One equation, two local shapes</h3><p>For a one-dimensional, constant-mass problem in a region of constant potential, the time-independent Schrödinger equation becomes:</p><div class="formula">ψ″(x) = 2m(V − E) ψ(x) / ℏ²</div><p>When E &gt; V, solutions oscillate and can be expressed as left- and right-moving plane waves. When E &lt; V, they are growing or decaying exponentials. Identifying the shape first helps connect problems that otherwise look unrelated.</p><h3>Boundary conditions select the whole solution</h3><p>Across a finite potential step in this constant-mass model, ψ and ψ′ are continuous. Local solutions must join at each boundary. Bound states must also decay sufficiently rapidly at infinity to be normalizable. Infinite walls and delta-function potentials need their own boundary conditions.</p><p>Consider a finite square well with V = −V₀ inside and V = 0 outside. Bound states satisfy −V₀ &lt; E &lt; 0: oscillatory inside, decaying outside. Only particular energies allow all the matching and asymptotic conditions to hold together. Those global restrictions select a discrete spectrum.</p><h3>Why can scattering energies be continuous?</h3><p>For the same localized well, E &gt; 0 allows propagating incident, reflected, and transmitted waves far away. At a chosen incident energy, boundary conditions typically determine their amplitudes rather than restrict E to a discrete set. Scattering eigenstates commonly use flux or delta normalization; localized particles can be represented by wave packets.</p><p>A decaying wave inside a barrier also does not imply zero transmission. For a barrier of finite width, a transmitted wave can still emerge on the other side: the essential picture behind tunneling.</p><p class="reader-aside">Three questions for a problem: what is the sign of E − V in each region? What do the interfaces and infinity require? Are those conditions selecting energies, or amplitudes at a chosen energy?</p>`,
        source: 'Draft learning note developed from discussions of wells, barriers, and scattering. Assumes a nonrelativistic, one-dimensional, constant-mass model.'
      }
    },
    'taylor-approximation': {
      section: 'learning',
      zh: {
        category: '学习手记 / 数学物理方法 · 泰勒展开',
        title: '泰勒展开：把复杂函数变成局部的物理。',
        lead: '物理里常常不需要函数在所有地方的精确形状，而需要它在某个状态附近怎样变化。泰勒展开把这个问题拆成一阶、二阶，以及更小的修正。',
        body: `<h3>先选“在哪里看”和“走多远”</h3><p>围绕 x₀，记位移为 ξ = x − x₀。在函数满足相应光滑性条件时，有限阶泰勒公式写成：</p><div class="formula">f(x₀ + ξ) = f(x₀) + f′(x₀)ξ<br>+ ½f″(x₀)ξ² + … + Rₙ</div><p>展开点决定我们在描述哪个状态；ξ 的大小决定我们离它有多远。对有量纲的变量，“小”需要与一个特征尺度比较，例如 |ξ| / ℓ ≪ 1，不能只看一个没有单位说明的数值。</p><h3>低阶项为什么常有明确物理意义？</h3><p>以势能为例：常数项给出参考能量，一阶项对应局部的力，二阶项描述曲率。在稳定平衡点，V′(x₀) = 0 且 V″(x₀) &gt; 0；若位移足够小，势能的主要变化就是二次项：</p><div class="formula">V(x₀ + ξ) ≈ V(x₀) + ½V″(x₀)ξ²<br>F ≈ −V″(x₀)ξ</div><p>这就把许多不同的平滑势能，连接到了同一个小振动模型：简谐振子。展开留下的不是纯粹的计算方便，也是一种局部的物理结构。</p><h3>写出级数，还要问能不能用</h3><p>有限阶近似需要检查余项是否足够小；无限级数则还需要讨论收敛，以及其和是否等于原函数。例如 1 / (1 − x) = 1 + x + x² + … 只在 |x| &lt; 1 时成立。越靠近收敛边界，低阶截断越可能不够准确。</p><p>在保留项不发生特殊抵消的常见情形，可以先比较下一项与保留项的大小；需要可靠精度时，应估计余项或直接与原函数比较。把“近似等于”写出来，也要把近似的条件留下。</p><p class="reader-aside">做展开前，先写一句话：我在什么状态附近展开？无量纲小参数是什么？我准备保留到哪一阶，允许多大的误差？</p>`,
        source: '学习手记初稿 · 根据幂级数、泰勒展开与物理近似主题整理；具体课程记号可继续调整。'
      },
      en: {
        category: 'LEARNING NOTES / MATHEMATICAL METHODS · TAYLOR SERIES',
        title: 'Taylor expansions: turning a function into local physics.',
        lead: 'Often we do not need a function everywhere. We need to know how it changes near a particular state. Taylor expansions organize that change into first order, second order, and smaller corrections.',
        body: `<h3>Choose where to look and how far to move</h3><p>Expand about x₀ and write ξ = x − x₀. Under the appropriate smoothness conditions, a finite-order Taylor formula is:</p><div class="formula">f(x₀ + ξ) = f(x₀) + f′(x₀)ξ<br>+ ½f″(x₀)ξ² + … + Rₙ</div><p>The expansion point selects the reference state; ξ measures the departure. For a dimensional variable, “small” requires a comparison scale, such as |ξ| / ℓ ≪ 1. A bare numerical value is not enough.</p><h3>Low-order terms often have physical meaning</h3><p>For a potential energy, the constant sets a reference energy, the first derivative gives the local force, and the second derivative measures curvature. At a stable equilibrium, V′(x₀) = 0 and V″(x₀) &gt; 0. For sufficiently small displacements:</p><div class="formula">V(x₀ + ξ) ≈ V(x₀) + ½V″(x₀)ξ²<br>F ≈ −V″(x₀)ξ</div><p>Many different smooth potentials therefore share the same small-oscillation model: a harmonic oscillator. The expansion reveals a local physical structure as well as simplifying the calculation.</p><h3>A written series still needs a validity check</h3><p>A finite approximation needs a sufficiently small remainder. An infinite series also requires convergence and equality to the original function. For example, 1 / (1 − x) = 1 + x + x² + … holds only for |x| &lt; 1. Near the boundary, a low-order truncation may be inaccurate.</p><p>When retained terms do not have special cancellations, comparing the next term with the retained terms is a useful first check. For reliable precision, estimate the remainder or compare with the original function. Keep the conditions alongside the approximation.</p><p class="reader-aside">Before expanding, write down the reference state, the dimensionless small parameter, the order to retain, and the error you can tolerate.</p>`,
        source: 'Draft learning note on power series, Taylor expansions, and physical approximations. Course-specific notation can be added later.'
      }
    },
    'gamow-peak': {
      section: 'learning',
      zh: {
        category: '学习手记 / 恒星物理 · 核反应',
        title: '恒星里的核反应，为什么偏爱一段能量？',
        lead: '高能粒子更容易穿过库仑势垒，却也更稀少。真正影响反应率的，是粒子数量和反应概率共同作用后，哪一段能量贡献最大。',
        body: `<h3>两个相反的趋势，在积分里相遇</h3><p>对非简并、非相对论热平衡等离子体中的非共振带电粒子反应，把截面写为 σ(E) = S(E) / E × exp[−√(E<sub>G</sub> / E)]。与相对运动能量的 Maxwell 分布及相对速度相乘后，能量的幂次因子相消，热平均反应率的主要积分结构为：</p><div class="formula">⟨σv⟩ ∝ ∫₀<sup>∞</sup> S(E)<br>exp[−E / (kT) − √(E<sub>G</sub> / E)] dE</div><p>这里省略了积分外的温度与质量前因子。指数中的第一项抑制高能粒子，第二项抑制低能粒子的势垒穿透。两者相乘，在中间形成一个能量窗口。</p><h3>E<sub>G</sub> 是反应参数，E<sub>0</sub> 才是峰的位置</h3><p>对于给定反应通道，Gamow 能量 E<sub>G</sub> 由反应核的电荷与约化质量等决定；它不是随温度变化的峰值能量。如果 S(E) 在相关能区变化缓慢，可以先最大化指数因子。令其指数对 E 的导数为零：</p><div class="formula">−1 / (kT) + √E<sub>G</sub> / (2E<sup>3/2</sup>) = 0<br>E<sub>0</sub> = [E<sub>G</sub>(kT)² / 4]<sup>1/3</sup></div><p>这说明 E<sub>0</sub> 随温度升高而升高，但 E<sub>G</sub> 对固定反应通道保持不变。应先说清哪个量固定，再讨论曲线怎样变化。</p><h3>这个峰代表什么？</h3><p>它描述哪些能量对热核反应率的积分贡献最重要，并不是粒子能量分布自身的最概然值。共振、S(E) 的快速变化、屏蔽等效应会让简单的 Gamow 窗口近似需要修正；E<sub>0</sub> 是上述假设下指数因子的峰位。</p><p class="reader-aside">保留这一幅图像：低能区“粒子多，但难以穿过势垒”，高能区“容易穿过，但粒子少”。核反应的主要贡献来自两者之间的折中。</p>`,
        source: '学习手记初稿 · 根据 Gamow 峰与 E_G、E_0 区分的讨论整理；使用非共振、S(E) 缓变近似。'
      },
      en: {
        category: 'LEARNING NOTES / STELLAR PHYSICS · NUCLEAR REACTIONS',
        title: 'Why do stellar nuclear reactions favor an energy window?',
        lead: 'Higher-energy particles tunnel through the Coulomb barrier more easily, but they are rarer. The reaction rate depends on the combination of abundance and reaction probability.',
        body: `<h3>Two opposing trends meet in an integral</h3><p>For a nonresonant charged-particle reaction in a nondegenerate, nonrelativistic thermal plasma, write the cross section as σ(E) = S(E) / E × exp[−√(E<sub>G</sub> / E)]. Multiplication by the Maxwell distribution of relative kinetic energy and the relative speed cancels the powers of E, giving the main integral structure:</p><div class="formula">⟨σv⟩ ∝ ∫₀<sup>∞</sup> S(E)<br>exp[−E / (kT) − √(E<sub>G</sub> / E)] dE</div><p>Temperature- and mass-dependent factors outside the integral are omitted here. The first exponential penalizes high energies; the second penalizes low-energy barrier penetration. Together, they select an intermediate window.</p><h3>E<sub>G</sub> is a reaction parameter; E<sub>0</sub> is the peak location</h3><p>For a fixed reaction channel, the Gamow energy E<sub>G</sub> is determined by the nuclear charges and reduced mass. It is not the temperature-dependent peak energy. If S(E) varies slowly across the window, maximize the exponential factor by setting the derivative of its exponent to zero:</p><div class="formula">−1 / (kT) + √E<sub>G</sub> / (2E<sup>3/2</sup>) = 0<br>E<sub>0</sub> = [E<sub>G</sub>(kT)² / 4]<sup>1/3</sup></div><p>E<sub>0</sub> rises with temperature, while E<sub>G</sub> remains fixed for the chosen channel. State what is held fixed before asking how the curve changes.</p><h3>What does this peak represent?</h3><p>It identifies energies that contribute strongly to the reaction-rate integral, not the most probable energy in the particle distribution alone. Resonances, rapidly varying S(E), and screening can require corrections. E<sub>0</sub> is the peak of the exponential factor under the assumptions above.</p><p class="reader-aside">Keep the picture: at low energies, particles are abundant but tunneling is difficult; at high energies, tunneling is easier but particles are scarce. The dominant contribution comes from the compromise between them.</p>`,
        source: 'Draft learning note developed from discussions of the Gamow peak and the distinction between E_G and E_0. Uses the nonresonant, slowly varying S(E) approximation.'
      }
    }
  }
};
