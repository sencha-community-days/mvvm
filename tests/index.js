var harness = new Siesta.Harness.Browser.ExtJS();

harness.configure({
    title          : 'mvvm',
    disableCaching : true,
    loaderPath     : {

        /**
         * ux
         */
        'Ext.ux' : "../../../../ext/packages/ux/src/",


        'mvvm' : '../app'

    },
    preload        : [
        mvvm.tests.config.paths.extjs.js.url,
        mvvm.tests.config.paths.mvvm.css.url
    ]
});

harness.start({
    group : 'mvvm',
    items : [{
        group : ' exercises',
        items : [{
            group : ' block1',
            items : [
                'src/exercises/block1/PipelineTest.js',
                'src/exercises/block1/ConfigTest.js',
                'src/exercises/block1/DataTest.js',
                'src/exercises/block1/StubTest.js',
                'src/exercises/block1/Vm1Test.js',
                'src/exercises/block1/BindingTest.js'
            ]
        }, {
            group : ' block2',
            items : [
                'src/exercises/block2/TwBindingTest.js',
                'src/exercises/block2/PropBindTest.js',
                'src/exercises/block2/TwBindingTest2.js',
                'src/exercises/block2/EmptyTest.js',
                'src/exercises/block2/CustomTest.js',
                'src/exercises/block2/NullTest.js'
            ]
        }, {
            group : ' block3',
            items : [
                'src/exercises/block3/IsoTest.js',
                'src/exercises/block3/SessTest.js'
            ]
        }]
    }]
});
