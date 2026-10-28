# 光与粒子之间 · Hailing Fang

方海玲的中英双语天文学个人主页，包含科研介绍、主题笔记、专业课学习手记和个人兴趣。

纯 HTML / CSS / JavaScript，无需安装依赖或构建。代码中的图片均为 SVG 或浏览器绘制的示意图，不依赖外部图片、字体或 CDN。

## 首次发布到 GitHub Pages

1. 在 `2273711823-ctrl` 账号下创建公开仓库 `2273711823-ctrl.github.io`，勾选 **Add a README file**。
2. 将本包解压后的文件上传到仓库根目录（上传文件，不是 ZIP 压缩包；README 可替换为本版本）。
3. 打开仓库 **Settings → Pages**。
4. 在 **Build and deployment → Source** 选择 **Deploy from a branch**。
5. 选择 **main** 分支和 **/(root)**，点击 **Save**。
6. 等待仓库的 Pages 部署成功。按上述仓库名称发布后，网址为 `https://2273711823-ctrl.github.io/`。

这是待部署的预期地址；创建源码包不代表 GitHub 版本已上线。

## 继续更新

发布配置完成后，向 `main` 提交修改，GitHub Pages 会重新发布。

- `index.html`：主页结构、中文卡片摘要。
- `style.css`：配色、排版、响应式布局。
- `app.js`：主页英文文案、原有三篇主题笔记、交互。
- `learning-notes.js`：专业课入口的英文文案和中英双语学习手记全文。
- `favicon.svg`：网站图标。
- `.nojekyll`：让 Pages 直接发布静态文件。

当前两种语言均已完成。新增学习文章时，还应添加课程入口，检查中英切换和笔记打开、关闭及返回行为。

## Research update · 2026-10-28

The existing research section now includes an updated Cygnus Bubble overview (`#cygnus-bubble`) and a dated progress entry (`#cygnus-update`). The English copy and Chinese counterpart describe hadronic muon-neutrino modeling with LHAASO spectra, HEALPix templates, and public IceCube responses. Current atmospheric-background study and future detectability assessment are explicitly marked as work in progress.

One concise learning draft, “Atmospheric neutrinos: from flux to background” (`#note-atmospheric-neutrinos`), is linked from the update and the Learning section. It covers the current energy/zenith-angle study and distinguishes flux models from detector-level event predictions. Tool references point to the nuflux and daemonflux repositories; they are background resources, not publications by the site author.

The update uses the existing language toggle, note reader, and responsive styles, with no build step or new dependencies. Keep both language versions aligned when revising the project status; do not turn expected counts or learning exercises into detection or publication claims.

## 说明

科研工作标注为进行中，学习手记标注为可继续修订的初稿。示意星图与图形不是观测数据。源码包未包含 Sites 托管配置、Git 历史或访问凭据。

将来若更换 GitHub 用户名、仓库名或使用自定义域名，请同时更新 `index.html` 中的 canonical 与 og:url。

发布文档：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
