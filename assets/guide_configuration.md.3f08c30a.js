import{_ as e,c as n,o as a,a as s}from"./app.f3bcd0c3.js";const k='{"title":"Configuration","description":"","frontmatter":{},"headers":[{"level":2,"title":"Component options (local)","slug":"component-options-local"},{"level":3,"title":"Example","slug":"example"},{"level":3,"title":"Properties","slug":"properties"},{"level":2,"title":"Plugin options (global)","slug":"plugin-options-global"},{"level":3,"title":"Example","slug":"example-1"},{"level":3,"title":"Options","slug":"options"}],"relativePath":"guide/configuration.md","lastUpdated":1638781399784}',t={},o=s(`<h1 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The component can either be configured globally, or on component level. To avoid conflicts and enhance the adaptability it&#39;s suggested to configure <code>vue-timeago3</code> on component level.</p></div><h2 id="component-options-local" tabindex="-1">Component options (local) <a class="header-anchor" href="#component-options-local" aria-hidden="true">#</a></h2><p>As usual the component is configured using properties.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-vue"><div class="highlight-lines"><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>timeago</span>
    <span class="token attr-name">:datetime</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>date<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>es<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:converter-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      includeSeconds: true,
      addSuffix: false,
    }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">auto-update</span>
   <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> es <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;date-fns/locale&#39;</span> <span class="token comment">// import custom locale</span>

  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      date<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// current Date</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h3><p>The following props are available and can be used:</p><h4 id="datetime" tabindex="-1">datetime <a class="header-anchor" href="#datetime" aria-hidden="true">#</a></h4><blockquote><p>The <code>datetime</code> is used to compute the &quot;timeago&quot; as a word. It reflects a timestamp and can be either a <code>string</code>, <code>number</code> or a <code>Date</code>. Since it&#39;s a required property, the component won&#39;t work without it.</p></blockquote><ul><li><strong>type:</strong> <code>string | number | Date</code></li><li><strong>required:</strong> \u2714\uFE0F</li></ul><hr><h4 id="autoupdate" tabindex="-1">autoUpdate <a class="header-anchor" href="#autoupdate" aria-hidden="true">#</a></h4><blockquote><p><code>autoUpdate</code> specifies the period of time to update the component, <strong>in seconds</strong>. This can be omitted by setting it to <code>0</code> or <code>false</code>. Instead of passing <code>true</code> to activate it, you can also pass a custom interval by passing a <code>number</code>.</p></blockquote><ul><li><strong>type:</strong> <code>number | boolean</code></li><li><strong>required:</strong> \u274C</li><li><strong>default:</strong> <code>false</code></li></ul><hr><h4 id="locale" tabindex="-1">locale <a class="header-anchor" href="#locale" aria-hidden="true">#</a></h4><blockquote><p>The <code>locale</code> specifies the language which is used to render the date. All available <code>date-fns</code> locales are supported by default.</p></blockquote><ul><li><strong>type:</strong> <code>Locale</code> (see <a href="https://date-fns.org/v2.26.0/docs/Locale" target="_blank" rel="noopener noreferrer">date-fns/Locale</a>)</li><li><strong>required:</strong> \u274C</li><li><strong>default:</strong> <code>en</code></li></ul><hr><h4 id="converter" tabindex="-1">converter <a class="header-anchor" href="#converter" aria-hidden="true">#</a></h4><blockquote><p>A <strong>converter</strong> that formats regular dates in <code>x Seconds ago</code>, or in <code>xxx</code> style. Check out the <a href="https://github.com/MrDeerly/vue-timeago3/blob/master/src/converter/defaultConverter.ts" target="_blank" rel="noopener noreferrer">default converter</a> which uses <a href="https://date-fns.org/v2.24.0/docs/formatDistanceToNow" target="_blank" rel="noopener noreferrer">date-fns formatDistanceToNow</a></p></blockquote><ul><li><strong>type:</strong> <code>(date, converterOptions) =&gt; string</code></li><li><strong>required:</strong> \u274C</li><li><strong>default:</strong> <code>null</code></li></ul><hr><h4 id="converteroptions" tabindex="-1">converterOptions <a class="header-anchor" href="#converteroptions" aria-hidden="true">#</a></h4><blockquote><p>The converterOptions allow you to adjust the default converter&#39; configuration. The default supports the main options of <code>date-fns</code>, naming:</p><ul><li><code>includeSeconds</code> - <code>boolean</code> - distances less than a minute are more detailed</li><li><code>addSuffix</code> - <code>boolean</code> - results specifies if now is earlier or later than the date passed</li></ul></blockquote><ul><li><strong>type:</strong> <code>Record&lt;string, boolean&gt;</code></li><li><strong>required:</strong> \u274C</li><li><strong>default:</strong> <code>{}</code></li></ul><h2 id="plugin-options-global" tabindex="-1">Plugin options (global) <a class="header-anchor" href="#plugin-options-global" aria-hidden="true">#</a></h2><p>Instead of configuring vue-timeago3 on component level, it can also be configured on a global level while registering the component.</p><h3 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-hidden="true">#</a></h3><div class="language-js"><div class="highlight-lines"><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><div class="highlighted">\xA0</div><br><br><br><br><br><br></div><pre><code><span class="token comment">// src/main.ts</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> timeago <span class="token keyword">from</span> <span class="token string">&#39;vue-timeago3&#39;</span> <span class="token comment">// import timeago</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> es <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;date-fns/locale&#39;</span> <span class="token comment">// import custom locale</span>


<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">...</span>
<span class="token comment">// define options</span>
<span class="token keyword">const</span> timeagoOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  converterOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      includeSeconds<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  locale<span class="token operator">:</span> es<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>timeago<span class="token punctuation">,</span>  timeagoOptions<span class="token punctuation">)</span> <span class="token comment">// register timeago with options</span>
<span class="token operator">...</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If both global and component options are used, the component options will be higher prioritized and used.</p></div><h4 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-hidden="true">#</a></h4><blockquote><p>The <code>name</code> option allows you to customize the components name. Please keep in mind that with changing this value, you need to use the component with the specified name.</p></blockquote><ul><li><strong>type:</strong> <code>string</code></li><li><strong>required:</strong> \u274C</li><li><strong>default:</strong> <code>Timeago</code></li></ul><hr><h4 id="locale-1" tabindex="-1">locale <a class="header-anchor" href="#locale-1" aria-hidden="true">#</a></h4><blockquote><p>The <code>locale</code> specifies the language which is used to render the date. All available <code>date-fns</code> locales are supported by default.</p></blockquote><ul><li><strong>type:</strong> <code>Locale</code> (see <a href="https://date-fns.org/v2.26.0/docs/Locale" target="_blank" rel="noopener noreferrer">date-fns/Locale</a>)</li><li><strong>required:</strong> \u274C</li><li><strong>default:</strong> <code>en</code></li></ul><hr><h4 id="converter-1" tabindex="-1">converter <a class="header-anchor" href="#converter-1" aria-hidden="true">#</a></h4><blockquote><p>A <strong>converter</strong> that formats regular dates in <code>x Seconds ago</code>, or in <code>xxx</code> style. Check out the <a href="https://github.com/MrDeerly/vue-timeago3/blob/master/src/converter/defaultConverter.ts" target="_blank" rel="noopener noreferrer">default converter</a> which uses <a href="https://date-fns.org/v2.24.0/docs/formatDistanceToNow" target="_blank" rel="noopener noreferrer">date-fns formatDistanceToNow</a></p></blockquote><ul><li><strong>type:</strong> <code>(date, converterOptions) =&gt; string</code></li><li><strong>required:</strong> \u274C</li><li><strong>default:</strong> <code>null</code></li></ul><hr><h4 id="converteroptions-1" tabindex="-1">converterOptions <a class="header-anchor" href="#converteroptions-1" aria-hidden="true">#</a></h4><blockquote><p>The converterOptions allow you to adjust the default converter&#39; configuration. The default supports the main options of <code>date-fns</code>, naming:</p><ul><li><code>includeSeconds</code> - <code>boolean</code> - distances less than a minute are more detailed</li><li><code>addSuffix</code> - <code>boolean</code> - results specifies if now is earlier or later than the date passed</li></ul></blockquote><ul><li><strong>type:</strong> <code>Record&lt;string, boolean&gt;</code></li><li><strong>required:</strong> \u274C</li><li><strong>default:</strong> <code>{}</code></li></ul>`,48),c=[o];function l(i,p,r,d,u,h){return a(),n("div",null,c)}var m=e(t,[["render",l]]);export{k as __pageData,m as default};
