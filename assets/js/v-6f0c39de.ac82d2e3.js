"use strict";(self.webpackChunkcclc_vuepress=self.webpackChunkcclc_vuepress||[]).push([[7234],{962:(a,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t={key:"v-6f0c39de",path:"/vue/vue-iframe-vgg-via-1.html",title:"通过iframe使用VGG VIA(1)",lang:"zh-CN",frontmatter:{title:"通过iframe使用VGG VIA(1)",date:"2021-11-18",categories:["Other"],tags:["Other"]},excerpt:"",headers:[],git:{},filePathRelative:"vue/vue-iframe-vgg-via-1.md"}},8654:(a,n,s)=>{s.r(n),s.d(n,{default:()=>p});const t=(0,s(6252).uE)('<h1 id="在vue项目内通过iframe使用vgg-via-1" tabindex="-1"><a class="header-anchor" href="#在vue项目内通过iframe使用vgg-via-1" aria-hidden="true">#</a> 在Vue项目内通过iframe使用VGG VIA(1)</h1><p><strong>VGG Image Annotator (VIA)是一款开源的图像标注工具，由Visual Geometry Group开发。可以在线和离线使用，可标注矩形、圆、椭圆、多边形、点和线。标注完成后，可以导出为csv和json文件格式。</strong></p><p>我在Vue项目里通过iframe在页面内部嵌入了VIA的网页，并且能够通过父页面直接调用VIA里的方法</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>iframeDiv<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imageShow?&#39;&#39;:&#39;visibilityH&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span>\n        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>iframe<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>iframe<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../../../static/via.html<span class="token punctuation">&quot;</span></span>\n        <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span>\n        <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">@load</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>iframeLoadFinish()<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果:</p><p><img src="/blog_images/vue-iframe-vgg-via-1/1.gif" alt="1"></p>',6),e={},p=(0,s(3744).Z)(e,[["render",function(a,n){return t}]])},3744:(a,n)=>{n.Z=(a,n)=>{const s=a.__vccOpts||a;for(const[a,t]of n)s[a]=t;return s}}}]);