function calculateCalories() {
  var age = parseFloat(document.getElementById('age').value);
  var gender = document.getElementById('gender').value;
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);
  var activity = document.getElementById('activity').value;

  var bmr;

  if (gender === 'male') {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }

  var calorieIntake;

  switch (activity) {
    case 'sedentary':
      calorieIntake = bmr * 1.2;
      break;
    case 'light':
      calorieIntake = bmr * 1.375;
      break;
    case 'moderate':
      calorieIntake = bmr * 1.55;
      break;
    case 'active':
      calorieIntake = bmr * 1.725;
      break;
    case 'very_active':
      calorieIntake = bmr * 1.9;
      break;
  }

  document.getElementById('result').textContent = 'Calorias diárias recomendadas: ' + calorieIntake.toFixed(2);
}