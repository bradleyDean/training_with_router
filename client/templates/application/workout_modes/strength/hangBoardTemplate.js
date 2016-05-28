/ NEW HB_Template.js !!!!!! ///////////////////
Template.hangBoardForm.onCreated(function(){
    if (!Session.get('hang_board_id')){ 
        //build object which stores all data for last three Strength_Hang_Board records. All arrays of id's are replaced with the actual data that they point to.  
        historicalData = Tracker.nonreactive(function(){
            return Meteor.apply('getHistoricalData',[3], {returnStubValue:true} );
        });

        Session.set('historicalData', historicalData);
        //console.log(historicalData);
        //build new exercises
        //TODO: fix magic number (2) on following line!
        hang_board_id = Meteor.apply('insertStrengthHangBoard',[historicalData[2]],{returnStubValue:true});
        Session.set('hang_board_id',hang_board_id);
        
        hang_board_record = Meteor.apply('getHangBoardRecord',[hang_board_id],{returnStubValue:true});

        settingsData = Meteor.apply('getSettingsData',[hang_board_record.settings_id],{returnStubValue:true});


    }
});


Template.hangBoardForm.helpers({
    hangBoardRecord: function(){
        return hang_board_record;
    },

    hang_board_session_number: function(){
        if (hang_board_record){
          return hang_board_record.hang_board_session_number;
        }

        else{
            console.log('ERROR: could not get hang_board_id');
                    }

    },
    weight: function(){
        return settingsData.weight;   },

    ex_ids: function(){
        if (hang_board_id){
          return hang_board_record.exerciseIds;
        }

        else{
            console.log('ERROR: Could not get ex_ids');
                    }
    },
    trainingLevelOptions: function(){
        return [
        {val: 'beg', label: 'Beginner'}, 
        {val: 'int', label: 'Intermediate'},
        {val: 'adv', label: 'Advanced'}
        ] 
    },
    isPrevLevel: function(){ 
        return settingsData.level === this.val ? 'selected':'' ;},

    levelOptionAttributes: function(){
       return {
           value: this.val,
           label: this.label
       } 
    }
});

Template.hangBoardForm.events({
    //TODO: Fix so creates new set record, gets id and then inserts id into sets fiels in new_ex
    'click .new-ex': function(){

        Meteor.apply('insertNewBlankExercise',[hang_board_id],{returnStubValue:true});
        //get current Strength_Hang_Board collection id
        //generate new, blank set
    },
    'click .submit-ex':function(){
     Session.set('hang_board_id',null);
     Session.set('historicalData', null);
     Router.go('modeSelector'); 
    },
    'keyup [name=userWeight]': function(event){
       newWeight = parseInt($(event.target).val());
       console.log('newWeight:' + newWeight);
       TrainingSettings.update({_id:Session.get('newSettingsId')},{$set:{weight: newWeight }});
    },

  
});
