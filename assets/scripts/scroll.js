jQuery(document).ready(function($){


  new fullpage('.maincontent',{
    anchors: ['main','about','comments','contacts'],
    // loopTop: true,
    loopBottom:true,
    
    navigationTooltips:['Главная','О нас','Отзывы','Контакты'],
    navigation:true,
    slidesNavigation:true,
    slidesNavPosition: 'bottom',
    // autoScrolling:true
  
    // continuousGorizontal: true,
    // afterRender: function () {
    //     setInterval(function () {
    //         $.fn.fullpage.moveSlideRight();
    //     }, 2000);
    // }
    // scrollOverflow:true

  });
  fullpage_api.moveSlideRight();


  $(".scroll").click(function() {
    let previousSection = $(".welcome__page");
});
});