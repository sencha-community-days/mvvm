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
describe('mvvm.excercices.block1.PipelineTest', function(t) {


    t.it("testing implementation", function(t) {

        const comp     = Ext.create("mvvm.exercises.block1.Pipeline"),
              Pipeline = mvvm.exercises.block1.Pipeline,
              sol      = {},
              pipe     = comp.getPipeline(),
              mapped   = [];

        // remap and obfuscate
        sol[Pipeline.APPLY_VM_DATA] = "g";
        sol[Pipeline.CREATE_ROOT_STUB] = "w";
        sol[Pipeline.CREATE_CHILD_STUB] = "r";
        sol[Pipeline.RENDER] = "q";
        sol[Pipeline.APPLY_BIND] = "m";
        sol[Pipeline.STUB_LOOKUP] = "k";
        sol[Pipeline.APPLY_CB_SETTERS] = "p";

        for (var i = 0, len = pipe.length; i < len; i++) {
            mapped.push(sol[pipe[i]]);
        }

        t.expect(mapped).toEqual([
            sol[Pipeline.APPLY_VM_DATA],
            sol[Pipeline.CREATE_ROOT_STUB],
            sol[Pipeline.CREATE_CHILD_STUB],
            sol[Pipeline.RENDER],
            sol[Pipeline.APPLY_BIND],
            sol[Pipeline.STUB_LOOKUP],
            sol[Pipeline.APPLY_CB_SETTERS]
        ]);
    });




});
