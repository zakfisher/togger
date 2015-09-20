Template.Login.helpers({
  title: 'Togger Login'
})

Template.Login.events({
  'submit form': (e) => {
    e.preventDefault()
    var email = $('#email-input').val()
    var password = $('#password-input').val()
    var credentials = {
      email: email,
      password: password
    }
    console.log(credentials)
  }
})

console.log(123)