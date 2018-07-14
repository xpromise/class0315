import {connect} from 'react-redux';

import App from '../components/app/App';
import {add, del, update} from '../redux/actions';

export default connect(
  state => ({commentsList: state}),
  {add, del, update}
)(App)