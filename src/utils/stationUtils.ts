export const validateLink = (link: string) => {
  const linkRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  if (matchExact(linkRegex, link)) {
    return link;
  }
  return false;
};

const matchExact = (r: RegExp, str: string) => {
  const match = str.match(r);
  return match && str === match[0];
};
