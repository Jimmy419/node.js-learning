var optfile = require("./models/optfile");

module.exports = {
    login: function(req, res) {
        function recall(data) {
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            res.write(data);
            res.end();
        };
        optfile.readfile('./views/login.html', recall);
        // res.write("woshi logn fangfa");
        // res.end();
    },
    zhuce: function(req, res) {
        // res.write("woshi zhuce fangfa");
        // res.end();
        function recall(data) {
            res.write(data);
            res.end();
        };
        optfile.readfile('./views/zhuce.html', recall);
    }
}
