/**
 * @file
 * Custom javascript for the Instagram Feed module.
 */

(function($) {
  Backdrop.behaviors.instagramFeed = {
    attach: function(context, settings) {

      var options = {
        'container': Backdrop.settings.instagramFeed.container,
        'display_profile': Backdrop.settings.instagramFeed.display_profile,
        'display_biography': Backdrop.settings.instagramFeed.display_biography,
        'display_gallery': Backdrop.settings.instagramFeed.display_gallery,
        'image_size':  Backdrop.settings.instagramFeed.image_size,
        'display_igtv': Backdrop.settings.instagramFeed.display_igtv,
        'styling': Backdrop.settings.instagramFeed.styling,
        'items': Backdrop.settings.instagramFeed.items,
        'items_per_row': Backdrop.settings.instagramFeed.items_per_row,
        'margin': Backdrop.settings.instagramFeed.margin,
      };
      if (Backdrop.settings.instagramFeed.feed == 'user') {
        options.username = Backdrop.settings.instagramFeed.username;
      }
      else {
        options.tag = Backdrop.settings.instagramFeed.tag;
      }
      $.instagramFeed(options);

    }
  };
})(jQuery);
