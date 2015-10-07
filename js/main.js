/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/



$(document).ready(function(){
	$('#myTabs a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	
	$('#myCarousel').carousel({
		interval: 3000
		});

	$('#myCarousel2').carousel({
		interval: 3000
	});
	
/*
    This is an example implementation of the Leaflet.js map to fulfill the
    requirements for this assignment. This is provided as an aid to help you get
    unstuck. This example does not implement the full set of requirements, so
    you cannot just copy/paste this example into your `main.js` file to
    successfully complete the assignment.

    Use this to learn and help yourself get unstuck. There is confusing
    info online about the map layers, so these examples are known to work with
    no additional registration or joining of third-party services.
*/

	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

	var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
		subdomains: ['otile1','otile2','otile3','otile4']
	});

	var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
		subdomains: ['otile1','otile2','otile3','otile4']
	});

	var mapLayers = {
		"Satellite": satLayer,
		"Map View": drawLayer,
		"Open Street Maps": osm
	};

	var map = L.map('map-container').setView([46.852, -121.760], 13);

	L.control.layers(mapLayers).addTo(map);
	satLayer.addTo(map);

	var rainierMtnMarker = L.marker([46.852, -121.760]).addTo(map);
	rainierMtnMarker.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.");
	
	var spaceNeedleMarker = L.marker([47.6205063,-122.3492774]).addTo(map);
	spaceNeedleMarker.bindPopup("<b>Welcome to the Space Needle Tower!</b><br>This tower is 605 feet high.");
	
	var seattleUnvMarker = L.marker([47.6095159,-122.316813]).addTo(map);
	seattleUnvMarker.bindPopup("<b>Welcome to Seattle University!</b><br>This is my school, yay!!");
	
	
// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.

	
// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)
	


});