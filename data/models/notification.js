class Notification {
  constructor(
    id,
    userId,
    notificationType,
    dateTime,
    location,
    description,
    images
  ) {
    this.id = id;
    this.userId = userId;
    this.notificationType = notificationType;
    this.dateTime = dateTime;
    this.location = location;
    this.description = description;
    this.images = images;
  }
}

export default Notification;
