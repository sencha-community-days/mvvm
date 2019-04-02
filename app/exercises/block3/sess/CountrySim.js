/**
 * mvvm
 * Sencha Community Days
 * Copyright (C) 2019 Thorsten Suckow-Homberg https://github.com/sencha-community-days/mvvm
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


Ext.define('mvvm.exercises.block3.sess.CountrySim', {

    requires : [
        'mvvm.exercises.block3.sess.SimInit'
    ]

}, function() {

    var data = [{
        id   : 1,
        name : 'Germany',
        sessModelId : 1
    }, {
        id   : 2,
        name : 'Netherlands',
        sessModelId : 2
    }, {
        id   : 3,
        name : 'Spain',
        sessModelId : 1
    }, {
        id   : 4,
        name : 'Italia',
        sessModelId : 1
    }, {
        id   : 5,
        name : 'Sweden',
        sessModelId : 3
    }, {
        id   : 6,
        name : 'Switzerland',
        sessModelId : 3
    }, {
        id   : 7,
        name : 'Austria',
        sessModelId : 3
    }];



    Ext.ux.ajax.SimManager.register({
        type : 'json',

        url : /mvvm\/sess\/countries(\/.*)?/im,

        data : function() {
            return data;
        }
    });

});