var harness = new Siesta.Harness.Browser.ExtJS();

harness.configure({
    title          : 'mvvm',
    disableCaching : true,
    loaderPath     : {

        'mvvm' : '../app'

    },
    preload        : [
        mvvm.tests.config.paths.extjs.js.url
    ]
});

harness.start({
    group : 'mvvm',
    items : [{
        group : ' excercises',
        items : [{
            group : ' block1',
            items : [
                'src/excercises/block1/PipelineTest.js',
                'src/excercises/block1/ConfigTest.js',
                'src/excercises/block1/DataTest.js',
                'src/excercises/block1/StubTest.js',
                'src/excercises/block1/Vm1Test.js',
                'src/excercises/block1/BindingTest.js'
            ]
        }]
    }]
});
