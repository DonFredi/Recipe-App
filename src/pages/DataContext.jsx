import React, { createContext, useEffect, useReducer } from 'react';
import product1 from '../assets/bread.jpg';
import product2 from '../assets/butter.jpg';
import product3 from '../assets/roasted.jpg';
import product4 from '../assets/peanut.jpg';
import useWindowSize from '../components/useWindowSize';

const DataContext = createContext({});

const initialState = {

    products: [
        {
            id: 0,
            src: product1,
            title: {
                item: '1.5 Kg Peanut Butter',
                weight: '1.5Kg',
                price: 1200
            },
            details: "Introducing our generous 1.5 Kg jar of pure peanut butter perfection! Crafted for those who simply can't get enough of the rich, creamy goodness of peanut butter. Whether you're a family of peanut butter enthusiasts or looking to stock up for the long haul, this jumbo-sized jar ensures you never run out of your favorite spread."
        },
        {
            id: 1,
            src: product2,
            title: {
                item: '800 grams Peanut Butter',
                weight: '800g',
                price: 600
            },
            details: "Discover the perfect balance of flavor and convenience with our 800g jar of smooth peanut butter bliss. Ideal for those who enjoy peanut butter regularly, this medium-sized jar offers ample supply without compromising on freshness or taste."
        },
        {
            id: 2,
            src: product3,
            title: {
                item: '400 grams Peanut Butter',
                weight: '400g',
                price: 300
            },
            details: "Elevate your snacking experience with our compact yet mighty 400g jar of delectable peanut butter goodness. Perfectly sized for singles, couples, or anyone craving a taste of pure delight, this jar packs a punch of flavor in every spoonful. Whether you're fueling up for the day or satisfying a midnight craving, this jar is your go-to source for peanut perfection."
        },
        {
            id: 3,
            src: product4,
            title: {
                item: '250 grams Peanut Butter',
                weight: '250g',
                price: 150
            },
            details: "Experience peanut butter perfection in a petite package with our 250g jar of creamy delight. Designed for those who appreciate quality in small doses, this jar is the epitome of convenience without compromise. Whether you're topping your morning oatmeal, stirring into yogurt, or simply enjoying it by the spoonful, this jar ensures you can enjoy the wholesome goodness of peanut butter wherever you go."
        }
    ],
    inputs: {},
    cartItems: [],
    profiles: false
};

const recipes = [
    {
        id: 1,
        name: "Peanut Butter Cookies",
        image: "src/assets/cookies.jpg",
        introduction: "These classic peanut butter cookies are a crowd favorite and perfect for any occasion.",
        ingredients: [
            "1 cup peanut butter",
            "1 cup granulated sugar",
            "1 egg",
            "1 teaspoon vanilla extract",
            "1/2 teaspoon baking soda",
            "Pinch of salt"
        ],
        instructions: [
            "Preheat the oven to 350°F (175°C) and line a baking sheet with parchment paper.",
            "In a mixing bowl, cream together the peanut butter and sugar until smooth.",
            "Add the egg, vanilla extract, baking soda, and salt, and mix until well combined.",
            "Roll the dough into small balls and place them on the prepared baking sheet.",
            "Use a fork to gently flatten each ball, creating a crisscross pattern.",
            "Bake for 10-12 minutes, or until the edges are lightly golden.",
            "Allow the cookies to cool on the baking sheet for a few minutes before transferring them to a wire rack to cool completely."
        ],
        nutritionalInfo: {
            calories: 120,
            fat: 8,
            protein: 4,
            carbohydrates: 10
        },
        variations: [
            "Add chocolate chips for a twist.",
            "Substitute almond butter for peanut butter for a different flavor profile.",
            "Use coconut sugar or honey instead of granulated sugar for a healthier option."
        ],
        tips: [
            "For extra chewy cookies, slightly under-bake them and allow them to cool on the baking sheet.",
            "Store leftovers in an airtight container at room temperature for up to one week."
        ]
    },
    {
        id: 2,
        name: "Peanut Butter Smoothie",
        image: "src/assets/smoothie.jpg",
        introduction: "This creamy peanut butter smoothie is a delicious and nutritious way to start your day.",
        ingredients: [
            "1 banana, frozen",
            "1/4 cup peanut butter",
            "1 cup almond milk",
            "1 tablespoon honey",
            "1/2 teaspoon cinnamon",
            "Handful of ice cubes"
        ],
        instructions: [
            "Combine all ingredients in a blender.",
            "Blend until smooth and creamy.",
            "Pour into glasses and serve immediately."
        ],
        nutritionalInfo: {
            calories: 280,
            fat: 15,
            protein: 7,
            carbohydrates: 30
        },
        variations: [
            "Add a handful of spinach for extra nutrition.",
            "Use Greek yogurt for added creaminess and protein.",
            "Top with a sprinkle of crushed peanuts for texture."
        ],
        tips: [
            "Adjust the sweetness by adding more or less honey, according to your taste preference.",
            "Feel free to customize with your favorite fruits or add-ins."
        ]
    },
    {
        id: 3,
        name: "Peanut Butter Energy Balls",
        image: "src/assets/energy_balls.jpg",
        introduction: "These peanut butter energy balls are perfect for a quick and healthy snack on the go.",
        ingredients: [
            "1 cup rolled oats",
            "1/2 cup peanut butter",
            "1/4 cup honey",
            "1/4 cup mini chocolate chips",
            "1/4 cup chopped peanuts",
            "1 teaspoon vanilla extract"
        ],
        instructions: [
            "In a mixing bowl, combine all ingredients until well mixed.",
            "Roll the mixture into small balls, about 1 inch in diameter.",
            "Place the balls on a baking sheet lined with parchment paper.",
            "Chill in the refrigerator for at least 30 minutes to firm up.",
            "Store in an airtight container in the refrigerator for up to one week."
        ],
        nutritionalInfo: {
            calories: 120,
            fat: 6,
            protein: 3,
            carbohydrates: 15
        },
        variations: [
            "Swap out the chocolate chips for dried fruit for a different flavor.",
            "Add a scoop of protein powder for extra protein.",
            "Coat the balls in shredded coconut or cocoa powder for added texture."
        ],
        tips: [
            "Feel free to customize with your favorite mix-ins, such as chia seeds, flaxseed, or shredded coconut.",
            "These energy balls are great for pre or post-workout snacks."
        ]
    }
];


const reducer = (state, action) => {
    switch (action.type) {
        case 'products':
            return { ...state, products: action.payload };
        case 'newInputs':
            return { ...state, inputs: action.payload };
        case 'addcart':
            const { productId } = action.payload;
            const productToAdd = state.products.find(item => item.id === productId);

            if (!productToAdd) {
                console.error(`Product with ID ${productId} not found.`);
                return state; // Return current state if product is not found
            }

            const existingItem = state.cartItems.find(item => item.id === productId);

            if (existingItem) {
                // If the item exists in the cart, update its quantity
                const updatedCartItems = state.cartItems.map(item =>
                    item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
                );
                console.log('Updated Cart Items:', updatedCartItems); // Log the updated cart items
                // Emit the cartCountUpdated event here
                EventBus.emit('cartCountUpdated');
                return { ...state, cartItems: updatedCartItems };
            } else {
                // If the item does not exist, add it to the cart with quantity 1
                const updatedCartItems = [...state.cartItems, { ...productToAdd, quantity: 1 }];
                console.log('Updated Cart Items:', updatedCartItems); // Log the updated cart items
                // Emit the cartCountUpdated event here
                EventBus.emit('cartCountUpdated');
                return { ...state, cartItems: updatedCartItems };
            }

        case 'removecart':
            const { itemId } = action.payload;
            return { ...state, cartItems: state.cartItems.filter(item => item.id !== itemId) };
        default:
            throw new Error(`Could not handle the action type: ${action.type}`);
    }
};

// Define the EventBus directly in the DataContext file
const EventBus = {
    events: {},
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    },
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    },
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
};


export const DataProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { width } = useWindowSize();

    useEffect(() => {
        // Retrieve cart items from localStorage
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            dispatch({ type: 'addcart', payload: JSON.parse(storedCartItems) });
        }
    }, []);

    // Save cart items to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    }, [state.cartItems]);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Message sent successfully');
        console.log(state.inputs);
    };

    const handleChange = (event) => {
        dispatch({ type: 'newInputs', payload: event.target.value });
    };

    const handleCart = (productId) => {
        dispatch({ type: 'addcart', payload: { productId } });
        alert('Item added to cart');
        EventBus.emit('cartCountUpdated');
    };

    const handleRemove = (itemId) => {
        dispatch({ type: 'removecart', payload: { itemId } });
        alert('Item removed from Cart');
        EventBus.emit('cartCountUpdated');
    };

    const calculateTotalPrice = () => {
        if (state.cartItems.length === 0) {
            return 0; // If cart is empty, return 0
        }

        const totalPrice = state.cartItems.reduce((total, item) => {
            // Ensure both price and quantity are valid numbers
            const itemPrice = typeof item.title.price === 'number' ? item.title.price : 0;
            const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 0;

            return total + itemPrice * itemQuantity;
        }, 0);

        return totalPrice;
    };

    return (
        <DataContext.Provider
            value={{
                state,
                dispatch,
                handleCart,
                handleSubmit,
                handleChange,
                handleRemove,
                calculateTotalPrice,
                width,
                recipes,
                EventBus
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;