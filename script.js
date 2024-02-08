const perguntas = [
  {
    pergunta: "Quem foi a primeira programadora da história?",
    respostas: [
      "Ada Lovelace",
      "Grace Hopper",
      "Margaret Hamilton"
    ],
    correta: 0
  },
  {
    pergunta: "Qual dessas mulheres é conhecida por ter desenvolvido o primeiro compilador?",
    respostas: [
      "Susan Kare",
      "Carol Shaw",
      "Grace Hopper"
    ],
    correta: 2
  },
  {
    pergunta: "Qual das seguintes mulheres foi pioneira na computação em nuvem?",
    respostas: [
      "Meg Whitman",
      "Sheryl Sandberg",
      "Ursula Burns"
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi a primeira mulher a ganhar o Prêmio Turing?",
    respostas: [
      "Barbara Liskov",
      "Shafi Goldwasser",
      "Fran Allen"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a CEO da YouTube e uma das mais poderosas mulheres na tecnologia?",
    respostas: [
      "Marissa Mayer",
      "Susan Wojcicki",
      "Ginni Rometty"
    ],
    correta: 1
  },
  {
    pergunta: "Quem é conhecida como a 'mãe do COBOL'?",
    respostas: [
      "Barbara Liskov",
      "Grace Hopper",
      "Carol Shaw"
    ],
    correta: 1
  },
  {
    pergunta: "Qual mulher é conhecida por sua contribuição ao algoritmo de Huffman?",
    respostas: [
      "Margaret Hamilton",
      "Radia Perlman",
      "Sylvia Wilbur"
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi a primeira mulher negra a ganhar um Ph.D. em Ciência da Computação do Instituto de Tecnologia de Massachusetts (MIT)?",
    respostas: [
      "Anita Borg",
      "Mae Jemison",
      "Valerie Thomas"
    ],
    correta: 2
  },
  {
    pergunta: "Qual das seguintes mulheres co-fundou a Electronic Frontier Foundation (EFF)?",
    respostas: [
      "Ada Lovelace",
      "Esther Dyson",
      "Megan Smith"
    ],
    correta: 1
  },
  {
    pergunta: "Quem foi a primeira mulher a servir como CTO (Chief Technology Officer) dos Estados Unidos?",
    respostas: [
      "Marissa Mayer",
      "Megan Smith",
      "Sheryl Sandberg"
    ],
    correta: 1
  }
];

// Armazena o elemento do HTML de id"quiz" na variável de mesmo nome
const quiz = document.querySelector('#quiz')

// Armazena o elemento template do HTML na variável de mesmo nome
const template = document.querySelector('template')

// Cria um novo conjunto vazio para armazenar as respostas corretas
const corretas = new Set()

// Guarda o número total de perguntas
const totalDePerguntas = perguntas.length

// Seleciona o elemento HTML com o id 'acertos' e seu filho 'span' e armazena na variável 'mostrarTotal'
const mostrarTotal = document.querySelector('#acertos span')

// Mostra o tanto de perguntas corretas em relação ao total de perguntas no quiz
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// Laço de repetição sobre as questões do quiz
for (const item of perguntas) {

  // Clona o conteúdo do elemento 'template' e armazena na variável 'quizItem'
  const quizItem = template.content.cloneNode(true)
  
  // Seleciona o texto do elemento 'h3' dentro de 'quizItem' como a pergunta atual
  quizItem.querySelector('h3').textContent = item.pergunta

  // Laço de repetição sobre as respostas do quiz
  for (let resposta of item.respostas) {

    // Clona o elemento 'dt' dentro de 'quizItem' e coloca na variável 'dt'
    const dt = quizItem.querySelector('dl dt').cloneNode(true)

    // Define o texto do elemento 'span' dentro de 'dt' como a resposta atual
    dt.querySelector('span').textContent = resposta

    // Define o atributo 'name' do 'input' dentro de 'dt', como 'pergunta-' mais o índice da pergunta atual
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))

    // Define o valor do 'input' dentro de 'dt' como o índice da resposta atual
    dt.querySelector('input').value = item.respostas.indexOf(resposta)

    // Define o evento 'onchange' do elemento 'input' dentro de 'dt'
    dt.querySelector('input').onchange = (event) => {

    // Verifica se a resposta selecionada é correta
      const estaCorreta = event.target.value == item.correta

      // Remove a pergunta atual do conjunto 'corretas' se já estiver presente
      corretas.delete(item)

      // Se a resposta estiver correta, adiciona a pergunta atual ao conjunto 'corretas'
      if (estaCorreta) {
        corretas.add(item)
      }

      // Atualiza o texto do elemento 'mostrarTotal' com o número de respostas corretas 
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }

    // Adiciona 'dt' como filho do elemento 'dl' dentro de 'quizItem'
    quizItem.querySelector('dl').appendChild(dt)
  }

  // Remove o primeiro elemento 'dt' dentro de 'quizItem' 
  quizItem.querySelector('dl dt').remove()


  // Adiciona 'quizItem' como filho do elemento 'quiz'
  quiz.appendChild(quizItem)
}