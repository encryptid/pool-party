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
        this.services = [];
        this.checkboxes = null;
        this.poolPartyPlanning();
        this.poolFilter();
    }

    poolPartyPlanning(method) {
        console.log(method);
        let services = this.services;
        //return all checked boxes on window load
        window.addEventListener('load', () => {
            this.checkboxes = document.querySelectorAll('.check input');
            this.checkboxes.forEach((box) => {
                if (box.checked == true) {
                    services.push(box.id);
                }
            })
            //return all checked boxes on change
            this.checkboxes.forEach((brx) => {
                brx.addEventListener('change', (event) => {
                    //if checked and not already in services...
                    if (brx.checked === true && services.indexOf(event.target.id) == -1) {
                        //add to services
                        services.push(event.target.id);
                    }
                    //else if un-checked and in services...
                    else if (brx.checked === false && services.indexOf(event.target.id) >= 0) {
                        let num = services.indexOf(event.target.id);
                        //remove from services
                        services.splice(num, 1);
                    }
                    //or else it's a weird one.
                    else {
                        console.log('edge case');
                    }
                })
            });
        })
        // this.cards = document.querySelectorAll('.card');
        // console.log(this.cards);
        this.poolFilter();
    }

    poolFilter() {
        //1. check which boxes are checked and return only the services which are 'true'
        //2. filter those results down to 3 (create an array, and push/pop the array)
        console.log('buns');
        console.log(this.services);
        // console.log(poolDealers.dealers);
        let certz = poolDealers.dealers[0].data.certifications;
        console.log(certz);
        this.die = [];

    this.dealers = poolDealers.dealers.forEach((d) => {
        // console.log(d.data.certifications);
        this.services.filter((srv) =>{
            console.log(d);
            this.die.push(d);
            return d.data.certifications === srv;
        })
    })

    console.log(this.die);

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

// console.log(poolParty);

// const init = () => console.log('pool partay!');

// window.addEventListener('load', init());