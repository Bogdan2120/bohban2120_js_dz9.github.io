$('button').on('click', function(){
    $.post("a3.php", {sex : $('input[type="radio"]:checked').val(), height : $('input[type="text"]').val()},
    function (data) {
        $('p').text(data).css({'color' : 'red'});
    },
);
})