import * as poolDealers from './assets/data/dealers.json';

export default class PoolParty {

    constructor() {
        this.poolFilter();
    }

    //Function 1: enables UI interactivity (click actions, event listeners, etc.)
    //Function 2: performs filtering
    //Function 3: for rendering. It will accept the filtered data as a parameter
    
    poolFilter() {
        console.log(poolDealers);
    }
}