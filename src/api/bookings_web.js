import { BOOKINGS_WEB } from './endpoints';

const availability = async (searchDate) => {
  const params = `searchDate=${searchDate}&routeId=4&amountResultsAfter=100&amountResultsBefore=0`;
  const response = await fetch(`${BOOKINGS_WEB.AVAILABILITY}?${params}`);

  return response.json();
};

export default {
  availability,
};
