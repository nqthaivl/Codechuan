var dialog = new Window("dialog");
dialog.text = "1Touch Pro On.Change Function";
dialog.preferredSize.width = 400;
dialog.orientation = "column";
dialog.alignChildren = ["left", "top"];
dialog.spacing = 10;
dialog.margins = 16;
var touchpro_array = ["Animals", "Birds"];
var touchpro = dialog.add("dropdownlist", undefined, undefined, { name: "touchpro", items: touchpro_array });
touchpro.selection = 0;
touchpro.alignment = ["left", "top"];
list_Array = getList(touchpro.selection.text);
var touchpro1 = dialog.add("dropdownlist", undefined, undefined, { name: "touchpro1", items: list_Array });
touchpro1.selection = 0;
touchpro1.alignment = ["left", "top"];
touchpro.onChange = function () {
    for (var i = touchpro1.items.length - 1; i >= 0; i--) {
        touchpro1.remove(touchpro1.items[i]);
    }
    var newList = getList(touchpro.selection.text);
    for (var i = 0; i < newList.length; i++) {
        touchpro1.add('item', newList[i]);
    }
    touchpro1.selection = 0;
}
dialog.show();
function getList(name) {
    switch (name.toLowerCase()) {
        case 'animals':
            return ['Dog', 'Cat'];

        case 'birds':
            return ['Peacock', 'Sparrow'];
    }
}
