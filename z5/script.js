var mymap = L.map('map').setView([48.15171898861368, 17.07103635408183], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 19,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'YEAH NO NOT IN A PUBLIC REPO'
}).addTo(mymap);

//som pozdvihol abandoned project od https://github.com/oskosk
//original repo: https://github.com/oskosk/Leaflet.Weather
L.control.weather({
    lang: "en",
    units: "metric"
}).addTo(mymap);

var bloky = [{
    "type": "Feature",
    "properties": {
        "name": "FEI Blok A",
        "popupContent": "<span style='text-align: center; display:inline-block'>Blok A<span> <br>Inštitút komunikácie a aplikovanej lingvistiky<br>Ústav jadrového a fyzikálneho inžinierstva"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.07255,48.15183],
            [17.07255,48.15196],
            [17.07387,48.15196],
            [17.07387,48.15183]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "FEI Blok B",
        "popupContent": "<span style='text-align: center; display:inline-block'>Blok B<span> <br>Ústav multimediálnych informačných a komunikačných technológií"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.07300,48.15233],
            [17.07300,48.15247],
            [17.07435,48.15247],
            [17.07435,48.15233]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "FEI Blok C",
        "popupContent": "<span style='text-align: center; display:inline-block'>Blok C<span><br>Ústav informatiky a matematiky<br>Ústav elektroenergetiky a aplikovanej elektroenergetiky"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.07282,48.15297],
            [17.07282,48.15283],
            [17.07387,48.15283],
            [17.07387,48.15297]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "FEI Blok D",
        "popupContent": "<span style='text-align: center; display:inline-block'>Blok D<span><br>Ústav automobilovej mechatroniky<br>Ústav robotiky a kybernetiky"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.07437,48.15333],
            [17.07437,48.15347],
            [17.07320,48.15348],
            [17.07320,48.15334]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "FEI Blok E",
        "popupContent": "<span style='text-align: center; display:inline-block'>Blok E<span><br>Ústav elektroniky a fotoniky"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.0738998980158,48.15398676869729],
            [17.0738998980158,48.15383933439560],
            [17.0725489606290,48.15383933439560],
            [17.0725489606290,48.15398676869729]
        ]]
    }
}];

var busicon = L.icon({
    iconUrl: 'icons/bus.png',
    iconSize: [38, 38],
    iconAnchor: [19,38],
    popupAnchor: [-3, -76]
});

var elekicon = L.icon({
    iconUrl: 'icons/elektricka.png',
    iconSize: [38, 38],
    iconAnchor: [19,38],
    popupAnchor: [-3, -76]
});

L.marker([48.1546, 17.07456], {icon: busicon}).addTo(mymap).bindPopup("Zoo<br><span class=\"busstop green\">31</span> <span class=\"busstop green\">39</span> <span class=\"busstop night\">N31</span>"); //zooo horna
L.marker([48.15412,17.07512], {icon: busicon}).addTo(mymap).bindPopup("Zoo<br><span class=\"busstop green\">31</span> <span class=\"busstop green\">39</span> <spp class=\"busstop night\">N31</span>"); //zoo dolna
L.marker([48.15465,17.07578], {icon: busicon}).addTo(mymap).bindPopup("Zoo<br><span class=\"busstop grey\">30</span> <span class=\"busstop grey\">32</span> <span class=\"busstop grey\">37</span> <span class=\"busstop grey\">92</span> <span class=\"busstop grey\">192</span> <span class=\"busstop night\">N29</span>"); //zoo mlynska na rampe
L.marker([48.15406,17.07692], {icon: busicon}).addTo(mymap).bindPopup("Zoo<br><span class=\"busstop grey\">30</span> <span class=\"busstop grey\">32</span> <span class=\"busstop grey\">37</span> <span class=\"busstop grey\">92</span> <span class=\"busstop grey\">192</span> <span class=\"busstop night\">N29</span>"); //zoo mlynska dole rampa
L.marker([48.14833,17.07203], {icon: busicon}).addTo(mymap).bindPopup("Botanická záhrada<br><span class=\"busstop grey\">29</span> <span class=\"busstop grey\">32</span> <span class=\"busstop night\">N29</span> <span class=\"busstop night\">N33</span> <span class=\"busstop night\">N34</span>"); //botanicka zahrada HORE
L.marker([48.147915,17.072306], {icon: busicon}).addTo(mymap).bindPopup("Botanická záhrada<br><span class=\"busstop grey\">29</span> <span class=\"busstop grey\">32</span> <span class=\"busstop night\">N29</span> <span class=\"busstop night\">N33</span> <span class=\"busstop night\">N34</span>"); //botanicka zahrada
L.marker([48.14813,17.07177], {icon: elekicon}).addTo(mymap).bindPopup("Botanická záhrada<br><span class=\"busstop blue\">29</span> <span class=\"busstop lime\">9</span>"); //botanicka zahrada elektricka left
L.marker([48.14812,17.07247], {icon: elekicon}).addTo(mymap).bindPopup("Botanická záhrada<br><span class=\"busstop blue\">29</span> <span class=\"busstop lime\">9</span>"); //botanicka zahrada elektricka right

L.Routing.control({ //boze toto je 10000x krajsie a lahsie nez mapbox routing ten mi chcel nainstalovat nejaku picovinu a bolo to 300 riadkov dlhe and im like nope
    waypoints: [
        L.latLng(),
        L.latLng(48.15171,17.07320)
    ],
    routeWhileDragging: true,
    autoRoute: true,
    show: true,
    geocoder: L.Control.Geocoder.nominatim()
}).addTo(mymap);

var FEIFarba = {
    "color": "#2353ab",
    "weight": 3,
    "opacity": 0.8
};

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

L.geoJSON(bloky, {
    onEachFeature: onEachFeature,
    style: FEIFarba
}).addTo(mymap);

