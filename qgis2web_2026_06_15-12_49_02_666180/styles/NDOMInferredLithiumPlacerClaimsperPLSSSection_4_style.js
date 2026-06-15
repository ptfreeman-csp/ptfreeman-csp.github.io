var size = 0;
var placement = 'point';

var style_NDOMInferredLithiumPlacerClaimsperPLSSSection_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Join_Count");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 1.000000 && value <= 10.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(179,179,179,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.4776}),fill: new ol.style.Fill({color: 'rgba(67,1,84,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 10.000000 && value <= 20.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(179,179,179,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.4776}),fill: new ol.style.Fill({color: 'rgba(49,105,143,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 20.000000 && value <= 30.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(179,179,179,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.4776}),fill: new ol.style.Fill({color: 'rgba(53,184,121,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 30.000000 && value <= 632.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(179,179,179,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.6523999999999996}),fill: new ol.style.Fill({color: 'rgba(255,233,36,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
