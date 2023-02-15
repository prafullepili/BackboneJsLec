var Song = Backbone.Model.extend();
var SongView = Backbone.View.extend({
    render: function () {
        var template = _.template($("#songTemplate").html());
        // console.log(template({ title: "Hello" }))
        var html = template(this.model.toJSON());
        this.$el.html(html);

        return this;
    }
});

var song = new Song({ title: "Blue in Green", plays: 10000 });

var songView = new SongView({ el: "#container", model: song });
songView.render();