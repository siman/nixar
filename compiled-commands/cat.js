// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo, cat){
    return repo.commands.push({
      name: "cat",
      desc: "Print file, file lines, file created, file modified",
      input: 'nothing',
      output: 'lines',
      enabled: true,
      doc: {
        examples: ['']
      },
      compile: cat.compile
    });
  };
}).call(this);
