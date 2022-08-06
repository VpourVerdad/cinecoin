import React from "react";

function convertDate(date) {
    let datePart = date.match(/\d+/g),
        year = datePart[0],
        month = datePart[1],
        day = datePart[2];
    return day + "-" + month + "-" + year;
}

export default convertDate;