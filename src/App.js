import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";
import CheckOut from "./routes/checkout/CheckOut";




function App() {
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
