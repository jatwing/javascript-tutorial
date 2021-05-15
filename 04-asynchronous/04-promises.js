const topping = 'pepperoni';
const kitchen = {};
const isLucky = () => Math.random() < 0.8;
const getRandomString = (length) => {
  const result = [];
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const size = characters.length;
  for (let i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * size)));
  }
  return result.join('');
};
/*
 * callback
 */
const chooseTopping = (successCallback, failureCallback, topping) => {
  console.log(`choose topping: ${topping}`);
  setTimeout(() => {
    isLucky() ? successCallback(topping) : failureCallback();
  }, 100);
};
const placeOrder = (successCallback, failureCallback) => (topping) => {
  const order = getRandomString(5);
  kitchen[order] = `delicious ${topping} pizza`;
  console.log(`place order: ${order}`);
  setTimeout(() => {
    isLucky() ? successCallback(order) : failureCallback();
  }, 100);
};
const collectOrder = (successCallback, failureCallback) => (order) => {
  const pizza = kitchen[order];
  console.log(`collect order: ${order}`);
  setTimeout(() => {
    isLucky() ? successCallback(pizza) : failureCallback();
  }, 100);
};
const eatPizza = (pizza) => {
  console.log(`eat: ${pizza}`);
};
const cry = () => {
  console.log('cry');
};
// chooseTopping(placeOrder(collectOrder(eatPizza, cry), cry), cry, topping);

/*
 * promise
 */
const error = new Error('cry');
const chooseToppingPromise = new Promise((resolve, reject) => {
  console.log(`choose topping: ${topping}`);
  setTimeout(() => {
    isLucky() ? resolve(topping) : reject(error);
  }, 100);
});
const placeOrderPromise = (topping) =>
  new Promise((resolve, reject) => {
    const order = getRandomString(5);
    kitchen[order] = `delicious ${topping} pizza`;
    console.log(`place order: ${order}`);
    setTimeout(() => {
      isLucky() ? resolve(order) : reject(error);
    }, 100);
  });
const collectOrderPromise = (order) =>
  new Promise((resolve, reject) => {
    const pizza = kitchen[order];
    console.log(`collect order: ${order}`);
    setTimeout(() => {
      isLucky() ? resolve(pizza) : reject(error);
    }, 100);
  });

chooseToppingPromise
  .then((topping) => {
    return placeOrderPromise(topping);
  })
  .then((order) => {
    return collectOrderPromise(order);
  })
  .then((pizza) => {
    console.log(`eat: ${pizza}`);
  })
  .catch((e) => {
    console.log(e.message);
  });


