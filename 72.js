
function timerPromise(seconds) {
  return new Promise((reslove, reject) => {
    if (seconds < 0) {
      reject("Invaild time!");
    } else {
      setTimeout(() => {
        reslove(`Done after ${seconds} seconds!`);
      },seconds *1000);
    }
  });
}

async function finalRunner() {
    try {
        let timer1 = await timerPromise(3);
        console.log(timer1);

        let timer2 = await timerPromise(2);
        console.log(timer2);

        let timer3 = await timerPromise(1);
        console.log(timer3);
    } catch (error) {
        console.log(error);
    }
}

finalRunner();