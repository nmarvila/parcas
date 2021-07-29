function adicionarInfo(info) {
    let novasInfo = {
        ...info,
        status:0,
        token:'alksjrklajsrl',
        data_cadastro:'....'
    };

    return novasInfo;
}



console.log(adicionarInfo({nome:'Nichollas',sobrenome:'Nunes'}));