class User {
  constructor(
    id,
    fullName,
    userName,
    displayName,
    password,
    email,
    phoneNumber,
    drinkOfChoice,
    birthday,
    friendIds,
    bio,
    profilePic
  ) {
    this.id = id;
    this.fullName = fullName;
    this.userName = userName;
    this.displayName = displayName;
    this.password = password;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.drinkOfChoice = drinkOfChoice;
    this.birthday = birthday;
    this.friendIds = friendIds;
    this.bio = bio;
    this.profilePic = profilePic;
  }
}

export default User;
