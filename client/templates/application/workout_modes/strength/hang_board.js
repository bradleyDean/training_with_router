//Temporary session plans 
 $(document).ready(function(){
	 $.plan =  [
			[{'grip':'sm_edge', 'rep_goal':'1','resistance':'2'},
			 {'grip':'sm_edge', 'rep_goal':'2','resistance':'4'},
			 {'grip':'sm_edge', 'rep_goal':'3','resistance':'6'}
			],
			[{'grip':'sm_pinch', 'rep_goal':'2','resistance':'4'},
			 {'grip':'sm_pinch', 'rep_goal':'4','resistance':'8'},
			 {'grip':'sm_pinch', 'rep_goal':'6','resistance':'12'}
			],
			[{'grip':'mri_2pad', 'rep_goal':'3','resistance':'6'},
			 {'grip':'mri_2pad', 'rep_goal':'6','resistance':'12'},
			 {'grip':'mri_2pad', 'rep_goal':'20','resistance':'18'}
			],
			[{'grip':'mri_1pad', 'rep_goal':'4','resistance':'8'},
			 {'grip':'mri_1pad', 'rep_goal':'8','resistance':'16'},
			 {'grip':'mri_1pad', 'rep_goal':'12','resistance':'24'}
			]

		]
	 $.prev_workout =  [
			[{'grip':'lg_edge','rep_ach':'100', 'rep_goal':'1','resistance':'0'},
			 {'grip':'lg_edge','rep_ach':'100', 'rep_goal':'2','resistance':'1'},
			 {'grip':'lg_edge','rep_ach':'100', 'rep_goal':'3','resistance':'2'}
			],
			[{'grip':'sm_pinch','rep_ach':'100', 'rep_goal':'2','resistance':'1'},
			 {'grip':'sm_pinch','rep_ach':'100', 'rep_goal':'4','resistance':'3'},
			 {'grip':'sm_pinch','rep_ach':'100', 'rep_goal':'6','resistance':'5'}
			],
			[{'grip':'mri_2pad','rep_ach':'100', 'rep_goal':'3','resistance':'2'},
			 {'grip':'mri_2pad','rep_ach':'100', 'rep_goal':'6','resistance':'5'},
			 {'grip':'mri_2pad','rep_ach':'100', 'rep_goal':'9','resistance':'8'}
			]
		]



	       });

//Customize 'how did that feel' slider inputs**********************************
var rangeValues = {
	     "1": "Super Easy",
	     "2": "Easy",
	     "3": "Moderate",
	     "4": "Hard",
	     "5":"Brutal",
	     "6":"Too Hard"

	     };

$(function () {
	     $('.felt').on('input change', function () {
		    //alert($(this).val())
		     
		     $(this).prev('label').text(rangeValues[$(this).val()]);
			 });
     });
	
//*****************************************************************************  
//Collapse exercise and flip button symbol.
 $(document).ready(function(){
	$.ex_hider = function(){
			//$('#ex_'+ex_num).collapse('toggle');
			$(this).closest('.duplicate_this').find('form').collapse('toggle');
			if ($(this).children('span').hasClass('glyphicon-chevron-down')){
				$(this).children('span').removeClass('glyphicon-chevron-down');
				$(this).children('span').addClass('glyphicon-chevron-right');

			}
			else{
				$(this).children('span').removeClass('glyphicon-chevron-right');
				$(this).children('span').addClass('glyphicon-chevron-down');


			}
	      };

	      $(".ex_hider").click($.ex_hider );
//*******************************************************************************h
//Collapse notes and flip button symbol.
	      $(".note_hider").click(function(){
			$(this).siblings('.notes').collapse('toggle');
			var $span =  $(this).children('span');
			if ($span.hasClass('glyphicon-chevron-down')){
				$span.removeClass('glyphicon-chevron-down');
				$span.addClass('glyphicon-chevron-left');

			}
			else{
				$span.removeClass('glyphicon-chevron-left');
				$span.addClass('glyphicon-chevron-down');
				//scroll note to top of page (migt want to tweak this a little later)
				$('html,body').animate({
					scrollTop: $span.offset().top
				},500);


			}
	      });

//***************************************************************************
//form to json converter. Goal: {'ex_1':{'set_1':{'grip':'jug', 'rep_goal':'7'...} 'set_2':{'grip':'jug', 'rep_goal':'7'...}... },
//                               'ex_2':{...},... } 
// NOTE: This is not the currently used data format!
	$('#jsonify_button_2').click(function(){//temporarily deactivated (there is no button_2)
			$.hang_board_data = {};
			$('form').each(function(){
				ex_num = $(this).children('.collapse').attr('id').slice(-1);
				
				$.hang_board_data[ex_num] = {};
                                
				var grip = $(this).find("select").val();//the first select input in the form (the grip select)	
			//	alert('grip: '+JSON.stringify(grip.value));
				var set_counter = 1;
				//hang_board_data[ex_num][set_counter]=current_set//initialize set object 

				$(this).find('tr').not('thead tr').each(function(){//skip the header row in the table 'cause no inputs there
					//alert("SET: " + set_counter+" HTML: "+$(this).html() + " row JSON "+$(this).find('input').serialize());
					$.current_set={};

					current_row = $(this).find('input, textarea').serializeArray();
					$.each(current_row,function(i,field){
						$.current_set[field.name]=field.value;
						$.current_set['grip']=grip;

		 			});

					//$.current_set['grip']=grip.value;


					$.hang_board_data[ex_num]['SET_'+set_counter]=$.current_set;
					

					alert("***set***: "+JSON.stringify($.current_set)+"***hang_board_data*** : "+  JSON.stringify($.hang_board_data));
					set_counter += 1;
				
					});
                               set_counter=0;//this line executes when the next form (which contains a new sets) is reached.
			});
	});
//***************************************************************************
//List-centric json converter.data-> [
//                                     [{'grip':'jug', 'rep_goal':'7'...}, {'grip':'jug', 'rep_goal':'6'...},...], // <- exercise 1 set objects
//                                     [{...set1 object....},{...set2 object }, {set3 object}...], // <-exercise 2 set objects
//                                     ....
//                                   ]
	$('#jsonify_button_3').click(function(){

			$.hang_board_data = [];
			$forms = $('form');
			//var num_ex = $forms.length(); //the total number of exercises on the page

			$forms.each(function(){ //FOR EACH EXERCISE FORM...
			        var current_exercise = [];	
				var grip = $(this).find("select").val();//for now, all of the grips are the same within each exercise	


				$(this).find('tr').not('thead tr').each(function(){//skip the header row in the table 'cause no inputs there
					//alert("SET: " + set_counter+" HTML: "+$(this).html() + " row JSON "+$(this).find('input').serialize());
					$.current_set={}; //for collecting data from current row.

					current_row = $(this).find('input, textarea').serializeArray();
					$.each(current_row,function(i,field){
						$.current_set[field.name]=field.value;
						$.current_set['grip']=grip;

					});
					
					current_exercise.push($.current_set);
				});

			$.hang_board_data.push(current_exercise);		
                               set_counter=0;//this line executes when the next form (which contains a new sets) is reached.
			});

	alert(JSON.stringify($.hang_board_data));
	});
//*******************************************************************************

//*****************************************************************************
//Make blank copy of exercise_1
//Then load plan if it exists.
	if (typeof $.blank_ex === 'undefined'){ //the blank exercise html does not exist, so we clone first exercise before it is loaded with data or collapsed 

				$.blank_ex = $('.duplicate_this:first').clone(true,true);//true retains event handlers. Important for collapsing.
				
			} 
		$("#new_ex_button").click(function(){
			
				var $ex = $.blank_ex.clone(true,true); 
				
				ex_num = $('.duplicate_this').length + 1; 

				$ex.find('#ex_hider_1').replaceWith("<button id='ex_hider_"+ex_num+"' type='button' class='ex_hider btn btn-info btn-sm'>"
								    +"Exercise "+ex_num+" <span class='glyphicon glyphicon-chevron-down'></span> </button>");
				//bind the ex_hider function to the ex_hider button because replaced the bound button in the clone on prev line.
				$ex.find('#ex_hider_'+ex_num).bind('click',$.ex_hider);

				$('.container').append($ex);	
				$('html,body').animate({
					scrollTop: $ex.offset().top},500);
			
	       	});
//***************************************FILL FORM IN WITH REST OF PLAN*****************************
//TODO: when adding multiple grips per exercise, this will need to change.
if (typeof $.plan !== 'undefined'){
	//populate the fist exercise (the default one that is automatically loaded)
                $('.grip_selector:first').val($.plan[0][0]['grip']); //NOTE: Assumes all sets use the same grip.TODO: Change this!
		$('.duplicate_this:first').find('.set').each(function(s_index){
	
		$inputs = $(this).find('input');
		
		$inputs.each(function(){
			$(this).attr('value',$.plan[0][s_index][$(this).attr('name')]);  
			
			});
		});
		}//END poplulate fist exercise	
        //populate the remaining exercises

 
// For each remaining exercise in the $.plan
for (ex_i = 1; ex_i < $.plan.length; ex_i++){
	
	//generate a new blank exercise
	var $ex = $.blank_ex.clone(true,true); 

	//populate the exercise with the corresponding plan settings
	
	$ex.find('.grip_selector').val($.plan[ex_i][0]['grip']); //NOTE: Assumes all sets use the same grip.TODO: Change this!
	$ex.find('.set').each(function(s_index){
		$inputs = $(this).find('input');
			$inputs.each(function(){
				$(this).attr('value',$.plan[ex_i][s_index][$(this).attr('name')]);  
				
			});
		});
	//replace old collapse button with correct label
	$ex.find('#ex_hider_1').replaceWith("<button id='ex_hider_"+(ex_i+1)+"' type='button' class='ex_hider btn btn-info btn-sm'>"
								    +"Exercise "+(ex_i+1)+" <span class='glyphicon glyphicon-chevron-down'></span> </button>");

	//bind collapse function to new exercise's button
	$ex.find('#ex_hider_'+(ex_i+1)).bind('click',$.ex_hider);


	//append new exercise to the page
	$('.container').append($ex);	
};	


 });	

