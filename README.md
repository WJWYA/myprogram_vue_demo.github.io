&emsp;&emsp;我们可以将vue项目发布、更新到到github上去。首先你应建好了本地的vue项目，其次你还需要一个[github账号](https://github.com/)，并且本地安装了[git](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)，然后配置密钥，就不用每次上传时输入用户名和密码了。网上配置密钥的文章有很多，可以自行查阅。
- - -
## vue 项目发布到github
### 在github上创建新的仓库
在github上新创建一个仓库，并复制好`远程库地址`，在下面的操作中将会用到该地址。
![](https://s3.ax1x.com/2020/12/10/rF8Vld.jpg)
### 上传vue项目
在vue项目根目录下：
* 把该目录变成git可以管理的仓库
  >终端输入：`git init`
* 将所有文件添加到暂存区,不要忘记后面的小数点“.”，意思为添加文件夹下的所有文件
  >终端输入：`git add .`
* 提交文件到github仓库
  >终端输入：`git commit -m "提交说明"`
* 关联到远程库，我创建的该仓库远程库地址为`https://github.com/WJWYA/myprogram_vue_demo.github.io.git`
  >终端输入：`git remote add origin 远程库地址`
* 将项目所有文件push到仓库中
  >终端输入：`git push -u origin master`

整个过程终端显示如下
![](https://s3.ax1x.com/2020/12/10/rFtt8U.jpg)
上传vue项目后刷新一下该github仓库，显示如下
![](https://s3.ax1x.com/2020/12/10/rFtUv4.jpg)
此时是将整个项目上传到了github，如想生成网址并预览，需要打包vue项目并发布到github


### 打包vue项目
在vue项目根目录下：
>终端输入：`npm run build`

该操作会在vue根目录下生成dist文件夹，即项目的静态资源
![](https://s3.ax1x.com/2020/12/10/rFNKJK.jpg)
**注意**：打开dist文件夹下的`index.html`,若为空白页，说明路径存在问题。
**解决方法：**
* 在`package.json`文件的同级目录下创建`vue.config.js`文件，在该文件输入以下内容并保存
  ```js
  module.exports = {
      publicPath: './'
  }
  ```
* 若为了在地址中不显示`#`,在路由里添加了`history`模式的，需要将其注释掉，不然github依然无法正确读取路径。
* >再次终端输入：`npm run build`

此时再查看dist文件夹下的`index.html`,是不是可以正常打开啦~
![](https://s3.ax1x.com/2020/12/10/rFaEU1.jpg)
**注意**：这是我在本地打开的网页，要想生成一个在线的地址，需要将dist文件上传到github
### 上传可预览的vue项目
这里需要把dist文件夹上传到远程仓库的另一个分支`gh-pages`(我目前还没搞清楚是否可以直接将dist上传到master分支，暂且先传到gh-pages分支吧),在vue项目根目录下：
* 创建分支并切换
  >终端输入：`git checkout -b gh-pages`
* 将dist文件添加到暂存区，加`-f`强制提交
  >终端输入：`git add -f dist`
* 提交文件到github仓库
  >终端输入：`git commit -m "提交dist到gh-pages"`
* push文件到仓库中
  >终端输入：`git push origin gh-pages`

整个过程终端显示如下
![](https://s3.ax1x.com/2020/12/10/rFd7wj.jpg)
上传dist文件后刷新一下该github仓库，切换分支到`gh-pages`，发现dist文件上传成功
![](https://s3.ax1x.com/2020/12/10/rFdLYq.jpg)
在该github仓库中打开`Settings`,下滑找到`GitHub Pages`,发现他已经将网站发布到一个网址上
![](https://s3.ax1x.com/2020/12/10/rFwa7j.jpg)

但是点击这个地址后并不是我们想要界面，要解决这个问题只需要在网址后面加上`dist`即可，然后我们的项目就可以通过[网址](http://wjwya.top/myprogram_vue_demo.github.io/dist/#/)访问啦~~~~
![](https://s3.ax1x.com/2020/12/10/rFwguF.jpg)

## vue 项目更新到github
&emsp;&emsp;如果我们对项目进行了更改，那就需要把项目更新到github上~首先更新项目本身，然后重新build一下静态资源，最后把静态资源也更新到github
### 更新vue项目
在vue项目根目录下的`master`分支下：
* 查看当前仓库状态
  >终端输入：`git status`
* 拉取当前分支，将github上的代码当下来合并代码，防止与提交的新代码起冲突
  >终端输入：`git pull`
* 更新全部
  >终端输入：`git add *`
* 提交文件并输入更新说明
  >终端输入：`git commit -m "更新了一条数据"`
* push文件到远程仓库中
  >终端输入：`git push origin master`

刷新github仓库，切换到`master`分支，项目已经更新成功
![](https://s3.ax1x.com/2020/12/10/rFrPKK.jpg)


### 打包vue项目
  在vue项目根目录下的`gh-pages`分支下：
>终端输入：`npm run build`

### 更新可预览的vue项目
在vue项目根目录下的`gh-pages`分支下：
* 拉取当前分支
  >终端输入：`git pull`
* 将dist文件添加到暂存区，加`-f`强制提交
  >终端输入：`git add -f dist`
* 提交文件到github仓库
  >终端输入：`git commit -m "更新了一条数据"`
* push文件到仓库中
  >终端输入：`git push origin gh-pages`

刷新github仓库，切换到`ph-pages`分支，我们更新的内容已经上传成功了~
![](https://s3.ax1x.com/2020/12/10/rFBOfI.jpg)
我们刷新一下网址，更新的内容也显示在了[网页](http://wjwya.top/myprogram_vue_demo.github.io/dist/#/)中了~
![](https://s3.ax1x.com/2020/12/10/rFBv1P.jpg)
