import {connect} from "react-redux";

import List from '../components/list/List';

export default connect(
  state => ({
    firstView: state.firstView,
    loading: state.loading,
    users: state.users,
    error: state.error
  }),
  {}
)(List);