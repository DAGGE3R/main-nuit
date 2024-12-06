export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const quizData: Record<string, Question[]> = {
  brain: [
    {
      id: 1,
      question: "Quelle est la principale fonction du cerveau dans le corps humain ?",
      options: [
        "Digérer la nourriture",
        "Être le centre de contrôle du corps",
        "Filtrer le sang",
        "Produire des hormones"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "À quoi est comparé le cerveau dans l'analogie marine ?",
      options: [
        "Aux vagues",
        "Aux récifs coralliens",
        "Aux courants océaniques",
        "Aux poissons"
      ],
      correctAnswer: 2
    }
  ],
  heart: [
    {
      id: 1,
      question: "À quel phénomène marin le mouvement du cœur est-il comparé ?",
      options: [
        "Aux tempêtes",
        "Aux marées",
        "Aux tsunamis",
        "Aux récifs coralliens"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Quelle est la principale fonction du cœur ?",
      options: [
        "Filtrer le sang",
        "Propulser le sang dans le corps",
        "Produire des globules rouges",
        "Stocker l'oxygène"
      ],
      correctAnswer: 1
    }
  ],
  lungs: [
    {
      id: 1,
      question: "À quel processus océanique les poumons sont-ils comparés ?",
      options: [
        "Aux échanges gazeux océan-atmosphère",
        "Aux courants marins",
        "Aux vagues",
        "Aux marées"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "Quelle est la fonction principale des poumons ?",
      options: [
        "Filtrer le sang",
        "Digérer l'oxygène",
        "Échanger l'oxygène et le CO2",
        "Produire des bulles d'air"
      ],
      correctAnswer: 2
    }
  ],
  liver: [
    {
      id: 1,
      question: "À quoi est comparé le foie dans l'analogie marine ?",
      options: [
        "Aux vagues",
        "Aux filtres naturels de l'océan",
        "Aux poissons",
        "Aux algues"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Quelle est la principale fonction du foie ?",
      options: [
        "Détoxifier le corps",
        "Produire du sang",
        "Digérer la nourriture",
        "Stocker l'oxygène"
      ],
      correctAnswer: 0
    }
  ],
  kidneys: [
    {
      id: 1,
      question: "À quoi sont comparés les reins dans l'analogie marine ?",
      options: [
        "Aux récifs coralliens",
        "Aux estuaires",
        "Aux vagues",
        "Aux poissons"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Quelle est la fonction principale des reins ?",
      options: [
        "Digérer la nourriture",
        "Produire du sang",
        "Purifier le sang",
        "Stocker l'eau"
      ],
      correctAnswer: 2
    }
  ],
  stomach: [
    {
      id: 1,
      question: "À quoi est comparé le système digestif dans l'analogie marine ?",
      options: [
        "Aux vagues",
        "À la décomposition océanique",
        "Aux marées",
        "Aux poissons"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Comment le système digestif transforme-t-il la nourriture ?",
      options: [
        "Par la chaleur",
        "Par les acides et enzymes",
        "Par l'eau",
        "Par compression"
      ],
      correctAnswer: 1
    }
  ]
};
