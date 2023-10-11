(function ($, Drupal, once) {
  Drupal.behaviors.moviePage = {
    attach: function (context, settings) {
      const modalDiv = $("#expanded_popup");
      const closeTag = $("#close_btn");
      const expandedImage = $("#expandedImage");
      const movieTitle = $("#movieTitle");
      const modalInfo = $("#modalInfo");
      const parentSelector = "#block-movie-portal-content";
      const viewSelector = ".view-homepage.view-id-homepage.view-display-id-page_1"; 

      once("popUp", parentSelector + " " + viewSelector, context).forEach((element) => {
        const views = $(parentSelector + " " + viewSelector);

        const on_click_img = (e) => {
          if (e.target.tagName === "IMG") {
            const element = $(e.target).closest(".movie_card");
            const title = element.find(".movie_title").text();
            const image = element.find("img").attr("src");
            const description = element.find(".movie_description").text();

            modalDiv.css("display", "block");
            expandedImage.attr("src", image);
            movieTitle.text(title);
            modalInfo.text(description);
          } else {
            return;
          }
        };

        views.on("click", on_click_img);
      });

      once("popUp", ".expanded", context).forEach((element) => {
        const handleCloseClick = () => {
          modalDiv.css("display", "none");
        };
        closeTag.on("click", handleCloseClick);
      });
    },
  };
})(jQuery, Drupal, once);
