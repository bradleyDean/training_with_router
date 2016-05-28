Template.hangBoardSet.onCreated(function(){
    this.showNotes = new ReactiveVar( false );

    currentExIndex = Template.instance().data.exIndex;
    currentSetIndex = Template.instance().data.setIndex;
    histData = Session.get('historicalData');

    setWithHistData = {
                       'goals':[],
                       'ach':[],
                       'resist':[]
                   }

    for (i=0; i< histData.length; ++i){
        setWithHistData['goals'].push( histData[i].exercises[currentExIndex].sets[currentSetIndex]['goal']);
        setWithHistData['ach'].push(histData[i].exercises[currentExIndex].sets[currentSetIndex]['ach']);
        setWithHistData['resist'].push(histData[i].exercises[currentExIndex].sets[currentSetIndex]['resist']);
    }
//    console.log('***********setWithHistDatai**************');
//    console.log(setWithHistData);
    this.historicalSetData = setWithHistData;
                   
});

Template.hangBoardSet.helpers({
    showNotes: function(){
        return Template.instance().showNotes.get();
    },
    repsGoals: function(){
        return settings.repsGoals; 
    },
    set: function(){
        set = Meteor.apply('getSetData',[ Template.instance().data.setId ], {returnStubValue:true} );
        return set;
    },
    notes: function(){
        return Sets.findOne({_id: Template.instance().data.setId}).notes;
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
        return set.felt === this.val ? 'selected':'' ;},

    feltOptionAttributes: function(){
       return {
           value: this.val,
           label: this.label
           //selected: Template.instance().data.grip === this.val ? 'selected' : '' //set selected to 'selected' if 
       } 
    },

    recentData: function(){
        return Template.instance().historicalSetData;
                          } 
});

Template.hangBoardSet.events({
    'click .note_hider': function(event, template){
        template.showNotes.set( !template.showNotes.get() ) // toggle value of show notes
        template.notes.call();
    },
    'keyup [name=rep_goal]': function(event){
       //newGoal = Tracker.nonReactive(function(){ return parseInt($(event.target).val())});
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
    },
    'change [name=notes]': function(event,template){
        newNotes = $(event.target).val();
        Sets.update({_id: Template.instance().data.setId},{$set: {notes:newNotes }});

    }
//TODO Setup events for when notes are changed.
    });
