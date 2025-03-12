//* 🏆 Code Question 1

/* 
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = "Double Cheese Burger";
secondBurger.weight = 500;

console.log(hamburger.name); //? Double Cheese Burger
console.log(secondBurger.name); //? Double Cheese Burger 
*/

/*
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 

//* una sola cella di memoria 
*/

//#######################################################

//* 🏆 Code Question 2

/* 
const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  ingredients: ["Cheese", "Meat", "Bread", "Tomato"],
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); //? Salad
console.log(secondBurger.ingredients[0]); //? Salad 
*/

/* 
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 

//* Sono state create 2 celle di memoria, una per hamburger e una per ingredients
//* Poi con lo spread creo una copy di hamburger che sara in una 3a cella, ma ingredients sara comunque candivisa 
*/

//#######################################################

//* 🏆 Code Question 3

/* 
const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29,
  },
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger); 
*/

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? //* In questo caso sono stare create 3 celle per hamburger, 3 per secondBurger e 3 per thirdBurger

//#######################################################

//* 🏆 Code Question 4

/* 
const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
};

const restaurant = {
  name: "Hyur's Burgers",
  address: {
    street: "Main Street",
    number: 123,
  },
  openingDate: new Date(2025, 3, 11),
  isOpen: false,
};
 */

/* 
Qual è il metodo migliore per clonare l’oggetto chef, e perché?  //* Nel primo caso userei uno spread per poter riutilizzare la funzione
Qual è il metodo migliore per clonare l’oggetto restaurant, e perché ? //* Nel secondo caso userei uno strcturedClone perche l oggetto occupa 2 celle e ha una classe data
 */

//#######################################################

//* 🎯 Code Question 5 (Bonus)

/* 
const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const newRestaurant = {...hamburger.maker.restaurant};
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = {...hamburger};
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // ?  Chef Hyur
console.log(secondBurger.maker.name); // ?  Chef Hyur
console.log(hamburger.maker.restaurant.name); // ? Hyur's II
console.log(secondBurger.maker.restaurant.name); // ? Hyur's II
 */

/* 
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? //* 5
 */

//! In questo snack mi stavi quasi per fregare, sperando sia giusto, in caso fosse sbagliato mi hai fregato :)))

//#######################################################

//* 🎯 Code Question 6 (Bonus)

/*
const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: "Main Street",
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      },
    },
    isOpen: true,
  },
}; 
*/

// Qual è il metodo migliore per clonare l’oggetto chef, e perché? //* Ti risponderei volentieri ma non lo so, bisogna vedere se usi la copia per modificare l oggetto o se hai bisogno dei metodi che contiene (forse volevi un altra risposta pero boh)

/* const chefCopy = {
  ...chef,
  restaurant: {
    ...chef.restaurant,
    adress: {
      ...chef.restaurant.adress,
    },
  },
}; */

//#######################################################

//* 🎯 Snack  (Bonus)
/* 
Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.

⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca). 
*/

/* function deepCopy(obj) {
  if (typeof obj !== "object") {
    return obj;
  }
  const copy = {};
  for (const key in obj) {
    const value = obg[key];
    if (typeof value !== "object") {
      copy[key] = value;
    } else {
      copy[key] = deepCopy(value);
    }
    return copy;
  }
} */
