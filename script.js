const incomeSection = document.querySelector('.income-area');
const expensesSection = document.querySelector('.expenses-area');

const deleteBtn = document.querySelector('.delete');
//sekcja Options
const availableMoney = document.querySelector('.available-money');
const addTransaciotnBtn = document.querySelector('.add-transaction');
const deleteAll = document.querySelector('.delete-all')
//Zmiana kolorów
const light = document.querySelector('.light');
const dark = document.querySelector('.dark');
//Panel dodawania
const addTransactionPanel = document.querySelector('.add-transaction-panel');
const categorySelect = document.querySelector('#category');
const amountInput = document.querySelector('#amount');
const nameInput = document.querySelector('#name');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');

let root = document.documentElement;
let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArr = [0];


const showPanel = () => {
    addTransactionPanel.style.display = 'flex';
}

const closePanel = () => {
    addTransactionPanel.style.display = 'none';
    clearInputs();
}

const checkForm = () => {
    if (categorySelect.value !== 'none' && nameInput.value !== '' && amountInput.value !== '') {
        createNewTransaction();
    } else {
        alert('Wypełnij wszystkie pola!')
    }
}

const clearInputs = () => {
    categorySelect.selectedIndex = 0;
    nameInput.value = '';
    amountInput.value = '';
}

const createNewTransaction = () => {
    const newTransaction = document.createElement('div');
    newTransaction.classList.add('transaction');

    checkCategory(selectedCategory);

    newTransaction.innerHTML =
        `
        <p class="transaction-name">${categoryIcon} ${nameInput.value}</p>
        <p class="transaction-amount">${amountInput.value} zł
        <button class="delete" onclick="deleteTransaction(${ID})"><i class="fas fa-times"></i></button></p>
        `
    amountInput.value > 0 ? incomeSection.appendChild(newTransaction) && newTransaction.classList.add('income') : expensesSection.appendChild(newTransaction) && newTransaction.classList.add('expense');
    moneyArr.push(parseFloat(amountInput.value));

    checkAmount(moneyArr);
    closePanel();
    ID++;
    clearInputs();
}

const selectCategory = () => {
    selectedCategory = categorySelect.options[categorySelect.selectedIndex].text;
}


const checkCategory = (transaction) => {
    switch (transaction) {
        case '[ + ] Przychód':
            categoryIcon = '<i class="fas fa-money-bill-wave"></i>';
            break;
        case '[ - ] Jedzenie':
            categoryIcon = '<i class="fas fa-hamburger"></i>';
            break;
        case '[ - ] Kino':
            categoryIcon = '<i class="fas fa-film"></i>';
            break;
        case '[ - ] Zakupy':
            categoryIcon = '<i class="fas fa-cart-arrow-down"></i>';
            break;
    }
}

const checkAmount = money => {
    const newMoney = money.reduce((a, b) => a + b);
    availableMoney.textContent = `${newMoney} zł`;
}

const deleteTransaction = id => {
    const transactionToDelete = document.getElementById(id);

    const transactionAmount = parseFloat(transactionToDelete.childNodes[3].innerText);
    console.log(transactionAmount);

    const indexOfTransaction = moneyArr.indexOf(transactionAmount);
    moneyArr.splice(indexOfTransaction, 1);

    transactionToDelete.classList.contains('income') ? incomeSection.removeChild(transactionToDelete) : expensesSection.removeChild(transactionToDelete);

    checkAmount(moneyArr);
}

const deleteAllTransactions = () => {
    incomeSection.innerHTML = '<h3>Przychód</h3>';
    expensesSection.innerHTML = '<h3>Wydatki</h3>';
    availableMoney.textContent = '0zł';
    moneyArr = [0];
}

const changeStyleToLight = () => {
    root.style.setProperty('---first-color', '#f9f9f9');
    root.style.setProperty('---second-color', '#14161f');
    root.style.setProperty('---border-color', 'rgba(0, 0, 0, .2)');
}

const changeStyleToDark = () => {
    root.style.setProperty('---first-color', '#14161f');
    root.style.setProperty('---second-color', '#f9f9f9');
    root.style.setProperty('---border-color', 'rgba(255,255,255,.4');
}


addTransaciotnBtn.addEventListener('click', showPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', checkForm);
deleteAll.addEventListener('click', deleteAllTransactions);
light.addEventListener('click', changeStyleToLight);
dark.addEventListener('click', changeStyleToDark);