

export function rem(px: number, rootFontSize = 16) {
  return `${px / rootFontSize}rem`;
}


export const getPageNumberFromUrl = (url: string) => {
  const queryParams = new URLSearchParams(new URL(url).search);
  return queryParams.get("page");
};
