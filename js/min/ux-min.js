$("#owl-cover-usp").owlCarousel({nav:!1,touchDrag:!1,mouseDrag:!1,smartSpeed:450,responsive:{0:{items:1,nav:!1,loop:!0,margin:10,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0},600:{items:2,nav:!1,loop:!0,margin:10,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0},1e3:{items:4,loop:!1}}}),$("#owl-cover-options").owlCarousel({nav:!1,touchDrag:!1,mouseDrag:!0,smartSpeed:450,center:!0,responsive:{0:{items:2,nav:!1,loop:!0,margin:10,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0},600:{items:2,nav:!1,loop:!0,margin:10,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0},1e3:{items:4,loop:!1}}}),$("#owl-type-insurance").owlCarousel({nav:!1,touchDrag:!1,mouseDrag:!0,smartSpeed:450,center:!0,responsive:{0:{items:2,nav:!1,loop:!0,margin:10,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0},600:{items:2,nav:!1,loop:!0,margin:10,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0},1e3:{items:4,loop:!1}}}),$("#owl-why-choose").owlCarousel({nav:!1,touchDrag:!1,mouseDrag:!0,smartSpeed:450,center:!0,responsive:{0:{items:2,nav:!1,loop:!0,margin:10,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0},600:{items:2,nav:!1,loop:!0,margin:10,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0},1e3:{items:4,loop:!1}}}),$(".search input").click((function(e){$(this).trigger("blur")})),$(".input-group-field").click((function(){$(this).css("border-bottom-color","#ff5722"),$(this).css("border-bottom-width","2px"),$(this).css("border-bottom-style","solid")})),$(document).mouseup((function(e){var o=$(".input-group");o.is(e.target)||0!==o.has(e.target).length||($(".input-group-field").css("border-bottom-width","1px"),$(".input-group-field").css("border-bottom-color","#cacaca"))})),$(".resident-trigger").click((function(){window.scrollTo(0,0),document.body.scrollTop=0,$(".resident-popover-menu").toggleClass("showMenu"),$(".whotravelling-popover-menu").removeClass("showMenu"),$(".wherecover-popover-menu").removeClass("showMenu"),$(".dates-popover-menu").removeClass("showMenu"),$(".country-name").click((function(){var e=$(this).find("span").text();$(".resident-trigger input").val(e),$(".resident-popover-menu").removeClass("showMenu")}))})),$(".resident-popover-close").click((function(){$(".resident-popover-menu").removeClass("showMenu")})),$(".dates-trigger").click((function(){$(".dates-popover-menu").toggleClass("showMenu"),$(".resident-popover-menu").removeClass("showMenu"),$(".wherecover-popover-menu").removeClass("showMenu"),$(".whotravelling-popover-menu").removeClass("showMenu")})),$(".dates-popover-close").click((function(){$(".dates-popover-menu").removeClass("showMenu")})),$(".fromFieldTrigger").click((function(){$(".date-in").css("border-bottom-color","#ff5722"),$(".date-in").css("border-bottom-width","2px"),$(".date-out").css("border-color","#cacaca"),$(".date-out").css("border-bottom-width","1px")})),$(".toFieldTrigger").click((function(){$(".date-out").css("border-bottom-color","#ff5722"),$(".date-out").css("border-bottom-width","2px"),$(".date-in").css("border-color","#cacaca"),$(".date-in").css("border-bottom-width","1px")})),$((function(){var e="",o="",t="",r="",n=!1,i=2;$(document).foundation(),$(document).width()<1023&&(n=!0,i=1);var s=$("#from").datepicker({numberOfMonths:i,altField:"#uk-date-in",altFormat:"dd/mm/yy",minDate:"0d",maxDate:"731d",beforeShowDay:u}).on("change",(function(){$(".date-out").css("border-bottom-color","#ff5722"),$(".date-out").css("border-bottom-width","2px"),$(".date-in").css("border-color","#cacaca"),$(".date-in").css("border-bottom-width","1px"),c.datepicker("option","minDate",p(this)),e=p(this),(t=p(this)).setDate(t.getDate()+731-1),r="day_rw_to_hover",(document.getElementById("to").value&&Date.parse(p(document.getElementById("to")))-Date.parse(p(this))>63072e6||Date.parse(p(document.getElementById("to")))<=Date.parse(p(this)))&&(o="",$("#OutMonth").text(l),$("#OutDate").text(""),$("#OutYear").text(""),$("#pop_OutDateMonth").text("-"),$("#pop_OutYear").text(""),$("#to").datepicker("setDate",null)),c.datepicker("option","maxDate",t),$("#InMonth").text($.datepicker.formatDate("MM",p(this))),$("#InDate").text($.datepicker.formatDate("d",p(this))),$("#InYear").text($.datepicker.formatDate("DD, yy",p(this))),$("#pop_InMonth").text($.datepicker.formatDate("MM",p(this))),$("#pop_InDateMonth").text($.datepicker.formatDate("d",p(this))),$("#pop_InYear").text($.datepicker.formatDate("DD, yy",p(this))),timeoutID=window.setTimeout((function(){c.datepicker("show")}),300)})),c=$("#to").datepicker({defaultDate:"+1d",numberOfMonths:i,altField:"#uk-date-out",altFormat:"dd/mm/yy",beforeShowDay:u,onClose:function(){$(".date-out").css("border-color","#cacaca"),$(".date-in").css("border-color","#cacaca"),$(".date-out").css("border-bottom-width","1px"),$(".date-in").css("border-bottom-width","1px")}}).on("change",(function(){o=p(this),$("#OutMonth").text($.datepicker.formatDate("MM",p(this))),$("#OutDate").text($.datepicker.formatDate("d",p(this))),$("#OutYear").text($.datepicker.formatDate("DD, yy",p(this))),$("#pop_OutMonth").text($.datepicker.formatDate("MM",p(this))),$("#pop_OutDateMonth").text($.datepicker.formatDate("d",p(this))),$("#pop_OutYear").text($.datepicker.formatDate("DD, yy",p(this))),n&&(timeoutID=window.setTimeout((function(){c.datepicker("show")}),300))}));function u(t){var a=Date.parse(t),r=Date.parse(e),n=Date.parse(o);return""!=e&&""!=o?a>=r&&a<=n?a==r?[!1,"day_rw_from",""]:a==n?[!0,"day_rw_to",""]:[!0,"day_rw_hi",""]:[!0,"day_rw_selectable",""]:""!=e&&a==r?[!1,"day_rw_from",""]:[!0,"day_rw_selectable",""]}function p(e){var o;try{o=$.datepicker.parseDate("mm/dd/yy",e.value)}catch(e){o=null}return o}$("#from").datepicker("setDate",null),$("#to").datepicker("setDate",null);var l=$("#OutMonth").text();$("#from").on("click",(function(){r="day_rw_from_hover",$(document).width()<1023?($("#pop_Modal").append($("#ui-datepicker-div")),$("#pop_Modal").foundation("open")):$("body").append($("#ui-datepicker-div"))})),$("#to").on("click",(function(){""==document.getElementById("from").value?$("#ui-datepicker-div").css("display","none"):(r="day_rw_to_hover",$(document).width()<1023?($("#pop_Modal").append($("#ui-datepicker-div")),$("#pop_Modal").foundation("open")):$("body").append($("#ui-datepicker-div")))})),$(document).on("mouseenter","td a",(function(){if($(this).addClass(r),!n&&"day_rw_to_hover"==r)for(daysRw=$(this).closest("#ui-datepicker-div").find("td[class*='day_rw_']"),a=0;a<daysRw.length&&(daysRw.eq(a).children("a").eq(0).addClass(r),!daysRw.eq(a).children("a").eq(0).hasClass("ui-state-hover"));a++);})).on("mouseleave","td a",(function(){daysRw=$(this).closest("#ui-datepicker-div").find("td[class*='day_rw_']"),daysRw.children("a").removeClass(r)})),$(window).resize((function(){$("#pop_Modal").foundation("close"),$("#ui-datepicker-div").css("display","none"),timeoutID=window.setTimeout((function(){$("#ui-datepicker-div").css("display","none")}),300),$(document).width()<1023?(n=!0,s.datepicker("option","numberOfMonths",1),c.datepicker("option","numberOfMonths",1)):(n=!1,s.datepicker("option","numberOfMonths",2),c.datepicker("option","numberOfMonths",2))}))}));var howmany=$(".howmanytravellers").spinner({min:1,max:10});$(".spinnerup").on("click",(function(){howmany.spinner("stepUp",1)})),$(".spinnerdown").on("click",(function(){howmany.spinner("stepDown",1)})),$(".whotravelling-trigger").click((function(){window.scrollTo(0,0),document.body.scrollTop=0,$(".whotravelling-popover-menu").toggleClass("showMenu"),$(".resident-popover-menu").removeClass("showMenu"),$(".wherecover-popover-menu").removeClass("showMenu"),$(".dates-popover-menu").removeClass("showMenu")})),$(".whotravelling-popover-close").click((function(){$(".whotravelling-popover-menu").removeClass("showMenu")})),$(".whotravelling-popover-menu .button-done").click((function(){$(".whotravelling-popover-menu").removeClass("showMenu")})),$(".whotravelling-popover-menu").on("input",(function(){$(".whotravelling-trigger input").val("Age info set")}));var wherecover=$(".howmanytravellers").spinner({min:1,max:6,change:function(e,o){}});$(".spinnerup").click((function(){var e=wherecover.spinner("value");$(".traveller-"+e).show()})),$(".spinnerdown").click((function(){var e=wherecover.spinner("value");$(".traveller-"+(e+1)).hide()})),$("#radio-1, #radio-2, #radio-3, #radio-4").checkboxradio(),$(".wherecover-trigger").click((function(){window.scrollTo(0,0),document.body.scrollTop=0,$(".wherecover-popover-menu").toggleClass("showMenu"),$(".resident-popover-menu").removeClass("showMenu"),$(".whotravelling-popover-menu").removeClass("showMenu"),$(".dates-popover-menu").removeClass("showMenu")})),$("label[for='radio-1']").click((function(){$(".wherecover-trigger input").val("Europe")})),$("label[for='radio-2']").click((function(){$(".wherecover-trigger input").val("Australia & NZ")})),$("label[for='radio-3']").click((function(){$(".wherecover-trigger input").val("Worldwide ex US/CAD")})),$("label[for='radio-4']").click((function(){$(".wherecover-trigger input").val("Worldwide")})),$(".wherecover-popover-menu label").click((function(){$(".wherecover-popover-menu").removeClass("showMenu")})),$(".wherecover-popover-close").click((function(){$(".wherecover-popover-menu").removeClass("showMenu")})),jQuery("input:checkbox").change((function(){jQuery(this).closest(".extra-option-box").toggleClass("selected",this.checked)}));