import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import Navbar from "./Navbar";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {

	const [menuItems, setMenuItems] = useState(items);
	const [categories] = useState(allCategories);

	const filterItems = (category) => {
		if (category === "all") {
			setMenuItems(items);
			return;
		}
		const newItems = items.filter((item) => item.category === category);
		setMenuItems(newItems);
	};

	return (
		<section className='menu section'>
				<Navbar /> <br />
			<div className='title'>
				<div className='underline'></div>
				<h5 className='wm'>by WMouton</h5>
			</div>
			<div>
			</div>
			<Categories categories={categories} filterItems={filterItems} />
			<Menu items={menuItems} />
		</section>
	);
}

export default App;
