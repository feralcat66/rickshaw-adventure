function scoreRupees(rupees) {
    if (rupees <= 999) {
        return 'poor';
    }
    else if (rupees >= 1000)
        return 'rich';
}
export default scoreRupees;