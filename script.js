// ===============================
// PAGE LOADED
// ===============================

console.log("Payments Page Loaded Successfully!");


// ===============================
// SIDEBAR ACTIVE MENU
// ===============================

const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(menu => {
            menu.classList.remove("active");
        });

        item.classList.add("active");

    });

});


// ===============================
// PAYMENT METHOD SELECT
// ===============================

const paymentOptions =
document.querySelectorAll(".payment-option");

paymentOptions.forEach(option => {

    option.addEventListener("click", () => {

        paymentOptions.forEach(item => {
            item.classList.remove("selected");
        });

        option.classList.add("selected");

    });

});


// ===============================
// CARD NUMBER FORMAT
// ===============================

const cardNumber =
document.getElementById("cardNumber");

if(cardNumber){

    cardNumber.addEventListener("input", function() {

        let value =
        this.value.replace(/\D/g, "");

        value = value.substring(0,16);

        value = value.replace(
            /(\d{4})(?=\d)/g,
            "$1 "
        );

        this.value = value;

    });

}


// ===============================
// EXPIRY DATE FORMAT
// ===============================

const expiry =
document.getElementById("expiry");

if(expiry){

    expiry.addEventListener("input", function() {

        let value =
        this.value.replace(/\D/g, "");

        if(value.length > 2){

            value =
            value.substring(0,2)
            + "/" +
            value.substring(2,4);

        }

        this.value = value;

    });

}


// ===============================
// CVV ONLY NUMBERS
// ===============================

const cvv =
document.getElementById("cvv");

if(cvv){

    cvv.addEventListener("input", function() {

        this.value =
        this.value
        .replace(/\D/g, "")
        .substring(0,3);

    });

}


// ===============================
// PAYMENT BUTTON
// ===============================

const payBtn =
document.getElementById("payBtn");

if(payBtn){

    payBtn.addEventListener("click", () => {

        const cardName =
        document.getElementById("cardName").value;

        const cardNumber =
        document.getElementById("cardNumber").value;

        const expiry =
        document.getElementById("expiry").value;

        const cvv =
        document.getElementById("cvv").value;

        if(
            cardName === "" ||
            cardNumber === "" ||
            expiry === "" ||
            cvv === ""
        ){

            alert(
                "Please fill all fields!"
            );

            return;
        }

        if(cardNumber.length < 19){

            alert(
                "Enter valid Card Number!"
            );

            return;
        }

        if(cvv.length < 3){

            alert(
                "Enter valid CVV!"
            );

            return;
        }

        alert(
            "Payment Successful!"
        );

    });

}


// ===============================
// BUTTON HOVER EFFECT
// ===============================

if(payBtn){

    payBtn.addEventListener("mouseenter", () => {

        payBtn.style.transform =
        "scale(1.02)";

    });

    payBtn.addEventListener("mouseleave", () => {

        payBtn.style.transform =
        "scale(1)";

    });

}


// ===============================
// LOGOUT BUTTON
// ===============================

const logout =
document.querySelector(".logout");

if(logout){

    logout.addEventListener("click", () => {

        const result =
        confirm(
            "Are you sure you want to Sign Out?"
        );

        if(result){

            alert(
                "Signed Out Successfully!"
            );

        }

    });

}