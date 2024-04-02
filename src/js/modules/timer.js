function timer() {
    const endDate = new Date(); //Получаем текущую дату
    // Устанавливаем expire date = текущая + 3 дня
    endDate.setDate(endDate.getDate() + 3);
    // endDate.setSeconds(endDate.getSeconds() + 10);

    // console.log(endDate);

    const daysElement = document.querySelector("#days");
    const hoursElement = document.querySelector("#hours");
    const minutesElement = document.querySelector("#minutes");
    const secondsElement = document.querySelector("#seconds");
    const promoExp = document.querySelector(".promotion__expires");
    

    function updateTimer() {
        const now = new Date(); // Текущая дата
        const timeLeft = endDate - now; // Сколько времени осталось

        if (timeLeft <= 0) {
            daysElement.innerText = "0";
            hoursElement.textContent = "0";
            minutesElement.textContent = "0";
            secondsElement.textContent = "0";

            clearInterval(timerInterval);

            promoExp.textContent = 'Offer expired!'
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );

        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysElement.innerText = days < 10 ? '0' + days: days;
        hoursElement.textContent = hours < 10 ? '0' + hours: hours;
        minutesElement.textContent = minutes < 10 ? '0' + minutes: minutes;
        secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;
    }

    updateTimer(); // Запускаем таймер при загрузке страницы

    const timerInterval =  setInterval(updateTimer, 1000); // Обновляем таймер каждую секунду
}

export default timer;