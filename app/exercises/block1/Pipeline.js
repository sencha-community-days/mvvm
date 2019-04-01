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
 * This class tests your undertsanding regarding the correct order in which
 * ViewModel-data View-Bindings are set up.
 * The method "getPipeline" should return the statics representing
 * VM-/View-Operations in their correct order.
 *
 */
Ext.define("mvvm.excercises.block1.Pipeline", {

    statics : {
        CREATE_ROOT_STUB  : "creates RootStub",
        APPLY_BIND        : "applies binds (bind descriptors) to ViewModel",
        APPLY_CB_SETTERS  : "applies callbacks for setters",
        STUB_LOOKUP       : "looks up stubs in ViewModel",
        CREATE_CHILD_STUB : "creates child stubs",
        RENDER            : "Ext.Component renders",
        APPLY_VM_DATA     : "Ext.app.ViewModel applyData"
    },


    /**
     * Returns VM-/Viewoperations as an array in their correct
     * order.
     */
    getPipeline : function() {

    }
});