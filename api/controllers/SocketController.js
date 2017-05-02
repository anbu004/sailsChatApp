/**
 * SocketsController
 *
 * @description :: Server-side logic for managing sockets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


function subUserStatus(req, res) {
  var id = req.params.id;
  sails.sockets.join(req.socket, 'user:' + id);
  res.ok();
}

function unsubUserStatus(req, res) {
  var id = req.params.id;
  sails.sockets.leave(req.socket, 'user:' + id);
  res.ok();
}

function subAllUsersStatus(req, res) {
  sails.sockets.join(req.socket, 'usersstate');
  res.ok();
}

function unsubAllUsersStatus(req, res) {
  sails.sockets.leave(req.socket, 'usersstate');
  res.ok();
}

module.exports = {
  subUserStatus : subUserStatus,
  subAllUsersStatus : subAllUsersStatus,
  unsubUserStatus : unsubUserStatus,
  unsubAllUsersStatus : unsubAllUsersStatus
};
