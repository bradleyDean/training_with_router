Template.hangBoardForm.onCreated(function(){

    oldData = Strength_Hang_Board.findOne({}, {sort: {date: -1}});
    
    //for accessing the new hang board record in the Strength_Hang_Board collection, use newHB_id. 
    newHB_id = Strength_Hang_Board.insert({
                                            isNewData: true,
                                            user: oldData.user,
                                            date: new Date(),
                                            settings: oldData.settings,
                                            weight: oldData.weight,
                                            exercises: oldData.exercises
                                        });
   Session.set('newHB_id',newHB_id); //see above note.

});

Template.registerHelper('increment', (i) => { 
  return i + 1; 
});

Template.registerHelper('extendContext', function(key,value){
    var cloned_result = _.clone(this);
    cloned_result[key] = value;
    return cloned_result;
});

Template.hangBoardForm.helpers({
    //TODO: are these querries doing what I am trying to get them to do? 
    newData: function(){
      return Strength_Hang_Board.find({}, {sort: {date: -1, limit: 1}}).fetch()[0]; 
    },
    settings: function(){
      return Strength_Hang_Board.find({},{settings:1, _id:0}, {sort: {date: -1}, limit: 1}).fetch()[0].settings;
    },
    exercises: function(){
        return Strength_Hang_Board.find({},{exercises:1, _id:0}, {sort: {date: -1}, limit: 1}).fetch()[0].exercises; 
    }
   

});
