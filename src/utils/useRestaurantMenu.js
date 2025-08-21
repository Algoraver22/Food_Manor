import { useEffect, useState } from "react";
const useRestaurantMenu=(resId)=>{
     const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        // Mock restaurant menu data
        const mockMenuData = {
            cards: [
                {
                    card: {
                        card: {
                            info: {
                                name: "Sample Restaurant",
                                cuisines: ["Indian", "Chinese"],
                                costForTwoMessage: "₹300 for two",
                                avgRating: 4.2
                            }
                        }
                    }
                },
                {
                    groupedCard: {
                        cardGroupMap: {
                            REGULAR: {
                                cards: [
                                    {
                                        card: {
                                            card: {
                                                title: "Recommended",
                                                itemCards: [
                                                    {
                                                        card: {
                                                            info: {
                                                                id: "1",
                                                                name: "Butter Chicken",
                                                                price: 25000,
                                                                description: "Delicious butter chicken",
                                                                imageId: "sample_image"
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    }
                }
            ]
        };
        setResInfo(mockMenuData);
    }
   

    return resInfo;
}
export default useRestaurantMenu;