

# vuecli4 d3v5 力导向图示例(封装组件)

### 项目简介
前段时间接到一个项目，参考这个网站https://www.ownthink.com/  （思知），做一个类似功能的知识图谱功能的平台。需要使用D3V5开发，所以就做了这么一个demo程序。
使用d3v5开发的ForceDirected的vue组件，方便灵活使用。

本项目参考官方示例：https://gywgithub.github.io/vue-d3-examples/#/examples/forcedirected  


如果觉得本项目能帮助到你，欢迎star支持，谢谢。

### 项目效果
![输入图片说明](https://images.gitee.com/uploads/images/2020/0724/062443_7702d57f_1651640.png "QQ图片20200724060100.png")

### 框架版本
1. nodejs v12.16.1
2. vue/cli 4.4.6
3. d3/5.16.0


### 框架结构

```c
    src             --  资源目录
        axios       --  封装axios
        assets      --  静态资源文件
        components  --  组件
        router      --  路由，负责指定页面链接
        service     --  服务层，数据联调，引入请求
        store       --  Vuex
        views       --  视图页面
        main.js     --  入口文件
```


## 项目安装
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### 项目访问入口
http://localhost:8080/

### 修改vue默认端口  
在“nodemodules文件夹”→“@vue”→“@cli-service”→“lib”→“commands”→“serve.js”中，修改默认端口
```c
const defaults = {
  host: '0.0.0.0',
  port: 8089,               -- 这里修改
  https: false
}
```


### 更新日志

- 2020年7月24日
1. 上传demo示例


