import './sass/style.scss';

//Importing JSON (vs fetching) for performance
// import * as poolDealers from './assets/data/dealers.json';

//Next, I'll need 3 functions:
//Function 1: enables UI interactivity (click actions, event listeners, etc.)
//Function 2: performs filtering
//Function 3: for rendering. It will accept the filtered data as a parameter

import PoolParty from './assets/scripts/pool-party';

window.addEventListener('load', () => {
    console.log('window loaded');
    // const items = 'figs';

    const poolParty = new PoolParty();

    // console.log(poolParty);
})


