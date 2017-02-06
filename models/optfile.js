var fs = require('fs');
module.exports = {
    // readfileSync:function(path){
    //   var data = fs.readFileSync(path,'utf-8');
    //   console.log('同步方法执行完毕')；
    //   return data;
    // },
    readfile: function(path, recall) {
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data.toString());
                recall(data);
            }
        })
    },
    readImg: function(path, res) {
        fs.readFile(path, 'binary', function(err, file) {
            if (err) {
                console.log(err);
                return;
            } else {
                res.write(file, 'binary');
                res.end();
            }
        })
    }
}
