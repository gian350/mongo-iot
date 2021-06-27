const mongoose = require('mongoose');

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clustersanmarcos.mkott.gcp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

(async () => {
  const db = await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  console.log("Db is connected:", db.connection.name);
})();