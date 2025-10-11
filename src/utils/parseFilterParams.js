const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;

  const allowedType = ['work', 'home', 'personal'];

  return allowedType.includes(type) ? type : undefined;
};

const parseIsFavourite = (favouriteValue) => {
  const isString = typeof favouriteValue === 'string';
  if (!isString) return;

  if (favouriteValue === 'false') return false;
  if (favouriteValue === 'true') return true;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedcontactType = parseType(contactType);
  const parsedisFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedcontactType,
    isFavourite: parsedisFavourite,
  };
};
