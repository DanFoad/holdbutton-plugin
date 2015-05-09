(function ($) {
    "use strict";

    // Plugin definition
    $.fn.holdButton = function(callback, options) {

        // Extend default options if others provided
        var settings = $.extend({}, $.fn.holdButton.defaults, options);

        // Check if valid callback function supplied
        if (typeof callback != "function") {
            console.log("HoldButton Plugin Error: Invalid callback specified");
            return false;
        }

        return this.each(function() {
            var $this = $(this);
            var progress;
            var timeoutId;
            var animation;
            var overlay;

            switch (settings.type) {
                case "fill":
                    var width = $this.width();
                    var height = $this.height();
                    var left = $this.offset().left;
                    var top = $this.offset().top;
                    var defaultCSS = {
                        "position": "absolute",
                        "left": left,
                        "top": top,
                        "width": 0,
                        "height": height,
                        "z-index": 9001,
                        "background-color": holdColour
                    };

                    overlay = $("<div></div>").css(defaultCSS);

                    $("body").append(overlay);

                    $this.mousedown(function() {
                        timeoutId = setTimeout(function() {
                            overlay.css("background-color", settings.successColour);
                            callback();
                        }, settings.duration);
                        animation = overlay.animate({

                        }, settings.duration);
                    }).bind("mouseup mouseleave", function() {
                        clearTimeout(timeoutId);
                        animation.stop();
                        overlay.css(defaultCSS);
                    });

                    break;
                case "bar":
                    break;
                case "radial":
                    break;
                default:
                    console.log("HoldButton Plugin Error: Invalid type specified");
                    break;
            }

        });
    };

    $.fn.holdButton.defaults = {
        "duration": 2000,
        "type": "fill",
        "origin": "left",
        "holdColour": "rgba(0,0,0,0.4)",
        "successColour": "#81C784"
    };

});