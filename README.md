# Makers Union - 创作者联盟

> 没有人是一座孤岛，在茫茫大海里独踞。—— 约翰·多恩

[Makers Union - 创作者联盟](https://union.zhaodao.ai) 是 [找到AI](https://zhaodao.ai) 发起的致力于构建更加繁荣的互联网创作生态的流量共享项目，衍生于 [WebRing](https://wiki.xxiivv.com/webring) ，我们期望中国本土的创作者可以共同“戴上” Makers Union - 创作者联盟指环，以共享彼此的流量（访客在点击联盟成员网站的指环按钮后，会随机跳转到联盟成员集合中的某一站点）。欢迎更多优秀的中国创作者加入我们的联盟；）

如果你是一位创作者且拥有一个网站，请提交一个 [Pull Request](https://github.com/zhaodaoai/Makers-Union#如何加入创作者联盟)，同时我们也欢迎任何可以帮助创作者创作的工具类、内容类的网站加入。

如果你发现了有链接错误，请 [告知我们](https://github.com/zhaodaoai/Makers-Union/issues/new/choose)。

## 如何加入创作者联盟？

0，确保你要提交的网站是发表创作的，包括但不限于书、博客、文章、电影、音乐、播客、软件、硬件等 [作品](https://zh.wikipedia.org/wiki/%E4%BD%9C%E5%93%81)。

1，添加联盟指环图标到你的网站，示例代码如下。建议添加联盟图标到 footer 社交媒体位置，见 [示例](https://zhaodao.ai/p/62)。你也可自行托管图标文件，或自定义 width 及 height。

> 如果你的网站是黑色背景，可以选用 [`icon.white.svg`](https://union.zhaodao.ai/icon.white.svg)。
> 如果你的网站使用了阿里等矢量图标库，可以下载描边填充后的 [`makers-union.svg`](https://union.zhaodao.ai/makers-union.svg) 并上传到自己的图标库调用。


```
<a href='https://union.zhaodao.ai/#random' target='_blank'><img src='https://union.zhaodao.ai/icon.black.svg' width="25" height="25"></a>
```

2，Fork 本项目，添加你的网站信息到 [sites.js](https://github.com/zhaodaoai/Makers-Union/edit/master/scripts/sites.js) 文件。 `url` 值为必填，你可以选填 `title`, `type`, `author`, `contact`, 或 `rss`。

3，提交一个 Pull Request，并在 PR 的描述中 **注明你的页面添加网络指环图标的位置**，并等待管理员合并。（本项目使用 GitHub Pages 服务托管，在管理员合并你的代码后，一般会在 10min 左右更新上线） 


**单页面网站，纯社交网络聚合站点将被拒绝合并**


### 循环链接（可选）

如果你期望跳转到联盟指环的下一个链接，可以通过在请求网址的 # 后添加你的网站域名，如：

```
<a href='https://union.zhaodao.ai/#zhaodao.ai' target='_blank' rel="noopener noreferrer"><img src='https://union.zhaodao.ai/icon.white.svg' width="25" height="25"></a>
```


## 需要帮忙吗？

如果你看不懂以上代码或指引，可发邮件至 ray#zhaodao.ai (# 改为 @) 寻求帮助。本项目由 [Ray](https://github.com/tvvocold) 维护，我们欢迎更多人参与并贡献这个项目。
