Meteor.methods({
    'getHistoricalData'(numToGet){
        check(numToGet, Match.Integer);

        if(! this.userId ){
            throw new Meteor.Error('not-authorized');
        }

        //TODO: add check to see if this user is allowed to access these records (are they their records or records they're allowed to see?)
        HBrecordZZZ = Strength_Hang_Board.find({user: this.userId},{sort:{date:1}, limit:numToGet}).fetch().slice(0,numToGet);
        console.log('HBrecordZZZ');
        console.log(HBrecordZZZ);

        //console.log('In method');
        //console.log( result);
        historicalData = [];
        for (i=0; i < HBrecordZZZ.length; ++i){
            HBrecord = HBrecordZZZ[i];
            //console.log('**************HBrecord********************');
            //console.log(HBrecord);
            HBrecordExercises = []; //store exercise data objects in this
    
            for (j=0; j<HBrecord.exerciseIds.length ; ++j){
                exId = HBrecord.exerciseIds[j];
                exerciseRecord = Exercises.findOne({_id:exId}); // miting fields to exclude user later if that speeds up querry... prob doesn't 
                //console.log('*************exerciseRecord***************');
                //console.log(exerciseRecord);

                setData = [];
                for (s=0; s<exerciseRecord.sets.length; ++s){
                    setRecord = Sets.findOne({_id:exerciseRecord.sets[s]});
                    //console.log('************************setRecord*********************');
                    //console.log(setRecord);
                    setCopy = {
                        resist: setRecord.resist,
                        ach: setRecord.ach,
                        goal: setRecord.goal,
                        felt: setRecord.felt,
                        notes:setRecord.notes
                    }
                    setData.push(setCopy);
                    //console.log('*****************setData***********************');
                    //console.log(setData);
                }
                exCopy = {
                    grip:exerciseRecord.grip,
                    sets:setData
                }

            HBrecordExercises.push(exCopy);
            }
            
            historicalData.push({
                date:moment(HBrecord.date).format('MM/DD'),
                hang_board_session_number:HBrecord.hang_board_session_number,
                exercises: HBrecordExercises,
                settings_id: HBrecord.settings_id
                //excluding settings
                });


        }//END HBrecordZZZ for loop (index is i) 
        //console.log('***************historicalData**********************');
        //console.log(historicalData);


        return historicalData;
    },
    'getExerciseRecord'(exId){
        check(exId,String);
        //TODO: check that fields object is legit
        if (! this.userId){
            throw new Meteor.Error('You cannot have that data');
        }
        exRec = Exercises.findOne({ _id: exId});
        //console.log('in getExerciseData: ');
        //console.log(exData);
        return exRec;
        
    },
    'getRecentExerciseData'(exId){
        check(exId,String);
        //TODO: check that fields object is legit
        if (! this.userId){
            throw new Meteor.Error('You cannot have that data');
        }
        result = Exercises.find({ _id: exId},  {fields: {_id:0,grip:1,sets:1,user:1 }, reactive: false }).fetch()[0];
        return result;
        
    },
    'insertExercise'(exerciseData){
        //TODO set up a check
        if (! this.userId){
            throw new Meteor.Error('You cannot insert that exercise data here!');
        }
        newExId = Exercises.insert(exerciseData);
        return newExId;
    },
    'insertStrengthHangBoard'(mostRecentData){
        //Remember: mostRecentData has copies of all of the data, not references (Ids) to the data. Acess data from it directly, rather than querrying the collections.
        if (! this.userId){
            throw new MeteorError('You cannot insert that strength hang board data here');
        }
        newExIdZZZ = [];
        //for each of the previous exercises
        for (e=0; e<mostRecentData.exercises.length; ++e){
            oldExRecord = mostRecentData.exercises[e];
            newExRecord = {
                user:this.userId,
                grip:oldExRecord.grip,
                sets: []
            }
            //...copy the each set record and insert it into the Sets collection
            for (s=0; s<oldExRecord.sets.length; ++s){
                oldSet = oldExRecord.sets[s];
                newSetId = Sets.insert({
                         user:this.userId,
                         resist: oldSet.resist,
                         ach: 0,
                         goal: oldSet.goal,
                         felt: oldSet.felt,
                         notes: oldSet.notes
                });
                newExRecord.sets.push(newSetId);
            }
        newExId = Exercises.insert(newExRecord);
        newExIdZZZ.push(newExId);     
        } 

        new_HB_Id = Strength_Hang_Board.insert({
           user: this.userId, 
           date: new Date(),
           hang_board_session_number: mostRecentData.hang_board_session_number,
           settings_id: mostRecentData.settings_id, 
           exerciseIds: newExIdZZZ
        });
        return new_HB_Id;
    },
   'getSetData'(setId){
        if (! this.userId){
            throw new MeteorError('You cannot get that strength hang board data here');
        }
        setData = Sets.findOne({_id: setId});
        //console.log('In getSetData method: ');
        //console.log(setData);
        return  setData;
   },

  'insertNewExCopy'(){
      prevWorkout = Workouts.findOne({user: this.userId},{fields:{_id:0,mode:1,workout:1},sort: {date: -1, limit: 1}});
      //console.log('prevWorkout:');
      //console.log(prevWorkout);
      prev_HB_id = prevWorkout.workout[0].workout_id;


      newUser = this.userId;
      newMode = prevWorkout.mode;
      newWarmup = []; //TODO: put the correct warmup id's in this list
      newWorkout = [];   

      prevHB = Strength_Hang_Board.findOne(
              {_id:prev_HB_id},
              {fields:{_id:0,hang_board_session_number:1,settings_id:1,exerciseIds:1},sort: {date: -1, limit: 1}} );


      prevSettingsId = prevHB.settings_id;
      prevExIds = prevHB.exerciseIds;

      newHB_session_number = prevHB.hang_board_session_number + 1;
      newExerciseIds = []; 
      //for each old exId, 
      for (i = 0; i < prevExIds.length; ++i){
          //get the prev corresponding set data
          oldExId = prevExIds[i];
          oldEx = Exercises.findOne({_id:oldExId});
          oldSetIds = oldEx.sets;
          var newSetIds = [];

          //copy set data into new set record in sets collection
          for(j = 0; j<oldSetIds.length; ++j){
              oldSetId = oldSetIds[j];
              oldSetData = Sets.findOne({_id:oldSetId},{fields:{_id:0}});
              newSetData = oldSetData;
              newSetData['ach'] = 0;
              //TODO: May need to wrap this insert in Tracker.nonreactive(function(){...})
              newSetId = Sets.insert(oldSetData);
              //put newSetID in newSetIds list (for the exercise record we're about to make)
              newSetIds.push(newSetId);
          }
          //make new exercise in Exercises collection and insert setIds in this record
          newExData = {
              user:this.userId,
              grip: oldEx.grip,
              sets: newSetIds}
          newExId = Exercises.insert(newExData);
          newExerciseIds.push(newExId);
      }//end outer for-loop
       new_HB_Id = Strength_Hang_Board.insert({
           user: this.userId,
           date: new Date(),
           hang_board_session_number: newHB_session_number,
           settings_id: prevSettingsId, //TODO: is this what we want? if settings are the same, just point to the old settings record in the database?
           exerciseIds:newExerciseIds});
      return new_HB_Id;      
  },
  'insertNewBlankExercise'(hangBoardId){

          new_set_id = Sets.insert({ user: this.userId ,
                               resist: 0 ,
                               ach:0 ,
                               felt: 3
                               });


        //insert new blank exercise in exercises, record new_ex_id
        new_ex = {
                  user:  this.userId,
                  grip: 'jug',
                  sets: [new_set_id]
        };
        //insert new_ex into Exercises collection
        new_ex_id = Exercises.insert(new_ex);
        //insert new_ex_id into hangboard collection with id 
       update = {$push:{}}; 
       update.$push['exerciseIds'] = new_ex_id; 
       Strength_Hang_Board.update({_id: hangBoardId },update,
           function(error){
               if (error){
                   console.log(error);
               }

           });
  },
  'getHangBoardRecord'(hangBoardId){
      return Strength_Hang_Board.findOne({ _id:hangBoardId},{fields:{_id:0}});
   },
  'getSettingsData'(settingsId){
      //console.log('settingsId is: ');
      //console.log(settingsId);
      return TrainingSettings.findOne({_id:settingsId},{sort:{date:-1}, limit:1});
  }

  
});
