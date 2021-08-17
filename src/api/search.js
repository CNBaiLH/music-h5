import jsonp from 'common/js/jsonp'
import { commonParams, options,BACKEND_HOST } from './config'

// 热门搜索词 jsonp
export function getHotKey() {
  const url = BACKEND_HOST+'/hotkey'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

// 抓取搜索页的推荐数据（suggest.vue） == 反向代理
export function search(query, page, zhida, perpage) {
  const url = BACKEND_HOST+'/s'

  const data = Object.assign({}, commonParams, {
    key: query,
    page: page,
    per_page: perpage,
  })

  return jsonp(url, data, options)
}
