let message

const pizza = {
    crust: 'thin',
    size: 'small',
    topping: 'pepperoni',
    buildPizza: function () {
        console.log('buildPizza method has been called')
        message = `Baking a pizza on a ${pizza.crust} crust with a topping and cheese
        just for you.`
        document.querySelector('#feedback').textContent = message
    },
    shoppingList: () => {
        if (pizza.crust ==== 'thick') flour *= 2
        // do the same for large property
        message = `You will need to purchase ${flour} cups of flour and 1 lb of ${pizza.topping}.`
        document.querySelector('#feedback').textContent = message
    }
}

document.querySelector('#thin')
.addEventListener('click', () =>
pizza.crust = 'thin')

document.querySelector('#thick')
.addEventListener('click', () =>
pizza.crust = 'thick')

// same thing for toppings and size

document.querySelector('#build').addEventListener('click', pizza.buildPizza)

// hook up the shoppingList method here