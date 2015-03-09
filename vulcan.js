/**
 * Created by taylorks on 3/7/15.
 */

'use strict';

var util = require('./src/util'),
    config = require('nconf');


module.exports.util = util;
module.exports.config = config;

// Vulcan hammers, not 'sets up'
module.exports.hammer = function (callback) {
    callback = callback || function () {
    };
    require('./src/vulcan');
    callback();
};
