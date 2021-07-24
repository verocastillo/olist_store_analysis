
createMap(2017,'pet_shop');


function createMap(year,category) {

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
   });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };

  

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [
      -23.5489, -46.6388
      //-7.6,-37.8
    ],
    zoom: 12,
    layers: [streetmap]
  });

  

  d3.csv("static/data/dataset.csv").then(function(geoData) {     
    geoData = geoData.filter(filtroAnio);
    geoData.forEach(element =>      
        agregarMarcador(element.geolocation_lat, element.geolocation_lng, element.payment_value,element.year)
    ); 
    
  });
  
  function filtroAnio(geoData){
    return geoData.year == year && geoData.product_category_name == category;
  }

  function agregarMarcador(lat, lng, mag, elYear){
    
    
    //console.log(lat);
    //console.log(lng);
    //console.log((mag*20)/200000);
    var mag2 = (mag*50)/200000;
    /*var marker = L.marker([lat, lng], {
      opacity: 1
    })*/
    var marker = L.circleMarker([lat,lng], 
      {
          radius:mag2,
          fillColor:getColor(mag),
          color:getColor(mag),
          fillOpacity:0.75
      });
    marker.addTo(myMap);
  }

}
function getColor(value){
    if(value <= 100000)
        return 'DarkSeaGreen';
    else if(value > 100000 && value <=200000)
        return 'green';
    else if(value > 200000 && value <=300000)
        return 'yellow';
    else if(value > 300000 && value <=400000)
        return 'orange';
    else if(value > 400000 && value <=500000)
        return 'coral';
    else if(value > 500000)
        return 'crimson';
}




