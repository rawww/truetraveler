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
            autoplayTimeout:1000,
            autoplayHoverPause:true
        },
        600:{
            items:2,
            nav:false,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:1000,
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

  window.scrollTo(0, 0);
  document.body.scrollTop = 0;

  $(".dates-popover-menu").toggleClass("showMenu");

//hide other menus if open
  $(".resident-popover-menu").removeClass("showMenu");
  $(".wherecover-popover-menu").removeClass("showMenu");
  $(".whotravelling-popover-menu").removeClass("showMenu");

});

$(".dates-popover-close").click(function(){
  $(".dates-popover-menu").removeClass("showMenu");
});



// $( document ).ready(function() {
//   $( "<p>Cover to start on</p>" ).insertBefore( ".ui-datepicker-group-first" );
// });
//
// $( document ).ready(function() {
//   $( "<p>Cover to end on</p>" ).insertBefore( ".ui-datepicker-group-last" );
// });

var startDate="";
var endDate="";


$(".datepicker").datepicker({
    minDate: 0,
    numberOfMonths: 2,

    onChangeMonthYear: function(year, month, datepicker) {
      console.log("month changed");
      $("<p>Cover to start on</p>").insertBefore(".ui-datepicker-group-first");
    },

    beforeShowDay: function(date) {
         var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, startDate);
         var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, endDate);
         var isHightlight =
            date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2));
        if(isHightlight && date1.getTime()==date.getTime()){
               return [true, "start-range"]
        }
        else if(isHightlight && date2.getTime()==date.getTime()){
               return [true, "end-range"]
        }
        return [true, isHightlight ? "dp-highlight" : ""];
    },
    onSelect: function(dateText, inst) {

          //var startEnd = startDate + endDate;



        var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, startDate);
        var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, endDate);
        var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);

        if (!date1 || date2) {
            startDate=dateText;
            endDate="";
            FillTextBoxes();
        } else if (selectedDate < date1) {
           endDate=startDate;
           startDate=dateText;
 						FillTextBoxes();
        } else {
             endDate=dateText;
              $("#enddate").val(endDate);
              $(".dates-popover-menu").removeClass("showMenu");

        }

        $(this).datepicker();
            $("#date").val("Date(s) set");
    }
});
function FillTextBoxes(){
            $("#startdate").val(startDate);
            $("#enddate").val(endDate);

}

$("#startdate").datepicker().datepicker("setDate", new Date());

$("#enddate").datepicker().datepicker("setDate", new Date());



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
$( function() {
  $( "#datepicker" ).datepicker({
    numberOfMonths: 2,
    showButtonPanel: true
  });
} );

// Activity selection

jQuery("input:checkbox").change(function () {
    jQuery(this).closest(".extra-option-box").toggleClass('selected', this.checked);
});
