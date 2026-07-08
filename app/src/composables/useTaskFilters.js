import { computed, ref, watch } from "vue";

export function useTaskFilters(tasks, initialPageSize = 3) {
  const keyword = ref("");
  const status = ref("all");
  const category = ref("all");
  const currentPage = ref(1);
  const pageSize = ref(initialPageSize);

  const categories = computed(() => {
    return ["all", ...new Set(tasks.value.map((task) => task.category).filter(Boolean))];
  });

  const filteredTasks = computed(() => {
    return tasks.value.filter((task) => {
      const matchesKeyword = task.title.toLowerCase().includes(keyword.value.trim().toLowerCase());
      const matchesStatus = status.value === "all" || task.status === status.value;
      const matchesCategory = category.value === "all" || task.category === category.value;
      return matchesKeyword && matchesStatus && matchesCategory;
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

  watch([keyword, status, category, totalResults], () => {
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
    category.value = "all";
    currentPage.value = 1;
  }

  function setPageSize(value) {
    pageSize.value = value;
  }

  return {
    keyword,
    status,
    category,
    categories,
    filteredTasks,
    pagedTasks,
    totalResults,
    currentPage,
    pageSize,
    totalPages,
    pageRange,
    goToPreviousPage,
    goToNextPage,
    setPageSize,
    resetFilters,
  };
}
