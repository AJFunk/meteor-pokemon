Meteor.methods({
	addTeam: function() {
		Session.set('teams', teams._id);
		console.log(this.teams);
		Teams.insert({
			name: "",
			valid: 'true'
		});
		Pokemons.insert({
			teamId: teams._id,
			name: pokemons.name
		});
	}
});

