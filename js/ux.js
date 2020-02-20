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

$(".input-group-field").click(function(){
  $(this).css( "border-bottom-color", "#ff5722" );
  $(this).css( "border-bottom-width", "2px" );
  $(this).css( "border-bottom-style", "solid" );
});

// $(".resident-popover-close, .country-name, .dates-trigger, ").click(function(){
//   $(".input-group-field").css( "border-bottom-color", "#cacaca" );
//   $(".input-group-field").css( "border-bottom-width", "1px" );
//   $(".input-group-field").css( "border-bottom-style", "solid" );
// });



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

$( function() {

  maxDaysDuration = 731;  // Maximium number of days allowed to be selected (731)

  var dateFormat = "mm/dd/yy",


    from = $("#from")
      .datepicker({
        defaultDate: "+1d",
        numberOfMonths: 2,
        altField: "#uk-date-in",
        altFormat: "dd/mm/yy",
        minDate:  "0d",
        beforeShowDay: runthroughDays
      })
      .on( "change", function() {
        $(".date-out").css( "border-bottom-color", "#ff5722" );
        $(".date-out").css( "border-bottom-width", "2px" );
        $(".date-in").css( "border-color", "#cacaca" );
        $(".date-in").css( "border-bottom-width", "1px" );

        to.datepicker( "option", "minDate", getDate( this ) );
        chosenMinDate = getDate( this );
        allowedMaxDate = getDate( this );
        allowedMaxDate.setDate(allowedMaxDate.getDate() + maxDaysDuration -1);


        if ((document.getElementById('to').value) && ( Date.parse(getDate(document.getElementById('to'))) - Date.parse(getDate(this)) ) > (maxDaysDuration -1) * 86400000 ) {
          from.datepicker( "option", "maxDate", null );
          $('#OutMonth').text(OutMonthText);
          $('#OutDate').text('');
          $('#OutYear').text('');
          $("#to").datepicker("setDate", null);
        }

        to.datepicker( "option", "maxDate", allowedMaxDate );
        $('#InMonth').text($.datepicker.formatDate("MM",getDate(this)) ) ;
        $('#InDate').text($.datepicker.formatDate("d",getDate(this)) ) ;
        $('#InYear').text($.datepicker.formatDate("DD",getDate(this)) + ", " + $.datepicker.formatDate("yy",getDate(this))) ;

        timeoutID = window.setTimeout(function() {to.datepicker("show");}, 300);
      }),

    to = $( "#to" )
      .datepicker({
        defaultDate: "+1d",
        numberOfMonths: 2,
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
      .on( "change", function() {

        from.datepicker( "option", "maxDate", getDate( this ) );
        $('#OutMonth').text($.datepicker.formatDate("MM",getDate(this)) ) ;
        $('#OutDate').text($.datepicker.formatDate("d",getDate(this)) ) ;
        $('#OutYear').text($.datepicker.formatDate("DD",getDate(this)) + ", " + $.datepicker.formatDate("yy",getDate(this))) ;
      });


      function runthroughDays(date) {

        var fromDatems = Date.parse(to.datepicker( "option", "minDate"));
        var toDatems = Date.parse(from.datepicker( "option", "maxDate"));
        var datems = Date.parse(date);

        if (to.datepicker( "option", "minDate") && from.datepicker("option", "maxDate")) {

          if (datems >= fromDatems && datems <= toDatems) {
            if (datems == fromDatems) {
              return [false, 'day_from', ''];
            } else if (datems == toDatems) {
              return [true, 'day_to', ''];
            } else {
              return [true, 'day_hi', ''];
            }
          } else {
            return [true, 'day_selectable', ''];
          }
        } else if (to.datepicker( "option", "minDate") && to.datepicker("option", "maxDate") ) {
          if (datems == fromDatems) {
            return [false, 'day_from', ''];
          } else {
            return [true, 'day_selectable', ''];
          }
        } else {
          return [true, 'day_selectable', ''];
        }
      }


      function getDate( element ) {
        var date;
        try {
          date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
          date = null;
        }
        return date;
      }

// clear the start and end date when the page first loads
      $("#from").datepicker("setDate", null);
      $("#to").datepicker("setDate", null);

      var OutMonthText = $('#OutMonth').text();

    });


// Release 1 datepicker code
// $( document ).ready(function() {
//   $( "<p>Cover to start on</p>" ).insertBefore( ".ui-datepicker-group-first" );
// });
//
// $( document ).ready(function() {
//   $( "<p>Cover to end on</p>" ).insertBefore( ".ui-datepicker-group-last" );
// });

// var startDate="";
// var endDate="";
//
//
// $(".datepicker").datepicker({
//     minDate: 0,
//     numberOfMonths: 2,
//
//     onChangeMonthYear: function(year, month, datepicker) {
//       console.log("month changed");
//       $("<p>Cover to start on</p>").insertBefore(".ui-datepicker-group-first");
//     },
//
//     beforeShowDay: function(date) {
//          var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, startDate);
//          var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, endDate);
//          var isHightlight =
//             date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2));
//         if(isHightlight && date1.getTime()==date.getTime()){
//                return [true, "start-range"]
//         }
//         else if(isHightlight && date2.getTime()==date.getTime()){
//                return [true, "end-range"]
//         }
//         return [true, isHightlight ? "dp-highlight" : ""];
//     },
//     onSelect: function(dateText, inst) {
//
//           //var startEnd = startDate + endDate;
//
//
//
//         var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, startDate);
//         var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, endDate);
//         var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);
//
//         if (!date1 || date2) {
//             startDate=dateText;
//             endDate="";
//             FillTextBoxes();
//         } else if (selectedDate < date1) {
//            endDate=startDate;
//            startDate=dateText;
//  						FillTextBoxes();
//         } else {
//              endDate=dateText;
//               $("#enddate").val(endDate);
//               $(".dates-popover-menu").removeClass("showMenu");
//
//         }
//
//         $(this).datepicker();
//             $("#date").val("Date(s) set");
//     }
// });
// function FillTextBoxes(){
//             $("#startdate").val(startDate);
//             $("#enddate").val(endDate);
//
// }
//
// $("#startdate").datepicker().datepicker("setDate", new Date());
//
// $("#enddate").datepicker().datepicker("setDate", new Date());



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
