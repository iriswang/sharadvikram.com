var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://sharadmv:sharad@flame.mongohq.com:27041/iamawesome')
var init = function(app) {
  var interface = {
    post : {
      get : function(id, callback) {
        db.find();
      }
    }
  }
  return interface;
}
module.exports = init;
