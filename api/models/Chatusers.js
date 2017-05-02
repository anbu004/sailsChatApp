module.exports = {
  attributes: {
    icon: {
      type: 'string'
    },
    name: {
      type: 'text'
    },
    message: {
      type: 'text'
    }
  },

  afterCreate: function(entry, cb) {
    sails.sockets.broadcast('chatusers', 'new_entry', entry);
	console.log("entry444>>>>",entry)
    cb();
  }
};
