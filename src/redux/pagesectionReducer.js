import { client } from "../index";
import { matchProjectToPage } from "../sanityConfig";

const initialState = {
  loading: false,
  selectedPage: {
    page: "none",
    data: {},
    error: {},
  },
};

const query = (page) => `*[_type == '${matchProjectToPage[page]}']{
    ...,
    "imageUrl": mainImage.asset->url
  }`;

export const fetchPageSection = (page) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_PAGESECTION_BEGIN", page: page });
    return client
      .fetch(query(page))
      .then((data) => {
        dispatch({ type: "FETCH_PAGESECTION_SUCCESS", data: data });
      })
      .catch((e) => {
        dispatch({ type: "FETCH_PAGESECTION_FAILURE", error: e });
      });
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PAGESECTION_BEGIN":
      return {
        ...state,
        loading: true,
        selectedPage: {
          page: action.page,
          data: undefined,
        },
      };
    case "FETCH_PAGESECTION_SUCCESS":
      return {
        ...state,
        loading: false,
        selectedPage: { ...state.selectedPage, data: action.data },
      };
    case "FETCH_PAGESECTION_FAILURE":
      return {
        ...state,
        loading: false,
        selectedPagesection: { ...state.selectedPage, error: action.error },
      };
    case "CLEAR_PAGESECTION":
      return {
        ...state,
        selectedPage: { page: undefined, data: undefined, error: undefined },
      };
    default:
      return { ...state };
  }
};

export default reducer;
