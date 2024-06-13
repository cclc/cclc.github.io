"use strict";(self.webpackChunkcclc_vuepress=self.webpackChunkcclc_vuepress||[]).push([[3997],{3050:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-5852ae43",path:"/mess-knowledge/cancel-sending-request.html",title:"【H5】取消发送中的请求",lang:"zh-CN",frontmatter:{title:"【H5】取消发送中的请求",date:"2022-01-14",categories:["H5"],tags:["H5"]},excerpt:"",headers:[],git:{},filePathRelative:"mess-knowledge/cancel-sending-request.md"}},3736:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(6252);const p=(0,t._)("h1",{id:"【h5】取消发送中的请求",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#【h5】取消发送中的请求","aria-hidden":"true"},"#"),(0,t.Uk)(" 【H5】取消发送中的请求")],-1),e=(0,t._)("strong",null,"以前的前端发出了一个 Web 请求后是没法中止掉该请求的。如果是上传文件，就只能等待该请求发完，除非手动刷新当前的页面。",-1),o=(0,t._)("code",null,"AbortController",-1),c={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/AbortController",target:"_blank",rel:"noopener noreferrer"},l=(0,t.uE)('<p>在 axios 里的用法：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\naxios\n  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/foo/bar&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">signal</span><span class="token operator">:</span> controller<span class="token punctuation">.</span>signal<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// cancel the request</span>\ncontroller<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>集成在 Vue 里的用法:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">controller</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">closed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>controller<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 会把所有带这个参数的请求全都终止掉</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">async</span> <span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;multipart/form-data&quot;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">signal</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>controller<span class="token punctuation">.</span>signal<span class="token punctuation">,</span> <span class="token comment">// important!</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> file<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',4),i={},u=(0,a(3744).Z)(i,[["render",function(n,s){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("p",null,[e,(0,t._)("strong",null,[(0,t.Uk)("新出的"),o,(0,t.Uk)("接口支持根据需要中止一个或多个 Web 请求，这个接口仅支持一些较新的浏览器。"),(0,t._)("a",c,[(0,t.Uk)("兼容性检查"),(0,t.Wm)(a)])])]),l],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);