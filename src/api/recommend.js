import jsonp from 'common/js/jsonp'
import {commonParams, options,BACKEND_HOST} from './config'

export function getRecommend() {
  const url = BACKEND_HOST+'/recommend'

  const data = Object.assign({}, commonParams, {
    per_page: 20,
    page: 1,
  })

  return jsonp(url, data, options)
}

// 变成Ajax请求
export function getDiscList() {
  const url = BACKEND_HOST+'/hot_list'

  const data = Object.assign({}, commonParams, {
  })

  return jsonp(url,data,options)
}

// 获取歌单数据 后端反向代理
export function getSongList(disstid) {
  const url = BACKEND_HOST+'/song_list/'+disstid;

  const data = Object.assign({}, commonParams, {
  })

  return jsonp(url,data,options)
}
