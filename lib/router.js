Router.configure({
    layoutTemplate: 'mainNav',
    loadingTemplate: 'loading'//, <--uncomment comma when waitOn is added.
    //need a waitOn function (see example in microscope) 
    //waitOn: function(){Meteor.subscribe('published_something_or_other');}
});

Router.route('/', {name: 'landingPage'});
Router.route('/about', {name:'about'});
Router.route('/firstStep',{name: 'firstStep'}); //the string is the name of the route being defined. {name: blah} means use the template called blah
Router.route('/modeSelector',{name: 'modeSelector'});

