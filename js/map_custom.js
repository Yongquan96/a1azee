// Initialize and add the map
function initMap() {
    var storeLocation = {lat: 1.437560, lng: 103.841664};
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 18,
            center: storeLocation,
            streetViewControl: false,
            styles: [{
                featureType: "poi",
                "stylers": [
                    {visibility: 'off'}
                    ]
            }]
        });
    var contentString = '<div style="text-align: center;"> <img class="my_style_map_logo" src="img/icon/logo.svg"/> A1 AZEE Western Food <br/><a href="https://www.google.com/maps/dir//1+Yishun+Industrial+Street+1,+%2301-12+A+A1+AZEE+WESTERN+FOOD,+Posh+Bizhub,+Singapore+768160/@1.4371064,103.8397502,17z/data=!4m16!1m6!3m5!1s0x31da1460534e0227:0x4600b0cabdc778!2sA1+AZEE+WESTERN+FOOD!8m2!3d1.4371064!4d103.8419389!4m8!1m0!1m5!1m1!1s0x31da1460534e0227:0x4600b0cabdc778!2m2!1d103.8419389!2d1.4371064!3e3">Get directions here</a> </div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker(
        {
            position: storeLocation,
            map: map,
            title: 'We are here'
        });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}
