function superbowlWin(array) {
    const wonYear = array.find(index => index.result === "W");
    if (wonYear) {
        return wonYear.year
    }

}