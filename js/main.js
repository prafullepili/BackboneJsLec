var Song = Backbone.Model.extend({
    default: {
        genre: "Jazz"
    }
})
var song = new Song({
    age: 42
});
// Attributes setting

song.set('title', "Blue in Green");
song.set({
    artist: "Miles Davis",
    publishYear: 1959
});
console.log(song.get('age'))
song.unset("age")
console.log(song.has('age'))
console.log(song.toJSON())