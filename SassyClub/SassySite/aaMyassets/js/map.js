jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);
        
    // Multiple Markers
    var markers = [
        ['Scottsdale, Arizona', 33.494170, -111.926052],
		['Los Angeles, California', 34.052234, -118.243685],
		['San Francisco, California', 37.774929, -122.419416],
		['Toronto, Canada', 43.653226, -79.383184],
		['Hartford, Connecticut', 41.763711, -72.685093],
		['Palm Beach, Florida', 26.705621, -80.03643],
		['Atlanta, Georgia', 33.748995, -84.387982],
		['Chicago, Illinois', 41.878114, -87.629798],
		['Lexington, Kentucky', 38.040584, -84.503716],
		['Baton Rouge, Louisiana', 30.458283, -91.14032],
		['Livonia, Michigan', 42.368370, -83.35271],
		['Jackson, Mississippi', 32.298757, -90.18481],
		['New York City, New York', 40.712775, -74.005973],
		['Raleigh, North Carolina', 35.779590, -78.638179],
		['Charlotte, North Carolina', 35.227087, -80.843127],
		['Nashville, Tennessee', 36.162664, -86.781602],
		['Austin, Texas', 30.267153, -97.743061],
		['Dallas, Texas', 32.776664, -96.796988],
		['Houston, Texas', 29.760427, -95.369803],
		['Lubbock, Texas', 33.577863, -101.855166],
		['Virginia Beach, Virginia', 36.852926, -75.977985]
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Autin</h3>' +
        '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +        '</div>'],
        ['<div class="info_content">' +
        '<h3>San Francisco</h3>' +
        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>New York City</h3>' +
        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Seattle</h3>' +
        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
        '</div>']
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
    
}