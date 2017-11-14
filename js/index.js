var map;

function initialize() {
  var myLatlng = new google.maps.LatLng(25.122217,121.85932);
  var mapOptions = {
    zoom: 16,
    center: myLatlng
  };
  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
  
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Compacc Complete Accountancy'
  });
  
}

google.maps.event.addDomListener(window, 'load', initialize);

$(window).scroll(function(evt){
  if ($(window).scrollTop()>0)
    $("nav").removeClass("navbar-top");
  else{
    $("nav").addClass("navbar-top");
  }
  
  // if ($(window).scrollTop()>500){
  //   $(".bgvideo").css("filter", "blur(5px)"); 
  // }
  
  //blur(".bgvideo");
  if ($(window).scrollTop()>$("#section_ask").offset().top)
    $(".ToTopBtn").removeClass("opacity0");
  else{
    $(".ToTopBtn").addClass("opacity0");
  }
  
  
  if ($(window).scrollTop()>300)
    $(".bgimg2").removeClass("opacity0");
  else{
    $(".bgimg2").addClass("opacity0");
  }
});

// function blur(obj){
//   var scroll_num = $(window).scrollTop();
//   if(scroll_num > 500){
//     $(obj).css("filter", "blur(5px)");  
//   }else{
//     $(obj).css("filter", "blur("+ scroll_num/100 +"px)");  
//   }
  
//   //console.log(scroll_num/100)
// }

var s = skrollr.init();

$(".ToTop").on('click', function() {
  $("HTML, BODY").animate({scrollTop: 0}, 500);
});


//$($(this).attr("pos")).offset().top

$("#myNavbar ul a").click(function(){
  if($(this).attr("pos") == "#section_location"){
    $("HTML, BODY").animate({scrollTop: $($(this).attr("pos")).offset().top-50}, 500);  
  }else{
    $("HTML, BODY").animate({scrollTop: $($(this).attr("pos")).offset().top}, 500);
  }//$(this).attr("pos")
});