const calendarDays = document.getElementById("calendar-days");
        const currentDate = document.querySelector(".current-date");
        const prevNextIcon = document.querySelectorAll(".icons span");
        const gotoDashboardButton = document.getElementById("gotoDashboard");
        const popup = document.getElementById("popup");
        const popupContent = document.getElementById("popupContent");

        // Sample data for event history
        const eventHistory = {
            "2023-10-1": {
                income: ["Gaji: 5,000,000 (Gaji bulan ini)"],
                expenses: [],
            },
            "2023-10-2": {
                income: [],
                expenses: ["Belanja Bulanan: 4,000,000 (Pengeluaran pertama)"],
            },
            "2023-10-6": {
                income: [],
                expenses: ["Makanan: 50,000 (Gacoan)"],
            },
            "2023-10-27": {
                income: ["Freelance: 750,000 (Gaji Freelance)"],
                expenses: [],
            },
            // Add more dates here...
        };

        // getting new date, current year, and month
        let date = new Date();
        let currYear = date.getFullYear();
        let currMonth = date.getMonth();

        // storing full names of all months in an array
        const months = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];

        const renderCalendar = () => {
            let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
            let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
            let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
            let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
            let liTag = "";

            for (let i = firstDayOfMonth; i > 0; i--) {
                liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
            }

            for (let i = 1; i <= lastDateOfMonth; i++) {
                let isToday = i === date.getDate() && currMonth === date.getMonth()
                    && currYear === date.getFullYear() ? "active" : "";
                const eventsForDay = eventHistory[`${currYear}-${currMonth + 1}-${i}`];
                if (eventsForDay) {
                    const incomeEvents = eventsForDay.income;
                    const expensesEvents = eventsForDay.expenses;
                    let contentHTML = "";

                    if (incomeEvents && incomeEvents.length > 0) {
                        contentHTML += `<p><strong>Income:</strong></p>`;
                        contentHTML += incomeEvents.map((event) => `<p>${event}</p>`).join("");
                    }

                    if (expensesEvents && expensesEvents.length > 0) {
                        contentHTML += `<p><strong>Expenses:</strong></p>`;
                        contentHTML += expensesEvents.map((event) => `<p>${event}</p>`).join("");
                    }

                    liTag += `<li class="${isToday} clickable" data-content='${contentHTML}'>${i}</li>`;
                } else {
                    liTag += `<li class="${isToday}">${i}</li>`;
                }
            }

            for (let i = lastDayOfMonth; i < 6; i++) {
                liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
            }
            currentDate.innerText = `${months[currMonth]} ${currYear}`;
            calendarDays.innerHTML = liTag; // Updated the element where days are displayed
        }
        renderCalendar();

        prevNextIcon.forEach(icon => {
            icon.addEventListener("click", () => {
                currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

                if (currMonth < 0 || currMonth > 11) {
                    date = new Date(currYear, currMonth, date.getDate());
                    currYear = date.getFullYear();
                    currMonth = date.getMonth();
                }
                renderCalendar();
            });
        });

        calendarDays.addEventListener("click", (e) => {
            if (e.target.classList.contains("clickable")) {
                const contentHTML = e.target.getAttribute("data-content");
                popupContent.innerHTML = contentHTML;
                popup.style.display = "flex";
            }
        });

        // Function to close the pop-up when clicking outside of it
        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.style.display = "none";
            }
        });

        function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var wrapper = document.querySelector('.wrapper');
    var hamburger = document.querySelector('.hamburger');

    sidebar.classList.toggle('active-sidebar');
    wrapper.classList.toggle('active-sidebar');
    hamburger.classList.toggle('active-sidebar');
}
