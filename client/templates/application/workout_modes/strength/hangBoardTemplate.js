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
Template.hangBoardForm.onRendered(function(){
   console.log('Rendering hangBoardForm');
    Session.set('newSet',false);
 
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
    //TODO:Change these to use find, NOT find().fetch(). Since find returns an array, when Tracker.update() or whatever is run, it is 
    //reloading all of the data (since it all comes from an array... better to pass in a cursor, but need help with the Mongo query. 
    /*
    newData: function(){
      return Strength_Hang_Board.find({}, {sort: {date: -1, limit: 1}}).fetch()[0]; 
    }, */
    settings: function(){
        //s =  Strength_Hang_Board.find({},{fields:{settings:1, _id:0}, sort: {date: -1}, limit: 1});
      return Strength_Hang_Board.find({},{fields:{settings:1, _id:0}}, {sort: {date: -1}, limit: 1}).fetch()[0].settings;
    },
    exercises: function(){
        /*
        c = Strength_Hang_Board.find({},{fields: {exercises:1}, sort:{date: -1}, limit: 1}, 
                function(error){ //callback for handling mongo errors
                   if (error){
                       console.log(error);
                   }
               });
*/
        return Strength_Hang_Board.find({_id:Session.get('newHB_id')}).fetch()[0].exercises;
    }
   

});
