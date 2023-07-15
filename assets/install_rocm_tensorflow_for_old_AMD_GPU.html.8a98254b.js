import{_ as n,r as s,o as l,c as r,a as e,b as t,d as i,e as a}from"./app.76e8dadb.js";const d={},p=e("h1",{id:"\u4E3A\u65E7amd\u663E\u5361\u5B89\u88C5rocm\u7248\u672C\u7684tensorflow",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E3A\u65E7amd\u663E\u5361\u5B89\u88C5rocm\u7248\u672C\u7684tensorflow","aria-hidden":"true"},"#"),t(" \u4E3A\u65E7AMD\u663E\u5361\u5B89\u88C5ROCm\u7248\u672C\u7684tensorflow")],-1),c=e("blockquote",null,[e("p",null,"\u521D\u6B21\u7F16\u5199\u65F6\u95F4\uFF1A2022/09/30")],-1),u=e("p",null,[t("\u65E7AMD\u663E\u5361\u662F\u6307"),e("strong",null,"gfx803"),t("\u6838\u5FC3\uFF1APolaris 20 / Polaris 21 / Polaris 30 / Polaris 31")],-1),h={href:"https://github.com/NicerWang/RX580-rocM-tensorflow-ubuntu20.4-guide",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/Grench6/RX580-rocM-tensorflow-ubuntu20.4-guide",target:"_blank",rel:"noopener noreferrer"},_=a(`<h2 id="\u5176\u4ED6\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u95EE\u9898" aria-hidden="true">#</a> \u5176\u4ED6\u95EE\u9898</h2><ol><li><p>\u5B89\u88C5\u65E7\u7248\u672CPython\u540E\uFF0C\u5982\u4F55\u5B89\u88C5pip\uFF1F\uFF08#.#\u8868\u793A\u67D0\u4E2A\u7248\u672C\uFF09</p><p>\u5230https://bootstrap.pypa.io/pip/\u4E0B\u8F7D\u5BF9\u5E94\u7248\u672C\u7684<code>get-pip.py</code>\u6587\u4EF6\uFF0C\u6216\u8005\u4F7F\u7528\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl https://bootstrap.pypa.io/pip/#.#/get-pip.py -o get-pip.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u800C\u540E\u6267\u884C\uFF1A<code>python#.# get-pip.py</code>\u3002\u5982\u679C\u51FA\u73B0\u9519\u8BEF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ModuleNotFoundError: No module named &#39;distutils.cmd&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5219\u9700\u8981\u6267\u884C<code>sudo apt-get install python#.#-distutils </code>\uFF0C\u800C\u540E\u91CD\u65B0\u6267\u884C<code>get-pip.py</code>\u3002</p></li><li><p>\u9A71\u52A8\u95EE\u9898\u5982\u4F55\u89E3\u51B3\uFF1F</p><p>\u4E0B\u8F7D\u5BF9\u5E94\u9A71\u52A8\u8FDB\u884C\u5B89\u88C5\uFF0C\u5982\u679C\u9A71\u52A8\u9700\u8981\u7F16\u8BD1\uFF0C\u5219\u5148\u6267\u884C<code>sudo apt-get install build-essential</code>\uFF0C\u800C\u540E\u518D\u8FDB\u884C\u7F16\u8BD1\u3002</p></li><li><p>\u955C\u50CF\u6E90\u95EE\u9898</p><ul><li><p><code>apt</code></p><p>\u4F7F\u7528\u955C\u50CF\u6E90\uFF1Ahttps://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/</p><p>\u5982\u679C\u67D0\u4E9B\u8F6F\u4EF6\u6E90\u6CA1\u6709\u5BF9\u5E94\u955C\u50CF\u6E90\uFF0C\u5219\u53EF\u4EE5\u8BBE\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\uFF08<code>apt</code>\u4F3C\u4E4E\u4E0D\u53D7\u73AF\u5883\u53D8\u91CF\u4E2D\u7684\u4EE3\u7406\u5F71\u54CD\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo vim /etc/apt/apt.conf.d/proxy.conf
# \u5728\u5176\u4E2D\u8F93\u5165
Acquire::http::Proxy &quot;http://server_ip:port/&quot;;
Acquire::https::Proxy &quot;http://server_ip:port/&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>pip</code></p><p>\u5355\u6B21\u4F7F\u7528\uFF1A<code>-i https://pypi.tuna.tsinghua.edu.cn/simple</code></p><p>\u4E00\u52B3\u6C38\u9038\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li></ol>`,2);function g(v,b){const o=s("ExternalLinkIcon");return l(),r("div",null,[p,c,u,e("p",null,[e("a",h,[t("\u70B9\u51FB\u8FD9\u91CC"),i(o)]),t("\uFF08\u63A8\u8350\uFF09\u6216"),e("a",m,[t("\u8FD9\u91CC"),i(o)])]),_])}const f=n(d,[["render",g],["__file","install_rocm_tensorflow_for_old_AMD_GPU.html.vue"]]);export{f as default};
