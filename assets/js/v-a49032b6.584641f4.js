"use strict";(self.webpackChunkcclc_vuepress=self.webpackChunkcclc_vuepress||[]).push([[5373],{4702:(a,e,s)=>{s.r(e),s.d(e,{data:()=>t});const t={key:"v-a49032b6",path:"/vue/vue-echarts-show-dynamic-dots-on-world-map.html",title:"世界地图上显示动态的点",lang:"zh-CN",frontmatter:{title:"世界地图上显示动态的点",date:"2021-11-8",categories:["Vue"],tags:["Vue","ECharts"]},excerpt:"",headers:[],git:{},filePathRelative:"vue/vue-echarts-show-dynamic-dots-on-world-map.md"}},2806:(a,e,s)=>{s.r(e),s.d(e,{default:()=>c});const t=(0,s(6252).uE)('<h1 id="世界地图上显示动态的点" tabindex="-1"><a class="header-anchor" href="#世界地图上显示动态的点" aria-hidden="true">#</a> 世界地图上显示动态的点</h1><p><strong>使用一个包含了 10 万个经纬度坐标的数据集，一个坐标是一个点，每次在地图上显示 80%的数据</strong></p><p>示例:</p><ul><li><p>全局 <br><img src="/blog_images/vue-echarts-show-dynamic-dots-on-world-map/1.gif" alt="1"></p></li><li><p>局部 <br><img src="/blog_images/vue-echarts-show-dynamic-dots-on-world-map/2.gif" alt="2"></p></li></ul><p>做法:<br></p><ul><li>1.在页面上放置 2 个 canvas，每次只显示一个</li><li>2.在不显示的那个 canvas 上渲染新数据</li><li>3.渲染数据时不要一次性都渲染完，将数据按照 2 个 canvas 切换的时间间隔/刷新率做渲染，这样可以在不渲染页面的时候绘制 canvas，否则会引起页面的<strong>严重卡顿</strong></li><li>4.canvas 切换的时候，正在显示的 canvas 做淡出，即将显示的 canvas 做淡入，保持相同的 opacity 增长/减少速度</li><li>5.通过查看页面性能来做优化，保证至少 30fps 的刷新率，否则页面会有明显的卡顿</li></ul>',6),r={},c=(0,s(3744).Z)(r,[["render",function(a,e){return t}]])},3744:(a,e)=>{e.Z=(a,e)=>{const s=a.__vccOpts||a;for(const[a,t]of e)s[a]=t;return s}}}]);