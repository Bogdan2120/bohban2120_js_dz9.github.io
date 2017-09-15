$('.range').on('mouseup mousemove', function(){
    $('span').text($('.range').val());
})


$('button').on('click', function(){
    $.post("a3.php", {sex : $('input[type="radio"]:checked').val(), height : $('.range').val()},
        function (data) {
            $('p').text(data).css({'color' : 'red'});
        },
    );
})
