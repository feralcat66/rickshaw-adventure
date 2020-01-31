function scoreHp(hp) {
    if (hp <= 0) {
        return 'dead';
    }
    if (hp >= 1) {
        return 'alive';
    }
}
export default scoreHp;