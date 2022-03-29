        var nav = document.querySelector('nav');
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 100) {
                nav.classList.add('bg-dark', 'shadow');
            } else {
                nav.classList.remove('bg-dark', 'shadow');
            }
        });

        $(function() {
            $('#startDatePicker').datepicker();
            $('#endDatePicker').datepicker();
            $('#dobDatePicker').datepicker();
        });
