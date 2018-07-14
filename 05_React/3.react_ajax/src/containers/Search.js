import {connect} from "react-redux";

import {search} from "../redux/actions";
import Search from '../components/search/Search';

export default connect(
  state => ({}),
  {search}
)(Search);