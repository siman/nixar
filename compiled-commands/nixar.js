// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo, p){
    return repo.commands.push({
      name: "nixar",
      desc: "Show all commands",
      input: 'nothing',
      output: 'lines',
      enabled: true,
      doc: {
        examples: ['']
      },
      compile: function(){
        return function(skip, mask, callback){
          var transform;
          if ((mask != null ? mask : "") === "") {
            transform = function(c){
              return (c.name + " ").green + c.desc;
            };
            return callback(repo.commands.map(transform));
          } else {
            return callback(repo.commands.filter(function(it){
              return it.name === mask;
            }).map(JSON.stringify));
          }
        };
      }
    });
  };
}).call(this);
