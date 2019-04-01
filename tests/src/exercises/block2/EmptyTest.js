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
describe('mvvm.excercices.block2.EmptyTest', function(t) {


    t.it("testing implementation", function(t) {

        const comp = Ext.create("mvvm.exercises.block2.Empty", {
            renderTo : document.body,
            width : 600,
            height : 400
            }),
            vm = comp.getViewModel();

        vm.notify();

        t.expect(vm.getFormulas().subject).toBeDefined();
        t.expect(vm.getFormulas().subject.get).toBeDefined();
        t.expect(vm.getFormulas().subject.set).toBeDefined();

        t.expect(vm.get('subject')).toBe('foo');

        vm.set('subject', 'a');
        vm.notify();
        t.expect(comp.down('#textField').getValue()).toBe('a');

        vm.set('subject', null);
        vm.notify();
        t.expect(comp.down('#textField').getValue()).toBe('empty');

    });




});
