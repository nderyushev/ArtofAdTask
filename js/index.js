$(document).ready(function () {


    $('#baseLink').on('click', function(event) {
        $('.base').css('display', 'block');
        $('.bonus').css('display', 'none');
    });

   $('#bonusLink').on('click', function (event) {
       $('.bonus').css('display', 'block');
       $('.base').css('display', 'none');
   });

    $(function() {

        let currentDay = moment().get('date');

        $('#dateTimePicker1').datetimepicker({
                locale: 'ru',
                defaultDate: moment().set({
                    date: currentDay + 1,
                    hours: '00',
                    minute: '00'
                }).format()
            }
        );
        $('#dateTimePicker2').datetimepicker({
            locale: 'ru',
            defaultDate: moment().set({
                date: currentDay + 8,
                hours: '00',
                minute: '00'
            }).format()
        });

        $('#dateTimePicker3').datetimepicker({
                locale: 'ru',
                defaultDate: moment().set({
                date: currentDay + 8,
                hours: '00' - 3,
                minute: '00'
            }).format()
        });
    });

    $('#action-type').change(function() {
        if ($(this).val() === 'Рекламная акция') {
            $('.description').css('display', 'block');
            $('#bonusLink').css('display', 'none')
        }
        else if ($(this).val() === 'Бонусные купоны') {
            $('.description').css('display', 'none');
            $('#bonusLink').css('display', 'block')
        }
    });

    /*function validation() {
        jQuery.validator.addMethod("greaterThenCurrentDate", function() {
            return $('#dateTimePicker1').val() >= moment().format('DD.MM.YYYY HH:mm')
        });

        jQuery.validator.addMethod("greaterThenStartDate", function() {
            return $('#dateTimePicker2').val() >= moment().add('hours', 3).format('DD.MM.YYYY HH:mm')
        });

        jQuery.validator.addMethod("betweenStartAndEnd", function () {
            return ($('#dateTimePicker3').val() >= $('#dateTimePicker1').val() && $('#dateTimePicker3').val() <= $('#dateTimePicker2').val())
        });

        $('#baseForm').validate({
            rules: {
                title: {
                    required: true,
                    minlength: 5
                },
                startDate: {
                    required: true,
                    greaterThenCurrent: true
                },
                description: {
                    required: true,
                    minlength: 20
                },
                endDate: {
                    required: true,
                    greaterThenStartDate: true
                },
                startRegistrationDate: {
                    required: true,
                    betweenStartAndEnd: true
                }
            },
            messages: {
                title: {
                    required: 'Это поле обязательно'
                },
                startDate: {
                    greaterThenCurrentDate: 'Пожалуйста, введите дату не ранее текущей'
                },
                description: {
                    required: 'Это поле обязательно'
                },
                endDate: {
                    greaterThenStartDate: 'Пожалуйста, введите дату не ранее, чем через 3 часа после начала'
                },
                startRegistrationDate: {
                    betweenStartAndEnd: 'Пожалуйста, введите дату не ранее начала и не позднее окончания'
                }
            }
        });
    }*/

    jQuery.validator.addMethod("greaterThenCurrentDate", function() {
        return $('#dateTimePicker1').val() >= moment().format('DD.MM.YYYY HH:mm')
    });

    jQuery.validator.addMethod("greaterThenStartDate", function() {
       return $('#dateTimePicker2').val() >= moment().add('hours', 3).format('DD.MM.YYYY HH:mm')
    });

    jQuery.validator.addMethod("betweenStartAndEnd", function () {
       return ($('#dateTimePicker3').val() >= $('#dateTimePicker1').val() && $('#dateTimePicker3').val() <= $('#dateTimePicker2').val())
    });

    $('#baseForm').validate({
        rules: {
            title: {
                required: true,
                minlength: 5
            },
            startDate: {
                required: true,
                greaterThenCurrentDate: true
            },
            description: {
                required: true,
                minlength: 20
            },
            endDate: {
                required: true,
                greaterThenStartDate: true
            },
            startRegistrationDate: {
                required: true,
                betweenStartAndEnd: true
            }
        },
        messages: {
            title: {
              required: 'Это поле обязательно'
            },
            startDate: {
                greaterThenCurrentDate: 'Пожалуйста, введите дату не ранее текущей'
            },
            description: {
                required: 'Это поле обязательно'
            },
            endDate: {
                greaterThenStartDate: 'Пожалуйста, введите дату не ранее, чем через 3 часа после начала'
            },
            startRegistrationDate: {
                betweenStartAndEnd: 'Пожалуйста, введите дату не ранее начала и не позднее окончания'
            }
        }
    });

    jQuery.validator.addMethod('positiveIntegerNumber', function () {
       return $('#priceNumber').val() % 1 === 0 && $('#priceNumber').val() > 0
    });

    $('#bonusForm').validate({
        rules: {
            price: {
                positiveIntegerNumber: true,
                required: true
            }
        },
        messages: {
            price: {
                positiveIntegerNumber: 'Пожалуйста, введите целое положительное число',
                required: 'Это поле обязательно'
            }
        }
    });

    $('#example-multiple-selected').multiselect();

    $('#settings-open').change(function () {
        if ($(this).prop('checked') === true){
            $('.settings').css('display', 'block');
            $('.type-action').css('display', 'block')
        } else {
            $('.settings').css('display', 'none');
            $('.type-action').css('display', 'none')
        }
    });
});
