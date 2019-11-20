'use strict';

let middleware = require('./api/middleware/middleware');
class HandlerGenerator {
  login(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    // For the given username fetch user from DB
    let mockedUsername = 'admin';
    let mockedPassword = 'password';

    if (username && password) {
      if (username === mockedUsername && password === mockedPassword) {
        let token = jwt.sign({username: username},
            config.secret,
            {
              expiresIn: '24h' // expires in 24 hours
            }
        );
        // return the JWT token for the future API calls
        res.json({
          success: true,
          message: 'Authentication successful!',
          token: token
        });
      } else {
        res.send(403).json({
          success: false,
          message: 'Incorrect username or password'
        });
      }
    } else {
      res.send(400).json({
        success: false,
        message: 'Authentication failed! Please check the request'
      });
    }
  }

  index(req, res) {
    res.json({
      success: true,
      message: 'Index page'
    });
  }
}

module.exports = function(app) {
  let handlers = new HandlerGenerator();
  var todoList = require('../controllers/todoListController');
  // todoList Routes
  app.route('/tasks')
      .get(middleware.checkToken, todoList.list_all_tasks)
      .post(todoList.create_a_task);


  app.route('/tasks/:taskId')
      .get(todoList.read_a_task)
      .put(todoList.update_a_task)
      .delete(todoList.delete_a_task);
};
