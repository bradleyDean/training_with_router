// NEW HB_Template.js !!!!!! ///////////////////
Template.hangBoardForm.onCreated(function(){
    if (!Session.get('hang_board_id')){ // this session var is first set in strength_selector.js 
        /*_________insert new hang board record___________________*/ 
        //get old Hang Board record:
        console.log('Getting old HB rec');
        oldHBrec = Strength_Hang_Board.findOne({}, {sort: {date: -1}});
        //build new exercises
        oldExerciseIds = oldHBrec.exerciseIds;
        
        newExerciseIds = [];
        for (i = 0; i < oldExerciseIds.length; ++i){
            oldExData = Exercises.findOne( {_id:oldExerciseIds[i]}, {fields: {_id:0,grip:1,sets:1,user:1 }});
            //insert exercise copy into Exercises collection
            ex_id = Exercises.insert(oldExData);
            newExerciseIds.push(ex_id);
        }
        //get oldHBrec settings
        old_settings = TrainingSettings.findOne({_id: oldHBrec.settings_id},{fields:{_id:0}});
        old_settings.insertWorked = true;
        new_settings_id = TrainingSettings.insert(old_settings); 

        //Insert HB record with exercise id's generated in loop above
        hang_board_id = Strength_Hang_Board.insert({
           user: Meteor.userId(),
           date: new Date(),
           settings_id: new_settings_id, 
           exerciseIds: newExerciseIds
        });
        Session.set('hang_board_id',hang_board_id);
    }
});


Template.hangBoardForm.helpers({

    settings: function(){
        return  TrainingSettings.findOne({type: 'strengthHangBoard'},{sort:{date:-1}, limit:1}); 
            },
    ex_ids: function(){
        hang_board_id = Session.get('hang_board_id');
        if (hang_board_id){
            console.log('hang_board_id: '+ hang_board_id);
          return Strength_Hang_Board.findOne({_id:hang_board_id}, {fields:{exerciseIds:1}}).exerciseIds;
        }

        else{
            console.log('In ELSE:');
            return Strength_Hang_Board.findOne({},{sort:{date:-1},
                                                  fields:{exerciseIds:1}});
        }
    }
});

Template.hangBoardForm.events({
    //TODO: Fix so creates new set record, gets id and then inserts id into sets fiels in new_ex
    'click .new-ex': function(){
        console.log('CLICKED!!!');
        //get current Strength_Hang_Board collection id
        current_hb_id = Session.get('hang_board_id');
        //generate new, blank set
        new_set_id = Sets.insert({ user: Meteor.userId() ,
                               resist: 0 ,
                               ach:0 ,
                               felt: 3
                               });


        //insert new blank exercise in exercises, record new_ex_id
        new_ex = {
                  user:  Meteor.userId(),
                  grip: 'jug',
                  sets: [new_set_id]
        };
        //insert new_ex into Exercises collection
        new_ex_id = Exercises.insert(new_ex);
        //insert new_ex_id into hangboard collection with id 
       update = {$push:{}}; 
       update.$push['exerciseIds'] = new_ex_id; 
       console.log(update); 
       Strength_Hang_Board.update({_id: current_hb_id },update,
           function(error){
               if (error){
                   console.log(error);
               }

           }); 
    },
 'click .submit-ex':function(){
     Session.set('hang_board_id',null);
     Router.go('modeSelector'); 
 }

  
});
