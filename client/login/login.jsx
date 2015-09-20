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

Template.LoginScreen1.helpers({
  title: 'Togger',
  description: 'Live fashion feedback from stylist women'
})

Template.LoginScreen2.helpers({
  title: 'Togger',
  description: '$5 for 5 minutes'
})

Accounts.onLogin(() => {
  console.log('Successfully logged in!')
  Router.go('home')
})
