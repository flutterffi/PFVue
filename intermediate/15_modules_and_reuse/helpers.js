export function formatTopic(topic) {
  return topic.trim().toUpperCase();
}

export function countCompleted(items) {
  return items.filter((item) => item.done).length;
}
