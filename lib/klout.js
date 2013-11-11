/*
 * klout
 * https://github.com/THEtheChad/klout
 *
 * Copyright (c) 2013 THEtheChad
 * Licensed under the MIT license.
 */
var PROTOCOL = "http";
var BASE = "api.klout.com";
var VERSION = "v2";
var ROOT = PROTOCOL + '://' + BASE + '/' + VERSION + '/';

function Klout(config){
	var self = this;
	self.key = config.key;
}

Klout.prototype = {

	user: function(id, end_point, cb){
		return HTTP.get(ROOT + 'user.json/' + id + '/' + end_point + '?key=' + this.key, cb);
	},

	identity: function(id, end_point, cb){
		return HTTP.get(ROOT + 'identity.json/' + id, cb);
	},

	score: function(id, cb){
		return this.user(id, 'score', cb);
	},

	influence: function(id, cb){
		return this.user(id, 'influence', cb);
	},

	topics: function(ids, cb){
		return this.user(id, 'topics', cb);
	},

	getId: function(id, cb){
		var id_num = +id;

		// id is not a number (ie screenName)
		if(id_num != id_num){
			return this.identity(id, 'twitter?screenName=', cb);
		}
		else{
			return this.identity(id, 'tw/', cb);
		}
	}
};