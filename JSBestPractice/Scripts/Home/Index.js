JSBP.Home.Index = (function ($) {
    var items = [];
    var _labelListSelector = '#labelList';
    var _widgetSelector = '#widget';
    var _submitSelector = '#submit';

    function init() {

        addNewElement();
        addNewElement();
        addNewElement();

        $(_widgetSelector).usefulWidget({
            buttonClick: onWidgetButtonClick
        });

        $(_labelListSelector).labelList({
            predefinedItems: items
        });

        $(_submitSelector).click(function () {
            alert(getDataToSubmit());
        });
    }

    function addNewElement() {
        var item = new JSBP.Item();
        item.setNameFromIndex(items.length);
        items.push(item);
        return item;
    }

    function onWidgetButtonClick(event, arg) {
        var item = addNewElement();
        $(_labelListSelector).labelList('add', item);
    }

    function getDataToSubmit() {
        var result = [];
        $.each(items, function (index, item) {
            result.push(item.name);
        });

        return result.join(',');
    }

    return {
        init :  init
    };
})(jQuery);