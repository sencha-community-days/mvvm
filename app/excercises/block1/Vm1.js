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
 * This class is a Component.
 * Implement the methods and make sure they satisfy the following demands:
 * - testSetX: This method should change the value of the model-property "html" and make
 * sure changes are immediately available in the binding. The value to which "html"
 * should be changed is passed as an argument to the method.
 *
 * NOTE!
 * ======
 * Remember what we have said about the pipeline regarding applyData / applyBind.
 * The applyBind method of the View is only called after one very important operation
 * has finished. To make sure this operation preceeds, you have to configure this
 * view component with another important property, or trigger this very important
 * operation manually.
 */
Ext.define("mvvm.excercises.block1.Vm1", {

    extend : "Ext.Component",

    viewModel : {
        data : {
            html : 'a'
        }
    },

    bind : {
        html : '{html}'
    },

    /**
     * Changes "x" of the ViewModel and makes sure it's immediately
     * available for the bound value.
     */
    testSetX : function(value) {}
});