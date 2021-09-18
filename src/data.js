import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export const links = [
	{
		id: 1,
		url: "/",
		text: "home",
	},
	{
		id: 2,
		url: "/about",
		text: "about",
	},
	{
		id: 3,
		url: "/contact",
		text: "contact",
	},
	{
		id: 4,
		url: "/login",
		text: "Log in",
	},
	{
		id: 5,
		url: "/signup",
		text: "Sign up",
	}
];

export const social = [
	{
		id: 1,
		url: "https://www.facebook.com/",
		icon: <FaFacebook />,
	},
	{
		id: 2,
		url: "https://www.twitter.com/l33th_dev",
		icon: <FaTwitter />,
	},
	{
		id: 3,
		url: "https://www.linkedin.com",
		icon: <FaLinkedin />,
	},
];

const menu = [
	{
		id: 1,
		title: "Crispy Hash Brown Haystacks",
		category: "breakfast",
		price: 15.99,
		img: "./images/item-1.jpeg",
		desc: `7-ingredient crispy hash brown haystacks with corn and fresh parsley. Crunchy on the outside, slightly tender on the inside, and perfect alongside breakfast items, like tofu scrambles! `,
	},
	{
		id: 2,
		title: "Asparagus Tofu Stir-Fry",
		category: "lunch",
		price: 13.99,
		img: "./images/item-2.jpeg",
		desc: `With its flavorful ginger sauce and fresh vegetables, this tasty dish is a favorite `,
	},
	{
		id: 3,
		title: "Chocolate Hemp Smoothie",
		category: "shakes",
		price: 6.99,
		img: "./images/item-3.jpeg",
		desc: `Hemp is a complete protein which means it has all nine essential amino acids. It makes a great post-workout protein shake because of its nutritional value. This recipe is widely loved.`,
	},
	{
		id: 4,
		title: "Dark Chocolate Quinoa Breakfast Bowl",
		category: "breakfast",
		price: 20.99,
		img: "./images/item-4.jpeg",
		desc: `Simple, 7-ingredient dark chocolate quinoa breakfast bowl naturally sweetened with maple syrup and infused with rich cocoa powder! A healthy, hearty plant-based breakfast or snack. `,
	},
	{
		id: 5,
		title: "Chickpea Mint Tabbouleh",
		category: "lunch",
		price: 22.99,
		img: "./images/item-5.jpeg",
		desc: `You’ll love this salad warm or chilled. For variety, add feta cheese or use this as a filling for stuffed tomatoes or mushrooms. `,
	},
	{
		id: 6,
		title: "Coffee Lovers Protein Shake",
		category: "shakes",
		price: 18.99,
		img: "./images/item-6.jpeg",
		desc: ` This recipe includes coffee as one of its main ingredients. It’s high protein and low sugar which makes it a great vegan option for an athlete.`,
	},
	{
		id: 7,
		title: "5-Minute Raw-Nola",
		category: "breakfast",
		price: 8.99,
		img: "./images/item-7.jpeg",
		desc: `An easy-to-make, 1-bowl, 5-minute raw version of granola with dates for natural sweetness, nuts for crunch and protein, and plenty of seeds for healthy fats! `,
	},
	{
		id: 8,
		title: "Vegan Pasta Salad",
		category: "lunch",
		price: 12.99,
		img: "./images/item-8.jpeg",
		desc: `It’s packed with veggies and tossed in a homemade balsamic vinaigrette. You will absolutely love this dish.  `,
	},
	{
		id: 9,
		title: "Chocolate Peanut Butter Protein Smoothie",
		category: "shakes",
		price: 14.99,
		img: "./images/item-9.jpeg",
		desc: `Chocolate Peanut Butter Protein Smoothie Peanut butter and chocolate are a dream power combo in a recipe, especially in protein smoothie recipes. This recipe is great for post-workout recovery or if you simply want to treat yourself.`,
	},
	{
		id: 10,
		title: "Birthday Cake Vegan Protein Shake",
		category: "shakes",
		price: 11.99,
		img: "./images/item-10.jpeg",
		desc: `Baked goods are hard to give up when going vegan, but a protein shake like this makes it a lot easier.This protein shake is definitely more like a dessert but is still pretty healthy for you.`,
	},
	{
		id: 11,
		title: "Broccoli Spoon Salad With Warm Vinaigrette",
		category: "dinner",
		price: 21.99,
		img: "./images/item-11.jpeg",
		desc: `This dish is crisp, with raw broccoli, it is chewy with sticky dates and crunchy toasted pistachios. A spice blend featuring aromatic and warm spices, adds a smoky depth to the bright citrusy dressing, this soaks into the broccoli as it sits. Delicious to the max.`,
	},
	{
		id: 12,
		title: "Pantry Pasta With Vegan Cream Sauce",
		category: "dinner",
		price: 24.99,
		img: "./images/item-12.jpeg",
		desc: `This sauce is made of beans and pasta water alone—no soaking or blending necessary. This delicious dish will have you craving for more.`,
	},
	{
		id: 13,
		title: "Soy-Glazed Tofu and Mushrooms",
		category: "dinner",
		price: 26.99,
		img: "./images/item-13.jpeg",
		desc: `This delicious dish can be made with Crimini and white button but those can never get as crispy as oyster or maitakes.`,
	},
	{
		id: 14,
		title: "Creamy-ish of Mushroom Soup",
		category: "dinner",
		price: 29.99,
		img: "./images/item-14.jpeg",
		desc: `This creamy, earthy, silky rich soup is vegan. Puréeing some of the mushrooms along with cashews adds body that doesn’t compromise on flavor.`,
	},
	{
		id: 15,
		title: "Bean and Grain Stew with Garlic and Chiles",
		category: "dinner",
		price: 12.99,
		img: "./images/item-15.jpeg",
		desc: `This is a dish to remember. You will demolish this dish without even once suspecting that it was vegan, that is how delicious this stunning dish is.`,
	},
];

export default menu;
