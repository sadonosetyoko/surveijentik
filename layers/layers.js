var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_JentikDsUjungUjungKecPabelan_2 = new ol.format.GeoJSON();
var features_JentikDsUjungUjungKecPabelan_2 = format_JentikDsUjungUjungKecPabelan_2.readFeatures(json_JentikDsUjungUjungKecPabelan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JentikDsUjungUjungKecPabelan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JentikDsUjungUjungKecPabelan_2.addFeatures(features_JentikDsUjungUjungKecPabelan_2);
var lyr_JentikDsUjungUjungKecPabelan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JentikDsUjungUjungKecPabelan_2, 
                style: style_JentikDsUjungUjungKecPabelan_2,
                interactive: true,
                title: '<img src="styles/legend/JentikDsUjungUjungKecPabelan_2.png" /> Jentik Ds. Ujung Ujung Kec. Pabelan'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_JentikDsUjungUjungKecPabelan_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,lyr_JentikDsUjungUjungKecPabelan_2];
lyr_JentikDsUjungUjungKecPabelan_2.set('fieldAliases', {'Nama': 'Nama', 'Kelompok': 'Kelompok', 'time': 'time', });
lyr_JentikDsUjungUjungKecPabelan_2.set('fieldImages', {'Nama': 'TextEdit', 'Kelompok': 'TextEdit', 'time': 'TextEdit', });
lyr_JentikDsUjungUjungKecPabelan_2.set('fieldLabels', {'Nama': 'no label', 'Kelompok': 'no label', 'time': 'no label', });
lyr_JentikDsUjungUjungKecPabelan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});