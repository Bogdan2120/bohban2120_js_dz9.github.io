$('button').on('click', function () {
    $.post("a1.php", {num1: $('#num1').val(), num2 : $('#num2').val()},
        function (data) {
            $('p').text(data).css({'color' : 'red'});
        },
    );
})