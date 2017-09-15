$('button').on('click', function () {
    $.post("a2.php", {year : $('input').val()},
        function (data) {
            $('p').text(data).css({'color' : 'red'});
        },
    );
})