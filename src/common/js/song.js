import {getLyric} from 'api/song'
import {ERR_OK} from 'api/config'
import {Base64} from 'js-base64'

// 类的扩展性比对象好
export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id,
    this.mid = mid,
    this.singer = singer,
    this.name = name,
    this.album = album,
    this.duration = duration,
    this.image = image,
    this.url = url
  }

  getLyric() {
    if (this.lyric) {
      return Promise.resolve(this.lyric)
    }

    return new Promise((resolve, reject) => {
      getLyric(this.id,this.mid).then((res) => {
        if (res.code === ERR_OK) {
          this.lyric = res.data.lyric.lyric
          resolve(this.lyric)
        }else {
          reject('no lyric')
        }
      })
    })
  }
}

// 外面再封装一层
// 歌手页面的歌曲信息
export function createSong(musicData) {
  return new Song({
    id: musicData.id,
    mid: musicData.m_id,
    singer: musicData.m_author,
    name: musicData.m_name,
    album: musicData.m_author,
    duration: musicData.duration,//时长
    image: musicData.m_thumb,
    url:musicData.m_music_url,
    // 获取到正确url后，后续添加
    // url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?fromtag=38&guid=5931742855&vkey=${songVkey}`
  })
}

// 和歌手页面返回的歌曲格式不一样
// 需要重新封装一层与歌手歌曲推荐页面一样格式的歌曲数据格式
export function createRecommendSong(musicData) {
  return new Song({
    id: musicData.id,
    mid: musicData.m_id,
    singer: musicData.m_author,
    name: musicData.m_name,
    album: musicData.m_name,
    duration:  musicData.duration,//时长
    image: musicData.m_thumb,
  })
}

function filterSinger(singer) {
  let ret = []
  // 边界处理：万一歌手不存在
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}
