

var myMap;

// Event handlers
d3.select("#select_category").on("change",runEnter);

/*function initializeMap(){
  var inputYear = d3.select("#select_year").property("value");
  var inputCategory = d3.select("#select_category").property("value");
  createMap(inputYear, inputCategory);
}*/

function createMap(year,category) {
  
  
  // Define streetmap and darkmap layers
  var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
   });
  
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });

  

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };

  
  if (myMap != undefined) { 
    myMap.off();
    myMap.remove(); 
  }
  // Create our map, giving it the streetmap and earthquakes layers to display on load
   myMap = L.map("map", {
    center: [
      //-23.5489, -46.6388
      -10,-55
    ],
    zoom: 3,
    layers: [streetmap]
  });

  

  d3.csv("static/data/dataset2.csv").then(function(geoData) {     
    geoData = geoData.filter(filtroAnio);
    
    geoData.forEach(element =>      
        agregarMarcador(element.geolocation_lat, element.geolocation_lng, element.payment_value)
    ); 
    
  });
  
  function filtroAnio(geoData){
    if(year == 0 && category == 'all')
      return
    else if(year == 0) 
      return geoData.product_category_name == category;
    else if(category == 'all')
      return geoData.year == year;
    else
      return geoData.year == year && geoData.product_category_name == category;
  }

  function agregarMarcador(lat, lng, mag){
       
    var mag2 = (mag*50)/200000;
    
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
    if(value <= 500)
        return 'Aqua';
    else if(value > 500 && value <=5000)
        return 'Fuchsia';
    else if(value > 5000 && value <=50000)
        return 'Blue';
    else if(value > 50000 && value <=80000)
        return 'Navy';
    else if(value > 80000 && value <=100000)
        return 'Teal';
    else if(value > 100000)
        return 'Purple';
}




