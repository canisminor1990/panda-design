# Pandora

PanD React UI Components

<img src="https://o4j4l4n7h.qnssl.com/2017-09-20-icon.png" width="360" />

- **Panda UED:** <http://ued.xiongmaojinku.com/pand>
- **Panda Design:** <http://xmui.xiongmaojinku.com/>

## RoadMap

![](http://on-img.com/chart_image/59b8e5c5e4b06f66982e9c68.png)

## Usage

```bash
# 安装依赖,配置环境和link
$ yarn run root

# 生成 roadhog.dll 并启动项目，有新包需要重新build
$ yarn build:dll
$ yarn start

# 创建合并请求
$ yarn merge
```

## Trello

<https://trello.com/b/Ae62EniM/fe>

组件池 -> 编写组件库 -> API Doc -> Done


## Link

**样式:** 需安装WebStorm插件
- [styled-components](https://www.styled-components.com/docs/basics)

**styled**: 一些扩展方法,如颜色运算等
- [polished](https://polished.js.org/docs/)

**react点击反馈:** 应用于Button之类的组件
- [rmc-feedback](https://github.com/react-component/m-feedback)

**prop类型检测**: 方便Debug和文档书写
- [prop-types](https://github.com/facebook/prop-types)

**js常用工具库**:
- [lodash](http://lodashjs.com/docs/)

**参考组件写法:**
- [ant-design-mobile](https://github.com/canisminor1990/ant-design-mobile)

**框架:**
- [roadhog](https://github.com/sorrycc/roadhog)
- [dva](https://github.com/dvajs/dva)

##注意事项
#### 因为将ui框架放进主工程出现了比较严重的循环引用问题，所以我们约定：
- 不要在component里使用import .. from pand；
- 最好避免默认导出 （export default） 这样的使用，直接命名导出 export，引用的时候也具体引用
