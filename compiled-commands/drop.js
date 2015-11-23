// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo, p){
    return repo.commands.push({
      name: 'drop',
      desc: "Drops lines",
      input: 'lines',
      output: 'lines',
      enabled: true,
      compile: function(){
        return function(mask, lines){
          var count, ref$, ref1$;
          count = (ref$ = (ref1$ = mask.match('[0-9]+')) != null ? ref1$[0] : void 8) != null ? ref$ : 1;
          if (mask.indexOf('last') > -1) {
            return p.reverse(
            p.drop(count)(
            p.reverse(
            lines)));
          } else {
            return p.drop(count)(
            lines);
          }
        };
      }
    });
  };
}).call(this);
