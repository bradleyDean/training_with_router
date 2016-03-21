Template.hangBoardExercise.onCreated(function(){
    /***in this block, 'this.' refers to the current template instance.***/

    //showExercise is used to toggle .exerciseFormAttributes to collape/show the exercise
    this.showExercise = new ReactiveVar( true );
 });
   
/******************** hangBoardExercise Herlpers ***********************/
Template.hangBoardExercise.helpers({
    showExercise: function(){
        return Template.instance().showExercise.get();
    },
    exerciseFormAttributes: function(){
        return {class: Template.instance().showExercise.get() ? 'form-horizontal collapse in': 'form-horizontal collapse'}
    },
   exerciseButtonSpanAttributes: function(){
       return{class: Template.instance().showExercise.get() ? 'glyphicon glyphicon-chevron-down': 'glyphicon glyphicon-chevron-right'}
    },

    gripOptions: function(){
        return [
        {val: 'jug', label: 'Jug'}, 
        {val: 'lg_edge', label: 'Large Edge'},
        {val: 'med_edge', label: 'Medium Edge'},
        {val: 'sm_edge', label: 'Small Edge'}
        ] 

    },
    //if the value of the select option (this) == the data sent to the template, then populate the selected='...' attribute.
    //see template for usage.
    isPrevGrip: function(){ return Template.instance().data.grip === this.val ? 'selected':'' ;},

    gripOptionAttributes: function(){
       return {
           value: this.val,
           label: this.label
           //selected: Template.instance().data.grip === this.val ? 'selected' : '' //set selected to 'selected' if 
       } 
    }
});

Template.hangBoardExercise.events({
    'click .ex_hider': function(event, template){
        template.showExercise.set( !template.showExercise.get() ); // toggle value of show exercise 
    } ,
   'click .new-set': function(event, template){
       //newSet is set back to false by Template.hangBoardSet.rendere in hang_board_set.js
       Session.set('newSet', true ); 

       //event.preventDefault();
       //console.log(Session.get('newHB_id'));
       exIndex = Template.instance().data.exIndex; 
       //console.log('exIndex:'+exIndex);
       update = {$push:{}}; 
       update.$push['exercises.'+exIndex+'.sets'] = {field:{ach:0, felt:0, goal:0}} 
       //console.log(update); 
       Strength_Hang_Board.update({
           _id: Session.get('newHB_id') } ,
           update,
           function(error){ //callback for handling mongo errors
               if (error){
                   console.log(error);
               }

           });

              console.log('In set event:');
       console.log(Session.get('newSet'));
   }//end new-set event  

});
