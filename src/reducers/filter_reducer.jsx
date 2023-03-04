import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  PAGINATE_PRODUCTS,
  SET_PAGE,
} from "../actions";
import { formatPrice } from "../utils/helpers";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      let prices = action.payload.map((p) => p.price);
      const maxPrice = Math.max(...prices);
      const minPrice = Math.min(...prices);

      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: {
          ...state.filters,
          min_price: minPrice,
          max_price: maxPrice,
          price: maxPrice,
        },
      };
    }
    case SET_GRIDVIEW: {
      return { ...state, grid_view: true, list_view: false };
    }
    case SET_LISTVIEW: {
      return { ...state, list_view: true, grid_view: false };
    }
    case UPDATE_SORT: {
      return { ...state, sort: action.payload };
    }
    case SORT_PRODUCTS: {
      const { sort, filtered_products } = state;
      let newProducts = [...filtered_products];
      if (sort === "lowest") {
        newProducts = state.filtered_products.sort((a, b) => a.price - b.price);
      }
      if (sort === "highest") {
        newProducts = state.filtered_products.sort((a, b) => b.price - a.price);
      }
      if (sort === "a-z") {
        newProducts = state.filtered_products.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (sort === "z-a") {
        newProducts = state.filtered_products.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      return { ...state, filtered_products: newProducts,currPage:0 };
    }
    case UPDATE_FILTERS: {
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    }
    case FILTER_PRODUCTS: {
      const { all_products } = state;
      const { text, category, company, color, price, shipping } = state.filters;
      let newProducts = [...all_products];
      if (text) {
        newProducts = newProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(text);
        });
      }
      if (category !== "all") {
        newProducts = newProducts.filter(
          (product) => product.category === category
        );
      }
      if (company !== "all") {
        newProducts = newProducts.filter(
          (product) => product.company === company
        );
      }
      if (color !== "all") {
        newProducts = newProducts.filter((product) =>
          product.colors.includes(color)
        );
      }
      newProducts = newProducts.filter((product) => product.price <= price);
      if (shipping) {
        newProducts = newProducts.filter((product) => product.shipping);
      }
      return { ...state, filtered_products: newProducts };
    }
    case CLEAR_FILTERS: {
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          color: "all",
          price: state.filters.max_price,
          shipping: false,
        },
      };
    }
    case PAGINATE_PRODUCTS: {
      return { ...state, paginated: action.payload };
    }
    case SET_PAGE: {
      return { ...state, currPage: action.payload };
    }
  }
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
