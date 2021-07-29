import { browserHistory } from 'react-router'

export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};

    }

    createMarkerFromBench(bench, benchId) {

        let newMarker = new google.maps.Marker({
            position: { lat: bench.lat, lng: bench.long },
            map: this.map,
            title: bench.description
        })

        // newMarker.addListener("click", () => {
        //     browserHistory.push(`/benches/${benchId}`)
        // })

        return newMarker
    }

    updateMarkers(benches = []) {
        const lookupBench = {}

        benches.forEach(bench => {
            lookupBench[bench.id] = bench
        })

        for (const [key, value] of Object.entries(lookupBench)) {
            if (this.markers[key] === undefined) {
                this.markers[key] = this.createMarkerFromBench(lookupBench[key], key)
            }
        }

        for (const [key, value] of Object.entries(this.markers)) {
            if (lookupBench[key] === undefined) {
                this.markers[key].setMap(null);
                delete this.markers[key]
            }
        }
    }
}