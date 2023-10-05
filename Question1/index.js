function lowerCaseWords(inputArray) {
  return new Promise((resolve, reject) => {
    const validLowercaseWords = inputArray
      .filter(item => typeof item === 'string')
      .map(item => item.toLowerCase());

    if (validLowercaseWords.length > 0) {
      resolve(validLowercaseWords);
    } else {
      reject(new Error('No valid lowercase words found in the input array'));
    }
  });
}

const customArray = ['Pizza', 'Wings', 42, true, 'Burger'];

lowerCaseWords(customArray)
  .then(lowercaseWords => {
    console.log('Lowercased words:', lowercaseWords);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

  