$(function(){
   
    $("#confirma").click(function(){
        //imagem
        let tipo = $("#tipo").val();
        $("#imagem").attr("src", `imagens/${tipo}.jpg`);

        //quantidade
        let quant = $("#quantidade").val(); //quantidade em Gb
        $("#escrita").html(Converter(quant));
    });

    function Converter(num){
        //variáveis
        let resultado;
        let tipo = $("#tipo").val();

        //ver o tipo selecionado e enviar o texto 
        switch(tipo){

            case "romance":
                resultado = `Um romance típico de 500 páginas terá 1 MB em texto simples. Portanto, <strong>${num} Gb equivale a  ${num * 1000} romances.</strong>`
                break;

            case "shakespeare":
                resultado = `William Shakespeare escreveu 38 peças, 154 sonetos, dois longos poemas narrativos e alguns versos com autoria disputada. Tudo isso equivale a 5 Mb, portanto <strong>${num} Gb são ${num * 200} vezes as suas obras.</strong>`
                break;

            case "wikipedia":
                resultado = `De acordo com a própria Wikipedia, a partir de junho de 2015, o despejo de todas as páginas com histórico completo de edição é de cerca de 100 GB compactado e 10 TB descompactado. Considerando a compactada, <strong>${num} Gb equivale a ${num / 100} Wikipedias.</strong>`;
                break;
        }
        return resultado;
    }
});