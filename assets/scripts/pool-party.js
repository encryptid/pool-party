import * as poolDealers from '../data/dealers.json';

export default class PoolParty {

    constructor(i) {
        // this.items = i;
        this.services = [];
        this.checkboxes = null;
        this.poolPartyPlanning();
        this.poolFilter();
    }

    poolPartyPlanning(method) {
        let services = this.services;

        //return all checked boxes on window load
        this.checkboxes = document.querySelectorAll('.check input');
        this.checkboxes.forEach((chk) => {
            //if the boxes have the 'checked' property...
            if (chk.checked == true) {
                //send them to services array
                services.push(chk.id);
            }
            // this was an attempt to validate the checkboxes at load, but it should be unnecessary
            // chk.addEventListener('load', () => {
            //     console.log(chk);
            //     if (chk.checked == true) {
            //         services.push(chk.id);
            //     }
            // })
        })
        //return all checked boxes on change
        this.checkboxes.forEach((chx) => {
            chx.addEventListener('change', (event) => {
                //if checked and not already in services...
                console.log(`${chx.id} changed!`);
                if (chx.checked === true && services.indexOf(event.target.id) == -1) {
                    //add to services
                    services.push(event.target.id);
                }
                //else if un-checked and in services...
                else if (chx.checked === false && services.indexOf(event.target.id) >= 0) {
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
        // })
        // this.cards = document.querySelectorAll('.card');
        // console.log(this.cards);
        // this.poolFilter();
    }

    poolFilter() {
        //1. check which boxes are checked and return only the services which are 'true'
        //2. filter those results down to 3 (create an array, and push/pop the array)
        let services = this.services;
        // console.log(this.services);
        // console.log(poolDealers.dealers);
        // let certz = poolDealers.dealers[0].data.certifications;
        // console.log(certz);
        this.die = [];
        const dealers = poolDealers.dealers;
        console.log(dealers);

        //at this point, we have our filtered checks.
        //now, we need to see what those are and check them against the services the
        //dealers offer. So, we need to...
        //1. look at each item in 'services'
        //2. look at each item in 'certifications' in each dealer
        //3. return the dealers that contain only the items that services is currently showing
        let filtered;
        
        dealers.forEach((item) => {
                filtered = item.data.certifications.filter( (c,i) => {
                return c === services[i]
                });
                    // console.log(c);
                    // console.log(services[i]);
                    // if (c === services[i]) this.die.push(item.data);
                    // return c == services[i];
                // })
        })
        // this.dealers = poolDealers.dealers.filter(
        //     function (d, i) {
        //         return d.data.certifications === services[i];
        //     });
        console.log(this.die);
        console.log(filtered);

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