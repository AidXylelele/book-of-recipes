export const getHeaders = () => ({
  headers: { Authorization: localStorage.getItem('token') }
});
