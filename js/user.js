'use strict';

$(document).ready(function () {
        var user = {};

        var saveEl = $('#save');

        var nameEl = $('#name');
        var firstnameEl = $('#firstname');
        var emailEl = $('#email');
        var phoneEl = $('#phone');

        function isFormValid() {
            var name = nameEl.val();
            if (name.length > 0) {
                user.name = name;
            } else {
                return false;
            }
            var firstname = firstnameEl.val();
            if (firstname.length > 0) {
                user.firstname = firstname;
            } else {
                return false;
            }
            var email = emailEl.val();
            if (email.length > 0) {
                user.email = email;
            } else {
                return false;
            }
            var phone = phoneEl.val();
            user.phone = phone || '';

            return true;
        }

        saveEl.click(function () {
            if (isFormValid()) {
//                TODO
//                $.post('', user, function (data) {
//                });
            }
        });
    }
);