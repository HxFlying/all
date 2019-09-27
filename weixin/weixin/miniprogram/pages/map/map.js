// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 折线线段
    polyline:[{
      points:[//坐标点
      {
          longitude:"116.300901",
          latitude:"39.916085"
      },
        {
          longitude:"117.30794",
          latitude:"31.79322"
        }
      ],
      color:"#f00",
      width:3
    }],
      // 地图上显示的控件
      controls:[
        {
        id:0,//控件 id 数据
        iconPath:"/images/blue.png",
        position:{
          left:250,
          top:220,
          width:15,
          height:15
        }     
      }
    ]
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