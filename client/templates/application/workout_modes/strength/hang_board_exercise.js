Template.hangBoardExercise.onCreated(function(){
    /***in this block, 'this.' refers to the current template instance.***/

    //showExercise is used to toggle .exerciseFormAttributes to collape/show the exercise
    this.showExercise = new ReactiveVar( true );
    //used to toggle insertion of newHangBoardSet template into exercise
    this.newSet = new ReactiveVar( false );

    var HangBoardExercises = new Mongo.Collection(null);
    HangBoardExercises.insert({sets:[]});
});

/******************** hangBoardExercise Herlpers ***********************/
Template.hangBoardExercise.helpers({
    //make reactive vars available to the template through helpers:
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
       event.preventDefault();
       template.newSet.set( !template.newSet.get() ); 
   } 

});
