import { randInt, roundToCents } from "./statsUtils";

const calculateFedIncomeTax = (salary) => {
    // 2022 tax brackets, single filer, NOT including FICA
    const taxBrackets = [
        // up to
        [10275, 0.1],
        [41775, 0.12],
        [89075, 0.22],
        [170050, 0.24],
        [215950, 0.32],
        [539900, 0.35],
        [100000000000, 0.37],
    ];

    let tax = 0;
    for (const [bracket, percent] of taxBrackets) {
        if (salary > bracket) {
            tax += bracket * percent;
        } else {
            // last bracket
            tax += salary * percent;
            return tax;
        }
        salary -= bracket;
    }
};

class Job {
    constructor(salary) {
        this.salary = salary;
        this.paydayOffset = randInt(0, 13);
    }

    get biweeklyTakeHome() {
        return roundToCents(
            ((this.salary - calculateFedIncomeTax(this.salary)) / 53) * 2
        );
    }
}

export default Job;
