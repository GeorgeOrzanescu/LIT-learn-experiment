export interface IQuestion {
  question: string;
  answers: string[];
  answer: number;
}

export const questions: IQuestion[] = [
  {
    question:
      "Obiectul de tip Intent, initializat astfel: Intent intent = new Intent(this, ActivityDespre.class), este un mesaj",
    answers: [
      "null",
      "explicit",
      "de tip serviciu",
      "inițializat greșit",
      "implicit",
    ],
    answer: 2,
  },
  {
    question:
      "Pentru preluarea unei valori asociate unei proprietăți de un tip dat dintr-un obiect JSON nu se utilizează metoda",
    answers: ["getJSONObject()", "getString()", "getDouble()", "getInt()"],
    answer: 1,
  },
];
