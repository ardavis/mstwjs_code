function init() {
  var $toggle_links = $(".detail_toggle");
  $toggle_links.click(function() {
    $detail = $(this).siblings(".detail");
    $detail.toggleClass("hidden"); 
    $(this).text("Hide Details")   
  });
}

$(function() {    
  init();
})

