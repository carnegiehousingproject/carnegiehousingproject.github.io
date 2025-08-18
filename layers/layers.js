var wms_layers = [];

var format_publicstreets_0 = new ol.format.GeoJSON();
var features_publicstreets_0 = format_publicstreets_0.readFeatures(json_publicstreets_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_publicstreets_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_publicstreets_0.addFeatures(features_publicstreets_0);
var lyr_publicstreets_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_publicstreets_0, 
                style: style_publicstreets_0,
                popuplayertitle: 'public-streets',
                interactive: false,
                title: '<img src="styles/legend/publicstreets_0.png" /> public-streets'
            });

        var lyr_Satellite_1 = new ol.layer.Tile({
            'title': 'Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_zoningdistrictsandlabels_2 = new ol.format.GeoJSON();
var features_zoningdistrictsandlabels_2 = format_zoningdistrictsandlabels_2.readFeatures(json_zoningdistrictsandlabels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zoningdistrictsandlabels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zoningdistrictsandlabels_2.addFeatures(features_zoningdistrictsandlabels_2);
var lyr_zoningdistrictsandlabels_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zoningdistrictsandlabels_2, 
                style: style_zoningdistrictsandlabels_2,
                popuplayertitle: 'zoning-districts-and-labels',
                interactive: false,
                title: '<img src="styles/legend/zoningdistrictsandlabels_2.png" /> zoning-districts-and-labels'
            });
var format_DEODSites_3 = new ol.format.GeoJSON();
var features_DEODSites_3 = format_DEODSites_3.readFeatures(json_DEODSites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEODSites_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEODSites_3.addFeatures(features_DEODSites_3);
var lyr_DEODSites_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEODSites_3, 
                style: style_DEODSites_3,
                popuplayertitle: 'DEOD Sites',
                interactive: true,
                title: 'DEOD Sites'
            });
var format_lllotlines_New_4 = new ol.format.GeoJSON();
var features_lllotlines_New_4 = format_lllotlines_New_4.readFeatures(json_lllotlines_New_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lllotlines_New_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lllotlines_New_4.addFeatures(features_lllotlines_New_4);
var lyr_lllotlines_New_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lllotlines_New_4, 
                style: style_lllotlines_New_4,
                popuplayertitle: 'll — lotlines_New',
                interactive: false,
                title: '<img src="styles/legend/lllotlines_New_4.png" /> ll — lotlines_New'
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
    <img src="styles/legend/Legend_5_2.png" /> 60/40 Tower<br />\
    <img src="styles/legend/Legend_5_3.png" /> BC Housing New Build<br />\
    <img src="styles/legend/Legend_5_4.png" /> DTES CLT<br />\
    <img src="styles/legend/Legend_5_5.png" /> Protect<br />' });
var format_Labels2_6 = new ol.format.GeoJSON();
var features_Labels2_6 = format_Labels2_6.readFeatures(json_Labels2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Labels2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Labels2_6.addFeatures(features_Labels2_6);
var lyr_Labels2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Labels2_6, 
                style: style_Labels2_6,
                popuplayertitle: 'Labels 2',
                interactive: false,
                title: 'Labels 2'
            });

lyr_publicstreets_0.setVisible(true);lyr_Satellite_1.setVisible(true);lyr_zoningdistrictsandlabels_2.setVisible(true);lyr_DEODSites_3.setVisible(true);lyr_lllotlines_New_4.setVisible(true);lyr_Legend_5.setVisible(true);lyr_Labels2_6.setVisible(true);
var layersList = [lyr_publicstreets_0,lyr_Satellite_1,lyr_zoningdistrictsandlabels_2,lyr_DEODSites_3,lyr_lllotlines_New_4,lyr_Legend_5,lyr_Labels2_6];
lyr_publicstreets_0.set('fieldAliases', {'hblock': 'hblock', 'streetuse': 'streetuse', });
lyr_zoningdistrictsandlabels_2.set('fieldAliases', {'object_id': 'object_id', 'zoning_clas': 'zoning_clas', 'zoning_cate': 'zoning_cate', 'zoning_dist': 'zoning_dist', 'cd_1_number': 'cd_1_number', 'Max_FSR': 'Max_FSR', 'Max_Height': 'Max_Height', });
lyr_DEODSites_3.set('fieldAliases', {'fid': 'fid', 'civic_numbe': 'civic_numbe', 'streetname': 'streetname', 'zoning_dist': 'zoning_dist', 'Building Name': 'Building Name', 'Build Recommendation': 'Build Recommendation', 'Development Action': 'Development Action', 'Notes': 'Notes', 'Number': 'Number', });
lyr_lllotlines_New_4.set('fieldAliases', {'fid': 'fid', 'civic_numbe': 'civic_numbe', 'streetname': 'streetname', 'zoning_dist': 'zoning_dist', 'Number': 'Number', });
lyr_Legend_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Labels2_6.set('fieldAliases', {'fid': 'fid', 'Block': 'Block', 'Type': 'Type', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', });
lyr_publicstreets_0.set('fieldImages', {'hblock': '', 'streetuse': '', });
lyr_zoningdistrictsandlabels_2.set('fieldImages', {'object_id': '', 'zoning_clas': '', 'zoning_cate': '', 'zoning_dist': '', 'cd_1_number': '', 'Max_FSR': '', 'Max_Height': '', });
lyr_DEODSites_3.set('fieldImages', {'fid': '', 'civic_numbe': '', 'streetname': '', 'zoning_dist': '', 'Building Name': '', 'Build Recommendation': '', 'Development Action': '', 'Notes': '', 'Number': '', });
lyr_lllotlines_New_4.set('fieldImages', {'fid': '', 'civic_numbe': '', 'streetname': '', 'zoning_dist': '', 'Number': '', });
lyr_Legend_5.set('fieldImages', {'id': '', 'Name': '', });
lyr_Labels2_6.set('fieldImages', {'fid': '', 'Block': '', 'Type': '', 'auxiliary_storage_labeling_labelrotation': 'Hidden', });
lyr_publicstreets_0.set('fieldLabels', {'hblock': 'no label', 'streetuse': 'no label', });
lyr_zoningdistrictsandlabels_2.set('fieldLabels', {'object_id': 'no label', 'zoning_clas': 'no label', 'zoning_cate': 'no label', 'zoning_dist': 'no label', 'cd_1_number': 'no label', 'Max_FSR': 'no label', 'Max_Height': 'no label', });
lyr_DEODSites_3.set('fieldLabels', {'fid': 'hidden field', 'civic_numbe': 'no label', 'streetname': 'no label', 'zoning_dist': 'hidden field', 'Building Name': 'no label', 'Build Recommendation': 'no label', 'Development Action': 'no label', 'Notes': 'no label', 'Number': 'no label', });
lyr_lllotlines_New_4.set('fieldLabels', {'fid': 'no label', 'civic_numbe': 'no label', 'streetname': 'no label', 'zoning_dist': 'no label', 'Number': 'no label', });
lyr_Legend_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Labels2_6.set('fieldLabels', {'fid': 'no label', 'Block': 'no label', 'Type': 'no label', });
lyr_Labels2_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});