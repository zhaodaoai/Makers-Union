'use strict'

function Portal (sites) {
  this.el = document.createElement('div')
  this.sites = sites

  // Templates

  function _readme () {
    return ` <p class='readme'>Makers Union - 创作者联盟是 <a href="https://zhaodao.ai" target='_blank'>找到AI</a> 发起的致力于构建更加繁荣的互联网创作生态的流量共享项目，我们期望中国本土的创作者可以共同“戴上” Makers Union - 创作者联盟指环，以向大众分享彼此的流量、idea 和作品。欢迎更多优质的中国创作者加入我们的联盟；）</p><br>
    <p>如果你是一位创作者且拥有一个网站，请提交一个 <a href='https://github.com/zhaodaoai/Makers-Union#如何加入创作者联盟' target='_blank'>Pull Request</a> 加入我们。<br> 如果你发现了有链接错误，请 <a href='https://github.com/zhaodaoai/Makers-Union/issues/new/choose' target='_blank'>报告</a> 给我们。</p><br>`
  }

  function _buttons () {
    return `<p class='buttons'><a href='#random' onClick="portal.reload('random')">随机</a> | <a href='https://github.com/zhaodaoai/Makers-Union/blob/master/README.md'>关于</a> <p id="footer"> Connecting the dots </p><a id='icon'  href='#random' onClick="portal.reload('random')"></a></p>`
  }

  function _directory (sites) {
    return `
    <ul>${sites.reduce((acc, site, id) => { return `${acc}<li class='${site.type}'>${id}) <a href='${site.url}'>${_name(site)}</a></li>` }, '')}</ul>\n${_readme()}${_buttons()}`
  }

  function _name(site) {
    return site.title ? site.title : `${site.url.split('//')[1]}`
  }

  function _redirect (site) {
    return `<p>欢迎来到 Makers Union - 创作者联盟，这是一个创作者网站流量共享项目，正在带你跳转到另一个创作者网站： <a href="${site.url}">${site.url}</a></p><meta http-equiv="refresh" content="3; url=${site.url}">
    <br><p class='buttons'><a href='#' onClick="portal.reload('')">Makers Union - 创作者联盟主页</a> | <a href='#${site.url}' onClick="portal.reload('random')">跳过等待</a> | <a href='#random' onClick="portal.reload('random')">随机</a> | <a href='https://github.com/zhaodaoai/Makers-Union'>GitHub</a> <a id='icon'  href='#random' onClick="portal.reload('random')"></a></p>`
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
