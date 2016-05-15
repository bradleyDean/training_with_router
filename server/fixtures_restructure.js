Workouts.remove({});
ARC_Treadwall.remove({});
Strength_Hang_Board.remove({});
Exercises.remove({});
TrainingSettings.remove({});
Sets.remove({});

// If there are no workouts in the database already, insert these records...
if (Workouts.find().count() === 0) {
/******************Build a few sets ****************************************/
    set_1_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 1,
                           ach: 6,
                           goal:7,
                           felt: 1
                           });
    set_2_id = Sets.insert({ user: "riXsmzmgZbgcs5rdi",
                           resist: 2,
ach: 6,
                           goal:6,
                           felt: 2
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
           date: new Date(),
           sets:[ warmup1_1_id,warmup1_2_id,warmup1_3_id]//end sets 
        });

/********************* End Build and insert 1st warmup******************/

/********************* Build Hang Board Record (and Settings record) ***/
//Settings:
     hb_ex_settings_id = TrainingSettings.insert({
         user:  "riXsmzmgZbgcs5rdi",
         type: 'strengthHangBoard',
         level: 'advanced',
         weight: 153
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
           date: new Date(),
           settings_id: hb_ex_settings_id, 
           exerciseIds:[hb_ex_1_id,hb_ex_2_id,hb_ex_3_id]
     });
//Insert warmup_id and hang_board_id into Workouts collection.
     Workouts.insert({
           user:  "riXsmzmgZbgcs5rdi",
           mode: 'strength', date: new Date() , 
           warmup: [{warmup_id: warmup_id, from:'arc_Treadwall'}], 
           workout:[{workout_id: hang_board_id, from:'strengh_hang_board'}]
     }); 
}//END IF workouts.find === 0 ...

