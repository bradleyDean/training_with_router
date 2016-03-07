ARC_Treadwall = new Mongo.Collection('arc_Treadwall');
ARC_Treadwall.allow({
    insert:function(userId, doc){
        //only allow posting if user is logged in...
        return !! userId; //this deranged syntax converts a truthy value to boolean true or a falsey value (i.e. 0) to false.
    }
});
