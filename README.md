# 网络指环 WebRing

网络指环是 [WebRing](https://wiki.xxiivv.com/webring) 的衍生中文项目，试图激励开发者，设计师等创作者们创建自己的网站，分享自己的作品，并共享彼此的流量（访客在点击博主们的网络指环时会随机跳转到指环集合中的某一站点）。我们欢迎个人网站如博客，Wikis 等个人博客/作品展示站点的加入；）

如果你想加入网络指环项目，且你的个人网站是中文的，请提交一个 [Pull Request](https://github.com/tvvocold/webring#如何加入网络指环) 。

如果你的个人网站是英文的，请提交到 [Webring 英文项目](https://github.com/XXIIVV/Webring#join-the-webring) 。

如果你发现了有链接错误，请 [报告给我们](https://github.com/tvvocold/webring/issues/new)。

## 如何加入网络指环？

0，确保你要提交的网站是个人网站，且非单页面网站或纯社交网络聚合站点。

1，添加网络指环图标到你的个人网站，可自行托管图标文件，或自定义 width 及 height：

```
<a href='https://webring.captainray.blog/#random' target='_blank'><img src='https://webring.captainray.blog/icon.black.svg' width="25" height="25"></a>
```

2，Fork 本项目，添加你的网站信息到 [sites.js](https://github.com/tvvocold/webring/edit/master/scripts/sites.js) 文件。 `url` 值为必填，你可以选填 `title`, `type`, `author`, `contact`, 或 `rss`。

3，提交一个 Pull Request，并在 PR 的描述中 **注明你的页面添加网络指环图标的位置**，并等待管理员合并。

如果你的网站是黑色背景，可以选用 [`icon.white.svg`](https://webring.captainray.blog/icon.white.svg)。

**单页面网站，纯社交网络聚合站点将被拒绝合并**


### 循环链接

如果你期望跳转到网络指环的下一个链接，可以通过在请求网址的 # 后添加你的网域，如：

```
<a href='https://webring.captainray.blog/#wiki.xxiivv' target='_blank' rel="noopener noreferrer"><img src='https://webring.captainray.blog/icon.white.svg' width="25" height="25"></a>
```


## 需要帮忙吗？

Webring 英文项目由 [@neauoire](https://twitter.com/neauoire) 维护，中文版即网络指环项目由 [Ray](https://github.com/tvvocold) 维护，任何人都可以参与并贡献进来共同维护这个项目。
