import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
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
      return { ...state, filtered_products: newProducts };
    }
    case UPDATE_FILTERS: {
      const { name, value } = action.payload;
      console.log(name, value)
      return { ...state, filters: { ...state.filters, [name]: value } };
    }
    case FILTER_PRODUCTS: {
      return { ...state };
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
  }
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
