/**
 * Created by taylorks on 3/7/15.
 */

'use strict';

var should = require('should'),
    util = require('../src/util');

describe('Util Tests', function () {

    it('listFiles should list files', function () {
        var files = util.listFiles(__dirname);
        should.exist(files);
        files.length.should.be.greaterThan(0);
    });

});
