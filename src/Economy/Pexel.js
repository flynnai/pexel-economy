import maleFirstNames from "./population_stats/census_1000_male_firstnames.json";
import femaleFirstNames from "./population_stats/census_1000_female_firstnames.json";
import lastNames from "./population_stats/census_1000_lastnames.json";
import { randChoice, roundToCents } from "./statsUtils";
import SortedEventList from "./SortedEventList";
import Event_ from "./Event_";
import Job from "./Job";

class Pexel {
    constructor() {
        this.uuid = Pexel.nextUuid++;
        this.gender = randChoice(["male", "female"]);
        this.firstName =
            this.gender === "male"
                ? randChoice(maleFirstNames)
                : randChoice(femaleFirstNames);
        this.lastName = randChoice(lastNames);
        this.age = 0; // in days

        this.bankAccountBalance = 0;
        this.eventList = new SortedEventList();

        this.job = new Job(Math.floor(Math.random() * 100_000 + 50_000));
    }

    simulateDay() {
        this.age += 1;
        const yearsOld = this.age / 365;
        if (yearsOld < 1) {
            // infant
        } else if (yearsOld < 3) {
            // toddler
        } else if (yearsOld < 5) {
            // preschooler
        } else if (yearsOld < 12) {
            // grade schooler
        } else if (yearsOld < 18) {
            // teenager
        } else {
            // adult
        }

        const events = this.eventList.popEvents(this.age);
        console.log("Popped events, day " + this.age + ":", events);
        console.log(
            "Out of:",
            this.eventList.events.map((e) => e.day)
        );

        for (const event of events) {
            this.bankAccountBalance -= event.cost;
        }

        // TODO convert to subscription
        if ((this.age + this.job.paydayOffset) % 14 === 0) {
            console.log("paid");
            this.bankAccountBalance += this.job.biweeklyTakeHome;
        }

        if (Math.random() > 0) {
            this.eventList.addEvent(
                new Event_(
                    "Got a life!" + Math.random(),
                    roundToCents(Math.random() * 80),
                    this.age + Math.floor(Math.random() * 100),
                    5,
                    0.3
                )
            );
        }
    }

    static nextUuid = 0;
}

export default Pexel;
