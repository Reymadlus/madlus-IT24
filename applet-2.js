class leafLetMap{
    constructor(containerId, center, zoom){
        this.map = L.map(containerId).setview(center, zoom);
        this.initTileLayer();
    }

initTileLayer() {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
}
addMaker(lat, long, message){
    const marker = L.marker([lat, long]).addTo(this.map)
    .bindPopup(message);
}
    loadMarkersFromJson(url) {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(marker => {
                this.addMaker(marker.latitude, marker.longitude, marker.meassage);
            });
       })
       .catch(error => console.error)("Error loading servers:", error);
    }

}



