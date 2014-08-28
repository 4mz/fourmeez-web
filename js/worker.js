'use strict';

$(document).ready(function () {
        var worker = {};

        var saveEl = $('#save');

        var nameEl = $('#name');
        var firstnameEl = $('#firstname');
        var emailEl = $('#email');
        var phoneEl = $('#phone');
        var postcodeEl = $('#postcode');

        function isFormValid() {
            var name = nameEl.val();
            if (name.length > 0) {
                worker.name = name;
            } else {
                return false;
            }
            var firstname = firstnameEl.val();
            if (firstname.length > 0) {
                worker.firstname = firstname;
            } else {
                return false;
            }
            var email = emailEl.val();
            if (email.length > 0) {
                worker.email = email;
            } else {
                return false;
            }
            var phone = phoneEl.val();
            worker.phone = phone || '';
            var postcode = postcodeEl.val();
            worker.postcode = postcode || '';

            return true;
        }

        saveEl.click(function () {
            if (isFormValid()) {
//                TODO
//                $.post('', worker, function (data) {
//                });
            }
        });
    }
);