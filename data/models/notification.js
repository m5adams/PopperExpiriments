class Notification {
  constructor(id, userId, dateTime, location, description, images) {
    this.id = id;
    this.userId = userId;
    this.dateTime = dateTime;
    this.location = location;
    this.description = description;
    this.images = images;
  }
}

export default Notification;
