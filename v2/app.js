window.app = {
    model: {
        type: null
    },
    ui: {
        carousel: $('#carousel'),
        type0Btn: $('#type0-button'),
        type1Btn: $('#type1-button'),
        typeUser: $('#type-user'),
        typeWorker: $('#type-worker'),
        type: $('#type'),
        submit: $('#submit'),
        email: $('#email'),
        submitted: $('#submitted'),
        contact: $('#contact')
    },
    bind: function () {
        var that = this;
        this.ui.type0Btn.click(function () {
            that.ui.carousel.addClass('type0');
            that.ui.carousel.removeClass('type1');
        });
        this.ui.type1Btn.click(function () {
            that.ui.carousel.addClass('type1');
            that.ui.carousel.removeClass('type0');
        });
        this.ui.typeWorker.click(function () {
            that.ui.type.removeClass('error');
            that.ui.typeWorker.addClass('selected');
            that.ui.typeUser.removeClass('selected');
            that.model.type = 'WORKER';
        });
        this.ui.typeUser.click(function () {
            that.ui.type.removeClass('error');
            that.ui.typeWorker.removeClass('selected');
            that.ui.typeUser.addClass('selected');
            that.model.type = 'USER';
        });
        this.ui.submit.click(function () {
            if (that.isFormValid()) {
                that.ui.submit.hide();
                that.ui.submitted.show();
                $.ajax({
                    url: 'http://178.62.139.175:8000/guests',
                    type: 'POST',
                    data: JSON.stringify({email: that.ui.email.val(), type: that.model.type}),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function () {
                        ga('send', 'event', 'subscribe', 'success');
                    },
                    error: function () {
                        ga('send', 'event', 'subscribe', 'error');
                    }
                })
            }
        });
        this.ui.contact.click(function () {
            window.location.href = 'mailto:fourmeezapp@gmail.com?subject=' + encodeURI('Contact Fourmeez Web');
        });
        this.ui.email.on('keydown', function () {
            that.ui.email.removeClass('error');
        });
    },
    isFormValid: function () {
        var valid = true;
        if (!this.model.type) {
            valid = false;
            this.ui.type.addClass('error');
        }

        if (!this.isValidEmail(this.ui.email.val())) {
            valid = false;
            this.ui.email.addClass('error');
        }
        return valid;
    },
    isValidEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
};
app.bind();