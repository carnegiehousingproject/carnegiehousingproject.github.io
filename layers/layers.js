var wms_layers = [];


        var lyr_Satellite_0 = new ol.layer.Tile({
            'title': 'Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_zoningdistrictsandlabels_1 = new ol.format.GeoJSON();
var features_zoningdistrictsandlabels_1 = format_zoningdistrictsandlabels_1.readFeatures(json_zoningdistrictsandlabels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zoningdistrictsandlabels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zoningdistrictsandlabels_1.addFeatures(features_zoningdistrictsandlabels_1);
var lyr_zoningdistrictsandlabels_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zoningdistrictsandlabels_1, 
                style: style_zoningdistrictsandlabels_1,
                popuplayertitle: 'zoning-districts-and-labels',
                interactive: false,
                title: '<img src="styles/legend/zoningdistrictsandlabels_1.png" /> zoning-districts-and-labels'
            });
var format_DEODSites_2 = new ol.format.GeoJSON();
var features_DEODSites_2 = format_DEODSites_2.readFeatures(json_DEODSites_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEODSites_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEODSites_2.addFeatures(features_DEODSites_2);
var lyr_DEODSites_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEODSites_2, 
                style: style_DEODSites_2,
                popuplayertitle: 'DEOD Sites',
                interactive: true,
                title: 'DEOD Sites'
            });
var format_UpliftingParcels_3 = new ol.format.GeoJSON();
var features_UpliftingParcels_3 = format_UpliftingParcels_3.readFeatures(json_UpliftingParcels_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UpliftingParcels_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UpliftingParcels_3.addFeatures(features_UpliftingParcels_3);
var lyr_UpliftingParcels_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UpliftingParcels_3, 
                style: style_UpliftingParcels_3,
                popuplayertitle: 'UpliftingParcels',
                interactive: false,
                title: '<img src="styles/legend/UpliftingParcels_3.png" /> UpliftingParcels'
            });
var format_MapLabels_4 = new ol.format.GeoJSON();
var features_MapLabels_4 = format_MapLabels_4.readFeatures(json_MapLabels_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapLabels_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapLabels_4.addFeatures(features_MapLabels_4);
var lyr_MapLabels_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MapLabels_4, 
                style: style_MapLabels_4,
                popuplayertitle: 'Map Labels',
                interactive: false,
                title: 'Map Labels'
            });
var format_Legend_5 = new ol.format.GeoJSON();
var features_Legend_5 = format_Legend_5.readFeatures(json_Legend_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legend_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Legend_5.addFeatures(features_Legend_5);
var lyr_Legend_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Legend_5, 
                style: style_Legend_5,
                popuplayertitle: 'Legend',
                interactive: false,
    title: 'Legend<br />\
    <img src="styles/legend/Legend_5_0.png" /> <br />\
    <img src="styles/legend/Legend_5_1.png" /> 25/25<br />\
    <img src="styles/legend/Legend_5_2.png" /> Supportive<br />\
    <img src="styles/legend/Legend_5_3.png" /> 25/Supportive<br />\
    <img src="styles/legend/Legend_5_4.png" /> 60/40<br />\
    <img src="styles/legend/Legend_5_5.png" /> Ask Wendy<br />\
    <img src="styles/legend/Legend_5_6.png" /> Leave<br />\
    <img src="styles/legend/Legend_5_7.png" /> Middle Crunch<br />\
    <img src="styles/legend/Legend_5_8.png" /> Social Housing<br />' });

lyr_Satellite_0.setVisible(true);lyr_zoningdistrictsandlabels_1.setVisible(true);lyr_DEODSites_2.setVisible(true);lyr_UpliftingParcels_3.setVisible(true);lyr_MapLabels_4.setVisible(true);lyr_Legend_5.setVisible(true);
var layersList = [lyr_Satellite_0,lyr_zoningdistrictsandlabels_1,lyr_DEODSites_2,lyr_UpliftingParcels_3,lyr_MapLabels_4,lyr_Legend_5];
lyr_zoningdistrictsandlabels_1.set('fieldAliases', {'object_id': 'object_id', 'zoning_clas': 'zoning_clas', 'zoning_cate': 'zoning_cate', 'zoning_dist': 'zoning_dist', 'cd_1_number': 'cd_1_number', 'Max_FSR': 'Max_FSR', 'Max_Height': 'Max_Height', });
lyr_DEODSites_2.set('fieldAliases', {'fid': 'fid', 'civic_numbe': 'civic_numbe', 'streetname': 'streetname', 'zoning_dist': 'zoning_dist', 'Building Name': 'Building Name', 'Build Recommendation': 'Build Recommendation', 'Development Action': 'Development Action', 'Notes': 'Notes', });
lyr_UpliftingParcels_3.set('fieldAliases', {'fid': 'fid', 'civic_numbe': 'civic_numbe', 'streetname': 'streetname', 'tax_coord': 'tax_coord', 'site_id': 'site_id', 'object_id': 'object_id', 'zoning_clas': 'zoning_clas', 'zoning_cate': 'zoning_cate', 'zoning_dist': 'zoning_dist', 'cd_1_number': 'cd_1_number', 'Max_FSR': 'Max_FSR', 'Max_Height': 'Max_Height', });
lyr_MapLabels_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Type': 'Type', });
lyr_Legend_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_zoningdistrictsandlabels_1.set('fieldImages', {'object_id': '', 'zoning_clas': '', 'zoning_cate': '', 'zoning_dist': '', 'cd_1_number': '', 'Max_FSR': '', 'Max_Height': '', });
lyr_DEODSites_2.set('fieldImages', {'fid': '', 'civic_numbe': '', 'streetname': '', 'zoning_dist': '', 'Building Name': '', 'Build Recommendation': '', 'Development Action': '', 'Notes': '', });
lyr_UpliftingParcels_3.set('fieldImages', {'fid': '', 'civic_numbe': '', 'streetname': '', 'tax_coord': '', 'site_id': '', 'object_id': '', 'zoning_clas': '', 'zoning_cate': '', 'zoning_dist': '', 'cd_1_number': '', 'Max_FSR': '', 'Max_Height': '', });
lyr_MapLabels_4.set('fieldImages', {'id': '', 'Name': '', 'Type': '', });
lyr_Legend_5.set('fieldImages', {'id': '', 'Name': '', });
lyr_zoningdistrictsandlabels_1.set('fieldLabels', {'object_id': 'no label', 'zoning_clas': 'no label', 'zoning_cate': 'no label', 'zoning_dist': 'no label', 'cd_1_number': 'no label', 'Max_FSR': 'no label', 'Max_Height': 'no label', });
lyr_DEODSites_2.set('fieldLabels', {'fid': 'no label', 'civic_numbe': 'no label', 'streetname': 'no label', 'zoning_dist': 'no label', 'Building Name': 'no label', 'Build Recommendation': 'no label', 'Development Action': 'no label', 'Notes': 'no label', });
lyr_UpliftingParcels_3.set('fieldLabels', {'fid': 'no label', 'civic_numbe': 'no label', 'streetname': 'no label', 'tax_coord': 'no label', 'site_id': 'no label', 'object_id': 'no label', 'zoning_clas': 'no label', 'zoning_cate': 'no label', 'zoning_dist': 'no label', 'cd_1_number': 'no label', 'Max_FSR': 'no label', 'Max_Height': 'no label', });
lyr_MapLabels_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Type': 'no label', });
lyr_Legend_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Legend_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});