
// i have added validation for all , and i used both js and html,and the font will inscrease it's size for mobile screen



$(document).ready(function () {
    // Initialize Swiper
    const swiper = new Swiper('.swiper', {
        speed: 400,
        spaceBetween: 100,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Configure the jQuery Validation Plugin for showing errors 
    $.validator.addMethod(
        "phonePattern",
        function (value, element) {
            return this.optional(element) || /^\d{3}-\d{3}-\d{4}$/.test(value);
        },
        "Please enter a valid US phone number (e.g., 123-456-7890)"
    );

    $.validator.addMethod(
        "zipPattern",
        function (value, element) {
            return this.optional(element) || /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/.test(value);
        },
        "Please enter a valid zip code"
    );

    $.validator.addMethod(
        "ccPattern",
        function (value, element) {
            return this.optional(element) || /^\d{10}$/.test(value);
        },
        "Please enter a valid 10-digit credit card number"
    );

    
    $.validator.addMethod(
        "cvvPattern",
        function (value, element) {
            return this.optional(element) || /^\d{3}$/.test(value);
        },
        "Please enter a valid 3-digit CVV"
    );

    // School form
    $("#schoolForm").validate({
        onfocusout: function (element) {
            this.element(element);
        },
        onkeyup: false,
        rules: {
            schoolName: "required",
            joinDate: "required",
            graduated: "required",
        },
        messages: {
            schoolName: "Please enter the school name",
            joinDate: "Please enter the join date",
            graduated: "Please select graduation status",
        },
        submitHandler: function (form) {
            swiper.slideNext();
        },
    });

    // Personal form
    $("#personalForm").validate({
        onfocusout: function (element) {
            this.element(element);
        },
        onkeyup: false,
        rules: {
            email: {
                required: true,
                email: true,
            },
            phone: {
                required: true,
                phonePattern: true,
            },
            zip: {
                required: true,
                zipPattern: true,
            },
            cvv: {
                required: true,
                cvvPattern: true,
            },
        },
        messages: {
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address",
            },
            phone: {
                required: "Please enter a phone number",
                phonePattern: "Please enter a valid US phone number (e.g., 123-456-7890)",
            },
            zip: {
                required: "Please enter a zip code",
                zipPattern: "Please enter a valid zip code",
            },
            cvv: "Please enter a valid 3-digit CVV",
        },
        submitHandler: function (form) {
            swiper.slideNext();
        },
    });

    // Payment form
    $("#paymentForm").validate({
        onfocusout: function (element) {
            this.element(element);
        },
        onkeyup: false,
        rules: {
            cc: {
                required: true,
                ccPattern: true,
            },
            exp: {
                required: true,
                expPattern: true,
            },
            cvv: {
                required: true,
                cvvPattern: true,
            },
        },
        messages: {
            cc: {
                required: "Please enter your credit card",
                ccPattern: "Please enter a valid 10-digit credit card number",
            },
        
            
            cvv: "Please enter a valid 3-digit CVV",
        },
        submitHandler: function (form) {
            alert('Form submitted!');
        },
    });
});
