class Event_ {
    constructor(label, cost, day, essentiality, refundPercent = null) {
        this.label = label;
        this.cost = cost;
        this.day = day;
        this.essentiality = essentiality;
        this.refundPercent = refundPercent;
    }
}

export default Event_;
