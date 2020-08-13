// Carousels
$("#owl-cover-usp").owlCarousel({
    nav: false,
    touchDrag: false,
    mouseDrag: false,
    smartSpeed:450,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true
        },
        600:{
            items:2,
            nav:false,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true
        },
        1000:{
            items:4,
            loop:false
        }
    }
});


$("#owl-cover-options").owlCarousel({
    nav: false,
    touchDrag: false,
    mouseDrag: true,
    smartSpeed:450,
    center: true,
    responsive:{
        0:{
          items:2,
          nav:false,
          loop:true,
          margin:10,
          autoplay:true,
          autoplayTimeout:4000,
          autoplayHoverPause:true
        },
        600:{
            items:2,
            nav:false,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true
        },
        1000:{
            items:4,
            loop:false
        }
    }
});


$("#owl-type-insurance").owlCarousel({
    nav: false,
    touchDrag: false,
    mouseDrag: true,
    smartSpeed:450,
    center: true,
    responsive:{
        0:{
          items:2,
          nav:false,
          loop:true,
          margin:10,
          autoplay:true,
          autoplayTimeout:4000,
          autoplayHoverPause:true
        },
        600:{
            items:2,
            nav:false,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true
        },
        1000:{
            items:4,
            loop:false
        }
    }
});



$("#owl-why-choose").owlCarousel({
    nav: false,
    touchDrag: false,
    mouseDrag: true,
    smartSpeed:450,
    center: true,
    responsive:{
        0:{
          items:2,
          nav:false,
          loop:true,
          margin:10,
          autoplay:true,
          autoplayTimeout:4000,
          autoplayHoverPause:true
        },
        600:{
            items:2,
            nav:false,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true
        },
        1000:{
            items:4,
            loop:false
        }
    }
});


// prevent default behaviour on clicking search inputs as popovers are being triggered instead

$( ".search input" ).click(function( event ) {
  $(this).trigger('blur');
});

$(".input-group-field").click(function(){
  $(this).css( "border-bottom-color", "#ff5722" );
  $(this).css( "border-bottom-width", "2px" );
  $(this).css( "border-bottom-style", "solid" );
});



$(document).mouseup(function(e)
{
    var container = $(".input-group");

    // if the target of the click isn't the container nor a descendant of thecontainer
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
      $('.input-group-field').css( "border-bottom-width", "1px" );
      $('.input-group-field').css( "border-bottom-color", "#cacaca" );
    }
});


// where do you normally live?

$(".resident-trigger").click(function(){

  window.scrollTo(0, 0);
  document.body.scrollTop = 0;


$(".resident-popover-menu").toggleClass("showMenu");

//hide other menus if open
$(".whotravelling-popover-menu").removeClass("showMenu");
$(".wherecover-popover-menu").removeClass("showMenu");
$(".dates-popover-menu").removeClass("showMenu");


  $(".country-name").click(function(){
      var country = $(this).find("span").text();
      $('.resident-trigger input').val(country);

    // $(".resident-trigger > p").html(jQuery(this).find("span").html());
      $(".resident-popover-menu").removeClass("showMenu");
  });
});

$(".resident-popover-close").click(function(){
      $(".resident-popover-menu").removeClass("showMenu");
});






// choose your dates of cover

$(".dates-trigger").click(function(){


  // var y = $(window).scrollTop(); //your current y position on the page
  // $("html, body").animate({ scrollTop: y + 45 }, 600); // scroll a down a little smoothly to propmt date input

  $(".dates-popover-menu").toggleClass("showMenu");

//hide other menus if open
  $(".resident-popover-menu").removeClass("showMenu");
  $(".wherecover-popover-menu").removeClass("showMenu");
  $(".whotravelling-popover-menu").removeClass("showMenu");

});

$(".dates-popover-close").click(function(){
  $(".dates-popover-menu").removeClass("showMenu");
});

//highlight start/end date when input fields clicked

$(".fromFieldTrigger").click(function(){
  $(".date-in").css( "border-bottom-color", "#ff5722" );
  $(".date-in").css( "border-bottom-width", "2px" );
  $(".date-out").css( "border-color", "#cacaca" );
  $(".date-out").css( "border-bottom-width", "1px" );
});

$(".toFieldTrigger").click(function(){
  $(".date-out").css( "border-bottom-color", "#ff5722" );
  $(".date-out").css( "border-bottom-width", "2px" );
  $(".date-in").css( "border-color", "#cacaca" );
  $(".date-in").css( "border-bottom-width", "1px" );
});

// marcus' datepicker code

$(function() {
  var maxDaysDuration = 731;  // Maximum number of days allowed to be selected (731)
  var maxDaysAheadStart = 731;  // Maximum number of days ahead of today that the start date can be
  var modalBreakPoint = 1023;  // Width of window (in pixels) below which the mobile version is displayed

  var chosenStartDate = "";
  var chosenEndDate = "";
  var maxDurationDate = "";  // Last selectable date after chosen start date
  var hover_style = "";
  var narrowDisplay = false;
  var calMonthsToDisplay = 2;
  $(document).foundation();

  if ($(document).width() < modalBreakPoint) {
    narrowDisplay = true;
    calMonthsToDisplay = 1;
  }

  var dateFormat = "mm/dd/yy",


    from = $("#from")
      .datepicker({
        //defaultDate: "+1d",
        // changeMonth: true,
        // changeYear: true,
        numberOfMonths: calMonthsToDisplay,
        altField: "#uk-date-in",
        altFormat: "dd/mm/yy",
        minDate:  "0d",
        maxDate:  maxDaysAheadStart+"d",
        beforeShowDay: runthroughDays,
      })
      .on("change", function() {

        $(".date-out").css( "border-bottom-color", "#ff5722" );
        $(".date-out").css( "border-bottom-width", "2px" );
        $(".date-in").css( "border-color", "#cacaca" );
        $(".date-in").css( "border-bottom-width", "1px" );

        to.datepicker("option", "minDate", getDate(this));
        chosenStartDate = getDate(this);
        maxDurationDate = getDate(this);
        maxDurationDate.setDate(maxDurationDate.getDate() + maxDaysDuration -1);
        hover_style = 'day_rw_to_hover';
        // $('#pop_Modal label#pop_from_label div').css('color','#999');
        // $('#pop_Modal label#pop_to_label div').css('color','#0a0a0a');


// check revised start date
        if ((document.getElementById('to').value) && ((Date.parse(getDate(document.getElementById('to'))) - Date.parse(getDate(this)) ) > (maxDaysDuration -1) * 86400000) || (Date.parse(getDate(document.getElementById('to'))) <= Date.parse(getDate(this))) ) {
          chosenEndDate = "";
          $('#OutMonth').text(OutMonthText);
          $('#OutDate').text('');
          $('#OutYear').text('');
          $('#pop_OutDateMonth').text('-');
          $('#pop_OutYear').text('');
          $("#to").datepicker("setDate", null);
        }

// display the end datepicker
        to.datepicker("option", "maxDate", maxDurationDate);
        $('#InMonth').text($.datepicker.formatDate("MM",getDate(this))) ;
        $('#InDate').text($.datepicker.formatDate("d",getDate(this))) ;
        $('#InYear').text($.datepicker.formatDate("DD, yy",getDate(this))) ;
        $('#pop_InMonth').text($.datepicker.formatDate("MM",getDate(this))) ;
        $('#pop_InDateMonth').text($.datepicker.formatDate("d",getDate(this))) ;
        $('#pop_InYear').text($.datepicker.formatDate("DD, yy",getDate(this)) ) ;
        timeoutID = window.setTimeout(function() {to.datepicker("show");}, 300);
      }),


    to = $("#to")
      .datepicker({
        defaultDate: "+1d",
        // changeMonth: true,
        // changeYear: true,
        numberOfMonths: calMonthsToDisplay,
        altField: "#uk-date-out",
        altFormat: "dd/mm/yy",
        beforeShowDay: runthroughDays,
        onClose: function() {
          $(".date-out").css( "border-color", "#cacaca" );
          $(".date-in").css( "border-color", "#cacaca" );
          $(".date-out").css( "border-bottom-width", "1px" );
          $(".date-in").css( "border-bottom-width", "1px" );
        }
      })
      .on("change", function() {
        chosenEndDate = getDate(this);
        $('#OutMonth').text($.datepicker.formatDate("MM",getDate(this))) ;
        $('#OutDate').text($.datepicker.formatDate("d",getDate(this))) ;
        $('#OutYear').text($.datepicker.formatDate("DD, yy",getDate(this))) ;
        $('#pop_OutMonth').text($.datepicker.formatDate("MM",getDate(this))) ;
        $('#pop_OutDateMonth').text($.datepicker.formatDate("d",getDate(this))) ;
        $('#pop_OutYear').text($.datepicker.formatDate("DD, yy",getDate(this))) ;
        if (narrowDisplay) {
          timeoutID = window.setTimeout(function() {to.datepicker("show");}, 300);
        }
      });


      function runthroughDays(date) {

        var runningDatems = Date.parse(date);
        var chosenStartDatems = Date.parse(chosenStartDate);
        var chosenEndDatems = Date.parse(chosenEndDate);

        if ((chosenStartDate != "") && (chosenEndDate != "")) {
          if ((runningDatems >= chosenStartDatems) && (runningDatems <= chosenEndDatems)) {
            if (runningDatems == chosenStartDatems) {
              return [false, 'day_rw_from', ''];
            } else if (runningDatems == chosenEndDatems) {
              return [true, 'day_rw_to', ''];
            } else {
              return [true, 'day_rw_hi', ''];
            }
          } else {
            return [true, 'day_rw_selectable', ''];
          }
        } else if ((chosenStartDate != "")) {  // if only start date has been chosen
          if (runningDatems == chosenStartDatems) {
            return [false, 'day_rw_from', ''];
          } else {
            return [true, 'day_rw_selectable', ''];
          }
        } else {
          return [true, 'day_rw_selectable', ''];
        }
      }


      function getDate(element) {
        var date;
        try {
          date = $.datepicker.parseDate(dateFormat, element.value);
        } catch(error) {
          date = null;
        }
        return date;
      }

// clear the start and end date when the page first loads
      $("#from").datepicker("setDate", null);
      $("#to").datepicker("setDate", null);

      var OutMonthText = $('#OutMonth').text();


      $('#from').on("click", function() {
        hover_style = 'day_rw_from_hover';
        if ($(document).width() < modalBreakPoint) {
          // $('#pop_Modal label#pop_from_label div').css('color','#0a0a0a');
          // $('#pop_Modal label#pop_to_label div').css('color','#999');
          $('#pop_Modal').append($('#ui-datepicker-div'));
          $('#pop_Modal').foundation('open');
        } else {
          $('body').append($('#ui-datepicker-div'));
        }
      });

      $('#to').on("click", function() {
        if (document.getElementById('from').value == "") {
          $('#ui-datepicker-div').css("display","none");
          // $('#pop_Modal label#pop_to_label div').css('color','#999');
        } else {
          hover_style = 'day_rw_to_hover';
          if ($(document).width() < modalBreakPoint) {
            // $('#pop_Modal label#pop_from_label div').css('color','#999');
            // $('#pop_Modal label#pop_to_label div').css('color','#0a0a0a');
            $('#pop_Modal').append($('#ui-datepicker-div'));
            $('#pop_Modal').foundation('open');
          } else {
            $('body').append($('#ui-datepicker-div'));
          }
        }
      });


      $(document).on("mouseenter", "td a", function() {
        $(this).addClass(hover_style);
        if (!narrowDisplay) {
          if (hover_style == 'day_rw_to_hover') {
            daysRw = $(this).closest('#ui-datepicker-div').find("td[class*='day_rw_']");
            for (a=0; a<daysRw.length; a++) {
              daysRw.eq(a).children('a').eq(0).addClass(hover_style);
              if (daysRw.eq(a).children('a').eq(0).hasClass('ui-state-hover')) {
                break;
              }
            }
          }
        }
      }).on("mouseleave", "td a", function() {
        daysRw = $(this).closest('#ui-datepicker-div').find("td[class*='day_rw_']");
        daysRw.children('a').removeClass(hover_style);
      });


      $(window).resize(function() {
        $('#pop_Modal').foundation('close');
        $('#ui-datepicker-div').css("display","none");
        timeoutID = window.setTimeout(function() {$('#ui-datepicker-div').css("display","none");}, 300);
        if ($(document).width() < modalBreakPoint) {
          narrowDisplay = true;
          from.datepicker("option", "numberOfMonths", 1);
          to.datepicker("option", "numberOfMonths", 1);
        } else {
          narrowDisplay = false;
          from.datepicker("option", "numberOfMonths", 2);
          to.datepicker("option", "numberOfMonths", 2);
        }
      });

    });




// who is travelling?



var howmany = $( ".howmanytravellers" ).spinner({
  min: 1,
  max: 10
});

$( ".spinnerup" ).on( "click", function() {
  howmany.spinner( "stepUp", 1 );
});

$( ".spinnerdown" ).on( "click", function() {
  howmany.spinner( "stepDown", 1 );
});

$(".whotravelling-trigger").click(function(){

  window.scrollTo(0, 0);
  document.body.scrollTop = 0;

  $(".whotravelling-popover-menu").toggleClass("showMenu");

//hide other menus if open

  $(".resident-popover-menu").removeClass("showMenu");
  $(".wherecover-popover-menu").removeClass("showMenu");
  $(".dates-popover-menu").removeClass("showMenu");

});

$(".whotravelling-popover-close").click(function(){
  $(".whotravelling-popover-menu").removeClass("showMenu");
});

$(".whotravelling-popover-menu .button-done").click(function(){
  $(".whotravelling-popover-menu").removeClass("showMenu");
});

$('.whotravelling-popover-menu').on('input', function() {

    $(".whotravelling-trigger input").val("Age info set");

});


var wherecover = $( ".howmanytravellers" ).spinner({
  min: 1,
  max: 6,
  change: function(event,ui) {
    //var value = wherecover.spinner( "value" );
  }
});


$(".spinnerup").click(function(){
  var value = wherecover.spinner( "value" );
  $( ".traveller-"+value ).show();
});

$(".spinnerdown").click(function(){
  var value = wherecover.spinner( "value" );
  var valueoffset = value + 1;
    $( ".traveller-"+valueoffset ).hide();

});

//where do you need cover?

$( "#radio-1, #radio-2, #radio-3, #radio-4" ).checkboxradio();


$(".wherecover-trigger").click(function(){

  window.scrollTo(0, 0);
  document.body.scrollTop = 0;

  $(".wherecover-popover-menu").toggleClass("showMenu");

//hide other menus if open
  $(".resident-popover-menu").removeClass("showMenu");
  $(".whotravelling-popover-menu").removeClass("showMenu");
  $(".dates-popover-menu").removeClass("showMenu");


});

//populate field with selection

$("label[for='radio-1']").click(function(){
  $(".wherecover-trigger input").val("Europe");
});

$("label[for='radio-2']").click(function(){

  $(".wherecover-trigger input").val("Australia & NZ");
});

$("label[for='radio-3']").click(function(){
  $(".wherecover-trigger input").val("Worldwide ex US/CAD");
});

$("label[for='radio-4']").click(function(){
  $(".wherecover-trigger input").val("Worldwide");
});


$(".wherecover-popover-menu label").click(function(){
  $(".wherecover-popover-menu").removeClass("showMenu");
});


$(".wherecover-popover-close").click(function(){
  $(".wherecover-popover-menu").removeClass("showMenu");
});



// Calendar
// $( function() {
//   $( "#datepicker" ).datepicker({
//     numberOfMonths: 2,
//     showButtonPanel: true
//   });
// } );

// Activity selection

jQuery("input:checkbox").change(function () {
    jQuery(this).closest(".extra-option-box").toggleClass('selected', this.checked);
});
