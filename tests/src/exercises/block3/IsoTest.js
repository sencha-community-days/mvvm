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
describe('mvvm.excercices.block3.IsoTest', function(t) {


    t.it("testing implementation", function(t) {

        const comp = Ext.create("mvvm.exercises.block3.Iso", {
            renderTo : document.body,
            width : 600,
            height : 400
            }),
            vm = comp.getViewModel(),
            ctrl = comp.getController(),
            btn = comp.down('#saveButton'),
            grid = comp.down('grid'),
            form = comp.down('form'),
            randStr = "LKHHIIHIH";

        vm.notify();

        t.isInstanceOf(vm, 'mvvm.exercises.block3.iso.IsoViewModel');
        t.isInstanceOf(ctrl, 'mvvm.exercises.block3.iso.IsoViewController')

        t.expect(form.down('#nameField').getBind()).toBeDefined();
        t.expect(form.down('#nameField').getBind().value).toBeDefined();
        t.expect(form.down('#nameField').getBind().value.options.bindTo).toBeDefined();
        t.expect(form.down('#nameField').getBind().value.options.twoWay).toBe(false);

        t.expect(form.down('#emailField').getBind()).toBeDefined();
        t.expect(form.down('#emailField').getBind().value).toBeDefined();
        t.expect(form.down('#emailField').getBind().value.options.bindTo).toBeDefined();
        t.expect(form.down('#emailField').getBind().value.options.twoWay).toBe(false);

        t.expect(form.down('#addressField').getBind()).toBeDefined();
        t.expect(form.down('#addressField').getBind().value).toBeDefined();
        t.expect(form.down('#addressField').getBind().value.options.bindTo).toBeDefined();
        t.expect(form.down('#addressField').getBind().value.options.twoWay).toBe(false);

        t.expect(btn.isDisabled()).toBe(true);
        t.expect(Ext.isEmpty(vm.storeInfo)).toBe(false);
        t.expect(Object.values(vm.storeInfo).length).toBe(1);


        let store = Object.values(vm.storeInfo)[0];

        t.expect(grid.getStore()).toBe(store);

        t.click(t.getRow(grid, 1), function() {

            vm.notify();
            t.expect(btn.isDisabled()).toBe(false);

            let val = form.down('#nameField').getValue();

            t.type(form.down('#nameField'), randStr, function() {

                let newVal = form.down('#nameField').getValue();

                t.expect(val).not.toBe(newVal);

                vm.notify();

                t.expect(form.down('#nameField').getValue()).toBe(newVal);
                t.expect(grid.getSelection()[0].get('name')).toBe(val);
                t.expect(grid.getSelection()[0].get('name')).not.toBe(newVal);

                t.click(btn, function() {

                    t.expect(form.down('#nameField').getValue()).toBe(newVal);
                    t.expect(grid.getSelection()[0].get('name')).not.toBe(val);
                    t.expect(grid.getSelection()[0].get('name')).toBe(newVal);

                });

            });

        })


    });




});
