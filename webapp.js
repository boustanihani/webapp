if (Meteor.isClient) {

  Template.registerHelper('isOnline', function() {

    return Meteor.status().connected;
  });
}
