import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Header);
