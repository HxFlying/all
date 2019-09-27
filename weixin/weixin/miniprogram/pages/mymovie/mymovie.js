// pages/mymovie/mymovie.js
// 创建数据库对象
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moviename:"",//电影名字
    content :""  , //留言内容
    imagesList:[],//保存图片数组
    fileIds: [] //保存图片 id
     
  },
  jumpdetail:function(){
      // 跳转到喜欢电影列表
      // 查询云数据库MyFvaoriteMovie
      // 在当前data中添加属性 list
      // 在模板页面显示电影列表
      wx.navigateTo({
        url: "../movieDetail/movieDetail"
      })

  },
  loadMore: function () {
    // 创建成功调用云函数
    // 获取用户选中电影标题
    var moviename = this.data.moviename
    // 显示数据加载框
    wx.showLoading({
      title: '正在加载中...',
    })
    //调用云函数 findDetail  id
    wx.cloud.callFunction({
      name: "findDetail",
      data: { moviename: moviename }
    }).then(res => {
      //console.log(res);
      // 获取云函数返回函数
      var obj = JSON.parse(res.result);
      // 保存 detail:{}
      this.setData({
        detail: obj
      })
      // 隐藏加载提示框 
      wx.hideLoading();
    }).catch(err => {
      console.log(err)
    })

  },
  submit:function(){
    // 判断是否输入电影名称
    var Mname = this.data.moviename
    if (!Mname){
      return;
    }
    // 提交
    // 功能一 将选中图片上传云存储
    // 功能二 将用户信息fileid添加云数据库
    // 1：显示数据加载提示框
    wx.showLoading({
      title: '上传中...',
    })
    // 2：创建数组 （保存 promise对象）
    var rows = [];
// 3：创建循环遍历选中图片列表
    for (var i = 0; i < this.data.imagesList.length; i++) {
    // 4：创建promise对象完成上传
      rows.push(new Promise((resolve, reject) => {
    // 5：获取当前文件名
        var item = this.data.imagesList[i];
    // 6：创建后缀 .jpg  .gif  .png
        var suffix = /\.\w+$/.exec(item)[0]
  // 7:创建新文件名 时间+随机数+后缀
        var newFile = new Date().getTime();
        newFile += Math.floor(Math.random() * 9999);
        newFile += suffix;
        //console.log(newFile)
      
    // 8：上传图片
        wx.cloud.uploadFile({
          cloudPath: newFile,//新文件名
          filePath: item,//原文件名
          success: (res => {
      // 6.5 在data 属性添加数组 fileIds 文件id
            // 6.6 上传成功将 fileID
            var fid = res.fileID;
            this.data.fileIds.push(fid);
            // 6.7 上传成功执行解析
            resolve();
          })
        }) 
     }))
      
    } //push end
    //将数据保存用户喜欢电影图片，电影标题，喜欢的理由，保存到MyFavoriteMovie
    // 1.1等待所有promise执行完后 才执行
    Promise.all(rows).then(res => {
      // 2：获取用户标题内容
      var moviename = this.data.moviename;
      // 3：获取用户喜欢的理由
      var content = this.data.content;
      // // 4：当前电影id
      // var id = this.data.movieid;
      // 5:图片 fileIds
      var list = this.data.fileIds;
      // 6：添加集合 comment
      db.collection("MyFavoriteMovie").add({
        data: {
          moviename: moviename,
          why: content,
          fileIds: list
        }
      }).then(res => {
      // 7:添加成功 隐藏加载提示框
        wx.hideLoading();
        //  8：提示评论成功
        wx.showToast({
          title: '提交成功',
        })

      }).catch(err =>{
    })
  })
     } ,
  upLoad:function(){
    // 判断电影标题是否写
    var Mname = this.data.moviename;
    if(!Mname){
      return;
    }
    // 选择多张图片
    // 将图片显示在imagesList 区域
    // 1：在 data添加属性 images:[]
    // 2:显示数据加载提示框
    wx.showLoading({
      text:"加载中...",

    })
    // 3:选择多张图片
    wx.chooseImage({
      data:{
       count: 9, //9
       sizeType: ["original", "compressed"], // 5:图片类型
       sourceType: ["album", "camera"]// 4:图片来源
   },
      success:(res)=>{
        // 8：隐藏加载提示框
        wx.hideLoading();
         //选择成功
        var list = res.tempFilePaths;//临时路径 存起来
        //console.log(list)
        this.setData({  //保存到 imagesList
          imagesList: list
        })
      
      },
         
    })
  
  },
  onChangeContent:function(event){
    // 获取用户留言
    this.setData({
      content:event.detail
    })
   // console.log(event.detail)
  },
  onChangeMname: function (event){
    // 电影名称
    this.setData({
      moviename:event.detail
    })
    //console.log(event.detail)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})