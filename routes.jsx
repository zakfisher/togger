Router.route('/', function() {
  document.title = 'Togger - Login'
  this.render('Login')
})

Router.route('/home', function() {
  document.title = 'Togger - Home'
  this.render('Home')
})

Router.route('/payment', function() {
document.title = 'Togger - Payment'
  this.render('Payment')
})

Router.route('/connect', function() {
  document.title = 'Togger - Connect'
  this.render('Connect')
  Meteor.setTimeout(() => {
    Router.go('chat')
  }, 1000)
})

Router.route('/chat', function() {
  document.title = 'Togger - Chat'
  this.render('Chat')
})

Router.route('/rate', function() {
  document.title = 'Togger - Rate'
  this.render('Rate')
})

Router.route('/share', function() {
  document.title = 'Togger - Share'
  this.render('Share')
})