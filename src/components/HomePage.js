import BuyerCard from "./Homepage/BuyerCard"
import SellerCard from "./Homepage/SellerCard"
import Footer from "./Footer"
import Header from "./Header"
import LoginModal from "./LoginModal"

function HomePage(props){

	return (

		<div id="home-page" class="flex md:justify-end flex-col overflow-y-scroll background-page min-h-screen w-screen flex">
			<Header/>
			<LoginModal/>
			<div class="overflow-hidden  flex justify-center h-full">
				<BuyerCard/>
				<SellerCard/>
			</div>
			<Footer/>
		</div>

		)

}

export default HomePage