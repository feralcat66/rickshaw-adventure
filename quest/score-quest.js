function scoreQuest(choice, questId, user) {
    user.hp += choice.hp;
    user.rupees += choice.rupees;
    user.completed[questId] = true;
}
export default scoreQuest;