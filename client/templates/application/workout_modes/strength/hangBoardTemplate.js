// NEW HB_Template.js !!!!!! ///////////////////
Template.hangBoardForm.onCreated(function(){
    if (Session.get('start_new_hb_session')){
        /*_________insert new hang board record___________________*/ 
        //get old Hang Board record:

        oldHBrec = Strength_Hang_Board.findOne({}, {sort: {date: -1}});
        //build new exercises
        oldExerciseIds = oldHBrec.exerciseIds;
        newExerciseIds = [];
        for (i = 0; i < oldExerciseIds.length; ++i){
            oldExData = Exercises.findOne( {_id:oldExerciseIds[i]})[0];
            console.log('OldExData: '+ oldExData);
            //insert exercise copy into Exercises collection
            ex_id = Exercises.insert(oldExData);
            newExerciseIds.push(ex_id);
        }
        //Insert HB record with exercise id's generated in loop above
        hang_board_id = Strength_Hang_Board.insert({
           user: Meteor.userId(),
           date: new Date(),
           settings_id: hb_ex_settings_id, 
           exercisesIds: newExerciseIds
        });
        Session.set('start_new_hb_session',false);
    }
});


Template.hangBoardForm.helpers({

    settings: function(){
        //TODO: make this get settings from db
        return  {
                user: "tagiHhnyYSnE6JTJx",
                level: 'advanced',
                weight: 153
                     }; 
            },
    exercise_ids: function(){
        if (hang_board_id){
            console.log('hang_board_id: '+ hang_board_id);
          return Strength_Hang_Board.findOne({_id:hang_board_id},
                                             {fields:{settings_id:1}});
        }

        else{
            return Strength_Hang_Board.findOne({},{sort:{date:-1}});
        }
    }
});
