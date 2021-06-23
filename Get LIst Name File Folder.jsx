#target photoshop;
main();
function main(){
var selectedFolder = Folder.selectDialog("Please select  folder");
if(selectedFolder == null) return;
var fileList= selectedFolder.getFiles("*.jpg");
if(fileList.length>0){
var out = new File(Folder.desktop + "/ListIcons.txt");
out.open("w");
out.encoding="UTF8";
for(var a in fileList){out.writeln(decodeURI(fileList.name));}
out.close();
}
};
