import './sass/style.scss';

//Importing JSON (vs fetching) for performance
import * as poolDealers from './assets/data/dealers.json';

//Next, I'll need 3 functions:
//Function 1: enables UI interactivity (click actions, event listeners, etc.)
//Function 2: performs filtering
//Function 3: for rendering. It will accept the filtered data as a parameter

export default class PoolParty {

    constructor(i) {
        this.items = i;
        this.poolPartyPlanning();
        this.poolFilter();
        // this.terms = [];
    }

    poolPartyPlanning() {
        console.log(this.items);
        this.terms = [];
        //return all checkboxes
        this.checkboxes = document.querySelectorAll('.check input');
        console.log(this.checkboxes);
        //add event listener to each checkbox to see if they change
        this.checkboxes.forEach((box) => box.addEventListener('change', (box) => {
            //when they change, what happens? should we push to our array?
            console.log('box changed!');
            if (box.checked == true) {
                this.terms.push(box.id);
            }
        }))
        console.log(this.terms);
        // this.cards = document.querySelectorAll('.card');
        // console.log(this.cards);
        
    }

    poolFilter() {
        //1. check which boxes are checked and return only the services which are 'true'
        //2. filter those results down to 3 (create an array, and push/pop the array)
        // this.checks.forEach((box) => {
        //     if (box.checked == true) {
        //     this.terms.push(box);
        //     }
        //     else {
        //         console.log(`${box.id} is not checked`);
        //     }  
        // })
        // console.log(this.terms);
        // console.log(poolDealers);
    }
}

// import PoolParty from './pool-party';
const items = 'figs'

const poolParty = new PoolParty(items);

console.log(poolParty);

// const init = () => console.log('pool partay!');

// window.addEventListener('load', init());