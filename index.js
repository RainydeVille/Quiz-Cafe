document.getElementById("sortingHatQuiz").addEventListener("submit", function (event) {
  event.preventDefault();

  //score tracker
  const scores = {
    gryffindor: 0,
    slytherin: 0,
    ravenclaw: 0,
    hufflepuff: 0,
  };

  //loop thru each question and count
  for (let i = 1; i <= 10; i++) {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);
    if (answer) {
      scores[answer.value] += 1;
    }
  }

  //determine score
  let topHouse = "Nowhere, answer at least one question to be sorted";
  let maxScore = scores[topHouse];

  for (const house in scores) {
    if (scores[house] > maxScore) {
      topHouse = house;
      maxScore = scores[house];
    }
  }

  //display result
  alert(`The Hat has spoken... You belong to ${topHouse.toUpperCase()}! 🪄`);
});
