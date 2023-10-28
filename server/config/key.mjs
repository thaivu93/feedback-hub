// key.js figure out what set of credential to return
import ProdKeys from './prod.mjs';
import DevKeys from './dev.mjs';

export let key;

if (process.env.NODE_ENV === 'production') {
	// we are in production - return the prod key set
    key = ProdKeys;
} else {
	// we are in development - return the dev key set
	key = DevKeys	;
}
