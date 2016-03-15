Template.hangBoardExercise.onCreated(function(){
    /***in this block, 'this.' refers to the current template instance.***/

    //showExercise is used to toggle .exerciseFormAttributes to collape/show the exercise
    this.showExercise = new ReactiveVar( true );
    //used to toggle insertion of newHangBoardSet template into exercise
    this.newSet = new ReactiveVar( false );

    //oldData = Strength_Hang_Board.findOne({},{sort:{date: -1, limit:1} }); 
    //this collection is for building the exercise data for THIS TEMPLATE 
 });
   
    /*
    NewHangBoardExercises.insert({
        date:new Date(),
        exercises: oldData.exercises,
        settings: oldData.settings,
        user: oldData.user,
        weight:oldData.weight
    }); 
   * /
        
        


/******************** hangBoardExercise Herlpers ***********************/
Template.hangBoardExercise.helpers({
    showExercise: function(){
        return Template.instance().showExercise.get();
    },
    newSet: function(){
        return Template.instance().newSet.get();
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
       /*
       event.preventDefault();
       //template.newSet.set( !template.newSet.get() ); 
       //console.log(Template.parentData()['sets']);
       
       Strength_Hang_Board.update( ['sets'].push( { 
                   resist: 0,
                   ach: 0,
                   felt: 0
               },
               { 
                   resist:0, 
                   ach:0 ,
                   felt: 0
               },
               { 
                   resist: 0, 
                   ach: 0, 
                   felt: 0
               });  
               */
       } 

});
