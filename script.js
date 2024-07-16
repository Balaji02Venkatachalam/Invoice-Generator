const img_place=document.getElementById('img-btn');
const input_img=document.getElementById('input_img');
const edit_icon=document.getElementById('edit');
const delete_icon=document.getElementById('delete');
const up_text=document.getElementsByClassName('up_text')[0];

function displayImage() {
    const file = input_img.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            img_place.src = e.target.result;
            img_place.style.width="150px";
            img_place.style.height="100px";
            up_text.style.display="none";
            edit_icon.style.display="block";
            delete_icon.style.display="block";
        };
        reader.readAsDataURL(file);
    }
}

img_place.addEventListener('click',function(){
    input_img.click();
});


input_img.addEventListener('change', function() {
    displayImage();
});


edit_icon.addEventListener('click', function(){
    input_img.click();
});


delete_icon.addEventListener('click', function(){
    img_place.src = './assests/image.png'; 
    input_img.value = ''; 
    up_text.style.display="inline-block";
    edit_icon.style.display="none";
            delete_icon.style.display="none";
});


var com_state=document.getElementById('com_state');
var select_com_state=document.getElementById('com_state_select');
let value;
var com_country=document.getElementById('com_country');
var select_com_country=document.getElementById('select_com_country');
com_state.addEventListener('click',function(){
    if(com_country.value=="India"){
          select_com_state.style.display="inline";
          com_state.style.display="none";
         select_com_state.addEventListener("change",function(){
            if(select_com_state.value)
            {
                val=select_com_state.options[select_com_state.selectedIndex].text;

                com_state.value=val;
                com_state.style.display="inline";
                select_com_state.style.display="none";
            }
         })
          
}});
com_country.addEventListener('click',function(){
  
          select_com_country.style.display="inline";
          com_country.style.display="none";
         select_com_country.addEventListener("change",function(){
            if(select_com_country.value)
            {
                val=select_com_country.options[select_com_country.selectedIndex].text;

                com_country.value=val;
                com_country.style.display="inline";
                select_com_country.style.display="none";
            }
         })
          
});
var com_state_1=document.getElementById('com_state1');
var select_com_state_1=document.getElementById('com_state_select1');
var com_country_1=document.getElementById('com_country1');
var select_com_country_1=document.getElementById('select_com_country1');
com_state_1.addEventListener('click',function(){
    if(com_country_1.value=="India"){
          select_com_state_1.style.display="inline";
          com_state_1.style.display="none";
         select_com_state_1.addEventListener("change",function(){
            if(select_com_state_1.value)
            {
                val=select_com_state_1.options[select_com_state_1.selectedIndex].text;
                com_state_1.value=val;
                com_state_1.style.display="inline";
                select_com_state_1.style.display="none";
            }
         })
          
}});
com_country_1.addEventListener('click',function(){
  
          select_com_country_1.style.display="inline";
          com_country_1.style.display="none";
         select_com_country_1.addEventListener("change",function(){
            if(select_com_country_1.value)
            {
                val=select_com_country_1.options[select_com_country_1.selectedIndex].text;
                com_country_1.value=val;
                com_country_1.style.display="inline";
                select_com_country_1.style.display="none";
            }
         })
          
});
function generateSerialNumber() {
    let serialNumber = localStorage.getItem('serialNumber');
    const prefix = "INV-";
    if (serialNumber === null) {
        serialNumber = 0;
    } else {
        serialNumber = parseInt(serialNumber, 10);
        serialNumber++;
    }
    localStorage.setItem('serialNumber', serialNumber);
    return prefix + serialNumber.toString().padStart(4, '0');
}

window.onload = function() {
    const newSerialNumber = generateSerialNumber();
    document.getElementById('inv_no').value = newSerialNumber;
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    const year = currentDate.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;
   
    document.getElementById('due-date').value=formattedDate;
    document.getElementById('invoice-date').value=formattedDate;
};
 const placeOsup= document.getElementById("placeOsup");
 const placeOsup_select=document.getElementById("placeOsup_select");
 placeOsup.addEventListener('click',function(){
    placeOsup_select.style.display="inline";
    placeOsup.style.display="none";
         placeOsup_select.addEventListener("change",function(){
            if(placeOsup_select.value)
            {
                val=placeOsup_select.options[placeOsup_select.selectedIndex].text;
                placeOsup.value=val;
                placeOsup.style.display="inline";
               placeOsup_select.style.display="none";
            }
         })
 });const currency_in=document.getElementById('currency_in');
 const currency_select=document.getElementById('currency_select');

currency_in.addEventListener('click',function(){
  
          currency_select.style.display="inline";
          currency_in.style.display="none";
         currency_select.addEventListener("change",function(){
            if(currency_select.value)
            {
                val=currency_select.options[currency_select.selectedIndex].value;
                currency_in.value=val;
              currency_in.style.display="inline";
               currency_select.style.display="none";
            }
         })
         calculateTotal();
});
let rc = 1;
const new_item = document.getElementById('new_item');

function calculateAmount(rowNumber) {
    const q = document.getElementById(`q_${rowNumber}`).value;
    const price = document.getElementById(`price_${rowNumber}`).value;
    const amount = (q * price).toFixed(3);
    document.getElementById(`amount_${rowNumber}`).value = amount;
    updateSubtotal();
    updateAmountTable();
}
function updateSubtotal() {
    let subtotal = 0;
    const table = document.getElementById('cost_table');
    const rows = table.querySelectorAll('tr[id^="row"]');
    rows.forEach(row => {
        let amount = parseFloat(row.querySelector('.text[id^="amount_"]').value);
        if (!isNaN(amount)) {
            subtotal += amount;
        }
    });

    document.getElementById('subtotal').textContent = subtotal.toFixed(3);
}
document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('cost_table');
    table.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('delete-btn')) {
            const row = event.target.closest('tr');
            row.parentNode.removeChild(row);
            updateSubtotal(); 
            updateAmountTable();
        }
    });
    const existingRows = table.querySelectorAll('tr[id^="row"]');
    existingRows.forEach(row => {
        const rowId = parseInt(row.id.replace('row', ''));
        calculateAmount(rowId);
        updateAmountTable();
    });
});

new_item.addEventListener('click', function() {
    let table = document.getElementById("cost_table");
    let newrow = document.createElement("tr");
    let newrowid = 'row' + (rc++);
    newrow.innerHTML = `
        <td>
            <textarea>Enter Item name/description</textarea><br>
            <input type="text" placeholder="HSN/SAC">
        </td>        
        <td><input type="number" class="text" value="0" id="q_${rc}" onchange="calculateAmount(${rc}); calculateTax(${rc})"></td>
        <td><input type="text" value="0.000" class="text" id="price_${rc}" onchange="calculateAmount(${rc}); calculateTax(${rc})"></td>
        <td>
            <input type="number" class="text" value="0" id="sgst_percent_${rc}" onchange="calculateTax(${rc})"><br>
            <input type="text" value="0.000" class="text" id="sgst_rate_${rc}" readonly>
        </td>
        <td>
            <input type="number" class="text" value="0" id="cgst_percent_${rc}" onchange="calculateTax(${rc})"><br>
            <input type="text" value="0.000" class="text" id="cgst_rate_${rc}" readonly>
        </td>
        <td>
            <input type="number" class="text" value="0" id="cess_percent_${rc}" onchange="calculateTax(${rc})"><br>
            <input type="text" value="0.000" class="text" id="cess_rate_${rc}" readonly>
        </td>
        <td><input type="text" value="0.000" class="text" id="amount_${rc}" readonly></td>
        <td class="delete-col"><i class="fa-regular fa-circle-xmark delete-btn" id="x_${rc}" onclick="deleteRow(${rc})"></i></td>`;
    newrow.setAttribute("id", newrowid);
    table.appendChild(newrow);
});

document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('cost_table');
    table.addEventListener('change', function(event) {
        const target = event.target;
        if (target.tagName === 'INPUT' && target.type === 'number') {
            const row = target.closest('tr');
            const rowNumber = parseInt(row.id.replace('row', ''));
            calculateAmount(rowNumber);
            calculateTax(rowNumber);
        }
    });
});

function calculateTax(rowNumber) {
    const amount = parseFloat(document.getElementById(`amount_${rowNumber}`).value) || 0;

    const sgstPercent = parseFloat(document.getElementById(`sgst_percent_${rowNumber}`).value) || 0;
    const sgstRate = (amount * sgstPercent / 100).toFixed(3);
    document.getElementById(`sgst_rate_${rowNumber}`).value = sgstRate;

    const cgstPercent = parseFloat(document.getElementById(`cgst_percent_${rowNumber}`).value) || 0;
    const cgstRate = (amount * cgstPercent / 100).toFixed(3);
    document.getElementById(`cgst_rate_${rowNumber}`).value = cgstRate;

    const cessPercent = parseFloat(document.getElementById(`cess_percent_${rowNumber}`).value) || 0;
    const cessRate = (amount * cessPercent / 100).toFixed(3);
    document.getElementById(`cess_rate_${rowNumber}`).value = cessRate;
    updateAmountTable();
}
function deleteRow(rowNumber) {
    let row = document.getElementById(`row${rowNumber}`);
    row.parentNode.removeChild(row);
    updateSubtotal(); 
    updateAmountTable() ;
}

function updateAmountTable() {
    let sgstTotal = 0;
    let cgstTotal = 0;
    let cessTotal = 0;
    let table = document.getElementById("cost_table");
    for (let i = 1; i < table.rows.length; i++) {
        let amount = parseFloat(document.getElementById(`amount_${i}`).value);
        if (amount > 0) {
            let sgstRate = parseFloat(document.getElementById(`sgst_rate_${i}`).value);
            let cgstRate = parseFloat(document.getElementById(`cgst_rate_${i}`).value);
            let cessRate = parseFloat(document.getElementById(`cess_rate_${i}`).value);
            sgstTotal += sgstRate;
            cgstTotal+=cgstRate;
            cessTotal+=cessRate;
        }
    }
    document.getElementById("sgst_value").textContent = sgstTotal.toFixed(2);
    document.getElementById("cgst_value").textContent = cgstTotal.toFixed(2);
    document.getElementById("cess_value").textContent = cessTotal.toFixed(2);
    calculateTotal();

}
function calculateTotal() {

    let subtotal = parseFloat(document.getElementById("subtotal").textContent);
    let sgstValue = parseFloat(document.getElementById("sgst_value").textContent);
    let cgstValue = parseFloat(document.getElementById("cgst_value").textContent);
    let cessValue = parseFloat(document.getElementById("cess_value").textContent);

    
    let total = subtotal + sgstValue + cgstValue + cessValue;
    let totalField = document.getElementById("Total");
    totalField.value = total; 
    console.log(totalField.value);
}
