import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";
import CheckOut from "./routes/checkout/CheckOut";
import { useEffect } from "react";
import {
	createUserDocumentFromAuth,
	getCategoriesAndDocuments,
	getCurrentUser,
	onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { checkUserSession, setCurrentUser } from "./store/user/user.action";
import { setCategories } from "./store/categories/category.action";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		// const unsubscribe = onAuthStateChangedListener((user) => {
		// 	if (user) {
		// 		createUserDocumentFromAuth(user);
		// 	}
		// 	dispatch(setCurrentUser(user));
		// });
		// return unsubscribe;
		dispatch(checkUserSession());
	}, [dispatch]);
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesArray = await getCategoriesAndDocuments(
				"categories"
			);

			dispatch(setCategories(categoriesArray));
		};
		getCategoriesMap();
	}, [dispatch]);

	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop/*" element={<Shop />} />
				<Route path="authentication" element={<Authentication />} />
				<Route path="checkout" element={<CheckOut />} />
			</Route>
		</Routes>
	);
}

export default App;
