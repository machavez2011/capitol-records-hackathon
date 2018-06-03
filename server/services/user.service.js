const mongodb = require("./../mongodb");
const conn = mongodb.connection;
const ObjectId = mongodb.ObjectId;

module.exports = {
  register: register,
  readById: readById,
  delete: _delete,
  readAll: readAll,
  update: update
};

function readAll(){
  return conn.db().collection("users").find().toArray()
  .then(users=>{
    for(let i=0; i<users.length; i++){
      let user = users[i]
      user._id = user._id.toString()
    }
    return users
  })
}

function _delete(id){
  return conn.db().collection('users').deleteOne({ _id: new ObjectId(id) })
      .then(result=>Promise.resolve())
  
}

function readById(id){
  return conn.db().collection('users').findOne({_id: new ObjectId(id)})
  .then(user=>{
      user._id=user._id.toString()
      return user
  })
}

function update(id, doc) {
  doc._id=new ObjectId(doc._id)
  return conn.db().collection('users').replaceOne({ _id: new ObjectId(id) }, doc)
      .then(result => Promise.resolve())
}

function register(body) {
  return conn
    .db()
    .collection("users")
    .insert(body)
    .then(data => data.insertedIds[0].toString());
}