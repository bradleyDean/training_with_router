//TODO: When users amass larges sets of trainng data,
//they will probably only need recent data, so the publication should be 
//changed accordingly.

//Publish this user's hangboard data
Meteor.publish('strength_hang_board', function(){
    var userId = this.userId;
    currentUserStrengthHangBoardData = Strength_Hang_Board.find({'user': 'Meteor.userId()'},{sort:{date:-1}, limit:5}); 
    if (currentUserStrengthHangBoardData){
        return currentUserStrengthHangBoardData;
    }
    return this.ready();
});

//Publish this user's ARC_Treadwall data
Meteor.publish('ARC_Treadwall', function(){
    var userId = this.userId;
    currentUserARC_TreadwallData = ARC_Treadwall.find({'user': userId});
    if (currentUserARC_TreadwallData){
        return currentUserARC_TreadwallData;
    }
    return this.ready();
});

/**********************Various Workout Settings***************************/
Meteor.publish('strengthHangBoardSettings', function(){
    return StrengthHangBoardSettings.find({});
    console.log(this.UserId());
});
