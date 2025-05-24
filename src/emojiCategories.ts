import  { EmojiCategory } from './types';

export const emojiCategories: EmojiCategory[] = [
  {
    name: 'Animals',
    emojis: ['🐶', '🐱', '🐵', '🐰', '🦊', '🐻', '🐼', '🐨']
  },
  {
    name: 'Food',
    emojis: ['🍕', '🍔', '🍟', '🌭', '🍩', '🍦', '🍓', '🍑']
  },
  {
    name: 'Sports',
    emojis: ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎯']
  },
  {
    name: 'Travel',
    emojis: ['✈️', '🚗', '🚂', '🚢', '🚁', '🏖️', '🗿', '🏔️']
  },
  {
    name: 'Tech',
    emojis: ['📱', '💻', '⌚', '🖥️', '🎮', '🎧', '📷', '🔋']
  }
];

export const getRandomEmoji = (category: EmojiCategory): string => {
  const randomIndex = Math.floor(Math.random() * category.emojis.length);
  return category.emojis[randomIndex];
};
 