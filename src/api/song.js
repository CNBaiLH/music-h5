import {commonParams, BACKEND_HOST, options} from './config'
import jsonp from 'common/js/jsonp'

// 后台代理获取歌词数据
export function getLyric(music_id,mid) {
  const url = BACKEND_HOST+'/lyric/'+music_id+"?mid="+mid;

  const data = Object.assign({}, commonParams, {
    format: 'json'
  });
  var rsp = jsonp(url,data,options);
  return rsp
}
