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