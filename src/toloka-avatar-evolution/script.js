exports.Task = extend(TolokaHandlebarsTask, function (options) {
    TolokaHandlebarsTask.call(this, options);
  }, {
    onRender: function() {
        init(this.getOptions()['task']['input_values']['imageURL'],"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages5.fanpop.com%2Fimage%2Fphotos%2F30200000%2Favatar-avatar-30214841-1440-900.jpg&f=1&nofb=1");
    },
    validate: function(solution) {
          var errors = null;
          // If no words are selected, we show an error message.
          var res = reutrn_results();
          this.setSolutionOutputValue("result1",res[res.length-5]);
          this.setSolutionOutputValue("result2",res[res.length-4]);
          this.setSolutionOutputValue("result3",res[res.length-3]);
          this.setSolutionOutputValue("result4",res[res.length-2]);
          this.setSolutionOutputValue("result5",res[res.length-1]);
  
          console.log(solution);
          submit();
  
          return errors || TolokaHandlebarsTask.prototype.validate.call(this, solution);
      }
  ,
    onDestroy: function() {
      // Task is completed. Global resources can be released (if used)
    }
  
  });
  
  function extend(ParentClass, constructorFunction, prototypeHash) {
    constructorFunction = constructorFunction || function () {};
    prototypeHash = prototypeHash || {};
    if (ParentClass) {
      constructorFunction.prototype = Object.create(ParentClass.prototype);
    }
    for (var i in prototypeHash) {
      constructorFunction.prototype[i] = prototypeHash[i];
    }
    return constructorFunction;
  }