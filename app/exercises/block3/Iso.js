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
 * Implement this View so it meets the following requirements:
 * 1) The grid displays the data from the IsoStore
 * 2) If any row in the grid is selected, the selection should be displayed in the form
 * 3) As long as no selection is available, the button of the view should be disabled
 * 4) Typing in the form should not update the data in the store, but clicking the button should.
 *
 * Use ViewModels and bindings where applicable.
 * Reuse classes out of the *.iso.* namespace.
 *
 */
Ext.define("mvvm.exercises.block3.Iso", {

    extend : 'Ext.Panel',

    title : "mvvm.exercises.block3.Iso",

    layout : {
        type : 'vbox',
        align : 'stretch'
    },

    items : [{
        xtype  : 'grid',
        flex : 1,
        columns : [{
            flex : 1,
            text      : 'name',
            dataIndex : 'name'
        }, {
            flex : 1,
            text      : 'email',
            dataIndex : 'email'
        }, {
            flex : 1,
            text      : 'address',
            dataIndex : 'address'
        }]
    }, {
        xtype : 'form',
        items : [{
            xtype : 'textfield',
            itemId : 'nameField',
            name : 'name',
            fieldLabel : 'Name'
        }, {
            xtype : 'textfield',
            itemId : 'emailField',
            name : 'email',
            fieldLabel : 'Email'
        }, {
            xtype : 'textarea',
            name : 'address',
            itemId : 'addressField',
            fieldLabel : 'Address'
        }]
    }],

    buttons : [{
        text : 'save',
        itemId : 'saveButton'
    }]


});


