Router.configure({
    layoutTemplate: 'mainNav',
    loadingTemplate: 'loading',
    //need a waitOn function (see example in microscope) 
    //waitOn: function(){Meteor.subscribe('published_something_or_other');}
    notFoundTemplate: 'notFound',
    WaitOn: function(){                                                         
                       return Meteor.subscribe('workouts');                                       
                      }
});

Router.route('/', {name: 'landingPage'});
Router.route('/about', {name:'about'});
Router.route('/firstStep',{name: 'firstStep'}); //the string is the name of the route being defined. {name: blah} means use the template called blah

Router.route('/modeSelector',{name: 'modeSelector'});

var requireLogin = function(){
    if (! Meteor.user()){
        if (Meteor.loggingIn()){
            this.render('loadingTemplate');
        }else{
        this.render('accessDenied');
        }
    }else{
        this.next();
    }
}

Router.onBeforeAction( requireLogin, {only:'modeSelector'});
