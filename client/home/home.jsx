Template.stylist.helpers({
	'rising': (numReviews) => {
		console.log(this.hash.numRevieww);
		if (numReviews == 'Rising Star') return true;
		else return false;
	}
});

Template.stylist.events({
  'click .requestBtn': () => {
    Router.go('payment')
  }
})
