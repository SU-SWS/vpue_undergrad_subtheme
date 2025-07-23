(function ($, once) {
  'use strict';
  Drupal.behaviors.ppoIrsrSubtheme = {
    attach: function (context) {

    // Move the utility button to the brand bar for mobile users
      const $utiltyBtn = $('.su-site-header-button', context);
      if ($utiltyBtn.length) {
        const $clonedutiltyBtn = $utiltyBtn.clone();
        $clonedutiltyBtn.appendTo('.su-brand-bar', context)
          .wrap('<div class="su-mobile-utility-button"></div>');
      }




    }
  };

})(jQuery, once);