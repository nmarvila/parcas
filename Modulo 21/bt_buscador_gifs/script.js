document.querySelector(`#busca`).addEventListener("keyup", (event) => {
    if (event.keyCode == 13) {
        let busca = document.querySelector(`#busca`).value;
        $.ajax({
            url: `https://api.tenor.com/v1/search?q=${busca}`,
            type: 'GET',
            dataType: 'json',
            beforeSend: function () {
                $('.gifs').html('<div class="col-md-12">Carregando...</div>');
            },
            success: function (json) {

                var html = '';
                var results = json.results;

                for (let i = 0; i < results.length; i++) {
                    html += '<div class="col-md-4"><div class="gif"><img src="' + results[i].media[0].tinygif.url + '"></div></div>';
                }

                $('.gifs').html(html);

            }
        });
    }
});