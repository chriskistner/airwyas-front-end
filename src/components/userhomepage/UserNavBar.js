import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router'
import {connect} from 'react-redux';
import {setAuthentication, toggleError} from '../../actions/authentication';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,} from 'reactstrap';

class UserNavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        }
    }

    toggleNav = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    logOut = () => {
        localStorage.removeItem('token');
        this.props.setAuthentication(null);
        this.props.toggleError(false);
        this.props.history.push(`/`)
    }

    render() {
        return (
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">Welcome {this.props.user || 'User'}, Go To..</NavbarBrand>
              <NavbarToggler onClick={this.toggleNav} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/routes/">Routes</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/locations">Locations</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/alerts">Alerts</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/profile">Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={this.logOut} href="#">Logout</NavLink>
                    </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setAuthentication, toggleError},dispatch)
}


export default withRouter(connect(null, mapDispatchToProps)(UserNavBar));