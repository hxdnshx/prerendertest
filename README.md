# route-test

这个项目实现了：

	-/（\.\*) 路径下的网页会显示 一个按钮，按下后会跳转到 /$1\1 路径下

	-在发布这个项目的时候，会预先生成 /114514 /1919810 两个路径时的网页渲染结果

    -在通过asp.net core 启动后，无论是否启用javascript，访问 /[0-9]+ 路径总是能显示出显示数值正确的button。

## Project setup
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

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
