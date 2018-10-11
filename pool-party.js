import * as poolDealers from './assets/data/dealers.json';

export default class PoolParty {

    constructor() {
        this.poolFilter();
    }

    poolFilter() {
        console.log(poolDealers);
    }
}