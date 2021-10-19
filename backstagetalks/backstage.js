$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
  // Change 20% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 5);
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body 
      $body.removeClass();
       
      // Add class of currently active div
      $body.addClass($(this).attr("id"));

      // Make all links normal
      var allLinks = $('.menu-link')
      allLinks.css("font-weight", "normal")
      
      // Make current Link bolder
      if ($(this).attr("id") !== "issue5") {
        var currentLink = $('#link-' + $(this).attr("id"))
        currentLink.css("font-weight", "bold")
      }
    }
  });    
  
}).scroll();

new fullpage('#fullpage', {
  //options here
  autoScrolling:true,
  scrollHorizontally: true
});

//methods
fullpage_api.setAllowScrolling(false);