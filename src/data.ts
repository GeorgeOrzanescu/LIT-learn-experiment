interface IQuestion {
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  e?: string;
  answer: string;
}

export const questions: IQuestion[] = [
  {
    question:
      "Obiectul de tip Intent, initializat astfel: Intent intent = new Intent(this, ActivityDespre.class), este un mesaj",
    a: "null",
    b: "explicit",
    c: "de tip serviciu",
    d: "inițializat greșit",
    e: "implicit",
    answer: "explicit",
  },
  {
    question:
      "Pentru preluarea unei valori asociate unei proprietăți de un tip dat dintr-un obiect JSON nu se utilizează metoda",
    a: "getJSONObject()",
    b: "getString()",
    c: "getDouble()",
    d: "getInt()",
    answer: "getJSONObject()",
  },
];
