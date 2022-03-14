$('body').append('<div style="" id="loadingDiv"><div class="loader"></div></div>');
$(window).on('load', function(){
  removeLoader()
});
function removeLoader(){
    $( "#loadingDiv" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loadingDiv" ).remove(); //makes  page more lightweight 
  });  
}