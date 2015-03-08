/**
 * Created by taylorks on 3/7/15.
 */

'use strict';

var util = require('./src/util'),
    config = require('nconf');


module.exports.util = util;
module.exports.config = config;


module.exports.setup = function () {
    require('./src/vulcan');
};
