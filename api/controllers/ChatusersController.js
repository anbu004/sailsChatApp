module.exports = {
	subscribe: function(req, res) {
	console.log("req333>>>>",req)
    if( ! req.isSocket) {
      return res.badRequest();
    }

		sails.sockets.join(req.socket, 'chatusers');

		return res.ok();
	}
	
	
};
