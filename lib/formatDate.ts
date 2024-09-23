export function FormatDate(createdAt: any) {
  const date = new Date(createdAt); // Ensure `createdAt` is properly converted to a Date
  const now = new Date();

  const diffTime = Math.abs(now.getTime() - date.getTime()); // Difference in milliseconds
  const diffMinutes = Math.ceil(diffTime / (1000 * 60)); // Convert milliseconds to minutes

  if (diffMinutes < 60) {
    return `${diffMinutes} minutes ago`;
  } else if (diffMinutes < 1440) {
    // Less than 24 hours (60 minutes * 24 hours = 1440 minutes)
    const hours = Math.floor(diffMinutes / 60);
    return `${hours} hours ago`;
  } else {
    const days = Math.floor(diffMinutes / 1440); // Convert minutes to days
    return `${days} days ago`;
  }
}
