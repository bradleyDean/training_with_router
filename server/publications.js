//TODO: When users amass larges sets of trainng data,
//they will probably only need recent data, so the publication should be 
//changed accordingly.

//Publish this user's hangboard data
Meteor.publish('strength_hang_board', function(){
    currentUserStrengthHangBoardData = Strength_Hang_Board.find({user: this.userId},{sort:{date:-1}, limit:3}); 
    if (currentUserStrengthHangBoardData){
        return currentUserStrengthHangBoardData;
    }
    return this.ready();
});

//Publish this user's ARC_Treadwall data
Meteor.publish('ARC_Treadwall', function(){
    currentUserARC_TreadwallData = ARC_Treadwall.find({user: this.userId});
    if (currentUserARC_TreadwallData){
        return currentUserARC_TreadwallData;
    }
    return this.ready();
});
//TODO: Think about what exercises we really need to publish. Probably only exercises logged recently or corresponding to the previous workout.
Meteor.publish('exercises_collection', function(){
    currentUserExercises = Exercises.find({user: this.userId});
    if (currentUserExercises){
            return currentUserExercises;
        }
        return this.ready();
});
/**********************Various Workout Settings***************************/
//TODO: Remove 'strengthHangBoardSettings' and use the 'trainingSettings' collection instead.
Meteor.publish('training_settings', function(){

    currentTrainingSettings =  TrainingSettings.find({user: this.userId,type: 'strengthHangBoard'});
    if (currentTrainingSettings){
        return currentTrainingSettings;
    }
    return this.ready();

    //console.log(this.UserId());
});

Meteor.publish('sets', function(){
    //TODO: Need to add filters so not publishing too much data (limit to recent inserts, etc)
    currentSets =  Sets.find({user: this.userId});
    if (currentSets){
        return currentSets;
    }
    return this.ready();

    //console.log(this.UserId());
});

Meteor.publish('workouts',function(){
    //TODO: filter which workouts are sent to the client
    recentWorkouts = Workouts.find({});
    if (recentWorkouts){
        return recentWorkouts;
    } 
    return this.ready();
});


/*
Meteor.publish('trainingSettings', function(){
    return TrainingSettings.find({user: this.userId});
});
*/
