import express from 'express';

const app = express();


app.get('/', (req,res) => {
	res.send({hi: 'there'});
});

// deployment checklist


app.listen(3004, () => console.log('Example app listening on port 3004!'))
