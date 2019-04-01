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
 * This Panel holds multiple child items.
 * As a child-item, the TextField #fieldForText is capable of accessing its parent's
 * ViewModel and its data.
 * The method getAccessibleViewModel should return an object that contains the following:
 * - a key-property, which is the same name as the property in which you have
 * found the accessible ViewModel
 * - the value of this property should then be the ViewModel itself.
 */
Ext.define("mvvm.exercises.block2.PropBind", {


    extend : "Ext.Container",

    viewModel : true,

    layout : {
        type : 'vbox',
        align : 'stretch'
    },

    items : [{
        xtype : 'grid',
        store : {
            data : [{name : 'name'}]
        },
        columns : [{
            text : 'Name',
            dataIndex : 'name',
            flex : 1
        }]
    }, {
        xtype : 'form',
        items : [{
            xtype : 'textfield',
            itemId : 'fieldForText'
        }]
    }],


    /**
     * Implement this according to the requirements of this exercise.
     * @return {Object}
     */
    getAccessibleViewModel : function() {
    }


});