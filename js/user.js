'use strict';

$(document).ready(function () {
        var user = {};

        var saveEl = $('#save');

        var nameEl = $('#name');
        var firstnameEl = $('#firstname');
        var emailEl = $('#email');
        var phoneEl = $('#phone');
        var submitOk = $('#submit-ok');
        var submitKo = $('#submit-ko');

        function isFormValid() {
            var name = nameEl.val();
            if (name.length > 0) {
                user.last_name = name;
            } else {
                return false;
            }
            var firstname = firstnameEl.val();
            if (firstname.length > 0) {
                user.first_name = firstname;
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

        saveEl.click(function (ev) {
            ev.preventDefault();
            if (isFormValid()) {
                $.post('http://178.62.139.175:8000/users', user, function () {
                    submitOk.fadeIn();
                    submitKo.hide();
                }).fail(function () {
                    submitKo.fadeIn();
                    submitOk.hide();
                });
            }
        });
    }
);