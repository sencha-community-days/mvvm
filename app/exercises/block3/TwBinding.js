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
 * Update the following Panel to make sure clicking the button updates the title of the Panel.
 * Make sure you add the missing requirements.
 * The binding should also update the title of the embedded Panel.
 * Do not use references.
 */
Ext.define("mvvm.exercises.block3.TwBinding", {


    extend : "Ext.Panel",

    itemId : 'mpanel',

    viewModel : {
        foo : 'TITLE'
    },

    bind : {
        cprop : '{foo}'
    },

    layout : {
        type : 'vbox',
        align : 'stretch'
    },

    items : [{
        xtype : 'panel',
        itemId : 'embpanel',
        title : 'random',
        bind : {
            title : '{foo}'
        }
    }],


    /**
     * Do not change this
     * @param value
     */
    applyCprop : function(value) {

        this.setTitle(value);
        return value;
    },


    /**
     * Do not change this
     */
    buttons : [{
        text : 'click',
        itemId : 'chbutton',
        handler : function(btn) {
            btn.up('#mpanel').setCprop('snafu');
        }
    }]



});