function calculateDaysBetweenDates(begin, end) {
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var days = 0;
    while (beginDate < endDate) {
        days++;
        beginDate.setDate(beginDate.getDate() + 1);
    }
    return days;
}