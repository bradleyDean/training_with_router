//TODO: When users amass larges sets of trainng data,
//they will probably only need recent data, so the publication should be 
//changed accordingly.

//Publish this user's hangboard data
Meteor.publish('strength_hang_board', function(){
    currentUserStrengthHangBoardData = Strength_Hang_Board.find({user: this.userId},{sort:{date:-1}, limit:5}); 
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
});
/**********************Various Workout Settings***************************/
//TODO: Remove 'strengthHangBoardSettings' and use the 'trainingSettings' collection instead.
Meteor.publish('strengthHangBoardSettings', function(){
    return StrengthHangBoardSettings.find({user: this.userId});
    //console.log(this.UserId());
});

Meteor.publish('trainingSettings', function(){
    return TrainingSettings.find({user: this.userId});
});
