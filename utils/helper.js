
export const filteredRestrau = (searchText, allRestaurant) => {
  const data = allRestaurant.filter((restrau) => {
    return restrau.info.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return data;
};
