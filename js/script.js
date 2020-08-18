const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


$('.skills-toggle-1').click(function(){
  $('#mask-1, .skillname1, .Quis1, #mask-01, #cross-1, .skills-toggle-1, .keyskills1').slideToggle();
});

$('.skills-toggle-2').click(function(){
  $('#mask-2, .skillname2, .Quis2, #mask-02, #cross-2, .skills-toggle-2, .keyskills2').slideToggle();
});

$('.skills-toggle-3').click(function(){
  $('#mask-3, .skillname3, .Quis3, #mask-03, #cross-3, .skills-toggle-3, #challanges-heading, .keyskills3').slideToggle();
});

// $('.mission-toggle').click(function(){
//   var x = document.getElementById("mission-toggle-id");
//   if (x.style.position==="relative"){
//   x.style.position="static";
//   } else if (x.style.position==="static") {
//     x.style.position="relative";
//   }
// });

$('.mission-toggle').click(function(){
  $('.rotated-text, .mission-image, .mission-text, .mission-toggle, .mission-heading').slideUp();
});

/*function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}*/

$('.challenges-toggle').click(function(){
  $('#challenges-cross, #challenges-hidden-id, .mission-text, .mission-toggle, .mission-heading').slideToggle();
});

$('.socialm-sharing-toggle').click(function(){
  $('#socialm-sharing-cross, .sharing-hidden, .results-sharingonline').slideToggle();
});

// Carousel //

  var totalItems = $('.item').length;
            var currentIndex = $('div.item.active').index() + 1;

            var down_index;
            $('.num').html('0'+currentIndex);
            $('.tnum').html('0'+totalItems);

                $(".next").click(function(){
                currentIndex_active = $('div.item.active').index() + 2;
                if (totalItems >= currentIndex_active)
                {
                    down_index= $('div.item.active').index() + 2;
                    $('.num').html('0'+currentIndex_active);
                    $('.tnum').html('0'+totalItems);
                }
            });

                $(".prev").click(function(){
                    down_index=down_index-1;
                if (down_index >= 1 )
                {
                    // $('.num').html(''+down_index+'/'+totalItems+'');
                    $('.num').html('0'+down_index);
                    $('.tnum').html('0'+totalItems);
                }
            });