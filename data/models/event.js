class Event {
  constructor(
    id,
    userId,
    date,
    startTime,
    endTime,
    location,
    description,
    friendIds
  ) {
    this.id = id;
    this.userId = userId;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    this.location = location;
    this.description = description;
    this.friendIds = friendIds;
  }
}

export default Event;
