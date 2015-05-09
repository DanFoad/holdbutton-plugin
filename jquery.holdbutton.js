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

            switch (settings.type) {
                case "fill":
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