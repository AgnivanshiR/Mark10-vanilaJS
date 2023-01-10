const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkBtn = document.querySelector('#check-btn');
const noOfNotes = document.querySelectorAll('.no-of-notes')
const message = document.querySelector('#message')

const availableNotes = [2000,500,200,100,50,20,10,5,1]

checkBtn.addEventListener('click', function validateBillCashAmount(){
    hideMessage();
    if(billAmount.value>0){
        if(cashGiven.value>=billAmount.value){
            const amountReturned = cashGiven.value-billAmount.value;
            calculateChange(amountReturned);
        } else {
            showMessage('Bhai, poore paise! nahi to bartan manjna padega')
        }
    } else{
        showMessage('Invalid bill Amount');}
})

function hideMessage(){
    message.style.display = 'none';
}
function showMessage(msg){
    message.style.display = 'block'
    message.innerText = msg;
}

function calculateChange(amountReturned){
    for(let i = 0; i< availableNotes.length; i++){
        const noteCounts = Math.trunc(amountReturned/availableNotes[i])
        amountReturned %= availableNotes[i]
        noOfNotes[i].innerText = noteCounts;
    }
}