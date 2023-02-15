var Vehicle = Backbone.Model.extend({
    idAttribute: "registrationNumber",
    urlRoot: "/api/vehicles",
    validate: function (attrs) {
        if (!attrs.registrationNumber) {
            return "Vehicle is not valid";
        }
    },
    start: function () {
        console.log("Vehicle started");
    }
});

// collections
var Vehicles = Backbone.Collection.extend({
    Model: Vehicle
});


var Car = Vehicle.extend({
    start: function () {
        console.log("Car with registration number " + this.get("registrationNumber") + " started.");
    }
});


var VehicleView = Backbone.View.extend({
    tagNumber: "li",
    className: "vehicle",

    events: {
        "click .delete": "onDelete",
    },

    render: function () {
        var source = $('#vehicleTemplate').html();
        var template = _.template(source);

        this.$el.html(template(this.model.toJSON()));
        this.$el.attr("data-color", this.model.get("color"));

        return this;
    },
    onDelete: function () {
        this.remove();
    }
});


var VehiclesView = Backbone.View.extend({
    tagName: "ul",
    render: function () {
        this.collection.each(function (vehicle) {
            var vehicleView = new VehicleView({ model: vehicle });
            this.$el.append(vehicleView.render().$el);
        }, this);
        return this;
    }
});


var vehicles = new Vehicles([
    new Car({ registrationNumber: "XL1885", color: "Blue" }),
    new Car({ registrationNumber: "XL1825", color: "Blue" }),
    new Car({ registrationNumber: "XL1835", color: "Gray" })
]);


var vehiclesView = new VehiclesView({ collection: vehicles });
$("#container").html(vehiclesView.render().$el);