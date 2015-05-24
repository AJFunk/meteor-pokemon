Meteor.startup(function() {
	Restivus.configure({
		useAuth: true,
		prettyJson: true
	});
	Restivus.addCollection(Teams);
	Restivus.addCollection(Pokemons);
});