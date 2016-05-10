/**
 * Created by mattheinke on 5/10/16.
 */
var http = require('http');
var auth = "VvIG8jFSLegWpAxvPtq3otDFVQ68Y1WZ";
var host = "https://api.olosandbox.com/v1.1";

module.exports = {
    getAllResturants: function () {
        return http.get({
            host: host,
            path: '/restaurants'+'?key='+auth,
        }, function(response) {
            var parsed = JSON.parse(response);
            console.log(parsed);
        });
    },
};