$(function (){

    for (var i = 0; i < 3; i++) {
        var label = $('<label></label>').text('Item ' + i);
        $('#labelList').append(label);
    }

    $('#widget button').click(function() {
        var labelsCount = $('#labelList label').length;
        var label = $('<label></label>').text('Item ' + labelsCount);
        $('#labelList').append(label);
    });

    $('#submit').click(function () {
        alert(getDataToSubmit());
    });
});

function getDataToSubmit() {
    var result = [];
    $('#labelList label').each(function (index, label) {
        result.push($(label).text());
    });

    return result.join(',');
}