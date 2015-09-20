Template.Login.helpers({
  templateGestures: {
    'swipeleft .item': (event, templateInstance) => {
      $('#login').carousel('next')
    },
    'swiperight .item': (event, templateInstance) => {
      $('#login').carousel('prev')
    }
  }
});

Accounts.onLogin(() => {
  console.log('Successfully logged in!')
  Router.go('home')
})
