$('button').on('click', function(){
    $.get("goods.php", {art : $('input').val()},
        function (data) {
            let goods = JSON.parse(data);
            console.log(goods.name);
            let out = "";
                out +='<div class="block">';
                out +=`<h3>${goods.name}</h3>`;
                out +=`<p>Вес:${goods.weight}</p>`; 
                out +=`<p>Цена:${goods.cost}</p>`;
                out +=`<img src="${goods.img}">`;
                out +='</div>'; 
            $('.product').append(out);

        },
    );
})