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
describe('mvvm.excercices.block1.ConfigTest', function(t) {


    t.it("testing implementation", function(t) {

        const comp = Ext.create("mvvm.excercises.block1.Config");

        let NEWVALUE, OLDVALUE;

        comp.ping = function(newValue, oldValue) {
            NEWVALUE = newValue;
            OLDVALUE = oldValue;
        };

        t.expect(comp.setFoo).toBeDefined();
        t.expect(comp.applyFoo).toBeDefined();
        t.expect(comp.updateFoo).toBeDefined();
        t.expect(comp.getFoo).toBeDefined();

        comp.setFoo(1);
        t.expect(comp.getFoo()).not.toBe(1);

        comp.setFoo("one");
        t.expect(comp.getFoo()).not.toBe("one");

        comp.setFoo("Sun");
        t.expect(comp.getFoo()).toBe("Sun");

        comp.setFoo("Sun2");
        t.expect(comp.getFoo()).toBe("Sun2");

        t.expect(NEWVALUE).toBe("Sun2");
        t.expect(OLDVALUE).toBe("Sun");
    });




});
