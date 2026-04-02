$(document).ready(function() {
  $('#currencyDropdown a').click(function(e) {
    e.preventDefault(); // stop the default link action

    var selected = $(this).text(); // get selected currency
    $(this).closest('.dropdown-pane').siblings('button').text(selected); // update button text

    // close the dropdown
    $(this).closest('.dropdown-pane').foundation('close');
  });
});

$(document).ready(function () {

  $('.hamburger-tdni').on('click', function () {
    $('.mobile-nav').addClass('is-open');
    $('.header-tdni .row').addClass('is-open');
    $('.hamburger-tdni').hide();
    $('.x-tdni').show();
  });

  $('.x-tdni').on('click', function () {
    $('.mobile-nav').removeClass('is-open');
    $('.header-tdni .row').removeClass('is-open');
    $('.x-tdni').hide();
    $('.hamburger-tdni').show();
  });

});

$(document).ready(function($) {
    // Hide all .accordion-excluded elements initially
    $('.accordion-excluded').hide();

    // Toggle the next .accordion-excluded when .open-excluded is clicked
    $('.open-excluded').click(function() {
        $(this).next('.accordion-excluded').slideToggle(); // slideToggle for smooth animation
    });
});