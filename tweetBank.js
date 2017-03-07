const _ = require('lodash');

var data = [];

function add (name, content) {
  // var i = 0;
  data.push({ name: name, content: content, id: Math.floor(Math.random() * 100000000)});
  // i++;
}

function list () {
  return _.cloneDeep(data);
}
// find({name: 'Scott Ecma'});
function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

module.exports = { add: add, list: list, find: find, random: randArrayEl };

//testing

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (let i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}
