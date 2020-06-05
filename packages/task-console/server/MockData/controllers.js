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

    if (task[0].referenceName === 'ConfirmTravel') {
      res.send(confirmTravelForm);
    } else if (task[0].referenceName === 'VisaApplication') {
      res.send(applyForVisaForm);
    }
  },

  getTaskFormTemplate: (req, res) => {

    console.log(
      `......ProcessId:${req.params.processId} --taskReferenceName:${req.params.taskReferenceName} --taskId:${req.params.taskId}`
    );

    if(req.params.taskId === "00000000-0000-0000-0000-000000000000") {
      fs.readFile(__dirname + '/formTemplates/form.html', null, (error, buffer) => {
        if (error) {
          console.log("Error: " + error);
          res.status(500).send(error);
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/html'
          });
          res.write(buffer.toString('utf8'));
          res.end();
        }
      })
    } else {
      res.status(500).send("Cannot find form");
    }
  }
};
