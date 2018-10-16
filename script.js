import './sass/style.scss';

//Importing JSON (vs fetching) for performance
import * as poolDealers from './assets/data/dealers.json';

//Next, I'll need 3 functions:
//Function 1: enables UI interactivity (click actions, event listeners, etc.)
//Function 2: performs filtering
//Function 3: for rendering. It will accept the filtered data as a parameter

export default class PoolParty {

    constructor() {
        this.poolPartyPlanning();
        this.poolFilter();
    }

    poolPartyPlanning() {
        const checks = document.querySelectorAll('.check input');
        let terms = [];
        console.log(checks);
        checks.forEach((box) => {
            terms.push(box.value);
        })
        console.log(terms);
    }

    poolFilter() {
        console.log(poolDealers);
    }
}

// import PoolParty from './pool-party';

const poolParty = new PoolParty();

console.log(poolParty);

// const init = () => console.log('pool partay!');

// window.addEventListener('load', init());