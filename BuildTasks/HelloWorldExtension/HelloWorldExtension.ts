import * as tl from "azure-pipelines-task-lib/task";

async function run() {
    try {
      const version = tl.getInput('Message', true);
      console.log("Hello World!");  
      console.log(version);      
    }
    catch (err) {
      tl.warning(err);
      tl.setResult(tl.TaskResult.Failed, err.message);
    }
  }
  
  run();