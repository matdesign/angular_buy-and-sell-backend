import { db } from '../database';
//import { fakeListings } from './fakedata';

export const getAllListingsRoute = {
  method: 'GET',
  path: '/api/listings',
  handler: async (req, h) => {
    const { results } = await db.query('SELECT * FROM listings');
    return results;
    //return fakeListings;
  },
};
