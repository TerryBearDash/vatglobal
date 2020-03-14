import { connect } from 'react-redux';
import { Header } from './header.compnent';

const mapStateToProps = state => {
    return {
        count: state
    };
};
const mapDispatchToProps = dispatch => {
    return {
        handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
        handleDecrementClick: () => dispatch({ type: 'DECREMENT' })
    }
};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);