// 0-promise.js
function getResponseFromAPI() {
  return new Promise((resolve) => {
    // You can resolve the promise immediately or perform some async operation
    // For now, let's resolve it immediately
    resolve();
  });
}

export default getResponseFromAPI;
