Workouts.remove({});
Strength_Hang_Board.remove({});
ARC_Treadwall.remove({});

if (Workouts.find().count() === 0) {
   warmup_id = ARC_Treadwall.insert({
       user:1,
       set_1:{time:45,
           difficulty: 9 //use YDS for now, omit '5.' so '9' means 5.9
       },
       rest_1: {time:10},
       set_2:{time:30,
           difficulty: 10},
       rest_2: {time:12},
       set_3:{time:25,
           difficulty: 9}
   });
/*TODO: create a grip-conversion collection that tracks indexes that map to grip types.
 * eventually, let users select the grip they're using from images of hangboards
 * ALSO: the 'user' field should get turned into an actual user id.
 */

   hang_board_id = Strength_Hang_Board.insert({
       user:1,
       settings:{
           on: 7,
           off: 3,
           set_1_reps: 7,
           set_2_reps: 6,
           set_3_reps: 5,
           weight: 153 //in pounds
       },

       ex_1:{grip:'jug',
           set_1:{ 
               resist: 0,
               ach:7
           },
           set_2:{ 
               resist:10, 
               ach:6
           },
           set_3:{ 
               resist:20, 
               ach:5
           }

       }, //end ex_1
       ex_2:{grip:'MR_1_pad',
           set_1:{ 
               resist: 10,
               ach:7
           },
           set_2:{ 
               resist:20, 
               ach:6
           },
           set_3:{ 
               resist:30, 
               ach:4
           }

       }, //end ex_2
       ex_3:{grip:'sm_semi-closed_crimp',
           set_1:{ 
               resist: 10,
               ach:7
           },
           set_2:{ 
               resist:20, 
               ach:6
           },
           set_3:{ 
               resist:30, 
               ach:4
           }

       } //end ex_3
   }); 

   Workouts.insert({
       user: 1, 
       mode: 'strength', date: new Date() , 
       warmup: {id: warmup_id, from:'arc_Treadwall'}, 
       workout:{id:hang_board_id, from:'strengh_hang_board'}
   });

/* ************************************** Insert Second workout's data.... *****************************/

   warmup_id = ARC_Treadwall.insert({
       user:1,
       set_1:{time:30,
           difficulty: 12 //use YDS for now, omit '5.' so '9' means 5.9
       },
       rest_1: {time:10},
       set_2:{time:30,
           difficulty: 13},
       rest_2: {time:10},
       set_3:{time:30,
           difficulty: 14}
   });

   hang_board_id = Strength_Hang_Board.insert({
       user: 1,

       settings:{
           on: 7,
           off: 3,
           set_1_reps: 7,
           set_2_reps: 6,
           set_3_reps: 5,
           weight: 153 //in pounds
       },

       ex_1:{grip:'jug',
           set_1:{ 
               resist: 0,
               ach:7
           },
           set_2:{ 
               resist:10, 
               ach:6
           },
           set_3:{ 
               resist:20, 
               ach:5
           }

       }, //end ex_1
       ex_2:{
           grip:'MRI',
           set_1:{ 
               resist: 10,
               ach:7
           },
           set_2:{ 
               resist:20, 
               ach:6
           },
           set_3:{ 
               resist:30, 
               ach:4
           }

       }, //end ex_2
       ex_3:{
           grip:'sloper',
           set_1:{ 
               resist: 40,
               ach:7
           },
           set_2:{ 
               resist:50, 
               ach:5
           },
           set_3:{ 
               resist:60, 
               ach:3
           }

       } //end ex_3
   }); 

   Workouts.insert({
       user: 1, mode: 'strength', date: new Date() , 
       warmup: {id: warmup_id, from:'arc_Treadwall'}, 
       workout:{id:hang_board_id, from:'strengh_hang_board'}});

/************ START BUILDING USER 2 DATA ****************************/


   warmup_id = ARC_Treadwall.insert({
       user:2,
       set_1:{time:45,
           difficulty: 9 //use YDS for now, omit '5.' so '9' means 5.9
       },
       rest_1: {time:10},
       set_2:{time:30,
           difficulty: 10},
       rest_2: {time:12},
       set_3:{time:25,
           difficulty: 9}
   });

   hang_board_id = Strength_Hang_Board.insert({
       user:2,
       settings:{
           on: 7,
           off: 3,
           set_1_reps: 7,
           set_2_reps: 6,
           set_3_reps: 5,
           weight: 153 //in pounds
       },

       ex_1:{grip:'jug',
           set_1:{ 
               resist: 0,
               ach:7
           },
           set_2:{ 
               resist:10, 
               ach:6
           },
           set_3:{ 
               resist:20, 
               ach:5
           }

       }, //end ex_1
       ex_2:{grip:'MR_1_pad',
           set_1:{ 
               resist: 10,
               ach:7
           },
           set_2:{ 
               resist:20, 
               ach:6
           },
           set_3:{ 
               resist:30, 
               ach:4
           }

       }, //end ex_2
       ex_3:{grip:'sm_semi-closed_crimp',
           set_1:{ 
               resist: 10,
               ach:7
           },
           set_2:{ 
               resist:20, 
               ach:6
           },
           set_3:{ 
               resist:30, 
               ach:4
           }

       } //end ex_3
   }); 

   Workouts.insert({
       user: 2, 
       mode: 'strength', date: new Date() , 
       warmup: {id: warmup_id, from:'arc_Treadwall'}, 
       workout:{id:hang_board_id, from:'strengh_hang_board'}
   });

/* ************************************** Insert Second workout's data.... *****************************/

   warmup_id = ARC_Treadwall.insert({
       user:2,
       set_1:{time:30,
           difficulty: 12 //use YDS for now, omit '5.' so '9' means 5.9
       },
       rest_1: {time:10},
       set_2:{time:30,
           difficulty: 13},
       rest_2: {time:10},
       set_3:{time:30,
           difficulty: 14}
   });

   hang_board_id = Strength_Hang_Board.insert({
       user: 2,

       settings:{
           on: 7,
           off: 3,
           set_1_reps: 7,
           set_2_reps: 6,
           set_3_reps: 5,
           weight: 153 //in pounds
       },

       ex_1:{grip:'jug',
           set_1:{ 
               resist: 0,
               ach:7
           },
           set_2:{ 
               resist:10, 
               ach:6
           },
           set_3:{ 
               resist:20, 
               ach:5
           }

       }, //end ex_1
       ex_2:{
           grip:'MRI',
           set_1:{ 
               resist: 10,
               ach:7
           },
           set_2:{ 
               resist:20, 
               ach:6
           },
           set_3:{ 
               resist:30, 
               ach:4
           }

       }, //end ex_2
       ex_3:{
           grip:'sloper',
           set_1:{ 
               resist: 40,
               ach:7
           },
           set_2:{ 
               resist:50, 
               ach:5
           },
           set_3:{ 
               resist:60, 
               ach:3
           }

       } //end ex_3
   }); 

   Workouts.insert({
       user: 2, mode: 'strength', date: new Date() , 
       warmup: {id: warmup_id, from:'arc_Treadwall'}, 
       workout:{id:hang_board_id, from:'strengh_hang_board'}});


}
