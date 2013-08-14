(function ($) {
    $.widget("jsbp.labelList", {
        options: {
            predefinedItems: []
        },

        _init: function () {
            var elements = [];
            $.each(this.options.predefinedItems, function (ind, item) {
                elements.push(createLabel(item));
            });

            this.element.append(elements);
        },

        add: function (item) {
            this.element.append(createLabel(item));
        }
    });

    function createLabel(item) {
        return $('<label></label>').text(item.name).get(0);
    }
})(jQuery);