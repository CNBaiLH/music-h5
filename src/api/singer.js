import jsonp from 'common/js/jsonp'
import {commonParams, options,BACKEND_HOST} from './config'

/**
 * 获取歌手列表数据
 */
export function getSingerList(page) {
  const url = BACKEND_HOST+'/singer'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    per_page: 100,
    page: page,
  })

  return jsonp(url, data, options)
}

/**
 * 获取歌手详情数据
 */
export function getSingerDetail(singerId) {
  const url = BACKEND_HOST+'/singer/'+singerId

  const data = Object.assign({}, commonParams, {
    page: 1,
    num: 100,
  })

  return jsonp(url, data, options)
}

// 传入歌曲的mid(songmid)，获得正确的songkey
export function getPlaySongKey(songmid) {
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
  const data = Object.assign({}, commonParams, {
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    data: `{"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"1673625875","songmid":["${songmid}"],"songtype":[0],"uin":"0","loginflag":1,"platform":"20"}},"comm":{"uin":0,"format":"json","ct":24,"cv":0}}`
  })
  return jsonp(url, data, '')
}

// 拼接出访问歌曲的正确url
export function getSongUrl(songmid) {
  return getPlaySongKey(songmid).then(res => {
    if (res.code === 0) {
      const purl = res.req_0.data.midurlinfo[0].purl
      const host = res.req_0.data.sip[0]
      return Promise.resolve({code: 0, url: host + purl})
    }
  })
}
