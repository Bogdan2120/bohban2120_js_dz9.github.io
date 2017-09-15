$('button').on('click', function(){
    $.post("mail.php", {fio : $('input[type="text"]').val(), email : $('input[type="email"]').val(), phone : $('input[type="number"]').val()},
        function (data) {
            $('p').text(data).css({'color' : 'red'});
        },
    );
})
