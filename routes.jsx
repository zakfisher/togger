Router.route('/', function() {
  document.title = 'Togger - Login'
  this.render('Login')


  // $(document).ready(() => {
  //   $('#login').carousel()
  //   // $('#login').hammer().on('swipeleft', () => {
  //   //   $('#login').carousel('next')
  //   // })
  //   // $('#login').hammer().on('swiperight', () => {
  //   //   $('#login').carousel('prev')
  //   // })
  // })
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