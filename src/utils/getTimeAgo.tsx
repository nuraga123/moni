export function getTimeAgo(timestamp: number = Date.now()) {
  if (typeof timestamp !== "number" && !Number.isNaN(timestamp)) return "";

  const now = Date.now();
  const past = timestamp * 1000;
  const diffInSeconds = Math.floor((now - past) / 1000);

  if (diffInSeconds < 60) return `${diffInSeconds}s`;

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}m`;

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h`;

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return `${diffInDays}d`;

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return `${diffInMonths}m`;

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears}y`;
}
