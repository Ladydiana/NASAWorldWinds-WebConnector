
/* Building a model*/
class WorldModel {
	constructor(canvasName) {
		this.globe = new WorldWind.WorldWindow(canvasName);
	
	}

	addLayerToGlobe(layerType) {
	
		switch (layerType.toUpperCase()) {
			case 'FALLBACK':
				this.globe.addLayer(new WorldWind.BMNGOneImageLayer());
				break;
			case 'LANDSAT':
				this.globe.addLayer(new WorldWind.BMNGLandsatLayer());
				break;
			case 'COMPASS':
				this.globe.addLayer(new WorldWind.CompassLayer());
				break;
			case 'COORDINATES':
				this.globe.addLayer(new WorldWind.CoordinatesDisplayLayer(this.globe));
				break;
			case 'CONTROL':
				this.globe.addLayer(new WorldWind.ViewControlsLayer(this.globe));
				break;
			default:
				throw "Unrecognized layer type.";
		}
		
		
	}
	
}