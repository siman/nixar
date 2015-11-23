// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo){
    return repo.commands.push({
      name: "table",
      desc: "Create columns from line based on separator",
      input: 'lines',
      output: 'line',
      enabled: true,
      doc: {
        examples: ['']
      },
      compile: function(){
        var Table;
        Table = require('easy-table');
        return function(mask, lines){
          var t;
          if ((mask != null ? mask : "") === "") {
            return "";
          }
          t = new Table;
          lines.forEach(function(product){
            var ref$;
            if ((ref$ = product.split(mask)) != null) {
              ref$.forEach(function(item, i){
                return t.cell(i, item.replace(/[ ]/g, '_'));
              });
            }
            return t.newRow();
          });
          return t.print();
        };
      }
    });
  };
}).call(this);
