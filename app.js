const dog = () => {
  let dog = document.querySelector(".dog");

  if (dog.classList.contains("bigger")) {
    dog.classList.toggle("smaller");
    dog.classList.toggle("bigger");
  } else if (dog.classList.contains("smaller")) {
    dog.classList.toggle("bigger");
    dog.classList.toggle("smaller");
  } else {
    dog.classList.toggle("bigger");
  }
};

const cat = () => {
  let cat = document.querySelector(".cat");
  if (cat.classList.contains("bigger")) {
    cat.classList.toggle("smaller");
    cat.classList.toggle("bigger");
  } else if (cat.classList.contains("smaller")) {
    cat.classList.toggle("bigger");
    cat.classList.toggle("smaller");
  } else {
    cat.classList.toggle("bigger");
  }
};

const rabit = () => {
  let rabit = document.querySelector(".rabit");
  // rabit.classList.toggle("bigger");

  if (rabit.classList.contains("bigger")) {
    rabit.classList.toggle("smaller");
    rabit.classList.toggle("bigger");
    // console.log("rabit bigger");
  } else if (rabit.classList.contains("smaller")) {
    rabit.classList.toggle("bigger");
    rabit.classList.toggle("smaller");
  } else {
    rabit.classList.toggle("bigger");
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
