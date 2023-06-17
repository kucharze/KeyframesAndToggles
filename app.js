const showDono = () => {
  let don = document.querySelector(".Donated");
  don.classList.toggle("show");
};

const dog = () => {
  let dog = document.querySelector(".dog");

  if (dog.classList.contains("bigger")) {
    dog.classList.toggle("smaller");
    dog.classList.toggle("bigger");
    dogShow(false);
  } else if (dog.classList.contains("smaller")) {
    dog.classList.toggle("bigger");
    dog.classList.toggle("smaller");
    dogShow(true);
  } else {
    dog.classList.toggle("bigger");
    dogShow(true);
  }
};

const dogShow = (status) => {
  let dog = document.querySelector(".dogselection");
  dogItems = [
    "Dog Ariel - Mastiff - Large - Female - 6 years old.",
    "Ava - Mixed Bread - Medium - Female - 1 year old",
    "Bella - Mixed Bread - Medium - Female - 4 years old",
  ];
  if (status) {
    dog.replaceChildren();
    let item = document.createElement("ul");
    for (let i = 0; i < dogItems.length; i++) {
      let listItem = document.createElement("li");
      listItem.innerHTML = dogItems[i];
      item.append(listItem);
    }
    dog.append(item);
  } else {
    dog.replaceChildren(
      "Animal Friends cares for thousands of homeless pets each year. It is our goal to admit and place as many animals as possible while staying true to our no-kill tradition. In keeping with this tradition, Animal Friends does not euthanize animals in order to create space in our kennels. Because of this, all of our admissions must be scheduled in advance."
    );
  }
};

const cat = () => {
  let cat = document.querySelector(".cat");
  if (cat.classList.contains("bigger")) {
    cat.classList.toggle("smaller");
    cat.classList.toggle("bigger");
    catShow(false);
  } else if (cat.classList.contains("smaller")) {
    cat.classList.toggle("bigger");
    cat.classList.toggle("smaller");
    catShow(true);
  } else {
    cat.classList.toggle("bigger");
    catShow(true);
  }
};

const catShow = (status) => {
  let cat = document.querySelector(".catselection");
  catItems = [
    "Alexander - Domestic Shorthair - Male - 5 years old",
    "Arros - Longhair - Male - 3 years old",
    "Ashes - Shorthair - Female - 1 year old",
    "Beanie - Shorthair - Femaile - 8 years old",
    "Brandy - Mixed Bread - Male - 3 years old",
  ];
  if (status) {
    cat.replaceChildren();
    let item = document.createElement("ul");
    for (let i = 0; i < catItems.length; i++) {
      let listItem = document.createElement("li");
      listItem.innerHTML = catItems[i];
      item.append(listItem);
    }
    cat.append(item);
  } else {
    cat.replaceChildren(
      "Progressive spay/neuter programming is at the forefront of our mission because unnecessary euthanasia can never be the solution to the pet overpopulation crisis in our region. Not only is spay and neuter the only way to compassionately and proactively end this problem - it also keeps your beloved pets healthier and happier."
    );
  }
};

const rabbit = () => {
  let rabbit = document.querySelector(".rabbit");
  // rabbit.classList.toggle("bigger");

  if (rabbit.classList.contains("bigger")) {
    rabbit.classList.toggle("smaller");
    rabbit.classList.toggle("bigger");
    rabbitShow(false);
    // console.log("rabbit bigger");
  } else if (rabbit.classList.contains("smaller")) {
    rabbit.classList.toggle("bigger");
    rabbit.classList.toggle("smaller");
    rabbitShow(true);
  } else {
    rabbit.classList.toggle("bigger");
    rabbitShow(true);
  }
};

const rabbitShow = (status) => {
  let rabbit = document.querySelector(".rabbitselection");
  rabbitItems = [
    "Bugs - American - Male - 8 months old",
    "Babs - Lionhead - Female - 11 months old",
    "Cricket - Other - Male - 4 years old",
    "Flops - American - Male - 3 years old",
  ];
  if (status) {
    rabbit.replaceChildren();
    let item = document.createElement("ul");
    for (let i = 0; i < rabbitItems.length; i++) {
      let listItem = document.createElement("li");
      listItem.innerHTML = rabbitItems[i];
      item.append(listItem);
    }
    rabbit.append(item);
  } else {
    rabbit.replaceChildren(
      "Vaccine by vaccine, our Affordable Vaccine Appointments are providing pets the necessary services they need to remain safe and healthy members of their families. Our clinic offers affordable vaccines and microchips by appointment and through scheduled large-scale walk-in clinics a few times throughout the year."
    );
  }
};

const catToggle = () => {
  let dog = document.querySelector(".Dog");
  let cat = document.querySelector(".Cat");
  let rabbit = document.querySelector(".Rabbit");
  if (rabbit.classList.contains("chosen")) {
    rabbit.classList.toggle("chosen");
  }
  if (dog.classList.contains("chosen")) {
    dog.classList.toggle("chosen");
  }
  cat.classList.toggle("chosen");
  document.querySelector(".cast").innerHTML = "Your vote has been cast";
};

const dogToggle = () => {
  let dog = document.querySelector(".Dog");
  let cat = document.querySelector(".Cat");
  let rabbit = document.querySelector(".Rabbit");

  if (rabbit.classList.contains("chosen")) {
    rabbit.classList.toggle("chosen");
  }
  if (cat.classList.contains("chosen")) {
    cat.classList.toggle("chosen");
  }

  dog.classList.toggle("chosen");
  document.querySelector(".cast").innerHTML = "Your vote has been cast";
};

const rabbitToggle = () => {
  let rabbit = document.querySelector(".Rabbit");
  let dog = document.querySelector(".Dog");
  let cat = document.querySelector(".Cat");

  if (dog.classList.contains("chosen")) {
    dog.classList.toggle("chosen");
  }
  if (cat.classList.contains("chosen")) {
    cat.classList.toggle("chosen");
  }
  rabbit.classList.toggle("chosen");
  document.querySelector(".cast").innerHTML = "Your vote has been cast";
};

//Foundation for bellow taken from
//w3schools
window.addEventListener("scroll", () => {
  let item = document.querySelector(".navbar");
  if (
    document.documentElement.scrollTop > 50 &&
    !item.classList.contains("yellow")
  ) {
    item.classList.toggle("yellow");
  } else if (
    document.documentElement.scrollTop < 50 &&
    item.classList.contains("yellow")
  ) {
    item.classList.toggle("yellow");
  }
});
