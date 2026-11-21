
export const showHTML = (strings: string|string[], html : string) => {
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
