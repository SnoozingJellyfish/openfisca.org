import {iso31662} from 'iso-3166';

export function isUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol == 'https:';
  } catch (_) {
    return false;
  }
}

export function isEmailAddress(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // source: https://stackoverflow.com/a/9204568/594053
}

export function isISOdate(value) {
  return !isNaN(new Date(value)); // source: https://stackoverflow.com/a/67410020/594053
}

export function isIso31662(value) {
  return iso31662.some((entry) => {
    return (entry.code === value) || (entry.parent === value) || (value === 'ZZ');
  });
}
