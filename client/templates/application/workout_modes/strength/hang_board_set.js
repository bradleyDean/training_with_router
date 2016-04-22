Template.hangBoardSet.onCreated(function(){
    this.showNotes = new ReactiveVar( false );
    Template.parentData().ach = 0;
});

Template.hangBoardSet.helpers({
    showNotes: function(){
        return Template.instance().showNotes.get();
    },
    repsGoals: function(){
        return settings.repsGoals; 
    }
});

Template.hangBoardSet.events({
    'click .note_hider': function(event, template){
        template.showNotes.set( !template.showNotes.get() ) // toggle value of show notes
    },
    'keyup #ach': function(event){
        //Exercises.update({_id:Template.instance().data.exerciseId},{});
    }
    });
