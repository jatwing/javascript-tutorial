function timeoutPromiseResolve(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("successful");
    }, interval);
  });
};

function timeoutPromiseReject(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      reject("error");
    }, interval);
  });
};

async function timeTestSlow() {
  await timeoutPromiseResolve(5000);
  await timeoutPromiseReject(2000);
  await timeoutPromiseResolve(3000);
}


let startTime = Date.now();
timeTestSlow().then(() => {})
.catch(e => {
  console.log(e);
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  console.log("Time taken in milliseconds: " + timeTaken);
})


/*
 * run in parallel and catch error properly, we use Promise.all()
 */


async function timeTestParallel() {
  const timeoutPromiseResolve1 = timeoutPromiseResolve(5000);
  const timeoutPromiseReject2 = timeoutPromiseReject(2000);
  const timeoutPromiseResolve3 = timeoutPromiseResolve(3000);

  const results = await Promise.all([timeoutPromiseResolve1, timeoutPromiseReject2, timeoutPromiseResolve3]);
  return results;
}

timeTestParallel().then(() => {
}).catch(e => {
  console.log(e);
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  console.log("Time taken (parallel) in milliseconds: " + timeTaken);
})



