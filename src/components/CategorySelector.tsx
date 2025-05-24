import  { motion } from 'framer-motion';
import { EmojiCategory } from '../types';
import { emojiCategories } from '../emojiCategories';

interface CategorySelectorProps {
  player: number;
  selectedCategory: EmojiCategory | null;
  onSelectCategory: (category: EmojiCategory) => void;
}

const CategorySelector = ({ 
  player, 
  selectedCategory, 
  onSelectCategory 
}: CategorySelectorProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Player {player}: Choose Your Emoji Category
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {emojiCategories.map((category) => (
          <motion.div
            key={category.name}
            className={`category-card ${
              selectedCategory?.name === category.name
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-gray-200 bg-white'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectCategory(category)}
          >
            <h3 className="font-semibold mb-2">{category.name}</h3>
            <div className="flex flex-wrap justify-center gap-1">
              {category.emojis.slice(0, 4).map((emoji, index) => (
                <span key={index} className="text-xl">
                  {emoji}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
 