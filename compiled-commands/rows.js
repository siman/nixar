// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo, p, parser){
    return repo.commands.push({
      name: 'rows',
      desc: "Gets specific rows",
      input: 'lines',
      output: 'lines',
      enabled: true,
      doc: {
        examples: ['']
      },
      compile: function(){
        return function(mask, lines){
          var rows;
          rows = parser.numbers(mask, lines.length - 1);
          return lines.filter(function(_, i){
            return rows.indexOf(i) > -1;
          });
        };
      }
    });
  };
}).call(this);
