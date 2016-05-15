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
    },
    set: function(){
        set = Sets.findOne({_id: Template.instance().data.setId});
        return set
    },

    feltOptions: function(){
        return [
        {val: 1, label: 'Too Easy'}, 
        {val: 2, label: 'Easy'},
        {val: 3, label: 'Moderate'},
        {val: 4, label: 'Hard'},
        {val: 5, label: 'Brutal'},
        {val: 6, label: 'Too Hard'}
        ] 

    },
    //if the value of the select option (this) == the data sent to the template, then populate the selected='...' attribute.
    //see template for usage.
    isFelt: function(){ 
        TestObj = Template.instance().data;
        return set.felt === this.val ? 'selected':'' ;},

    feltOptionAttributes: function(){
       return {
           value: this.val,
           label: this.label
           //selected: Template.instance().data.grip === this.val ? 'selected' : '' //set selected to 'selected' if 
       } 
    }
});

Template.hangBoardSet.events({
    'click .note_hider': function(event, template){
        template.showNotes.set( !template.showNotes.get() ) // toggle value of show notes
    },
    'keyup [name=rep_goal]': function(event){
       newGoal = parseInt($(event.target).val());
       Sets.update({_id:Template.instance().data.setId},{$set:{goal: newGoal }});
    },
    'keyup [name=rep_ach]': function(event){
       newAch = parseInt($(event.target).val());
       Sets.update({_id:Template.instance().data.setId},{$set:{ach: newAch }});
    },
    'change [name=felt]': function(event){
       console.log(parseInt(Template.instance().data.setId));
       newFelt = parseInt($(event.target).val());
       Sets.update({_id:Template.instance().data.setId},{$set:{felt: newFelt }});
    },
    'change [name=resistance]': function(event){
       newResist =parseInt($(event.target).val());
       Sets.update({_id:Template.instance().data.setId},{$set:{resist: newResist }});
    }
//TODO Setup events for when notes are changed.
    });
