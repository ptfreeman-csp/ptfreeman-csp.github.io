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
var format_OregonDFWLahontanCutthroatTroutOccupiedStreams_2 = new ol.format.GeoJSON();
var features_OregonDFWLahontanCutthroatTroutOccupiedStreams_2 = format_OregonDFWLahontanCutthroatTroutOccupiedStreams_2.readFeatures(json_OregonDFWLahontanCutthroatTroutOccupiedStreams_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OregonDFWLahontanCutthroatTroutOccupiedStreams_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OregonDFWLahontanCutthroatTroutOccupiedStreams_2.addFeatures(features_OregonDFWLahontanCutthroatTroutOccupiedStreams_2);
var lyr_OregonDFWLahontanCutthroatTroutOccupiedStreams_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OregonDFWLahontanCutthroatTroutOccupiedStreams_2, 
                style: style_OregonDFWLahontanCutthroatTroutOccupiedStreams_2,
                popuplayertitle: 'Oregon DFW Lahontan Cutthroat Trout Occupied Streams',
                interactive: false,
                title: '<img src="styles/legend/OregonDFWLahontanCutthroatTroutOccupiedStreams_2.png" /> Oregon DFW Lahontan Cutthroat Trout Occupied Streams'
            });
var format_NDOWLahontanCutthroatTroutOccupiedStreams_3 = new ol.format.GeoJSON();
var features_NDOWLahontanCutthroatTroutOccupiedStreams_3 = format_NDOWLahontanCutthroatTroutOccupiedStreams_3.readFeatures(json_NDOWLahontanCutthroatTroutOccupiedStreams_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDOWLahontanCutthroatTroutOccupiedStreams_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDOWLahontanCutthroatTroutOccupiedStreams_3.addFeatures(features_NDOWLahontanCutthroatTroutOccupiedStreams_3);
var lyr_NDOWLahontanCutthroatTroutOccupiedStreams_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDOWLahontanCutthroatTroutOccupiedStreams_3, 
                style: style_NDOWLahontanCutthroatTroutOccupiedStreams_3,
                popuplayertitle: 'NDOW Lahontan Cutthroat Trout Occupied Streams',
                interactive: false,
                title: '<img src="styles/legend/NDOWLahontanCutthroatTroutOccupiedStreams_3.png" /> NDOW Lahontan Cutthroat Trout Occupied Streams'
            });
var lyr_EcologicalConnectivityCSP2023_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ecological Connectivity </br> <img style="max-width: 100%; max-height: 100%;" src="styles/legend/connectivity-legend.png" />',
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/EcologicalConnectivityCSP2023_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13225060.261092, 5042028.546999, -13043881.950921, 5242173.051052]
        })
    });
var format_NDOWMappedPronghornHabitatandCorridors_5 = new ol.format.GeoJSON();
var features_NDOWMappedPronghornHabitatandCorridors_5 = format_NDOWMappedPronghornHabitatandCorridors_5.readFeatures(json_NDOWMappedPronghornHabitatandCorridors_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDOWMappedPronghornHabitatandCorridors_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDOWMappedPronghornHabitatandCorridors_5.addFeatures(features_NDOWMappedPronghornHabitatandCorridors_5);
var lyr_NDOWMappedPronghornHabitatandCorridors_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDOWMappedPronghornHabitatandCorridors_5, 
                style: style_NDOWMappedPronghornHabitatandCorridors_5,
                popuplayertitle: 'NDOW Mapped Pronghorn Habitat and Corridors',
                interactive: false,
    title: 'NDOW Mapped Pronghorn Habitat and Corridors<br />\
    <img src="styles/legend/NDOWMappedPronghornHabitatandCorridors_5_0.png" /> Home Range<br />\
    <img src="styles/legend/NDOWMappedPronghornHabitatandCorridors_5_1.png" /> Seasonal Migration<br />\
    <img src="styles/legend/NDOWMappedPronghornHabitatandCorridors_5_2.png" /> Seasonal Movement<br />' });
var format_ORDFWPriorityWildlifeConnectivityAreas_6 = new ol.format.GeoJSON();
var features_ORDFWPriorityWildlifeConnectivityAreas_6 = format_ORDFWPriorityWildlifeConnectivityAreas_6.readFeatures(json_ORDFWPriorityWildlifeConnectivityAreas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ORDFWPriorityWildlifeConnectivityAreas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ORDFWPriorityWildlifeConnectivityAreas_6.addFeatures(features_ORDFWPriorityWildlifeConnectivityAreas_6);
var lyr_ORDFWPriorityWildlifeConnectivityAreas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ORDFWPriorityWildlifeConnectivityAreas_6, 
                style: style_ORDFWPriorityWildlifeConnectivityAreas_6,
                popuplayertitle: 'OR DFW Priority Wildlife Connectivity Areas',
                interactive: false,
    title: 'OR DFW Priority Wildlife Connectivity Areas<br />\
    <img src="styles/legend/ORDFWPriorityWildlifeConnectivityAreas_6_0.png" /> Enhance/Maintain<br />\
    <img src="styles/legend/ORDFWPriorityWildlifeConnectivityAreas_6_1.png" /> Protect<br />\
    <img src="styles/legend/ORDFWPriorityWildlifeConnectivityAreas_6_2.png" /> Restore<br />' });
var format_OregonDFWConservationOpportunityAreas_7 = new ol.format.GeoJSON();
var features_OregonDFWConservationOpportunityAreas_7 = format_OregonDFWConservationOpportunityAreas_7.readFeatures(json_OregonDFWConservationOpportunityAreas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OregonDFWConservationOpportunityAreas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OregonDFWConservationOpportunityAreas_7.addFeatures(features_OregonDFWConservationOpportunityAreas_7);
var lyr_OregonDFWConservationOpportunityAreas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OregonDFWConservationOpportunityAreas_7, 
                style: style_OregonDFWConservationOpportunityAreas_7,
                popuplayertitle: 'Oregon DFW Conservation Opportunity Areas',
                interactive: true,
                title: '<img src="styles/legend/OregonDFWConservationOpportunityAreas_7.png" /> Oregon DFW Conservation Opportunity Areas'
            });
var format_TECHINDUSTRIESLTD_8 = new ol.format.GeoJSON();
var features_TECHINDUSTRIESLTD_8 = format_TECHINDUSTRIESLTD_8.readFeatures(json_TECHINDUSTRIESLTD_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TECHINDUSTRIESLTD_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TECHINDUSTRIESLTD_8.addFeatures(features_TECHINDUSTRIESLTD_8);
var lyr_TECHINDUSTRIESLTD_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TECHINDUSTRIESLTD_8, 
                style: style_TECHINDUSTRIESLTD_8,
                popuplayertitle: 'TECH INDUSTRIES LTD',
                interactive: false,
                title: '<img src="styles/legend/TECHINDUSTRIESLTD_8.png" /> TECH INDUSTRIES LTD'
            });
var format_ROCKYMOUNTAINPROSPECTORSLLC_9 = new ol.format.GeoJSON();
var features_ROCKYMOUNTAINPROSPECTORSLLC_9 = format_ROCKYMOUNTAINPROSPECTORSLLC_9.readFeatures(json_ROCKYMOUNTAINPROSPECTORSLLC_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROCKYMOUNTAINPROSPECTORSLLC_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROCKYMOUNTAINPROSPECTORSLLC_9.addFeatures(features_ROCKYMOUNTAINPROSPECTORSLLC_9);
var lyr_ROCKYMOUNTAINPROSPECTORSLLC_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROCKYMOUNTAINPROSPECTORSLLC_9, 
                style: style_ROCKYMOUNTAINPROSPECTORSLLC_9,
                popuplayertitle: 'ROCKY MOUNTAIN PROSPECTORS LLC',
                interactive: false,
                title: '<img src="styles/legend/ROCKYMOUNTAINPROSPECTORSLLC_9.png" /> ROCKY MOUNTAIN PROSPECTORS LLC'
            });
var format_RICKKEELMCCLINTICKLVGTRUST_10 = new ol.format.GeoJSON();
var features_RICKKEELMCCLINTICKLVGTRUST_10 = format_RICKKEELMCCLINTICKLVGTRUST_10.readFeatures(json_RICKKEELMCCLINTICKLVGTRUST_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RICKKEELMCCLINTICKLVGTRUST_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RICKKEELMCCLINTICKLVGTRUST_10.addFeatures(features_RICKKEELMCCLINTICKLVGTRUST_10);
var lyr_RICKKEELMCCLINTICKLVGTRUST_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RICKKEELMCCLINTICKLVGTRUST_10, 
                style: style_RICKKEELMCCLINTICKLVGTRUST_10,
                popuplayertitle: 'RICK & KEEL MCCLINTICK LVG TRUST',
                interactive: false,
                title: '<img src="styles/legend/RICKKEELMCCLINTICKLVGTRUST_10.png" /> RICK & KEEL MCCLINTICK LVG TRUST'
            });
var format_OREGONENERGYLLC_11 = new ol.format.GeoJSON();
var features_OREGONENERGYLLC_11 = format_OREGONENERGYLLC_11.readFeatures(json_OREGONENERGYLLC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OREGONENERGYLLC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OREGONENERGYLLC_11.addFeatures(features_OREGONENERGYLLC_11);
var lyr_OREGONENERGYLLC_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OREGONENERGYLLC_11, 
                style: style_OREGONENERGYLLC_11,
                popuplayertitle: 'OREGON ENERGY LLC',
                interactive: false,
                title: '<img src="styles/legend/OREGONENERGYLLC_11.png" /> OREGON ENERGY LLC'
            });
var format_NEVADASELECTROYALTYINC_12 = new ol.format.GeoJSON();
var features_NEVADASELECTROYALTYINC_12 = format_NEVADASELECTROYALTYINC_12.readFeatures(json_NEVADASELECTROYALTYINC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NEVADASELECTROYALTYINC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NEVADASELECTROYALTYINC_12.addFeatures(features_NEVADASELECTROYALTYINC_12);
var lyr_NEVADASELECTROYALTYINC_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NEVADASELECTROYALTYINC_12, 
                style: style_NEVADASELECTROYALTYINC_12,
                popuplayertitle: 'NEVADA SELECT ROYALTY INC',
                interactive: false,
                title: '<img src="styles/legend/NEVADASELECTROYALTYINC_12.png" /> NEVADA SELECT ROYALTY INC'
            });
var format_METALSSEARCHLLC_13 = new ol.format.GeoJSON();
var features_METALSSEARCHLLC_13 = format_METALSSEARCHLLC_13.readFeatures(json_METALSSEARCHLLC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_METALSSEARCHLLC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_METALSSEARCHLLC_13.addFeatures(features_METALSSEARCHLLC_13);
var lyr_METALSSEARCHLLC_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_METALSSEARCHLLC_13, 
                style: style_METALSSEARCHLLC_13,
                popuplayertitle: 'METALS SEARCH LLC',
                interactive: false,
                title: '<img src="styles/legend/METALSSEARCHLLC_13.png" /> METALS SEARCH LLC'
            });
var format_LITHIUMVALLEYHOLDINGSCORP_14 = new ol.format.GeoJSON();
var features_LITHIUMVALLEYHOLDINGSCORP_14 = format_LITHIUMVALLEYHOLDINGSCORP_14.readFeatures(json_LITHIUMVALLEYHOLDINGSCORP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LITHIUMVALLEYHOLDINGSCORP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LITHIUMVALLEYHOLDINGSCORP_14.addFeatures(features_LITHIUMVALLEYHOLDINGSCORP_14);
var lyr_LITHIUMVALLEYHOLDINGSCORP_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LITHIUMVALLEYHOLDINGSCORP_14, 
                style: style_LITHIUMVALLEYHOLDINGSCORP_14,
                popuplayertitle: 'LITHIUM VALLEY HOLDINGS CORP',
                interactive: false,
                title: '<img src="styles/legend/LITHIUMVALLEYHOLDINGSCORP_14.png" /> LITHIUM VALLEY HOLDINGS CORP'
            });
var format_LITHIUMNEVADALLC_15 = new ol.format.GeoJSON();
var features_LITHIUMNEVADALLC_15 = format_LITHIUMNEVADALLC_15.readFeatures(json_LITHIUMNEVADALLC_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LITHIUMNEVADALLC_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LITHIUMNEVADALLC_15.addFeatures(features_LITHIUMNEVADALLC_15);
var lyr_LITHIUMNEVADALLC_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LITHIUMNEVADALLC_15, 
                style: style_LITHIUMNEVADALLC_15,
                popuplayertitle: 'LITHIUM NEVADA LLC',
                interactive: false,
                title: '<img src="styles/legend/LITHIUMNEVADALLC_15.png" /> LITHIUM NEVADA LLC'
            });
var format_KVPROJECTLLC_16 = new ol.format.GeoJSON();
var features_KVPROJECTLLC_16 = format_KVPROJECTLLC_16.readFeatures(json_KVPROJECTLLC_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KVPROJECTLLC_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KVPROJECTLLC_16.addFeatures(features_KVPROJECTLLC_16);
var lyr_KVPROJECTLLC_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KVPROJECTLLC_16, 
                style: style_KVPROJECTLLC_16,
                popuplayertitle: 'K V PROJECT LLC',
                interactive: false,
                title: '<img src="styles/legend/KVPROJECTLLC_16.png" /> K V PROJECT LLC'
            });
var format_HITECHMINERALSINCHITECHMINERALSINC_17 = new ol.format.GeoJSON();
var features_HITECHMINERALSINCHITECHMINERALSINC_17 = format_HITECHMINERALSINCHITECHMINERALSINC_17.readFeatures(json_HITECHMINERALSINCHITECHMINERALSINC_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HITECHMINERALSINCHITECHMINERALSINC_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HITECHMINERALSINCHITECHMINERALSINC_17.addFeatures(features_HITECHMINERALSINCHITECHMINERALSINC_17);
var lyr_HITECHMINERALSINCHITECHMINERALSINC_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HITECHMINERALSINCHITECHMINERALSINC_17, 
                style: style_HITECHMINERALSINCHITECHMINERALSINC_17,
                popuplayertitle: 'HITECH MINERALS INC. — HITECH MINERALS INC',
                interactive: false,
                title: '<img src="styles/legend/HITECHMINERALSINCHITECHMINERALSINC_17.png" /> HITECH MINERALS INC. — HITECH MINERALS INC'
            });
var format_GOLDCANYONRESOURCESUSAINC_18 = new ol.format.GeoJSON();
var features_GOLDCANYONRESOURCESUSAINC_18 = format_GOLDCANYONRESOURCESUSAINC_18.readFeatures(json_GOLDCANYONRESOURCESUSAINC_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GOLDCANYONRESOURCESUSAINC_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GOLDCANYONRESOURCESUSAINC_18.addFeatures(features_GOLDCANYONRESOURCESUSAINC_18);
var lyr_GOLDCANYONRESOURCESUSAINC_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GOLDCANYONRESOURCESUSAINC_18, 
                style: style_GOLDCANYONRESOURCESUSAINC_18,
                popuplayertitle: 'GOLD CANYON RESOURCES USA INC',
                interactive: false,
                title: '<img src="styles/legend/GOLDCANYONRESOURCESUSAINC_18.png" /> GOLD CANYON RESOURCES USA INC'
            });
var format_FMSLITHIUMCORPORATION_19 = new ol.format.GeoJSON();
var features_FMSLITHIUMCORPORATION_19 = format_FMSLITHIUMCORPORATION_19.readFeatures(json_FMSLITHIUMCORPORATION_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FMSLITHIUMCORPORATION_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FMSLITHIUMCORPORATION_19.addFeatures(features_FMSLITHIUMCORPORATION_19);
var lyr_FMSLITHIUMCORPORATION_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FMSLITHIUMCORPORATION_19, 
                style: style_FMSLITHIUMCORPORATION_19,
                popuplayertitle: 'FMS LITHIUM CORPORATION',
                interactive: false,
                title: '<img src="styles/legend/FMSLITHIUMCORPORATION_19.png" /> FMS LITHIUM CORPORATION'
            });
var format_CORDEROMINEINC_20 = new ol.format.GeoJSON();
var features_CORDEROMINEINC_20 = format_CORDEROMINEINC_20.readFeatures(json_CORDEROMINEINC_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORDEROMINEINC_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORDEROMINEINC_20.addFeatures(features_CORDEROMINEINC_20);
var lyr_CORDEROMINEINC_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORDEROMINEINC_20, 
                style: style_CORDEROMINEINC_20,
                popuplayertitle: 'CORDERO MINE INC',
                interactive: false,
                title: '<img src="styles/legend/CORDEROMINEINC_20.png" /> CORDERO MINE INC'
            });
var format_AMERICANINNOVATIVEMINERALSLLC_21 = new ol.format.GeoJSON();
var features_AMERICANINNOVATIVEMINERALSLLC_21 = format_AMERICANINNOVATIVEMINERALSLLC_21.readFeatures(json_AMERICANINNOVATIVEMINERALSLLC_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMERICANINNOVATIVEMINERALSLLC_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMERICANINNOVATIVEMINERALSLLC_21.addFeatures(features_AMERICANINNOVATIVEMINERALSLLC_21);
var lyr_AMERICANINNOVATIVEMINERALSLLC_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AMERICANINNOVATIVEMINERALSLLC_21, 
                style: style_AMERICANINNOVATIVEMINERALSLLC_21,
                popuplayertitle: 'AMERICAN INNOVATIVE MINERALS LLC',
                interactive: false,
                title: '<img src="styles/legend/AMERICANINNOVATIVEMINERALSLLC_21.png" /> AMERICAN INNOVATIVE MINERALS LLC'
            });
var format_AMERICANCOLLOIDCO_22 = new ol.format.GeoJSON();
var features_AMERICANCOLLOIDCO_22 = format_AMERICANCOLLOIDCO_22.readFeatures(json_AMERICANCOLLOIDCO_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMERICANCOLLOIDCO_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMERICANCOLLOIDCO_22.addFeatures(features_AMERICANCOLLOIDCO_22);
var lyr_AMERICANCOLLOIDCO_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AMERICANCOLLOIDCO_22, 
                style: style_AMERICANCOLLOIDCO_22,
                popuplayertitle: 'AMERICAN COLLOID CO',
                interactive: false,
                title: '<img src="styles/legend/AMERICANCOLLOIDCO_22.png" /> AMERICAN COLLOID CO'
            });
var format_ProjectAreas_23 = new ol.format.GeoJSON();
var features_ProjectAreas_23 = format_ProjectAreas_23.readFeatures(json_ProjectAreas_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectAreas_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectAreas_23.addFeatures(features_ProjectAreas_23);
var lyr_ProjectAreas_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectAreas_23, 
                style: style_ProjectAreas_23,
                popuplayertitle: 'Project Areas',
                interactive: true,
                title: '<img src="styles/legend/ProjectAreas_23.png" /> Project Areas'
            });
var format_ConservedLands_24 = new ol.format.GeoJSON();
var features_ConservedLands_24 = format_ConservedLands_24.readFeatures(json_ConservedLands_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConservedLands_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConservedLands_24.addFeatures(features_ConservedLands_24);
var lyr_ConservedLands_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConservedLands_24, 
                style: style_ConservedLands_24,
                popuplayertitle: 'Conserved Lands',
                interactive: false,
                title: '<img src="styles/legend/ConservedLands_24.png" /> Conserved Lands'
            });
var format_McDermittCalderaBoundary_25 = new ol.format.GeoJSON();
var features_McDermittCalderaBoundary_25 = format_McDermittCalderaBoundary_25.readFeatures(json_McDermittCalderaBoundary_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_McDermittCalderaBoundary_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_McDermittCalderaBoundary_25.addFeatures(features_McDermittCalderaBoundary_25);
var lyr_McDermittCalderaBoundary_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_McDermittCalderaBoundary_25, 
                style: style_McDermittCalderaBoundary_25,
                popuplayertitle: 'McDermitt Caldera Boundary',
                interactive: false,
                title: '<img src="styles/legend/McDermittCalderaBoundary_25.png" /> McDermitt Caldera Boundary'
            });
var group_AOI = new ol.layer.Group({
                                layers: [lyr_McDermittCalderaBoundary_25,],
                                fold: 'open',
                                title: 'AOI'});
var group_ODLTBoundaries = new ol.layer.Group({
                                layers: [lyr_ProjectAreas_23,lyr_ConservedLands_24,],
                                fold: 'close',
                                title: 'ODLT Boundaries'});
var group_MLRSMiningClaimsJune2026 = new ol.layer.Group({
                                layers: [lyr_TECHINDUSTRIESLTD_8,lyr_ROCKYMOUNTAINPROSPECTORSLLC_9,lyr_RICKKEELMCCLINTICKLVGTRUST_10,lyr_OREGONENERGYLLC_11,lyr_NEVADASELECTROYALTYINC_12,lyr_METALSSEARCHLLC_13,lyr_LITHIUMVALLEYHOLDINGSCORP_14,lyr_LITHIUMNEVADALLC_15,lyr_KVPROJECTLLC_16,lyr_HITECHMINERALSINCHITECHMINERALSINC_17,lyr_GOLDCANYONRESOURCESUSAINC_18,lyr_FMSLITHIUMCORPORATION_19,lyr_CORDEROMINEINC_20,lyr_AMERICANINNOVATIVEMINERALSLLC_21,lyr_AMERICANCOLLOIDCO_22,],
                                fold: 'close',
                                title: 'MLRS Mining Claims (June 2026)'});
var group_LocatableNotices = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Locatable Notices'});
var group_WildlifeHabitatConnectivity = new ol.layer.Group({
                                layers: [lyr_OregonDFWLahontanCutthroatTroutOccupiedStreams_2,lyr_NDOWLahontanCutthroatTroutOccupiedStreams_3,lyr_EcologicalConnectivityCSP2023_4,lyr_NDOWMappedPronghornHabitatandCorridors_5,lyr_ORDFWPriorityWildlifeConnectivityAreas_6,lyr_OregonDFWConservationOpportunityAreas_7,],
                                fold: 'close',
                                title: 'Wildlife Habitat & Connectivity'});
var group_Vegetation = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Vegetation'});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_GoogleSatelliteHybrid_1,],
                                fold: 'open',
                                title: 'Basemaps'});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_OregonDFWLahontanCutthroatTroutOccupiedStreams_2.setVisible(false);lyr_NDOWLahontanCutthroatTroutOccupiedStreams_3.setVisible(false);lyr_EcologicalConnectivityCSP2023_4.setVisible(false);lyr_NDOWMappedPronghornHabitatandCorridors_5.setVisible(false);lyr_ORDFWPriorityWildlifeConnectivityAreas_6.setVisible(false);lyr_OregonDFWConservationOpportunityAreas_7.setVisible(false);lyr_TECHINDUSTRIESLTD_8.setVisible(false);lyr_ROCKYMOUNTAINPROSPECTORSLLC_9.setVisible(false);lyr_RICKKEELMCCLINTICKLVGTRUST_10.setVisible(false);lyr_OREGONENERGYLLC_11.setVisible(false);lyr_NEVADASELECTROYALTYINC_12.setVisible(false);lyr_METALSSEARCHLLC_13.setVisible(false);lyr_LITHIUMVALLEYHOLDINGSCORP_14.setVisible(false);lyr_LITHIUMNEVADALLC_15.setVisible(false);lyr_KVPROJECTLLC_16.setVisible(false);lyr_HITECHMINERALSINCHITECHMINERALSINC_17.setVisible(false);lyr_GOLDCANYONRESOURCESUSAINC_18.setVisible(false);lyr_FMSLITHIUMCORPORATION_19.setVisible(false);lyr_CORDEROMINEINC_20.setVisible(false);lyr_AMERICANINNOVATIVEMINERALSLLC_21.setVisible(false);lyr_AMERICANCOLLOIDCO_22.setVisible(false);lyr_ProjectAreas_23.setVisible(false);lyr_ConservedLands_24.setVisible(false);lyr_McDermittCalderaBoundary_25.setVisible(true);
var layersList = [group_Basemaps,group_WildlifeHabitatConnectivity,group_MLRSMiningClaimsJune2026,group_ODLTBoundaries,group_AOI];
lyr_OregonDFWLahontanCutthroatTroutOccupiedStreams_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fhdFtrID': 'fhdFtrID', 'fhdRefID': 'fhdRefID', 'fhdRevDt': 'fhdRevDt', 'fhdONm': 'fhdONm', 'fhdOEnt': 'fhdOEnt', 'fhdSpNm': 'fhdSpNm', 'fhdRun': 'fhdRun', 'fhdLifeHst': 'fhdLifeHst', 'fhdUseTy': 'fhdUseTy', 'fhdBasis': 'fhdBasis', 'fhdStNm': 'fhdStNm', 'fhdGenus': 'fhdGenus', 'fhdSp': 'fhdSp', 'fhdSubSp': 'fhdSubSp', 'fhdOrig': 'fhdOrig', 'fhdProd': 'fhdProd', 'fhdComment': 'fhdComment', 'fhdESH': 'fhdESH', 'fhdBasisD': 'fhdBasisD', 'fhdNMF': 'fhdNMF', 'fhdBasisDt': 'fhdBasisDt', 'fhdBasisNm': 'fhdBasisNm', 'fhdBasisEnt': 'fhdBasisEnt', 'fhdBasisPrj': 'fhdBasisPrj', 'fhdBasisMethod': 'fhdBasisMethod', 'fhdAccess': 'fhdAccess', 'fhdBarrierFtrID': 'fhdBarrierFtrID', 'fhdEndExtent': 'fhdEndExtent', 'SHAPE_Length': 'SHAPE_Length', });
lyr_NDOWLahontanCutthroatTroutOccupiedStreams_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Permanent_': 'Permanent_', 'FDate': 'FDate', 'Resolution': 'Resolution', 'GNIS_ID': 'GNIS_ID', 'GNIS_Name': 'GNIS_Name', 'LengthKM': 'LengthKM', 'ReachCode': 'ReachCode', 'FlowDir': 'FlowDir', 'WBArea_Per': 'WBArea_Per', 'FType': 'FType', 'FCode': 'FCode', 'MainPath': 'MainPath', 'InNetwork': 'InNetwork', 'Visibility': 'Visibility', 'NHDPlusID': 'NHDPlusID', 'VPUID': 'VPUID', 'Enabled': 'Enabled', 'Pop_Name': 'Pop_Name', 'InterCon_N': 'InterCon_N', 'Shape_Leng': 'Shape_Leng', 'Shape__Length': 'Shape__Length', });
lyr_NDOWMappedPronghornHabitatandCorridors_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'POLY': 'POLY', 'BIOLOGIST': 'BIOLOGIST', 'SPECIES': 'SPECIES', 'TYPE_OF_MO': 'TYPE_OF_MO', 'MOVEMENT_O': 'MOVEMENT_O', 'MOVEMENT_T': 'MOVEMENT_T', 'REASON_FOR': 'REASON_FOR', 'MOVEMENT_P': 'MOVEMENT_P', 'MOVEMENT_S': 'MOVEMENT_S', 'MOVEMENT_D': 'MOVEMENT_D', 'RETURN_SEA': 'RETURN_SEA', 'RETURN_DIR': 'RETURN_DIR', 'PEAK_MOVEM': 'PEAK_MOVEM', 'PEAK_RETUR': 'PEAK_RETUR', 'TOTAL_NUMB': 'TOTAL_NUMB', 'POPULATION': 'POPULATION', 'CURRENT_TR': 'CURRENT_TR', 'HISTORIC_T': 'HISTORIC_T', 'REASONS_FO': 'REASONS_FO', 'CROSSING_E': 'CROSSING_E', 'POTENTIAL_': 'POTENTIAL_', 'NOTES': 'NOTES', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_ORDFWPriorityWildlifeConnectivityAreas_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PWCAType': 'PWCAType', 'PWCAName': 'PWCAName', 'HexName': 'HexName', 'MinX': 'MinX', 'MaxY': 'MaxY', 'ORIG_FID': 'ORIG_FID', 'Shape_Leng': 'Shape_Leng', 'MajorityLM': 'MajorityLM', 'SecondLM': 'SecondLM', 'PrimConsRe': 'PrimConsRe', 'SecConsRec': 'SecConsRec', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_OregonDFWConservationOpportunityAreas_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COA_ID': 'COA_ID', 'COA_name': 'COA_name', 'Centroid_E': 'Centroid_E', 'Size_SqMil': 'Size_SqMil', 'size_acres': 'size_acres', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_TECHINDUSTRIESLTD_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_ROCKYMOUNTAINPROSPECTORSLLC_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_RICKKEELMCCLINTICKLVGTRUST_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_OREGONENERGYLLC_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_NEVADASELECTROYALTYINC_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_METALSSEARCHLLC_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_LITHIUMVALLEYHOLDINGSCORP_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_LITHIUMNEVADALLC_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_KVPROJECTLLC_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_HITECHMINERALSINCHITECHMINERALSINC_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_GOLDCANYONRESOURCESUSAINC_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_FMSLITHIUMCORPORATION_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_CORDEROMINEINC_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_AMERICANINNOVATIVEMINERALSLLC_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_AMERICANCOLLOIDCO_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_ProjectAreas_23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Project': 'Project', });
lyr_ConservedLands_24.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Property': 'Property', 'Acres': 'Acres', });
lyr_McDermittCalderaBoundary_25.set('fieldAliases', {'FID': 'FID', });
lyr_OregonDFWLahontanCutthroatTroutOccupiedStreams_2.set('fieldImages', {'OBJECTID': 'Range', 'fhdFtrID': 'Range', 'fhdRefID': 'Range', 'fhdRevDt': 'TextEdit', 'fhdONm': 'TextEdit', 'fhdOEnt': 'TextEdit', 'fhdSpNm': 'TextEdit', 'fhdRun': 'TextEdit', 'fhdLifeHst': 'TextEdit', 'fhdUseTy': 'TextEdit', 'fhdBasis': 'TextEdit', 'fhdStNm': 'TextEdit', 'fhdGenus': 'TextEdit', 'fhdSp': 'TextEdit', 'fhdSubSp': 'TextEdit', 'fhdOrig': 'TextEdit', 'fhdProd': 'TextEdit', 'fhdComment': 'TextEdit', 'fhdESH': 'TextEdit', 'fhdBasisD': 'TextEdit', 'fhdNMF': 'TextEdit', 'fhdBasisDt': 'TextEdit', 'fhdBasisNm': 'TextEdit', 'fhdBasisEnt': 'TextEdit', 'fhdBasisPrj': 'TextEdit', 'fhdBasisMethod': 'TextEdit', 'fhdAccess': 'TextEdit', 'fhdBarrierFtrID': 'TextEdit', 'fhdEndExtent': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_NDOWLahontanCutthroatTroutOccupiedStreams_3.set('fieldImages', {'OBJECTID': 'Range', 'Permanent_': 'TextEdit', 'FDate': 'DateTime', 'Resolution': 'Range', 'GNIS_ID': 'TextEdit', 'GNIS_Name': 'TextEdit', 'LengthKM': 'TextEdit', 'ReachCode': 'TextEdit', 'FlowDir': 'Range', 'WBArea_Per': 'TextEdit', 'FType': 'Range', 'FCode': 'Range', 'MainPath': 'Range', 'InNetwork': 'Range', 'Visibility': 'Range', 'NHDPlusID': 'TextEdit', 'VPUID': 'TextEdit', 'Enabled': 'Range', 'Pop_Name': 'TextEdit', 'InterCon_N': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_NDOWMappedPronghornHabitatandCorridors_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'POLY': 'TextEdit', 'BIOLOGIST': 'TextEdit', 'SPECIES': 'TextEdit', 'TYPE_OF_MO': 'TextEdit', 'MOVEMENT_O': 'TextEdit', 'MOVEMENT_T': 'TextEdit', 'REASON_FOR': 'TextEdit', 'MOVEMENT_P': 'TextEdit', 'MOVEMENT_S': 'TextEdit', 'MOVEMENT_D': 'TextEdit', 'RETURN_SEA': 'TextEdit', 'RETURN_DIR': 'TextEdit', 'PEAK_MOVEM': 'TextEdit', 'PEAK_RETUR': 'TextEdit', 'TOTAL_NUMB': 'TextEdit', 'POPULATION': 'TextEdit', 'CURRENT_TR': 'TextEdit', 'HISTORIC_T': 'TextEdit', 'REASONS_FO': 'TextEdit', 'CROSSING_E': 'TextEdit', 'POTENTIAL_': 'TextEdit', 'NOTES': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_ORDFWPriorityWildlifeConnectivityAreas_6.set('fieldImages', {'OBJECTID': 'Range', 'PWCAType': 'TextEdit', 'PWCAName': 'TextEdit', 'HexName': 'TextEdit', 'MinX': 'Range', 'MaxY': 'Range', 'ORIG_FID': 'Range', 'Shape_Leng': 'TextEdit', 'MajorityLM': 'TextEdit', 'SecondLM': 'TextEdit', 'PrimConsRe': 'TextEdit', 'SecConsRec': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_OregonDFWConservationOpportunityAreas_7.set('fieldImages', {'OBJECTID': 'Range', 'COA_ID': 'Range', 'COA_name': 'TextEdit', 'Centroid_E': 'TextEdit', 'Size_SqMil': 'TextEdit', 'size_acres': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_TECHINDUSTRIESLTD_8.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_ROCKYMOUNTAINPROSPECTORSLLC_9.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_RICKKEELMCCLINTICKLVGTRUST_10.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_OREGONENERGYLLC_11.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_NEVADASELECTROYALTYINC_12.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_METALSSEARCHLLC_13.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_LITHIUMVALLEYHOLDINGSCORP_14.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_LITHIUMNEVADALLC_15.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_KVPROJECTLLC_16.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_HITECHMINERALSINCHITECHMINERALSINC_17.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_GOLDCANYONRESOURCESUSAINC_18.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_FMSLITHIUMCORPORATION_19.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_CORDEROMINEINC_20.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_AMERICANINNOVATIVEMINERALSLLC_21.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_AMERICANCOLLOIDCO_22.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_ProjectAreas_23.set('fieldImages', {'OBJECTID': 'TextEdit', 'Project': 'TextEdit', });
lyr_ConservedLands_24.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', 'Property': '', 'Acres': '', });
lyr_McDermittCalderaBoundary_25.set('fieldImages', {'FID': 'TextEdit', });
lyr_OregonDFWLahontanCutthroatTroutOccupiedStreams_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'fhdFtrID': 'hidden field', 'fhdRefID': 'hidden field', 'fhdRevDt': 'hidden field', 'fhdONm': 'hidden field', 'fhdOEnt': 'hidden field', 'fhdSpNm': 'hidden field', 'fhdRun': 'hidden field', 'fhdLifeHst': 'hidden field', 'fhdUseTy': 'hidden field', 'fhdBasis': 'hidden field', 'fhdStNm': 'hidden field', 'fhdGenus': 'hidden field', 'fhdSp': 'hidden field', 'fhdSubSp': 'hidden field', 'fhdOrig': 'hidden field', 'fhdProd': 'hidden field', 'fhdComment': 'hidden field', 'fhdESH': 'hidden field', 'fhdBasisD': 'hidden field', 'fhdNMF': 'hidden field', 'fhdBasisDt': 'hidden field', 'fhdBasisNm': 'hidden field', 'fhdBasisEnt': 'hidden field', 'fhdBasisPrj': 'hidden field', 'fhdBasisMethod': 'hidden field', 'fhdAccess': 'hidden field', 'fhdBarrierFtrID': 'hidden field', 'fhdEndExtent': 'hidden field', 'SHAPE_Length': 'hidden field', });
lyr_NDOWLahontanCutthroatTroutOccupiedStreams_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Permanent_': 'hidden field', 'FDate': 'hidden field', 'Resolution': 'hidden field', 'GNIS_ID': 'hidden field', 'GNIS_Name': 'hidden field', 'LengthKM': 'hidden field', 'ReachCode': 'hidden field', 'FlowDir': 'hidden field', 'WBArea_Per': 'hidden field', 'FType': 'hidden field', 'FCode': 'hidden field', 'MainPath': 'hidden field', 'InNetwork': 'hidden field', 'Visibility': 'hidden field', 'NHDPlusID': 'hidden field', 'VPUID': 'hidden field', 'Enabled': 'hidden field', 'Pop_Name': 'hidden field', 'InterCon_N': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_NDOWMappedPronghornHabitatandCorridors_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'POLY': 'hidden field', 'BIOLOGIST': 'hidden field', 'SPECIES': 'hidden field', 'TYPE_OF_MO': 'hidden field', 'MOVEMENT_O': 'hidden field', 'MOVEMENT_T': 'hidden field', 'REASON_FOR': 'hidden field', 'MOVEMENT_P': 'hidden field', 'MOVEMENT_S': 'hidden field', 'MOVEMENT_D': 'hidden field', 'RETURN_SEA': 'hidden field', 'RETURN_DIR': 'hidden field', 'PEAK_MOVEM': 'hidden field', 'PEAK_RETUR': 'hidden field', 'TOTAL_NUMB': 'hidden field', 'POPULATION': 'hidden field', 'CURRENT_TR': 'hidden field', 'HISTORIC_T': 'hidden field', 'REASONS_FO': 'hidden field', 'CROSSING_E': 'hidden field', 'POTENTIAL_': 'hidden field', 'NOTES': 'hidden field', 'BUFF_DIST': 'hidden field', 'ORIG_FID': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_ORDFWPriorityWildlifeConnectivityAreas_6.set('fieldLabels', {'OBJECTID': 'no label', 'PWCAType': 'no label', 'PWCAName': 'no label', 'HexName': 'no label', 'MinX': 'no label', 'MaxY': 'no label', 'ORIG_FID': 'no label', 'Shape_Leng': 'no label', 'MajorityLM': 'no label', 'SecondLM': 'no label', 'PrimConsRe': 'no label', 'SecConsRec': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', });
lyr_OregonDFWConservationOpportunityAreas_7.set('fieldLabels', {'OBJECTID': 'no label', 'COA_ID': 'no label', 'COA_name': 'header label - visible with data', 'Centroid_E': 'no label', 'Size_SqMil': 'no label', 'size_acres': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', });
lyr_TECHINDUSTRIESLTD_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_ROCKYMOUNTAINPROSPECTORSLLC_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_RICKKEELMCCLINTICKLVGTRUST_10.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_OREGONENERGYLLC_11.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_NEVADASELECTROYALTYINC_12.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_METALSSEARCHLLC_13.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_LITHIUMVALLEYHOLDINGSCORP_14.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_LITHIUMNEVADALLC_15.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_KVPROJECTLLC_16.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_HITECHMINERALSINCHITECHMINERALSINC_17.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_GOLDCANYONRESOURCESUSAINC_18.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_FMSLITHIUMCORPORATION_19.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_CORDEROMINEINC_20.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_AMERICANINNOVATIVEMINERALSLLC_21.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_AMERICANCOLLOIDCO_22.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_ProjectAreas_23.set('fieldLabels', {'OBJECTID': 'no label', 'Project': 'header label - visible with data', });
lyr_ConservedLands_24.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Property': 'no label', 'Acres': 'no label', });
lyr_McDermittCalderaBoundary_25.set('fieldLabels', {'FID': 'hidden field', });
lyr_McDermittCalderaBoundary_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});