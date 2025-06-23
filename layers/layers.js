var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_POTENCIALESPRODUCTIVOSPOTOSI_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'POTENCIALES PRODUCTIVOS POTOSI<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_0.png" /> AGROPECUARIO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_1.png" /> AGROPECUARIO LIMITADO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_2.png" /> ANDINISMO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_3.png" /> APROVECHAMIENTO FORRAJERO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_4.png" /> CULTIVOS AGRICOLAS<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_5.png" /> CULTIVOS AGRICOLAS LIMITADO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_6.png" /> CULTIVOS AGRICOLAS MERCADO LOCAL<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_7.png" /> EXPLOTACION DE SALMUERAS Y EVAPORITAS<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_8.png" /> EXPLOTACION DE YACIMIENTOS MINEROS<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_9.png" /> FORESTAL MADERABLE<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_10.png" /> GANADERIA<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_11.png" /> GANADERIA BOVINA<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_12.png" /> GANADERIA LIMITADO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_13.png" /> PASTOREO EXTENSIVO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_14.png" /> PASTOREO LIMITADO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_15.png" /> PISCICOLA Y CAPTACION DE AGUA<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_16.png" /> PROTECCION Y VIDA SILVESTRE<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_17.png" /> RAMAJE PARA COMBUSTIBLE<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_18.png" /> TURISMO DE AVENTURA<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_19.png" /> TURISTICO ESCENICO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_20.png" /> VIDA SILVESTRE<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSPOTOSI_1_21.png" /> ZONA  URBANA<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/POTENCIALESPRODUCTIVOSPOTOSI_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7784530.756036, -2624326.938884, -6378100.508078, -1071371.544357]
        })
    });
var format_MUNICIPIOSPOTENCIALESPRODUCTIVOSPOTOSI_2 = new ol.format.GeoJSON();
var features_MUNICIPIOSPOTENCIALESPRODUCTIVOSPOTOSI_2 = format_MUNICIPIOSPOTENCIALESPRODUCTIVOSPOTOSI_2.readFeatures(json_MUNICIPIOSPOTENCIALESPRODUCTIVOSPOTOSI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIOSPOTENCIALESPRODUCTIVOSPOTOSI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOSPOTENCIALESPRODUCTIVOSPOTOSI_2.addFeatures(features_MUNICIPIOSPOTENCIALESPRODUCTIVOSPOTOSI_2);
var lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSPOTOSI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNICIPIOSPOTENCIALESPRODUCTIVOSPOTOSI_2, 
                style: style_MUNICIPIOSPOTENCIALESPRODUCTIVOSPOTOSI_2,
                popuplayertitle: 'MUNICIPIOS POTENCIALES PRODUCTIVOS POTOSI',
                interactive: true,
                title: '<img src="styles/legend/MUNICIPIOSPOTENCIALESPRODUCTIVOSPOTOSI_2.png" /> MUNICIPIOS POTENCIALES PRODUCTIVOS POTOSI'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_POTENCIALESPRODUCTIVOSPOTOSI_1.setVisible(true);lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSPOTOSI_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_POTENCIALESPRODUCTIVOSPOTOSI_1,lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSPOTOSI_2];
lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSPOTOSI_2.set('fieldAliases', {'DEPTO': 'DEPTO', 'PROV': 'PROV', 'MUNICIPIO': 'MUNICIPIO', 'ZONA': 'ZONA', 'POT PROD': 'POT PROD', 'REGION': 'REGION', });
lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSPOTOSI_2.set('fieldImages', {'DEPTO': 'TextEdit', 'PROV': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ZONA': 'TextEdit', 'POT PROD': 'TextEdit', 'REGION': 'TextEdit', });
lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSPOTOSI_2.set('fieldLabels', {'DEPTO': 'inline label - always visible', 'PROV': 'inline label - always visible', 'MUNICIPIO': 'inline label - always visible', 'ZONA': 'inline label - always visible', 'POT PROD': 'inline label - always visible', 'REGION': 'inline label - always visible', });
lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSPOTOSI_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});