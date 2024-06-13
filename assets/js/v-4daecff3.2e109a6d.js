"use strict";(self.webpackChunkcclc_vuepress=self.webpackChunkcclc_vuepress||[]).push([[4910],{142:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-4daecff3",path:"/frontend/elementUI-table-scrollbar.html",title:"修改ElementUI table组件的滚动条高度",lang:"zh-CN",frontmatter:{title:"修改ElementUI table组件的滚动条高度",date:"2022-05-17",categories:["H5"],tags:["CSS"]},excerpt:"",headers:[],git:{},filePathRelative:"frontend/elementUI-table-scrollbar.md"}},6282:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});const e=(0,a(6252).uE)('<h1 id="修改-elementui-table-组件的滚动条高度" tabindex="-1"><a class="header-anchor" href="#修改-elementui-table-组件的滚动条高度" aria-hidden="true">#</a> 修改 ElementUI table 组件的滚动条高度</h1><p>ElementUI 的 table 组件包含很多实用的功能，其中就包含<code>fixed</code>属性来固定某几列内容，使之不随滚动条滚动。但是它自带的滚动条高度只有 6px，可能某些时候并不便于用户点击拖拉。</p><p>如果我们手动改了滚动条高度，就会发现<code>fixed</code>的那一列会有一部分盖在了滚动条上，十分的不美观。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.el-table</span> <span class="token punctuation">{</span>\n  <span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>\n    //整个滚动条\n    <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n    <span class="token comment">/* 横向滚动条 高度 */</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>\n    // 滚动条上的滚动滑块\n    // <span class="token property">background</span><span class="token punctuation">:</span> #000 <span class="token important">!important</span><span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/blog_images/elementUI-table-scrollbar/2.jpg" alt="2"></p><p>这时候需要让<code>fixed</code>的列在滚动条出现的时候适应我们自定义的滚动条样式</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.el-table--scrollable-x</span> <span class="token punctuation">{</span>\n  <span class="token selector">.el-table__fixed</span> <span class="token punctuation">{</span>\n    <span class="token property">bottom</span><span class="token punctuation">:</span> 10px <span class="token important">!important</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">.el-table__fixed-right</span> <span class="token punctuation">{</span>\n    <span class="token property">bottom</span><span class="token punctuation">:</span> 10px <span class="token important">!important</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/blog_images/elementUI-table-scrollbar/1.jpg" alt="1"></p>',8),t={},l=(0,a(3744).Z)(t,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);