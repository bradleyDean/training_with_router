Workouts.remove({});
ARC_Treadwall.remove({});
Strength_Hang_Board.remove({});
Exercises.remove({});
TrainingSettings.remove({});
Sets.remove({});

// If there are no workouts in the database already, insert these records...
//if (Workouts.find().count() === 0) {
/******************Build a few sets ****************************************/
    //TODO When implement meteor methods for security, get rid of user field (probably?) for set records since user won't be necessary for finding the sets... maybe that's not true. 
    //how will I know what to publish? Specific records determined by the set_ids stored in exercise records?
    set_1_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 1,
                           ach: 6,
                           goal:20,
                           felt: 1,
                           notes: "Mega juiced to get tottally pitted"
                           });
    set_2_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 2,
                            ach: 6,
                           goal:10,
                           felt: 2
                           });
    set_3_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 3,
                            ach: 6,
                           goal:9,
                           felt: 3
                           });
    set_4_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                            ach: 6,
                           resist: 4,
                           goal:4,
                           felt: 4
                           });
    set_5_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 5,
                            ach: 6,
                           goal:3,
                           felt:5 
                           });
    set_6_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 2,
                            ach: 6,
                           goal:2,
                           felt: 6
                           });
    set_7_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 3,
                            ach: 6,
                           goal:1,
                           felt: 1
                           });
    set_8_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 4,
                            ach: 6,
                           goal:7,
                           felt: 2
                           });
    set_9_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 1,
                            ach: 6,
                           goal:6,
                           felt: 3
                           });

/******************* BUILD 1st Warmup and Insert ***************************/
   warmup1_1_id = Exercises.insert({
                user: "riXsmzmgZbgcs5rdi",
                time:45,
                difficulty: 9,
                rest: 10 //use YDS for now, omit '5.' so '9' means 5.9
                });
   warmup1_2_id =  Exercises.insert({
                user: "riXsmzmgZbgcs5rdi",
                time:30,
                difficulty: 10,
                rest: 14
                });
   warmup1_3_id =  Exercises.insert({
                user: "riXsmzmgZbgcs5rdi",
                time:25,
                difficulty: 9
                });//end sets 

   warmup_id = ARC_Treadwall.insert({
           user: "riXsmzmgZbgcs5rdi",
           date: new Date(2016,4,20),
           sets:[ warmup1_1_id,warmup1_2_id,warmup1_3_id]//end sets 
        });
/********************* End Build and insert 1st warmup******************/

/********************* Build Hang Board Record (and Settings record) ***/
//Settings:
     hb_ex_settings_id = TrainingSettings.insert({
         user:  "riXsmzmgZbgcs5rdi",
         type: 'strengthHangBoard',
         level: 'adv',
         weight: 155
     });
//hangboard exercises. 3 sets each (for now)
     hb_ex_1_id = Exercises.insert({
                                  user: "riXsmzmgZbgcs5rdi", 
                                  grip: 'jug',
                                  sets:
                                      [set_1_id, set_2_id,set_3_id ]
                                   });

     hb_ex_2_id = Exercises.insert({
                                  user:  "riXsmzmgZbgcs5rdi",
                                  grip: 'lg_edge',
                                  sets:
                                      [set_4_id, set_5_id,set_6_id ]

                                   });

     hb_ex_3_id = Exercises.insert({
                                  user:  "riXsmzmgZbgcs5rdi",
                                  grip: 'sm_edge',
                                  sets:
                                      [set_7_id, set_8_id,set_9_id ]



                                  });
//Insert hangboard record
     hang_board_id = Strength_Hang_Board.insert({
           user: "riXsmzmgZbgcs5rdi",
           date: new Date(2016,4,20),
           hang_board_session_number: 4, 
           settings_id: hb_ex_settings_id, 
           exerciseIds:[hb_ex_1_id,hb_ex_2_id,hb_ex_3_id]
     });
//Insert warmup_id and hang_board_id into Workouts collection.
     Workouts.insert({
           user:  "riXsmzmgZbgcs5rdi",
           mode: 'strength', date: new Date(2016,4,20) , 
           warmup: [{
               warmup_id: warmup_id, 
               from:'arc_Treadwall'}], 
           workout:[{
               workout_id: hang_board_id, 
               from:'strengh_hang_board'}]
     }); 



/******************Build a few more sets ****************************************/
    //TODO When implement meteor methods for security, get rid of user field (probably?) for set records since user won't be necessary for finding the sets... maybe that's not true. 
    //how will I know what to publish? Specific records determined by the set_ids stored in exercise records?
    set_1_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 6,
                           ach: 5,
                           goal:19,
                           felt: 2,
                           notes: "Mega juiced to get tottally pitted"
                           });
    set_2_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 5,
                            ach: 4,
                           goal:10,
                           felt: 3
                           });
    set_3_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 3,
                            ach: 6,
                           goal:11,
                           felt: 3
                           });
    set_4_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                            ach: 6,
                           resist: 4,
                           goal:4,
                           felt: 4
                           });
    set_5_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 5,
                            ach: 6,
                           goal:3,
                           felt:5 
                           });
    set_6_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 2,
                            ach: 6,
                           goal:2,
                           felt: 6
                           });
    set_7_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 3,
                            ach: 6,
                           goal:1,
                           felt: 1
                           });
    set_8_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 4,
                            ach: 6,
                           goal:7,
                           felt: 2
                           });
    set_9_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 1,
                            ach: 6,
                           goal:6,
                           felt: 3
                           });

/******************* BUILD 1st Warmup and Insert ***************************/
   warmup1_1_id = Exercises.insert({
                user: "riXsmzmgZbgcs5rdi",
                time:35,
                difficulty: 9,
                rest: 10 //use YDS for now, omit '5.' so '9' means 5.9
                });
   warmup1_2_id =  Exercises.insert({
                user: "riXsmzmgZbgcs5rdi",
                time:30,
                difficulty: 10,
                rest: 15
                });
   warmup1_3_id =  Exercises.insert({
                user: "riXsmzmgZbgcs5rdi",
                time:20,
                difficulty: 8
                });//end sets 

   warmup_id = ARC_Treadwall.insert({
           user: "riXsmzmgZbgcs5rdi",
           date: new Date(2016,4,19), //months are zero-indexed, so may is the 4 here. Use YYYY,M,D
           sets:[ warmup1_1_id,warmup1_2_id,warmup1_3_id]//end sets 
        });
/********************* End Build and insert 1st warmup******************/

/********************* Build Hang Board Record (and Settings record) ***/
//Settings:
     hb_ex_settings_id = TrainingSettings.insert({
         user:  "riXsmzmgZbgcs5rdi",
         type: 'strengthHangBoard',
         level: 'adv',
         weight: 154
     });
//hangboard exercises. 3 sets each (for now)
     hb_ex_1_id = Exercises.insert({
                                  user: "riXsmzmgZbgcs5rdi", 
                                  grip: 'jug',
                                  sets:
                                      [set_1_id, set_2_id,set_3_id ]
                                   });

     hb_ex_2_id = Exercises.insert({
                                  user:  "riXsmzmgZbgcs5rdi",
                                  grip: 'lg_edge',
                                  sets:
                                      [set_4_id, set_5_id,set_6_id ]

                                   });

     hb_ex_3_id = Exercises.insert({
                                  user:  "riXsmzmgZbgcs5rdi",
                                  grip: 'sm_edge',
                                  sets:
                                      [set_7_id, set_8_id,set_9_id ]



                                  });
//Insert hangboard record
     hang_board_id = Strength_Hang_Board.insert({
           user: "riXsmzmgZbgcs5rdi",
           date: new Date(2016,4,19),
           hang_board_session_number: 3, 
           settings_id: hb_ex_settings_id, 
           exerciseIds:[hb_ex_1_id,hb_ex_2_id,hb_ex_3_id]
     });
//Insert warmup_id and hang_board_id into Workouts collection.
     Workouts.insert({
           user:  "riXsmzmgZbgcs5rdi",
           mode: 'strength', date: new Date(2016,4,19) , 
           warmup: [{warmup_id: warmup_id, from:'arc_Treadwall'}], 
           workout:[{workout_id: hang_board_id, from:'strengh_hang_board'}]
     }); 


/******************Build a few more sets ****************************************/
    //TODO When implement meteor methods for security, get rid of user field (probably?) for set records since user won't be necessary for finding the sets... maybe that's not true. 
    //how will I know what to publish? Specific records determined by the set_ids stored in exercise records?
    set_1_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 6,
                           ach: 5,
                           goal:18,
                           felt: 2,
                           notes: "Mega juiced to get tottally pitted"
                           });
    set_2_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 5,
                            ach: 4,
                           goal:4,
                           felt: 3
                           });
    set_3_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 3,
                            ach: 6,
                           goal:3,
                           felt: 3
                           });
    set_4_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                            ach: 6,
                           resist: 4,
                           goal:4,
                           felt: 4
                           });
    set_5_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 5,
                            ach: 6,
                           goal:3,
                           felt:5 
                           });
    set_6_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 2,
                            ach: 6,
                           goal:2,
                           felt: 6
                           });
    set_7_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 3,
                            ach: 6,
                           goal:1,
                           felt: 1
                           });
    set_8_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 4,
                            ach: 6,
                           goal:7,
                           felt: 2
                           });
    set_9_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 1,
                            ach: 6,
                           goal:6,
                           felt: 3
                           });

/******************* BUILD 1st Warmup and Insert ***************************/
   warmup1_1_id = Exercises.insert({
                user: "riXsmzmgZbgcs5rdi",
                time:35,
                difficulty: 9,
                rest: 10 //use YDS for now, omit '5.' so '9' means 5.9
                });
   warmup1_2_id =  Exercises.insert({
                user: "riXsmzmgZbgcs5rdi",
                time:30,
                difficulty: 10,
                rest: 15
                });
   warmup1_3_id =  Exercises.insert({
                user: "riXsmzmgZbgcs5rdi",
                time:20,
                difficulty: 8
                });//end sets 

   warmup_id = ARC_Treadwall.insert({
           user: "riXsmzmgZbgcs5rdi",
           date: new Date(2016,4,18), //months are zero-indexed, so may is the 4 here. Use YYYY,M,D
           sets:[ warmup1_1_id,warmup1_2_id,warmup1_3_id]//end sets 
        });
/********************* End Build and insert 1st warmup******************/

/********************* Build Hang Board Record (and Settings record) ***/
//Settings:
     hb_ex_settings_id = TrainingSettings.insert({
         user:  "riXsmzmgZbgcs5rdi",
         type: 'strengthHangBoard',
         level: 'adv',
         weight: 154
     });
//hangboard exercises. 3 sets each (for now)
     hb_ex_1_id = Exercises.insert({
                                  user: "riXsmzmgZbgcs5rdi", 
                                  grip: 'jug',
                                  sets:
                                      [set_1_id, set_2_id,set_3_id ]
                                   });

     hb_ex_2_id = Exercises.insert({
                                  user:  "riXsmzmgZbgcs5rdi",
                                  grip: 'lg_edge',
                                  sets:
                                      [set_4_id, set_5_id,set_6_id ]

                                   });

     hb_ex_3_id = Exercises.insert({
                                  user:  "riXsmzmgZbgcs5rdi",
                                  grip: 'sm_edge',
                                  sets:
                                      [set_7_id, set_8_id,set_9_id ]



                                  });
//Insert hangboard record
     hang_board_id = Strength_Hang_Board.insert({
           user: "riXsmzmgZbgcs5rdi",
           date: new Date(2016,4,18),
           hang_board_session_number: 2, 
           settings_id: hb_ex_settings_id, 
           exerciseIds:[hb_ex_1_id,hb_ex_2_id,hb_ex_3_id]
     });
//Insert warmup_id and hang_board_id into Workouts collection.
     Workouts.insert({
           user:  "riXsmzmgZbgcs5rdi",
           mode: 'strength', date: new Date(2016,4,18) , 
           warmup: [{warmup_id: warmup_id, from:'arc_Treadwall'}], 
           workout:[{workout_id: hang_board_id, from:'strengh_hang_board'}]
     }); 

/******************Build a few more sets ****************************************/
    //TODO When implement meteor methods for security, get rid of user field (probably?) for set records since user won't be necessary for finding the sets... maybe that's not true. 
    //how will I know what to publish? Specific records determined by the set_ids stored in exercise records?
    set_1_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 6,
                           ach: 5,
                           goal:17,
                           felt: 2,
                           notes: "Mega juiced to get tottally pitted"
                           });
    set_2_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 5,
                            ach: 4,
                           goal:3,
                           felt: 3
                           });
    set_3_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 3,
                            ach: 6,
                           goal:5,
                           felt: 3
                           });
    set_4_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                            ach: 6,
                           resist: 4,
                           goal:4,
                           felt: 4
                           });
    set_5_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 5,
                            ach: 6,
                           goal:3,
                           felt:5 
                           });
    set_6_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 2,
                            ach: 6,
                           goal:2,
                           felt: 6
                           });
    set_7_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 3,
                            ach: 6,
                           goal:1,
                           felt: 1
                           });
    set_8_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 4,
                            ach: 6,
                           goal:7,
                           felt: 2
                           });
    set_9_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 1,
                            ach: 6,
                           goal:6,
                           felt: 3
                           });

/******************* BUILD 1st Warmup and Insert ***************************/
   warmup1_1_id = Exercises.insert({
                user: "riXsmzmgZbgcs5rdi",
                time:35,
                difficulty: 9,
                rest: 10 //use YDS for now, omit '5.' so '9' means 5.9
                });
   warmup1_2_id =  Exercises.insert({
                user: "riXsmzmgZbgcs5rdi",
                time:30,
                difficulty: 10,
                rest: 15
                });
   warmup1_3_id =  Exercises.insert({
                user: "riXsmzmgZbgcs5rdi",
                time:20,
                difficulty: 8
                });//end sets 

   warmup_id = ARC_Treadwall.insert({
           user: "riXsmzmgZbgcs5rdi",
           date: new Date(2016,4,17), //months are zero-indexed, so may is the 4 here. Use YYYY,M,D
           sets:[ warmup1_1_id,warmup1_2_id,warmup1_3_id]//end sets 
        });
/********************* End Build and insert 1st warmup******************/

/********************* Build Hang Board Record (and Settings record) ***/
//Settings:
     hb_ex_settings_id = TrainingSettings.insert({
         user:  "riXsmzmgZbgcs5rdi",
         type: 'strengthHangBoard',
         level: 'adv',
         weight: 154
     });
//hangboard exercises. 3 sets each (for now)
     hb_ex_1_id = Exercises.insert({
                                  user: "riXsmzmgZbgcs5rdi", 
                                  grip: 'jug',
                                  sets:
                                      [set_1_id, set_2_id,set_3_id ]
                                   });

     hb_ex_2_id = Exercises.insert({
                                  user:  "riXsmzmgZbgcs5rdi",
                                  grip: 'lg_edge',
                                  sets:
                                      [set_4_id, set_5_id,set_6_id ]

                                   });

     hb_ex_3_id = Exercises.insert({
                                  user:  "riXsmzmgZbgcs5rdi",
                                  grip: 'sm_edge',
                                  sets:
                                      [set_7_id, set_8_id,set_9_id ]



                                  });
//Insert hangboard record
     hang_board_id = Strength_Hang_Board.insert({
           user: "riXsmzmgZbgcs5rdi",
           date: new Date(2016,4,17),
           hang_board_session_number: 1, 
           settings_id: hb_ex_settings_id, 
           exerciseIds:[hb_ex_1_id,hb_ex_2_id,hb_ex_3_id]
     });
//Insert warmup_id and hang_board_id into Workouts collection.
     Workouts.insert({
           user:  "riXsmzmgZbgcs5rdi",
           mode: 'strength', date: new Date(2016,4,17) , 
           warmup: [{warmup_id: warmup_id, from:'arc_Treadwall'}], 
           workout:[{workout_id: hang_board_id, from:'strengh_hang_board'}]
     }); 
//}//END IF workouts.find === 0 ...

