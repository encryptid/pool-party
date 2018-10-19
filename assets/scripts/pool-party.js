import * as poolDealers from '../data/dealers.json';

export default class PoolParty {

    constructor(i) {
        // this.items = i;
        this.services = [];
        this.checkboxes = null;
        this.poolPartyPlanning();
        this.poolFilter();
        this.poolView();
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
        this.cards = document.querySelectorAll('.card');
    }

    poolFilter() {
        //1. check which boxes are checked and return only the services which are 'true'
        //2. filter those results down to 3 (create an array, and push/pop the array)
        let services = this.services;
        //test services:
        // let services = ["Service Pro", "Installation Pro", "Residential Pro", "Commercial Pro"]
        // let services = ["Residential Pro", "Installation Pro", "Service Pro"]
        
        const dealers = poolDealers.dealers;
        console.log(dealers);

        //at this point, we have our filtered checks.
        //now, we need to see what those are and check them against the services the
        //dealers offer. So, we need to...
        //1. look at each item in 'services'
        //2. look at each item in 'certifications' in each dealer
        //3. return the dealers that contain only the items that services is currently showing
        
        //compare two arrays. If the first one has a word from the second, return true
        let filtered = [];
        
        let matchedArrays = (arr1, arr2) => {
            let match = true
            arr2.forEach((word) => {
                if (!arr1.includes(word)) {
                    match = false
                } 
            });
            return match
        }
        
        dealers.forEach((item) => {
            //passing our two arrays through and pushing them to a new array.
            if (matchedArrays(item.data.certifications, services) === true){
                filtered.push(item.data);
            };
        })
        
        console.log(filtered);
        console.log(`${filtered.length} result(s)!`);
        this.filtered = filtered;
    }

    poolView() {
        const cards = this.cards;
        const results = this.filtered;
        //create an array of only the items we want to render
        let render = results.slice(0,3);
        //if I had more time, I would create another array with the leftover results
        // for updating
        render.forEach((item, i) => {
            console.log(item, i);

            //a better method would be to attach querySelectors and update them individually
            // but this is for show for now
            cards[i].innerHTML = `
                <div class="card-header">
                    <h3>${render[i].name}</h3>
                </div>
                <hr>
                <a href="tel:${render[i].phone1}">
                    <div class='phone'>
                        <img class="desktop" src="assets/images/phone-icon-desktop.png">
                        <img class="mobile tel" src="assets/images/phone-icon-mobile.png">
                        <span class="mobile ttc">Tap to call</span>
                        <span class='tel-num'>${render[i].phone1}</span>
                    </div>
                </a>
                <p>Can't talk now? Click below to send an email.</p>
                <button><img src="assets/images/email-icon.png"><span>Contact this Pro</span></button>
                <div id="hours">
                    <h4>Business Hours</h4>
                    <p>Weekdays 7:00am - 7:00pm</p>
                    <p>Saturdays 7:00am - 3:00pm</p>
                    <p>Sundays - CLOSED</p>
                </div>
                <footer>
                    <div class='icon'>
                        <img src="assets/images/star-installation-pro.png">
                        <span>Installation Pro</span>
                    </div>
                    <div class='icon'>
                        <img src="assets/images/gear-service-pro.png">
                        <span>Service Pro</span>
                    </div>
                    <div class='icon'>
                        <img src="assets/images/home-residential-pro.png">
                        <span>Residential Pro</span>
                    </div>
                </footer>
            `
        });

    }
}