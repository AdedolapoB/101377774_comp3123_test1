function createResolvedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const successMessage = 'Delayed success!';
      resolve({ message: successMessage });
    }, 500);
  });
}

function createRejectedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        throw new Error('Delayed exception!');
      } catch (error) {
        reject({ error: error.message });
      }
    }, 500);
  });
}

// Handle the resolvedPromise
createResolvedPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

// Handle the rejectedPromise
createRejectedPromise()
  .then(() => {
    // This block won't be executed since it's a rejected promise
  })
  .catch((error) => {
    console.error(error);
  });