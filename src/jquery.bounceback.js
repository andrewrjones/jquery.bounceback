/*
 * jquery.bounceback
 * https://github.com/andrewrjones/jquery.bounceback
 *
 * Copyright (c) 2012 Andrew Jones
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.bounceback = function() {
    return this.each(function() {
      $(this).html('awesome');
    });
  };

}(jQuery));
