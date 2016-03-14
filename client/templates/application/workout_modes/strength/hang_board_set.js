Template.hangBoardSet.onCreated(function(){
    this.showNotes = new ReactiveVar( false );
});

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
       Template.parentData().newExercise.push; 

    }});
