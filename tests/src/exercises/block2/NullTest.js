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
describe('mvvm.excercices.block2.NullTest', function(t) {


    t.it("testing implementation", function(t) {

        const comp = Ext.create("mvvm.exercises.block2.Null", {
            renderTo : document.body,
            width : 600,
            height : 400
            }),
            val  = "foobar";

        t.expect(comp.getViewModel()).toBeTruthy();

        t.expect(comp.down('#sourceInput').getBind()).toBeFalsy();
        t.expect(comp.down('#sourceInput').getReference()).toBeTruthy();
        t.expect(comp.down('#sourceInput').getPublishes().value).toBeTruthy();
        t.expect(comp.down('#sourceInput').getPublishes().disabled).toBeTruthy();


        t.expect(comp.down('#targetInput').getBind()).toBeTruthy();
        t.expect(comp.down('#targetInput').getBind().disabled).toBeTruthy();
        t.expect(comp.down('#targetInput').getBind().value).toBeTruthy();


        // disabled
        t.expect(comp.down('#sourceInput').isDisabled()).toBe(false);
        t.expect(comp.down('#targetInput').isDisabled()).toBe(false);
        comp.down('#sourceInput').setDisabled(true);
        comp.getViewModel().notify();
        t.expect(comp.down('#sourceInput').isDisabled()).toBe(true);
        t.expect(comp.down('#targetInput').isDisabled()).toBe(true);


        // value
        t.expect(comp.down('#sourceInput').getValue()).toBeFalsy();
        t.expect(comp.down('#targetInput').getValue()).toBeFalsy();
        comp.down('#sourceInput').setValue(val);
        comp.getViewModel().notify();
        t.expect(comp.down('#sourceInput').getValue()).toBe(val);
        t.expect(comp.down('#targetInput').getValue()).toBe(val);

    });




});
