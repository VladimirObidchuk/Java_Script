let year = +prompt(`Enter current year`),
    monthText = prompt(`Enter current month`),
    day = +prompt(`Enter current day`);

let month,
    monthName,
    numLeap,
    numMult4 = year % 4,
    numMult100 = year % 100;

if (numMult4 === 0 && numMult100 !== 0) {
    leap = 1;
}
else { leap = 2; };

if (typeof (monthText) == "string") {
    switch (monthText) {
        case "January": month = 1; monthName = "January"; break;
        case "February": month = 2; monthName = "February"; break;
        case "March": month = 3; monthName = "March"; break;
        case "April": month = 4; monthName = "April"; break;
        case "May": month = 5; monthName = "May"; break;
        case "June": month = 6; monthName = "June"; break;
        case "July": month = 7; monthName = "July"; break;
        case "August": month = 8; monthName = "August"; break;
        case "September": month = 9; monthName = "September"; break;
        case "October": month = 10; monthName = "October"; break;
        case "November": month = 11; monthName = "November"; break;
        case "December": month = 12; monthName = "December"; break;
        default: month = Number(monthText);
    }
}
if (1 > month || month > 12) {
    alert(`Wrong month`);
}
else {
    switch (month) {
        case 1: monthName = "January"; break;
        case 2: monthName = "February"; break;
        case 3: monthName = "March"; break;
        case 4: monthName = "April"; break;
        case 5: monthName = "May"; break;
        case 6: monthName = "June"; break;
        case 7: monthName = "July"; break;
        case 8: monthName = "August"; break;
        case 9: monthName = "September"; break;
        case 10: monthName = "October"; break;
        case 11: monthName = "November"; break;
        case 12: monthName = "December"; break;
    }
}


switch (month) {
    case 1: if (1 > day || day > 31) {
        alert(`Wronge day`);
    }
    else if (1 <= day && day <= 30) {
        alert(`Nex data: ${year}. ${monthName}. ${++day}`);
    }
    else { alert(`Nex data: ${year}. ${monthName = `February`}. ${day = 01}`); };
        break;

    case 2: if (leap == 1) {
        if (1 > day || day > 29) {
            alert(`Wronge day`);
        }
        else if (1 <= day && day <= 28) {
            alert(`Nex data: ${year}. ${monthName}. ${++day}`);
        }
        else { alert(`Nex data: ${year}. ${monthName = `March`}. ${day = 01}`); };
    }
    else {
        if (1 > day || day > 28) {
            alert(`Wronge day`);
        }
        else if (1 <= day && day <= 27) {
            alert(`Nex data: ${year}. ${monthName}. ${++day}`);
        }
        else { alert(`Nex data: ${year}. ${monthName = `March`}. ${day = 01}`); };
    }
        break;

    case 3: if (1 > day || day > 31) {
        alert(`Wronge day`);
    }
    else if (1 <= day && day <= 30) {
        alert(`Nex data: ${year}. ${monthName}. ${++day}`);
    }
    else { alert(`Nex data: ${year}. ${monthName = `April`}. ${day = 01}`); };
        break;

    case 4: if (1 > day || day > 30) {
        alert(`Wronge day`);
    }
    else if (1 <= day && day <= 29) {
        alert(`Nex data: ${year}. ${monthName}. ${++day}`);
    }
    else { alert(`Nex data: ${year}. ${monthName = `May`}. ${day = 01}`); };
        break;

    case 5: if (1 > day || day > 31) {
        alert(`Wronge day`);
    }
    else if (1 <= day && day <= 30) {
        alert(`Nex data: ${year}. ${monthName}. ${++day}`);
    }
    else { alert(`Nex data: ${year}. ${monthName = `June`}. ${day = 01}`); };
        break;

    case 6: if (1 > day || day > 30) {
        alert(`Wronge day`);
    }
    else if (1 <= day && day <= 29) {
        alert(`Nex data: ${year}. ${monthName}. ${++day}`);
    }
    else { alert(`Nex data: ${year}. ${monthName = `July`}. ${day = 01}`); };
        break;

    case 7: if (1 > day || day > 31) {
        alert(`Wronge day`);
    }
    else if (1 <= day && day <= 30) {
        alert(`Nex data: ${year}. ${monthName}. ${++day}`);
    }
    else { alert(`Nex data: ${year}.${monthName = `August`}.${day = 01}`); };
        break;

    case 8: if (1 > day || day > 31) {
        alert(`Wronge day`);
    }
    else if (1 <= day && day <= 30) {
        alert(`Nex data: ${year}. ${monthName}. ${++day}`);
    }
    else { alert(`Nex data: ${year}. ${monthName = `September`}. ${day = 01}`); };
        break;

    case 9: if (1 > day || day > 30) {
        alert(`Wronge day`);
    }
    else if (1 <= day && day <= 29) {
        alert(`Nex data: ${year}. ${monthName}. ${++day}`);
    }
    else { alert(`Nex data: ${year}. ${monthName = `October`}. ${day = 01}`); };
        break;

    case 10: if (1 > day || day > 31) {
        alert(`Wronge day`);
    }
    else if (1 <= day && day <= 30) {
        alert(`Nex data: ${year}. ${monthName}. ${++day}`);
    }
    else { alert(`Nex data: ${year}. ${monthName = `November`}. ${day = 01}`); };
        break;

    case 11: if (1 > day || day > 30) {
        alert(`Wronge day`);
    }
    else if (1 <= day && day <= 29) {
        alert(`Nex data: ${year}. ${monthName}. ${++day}`);
    }
    else { alert(`Nex data: ${year}. ${monthName = `December`}. ${day = 01}`); };
        break;

    case 12: if (1 > day || day > 31) {
        alert(`Wronge day`);
    }
    else if (1 <= day && day <= 30) {
        alert(`Nex data: ${year}. ${monthName}. ${++day}`);
    }
    else { alert(`Nex data: ${year++}. ${monthName = `Januar`}. ${day = 01}`); };
}