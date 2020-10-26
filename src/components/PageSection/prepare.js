import { fetchPageSection } from "../../redux/pagesectionReducer";

export const mapStateToProps = (state) => ({
  loading: state.pagesection.loading,
  selectedPage: state.pagesection.selectedPage,
  onclick: fetchPageSection,
});
