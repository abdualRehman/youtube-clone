import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

// const selectedCategory = 'New';
const Sidebar = ({ selectedCategory, setSelectedCategory, theme }) => (
    <Stack sx={{
        overflowY: 'auto',
        zIndex: '99999',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { xs: "row", md: "column" },
    }} className="sidebar">
        {categories.map((category) => (
            <button
                className='category-btn'
                onClick={() => setSelectedCategory(category.name)}
                style={{
                    background: category.name === selectedCategory && '#FC1503',
                    color:(theme === 'light') ? (category.name === selectedCategory) ? "white" : "#000" : 'white'
                }}
                key={category.name}
            >
                <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }} >{category.icon}</span>
                <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }} >{category.name}</span>
            </button>
        ))}

    </Stack>
)
export default Sidebar;