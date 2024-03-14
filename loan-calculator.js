function updateMonths() {
    var years = document.getElementById('years').value;
    document.getElementById('months').value = years * 12;
}

function updateYears() {
    var months = document.getElementById('months').value;
    document.getElementById('years').value = (months / 12).toFixed(2);
}

function calculateLoan() {
    var amount = document.getElementById('amount').value;
    var interest = document.getElementById('rate').value;
    var years = document.getElementById('years').value;
    var months = document.getElementById('months').value;
    
    var principal = parseFloat(amount);
    var interest = parseFloat(interest) / 100 / 12;
    var calculatedPayments = years * 12;
  
    var x = Math.pow(1 + interest, calculatedPayments);
    var monthly = (principal * x * interest) / (x - 1);
  
    if (isFinite(monthly)) {
        document.getElementById('monthly-payment').innerText = monthly.toFixed(2);
        document.getElementById('total-payment').innerText = (monthly * calculatedPayments).toFixed(2);
        document.getElementById('total-interest').innerText = ((monthly * calculatedPayments) - principal).toFixed(2);
        document.getElementById('scroll-here').scrollIntoView({ behavior: 'smooth' });
        document.getElementById('results').classList.remove('bg-light');
        document.getElementById('results').classList.add('bg-info');
        setTimeout(() => {
            document.getElementById('results').classList.remove('bg-info')
            document.getElementById('results').classList.add('bg-light')
        }, 1500);

    }

  }
  