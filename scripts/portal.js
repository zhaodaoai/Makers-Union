'use strict'

function Portal (sites) {
  this.el = document.createElement('div')
  this.sites = sites

  // Templates

  function _readme () {
    return `<p class='readme'>SaaS 网络指环联盟是 <a href="https://zhaodao.ai" target='_blank'>找到AI</a> 发起的致力于发展中国本土的 SaaS 行业的流量共享项目，我们期望中国本土的 SaaS 网站可以共同“戴上” SaaS 网络指环，以共享彼此的流量（访客在点击联盟成员网站的网络指环按钮后，会随机跳转到联盟成员集合中的某一站点）。我们欢迎更多优质的中国本土 SaaS 供应商的加入；）</p><br>
    <p>如果你所在的公司期望加入 SaaS 网络指环联盟，且拥有一个 SaaS 类型的网站，请提交一个 <a href='https://github.com/zhaodaoai/SaaS-WebRing#如何加入网络指环' target='_blank'>Pull Request</a>。<br> 如果你发现了有链接错误，请 <a href='https://github.com/zhaodaoai/SaaS-WebRing/issues/new/choose' target='_blank'>报告给我们</a>。</p><br>`
  }

  function _buttons () {
    return `<p class='buttons'><a href='#random' onClick="portal.reload('random')">随机</a> | <a href='https://github.com/zhaodaoai/SaaS-WebRing/blob/master/README.md'>关于</a> <a id='icon'  href='#random' onClick="portal.reload('random')"></a></p>`
  }

  function _directory (sites) {
    return `
    <ul>${sites.reduce((acc, site, id) => { return `${acc}<li class='${site.type}'>${id}) <a href='${site.url}'>${_name(site)}</a></li>` }, '')}</ul>\n${_readme()}${_buttons()}`
  }

  function _name(site) {
    return site.title ? site.title : `${site.url.split('//')[1]}`
  }

  function _redirect (site) {
    return `<p>欢迎来到 SaaS 网络指环，这是一个网站流量共享项目，正在带你跳转到 <a href="${site.url}">${site.url}</a></p><meta http-equiv="refresh" content="3; url=${site.url}">
    <br><p class='buttons'><a href='#' onClick="portal.reload('')">网络指环联盟</a> | <a href='#${site.url}' onClick="portal.reload('random')">跳过</a> | <a href='#random' onClick="portal.reload('random')">随机</a> | <a href='https://github.com/zhaodaoai/SaaS-WebRing/blob/master/README.md'>GitHub</a> <a id='icon'  href='#random' onClick="portal.reload('random')"></a></p>`
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
