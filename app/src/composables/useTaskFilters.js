import { computed, ref, watch } from "vue";

export function useTaskFilters(tasks) {
  const keyword = ref("");
  const status = ref("all");
  const currentPage = ref(1);
  const pageSize = ref(3);

  const filteredTasks = computed(() => {
    return tasks.value.filter((task) => {
      const matchesKeyword = task.title.toLowerCase().includes(keyword.value.trim().toLowerCase());
      const matchesStatus = status.value === "all" || task.status === status.value;
      return matchesKeyword && matchesStatus;
    });
  });

  const totalResults = computed(() => filteredTasks.value.length);

  const totalPages = computed(() => {
    return Math.max(1, Math.ceil(totalResults.value / pageSize.value));
  });

  const pagedTasks = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return filteredTasks.value.slice(start, end);
  });

  const pageRange = computed(() => {
    if (totalResults.value === 0) {
      return {
        start: 0,
        end: 0,
      };
    }

    const start = (currentPage.value - 1) * pageSize.value + 1;
    const end = Math.min(currentPage.value * pageSize.value, totalResults.value);

    return { start, end };
  });

  watch([keyword, status, totalResults], () => {
    currentPage.value = 1;
  });

  watch(totalPages, (value) => {
    if (currentPage.value > value) {
      currentPage.value = value;
    }
  });

  function goToPreviousPage() {
    if (currentPage.value > 1) {
      currentPage.value -= 1;
    }
  }

  function goToNextPage() {
    if (currentPage.value < totalPages.value) {
      currentPage.value += 1;
    }
  }

  function resetFilters() {
    keyword.value = "";
    status.value = "all";
    currentPage.value = 1;
  }

  return {
    keyword,
    status,
    filteredTasks,
    pagedTasks,
    totalResults,
    currentPage,
    totalPages,
    pageRange,
    goToPreviousPage,
    goToNextPage,
    resetFilters,
  };
}
