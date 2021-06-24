var stringFromTextFile= 'one,two,three'
var listElements = stringFromTextFile.split(',')
var touchpro = new Window('dialog','1Touch Pro DropDownList Array');
touchpro.dList = touchpro.add('dropdownlist',undefined,listElements)
touchpro.dList.selection = 0
touchpro.show()
