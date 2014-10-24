var map, layer;
var mapBounds = new OpenLayers.Bounds(-9283408.461377, 4018588.073810, -9281879.720811, 4020116.814376);
; var mapMinZoom = 2
; var mapMaxZoom = 4
; var mapMaxResolution = 0.662653;
; var gridBounds = new OpenLayers.Bounds(-9283408.461377, 4018588.073810, -9281879.720811, 4020116.814376);
function init() {
  var options = {
    controls: [],
    maxExtent : gridBounds,
    minResolution: mapMaxResolution,
    numZoomLevels: mapMaxZoom+1
  };
  map = new OpenLayers.Map('map', options);
  layer = new OpenLayers.Layer.XYZ( "MapTiler layer", "img/map/${z}/${x}/${y}.png", {
    transitionEffect: 'resize',
    tileOrigin: new OpenLayers.LonLat(gridBounds.left, gridBounds.top)
  });
  map.addLayer(layer);
  map.zoomToExtent(4);
  map.addControl(new OpenLayers.Control.Navigation());
  // map.addControl(new OpenLayers.Control.PanZoom());
  // map.addControl(new OpenLayers.Control.MousePosition({  numDigits: 7 }));
  // map.addControl(new OpenLayers.Control.Permalink());
  // var pointCenter = new OpenLayers.LonLat(-9282584.4523715, 4019020.1236610);
 map.setCenter(pointCenter);
 
 $("#plus").live('click', function(){
    map.zoomIn();
});

$("#minus").live('click', function(){
    map.zoomOut();
});

$("#locate").live('click',function(){
    var control = map.getControlsBy("id", "locate-control")[0];
    if (control.active) {
        control.getCurrentLocation();
    } else {
        control.activate();
    }
});

}
