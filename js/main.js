var Song = Backbone.Model.extend({
    validate: function (attrs) {
        console.log(attrs)
        if (!attrs.title) {
            return "Title is required";
        }
    },
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
song.unset("age")

console.log(song.isValid())
console.log(song.unset("title").toJSON())
console.log(song.isValid())
console.log(song.validationError)