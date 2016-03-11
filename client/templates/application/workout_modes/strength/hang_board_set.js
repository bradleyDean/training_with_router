Template.hangBoardSet.onCreated(function(){
    this.showNotes = new ReactiveVar( false );
});

Template.hangBoardSet.helpers({
    showNotes: function(){
        return Template.instance().showNotes.get();
    },
    repsGoals: function(){
        return Strength_Hang_Board.findOne({}, {sort:{date: -1, limit:1} }).settings.repsGoals; 
    },
});

Template.hangBoardSet.events({
    'click .note_hider': function(event, template){
        template.showNotes.set( !template.showNotes.get() ) // toggle value of show notes
    },
    'keyup #ach': function(event){
       ex_num = Template.parentData().
       Template.parentData().newExercise.push; 

    }});
