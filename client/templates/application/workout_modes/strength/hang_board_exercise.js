Template.hangBoardExercise.onCreated(function(){
    /***in this block, 'this.' refers to the current template instance.***/
    //console.log("logging hangBoardExerice onCreeated and 'this' is: " + this);
    //showExercise is used to toggle .exerciseFormAttributes to collape/show the exercise
    this.showExercise = new ReactiveVar( true );
    mysteryObject = this;
    this.data.exercise =Exercises.findOne({ _id: this.data.exId});    
    //console.log(this);

 });

/******************** hangBoardExercise Herlpers ***********************/
Template.hangBoardExercise.helpers({
    sets: function(){
        return Template.instance().data.exercise.sets;
    },
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
    isPrevGrip: function(){ return Template.instance().data.exercise.grip === this.val ? 'selected':'' ;},

    gripOptionAttributes: function(){
       return {
           value: this.val,
           label: this.label
           //selected: Template.instance().data.grip === this.val ? 'selected' : '' //set selected to 'selected' if 
       } 
    }
});

/***************************** EVENTS ***************************************/
Template.hangBoardExercise.events({
    'click .ex_hider': function(event, template){
        template.showExercise.set( !template.showExercise.get() ) // toggle value of show notes
    },
    'click .new_set': function(event, template){
        event.preventDefault();
        console.log("Template.instance().data.exID: "+Template.instance().data.exId);

        
    }
    
});
