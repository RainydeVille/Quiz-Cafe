document.getElementById("sortingHatQuiz").addEventListener("submit", function (event) {
  event.preventDefault();

  //score tracker
  const scores = {
    gryffindor: 0,
    slytherin: 0,
    ravenclaw: 0,
    hufflepuff: 0,
  };

  // loop thru each question and count
  let totalAnswers = 0;
  for (let i = 1; i <= 10; i++) {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);
    if (answer) {
      scores[answer.value] += 1;
      totalAnswers++;
    }
  }

  // if no answer selected tell user to answer at least one
  if (totalAnswers === 0) {
    alert("The Hat has spoken... You belong to NOWHERE — answer at least one question to be sorted! 🪄");
    return;
  }

  // determine top house
  let topHouse = null;
  let maxScore = -1;
  for (const house in scores) {
    if (scores[house] > maxScore) {
      topHouse = house;
      maxScore = scores[house];
    }
  }

  // display result
  const pretty = topHouse.charAt(0).toUpperCase() + topHouse.slice(1);
  alert(`The Hat has spoken... You belong to ${pretty.toUpperCase()}! 🪄`);
});
