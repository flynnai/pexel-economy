import maleFirstNames from "./population_stats/census_1000_male_firstnames.json";
import femaleFirstNames from "./population_stats/census_1000_female_firstnames.json";
import lastNames from "./population_stats/census_1000_lastnames.json";
import { randChoice } from "./statsUtils";

class Pexel {
    constructor() {
        this.gender = randChoice(["male", "female"]);
        this.firstName =
            this.gender === "male"
                ? randChoice(maleFirstNames)
                : randChoice(femaleFirstNames);
        this.lastName = randChoice(lastNames);
    }
}

export default Pexel;
