//TODO: Remove the next line or your database will always get deleted!
Workouts.remove({});
ARC_Treadwall.remove({});
Strength_Hang_Board.remove({});

if (Workouts.find().count() === 0) {
   warmup_id = ARC_Treadwall.insert({
       user:"tagiHhnyYSnE6JTJx",
       date: new Date(),
       sets:[
           {time:45,
            difficulty: 9 //use YDS for now, omit '5.' so '9' means 5.9
           }, 
           {time:30,
            difficulty: 10},
           {time:25,
            difficulty: 9}],//end sets 
       rests: [10,13]
    });
/*TODO: create a grip-conversion collection that tracks indexes that map to grip types.
 * eventually, let users select the grip they're using from images of hangboards
 * ALSO: the 'user' field should get turned into an actual user id.
 */

    hang_board_id = Strength_Hang_Board.insert({
       user:"tagiHhnyYSnE6JTJx",
       date: new Date(),
       settings:'advanced', 
       weight: 153, 
       exercises:[{
           //exercise 1
           grip:'jug',
           sets:[{ 
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
                   ach:5, 
                   felt: 3
               }
            ]//end sets for first exercise
       }, //end ex_1
       { //start ex_2
           grip:'lg_edge',
           sets:[{ 
                   resist: 0,
                   ach:8,
                   felt: 4
               },
               { 
                   resist:5, 
                   ach:7,
                   felt:6

               },
               { 
                   resist:10, 
                   ach:6,
                   felt: 5
               }]//end sets for second exercise
       }, //end ex_2
       { //start exercise 3
           grip:'med_edge',
           sets:[{ 
                   resist: 0,
                   ach:8 ,
                   felt: 5
               },
               { 
                   resist:5, 
                   ach:7 ,
                   felt: 5
               },
               { 
                   resist:10, 
                   ach:6 ,
                   felt: 5
               }]//end sets for first exercise
       }] //end exercise 3
    }); 

   Workouts.insert({
       user: "tagiHhnyYSnE6JTJx", 
       mode: 'strength', date: new Date() , 
       warmup: {id: warmup_id, from:'arc_Treadwall'}, 
       workout:{id:hang_board_id, from:'strengh_hang_board'}
   });

/* ************************************** Insert Second workout's data.... *****************************/
   warmup_id = ARC_Treadwall.insert({
       user:"tagiHhnyYSnE6JTJx",
       date: new Date(),
       sets:[
           {time:55,
            difficulty: 9 //use YDS for now, omit '5.' so '9' means 5.9
           }, 
           {time:35,
            difficulty: 10},
           {time:55,
            difficulty: 9}],//end sets 
       rests: [15,15]
    });
/*TODO: create a grip-conversion collection that tracks indexes that map to grip types.
 * eventually, let users select the grip they're using from images of hangboards
 * ALSO: the 'user' field should get turned into an actual user id.
 */

    hang_board_id = Strength_Hang_Board.insert({
       user:"tagiHhnyYSnE6JTJx",
       date: new Date(),
       settings:'advanced',  
       weight: 153,
       exercises:[{
           //exercise 1
           grip:'lg_edge',
           sets:[{ 
                   resist: 5,
                   ach:7 ,
                   felt: 5,
                   goal: 7
               },
               { 
                   resist:15, 
                   ach:6  ,
                   felt: 5,
                   goal: 6
                       

               },
               { 
                   resist:25, 
                   ach:5 ,
                   felt: 5 ,
                   goal: 6

               }
            ]//end sets for first exercise
       }, //end ex_1
       { //start ex_2
           grip:'jug',
           sets:[{ 
                   resist: 5,
                   ach:8 ,
                   felt: 5 ,
                   goal: 6

               },
               { 
                   resist:15, 
                   ach:7 ,
                   felt: 5 ,
                   goal: 6

               },
               { 
                   resist:25, 
                   ach:6 ,
                   felt: 5 ,
                   goal: 6


               }]//end sets for second exercise
       }, //end ex_2
       { //start exercise 3
           grip:'sm_edge',
           sets:[{ 
                   resist: 5,
                   ach:8 ,
                   felt: 5 ,
                   goal: 6

               },
               { 
                   resist:15, 
                   ach:7 ,
                   felt: 5 ,
                   goal: 6

               },
               { 
                   resist:25, 
                   ach:6 ,
                   felt: 5 ,
                   goal: 6

               }]//end sets for first exercise
       }] //end exercise 3
    }); 

   Workouts.insert({
       user: "tagiHhnyYSnE6JTJx", 

       mode: 'strength', date: new Date() , 
       warmup: {id: warmup_id, from:'arc_Treadwall'}, 
       workout:{id:hang_board_id, from:'strengh_hang_board'}
   });

/************ START BUILDING USER 2 DATA ****************************/
   warmup_id = ARC_Treadwall.insert({
       user:"Rv8bZYkz8vYDyibRi",
date: new Date(),
       sets:[
           {time:45,
            difficulty: 9 //use YDS for now, omit '5.' so '9' means 5.9
           }, 
           {time:30,
            difficulty: 10},
           {time:25,
            difficulty: 9}],//end sets 
       rests: [10,13]
    });
/*TODO: create a grip-conversion collection that tracks indexes that map to grip types.
 * eventually, let users select the grip they're using from images of hangboards
 * ALSO: the 'user' field should get turned into an actual user id.
 */

    hang_board_id = Strength_Hang_Board.insert({
       user:"Rv8bZYkz8vYDyibRi",
date: new Date(),
       settings:'advanced',
       weight: 150,
       exercises:[{
           //exercise 1
           grip:'jug',
           sets:[{ 
                   resist: 0,
                   ach:7 ,
                   felt: 5 ,
                   goal: 6

               },
               { 
                   resist:10, 
                   ach:6 ,
                   felt: 5 ,
                   goal: 6

               },
               { 
                   resist:20, 
                   ach:5 ,
                   felt: 5 ,
                   goal: 6

               }
            ]//end sets for first exercise
       }, //end ex_1
       { //start ex_2
           grip:'lg_edge',
           sets:[{ 
                   resist: 0,
                   ach:8 ,
                   felt: 5 ,
                   goal: 6

               },
               { 
                   resist:5, 
                   ach:7 ,
                   felt: 5 ,
                   goal: 6

               },
               { 
                   resist:10, 
                   ach:6 ,
                   felt: 5 ,
                   goal: 6

               }]//end sets for second exercise
       }, //end ex_2
       { //start exercise 3
           grip:'sm_edge',
           sets:[{ 
                   resist: 0,
                   ach:8 ,
                   felt: 5 ,
                   goal: 6

               },
               { 
                   resist:5, 
                   ach:7 ,
                   felt: 5 ,
                   goal: 6

               },
               { 
                   resist:10, 
                   ach:6 ,
                   felt: 5 ,
                   goal: 6

               }]//end sets for first exercise
       }] //end exercise 3
    }); 

   Workouts.insert({
       user: "Rv8bZYkz8vYDyibRi", 
       mode: 'strength', date: new Date() , 
       warmup: {id: warmup_id, from:'arc_Treadwall'}, 
       workout:{id:hang_board_id, from:'strengh_hang_board'}
   });

/* ************************************** Insert Second workout's data.... *****************************/
   warmup_id = ARC_Treadwall.insert({
       user: "Rv8bZYkz8vYDyibRi",
date: new Date(),
       sets:[
           {time:55,
            difficulty: 9 //use YDS for now, omit '5.' so '9' means 5.9
           }, 
           {time:35,
            difficulty: 10},
           {time:55,
            difficulty: 9}],//end sets 
       rests: [15,15]
    });
/*TODO: create a grip-conversion collection that tracks indexes that map to grip types.
 * eventually, let users select the grip they're using from images of hangboards
 * ALSO: the 'user' field should get turned into an actual user id.
 */

    hang_board_id = Strength_Hang_Board.insert({
       user: "Rv8bZYkz8vYDyibRi",
date: new Date(),
       settings:'advanced',
       weight: 155,
       exercises:[{
           //exercise 1
           grip:'jug',
           sets:[{ 
                   resist: 5,
                   ach:7 ,
                   felt: 5 ,
                   goal:7 

               },
               { 
                   resist:15, 
                   ach:6 ,
                   felt: 5 ,
                   goal: 6

               },
               { 
                   resist:25, 
                   ach:5 ,
                   felt: 5 ,
                   goal:5 

               }
            ]//end sets for first exercise
       }, //end ex_1
       { //start ex_2
           grip:'lg_edge',
           sets:[{ 
                   resist: 5,
                   ach:8 ,
                   felt: 5 ,
                   goal:7 

               },
               { 
                   resist:15, 
                   ach:7 ,
                   felt: 5 ,
                   goal:6 

               },
               { 
                   resist:25, 
                   ach:6 ,
                   felt: 6 ,
                   goal: 6

               }]//end sets for second exercise
       }, //end ex_2
       { //start exercise 3
           grip:'sm_edge',
           sets:[{ 
                   resist: 5,
                   ach:8 ,
                   felt: 5 ,
                   goal: 6

               },
               { 
                   resist:15, 
                   ach:7 ,
                   felt: 5 ,
                   goal:5 

               },
               { 
                   resist:25, 
                   ach:6 ,
                   felt: 5 ,
                   goal:4 

               }]//end sets for first exercise
       }] //end exercise 3
    }); 

   Workouts.insert({
       user: "Rv8bZYkz8vYDyibRi", 
       mode: 'strength', date: new Date() , 
       warmup: {id: warmup_id, from:'arc_Treadwall'}, 
       workout:{id:hang_board_id, from:'strengh_hang_board'}
   });
}

/*********************** WorkoutModeSettings *******************************/
WorkoutModeSettings.insert({
     /******************   BASE FITNESS     ************************************/
    baseFitness: { },

    /******************   STRENGTH     ************************************/
    strength: {
        hangBoardLevels: {
            beginner:{
               on: 10,
               off: 5,
               repsGoals:[6] },

            intermediate:{
               on: 7,
               off: 3,
               repsGoals:[7,6] //7 reps first set, 6 in second set and 5 in last set
            },

            advanced:{
               on: 7,
               off: 3,
               repsGoals:[7,6,5]}
        }
    },
    /******************   POWER     ************************************/
    power: {},

    /******************   POWER ENDURANCE  ************************************/

    pe: {}


});
