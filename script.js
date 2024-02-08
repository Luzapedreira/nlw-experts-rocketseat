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
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretconst perguntas = [
    {
      pergunta: "Qual é a finalidade do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir uma mensagem de erro",
        "Imprimir dados no console",
        "Criar uma variável"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em comparações em JavaScript?",
      respostas: [
        "Comparação de valores sem considerar o tipo",
        "Atribuição de valores",
        "Comparação estrita de valores e…pt?",
      respostas: [
        "São iguais, usados de forma intercambiável",
        "'null' representa a ausência de valor, 'undefined' é atribuído explicitamente",
        "Ambos representam valores vazios"
      ],
      correta: 1
    },
    {
      pergunta: "Como se adiciona um evento a um elemento HTML usando JavaScript?",
      respostas: [
        "Apenas com CSS",
        "Usando o atributo 'event'",
        "Através do método 'addEventListener'"
      ],
      correta: 2
    },
  ];as = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }