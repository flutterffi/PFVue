import { computed, ref } from "vue";

export function useTaskFilters(tasks) {
  const keyword = ref("");
  const status = ref("all");

  const filteredTasks = computed(() => {
    return tasks.value.filter((task) => {
      const matchesKeyword = task.title.toLowerCase().includes(keyword.value.trim().toLowerCase());
      const matchesStatus = status.value === "all" || task.status === status.value;
      return matchesKeyword && matchesStatus;
    });
  });

  function resetFilters() {
    keyword.value = "";
    status.value = "all";
  }

  return {
    keyword,
    status,
    filteredTasks,
    resetFilters,
  };
}
