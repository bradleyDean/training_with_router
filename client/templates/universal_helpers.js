Template.registerHelper('increment', (i) => { 
  return i + 1; 
});

Template.registerHelper('extendContext', function(key,value){
    var cloned_result = _.clone(this);
    cloned_result[key] = value;
    return cloned_result;
});

