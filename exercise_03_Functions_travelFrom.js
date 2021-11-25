// A (more complicated) Transit Application
function travelFrom (fromStation, toStation) {
    const stations = { 
        T1: ["Museum", "St. James", "Circular Quay", "Wynyard"],
        T2: ["Circular Quay", "Townhall", "Central", "Redfern"],
        T3: ["Central", "Macdonaldtown", "Newtown"],
    };
    
    function track (station) {
        let tracks = [];
        let validStation = false;
        for (let key in stations) {
            if (stations[key].find(a=> a.toLowerCase() === station.toLowerCase())) {
                tracks.push(key);
                validStation = true;
            }
        }
        if (validStation) {
            return tracks;
        } else return false; 
    }
    function transferAt () {
        if (fromTracks.includes("T1") && toTracks.includes("T1")){
            fromTracks = ["T1"];
            toTracks = ["T1"];
            return false;
        }
        if (fromTracks.includes("T2") && toTracks.includes("T2")){
            fromTracks = ["T2"];
            toTracks = ["T2"];
            return false;
        }
        if (fromTracks.includes("T3") && toTracks.includes("T3")){
            fromTracks = ["T3"];
            toTracks = ["T3"];
            return false;
        }
        if ((fromTracks.includes("T1") && toTracks.includes("T2")) || (toTracks.includes("T1") && fromTracks.includes("T2"))){
            if (fromTracks.indexOf("T3") > -1){
                fromTracks.splice(fromTracks.indexOf("T3"),1);
            }
            if (toTracks.indexOf("T3")> -1){
                toTracks.splice(toTracks.indexOf("T3"),1);
            }
            return ["Circular Quay"];
        }
        if ((fromTracks.includes("T2") && toTracks.includes("T3")) || (toTracks.includes("T2") && fromTracks.includes("T3"))){
            if (fromTracks.indexOf("T1") > -1){
                fromTracks.splice(fromTracks.indexOf("T1"),1);
            }
            if (toTracks.indexOf("T1") > -1){
                toTracks.splice(toTracks.indexOf("T1"),1);
            }
            return ["Central"];
        }
        if (fromTracks.includes("T1") && toTracks.includes("T3")){
            return ["Circular Quay", "Central"];
        }
        if (toTracks.includes("T1") && fromTracks.includes("T3")){
            return ["Central","Circular Quay"];
        }
    }
    function stationIndex (station, track){
        return (stations[track[0]].findIndex(i => i.toLowerCase() === station.toLowerCase()));
    }
    function travelItinerary () {
        function trackItinerary (trackAIndex, stationAIndex, trackBIndex, stationBIndex) {
            if (stationAIndex < stationBIndex) {
                for (let i = stationAIndex; i <= stationBIndex; i +=1) {
                    itinerary = itinerary + "-" + stations[trackAIndex][i] + " \n";
                    stops += 1;
                }
            } else {
                for (let i = fromStationIndex; i >= toStationIndex; i -=1) {
                    itinerary = itinerary + "-" + stations[trackAIndex][i] + " \n";
                    stops += 1;
                }
            }
        }
        if (!transferStation){
            trackItinerary(fromTracks[0], fromStationIndex, toTracks[0], toStationIndex);
        }
        if (transferStation[0] && !transferStation[1]) {
            let fromTransferIndex = stationIndex(transferStation[0],fromTracks);
            let toTransferIndex = stationIndex(transferStation[0],toTracks);
            trackItinerary(fromTracks[0], fromStationIndex, fromTracks[0], fromTransferIndex);
            itinerary = itinerary.slice(0,-2) + ": " + "Transfer to track "+ toTracks[0] + " \n";
            trackItinerary(toTracks[0], toTransferIndex, toTracks[0], toStationIndex);
            stops -= 1;
        }
        if (transferStation[0] && transferStation[1]) {
            let fromTransferIndex = stationIndex(transferStation[0],fromTracks);
            let fromT2Index = stationIndex(transferStation[0],["T2"]);
            let toT2Index = stationIndex(transferStation[1],["T2"]);
            let toTransferIndex = stationIndex(transferStation[1],toTracks);
            trackItinerary(fromTracks[0], fromStationIndex, fromTracks[0], fromTransferIndex);
            itinerary = itinerary.slice(0,-2) + ": " + "Transfer to track T2 \n";
            trackItinerary("T2", fromT2Index, "T2", toT2Index);
            itinerary = itinerary.slice(0,-2) + ": " + "Transfer to track "+ toTracks[0] + " \n";
            trackItinerary(toTracks[0], toTransferIndex, toTracks[0], toStationIndex);
            stops -= 2;
        }
        
        
        console.log("your trip will require", stops, "stops");
        console.log(itinerary);
    }
    let fromTracks = track(fromStation);
    let toTracks = track(toStation);
    
    
    if (!fromTracks) {
        console.log (fromStation, "station not found")
        return;
    }
    if (!toTracks) {
        console.log (toStation, "station not found")
        return;
    }
    let transferStation = transferAt();
    let fromStationIndex = stationIndex(fromStation,fromTracks);
    let toStationIndex = stationIndex(toStation,toTracks);
    let itinerary = "";
    let stops = 0;
    
    travelItinerary();
}
travelFrom("Museum", "Wynyard"); // Both on track 1 no transfer
travelFrom("Circular Quay", "Redfern"); // Both on track 2 no transfer
travelFrom("newtown", "Central"); // Both on track 3 no transfer
travelFrom("MusEum", "Wynyard"); // Case insensitive
travelFrom("Wynyard", "MusEum"); // travel backwards
travelFrom("Kings Cross", "Wynyard"); // Halts if not a station and returns invalid station name.
travelFrom("Museum", "Redfern"); // from track 1 to track 2 showing a transfer at "Circular Quay"
travelFrom("redfern", "newtown") // from track 2 to track 3 showing a transfer at "central"
travelFrom("Museum", "newtown") // from track 1 to track 3 showing a transfer at "Circular Quay" & "central"
travelFrom("newtown", "museum") // from track 3 to track 1 showing a transfer at "central" & "Circular Quay"
