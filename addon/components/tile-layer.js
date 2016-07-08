import BaseLayer from 'ember-leaflet/components/base-layer';

export default BaseLayer.extend({

  leafletRequiredOptions: [
    'url'
  ],

  leafletOptions: [
    'minZoom', 'maxZoom', 'maxNativeZoom', 'tileSize', 'subdomains',
    'errorTileUrl', 'attribution', 'tms', 'continuousWorld', 'noWrap',
    'zoomOffset', 'zoomReverse', 'opacity', 'zIndex', 'unloadInvisibleTiles',
    'updateWhenIdle', 'detectRetina', 'reuseTiles', 'bounds',
    // Options for Leaflet.TileLayer.PouchDBCached
    'useCache', 'saveToCache', 'useOnlyCache', 'cacheMaxAge'
  ],

  leafletEvents: [
    'loading', 'load', 'tileloadstart', 'tileload', 'tileunload',
    // Events for Leaflet.TileLayer.PouchDBCached
    'tilecachehit', 'tilecachemiss', 'seedstart', 'seedend', 'seedprogress'
  ],

  leafletProperties: [
    'url', 'zIndex', 'opacity'
  ],

  createLayer() {
    return this.L.tileLayer(...this.get('requiredOptions'), this.get('options'));
  }
});
