Template.hangBoardForm.onCreated(function(){
    //passing 'null' as name argument makes the collection only exist client-side
    HangBoardFormData = new Mongo.Collection(null);
    console.log('In hangBoardTemplate.js' + Template.currentData().settings);
    HangBoardFormData.insert({
        user: Meteor.userId(),
        date: new Date(),       
        settings: Template.currentData().settings, 
        weight: Template.currentData().weight,   
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

