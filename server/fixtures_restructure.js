Workouts.remove({});
ARC_Treadwall.remove({});
Strength_Hang_Board.remove({});
Exercises.remove({});
TrainingSettings.remove({});

// If there are no workouts in the database already, insert these records...
if (Workouts.find().count() === 0) {
/******************* BUILD 1st Warmup and Insert ***************************/
   warmup1_1_id = Exercises.insert({
                user:"tagiHhnyYSnE6JTJx",
                time:45,
                difficulty: 9,
                rest: 10 //use YDS for now, omit '5.' so '9' means 5.9
                });
   warmup1_2_id =  Exercises.insert({
                user:"tagiHhnyYSnE6JTJx",
                time:30,
                difficulty: 10,
                rest: 14
                });
   warmup1_3_id =  Exercises.insert({
                user:"tagiHhnyYSnE6JTJx",
                time:25,
                difficulty: 9
                });//end sets 

   warmup_id = ARC_Treadwall.insert({
           user:"tagiHhnyYSnE6JTJx",
           date: new Date(),
           sets:[ warmup1_1_id,warmup1_2_id,warmup1_3_id]//end sets 
        });

/********************* End Build and insert 1st warmup******************/

/********************* Build Hang Board Record (and Settings record) ***/
//Settings:
     hb_ex_settings_id = TrainingSettings.insert({
         user: "tagiHhnyYSnE6JTJx",
         type: 'strengthHangBoard',
         level: 'advanced',
         weight: 153
     });
//hangboard exercises. 3 sets each (for now)
     hb_ex_1_id = Exercises.insert({
                                  user: "tagiHhnyYSnE6JTJx",
                                  grip: 'jug',
                                  sets:
                                      [{ 
                                           resist: 0,
                                           ach:7,
                                           felt: 3
                                       },
                                       { 
                                           resist:10, 
                                           ach:6 ,
                                           felt: 3
                                       },
                                       { 
                                           resist:20, 
                                           ach:5 ,
                                           felt:4 
                                       }]
                                   });

     hb_ex_2_id = Exercises.insert({
                                  user: "tagiHhnyYSnE6JTJx",
                                  grip: 'lg_edge',
                                  sets:
                                      [{ 
                                           resist: 0,
                                           ach:7,
                                           felt: 3
                                       },
                                       { 
                                           resist:10, 
                                           ach:6 ,
                                           felt: 3
                                       },
                                       { 
                                           resist:20, 
                                           ach:5 ,
                                           felt:4 
                                       }]

                                   });

     hb_ex_3_id = Exercises.insert({
                                  user: "tagiHhnyYSnE6JTJx",
                                  grip: 'sm_edge',
                                  sets:
                                      [{ 
                                           resist: 0,
                                           ach:7,
                                           felt: 3
                                       },
                                       { 
                                           resist:10, 
                                           ach:6 ,
                                           felt: 3
                                       },
                                       { 
                                           resist:20, 
                                           ach:5 ,
                                           felt:4 
                                       }]

                                  });
//Insert hangboard record
     hang_board_id = Strength_Hang_Board.insert({
           user:"tagiHhnyYSnE6JTJx",
           date: new Date(),
           settings_id: hb_ex_settings_id, 
           exerciseIds:[hb_ex_1_id,hb_ex_2_id,hb_ex_3_id]
     });
//Insert warmup_id and hang_board_id into Workouts collection.
     Workouts.insert({
           user: "tagiHhnyYSnE6JTJx", 
           mode: 'strength', date: new Date() , 
           warmup: [{warmup_id: warmup_id, from:'arc_Treadwall'}], 
           workout:[{workout_id: hang_board_id, from:'strengh_hang_board'}]
     }); 
}//END IF workouts.find === 0 ...

