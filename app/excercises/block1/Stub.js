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


/**
 * This class is a ViewModel.
 * Implement the methods and make sure they satisfy the following demands:
 * - testGetRoot: This should return the root-stub of the viewmodel.
 * - testGetStubs: This should return an array with all direct stubs that were
 * defined for this ViewModel.
 */
Ext.define("mvvm.excercises.block1.Stub", {

    extend : "Ext.app.ViewModel",

    data : {
        x : 'a',
        y : 'b'
    },

    /**
     * Returns the root-stub of the viewmodel.
     */
    testGetRoot : function() {},


    /**
     * Returns an array with all direct stubs that were
     * defined for this ViewModel.
     */
    testGetStubs : function() {}

});