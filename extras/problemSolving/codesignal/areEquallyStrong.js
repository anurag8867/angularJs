function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    if ((yourLeft + yourRight) !== (friendsLeft + friendsRight)) return false;
    if (!(yourLeft === friendsLeft || yourLeft === friendsRight)) return false;
    return true;
}
console.log(areEquallyStrong(10, 15, 5, 20))