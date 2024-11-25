function addHabit() {
    const habitInput = document.getElementById('habitInput');
    const habitList = document.getElementById('habitList');

    if (habitInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = habitInput.value;
        li.onclick = function () {
            li.style.textDecoration = li.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        };
        habitList.appendChild(li);
        habitInput.value = ''; // Clear input after adding
    } else {
        alert('Please enter a habit!');
    }
}
