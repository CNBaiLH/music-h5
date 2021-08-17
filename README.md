# Vue-music

<h1 align="center">Welcome to Vue-Music-Player👋</h1>
<p align="center">
  <img src="https://img.shields.io/badge/node-v10.15.3-green" />
  <img src="https://img.shields.io/badge/npm-6.14.8-yellowgreen" />
  <img src="https://img.shields.io/badge/vue-^2.6.11-greenyellow" />
  <img src="https://img.shields.io/badge/vueCli-4.5.0-yellow" />
</p>

**项目相关技术栈：`Vue.js` + `Vue Router` + `Vuex` + `axios` + `jsonp` + `better-scroll`**
**该项目是[基于](https://github.com/yxiuzhu/vuemusic)搭建。后端使用go+本地音乐数据提供服务**

## 🚀 如何运行

```
# 克隆
git clone https://github.com/CNBaiLH/music-h5.git
```

```
# 打开项目目录
cd music-h5
```

```
# 安装依赖
npm install
```

```
# 开启本地服务运行项目
npm run dev
```

## 项目演示
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210410212531578.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hhb3RpYW4xOTk3,size_16,color_FFFFFF,t_70) ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210410212055435.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hhb3RpYW4xOTk3,size_16,color_FFFFFF,t_70)




- [项目演示地址](http://music.cdltycw.com/)（请用chrome手机模式预览）



## 项目页面及功能

- recommend推荐页面
- singer歌手页面
- singer-detail歌手详情页面
- player音乐播放器组件
- disc歌曲推荐歌单页面
- rank排行榜及其详情页面
- search搜索页面
- playlist歌曲播放列表组件
- usercenter用户中心页面

## 👍recommend推荐页面
- `jsonp`解决跨域问题，获取接口数据
- `axios`后端代理请求接口数据
- `slider`轮播图组件实现
- 封装第三方JS库`better-scroll`，处理移动端页面滚动
- `vue-lazyload`懒加载
- `loading`加载状态组件
- `disc`二级路由实现热门歌单推荐

## 👩‍🎤singer歌手页面

- 封装获取的歌手数据
- `listview`歌手列表组件实现右侧字母的快速导航

## 🎶singer-detail歌手详情页面

- `Vuex`对歌手数据进行状态管理
- `musiclist`组件开发

## 🎧player音乐播放器组件

- HTML5的新特性`audio`元素实现player音乐播放
- 实现对歌曲的【播放、暂停、切歌、歌单顺序播放、单曲循环、随机播放，添加喜欢】
- Vue钩子函数实现播放器动画
- 歌曲播放进度条
- mini音乐播放器

## 🎼rank排行榜及其详情页面

- 歌曲排行榜：二级路由
- 组件的扩展复用

## 🔍︎search搜索页面

- `search-box`搜索框组件（有无query搜索词）
- `search-list`推荐历史组件（无query）
- `suggest`搜索内容组件（有query）
- 缓存策略`localStorage`存储搜索历史
- `confirm`确认组件

## 📖playlist歌曲播放列表组件

- `add-song`添加歌曲到列表
- `transition-group`列表动画
- `Vue.js`组件复用

## 👨usercenter用户中心页面

- 我喜欢的歌曲列表
- 最近听的歌曲列表
- 随机播放

## 实用的组件

> 通用组件包括如下
>
> - `confirm`确认组件
> - `listview`列表快速导航组件
> - `loading`加载状态组件
> - `noResult`组件
> - `progress-bar`进度条组件
> - `progress-circle`圆形进度条组件
> - `Scroll`移动端滚动组件
> - `search-box`搜索框组件
> - `search-list`搜索列表组件
> - `slider`轮播图组件
> - `switch`标签切换组件
> - `top-tip`顶部消息提示组件
> - `song-list`歌曲列表组件
>
> 还有一些是为本项目量身订做的组件，与上面的通用组件都在 `src/components` 目录下

## CSS布局样式

> - 公共`base.css`–基础样式，变量设置、防止高度塌陷
> - 初始化`normalize.css`-初始化浏览器样式

## 项目优化

>- `vue-lazyload`实现商品图片懒加载
>- `FastClick`解决移动端点击的300ms的延迟
>- `debounce`防抖函数实现页面刷新
>- `keep-alive`避免页面反复重渲染导致的性能问题


## 项目目录结构

music-h5
> build --打包配置
>
> src -- 项目文件
>
> > App.vue
> >
> > main.js
> >
> > api -- axios、jsonp服务端通讯
> >
> > base -- 基础组件
> >
> > common -- 处理缓存、操作dom、配置网络通讯、mixin等工具类
> >
> > components -- 业务组件
> >
> > router -- Vue Router路由配置
> >
> > store -- Vuex
