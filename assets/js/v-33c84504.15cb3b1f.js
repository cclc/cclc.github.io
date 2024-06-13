"use strict";(self.webpackChunkcclc_vuepress=self.webpackChunkcclc_vuepress||[]).push([[1656],{7246:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-33c84504",path:"/frontend/canvas-zoom-img-by-button.html",title:"使用按钮做图片缩放",lang:"zh-CN",frontmatter:{title:"使用按钮做图片缩放",date:"2021-10-26",categories:["H5"],tags:["H5","Canvas"]},excerpt:"",headers:[{level:2,title:"1.添加 button 按钮",slug:"_1-添加-button-按钮",children:[]},{level:2,title:"2.在渲染图片时加入缩放比例 zoomRate",slug:"_2-在渲染图片时加入缩放比例-zoomrate",children:[]},{level:2,title:"3.添加 button 的点击事件",slug:"_3-添加-button-的点击事件",children:[]}],git:{},filePathRelative:"frontend/canvas-zoom-img-by-button.md"}},8540:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(6252);const p=(0,t._)("h1",{id:"使用按钮做图片缩放",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#使用按钮做图片缩放","aria-hidden":"true"},"#"),(0,t.Uk)(" 使用按钮做图片缩放")],-1),o=(0,t._)("p",null,"使用 Canvas 显示图片，通过放大(zoom in)、缩小(zoom out)、重置(reset)按钮来修改图片的显示效果。",-1),e={class:"table-of-contents"},c=(0,t.uE)('<p>基于以下教程开发</p><ul><li><a href="../frontend/canvas-show-img">1.图片在 Canvas 里显示的教程</a></li></ul><h2 id="_1-添加-button-按钮" tabindex="-1"><a class="header-anchor" href="#_1-添加-button-按钮" aria-hidden="true">#</a> 1.添加 button 按钮</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">float</span><span class="token punctuation">:</span> right</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zoomButton<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">zoomOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Zoom Out<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zoomButton<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">zoomIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Zoom In<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zoomButton<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">resetZoomLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Reset<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-在渲染图片时加入缩放比例-zoomrate" tabindex="-1"><a class="header-anchor" href="#_2-在渲染图片时加入缩放比例-zoomrate" aria-hidden="true">#</a> 2.在渲染图片时加入缩放比例 zoomRate</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 全局变量zoomRate</span>\n<span class="token keyword">let</span> zoomRate <span class="token operator">=</span> <span class="token number">1</span>\n\n<span class="token keyword">function</span> <span class="token function">drawImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">const</span> canvasContainer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;canvasContainer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;canvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> context <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>canvasContainer <span class="token operator">&amp;&amp;</span> canvas<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            img<span class="token punctuation">.</span>src <span class="token operator">=</span> imageData<span class="token punctuation">;</span> <span class="token comment">// 图片base64后的string</span>\n            img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 计算图片的缩放比例</span>\n            <span class="token comment">// 使用原尺寸高度，在默认状态下会出现上下滚动条</span>\n            <span class="token keyword">const</span> heightScaleRate <span class="token operator">=</span>\n                <span class="token punctuation">(</span>canvasContainer<span class="token punctuation">.</span>offsetHeight <span class="token operator">-</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">/</span> img<span class="token punctuation">.</span>height<span class="token punctuation">;</span>\n            <span class="token keyword">const</span> widthScaleRate <span class="token operator">=</span>\n                <span class="token punctuation">(</span>canvasContainer<span class="token punctuation">.</span>offsetWidth <span class="token operator">-</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">/</span> img<span class="token punctuation">.</span>width<span class="token punctuation">;</span>\n            <span class="token comment">// 选取比率小的，以防超过边界出现滚动条</span>\n            <span class="token keyword">const</span> scaleRate <span class="token operator">=</span>\n                heightScaleRate <span class="token operator">&gt;</span> widthScaleRate\n                <span class="token operator">?</span> widthScaleRate\n                <span class="token operator">:</span> heightScaleRate<span class="token punctuation">;</span>\n            context<span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span>scaleRate<span class="token punctuation">,</span> scaleRate<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>\n                img<span class="token punctuation">.</span>width <span class="token operator">*</span> scaleRate <span class="token operator">*</span> zoomRate\n            <span class="token punctuation">)</span><span class="token punctuation">;</span>\n            canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>\n                img<span class="token punctuation">.</span>height <span class="token operator">*</span> scaleRate <span class="token operator">*</span> zoomRate\n            <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            context<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            context<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>\n                img<span class="token punctuation">,</span>\n                <span class="token number">0</span><span class="token punctuation">,</span>\n                <span class="token number">0</span><span class="token punctuation">,</span>\n                canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span>\n                canvas<span class="token punctuation">.</span>height\n            <span class="token punctuation">)</span><span class="token punctuation">;</span>\n            context<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-添加-button-的点击事件" tabindex="-1"><a class="header-anchor" href="#_3-添加-button-的点击事件" aria-hidden="true">#</a> 3.添加 button 的点击事件</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">zoomIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    zoomRate <span class="token operator">=</span> zoomRate <span class="token operator">*</span> <span class="token number">1.1</span><span class="token punctuation">;</span>\n    <span class="token function">drawImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&quot;zoomButton&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">blur</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">zoomOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    zoomRate <span class="token operator">=</span> zoomRate <span class="token operator">/</span> <span class="token number">1.1</span><span class="token punctuation">;</span>\n    <span class="token function">drawImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&quot;zoomButton&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">blur</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">resetZoomLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    zoomRate <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    imageData <span class="token operator">=</span> originImageData<span class="token punctuation">;</span> <span class="token comment">// originImageData是图片的原始数据,未缩放时imageData等于originImageData</span>\n    <span class="token function">drawImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&quot;zoomButton&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">blur</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可通过按钮、框选、滚轮滚动来放大缩小图片的示例：</p>',9),l={},u=(0,a(3744).Z)(l,[["render",function(n,s){const a=(0,t.up)("RouterLink"),l=(0,t.up)("canvas-zoom-img");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,o,(0,t._)("nav",e,[(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(a,{to:"#_1-添加-button-按钮"},{default:(0,t.w5)((()=>[(0,t.Uk)("1.添加 button 按钮")])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(a,{to:"#_2-在渲染图片时加入缩放比例-zoomrate"},{default:(0,t.w5)((()=>[(0,t.Uk)("2.在渲染图片时加入缩放比例 zoomRate")])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(a,{to:"#_3-添加-button-的点击事件"},{default:(0,t.w5)((()=>[(0,t.Uk)("3.添加 button 的点击事件")])),_:1})])])]),c,(0,t.Wm)(l)],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);