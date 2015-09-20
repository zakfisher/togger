Meteor.startup(() => {
  // code to run on server at startup
  console.log('Server started!')
  console.log('Connected to MongoDB:', process.env.MONGO_URL)
})