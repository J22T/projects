// Create an array with 4 trees listed
const trees = ['Oak', 'Pine', 'Aspen', 'Bald Cypress']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

// Display the list of trees inside the displayResults div
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length}
}

listTrees()

document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood')
    listTrees()
}

// Add a pear to the start

document.querySelector('#add_pear').onclick = () => {
    trees.unshift('Pear')
    listTrees()
}

document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0 {
        trees.shift()
        listTrees()
    } else {
        errorElement.textContent = 'Dude, I cannot remove
        the first tree cause there are no trees!'
    }
}