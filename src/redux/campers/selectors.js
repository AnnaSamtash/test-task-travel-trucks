// import { createSelector } from '@reduxjs/toolkit';
// import { selectFilters } from '../filters/selectors';

export const selectLoading = state => state.campers.loading;
export const selectError = state => state.campers.error;
export const selectCampers = state => state.campers.items;
export const selectSelectedCampers = state => state.campers.selected;
export const selectTotalPage = state => state.campers.totalPage;
export const selectCamperDetails = state => state.campers.camperDetails;
// export const selectLocationFilteredCampers = createSelector(
//   [selectCampers, selectFilters],
//   (campers, filters) => {
//     const filterLocations = filters.location
//       ? filters.location.toLowerCase().split(/[\s,]+/)
//       : [];

//     return campers.filter(camper =>
//       filterLocations.some(location =>
//         camper.location?.toLowerCase().includes(location)
//       )
//     );
//   }
// );
