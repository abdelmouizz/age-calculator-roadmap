import datepicker from "js-datepicker"
import { DateTime } from 'luxon';


//Initialize js-datepicker
datepicker('#birthdate', {
    maxDate: new Date(),
    formatter: (input, date) =>{
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        input.value = `${year}-${month}-${day}`;
    }
});
const form = document.getElementById('ageForm');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputValue = document.getElementById('birthdate').value;
    const birthDate = DateTime.fromISO(inputValue);
    const now = DateTime.now();

    if (!birthDate.isValid || birthDate > now) {
    result.textContent = 'Please enter a valid birthdate.';
    return;
}
const age = now.diff(birthDate, ['years', 'months', 'days']).toObject();
result.textContent =
`You are ${Math.floor(age.years)} years, ${Math.floor(age.months)} months, and ${Math.floor(age.days)} days old.`;
});
