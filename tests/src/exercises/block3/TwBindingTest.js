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
describe('mvvm.excercices.block3.TwBindingTest', function(t) {


    t.it("testing implementation", function(t) {

        const comp = Ext.create("mvvm.exercises.block3.TwBinding", {
            renderTo : document.body,
            width : 600,
            height : 400
            }),
            embPanel = comp.down('#embpanel'),
            btn = comp.down('#chbutton');

        t.expect(comp.getTitle()).toBeFalsy();
        t.expect(comp.twoWayBindable.cprop).toBeTruthy();

        t.expect(comp.getTitle()).not.toBe(embPanel.getTitle());

        t.click(btn, function() {
            t.expect(comp.getTitle()).toBe('snafu');
            t.expect(embPanel.getTitle()).toBe('snafu');
        });



    });




});
