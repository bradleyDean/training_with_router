Template.hangBoardSet.onCreated(function(){
    this.showNotes = new ReactiveVar( false );
    //TODO: Replace the following line with a database insert
});
//focus on this set if they just clicked the new set button (otherwise the refresh causes loss of focus)
Template.hangBoardSet.rendered = function(){
    console.log('Before if hangBoardSet.rendered');
    console.log(Session.get('newSet'));

    //use session.equals to prevent something or other from happening ??? (involves reactivity and performance)
    if ( Session.equals('newSet','true') ){
        console.log('Inside if');
        this.$('input').focus(); 
        Session.set('newSet',false);
    }

};

Template.hangBoardSet.helpers({
    showNotes: function(){
        return Template.instance().showNotes.get();
    },
    repsGoals: function(){
        return settings.repsGoals; 
    },
    setAch: function(){
       return Template.instance().ach; 
    }
});

Template.hangBoardSet.events({
    'click .note_hider': function(event, template){
        template.showNotes.set( !template.showNotes.get() ) // toggle value of show notes
    },
    'keyup #ach': function(event){
       exIndex = Template.parentData().exIndex;

    }

});
