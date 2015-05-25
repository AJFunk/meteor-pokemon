Meteor.methods({
	addTeam: function(name) {
		Teams.insert({
			name: name,
			modifiedAt: new Date()
		})
	}
});

