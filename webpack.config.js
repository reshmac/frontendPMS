module.exports = (env) => {
	switch( env.env ){
	    case 'dev': return require('./webpack.dev.js');
	    case 'prod': return require('./webpack.production.js');
	    default: return;
	}
	
	//return require('./webpack.dev.js');
	//return require(`./webpack.${env}.js`); // works only with es6
}
