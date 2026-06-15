var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_ProportionalSagebrushCover_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Proportional Sagebrush Cover<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_0.png" /> 0.0000<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_1.png" /> 1.4940<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_2.png" /> 2.9881<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_3.png" /> 4.4821<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_4.png" /> 5.9762<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_5.png" /> 7.4702<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_6.png" /> 8.9642<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_7.png" /> 10.4583<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_8.png" /> 11.9523<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_9.png" /> 13.4464<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_10.png" /> 14.9404<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_11.png" /> 16.4344<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_12.png" /> 17.9285<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_13.png" /> 19.4225<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_14.png" /> 20.9165<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_15.png" /> 22.4106<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_16.png" /> 23.9046<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_17.png" /> 25.3987<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_18.png" /> 26.8927<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_19.png" /> 28.3867<br />\
    <img src="styles/legend/ProportionalSagebrushCover_2_20.png" /> 29.8808<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ProportionalSagebrushCover_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13223115.931813, 5042955.592891, -13044163.306163, 5240509.090250]
        })
    });
var lyr_EcologicalConnectivity_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ecological Connectivity </br> <img style="max-width: 100%; max-height: 100%;" src="styles/legend/connectivity-legend.png" />',
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/EcologicalConnectivity_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13225060.261092, 5042028.546999, -13043881.950921, 5242173.051052]
        })
    });
var format_ndowpronghorncorridorsnvmcdermittregion_4 = new ol.format.GeoJSON();
var features_ndowpronghorncorridorsnvmcdermittregion_4 = format_ndowpronghorncorridorsnvmcdermittregion_4.readFeatures(json_ndowpronghorncorridorsnvmcdermittregion_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ndowpronghorncorridorsnvmcdermittregion_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ndowpronghorncorridorsnvmcdermittregion_4.addFeatures(features_ndowpronghorncorridorsnvmcdermittregion_4);
var lyr_ndowpronghorncorridorsnvmcdermittregion_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ndowpronghorncorridorsnvmcdermittregion_4, 
                style: style_ndowpronghorncorridorsnvmcdermittregion_4,
                popuplayertitle: 'ndow-pronghorn-corridors-nv-mcdermitt-region',
                interactive: false,
    title: 'ndow-pronghorn-corridors-nv-mcdermitt-region<br />\
    <img src="styles/legend/ndowpronghorncorridorsnvmcdermittregion_4_0.png" /> Home Range<br />\
    <img src="styles/legend/ndowpronghorncorridorsnvmcdermittregion_4_1.png" /> Home Range (Historic<br />\
    <img src="styles/legend/ndowpronghorncorridorsnvmcdermittregion_4_2.png" /> Seasonal Migration<br />\
    <img src="styles/legend/ndowpronghorncorridorsnvmcdermittregion_4_3.png" /> Seasonal Movement<br />\
    <img src="styles/legend/ndowpronghorncorridorsnvmcdermittregion_4_4.png" /> <br />' });
var format_NDOWLahontanCutthroatTroutOccupiedStreams_5 = new ol.format.GeoJSON();
var features_NDOWLahontanCutthroatTroutOccupiedStreams_5 = format_NDOWLahontanCutthroatTroutOccupiedStreams_5.readFeatures(json_NDOWLahontanCutthroatTroutOccupiedStreams_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDOWLahontanCutthroatTroutOccupiedStreams_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDOWLahontanCutthroatTroutOccupiedStreams_5.addFeatures(features_NDOWLahontanCutthroatTroutOccupiedStreams_5);
var lyr_NDOWLahontanCutthroatTroutOccupiedStreams_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDOWLahontanCutthroatTroutOccupiedStreams_5, 
                style: style_NDOWLahontanCutthroatTroutOccupiedStreams_5,
                popuplayertitle: 'NDOW Lahontan Cutthroat Trout Occupied Streams',
                interactive: false,
                title: '<img src="styles/legend/NDOWLahontanCutthroatTroutOccupiedStreams_5.png" /> NDOW Lahontan Cutthroat Trout Occupied Streams'
            });
var format_OregonLahontanCutthroatTroutOccupiedStreams_6 = new ol.format.GeoJSON();
var features_OregonLahontanCutthroatTroutOccupiedStreams_6 = format_OregonLahontanCutthroatTroutOccupiedStreams_6.readFeatures(json_OregonLahontanCutthroatTroutOccupiedStreams_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OregonLahontanCutthroatTroutOccupiedStreams_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OregonLahontanCutthroatTroutOccupiedStreams_6.addFeatures(features_OregonLahontanCutthroatTroutOccupiedStreams_6);
var lyr_OregonLahontanCutthroatTroutOccupiedStreams_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OregonLahontanCutthroatTroutOccupiedStreams_6, 
                style: style_OregonLahontanCutthroatTroutOccupiedStreams_6,
                popuplayertitle: 'Oregon Lahontan Cutthroat Trout Occupied Streams',
                interactive: false,
                title: '<img src="styles/legend/OregonLahontanCutthroatTroutOccupiedStreams_6.png" /> Oregon Lahontan Cutthroat Trout Occupied Streams'
            });
var format_NDOMInferredLithiumPlacerClaimsperPLSSSection_7 = new ol.format.GeoJSON();
var features_NDOMInferredLithiumPlacerClaimsperPLSSSection_7 = format_NDOMInferredLithiumPlacerClaimsperPLSSSection_7.readFeatures(json_NDOMInferredLithiumPlacerClaimsperPLSSSection_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDOMInferredLithiumPlacerClaimsperPLSSSection_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDOMInferredLithiumPlacerClaimsperPLSSSection_7.addFeatures(features_NDOMInferredLithiumPlacerClaimsperPLSSSection_7);
var lyr_NDOMInferredLithiumPlacerClaimsperPLSSSection_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDOMInferredLithiumPlacerClaimsperPLSSSection_7, 
                style: style_NDOMInferredLithiumPlacerClaimsperPLSSSection_7,
                popuplayertitle: 'NDOM Inferred Lithium Placer Claims per PLSS Section',
                interactive: false,
    title: 'NDOM Inferred Lithium Placer Claims per PLSS Section<br />\
    <img src="styles/legend/NDOMInferredLithiumPlacerClaimsperPLSSSection_7_0.png" /> 1 - 10<br />\
    <img src="styles/legend/NDOMInferredLithiumPlacerClaimsperPLSSSection_7_1.png" /> 11 - 20<br />\
    <img src="styles/legend/NDOMInferredLithiumPlacerClaimsperPLSSSection_7_2.png" /> 21 - 30<br />\
    <img src="styles/legend/NDOMInferredLithiumPlacerClaimsperPLSSSection_7_3.png" /> 31 - 632<br />' });
var format_BLMMLRSActiveMiningClaimsJune2026_8 = new ol.format.GeoJSON();
var features_BLMMLRSActiveMiningClaimsJune2026_8 = format_BLMMLRSActiveMiningClaimsJune2026_8.readFeatures(json_BLMMLRSActiveMiningClaimsJune2026_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLMMLRSActiveMiningClaimsJune2026_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLMMLRSActiveMiningClaimsJune2026_8.addFeatures(features_BLMMLRSActiveMiningClaimsJune2026_8);
var lyr_BLMMLRSActiveMiningClaimsJune2026_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLMMLRSActiveMiningClaimsJune2026_8, 
                style: style_BLMMLRSActiveMiningClaimsJune2026_8,
                popuplayertitle: 'BLM MLRS Active Mining Claims June 2026',
                interactive: true,
                title: '<img src="styles/legend/BLMMLRSActiveMiningClaimsJune2026_8.png" /> BLM MLRS Active Mining Claims June 2026'
            });
var format_MLRSLocatableNoticesJune2026_9 = new ol.format.GeoJSON();
var features_MLRSLocatableNoticesJune2026_9 = format_MLRSLocatableNoticesJune2026_9.readFeatures(json_MLRSLocatableNoticesJune2026_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MLRSLocatableNoticesJune2026_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MLRSLocatableNoticesJune2026_9.addFeatures(features_MLRSLocatableNoticesJune2026_9);
var lyr_MLRSLocatableNoticesJune2026_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MLRSLocatableNoticesJune2026_9, 
                style: style_MLRSLocatableNoticesJune2026_9,
                popuplayertitle: 'MLRS Locatable Notices June 2026',
                interactive: true,
    title: 'MLRS Locatable Notices June 2026<br />\
    <img src="styles/legend/MLRSLocatableNoticesJune2026_9_0.png" /> Authorized<br />\
    <img src="styles/legend/MLRSLocatableNoticesJune2026_9_1.png" /> Pending<br />\
    <img src="styles/legend/MLRSLocatableNoticesJune2026_9_2.png" /> <br />' });
var format_McDermittCalderaBoundary_10 = new ol.format.GeoJSON();
var features_McDermittCalderaBoundary_10 = format_McDermittCalderaBoundary_10.readFeatures(json_McDermittCalderaBoundary_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_McDermittCalderaBoundary_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_McDermittCalderaBoundary_10.addFeatures(features_McDermittCalderaBoundary_10);
var lyr_McDermittCalderaBoundary_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_McDermittCalderaBoundary_10, 
                style: style_McDermittCalderaBoundary_10,
                popuplayertitle: 'McDermitt Caldera Boundary',
                interactive: false,
                title: '<img src="styles/legend/McDermittCalderaBoundary_10.png" /> McDermitt Caldera Boundary'
            });
var group_AOI = new ol.layer.Group({
                                layers: [lyr_McDermittCalderaBoundary_10,],
                                fold: 'open',
                                title: 'AOI'});
var group_Boundaries = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Boundaries'});
var group_Minerals = new ol.layer.Group({
                                layers: [lyr_NDOMInferredLithiumPlacerClaimsperPLSSSection_7,lyr_BLMMLRSActiveMiningClaimsJune2026_8,lyr_MLRSLocatableNoticesJune2026_9,],
                                fold: 'close',
                                title: 'Minerals'});
var group_ImportantFishHabitat = new ol.layer.Group({
                                layers: [lyr_NDOWLahontanCutthroatTroutOccupiedStreams_5,lyr_OregonLahontanCutthroatTroutOccupiedStreams_6,],
                                fold: 'close',
                                title: 'Important Fish Habitat'});
var group_UngulateBigGameCorridors = new ol.layer.Group({
                                layers: [lyr_ndowpronghorncorridorsnvmcdermittregion_4,],
                                fold: 'close',
                                title: 'Ungulate/Big Game Corridors'});
var group_VegetationandTerrestrialHabitat = new ol.layer.Group({
                                layers: [lyr_ProportionalSagebrushCover_2,lyr_EcologicalConnectivity_3,],
                                fold: 'close',
                                title: 'Vegetation and Terrestrial Habitat'});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_GoogleSatelliteHybrid_1,],
                                fold: 'open',
                                title: 'Basemaps'});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_ProportionalSagebrushCover_2.setVisible(false);lyr_EcologicalConnectivity_3.setVisible(false);lyr_ndowpronghorncorridorsnvmcdermittregion_4.setVisible(false);lyr_NDOWLahontanCutthroatTroutOccupiedStreams_5.setVisible(false);lyr_OregonLahontanCutthroatTroutOccupiedStreams_6.setVisible(false);lyr_NDOMInferredLithiumPlacerClaimsperPLSSSection_7.setVisible(false);lyr_BLMMLRSActiveMiningClaimsJune2026_8.setVisible(false);lyr_MLRSLocatableNoticesJune2026_9.setVisible(false);lyr_McDermittCalderaBoundary_10.setVisible(true);
var layersList = [group_Basemaps,group_VegetationandTerrestrialHabitat,group_UngulateBigGameCorridors,group_ImportantFishHabitat,group_Minerals,group_AOI];
lyr_ndowpronghorncorridorsnvmcdermittregion_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'POLY': 'POLY', 'BIOLOGIST': 'BIOLOGIST', 'SPECIES': 'SPECIES', 'TYPE_OF_MO': 'TYPE_OF_MO', 'MOVEMENT_O': 'MOVEMENT_O', 'MOVEMENT_T': 'MOVEMENT_T', 'REASON_FOR': 'REASON_FOR', 'MOVEMENT_P': 'MOVEMENT_P', 'MOVEMENT_S': 'MOVEMENT_S', 'MOVEMENT_D': 'MOVEMENT_D', 'RETURN_SEA': 'RETURN_SEA', 'RETURN_DIR': 'RETURN_DIR', 'PEAK_MOVEM': 'PEAK_MOVEM', 'PEAK_RETUR': 'PEAK_RETUR', 'TOTAL_NUMB': 'TOTAL_NUMB', 'POPULATION': 'POPULATION', 'CURRENT_TR': 'CURRENT_TR', 'HISTORIC_T': 'HISTORIC_T', 'REASONS_FO': 'REASONS_FO', 'CROSSING_E': 'CROSSING_E', 'POTENTIAL_': 'POTENTIAL_', 'NOTES': 'NOTES', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_NDOWLahontanCutthroatTroutOccupiedStreams_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Permanent_': 'Permanent_', 'FDate': 'FDate', 'Resolution': 'Resolution', 'GNIS_ID': 'GNIS_ID', 'GNIS_Name': 'GNIS_Name', 'LengthKM': 'LengthKM', 'ReachCode': 'ReachCode', 'FlowDir': 'FlowDir', 'WBArea_Per': 'WBArea_Per', 'FType': 'FType', 'FCode': 'FCode', 'MainPath': 'MainPath', 'InNetwork': 'InNetwork', 'Visibility': 'Visibility', 'NHDPlusID': 'NHDPlusID', 'VPUID': 'VPUID', 'Enabled': 'Enabled', 'Pop_Name': 'Pop_Name', 'InterCon_N': 'InterCon_N', 'Shape_Leng': 'Shape_Leng', 'Shape__Length': 'Shape__Length', });
lyr_OregonLahontanCutthroatTroutOccupiedStreams_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fhdFtrID': 'fhdFtrID', 'fhdRefID': 'fhdRefID', 'fhdRevDt': 'fhdRevDt', 'fhdONm': 'fhdONm', 'fhdOEnt': 'fhdOEnt', 'fhdSpNm': 'fhdSpNm', 'fhdRun': 'fhdRun', 'fhdLifeHst': 'fhdLifeHst', 'fhdUseTy': 'fhdUseTy', 'fhdBasis': 'fhdBasis', 'fhdStNm': 'fhdStNm', 'fhdGenus': 'fhdGenus', 'fhdSp': 'fhdSp', 'fhdSubSp': 'fhdSubSp', 'fhdOrig': 'fhdOrig', 'fhdProd': 'fhdProd', 'fhdComment': 'fhdComment', 'fhdESH': 'fhdESH', 'fhdBasisD': 'fhdBasisD', 'fhdNMF': 'fhdNMF', 'fhdBasisDt': 'fhdBasisDt', 'fhdBasisNm': 'fhdBasisNm', 'fhdBasisEnt': 'fhdBasisEnt', 'fhdBasisPrj': 'fhdBasisPrj', 'fhdBasisMethod': 'fhdBasisMethod', 'fhdAccess': 'fhdAccess', 'fhdBarrierFtrID': 'fhdBarrierFtrID', 'fhdEndExtent': 'fhdEndExtent', 'SHAPE_Length': 'SHAPE_Length', });
lyr_NDOMInferredLithiumPlacerClaimsperPLSSSection_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Join_Count': 'Join_Count', 'QSecID': 'QSecID', 'Subdivision': 'Subdivision', 'Case_Land_Remarks': 'Case Land Remarks', 'Customer_Id': 'Customer Id', 'LocDate': 'Date of Location', 'CountyForExport': 'CountyForExport', 'OBJECTID_12': 'OBJECTID_1', 'Serial_Number_1': 'Serial Number', 'Lead_File_Number_1': 'Lead File Number', 'Legacy_Lead_File_Number_1': 'Legacy Lead File Number', 'AdminState_1': 'AdminState', 'Case_Disposition_1': 'Case Disposition', 'Acres_1': 'Acres', 'Claim_Name_1': 'Claim Name', 'Date_Of_Location_1': 'Date Of Location', 'Legacy_Serial_Number_1': 'Legacy Serial Number', 'Claim_Type_1': 'Claim Type', 'MTRS_1': 'MTRS', 'Quadrant_1': 'Quadrant', 'County_1': 'County', 'Claimant_1': 'Claimant', 'Next_Pmt_Due_Date_1': 'Next Pmt Due Date', 'Closed_Date_1': 'Closed Date', 'Subdivision_1': 'Subdivision', 'Case_Land_Remarks_1': 'Case Land Remarks', 'Customer_Id_1': 'Customer Id', 'QSecID_12_13': 'QSecID', 'OBJECTID_12_13': 'OBJECTID', 'LocDate_1': 'Date of Location', 'CountyForExport_1': 'CountyForExport', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_BLMMLRSActiveMiningClaimsJune2026_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'CSE_NR': 'CSE_NR', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', });
lyr_MLRSLocatableNoticesJune2026_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'ADMIN_STATE': 'ADMIN_STATE', 'GEO_STATE': 'GEO_STATE', 'BLM_PROD': 'BLM_PROD', 'CSE_DISP': 'CSE_DISP', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'CSE_NR': 'CSE_NR', 'LEG_CSE_NR': 'LEG_CSE_NR', 'CSE_NAME': 'CSE_NAME', 'CMMDTY': 'CMMDTY', 'EFF_DT': 'EFF_DT', 'EXP_DT': 'EXP_DT', 'PRDCNG': 'PRDCNG', 'SALE_DT': 'SALE_DT', 'CUST_NM_SEC': 'CUST_NM_SEC', 'PCT_INT_SEC': 'PCT_INT_SEC', 'INT_REL_SEC': 'INT_REL_SEC', 'CSE_DISP_DT': 'CSE_DISP_DT', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'SF_ID': 'SF_ID', 'Created': 'Created', 'Modified': 'Modified', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_McDermittCalderaBoundary_10.set('fieldAliases', {'FID': 'FID', });
lyr_ndowpronghorncorridorsnvmcdermittregion_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'POLY': 'TextEdit', 'BIOLOGIST': 'TextEdit', 'SPECIES': 'TextEdit', 'TYPE_OF_MO': 'TextEdit', 'MOVEMENT_O': 'TextEdit', 'MOVEMENT_T': 'TextEdit', 'REASON_FOR': 'TextEdit', 'MOVEMENT_P': 'TextEdit', 'MOVEMENT_S': 'TextEdit', 'MOVEMENT_D': 'TextEdit', 'RETURN_SEA': 'TextEdit', 'RETURN_DIR': 'TextEdit', 'PEAK_MOVEM': 'TextEdit', 'PEAK_RETUR': 'TextEdit', 'TOTAL_NUMB': 'TextEdit', 'POPULATION': 'TextEdit', 'CURRENT_TR': 'TextEdit', 'HISTORIC_T': 'TextEdit', 'REASONS_FO': 'TextEdit', 'CROSSING_E': 'TextEdit', 'POTENTIAL_': 'TextEdit', 'NOTES': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_NDOWLahontanCutthroatTroutOccupiedStreams_5.set('fieldImages', {'OBJECTID': 'Range', 'Permanent_': 'TextEdit', 'FDate': 'DateTime', 'Resolution': 'Range', 'GNIS_ID': 'TextEdit', 'GNIS_Name': 'TextEdit', 'LengthKM': 'TextEdit', 'ReachCode': 'TextEdit', 'FlowDir': 'Range', 'WBArea_Per': 'TextEdit', 'FType': 'Range', 'FCode': 'Range', 'MainPath': 'Range', 'InNetwork': 'Range', 'Visibility': 'Range', 'NHDPlusID': 'TextEdit', 'VPUID': 'TextEdit', 'Enabled': 'Range', 'Pop_Name': 'TextEdit', 'InterCon_N': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_OregonLahontanCutthroatTroutOccupiedStreams_6.set('fieldImages', {'OBJECTID': '', 'fhdFtrID': '', 'fhdRefID': '', 'fhdRevDt': '', 'fhdONm': '', 'fhdOEnt': '', 'fhdSpNm': '', 'fhdRun': '', 'fhdLifeHst': '', 'fhdUseTy': '', 'fhdBasis': '', 'fhdStNm': '', 'fhdGenus': '', 'fhdSp': '', 'fhdSubSp': '', 'fhdOrig': '', 'fhdProd': '', 'fhdComment': '', 'fhdESH': '', 'fhdBasisD': '', 'fhdNMF': '', 'fhdBasisDt': '', 'fhdBasisNm': '', 'fhdBasisEnt': '', 'fhdBasisPrj': '', 'fhdBasisMethod': '', 'fhdAccess': '', 'fhdBarrierFtrID': '', 'fhdEndExtent': '', 'SHAPE_Length': '', });
lyr_NDOMInferredLithiumPlacerClaimsperPLSSSection_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Join_Count': 'TextEdit', 'QSecID': 'TextEdit', 'Subdivision': 'TextEdit', 'Case_Land_Remarks': 'TextEdit', 'Customer_Id': 'TextEdit', 'LocDate': 'DateTime', 'CountyForExport': 'TextEdit', 'OBJECTID_12': 'TextEdit', 'Serial_Number_1': 'TextEdit', 'Lead_File_Number_1': 'TextEdit', 'Legacy_Lead_File_Number_1': 'TextEdit', 'AdminState_1': 'TextEdit', 'Case_Disposition_1': 'TextEdit', 'Acres_1': 'TextEdit', 'Claim_Name_1': 'TextEdit', 'Date_Of_Location_1': 'TextEdit', 'Legacy_Serial_Number_1': 'TextEdit', 'Claim_Type_1': 'TextEdit', 'MTRS_1': 'TextEdit', 'Quadrant_1': 'TextEdit', 'County_1': 'TextEdit', 'Claimant_1': 'TextEdit', 'Next_Pmt_Due_Date_1': 'TextEdit', 'Closed_Date_1': 'TextEdit', 'Subdivision_1': 'TextEdit', 'Case_Land_Remarks_1': 'TextEdit', 'Customer_Id_1': 'TextEdit', 'QSecID_12_13': 'TextEdit', 'OBJECTID_12_13': 'TextEdit', 'LocDate_1': 'DateTime', 'CountyForExport_1': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_BLMMLRSActiveMiningClaimsJune2026_8.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'CSE_NR': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', });
lyr_MLRSLocatableNoticesJune2026_9.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'ADMIN_STATE': 'TextEdit', 'GEO_STATE': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_DISP': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'CSE_NR': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'CSE_NAME': 'TextEdit', 'CMMDTY': 'TextEdit', 'EFF_DT': 'DateTime', 'EXP_DT': 'DateTime', 'PRDCNG': 'TextEdit', 'SALE_DT': 'TextEdit', 'CUST_NM_SEC': 'TextEdit', 'PCT_INT_SEC': 'TextEdit', 'INT_REL_SEC': 'TextEdit', 'CSE_DISP_DT': 'DateTime', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'SF_ID': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_McDermittCalderaBoundary_10.set('fieldImages', {'FID': 'TextEdit', });
lyr_ndowpronghorncorridorsnvmcdermittregion_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'POLY': 'hidden field', 'BIOLOGIST': 'hidden field', 'SPECIES': 'hidden field', 'TYPE_OF_MO': 'hidden field', 'MOVEMENT_O': 'hidden field', 'MOVEMENT_T': 'hidden field', 'REASON_FOR': 'hidden field', 'MOVEMENT_P': 'hidden field', 'MOVEMENT_S': 'hidden field', 'MOVEMENT_D': 'hidden field', 'RETURN_SEA': 'hidden field', 'RETURN_DIR': 'hidden field', 'PEAK_MOVEM': 'hidden field', 'PEAK_RETUR': 'hidden field', 'TOTAL_NUMB': 'hidden field', 'POPULATION': 'hidden field', 'CURRENT_TR': 'hidden field', 'HISTORIC_T': 'hidden field', 'REASONS_FO': 'hidden field', 'CROSSING_E': 'hidden field', 'POTENTIAL_': 'hidden field', 'NOTES': 'hidden field', 'BUFF_DIST': 'hidden field', 'ORIG_FID': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_NDOWLahontanCutthroatTroutOccupiedStreams_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Permanent_': 'hidden field', 'FDate': 'hidden field', 'Resolution': 'hidden field', 'GNIS_ID': 'hidden field', 'GNIS_Name': 'hidden field', 'LengthKM': 'hidden field', 'ReachCode': 'hidden field', 'FlowDir': 'hidden field', 'WBArea_Per': 'hidden field', 'FType': 'hidden field', 'FCode': 'hidden field', 'MainPath': 'hidden field', 'InNetwork': 'hidden field', 'Visibility': 'hidden field', 'NHDPlusID': 'hidden field', 'VPUID': 'hidden field', 'Enabled': 'hidden field', 'Pop_Name': 'hidden field', 'InterCon_N': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_OregonLahontanCutthroatTroutOccupiedStreams_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'fhdFtrID': 'hidden field', 'fhdRefID': 'hidden field', 'fhdRevDt': 'hidden field', 'fhdONm': 'hidden field', 'fhdOEnt': 'hidden field', 'fhdSpNm': 'hidden field', 'fhdRun': 'hidden field', 'fhdLifeHst': 'hidden field', 'fhdUseTy': 'hidden field', 'fhdBasis': 'hidden field', 'fhdStNm': 'hidden field', 'fhdGenus': 'hidden field', 'fhdSp': 'hidden field', 'fhdSubSp': 'hidden field', 'fhdOrig': 'hidden field', 'fhdProd': 'hidden field', 'fhdComment': 'hidden field', 'fhdESH': 'hidden field', 'fhdBasisD': 'hidden field', 'fhdNMF': 'hidden field', 'fhdBasisDt': 'hidden field', 'fhdBasisNm': 'hidden field', 'fhdBasisEnt': 'hidden field', 'fhdBasisPrj': 'hidden field', 'fhdBasisMethod': 'hidden field', 'fhdAccess': 'hidden field', 'fhdBarrierFtrID': 'hidden field', 'fhdEndExtent': 'hidden field', 'SHAPE_Length': 'hidden field', });
lyr_NDOMInferredLithiumPlacerClaimsperPLSSSection_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'Join_Count': 'hidden field', 'QSecID': 'hidden field', 'Subdivision': 'hidden field', 'Case_Land_Remarks': 'hidden field', 'Customer_Id': 'hidden field', 'LocDate': 'hidden field', 'CountyForExport': 'hidden field', 'OBJECTID_12': 'hidden field', 'Serial_Number_1': 'hidden field', 'Lead_File_Number_1': 'hidden field', 'Legacy_Lead_File_Number_1': 'hidden field', 'AdminState_1': 'hidden field', 'Case_Disposition_1': 'hidden field', 'Acres_1': 'hidden field', 'Claim_Name_1': 'hidden field', 'Date_Of_Location_1': 'hidden field', 'Legacy_Serial_Number_1': 'hidden field', 'Claim_Type_1': 'hidden field', 'MTRS_1': 'hidden field', 'Quadrant_1': 'hidden field', 'County_1': 'hidden field', 'Claimant_1': 'hidden field', 'Next_Pmt_Due_Date_1': 'hidden field', 'Closed_Date_1': 'hidden field', 'Subdivision_1': 'hidden field', 'Case_Land_Remarks_1': 'hidden field', 'Customer_Id_1': 'hidden field', 'QSecID_12_13': 'hidden field', 'OBJECTID_12_13': 'hidden field', 'LocDate_1': 'hidden field', 'CountyForExport_1': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_BLMMLRSActiveMiningClaimsJune2026_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'header label - visible with data', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'header label - visible with data', 'CSE_NR': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', });
lyr_MLRSLocatableNoticesJune2026_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'ADMIN_STATE': 'hidden field', 'GEO_STATE': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_DISP': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'CSE_NR': 'header label - always visible', 'LEG_CSE_NR': 'hidden field', 'CSE_NAME': 'hidden field', 'CMMDTY': 'inline label - always visible', 'EFF_DT': 'inline label - always visible', 'EXP_DT': 'inline label - always visible', 'PRDCNG': 'hidden field', 'SALE_DT': 'hidden field', 'CUST_NM_SEC': 'hidden field', 'PCT_INT_SEC': 'hidden field', 'INT_REL_SEC': 'hidden field', 'CSE_DISP_DT': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'SF_ID': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_McDermittCalderaBoundary_10.set('fieldLabels', {'FID': 'hidden field', });
lyr_McDermittCalderaBoundary_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});