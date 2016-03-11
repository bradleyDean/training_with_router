Template.hangBoardForm.onCreated(function(){
    //passing 'null' as name argument makes the collection only exist client-side
    var HangBoardFormData = new Mongo.Collection(null);
    HangBoardFormData.insert({
        user: Meteor.userId(),
        date: new Date(),       
        settings:{
           on: 7,
           off: 3,
           repsGoals:[7,6,5]}, //7 reps first set, 6 in second set and 5 in last set
        weight: this.weight,   
        exercises: []
    });
});

Template.registerHelper('increment', (i) => { 
  return i + 1; 
});
Template.registerHelper('extendContext', function(key,value){
    var cloned_result = _.clone(this);
    cloned_result[key] = value;
    return cloned_result;
});

