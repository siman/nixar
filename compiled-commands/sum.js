// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo, p){
    return repo.commands.push({
      name: "sum",
      desc: "Calc sum",
      input: 'lines',
      output: 'line',
      enabled: true,
      doc: {
        examples: ['']
      },
      compile: function(){
        return function(mask, input){
          return p.sum(
          input);
        };
      }
    });
  };
}).call(this);
