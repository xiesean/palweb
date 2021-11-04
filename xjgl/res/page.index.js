$(function() {
  function isMobile(){
    if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      return true
    }
    return false
  }

   $("#j-zhangkai_types2").on('click', function () {
     $("#j-types").toggleClass('_open')
     if(!$("#j-types").hasClass('_open')){
       $(this).html('展开<i class="icon iconfont icon_arrow-d"></i>')
     } else {
       $(this).html('收起<i class="icon iconfont icon_arrow-d"></i>')
     }
     
   })

    $("#j-zhangkai_types").on('click', function () {
      $("#j-types").toggleClass('_open')
    })

    $(".ui-tabs").on('click',function(event){
      var $target = $(event.target || document.srcElement)
      var targetTag = $target.data('target')
      var tagetArea = targetTag.indexOf('_') > -1 ? targetTag.split('_')[0] : '';

      $target.siblings().removeClass('_active');
      $target.addClass('_active');

      ['01', '02', '03', '04', '05'].forEach(function(value,index){
        if (`${tagetArea}_${value}` !== targetTag){
          $(`#j-${tagetArea}_${value}`).hide();
        }else{
          $(`#j-${tagetArea}_${value}`).show();
        }
      })

    })

    $(".ui-start").each(function(){
      var $target = $(this);
      var score = $target.data('score')
      $target.html('');
      $target.raty({
        score: score,
        path:'http://www.dianwannan.com/dist/assets/images'
      })
    })

    if(isMobile()){
      $('.ui-btn-more').on('click',function(){
        $(this).parent().removeClass('__loadmore')
        $(this).remove()
      })
    }else{
      var articleBox = $("#j-articlebox")
      if(articleBox.length>0){
        articleBox.viewer({
          url: 'src',
        })
      }
    }

})
