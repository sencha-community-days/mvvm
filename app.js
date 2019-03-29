/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'mvvm.Application',

    name: 'mvvm',

    requires: [
        // This will automatically load all classes in the mvvm namespace
        // so that application classes do not need to require each other.
        'mvvm.*'
    ],

    // The name of the initial view to create.
    mainView: 'mvvm.view.main.Main'
});
