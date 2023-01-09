import Pexel from "./Pexel";

class Economy {
    constructor(numPexels) {
        console.log("Initiating economy.");
        this.pexels = [];
        for (let i = 0; i < numPexels; i++) {
            this.pexels.push(new Pexel());
        }
    }

    simulateDay() {
        console.log("Simulating economy day.");
    }
}

export default Economy;
