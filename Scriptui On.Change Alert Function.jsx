var panel1 = new Window("dialog","1Touch Pro");
var dropdownlist1_array = ["Name 1","Name 2","Name 3"];
var dropdownlist1 = panel1.add("dropdownlist", undefined, dropdownlist1_array);
  dropdownlist1.selection = 0;
  dropdownlist1.text = "Type:";
  dropdownlist1.onChange = function(){ alert(this.selection.text); };
  panel1.show();
