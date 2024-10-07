class leafLetMap{
    constructor(containerId, center, zoom){
        this.map = L.map(containerId).setview(center, zoom);
        this.initTileLayer();
    }
}