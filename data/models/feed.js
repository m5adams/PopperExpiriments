class Feed {
  constructor(
    id,
    userId,
    dateTime,
    location,
    description,
    isLiked,
    likesIds,
    comments,
    images
  ) {
    this.id = id;
    this.userId = userId;
    this.dateTime = dateTime;
    this.location = location;
    this.description = description;
    this.isLiked = isLiked;
    this.likesIds = likesIds;
    this.comments = comments;
    this.images = images;
  }
}

export default Feed;
