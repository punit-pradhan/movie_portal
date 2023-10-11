(function ($, Drupal, once) {
    Drupal.behaviors.moviePage = {
      attach: function (context, settings) {
        let modalDiv = $("#expanded_popup");
        let closeTag = $("#close_btn");
        let expandedImage = $("#expandedImage");
        let movieTitle = $("#movieTitle");
        let modalInfo = $("#modalInfo");
  
        once("popUp", ".view-display-id-page_2", context).forEach((element) => {
          const views = $(".view-display-id-page_2");
          
          let on_click_img = (e) => {
            if (e.target.tagName === "IMG") {
              let element = $(e.target).closest("article");
              let title = element.find("h2 a").text();
              let image = element.find(".field--name-field-movie-img img").attr("src");
              let description = element.find(".field--name-field-description").text();
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
          let handleCloseClick = () => {
            modalDiv.css("display", "none");
          };
          closeTag.on("click", handleCloseClick);
        });
      },
    };
  })(jQuery, Drupal, once);
  