const fs = require('fs');

var text = fs.readFileSync('./Lyrics/MeriGullyMein.txt').toString('utf-8');
var textBySpace = text.split("\n").join(" ").split(" ");
var dict = {}
for(var i = 0; i < textBySpace.length; i++){
    var word = textBySpace[i];
    if(!(word in dict)){
        dict[word] = 1;
        var v = dict[word];
    } else {
        var v = dict[word];
        v++;
        dict[word] = v;  
    }       
}

for(var word in dict){
    var value = dict[word];
    var num = (value/textBySpace.length)*100;
    var perNum = Math.floor(num * 100)/100;
    console.log(word, "- " + perNum + "%");    
}



