$(function(){
  //判断浏览设备函数
  function browserRedirect() {
   var sUserAgent = navigator.userAgent.toLowerCase();
   var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
   var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
   var bIsMidp = sUserAgent.match(/midp/i) == "midp";
   var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
   var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
   var bIsAndroid = sUserAgent.match(/android/i) == "android";
   var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
   var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
   if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
       return false;
   } else {
       return true;
   }
  }
  //插件配置
  var isPc=browserRedirect();
  var en = ['Home', 'Projects', 'Professions', 'Experiences',
                  'Hobbies', 'Contact'];
  var cn = ['首页', '项目', '技能', '工作', '爱好', '联系'];
  var pcBgColor = ['#7080b9', '#1bbc9b', '#7080b9', '#1bbc9b','#7080b9','#1bbc9b'];
  var mBgColor = ['#7080b9','#7080b9','#7080b9','#7080b9','#7080b9','#7080b9',];
  var isEn = window.location.href.indexOf('en.html') >= 0;
  $('#pagePilling').fullpage({
      sectionsColor: isPc?pcBgColor:mBgColor,
      navigation: true,
      navigationTooltips: isEn?en:cn,
      resize: true,
      continuousVertical: true,

  });

  //根据浏览窗口大小决定是否使用滚动条
  $(window).resize(function(){
        autoScrolling();
  });

  function autoScrolling(){
      var $ww = $(window).width();
      if($ww < 1024){
          $.fn.fullpage.setAutoScrolling(false);
          $('#fp-nav').css('display','none');
      } else {
          $.fn.fullpage.setAutoScrolling(true);
      }
  }
  autoScrolling();


  //section1项目图片向上滚动
  $('.item li').eq(1).hover(function() {
    $(this).find('img').animate({top:'-720px'}, 3000);
  }, function() {
    $(this).find('img').stop().css('top',0);
  });

});

