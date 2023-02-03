import User from "./models/user";
import Feed from "./models/feed";
import Notification from "./models/notification";
import Event from "./models/event";

export const USERS = [
  new User(
    "1",
    "Amjad Al-Omar",
    "amjadalomar",
    "amjad123",
    "amjad123@gmail.com",
    "9514968660",
    "Lemonade",
    "11/11/2000",
    [("2", "3", "4", "5", "6", "7", "8", "9", "10")],
    "wee wee woo woo waa waa",
    require("../assets/images/amjad.png")
  ),
  new User(
    "2",
    "Mirai Adams",
    "miraiadams",
    "mirai123",
    "mirai123@gmail.com",
    "9515555555",
    "Tequila",
    "9/27/01",
    ["1", "3", "4", "5"],
    "i failed my drug test",
    require("../assets/images/miraihead.png")
  ),
  new User(
    "3",
    "Douglas Seo",
    "douglas.seo",
    "douglas123",
    "douglas123@gmail.com",
    "9519876543",
    "Vodka",
    "12/21/99",
    ["1", "2", "4", "5"],
    "Douglas is the CEOOOOO",
    require("../assets/images/popper.png")
  ),
  new User(
    "4",
    "Matthew Niculae",
    "mattlab.io",
    "matt123",
    "matt123@gmail.com",
    "9514567890",
    "Beer",
    "1/28/99",
    ["1", "2", "3", "5", "6"],
    "what are these doritos all about?",
    require("../assets/images/matt.png")
  ),
  new User(
    "5",
    "Test",
    "test",
    "test123",
    "test@gmail.com",
    "5551234567",
    "Whiskey on the Rocks",
    "1/1/97",
    ["2", "3", "4", "6", "7", "8", "9", "10"],
    "this is the test user",
    require("../assets/images/popper.png")
  ),
  new User(
    "6",
    "Test6",
    "test6",
    "test123",
    "test6@gmail.com",
    "5551234567",
    "Martini",
    "12/1/98",
    ["1", "2", "3", "4", "5", "7", "8", "9", "10"],
    "this is the test user number 6",
    require("../assets/images/popper.png")
  ),
  new User(
    "7",
    "Test7",
    "test7",
    "test123",
    "test7@gmail.com",
    "5551234567",
    "Corona",
    "10/13/95",
    ["1", "2", "3", "4", "5", "6", "8", "9", "10"],
    "this is the test user number 7",
    require("../assets/images/popper.png")
  ),
  new User(
    "8",
    "Test8",
    "test8",
    "test123",
    "test8@gmail.com",
    "5551234567",
    "Bud Light Bruther",
    "4/19/96",
    ["1", "2", "3", "4", "5", "6", "7", "9", "10"],
    "this is the test user number 8",
    require("../assets/images/popper.png")
  ),
  new User(
    "9",
    "Test9",
    "test9",
    "test123",
    "test9@gmail.com",
    "5551234567",
    "Red Wine",
    "9/11/01",
    ["1", "2", "3", "4", "5", "6", "7", "8", "10"],
    "this is the test user number 9",
    require("../assets/images/popper.png")
  ),
  new User(
    "10",
    "Test10",
    "test10",
    "test123",
    "test10@gmail.com",
    "5551234567",
    "White Wine",
    "6/7/98",
    ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    "this is the test user",
    require("../assets/images/popper.png")
  ),
];

export const HOMEFEED = [
  new Feed(
    "f1",
    "2",
    "10 mins ago",
    "Baco, Corona, CA",
    "Going out to Baco!",
    false,
    ["1", "3", "4", "5", "6", "7", "8", "9"],
    ["wow", "nice", "cool"],
    require("../assets/images/mirai.png")
  ),
  new Feed(
    "f2",
    "1",
    "2 hours ago",
    "Six Flags, Santa Clarita, CA",
    "With friends at Six Flags :)",
    true,
    ["3", "4", "6"],
    ["wow", "nice", "cool"],
    require("../assets/images/amjad.png")
  ),
  new Feed(
    "f3",
    "5",
    "10 hours ago",
    "Waterbar, Pacific Beach, CA",
    "Test User is getting litty at Waterbar",
    true,
    ["1", "3", "4", "6", "7", "8", "9"],
    ["yooooo", "get into it yuh", "slay besitie"],
    require("../assets/images/amjad.png")
  ),
  new Feed(
    "f4",
    "7",
    "1 day ago",
    "Hillcrest, CA",
    "Welfare Wednesdaysssss",
    false,
    ["1", "9"],
    ["hip"],
    require("../assets/images/amjad.png")
  ),
  new Feed(
    "f5",
    "4",
    "1 day ago",
    "Baco, Corona, CA",
    "Going out to Baco!",
    false,
    ["1", "7", "8", "9"],
    ["wow", "nice", "cool"],
    require("../assets/images/mirai.png")
  ),
  new Feed(
    "f6",
    "3",
    "1 week ago",
    "Legoland, Carlsbad, CA",
    "Legoland is so cool",
    true,
    ["1", "4", "5", "6", "7", "8", "9"],
    ["im jealous!", "drive hoe", "cool"],
    require("../assets/images/amjad.png")
  ),
  new Feed(
    "f7",
    "2",
    "1 week ago",
    "Starbucks, Corona, CA",
    "Studying so fun : (",
    true,
    ["1", "4", "5", "6", "7", "8", "9"],
    ["im jealous!", "drive hoe", "cool"],
    require("../assets/images/amjad.png")
  ),
  new Feed(
    "f8",
    "1",
    "2 week ago",
    "Cheesecake Factory, Riverside, CA",
    "Birthday Dinner thanks for coming out guys",
    true,
    ["1", "4", "5", "6", "7", "8", "9"],
    ["im jealous!", "drive hoe", "cool"],
    require("../assets/images/amjad.png")
  ),
  new Feed(
    "f9",
    "4",
    "3 week ago",
    "Knotts Berry Farm, Buena Park, CA",
    "Knotts Scary Farmmmmmm ooooooewwewew",
    true,
    ["1", "4", "5", "6", "7", "8", "9"],
    ["im jealous!", "drive hoe", "cool"],
    require("../assets/images/amjad.png")
  ),
  new Feed(
    "f10",
    "8",
    "3 week ago",
    "Big Bear Slopes, Big Bear, CA",
    "Hit the slopes with the bros chaaaaa",
    true,
    ["1", "4", "5", "6", "7", "8", "9"],
    ["im jealous!", "drive hoe", "cool"],
    require("../assets/images/amjad.png")
  ),
];

export const NOTIFICATIONS = [
  new Notification(
    "n1",
    "3",
    "1 day ago",
    "",
    "User just Popped with you!",
    ""
  ),
  new Notification(
    "n2",
    "1",
    "1 day ago",
    "",
    "User2 just Popped with you!",
    ""
  ),
  new Notification("n3", "1", "2 days ago", "", "User3 liked your pop.", ""),
  new Notification(
    "n4",
    "3",
    "2 days ago",
    "",
    "User3 just Popped with you!",
    ""
  ),
  new Notification(
    "n5",
    "1",
    "3 days ago",
    "",
    "User popped 'going to San Diego tonight!'",
    ""
  ),
];

export const EVENTS = [];
