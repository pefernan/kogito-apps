const fs = require('fs');
const confirmTravelForm = require('./forms/ConfirmTravel');
const applyForVisaForm = require('./forms/ApplyForVisa');

const restData = require('./rest');

module.exports = controller = {
  callCompleteTask: (req, res) => {
    console.log(
      `......ProcessId:${req.params.processId} --piId:${req.params.processId} --taskId:${req.params.taskId}`
    );

    const processId = restData.process.filter(data => {
      return data.processId === req.params.processId;
    });

    const piTasks = processId[0].instances.filter(err => {
      return err.processInstanceId === req.params.processInstanceId;
    });

    const task = piTasks[0].tasks.filter(err => {
      return err.taskId === req.params.taskId;
    });

    switch (task[0].complete) {
      case 'success':
        res.send(task[0].message);
        break;
      case 'failed':
        res.status(500).send(task[0].message);
        break;
    }
  },

  getTaskForm: (req, res) => {
    console.log(
      `......ProcessId:${req.params.processId} --piId:${req.params.processId} --taskId:${req.params.taskId}`
    );

    const processId = restData.process.filter(data => {
      return data.processId === req.params.processId;
    });

    const piTasks = processId[0].instances.filter(err => {
      return err.processInstanceId === req.params.processInstanceId;
    });

    const task = piTasks[0].tasks.filter(err => {
      return err.taskId === req.params.taskId;
    });

    Object.keys(task[0]).forEach(key => {
      console.log(key + ": " + task[0][key])
    });

    if (task[0].referenceName === 'ConfirmTravel') {
      res.send(confirmTravelForm);
    } else if (task[0].referenceName === 'VisaApplication') {
      res.send(applyForVisaForm);
    }
  },

  getTaskFormTemplate: (req, res) => {

    const processId = restData.process.filter(data => {
      if(req.params.processId === 'travels' && req.params.taskReferenceName === 'ConfirmTravel') {
        fs.readFile('./formTemplates/ConfirmTravel.html', null, buffer => {
          if (error) {
            res.status(500).send("Cannot find form");
          } else {
            res.writeHead(200, {
              'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
          }
        })
      } else {
        res.status(500).send("Cannot find form");
      }
    });


  }
};
