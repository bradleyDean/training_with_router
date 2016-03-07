Strength_Hang_Board = new Mongo.Collection('strengh_hang_board');
Strength_Hang_Board.allow({
    insert:function(userId, doc){
        //only allow posting if user is logged in...
        return !! userId; //this deranged syntax converts a truthy value to boolean true or a falsey value (i.e. 0) to false.
    }
});
