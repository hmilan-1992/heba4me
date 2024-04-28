function redirectTo(page) {
    window.location.href = page;
}

document.getElementById('totalIncomeBtn').addEventListener('click', function() {
    alert('Total Income Button Clicked');
});

document.getElementById('incomeBtn').addEventListener('click', function() {
    alert('Income Button Clicked');
});

document.getElementById('remainingIncomeBtn').addEventListener('click', function() {
    alert('Remaining Income Button Clicked');
});

document.getElementById('loansPageBtn').addEventListener('click', function() {
    document.querySelector('.welcome-page').style.display = 'none';
    document.querySelector('.loans-page').style.display = 'block';
});

document.getElementById('submitLoanBtn').addEventListener('click', function() {
    var selectedEmployee = document.getElementById('employeeSelect').value;
    var loanAmount = document.getElementById('loanAmountInput').value;
    alert('Loan submitted for ' + selectedEmployee + ' in the amount of ' + loanAmount);
});

function addExport() {
    const exportInputs = document.getElementById("exportInputs");
    const exportAmountInput = document.createElement("input");
    const exportDetailsInput = document.createElement("input");
    exportAmountInput.type = "number";
    exportAmountInput.className = "exportAmount";
    exportAmountInput.name = "exportAmount";
    exportAmountInput.placeholder = "المبلغ";
    exportDetailsInput.type = "text";
    exportDetailsInput.className = "exportDetails";
    exportDetailsInput.name = "exportDetails";
    exportDetailsInput.placeholder = "تفاصيل الصادر";
    exportInputs.appendChild(exportAmountInput);
    exportInputs.appendChild(exportDetailsInput);
}

function calculateTotal() {
    const totalAmount = parseFloat(document.getElementById("totalAmount").value);
    const vegetableIncome = parseFloat(document.getElementById("vegetableIncome").value);
    let exportTotal = 0;
    const exportAmountInputs = document.getElementsByClassName("exportAmount");
    for (let i = 0; i < exportAmountInputs.length; i++) {
        exportTotal += parseFloat(exportAmountInputs[i].value);
    }
    const remainingIncome = totalAmount + vegetableIncome - exportTotal;
    alert("المبلغ المتبقي: " + remainingIncome);
    // هنا يمكنك إضافة رمز لإرسال المبلغ المتبقي إلى الصفحة الرئيسية أو حفظه في قاعدة البيانات
}
