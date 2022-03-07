var wwd = new WorldWind.WorldWindow("canvasOne"); // binding via the canvas id present in the index file

// Adding layers
// 1. Low res layer of NASA’s Blue Marble, which it may be used as a ‘fallback’ 
wwd.addLayer(new WorldWind.BMNGOneImageLayer());
// 2. Landsat imagery with higher resolution
wwd.addLayer(new WorldWind.BMNGLandsatLayer());
// 3. Compass Layer
wwd.addLayer(new WorldWind.CompassLayer());
// 4. Coordinates layer
wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
// 5. View control layer
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));