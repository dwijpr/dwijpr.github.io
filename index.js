console.log('start . . .');

var fs = require('fs');

var items = fs.readdirSync('_core/items');

var files = [];
for(var i = 0;i < items.length;i++){
    var file = new Files(items[i]);
    files.push(file);
}

function File(complete_name){
    console.log(complete_name);
}
