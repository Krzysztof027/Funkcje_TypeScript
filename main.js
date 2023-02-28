
//Zamień poniższe funkcje na funkcje strzałki.
let times = (a, b) => ( a * b);

function compareScoresDescending(s1, s2) {
  return s2.score - s1.score;
}

function compareNames(s1, s2) {
  if(s1.name< s2.name) return -1;
  if(s1.name >s2.name) return 1;
  return 0;

}
console.log(times (1,2));


// Zad 5
let funkcja5 = function(wzrost){

  if(wzrost<150){
    console.log(wzrost + "niski");
  }
  else if(wzrost > 180){
    console.log(wzrost + "wysoki");
  }
  else console.log(wzrost + "średni");
}
funkcja5(1111 + " ");



/*
BMI: wczyta od użytkownika wartość wzrostu (cm) oraz wagi (kg),
 następnie obliczy wartość BMI (kg/m2). W kontenerze wynik program umieści wartość BMI wraz z komentarzem:
– BMI < 18,5: za mało!
– BMI > 25: za dużo!
– pomiędzy: OK!
*/


// Zad 6
let funkcja6 = function(wzrost, waga){
  let BMI = (waga/(wzrost*wzrost));
  if(BMI<18,5){
    console.log("za mało!");
  }
  else if(BMI>25){
    console.log("za dużo!");
  }
  else console.log("OK");
}
funkcja6(11,67);


/*
PODSTAWY: obliczy różnicę, iloczyn i iloraz 2 liczb podanych przez użytkownika.
*/

//Zad 2

let funkcja11 = function(a,b){
  let roznica = (a/b); console.log("różnica: "  + roznica)
  let iloczyn = (a*b); console.log("iloczyn: " + iloczyn);
  let iloraz = (a-b); console.log("iloraz: " + iloraz);
}
funkcja11(11,2);


/*
KALKULATOR: Obliczy wybrane przez użytkownika działanie (suma, różnica, iloczyn lub iloraz)
 z dwóch podanych przez użytkownika liczb. Wynik działania umieści w kontenerze o id wynik.
*/

//Zad 3

let funkcja3 = function(a,b){
  let suma = (a+b);
  let roznica = (a/b);
  let iloczyn = (a*b);
  let iloraz = (a-b);

  let wynik; console.log("Wynik: " + iloraz);
}
funkcja3(16,1);


//Zad 4

let funkcja4 = function(a,b,c){
  if(a > b && a > c){
    console.log(a);
  }
  else if(b > a && b > c)
  {
    console.log(b);
  }
  else if(c>b && c>a)
  {
    console.log(c);
  }
}
funkcja4(11, 1343434,12);


/*STARSZY: wczyta z 2 pól tekstowych daty urodzenia dwóch osób,
następnie wypisze komunikat w wyskakującym okienku z informacją, która z tych osób jest starsza*/



// Zad 10

let funkcja10 = function(a,b,c){
  if(a+b<c){
    console.log("Trójkata nie da się utworzyć");
  }
  else if(a+b==c){
    console.log("Trójkata nie da się utworzyć")
  }
  else if(a+b>c){
    console.log("Trójkat można zrobić");
  }
}
funkcja10(10,1,3);


//zad 1


// /SUMA: obliczy i wyświetli na ekran sumę 2 liczb całkowitych podanych przez użytkownika.
let funkcja1 = function(a,b){
  let suma = (a+b);
  console.log("Wynik: " +suma);
}
funkcja1(10,11);


/*
DEFINIOWANIE FUNKCJI Z PARAMETRAMI

W pliku main.ts definiujemy funkcję wraz z parametrami:

let funkcja = function(imie, pogoda) {

             console.log("Witaj, " + imie + "!");

             console.log("Dzisiaj mamy " + pogoda + " dzień. ");

};

funkcja(Martyna, "słoneczny");
*/

/*PRZESTEPNY: program wczyta jako parametr
/wejściowy funkcji rok. W konsoli wypisze informację, czy dany rok jest przestępny, czy nie.*/

//Zad 8

let funkcja8 = function(rok){
  if(rok >= 2023){
    console.log(+ rok + " jest przystępny");
  }
  else if(rok <= 2022){
    console.log(+ rok + " nie jest przystępny");
  }
}
funkcja8(2026);


/*
let funkcja9 = function(haslo){
  if(haslo<=4){
    console.log("słabe");
  }
  else if(haslo<=8){
    console.log("średnie");
  }
  else if(haslo>8){
    console.log("Mocne");
  }
}
funkcja9(44);
*/

//9 w ogóle nie mam
