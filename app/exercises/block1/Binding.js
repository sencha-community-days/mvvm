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
 * Create a custom binding for a descriptor "{foo}" for the component's viewModel.
 * This binding should trigger the method "bindingChanged" once the value for
 * "foo" was changed.
 * You can re-use the Ext.Component's "initComponent()" for registering the custom
 * binding.
 */
Ext.define("mvvm.exercises.block1.Binding", {


    extend : "Ext.Component",

    /**
     * Do not Change this.
     */
    testProp : -1,

    viewModel : {
        data : {
            foo : undefined,
        }
    },


    /**
     * You can re-use this to create the custom binding.
     */
    initComponent : function() {

        const me = this;

        me.callParent(arguments);
    },



    /**
     * Do not change this.
     */
    bindingChanged : function() {
        const me = this;
        me.testProp = 0;
    }

});