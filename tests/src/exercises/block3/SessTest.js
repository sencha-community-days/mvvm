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

describe('mvvm.excercices.block3.SessTest', function(t) {

    const TIMEOUT = 750;

    t.it("testing implementation", function(t) {

        const comp = Ext.create("mvvm.exercises.block3.Sess", {
            renderTo : document.body,
            width : 600,
            height : 400
            }),
            vm = comp.getViewModel(),
            ctrl = comp.getController(),
            sessGrid = comp.down('#sessGrid'),
            countryGrid = comp.down('#countryGrid');

        vm.notify();

        t.isInstanceOf(vm, 'mvvm.exercises.block3.sess.SessViewModel');
        t.isInstanceOf(ctrl, 'mvvm.exercises.block3.sess.SessViewController');

        t.expect(comp.getSession()).toBeTruthy();

        t.expect(sessGrid.getReference()).toBeTruthy();
        t.expect(sessGrid.getBind().store).toBeTruthy();

        t.expect(countryGrid.getBind().store).toBeTruthy();

        t.waitForMs(TIMEOUT, function() {

            let m = t.getRow(sessGrid, 1);

            t.click(m.el.dom.lastChild.lastChild.lastChild, function () {

                let win = comp.down('editdialog');

                t.isInstanceOf(win, 'mvvm.exercises.block3.sess.EditDialog');
                t.expect(win.getViewModel()).toBeTruthy();
                t.expect(win.getViewModel().getParent()).toBe(vm);
                t.expect(win.getSession()).toBeTruthy();
                t.expect(win.getSession().getParent()).toBe(comp.getSession());


                let value = sessGrid.getStore().getRange()[1].get('name');

                t.expect(value).toBe(win.down('#nameField').getValue());

                win.down('#nameField').setValue("");
                win.getViewModel().notify();
                vm.notify();

                t.type(win.down('#nameField'), "FOOBAR", function() {

                    win.getViewModel().notify();

                    t.expect(value).toBe(sessGrid.getStore().getRange()[1].get('name'));
                    t.expect(value).not.toBe("FOOBAR");

                    t.click(win.down('#saveButton'), function () {

                        t.expect(win.destroyed).toBe(true);

                        t.expect("FOOBAR").toBe(sessGrid.getStore().getRange()[1].get('name'));


                    });

                });

            });

        });


    });




});
