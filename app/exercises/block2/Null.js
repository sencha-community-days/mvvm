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
 * a TextField and a Container, which serves as the main-container for this exercise.
 * The container holds the custom textfield and a regular textfield as child-items.
 * The custom Textfield #sourceInput should now be configured that it sends both its
 * "disabled"- as well its "value"-value to the "targetInput" - read: The #targetInput
 * should be bound to these properties.
 * You should only use a "bind" config for #targetInput.
 */
Ext.define("mvvm.exercises.block2.null.TextField", {

    extend : 'Ext.form.field.Text',

    alias : 'widget.mvvmtextfield'
});



Ext.define("mvvm.exercises.block2.Null", {


    extend : "Ext.Panel",

    viewModel : true,

    bind : {
        title : '{mytextfield.value}'
    },

    layout : {
        type : 'vbox',
        align : 'stretch'
    },

    items : [{
        xtype : 'form',
        items : [{
            xtype : 'mvvmtextfield',
            itemId : 'sourceInput'
        }, {
            xtype : 'textfield',
            itemId : 'targetInput'
        }]
    }]


})