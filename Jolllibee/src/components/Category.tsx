import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import axios from "axios";
import { useState, useEffect } from "react";
import * as Jollibee from "../Global";


interface Category {
  id: string;
  default_name: string;
  img_name: string;
}

interface CategoryDetails {
  categoryID: string;
  categoryName: string;
}

interface TestProps {
  categoryDetails: CategoryDetails;
  setCategoryDetails: React.Dispatch<React.SetStateAction<CategoryDetails>>;
}

function Category({ categoryDetails, setCategoryDetails }: TestProps) {
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  const handleCategoryChange = (newCategoryID: string, newCategoryName: string) => {
    categoryDetails.categoryID===newCategoryID ? 
    setCategoryDetails({
        categoryID: "0",
        categoryName: "Best Seller",
    }) :
    setCategoryDetails({
        categoryID: newCategoryID,
        categoryName: newCategoryName,
    });
  };

  useEffect(() => {
    axios
      .get(Jollibee.serverURL + "/category_list")
      .then((response) => {
        setCategoryList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-2">
      {/* <h5 className="text-center mt-1 mb-0">Menu</h5> */}
      <Swiper
        spaceBetween={10}
        pagination={false}
        modules={[Pagination]}
        className="mySwiper mt-3"
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 7,
          },
          900: {
            slidesPerView: 10,
          },
        }}
      >
        {categoryList.map((category, index) =>
           
            <SwiperSlide key={index} style={category.id === categoryDetails.categoryID ? { backgroundColor: '#da001c'} : {}}>
              <div>
                <a
                  onClick={() => handleCategoryChange(category.id, category.default_name)}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img
                    src={`${Jollibee.serverURL}/category_img/${category.img_name}`}
                    alt={category.default_name}
                  />
                  <p style={category.id === categoryDetails.categoryID ? {color: "white" } : {}}>{category.default_name}</p>
                </a>
              </div>
            </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}

export default Category;
