
export const showHTML = (
  strings: string|string[],
  html : string,
) : string => {
  if (strings === undefined) {
    return '';
  }

  let _strings = (typeof strings === 'string')
    ? [strings]
    : strings;

  _strings = _strings.map((item) => {
    if (typeof item !== 'string') {
      return '';
    }
    return item.trim();
  });

	for (const str of _strings) {
		if (str.trim() === '') {
			return '';
		}
	}

	return html;
};
