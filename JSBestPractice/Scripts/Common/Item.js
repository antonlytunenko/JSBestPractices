JSBP.Item = function () {
    this.name = "default name";
};

JSBP.Item.prototype.setNameFromIndex = function (index) {
    this.name = "Item " + index;
};