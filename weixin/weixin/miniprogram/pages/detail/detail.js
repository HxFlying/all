// pages/detail/detail.js
// 创建数据库对象
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1:"",  //保留用户评论信息
    score:0,    //用户评分
    movieid:25779217,  //电影id
    detail:{},//当前电影信息
    images:[] , //存放图片数组
    fileIds: [] //保存图片 id
  },
  submit:function(){
    // 0：判断用户没有选中图片
    if(this.data.images.length==0){
      // 1:提示选择图片
      wx.showToast({
        title: '请选择图片',
      })
      // 2：停止函数执行
      return;
    }
    // (1):获取用户信息
    // (2):上传多张图片
    // (3)：将用户评论信息 fileID保存云数据库
    // 1：在云数据库中创建集合 commit
    // 2：在data添加属性 fileIDS:[]  上传文件id
    // 3:显示数据加载提示框
    wx.showLoading({
      title: '评论正在发表中...',
    })
    // 4：创建数组 rows 用来保存 promise 对象
    var rows = [];
    // 5：创建循环遍历每张选中图片
    for(var i=0;i<this.data.images.length;i++){
    // 6：为每张图片创建 promise 对象完成上传一张图片
    rows.push(new Promise((resolve,reject)=>{
      // 6.1 当前图片名称
      var item = this.data.images[i];
      //  console.log(picname)
      // 6.2 获取后缀（拆分/搜索/正则）
      var suffix= /\.\w+$/.exec(item)[0]
      // 6.3 创建新文件名 时间+随机数
      var newFile = new Date().getTime();
      newFile += Math.floor(Math.random()*9999);
      newFile+=suffix;
      console.log(newFile)
      // 6.4 上传一张图片
      wx.cloud.uploadFile({
        cloudPath:newFile,//新文件名
        filePath:item,//原文件名
        success:(res=>{
       
      // 6.5 在data 属性添加数组 fileIds 文件id
      // 6.6 上传成功将 fileID
      var fid = res.fileID;
      this.data.fileIds.push(fid);
      // 6.7 上传成功执行解析
      resolve();
        })
    })
      }));//push end
    } //for end 
    // 功能三：将用户评论信息与图片 fileID保存云数据库
    // 1：创建数据库对象
    // 1.1等待所有promise执行完后 才执行
    Promise.all(rows).then(res=>{
    // 2：获取用户评论内容
    var content = this.data.value1;
    // 3：获取用户评分
    var score = this.data.score;
    // 4：当前电影id
    var id = this.data.movieid;
    // 5:图片 fileIds
    var list = this.data.fileIds;
    // 6：添加集合 comment
    db.collection("comment").add({
         data:{
           content:content,
           score:score,
           movieid:id,
          fileIds:list
          }
       }).then(res=>{
       // 7:添加成功 隐藏加载提示框
         wx.hideLoading();
        //  8：提示评论成功
         wx.showToast({
           title: '发表成功',
         })

       }).catch(err=>{

       })
    
   
    })
  },
  uploadFile:function(){
    // 选中图片并且实现图片预览
       // 在data声明属性images 保存预览图片
    // 选中最多9张图
    // 图片类型 原图 压缩图
    // 图片来源 相册 相机
    // 选中成功
    wx.chooseImage({
      count:9, //9
      sizeType:["original","compressed"],
      sourceType:["album","camera"],
      success:(res)=>{
    // 获取选中图片路径
    // 保存data中images属性
    // 在模板中显示选中图片列表
    var list = res.tempFilePaths;//临时路径
    //console.log(list)
    this.setData({
      images:list
    })
  },
   })
  }
   ,
  onChangeScore:function(event){
    // 获取用户当前用户评分
    //console.log(event.detail)
    this.setData({
      score:event.detail
    })
  }
  ,
  onContentChange:function(event){
    // 用户输入文本框会触发事件
    // console.log(event.detail)
    this.setData({
      value1:event.detail
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       this.setData({
         movieid:options.id
         
      });
   
       this.loadMore();
  },
  loadMore:function(){
    // 创建成功调用云函数
    // 获取用户选中id
    var id = this.data.movieid;
   // console.log(id);
    // 显示数据加载框
    wx.showLoading({
      title: '正在加载中...',
    })
    //调用云函数 findDetail  id
    wx.cloud.callFunction({
      name:"findDetail",
      data:{id:id}
    }).then(res=>{
      //console.log(res);
      // 获取云函数返回函数
      var obj = JSON.parse(res.result);
    // 保存 detail:{}
    this.setData({
      detail:obj
    })
    // 隐藏加载提示框 
    wx.hideLoading();
    }).catch(err=>{
      console.log(err)
    })
    
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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