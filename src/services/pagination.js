export const nextPage = (currentPage, totalPages, setCurrentPage) => {
  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
  }
};

export const prevPage = (currentPage, setCurrentPage) => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};

export const getCurrentPageData = (data, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return data.slice(startIndex, endIndex);
};
