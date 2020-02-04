for (i = 0; i < 101; i++) {
    var head = $('<h3 class="accusation">Accusation ' + (i+1) + '</h3>');
    $('body').append(head);
    head.click(possibilities(i));
    // console.log(friends[i]);
    // console.log(friends[i % friends.length]); 
};
function possibilities(index) {
    return function () {
    alert(friends[index] + "killed me with a " + weapons[index] + " in " + locations[index]);
    }
};
var friends = ["John", "Mary", "Matt", "Chris", "Austin"];
var weapons = ["Gun", "Knife", "Katana", "Chainsaw", "Stake", "Machette", "Sword", "Pillow", "Frying Pan", "Fire", "Baseball Bat", "Woodchipper", "Meatgrinder", "Meat Slicer", "Boiling Oil", "Fax Machine", "Pushed down stairs", "Machinegun"];
var locations = ["Paris", "Dublin", "Tokyo", "Birmingham", "London", "Moscow", "Montreal", "Seattle", "Houston", "St. Petersburg"];