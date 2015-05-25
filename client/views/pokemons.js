Template.pokemons.helpers({
    pokemons: function() {
        Session.setDefault('counter', 0)
        return Pokemons.find({}, { sort: { name: 1 } });
    },
});

Template.pokemons.events({
    'click #button': function() {
        Meteor.call('addTeam', name);
    }
});