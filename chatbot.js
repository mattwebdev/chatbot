/**
 * Created by mattheinke on 5/10/16.
 */

'use strict';
var request = require('request');

const Wit = require('node-wit').Wit;

const token = (() => {
        if (process.argv.length !== 3) {
    console.log('please add your application access token');
    process.exit(1);
}
return process.argv[2];
})();

const actions = {
    say(sessionId, context, message, cb) {
        console.log(message);
        cb();
    },
    merge(sessionId, context, entities, message, cb) {
        cb(context);
    },

    error(sessionId, context, err) {
        console.log(err.message);
    },

    getLocalCoffeeShop(sessionId, context, cb) {
        request('https://api.olosandbox.com/v1.1/restaurants?key=VvIG8jFSLegWpAxvPtq3otDFVQ68Y1WZ', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                try {
                    console.log(JSON.parse(body));
                } catch(err) {
                    console.log("could not read data from source.")
                }

            } else {
                console.log(response.statusCode);
            }
        });
        cb(context);
    }
};

const client = new Wit(token, actions);
client.interactive();
