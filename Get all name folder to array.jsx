/*
main();
function main(){
	var selectedFolder = Folder.selectDialog("Chọn Thư Mục www.1Touch.Pro");
	if(selectedFolder == null) return;
	var fileList= selectedFolder.getFiles();
	if(fileList.length>0){
		var names = "";
		for (var i = 0; i < fileList.length; i++) {
			if (i==0 )   names =  '"' + decodeURI(fileList[i].name) + '"';
			else names = names + '\,"' + decodeURI(fileList[i].name) + '"';
		}
		logInfo(names)
	}
}


function logInfo(Txt){
    try {
       var file = new File(Folder.desktop + "/out.txt");
       file.open("w", "TEXT", "????");
       //alert(file.encoding);
       file.encoding = "UTF8";
       file.seek(0,2);
       $.os.search(/windows/i)  != -1 ? file.lineFeed = 'windows'  : file.lineFeed = 'macintosh';
       file.writeln(Txt);
       if (file.error) alert(file.error);
       file.close();
       file.execute();
    }
    catch(e) { alert(e + ': on line ' + e.line, 'Script Error', true); }
};
*/

eval('@JSXBIN@ES@2.1@MyBbyBnACMBbyBn0AEJCnASzOjTjFjMjFjDjUjFjEiGjPjMjEjFjSBAEXzMjTjFjMjFjDjUiEjJjBjMjPjHCfjzGiGjPjMjEjFjSDfRBFegbiDjI2mNgejOhAiUjI2lQBhAiN2nFgejDhAjXjXjXhOhRiUjPjVjDjIhOiQjSjPffnftODZDnAnACzChdhdEVBfAnnbnJEnASzIjGjJjMjFiMjJjTjUFBEXzIjHjFjUiGjJjMjFjTGfVBfAnfnftOFbGn0ADJGnASzFjOjBjNjFjTHCneAftaHbyIn0ABOIJInASHCCzBhLICInEjzJjEjFjDjPjEjFiViSiJJfRBXzEjOjBjNjFKfQzALfVFfBVzBjJMfDffeBhCnnneBhCnffACEVMfDnndAJJnASHCCICICIVHfCnneChMhCEjJfRBXKfQLfVFfBVMfDffnnnneBhCnffAVMfDAXzGjMjFjOjHjUjINfVFfBByBzBhcOJLnAEjzHjMjPjHiJjOjGjPPfRBVHfCffACzBheQXNfVFfBnndAnAEM4D0AiAB40BiAF4B0AiAH4C0AiAAEAzEjNjBjJjORANMQbyBn0ABgRbyBn0AJJSnASzEjGjJjMjFSAEjzEiGjJjMjFTfRBCIXzHjEjFjTjLjUjPjQUfjDfnneIhPjPjVjUhOjUjYjUftnftJTnAEXzEjPjQjFjOVfVSfARDFeBjXFeEiUiFiYiUFeEhfhfhfhfffJVnABXzIjFjOjDjPjEjJjOjHWfVSfAneEiViUiGhYfJWnAEXzEjTjFjFjLXfVSfARCFdAFdCffJXnAdCzChBhdYEXzGjTjFjBjSjDjIZfXzCjPjTgafjzBhEgbfRBYHjXjJjOjEjPjXjTBjJffnndyBBXzIjMjJjOjFiGjFjFjEgcfVSfAneHjXjJjOjEjPjXjTfBXgcfVSfAneJjNjBjDjJjOjUjPjTjIfJYnAEXzHjXjSjJjUjFjMjOgdfVSfARBVzDiUjYjUgefBffOZJZnAEjzFjBjMjFjSjUgffRBXzFjFjSjSjPjShAfVSfAffAXhAfVSfAnJganAEXzFjDjMjPjTjFhBfVSfAnfJgbnAEXzHjFjYjFjDjVjUjFhCfVSfAnfABnzBjFhDnbyBn0ABJgdnAEjgffRDCICIjhDfnneKhahAjPjOhAjMjJjOjFhAXzEjMjJjOjFhEfjhDfnnFeMiTjDjSjJjQjUhAiFjSjSjPjSFctffACge40BhAS40BiABBAPAgeBJAnAEjRfnf0DLByB');
