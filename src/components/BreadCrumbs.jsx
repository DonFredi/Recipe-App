import { useLocation } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const BreadCrumbs = () => {

    const location = useLocation();

    const handleBackButtonClick = () => {
        // Extract the previous path from the location state or fallback to the products page
        const previousPath = location.state?.from || '/products';
        window.location.href = previousPath; // Redirect to the previous path
    };

    return (
        <div onClick={handleBackButtonClick} className="flex justify-center items-center w-10 rounded-full h-6 p-2 text-center hover:bg-blue-600 " ><IoArrowBack /></div>
    )
}

export default BreadCrumbs