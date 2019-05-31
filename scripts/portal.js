'use strict'

function Portal (sites) {
  this.el = document.createElement('div')
  this.sites = sites

  // Templates

  function _readme () {
    return `<p class='readme'>网络指环是 <a href="https://github.com/XXIIVV/Webring" target='_blank'>WebRing</a> 的衍生中文项目，试图激励开发者，设计师等创作者们创建自己的网站，分享自己的作品，并共享彼此的流量（访客在点击博主们的网络指环时会随机跳转到以上网络指环集合中的某一站点）。我们欢迎个人博客，Wikis，或作品展示等站点的加入；）</p><br><p>如果你想加入网络指环项目，且你的个人网站是中文的，请提交一个 <a href='https://github.com/tvvocold/webring#如何加入网络指环' target='_blank'>Pull Request</a>。<p>如果你的个人网站是英文的，请提交 PR 到 <a href='https://github.com/XXIIVV/Webring#join-the-webring' target='_blank'>  Webring 英文项目</a>。<br /> 如果你发现了有链接错误，请 <a href='https://github.com/tvvocold/webring/issues/new' target='_blank'>报告给我们</a>。</p><br>`
  }

  function _buttons () {
    return `<p class='buttons'><a href='#random' onClick="portal.reload('random')">随机</a> | <a href='https://github.com/tvvocold/webring'>关于</a> <a id='icon'  href='#random' onClick="portal.reload('random')"></a></p>`
  }

  function _directory (sites) {
    return `
    <ul>${sites.reduce((acc, site, id) => { return `${acc}<li class='${site.type}'>${id}) <a href='${site.url}'>${_name(site)}</a></li>` }, '')}</ul>\n${_readme()}${_buttons()}`
  }

  function _name(site) {
    return site.title ? site.title : `${site.url.split('//')[1]}`
  }

  function _redirect (site) {
    return `<p>欢迎来到网络指环，正在带你跳转到 <a href="${site.url}">${site.url}</a></p><meta http-equiv="refresh" content="3; url=${site.url}">
    <p class='buttons'><a href='#' onClick="portal.reload('')">网络指环项目主页</a> | <a href='#${site.url}' onClick="portal.reload('random')">跳过</a> | <a href='#random' onClick="portal.reload('random')">随机</a> | <a href='https://github.com/tvvocold/webring'>GitHub</a> <a id='icon'  href='#random' onClick="portal.reload('random')"></a></p>`
  }

  //

  this.install = function (host) {
    host.appendChild(this.el)
  }

  this.start = function () {
    this.el.innerHTML = window.location.hash && window.location.hash.length > 4 ? _redirect(this.next()) : _directory(this.sites)
  }

  this.reload = function () {
    setTimeout(() => { window.location.reload() }, 500)
  }

  this.navigate = function (target) {
    setTimeout(() => { window.location.href = target }, 3000)
  }

  this.locate = function () {
    const hash = window.location.hash.replace('#', '').trim()

    if (hash == 'random') {
      return Math.floor(Math.random() * this.sites.length)
    }

    for (const id in this.sites) {
      const site = this.sites[id]
      if (site.url.indexOf(hash) > -1) {
        return parseInt(id)
      }
    }
    return -1
  }

  this.next = function (loc = this.locate()) {
    return loc == this.sites.length - 1 ? this.sites[0] : this.sites[loc + 1]
  }
}
