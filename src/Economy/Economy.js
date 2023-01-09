import Pexel from "./Pexel";

class Economy {
    constructor(numPexels) {
        console.log("Initiating economy.");
        this.pexels = {};
        for (let i = 0; i < numPexels; i++) {
            const pexel = new Pexel();
            this.pexels[pexel.uuid] = pexel;
        }
    }

    simulateDay() {
        console.log("Simulating economy day.");
        for (const pexel of Object.values(this.pexels)) {
            pexel.simulateDay();
        }
    }
}

export default Economy;
