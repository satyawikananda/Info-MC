export const icon = (id, data) => {
  let val = 'favorite_border';
  if (data.id == id) {
    val = 'favorite';
  }
  return val;
};
