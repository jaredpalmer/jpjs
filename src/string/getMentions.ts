import { uniq } from '../functional/uniq';
import { MENTION_REGEX } from './regexp';

function makeLowercase(usernames: string[]): string[] {
  return usernames.map(u => u.toLowerCase());
}

function removeAtSymbol(usernames: string[]): string[] {
  return usernames.map(u => u.substr(1));
}

/**
 * Extract cleaned usernames out of text containing mentions (e.g `@jared`)
 *
 * @example
 * // returns ['jared', 'brent12']
 * getMentions(`Yo \@Jared \@brent12, what is up?`)
 *
 * @example
 * // returns []
 * getMentions(`Yo what is up?`)
 */
export function getMentions(text: string): string[] {
  const matchedMentions = text.match(MENTION_REGEX);
  const mentions = matchedMentions
    ? matchedMentions.filter(mention => !mention.startsWith('/'))
    : [];

  if (!mentions || mentions.length === 0) {
    return [];
  }
  // " @jaredpalmer" => "@jaredpalmer"
  const trimmed = mentions.map(mention =>
    typeof mention === 'string' ? mention.trim() : mention
  );
  // ["@jaredpalmer"] => "jaredpalmer"
  const cleaned = removeAtSymbol(trimmed);
  // "Jaredpalmer" => "jaredpalmer"
  const lowercase = makeLowercase(cleaned);
  // ["jaredpalmer", "jaredpalmer"] => ["jaredpalmer"]
  const distinct = uniq(lowercase);
  return distinct;
}
