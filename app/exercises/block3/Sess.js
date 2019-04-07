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
 * 1) SessModel has a 1:n relationship to SessCountryModel
 * 2) The grid should show all SessModel data
 * 3) Clicking a row should show all its associated SessCountryModel-data in the grid below
 * 4) Clicking the edit button opens up a modal dialog for editing SessModel data.
 * Changing data should not be reflected in the parent-view. Until...
 * 5) A click on the Save Button writes all changes back to the parent view.
 *
 * Use ViewModels and bindings where applicable.
 * Reuse classes out of the *.sess.* namespace. Use sessions.
 */

Ext.define("mvvm.exercises.block3.Sess", {

    extend : 'Ext.Panel',

    title : "mvvm.exercises.block3.Sess",

    layout : {
        type : 'vbox',
        align : 'stretch'
    },

    items : [{
        xtype  : 'grid',
        itemId : 'sessGrid',
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
        }, {
            xtype: 'widgetcolumn',
            width: 90,
            widget: {
                xtype: 'button',
                action : 'edit',
                text: 'Edit'
            }
        }]
    }, {
        xtype  : 'grid',
        itemId : 'countryGrid',
        flex : 1,
        columns : [{
            flex : 1,
            text      : 'name',
            dataIndex : 'name'
        }]
    }]


});


