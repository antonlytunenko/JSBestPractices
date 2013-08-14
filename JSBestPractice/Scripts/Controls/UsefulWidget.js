(function ($) {
    $.widget("jbsp.usefulWidget", {
        options: {
            colorClass: 'btn-color'
        },

        _init: function () {
            var me = this;
            $('#button', me.element).click(function () {
                me._trigger("buttonClick", {}, { arg: "You clicked a button!" });

                $(this).toggleClass(me.options.colorClass);
            });
        }
    });
})(jQuery)