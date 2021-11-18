import { getAllListingsRoute } from './getAllListings';
import { getListingRoute } from './getListings';
import { addViewToListingRoute } from './addViewToListing';
import { getUserListingsRoute } from './getUserListing';
import { createNewListingRoute } from './createNewListing';
import { updateListingRoute } from './updateListing';
import { deleteListingRoute } from './deleteListing';
export default [
  addViewToListingRoute,
  getAllListingsRoute,
  getListingRoute,
  getUserListingsRoute,
  createNewListingRoute,
  updateListingRoute,
  deleteListingRoute,
];
