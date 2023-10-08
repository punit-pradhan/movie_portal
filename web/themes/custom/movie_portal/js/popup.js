(function ($, Drupal) {
  Drupal.behaviors.popup = {
    attach: function (context, settings) {
      // Function to show the description when clicking on the image
      $(".views-field-field-movie-img", context).on("click", function () {
        // Find the closest sibling with the class "views-field-field-description" and add the "show" class to it
        $(this).closest(".views-row").find(".views-field-field-description").addClass("show");
      });

      // Function to hide the description when clicking on the close button
      $(".close_btn", context).on("click", function () {
        // Find the closest ".views-field-field-description" element and remove the "show" class from it
        $(this).closest(".views-field-field-description").removeClass("show");
      });
    },
  };
})(jQuery, Drupal);
