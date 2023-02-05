var Song = Backbone.Model.extend({
    initialize: function () {
        console.log("A new song has been created")
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