var Song = Backbone.Model.extend({
    initialize: function () {
        console.log("A new song has been created")
    }
})
var song = new Song();
// Attributes setting

song.set('title',"Blue in Green");
song.set({
    artist: "Miles Davis",
    publishYear: 1959
});