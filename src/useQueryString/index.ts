import { useSafeWindow } from 'use-safe-window';

interface IQuery {
  [key: string]: string;
}

export default function useQueryString(): IQuery {
  const currentLink = useSafeWindow((window) => window.location.href);

  if (!currentLink?.includes('?')) {
    return {};
  }
  const queryString = currentLink.split('?')[1];
  var query: IQuery = {};
  var pairs = (queryString[0] === '?'
    ? queryString.substr(1)
    : queryString
  ).split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}
