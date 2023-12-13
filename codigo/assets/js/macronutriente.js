function calculateMacronutrients() {
    var calories = parseFloat(document.getElementById('calories').value);

    var protein = (calories * 0.2) / 4; // 20% das calorias de proteína
    var carbs = (calories * 0.5) / 4; // 50% das calorias de carboidratos
    var fat = (calories * 0.3) / 9; // 30% das calorias de gordura

    document.getElementById('proteinResult').textContent = protein.toFixed(2) + 'g';
    document.getElementById('carbResult').textContent = carbs.toFixed(2) + 'g';
    document.getElementById('fatResult').textContent = fat.toFixed(2) + 'g';
  }