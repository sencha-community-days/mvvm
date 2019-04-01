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
 * This file consists of two class definitions: A custom implementation of
 * a Component #mvvmcomponent and a Panel, which serves as the main-container
 * for this exercise.
 * The container holds two textfields, #afield and #bfield, along with the
 * #mvvcomponent.
 * #mvvcomponent should now be enhanced so that it contains two config-properties
 * "a" and "b" which both are capable of seeding their values to interested components
 * bound by a ViewModel.
 * Only #afield and #bfield should use binding.
 *
 *
 */
Ext.define("mvvm.exercises.block2.Component", {

    extend : "Ext.Component",

    alias : 'widget.mvvmcomponent'


});



Ext.define("mvvm.exercises.block2.Custom", {

    extend : "Ext.Panel",

    viewModel : true,

    items : [{
        xtype : 'mvvmcomponent'
    }, {
        xtype : 'textfield',
        itemId : 'afield'
    }, {
        xtype : 'textfield',
        itemId : 'bfield'
    }]

});
