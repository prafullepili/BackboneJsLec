var Song = Backbone.Model.extend();
var Animal = Backbone.Model.extend();
var Songs = Backbone.Collection.extend({
    model: [Song, Animal]
});

var songs = new Songs([
    new Song({ title: "Song 1" }),
    new Song({ title: "Song 2" }),
    new Song({ title: "Song 3" }),
    new Animal({ name: "Cat" }),
]);
songs.add(new Song({ title: "Song 4" }))

console.log(songs.models)

var firstSong = songs.at(0)
var songWithIdC2 = songs.get("c2")
songs.remove(firstSong)
songs.remove(songWithIdC2)

console.log(songs.models)