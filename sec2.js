
//mostrar horário na tela
const horario = window.document.querySelector('h1.horario')
    
let data = new Date()
let hora = data.getHours()


//botões
const um = document.querySelector('.btn1');
const dois = document.querySelector('.btn2');
const tres = document.querySelector('.btn3');


//imagens area1
const Noite1 = "Extra/SEC 2/Jantar/edit 1.png"
const Tarde1 = "Extra/SEC 2/Almoço/edit 1.png"
const Dia1 = "Extra/SEC 2/Café da Manhã/edit 1.png"

//imagens area2
const Noite2 = "Extra/SEC 2/Jantar/edit 2.png"
const Tarde2 = "Extra/SEC 2/Almoço/edit 2.png"
const Dia2 = "Extra/SEC 2/Café da Manhã/edit 2.png"

//imagens area3
const Noite3 = "Extra/SEC 2/Jantar/edit 3.png"
const Tarde3 = "Extra/SEC 2/Almoço/edit 3.png"
const Dia3 = "Extra/SEC 2/Café da Manhã/edit 3.png"


//imagem de mensagem
let imagem = window.document.querySelector('img.img1')

//Função (lugar) atualizar horário e imagem
function Uptade(mensagem, imagemSrc) {
    horario.innerHTML = mensagem;
    imagem.src = imagemSrc;
}

//Função para atualizar imagem com base no horário
function UptadeImg(manha, tarde, noite) {

    if (hora < 12) { //horário manhã 
        Uptade(`Bom dia!<br>Agora é ${hora}HRS`, manha);
    
    } else if (hora <= 18) { //horário tarde 
        Uptade(`Boa tarde!<br>Agora é ${hora}HRS`, tarde);
    
    } else { //horário noite
        Uptade(`Boa noite!<br>Agora é ${hora}HRS`, noite);
    } 

}

//Função para atualizar cores botões
function UptadeButton(selecionado, sem1, sem2){
    selecionado.style.backgroundColor = " #B15818"; 
    sem1.style.backgroundColor = " #2A2010";
    sem2.style.backgroundColor = " #2A2010";
}


//PADRÃO1
UptadeImg(Dia1, Tarde1, Noite1)
UptadeButton(um, dois, tres)


//área 1
um.addEventListener('click', () => {
    UptadeImg(Dia1, Tarde1, Noite1)
    UptadeButton(um, dois, tres)
})

//área 2
dois.addEventListener('click', () => {
    UptadeImg(Dia2, Tarde2, Noite2)
    UptadeButton(dois, um, tres)

})

//área 3
tres.addEventListener('click', () => {
    UptadeImg(Dia3, Tarde3, Noite3)
    UptadeButton(tres, dois, um)
})





