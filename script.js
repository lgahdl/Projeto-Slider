
var vitrineReferencia = ""; //Criacao da lista que vai armazenar os componentes da vitrine de Referencia (à direita)
var vitrineRecomendacao = ""; //Criacao da lista que vai armazenar os componentes da vitrine vitrine de recomendacao (à esquerda)
window.onload = function()
{
   vitrineRecomendacao = montarVitrineRecomendacao(); //chamada da funcao de criacao da vitrine recomendacao
   vitrineReferencia = montarVitrineReferencia(); //chamada da funcao de criacao da vitrine referencia
   var a = document.getElementById('recommendation_vitrine'); //busca um elemento pelo seu id, recommendation_vitrine, e associa a variavel a
   var b = document.getElementById('reference_vitrine') //busca um elemento pelo seu id, reference_vitrine, e associa a variavel b
	
	var recomendacao_slider = ""; //criacao da variavel que vai armazenar o elemento "slider", que deslizará a minha vitrine de recomendacao

   
		recomendacao_slider = "<div id = 'slider'>" + vitrineRecomendacao + "</div>"; //criacao do elemento slider
      a.innerHTML = recomendacao_slider; //internaliza o slider dentro de um container chamado recommendation_vitrine
      b.innerHTML = vitrineReferencia; //internaliza a vitrine referencia dentro de um container chamado reference_vitrine

};
var root = document.documentElement; //chama o root, que está associado ao <html>, pois a ele foi associado uma variável global em css chamada --leftindex, que será usada nas funcoes de paginação

function funcaoprev (page) //função que move o slider pelo botão prevBtn
{
      pgPositionValue = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--leftindex')) + page; //associa o valor da próxima posição do #slider à variável pgPositionValue
      if (pgPositionValue>=0) // comando de seleção que tranca o slider à esquerda
      {
        root.style.setProperty('--leftindex', 40 + "px"); // seta sempre a posição 40, este 40 é um espaçamento proposital
      }
      else
      {
         root.style.setProperty('--leftindex',pgPositionValue + "px"); //seta a posição armazenada na variável
      }

      
}
function funcaonext(page) //função que move o slider pelo botão nextBtn
{
      pgPositionValue = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--leftindex')) - page; //associa o valor da próxima posição do #slider à variável pgPositionValue
      if(pgPositionValue <= -1400)// comando de seleção que tranca o slider à direita
      {
         root.style.setProperty('--leftindex',-1360 + "px"); //seta sempre a posição máxima em -1360px à esquerda, é exatamente essa posição para dar o espaçamento adequado ao botão prevBtn
      }
      else{
         root.style.setProperty('--leftindex',pgPositionValue + "px"); //seta a posição armazenada na variável pgPositionValue
      }
}
function montarVitrineRecomendacao() //função que monta a vitrineRecomendacao
{
      var stringDe = ""; //criaçao de uma variavel do tipo string não será usada caso o produto tenha oldPrice == null
      for (var i = 0; i < objeto.data.recommendation.length; i++){ //comando for que gerenciará a adição dos produtos à vitrineRecomendacao
      if(objeto.data.recommendation[i].oldPrice !== null){ //comando de seleção que armazena a string caso o produto tenha oldPrice existente
         stringDe = "De:" + objeto.data.recommendation[i].oldPrice
      }
      vitrineRecomendacao+=("<div class='box'><a style='text-decoration:none' href='"+ "https:" + objeto.data.recommendation[i].detailUrl + "' target= '_blank'><div class='image_container'><img class='imagem' src='http:"+ objeto.data.recommendation[i].imageName +"'/></div><div class =box_texto style='font-size:13px'><div class='texto'>"+ objeto.data.recommendation[i].name + "</div><div class= 'old_price'>" + stringDe  + "</div><div class='preco' style='font-size:15px'>" + "Por:<strong>" + objeto.data.recommendation[i].price +"</strong></div><div class='preco' style='font-size:14px'><strong>" + objeto.data.recommendation[i].productInfo.paymentConditions + "</strong><br>sem juros" + "</div></div><div style='display:none' id='businessId'>" + objeto.data.recommendation[i].businessId + "</div><div style='display:none' id='produtoUrl'>" + "https:" + objeto.data.recommendation[i].detailUrl + "</div></a></div>"); //comando de atribuição que inclui todos os elementos dos produtos da vitrine de recomendação, incluindo a imagem de cada um, a "caixa" do produto, as caixas de texto e os textos, e também um elemento <a> que gerencia o redirecionamento à url de cada um
   }
   return vitrineRecomendacao; //retorna a vitrine
}
function montarVitrineReferencia()
{
   var vitrineReferencia = "<div class='box'><a style='text-decoration:none' href='" + "https:" + objeto.data.reference.item.detailUrl + "' target= '_blank'><img class='imagem' src='http:"+ objeto.data.reference.item.imageName +"'/><div class=box_texto style='font-size:13px' ><div class='reference_texto'>"+ objeto.data.reference.item.name + "</div><div class= 'old_price>" + "De:" + objeto.data.reference.item.oldPrice + "</div><div class='reference_preco' style='font-size:15px' >" + "Por:<strong>" + objeto.data.reference.item.price +"</div><div class='price' style='font-size:14px'>" + objeto.data.reference.item.productInfo.paymentConditions + "</strong><br>sem juros"+"</div></div></a></div>"; //atribuição do produto referência à uma variável vitrineReferencia, incluindo o box, a imagem, o box de texto, os textos e o <a> que gerencia o redirecionamento ao link do produto
   return vitrineReferencia;
}
var objeto = ({
   "data":{
      "widget":{
         "size":10
      },
      "reference":{
         "timestamp":"14/12/2012",
         "item":{
            "businessId":"1768629",
            "name":"Tablet Smart DL HD7 Kids K71 com 4GB, Wi-Fi, Tela 7\", Câmera 2MP, Cabo USB, Suporte à Modem 3G, Slot para Cartão e Android 4.0 – Chumbo",
            "imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6665633",
            "detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-Smart-DL-HD7-Kids-K71-com-4GB-Wi-Fi-Tela-7-Camera-2MP-Cabo-USB-Suporte-a-Modem-3G-Slot-para-Cartao-e-Android-4-0-–-Chumbo-1768629.html",
            "price":"R$ 499,00",
            "oldPrice":"R$ 599,00",
            "productInfo":{
               "paymentConditions":"ou <strong>12X</strong> de <strong> 41.58</strong>"
            }
         }
      },
      "recommendation":[
         {
            "businessId":"1768411",
            "name":"Tablet AOC Breeze MW0711BR com Tela de 7\", 8GB, Wi-Fi, Leitor de Cartão, Capa Protetora e Android 4.0",
            "imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6624363",
            "detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-AOC-Breeze-MW0711BR-com-Tela-de-7-8GB-Wi-Fi-Leitor-de-Cartao-Capa-Protetora-e-Android-4-0-1768411.html",
            "price":"R$ 499,00",
            "oldPrice":"R$ 599,00",
            "productInfo":{
               "paymentConditions":"ou <strong>12X</strong> de <strong> 41.58</strong>"
            }
         },
         {
            "businessId":"1768491",
            "name":"Tablet DL Everest EV-T71 PRE com Tela 7”, 4GB, Câmera 2MP, Wi-Fi, Suporte à Modem 3G e Android 4.0",
            "imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829307",
            "detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-DL-Everest-EV-T71-PRE-com-Tela-7”-4GB-Camera-2MP-Wi-Fi-Suporte-a-Modem-3G-e-Android-4-0-1768491.html",
            "price":"R$ 499,00",
            "oldPrice":null,
            "productInfo":{
               "paymentConditions":"ou <strong>12X</strong> de <strong> 41.58</strong>"
            }
         },
         {
            "businessId":"1706504",
            "name":"Tablet Smart DL HD7 com 4GB, Wi-Fi, Tela 7\", Câmera 2MP, Cabo USB, Slot para Cartão e Android 4.0 - Chumbo",
            "imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6506376",
            "detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-Smart-DL-HD7-com-4GB-Wi-Fi-Tela-7-Camera-2MP-Cabo-USB-Slot-para-Cartao-e-Android-4-0-Chumbo-1706504.html",
            "price":"R$ 399,00",
            "oldPrice":"R$ 549,00",
            "productInfo":{
               "paymentConditions":"ou <strong>12X</strong> de <strong> 33.25</strong>"
            }
         },
         {
            "businessId":"1826580",
            "name":"Tablet Phaser Kinno PC709 VE Plus com Tela 7” Multitouch, 4GB, Wi-Fi, Suporte à Modem 3G e Android 2.3",
            "imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6875461",
            "detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-Phaser-Kinno-PC709-VE-Plus-com-Tela-7”-Multitouch-4GB-Wi-Fi-Suporte-a-Modem-3G-e-Android-2-3-1826580.html",
            "price":"R$ 379,00",
            "oldPrice":"R$ 499,00",
            "productInfo":{
               "paymentConditions":"ou <strong>12X</strong> de <strong> 31.58</strong>"
            }
         },
         {
            "businessId":"1765938",
            "name":"Tablet Multilaser Vibe NB027 com Tela 7\" com 8GB, Slot para Cartão, Wi-Fi e Android 4.0 – Rosa",
            "imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6584703",
            "detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-Multilaser-Vibe-NB027-com-Tela-7-com-8GB-Slot-para-Cartao-Wi-Fi-e-Android-4-0-–-Rosa-1765938.html",
            "price":"R$ 399,00",
            "oldPrice":"R$ 599,00",
            "productInfo":{
               "paymentConditions":"ou <strong>12X</strong> de <strong> 33.25</strong>"
            }
         },
         {
            "businessId":"1776985",
            "name":"Tablet Smart DL A75 com 4GB, Wi-Fi, Tela 7\", Câmera 2MP, Touch Screen, Adaptador USB, Slot para Cartão e Android 2.3 - Preto",
            "imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6670538",
            "detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-Smart-DL-A75-com-4GB-Wi-Fi-Tela-7-Camera-2MP-Touch-Screen-Adaptador-USB-Slot-para-Cartao-e-Android-2-3-Preto-1776985.html",
            "price":"R$ 399,00",
            "oldPrice":null,
            "productInfo":{
               "paymentConditions":"ou <strong>12X</strong> de <strong> 33.25</strong>"
            }
         },
         {
            "businessId":"1768488",
            "name":"Tablet DL Mobile  TG-M71 com Tela 7\", 3G, Wi-Fi, Câmera 2MP, Saída Mini HDMI, Bluetooth, Suporte à Modem 3G e Android 4.0 – Branco",
            "imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829158",
            "detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-DL-Mobile-TG-M71-com-Tela-7-3G-Wi-Fi-Camera-2MP-Saida-Mini-HDMI-Bluetooth-Suporte-a-Modem-3G-e-Android-4-0-–-Branco-1768488.html",
            "price":"R$ 749,00",
            "oldPrice":null,
            "productInfo":{
               "paymentConditions":"ou <strong>12X</strong> de <strong> 62.42</strong>"
            }
         },
         {
            "businessId":"1767783",
            "name":"Tablet Phaser Kinno PC-719VE com Tela 7”, Wi-Fi, Suporte à Modem 3G e Android 2.2",
            "imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6747399",
            "detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-Phaser-Kinno-PC-719VE-com-Tela-7”-Wi-Fi-Suporte-a-Modem-3G-e-Android-2-2-1767783.html",
            "price":"R$ 329,00",
            "oldPrice":"R$ 399,00",
            "productInfo":{
               "paymentConditions":"ou <strong>12X</strong> de <strong> 27.42</strong>"
            }
         },
         {
            "businessId":"1680698",
            "name":"Tablet AOC Breeze 2 MW0821BR8 com 8GB, Wi-Fi, Bluetooth, Leitor de Cartão, Mini HDMI, Câmera 3MP, Tela 8\" e Android 2.3",
            "imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6124117",
            "detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-AOC-Breeze-2-MW0821BR8-com-8GB-Wi-Fi-Bluetooth-Leitor-de-Cartao-Mini-HDMI-Camera-3MP-Tela-8-e-Android-2-3-1680698.html",
            "price":"R$ 599,00",
            "oldPrice":"R$ 799,00",
            "productInfo":{
               "paymentConditions":"ou <strong>12X</strong> de <strong> 49.92</strong>"
            }
         },
         {
            "businessId":"470442",
            "name":"Tablet DL Smart T-704 com 4GB, Câmera 2.0MP, Wi-Fi, Tela 7\" e Android 2.2",
            "imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=5783178",
            "detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-DL-Smart-T-704-com-4GB-Camera-2-0MP-Wi-Fi-Tela-7-e-Android-2-2-470442.html",
            "price":"R$ 349,00",
            "oldPrice":"R$ 599,00",
            "productInfo":{
               "paymentConditions":"ou <strong>12X</strong> de <strong> 29.08</strong>"
            }
         }
      ]
   }
}); //criação de uma array que armazena os elementos jsonp
//Nota: Tive alguns erros que eu não descobri como solucionar quando tentei fazer a chamada dos elementos por uma função, só consegui fazer o código funcionar criando esse objeto e trazendo o conteúdo do jsonp pra dentro do programa.

