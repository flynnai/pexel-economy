class SortedEventList {
    constructor() {
        this.events = [];
    }

    addEvent(event) {
        for (let i = this.events.length - 1; i >= 0; i--) {
            if (this.events[i].day > event.day) {
                this.events.splice(i + 1, 0, event);
                return;
            }
        }
        // earlier than everything
        this.events.unshift(event);
    }

    popEvents(day) {
        let i = this.events.length - 1;
        while (i >= 0 && this.events[i].day <= day) i--;

        return this.events.splice(i + 1);
    }
}

export default SortedEventList;
