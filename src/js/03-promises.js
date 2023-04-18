import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onForm);

function onForm(evt) {
  evt.preventDefault();

  const onDelay = evt.currentTarget.delay.valueAsNumber;
  const onStep = evt.currentTarget.step.valueAsNumber;
  const onAmount = evt.currentTarget.amount.valueAsNumber;

  for (let i = 0; i < onAmount; i += 1) {
    let position = i + 1;
    let delay = onDelay + onStep * i;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  evt.currentTarget.reset();
}

//
function createPromise(position, delay) {
  return new Promise((ok, failed) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        ok({ position, delay });
      } else {
        // Reject
        failed({ position, delay });
      }
    }, delay);
  });
}
