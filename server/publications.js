Meteor.publish('teams', function() {
	return Teams.find({}, { valid: 'true' });
});
Meteor.publish('pokemons', function(teamId) {
	return Pokemons.find({ teamId: teamId });
});