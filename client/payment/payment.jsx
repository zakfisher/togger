Template.Payment.events({
  'click .submit-payment': () => {
    console.log('payment submitted')
    Router.go('connect')
  }
})