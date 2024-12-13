let packaging = 25;
let shipping = 60;
let promotion = 10;
let hosting = 10;
let total = packaging + shipping + promotion + hosting;

document.getElementById("packaging").innerHTML = packaging;
document.getElementById("shipping").innerHTML = shipping;
document.getElementById("promotion").innerHTML = promotion;
document.getElementById("hosting").innerHTML = hosting;
document.getElementById("total").innerHTML = total;

function calc() {
    let product_price = Number(document.getElementById("product_price").value); // تحويل القيمة إلى رقم وأخذ أقرب عدد صحيح أعلى
    let currency = Number(document.getElementById("currency").value)
    let conversion = product_price * currency
    let profit = Number(document.getElementById("profit").value);
    let discount_rate = Number(document.getElementById("discount_rate").value) / 100; // تحويل النسبة إلى عدد عشري

    let pp = conversion + total + profit; // الحساب الصحيح للسعر قبل الخصم

    // التحقق من أن معدل الخصم صالح
    if (discount_rate >= 0 && discount_rate <= 1) {
        let final_price = pp / (1 - discount_rate); // الحساب النهائي للسعر
        document.getElementById("egy").innerHTML = Math.ceil(conversion.toFixed(2));
        document.getElementById("price").innerHTML = Math.ceil(final_price.toFixed(2)); // تقليل الكسور العشرية
        document.getElementById("discount_price").innerHTML = Math.ceil(pp.toFixed(2));
        document.getElementById("discount").innerHTML = Math.ceil((discount_rate * 100).toFixed(2));
        document.getElementById("profit_result").innerHTML = Math.ceil(profit.toFixed(2));

        document.getElementById("price2").innerHTML = Math.ceil(final_price.toFixed(2)); // تقليل الكسور العشرية
        document.getElementById("discount_price2").innerHTML = Math.ceil(pp.toFixed(2));
    } else {
        alert("يرجى إدخال معدل خصم صحيح (0 إلى 100).");
    }
}
