import React from 'react';
import Sidebar from 'react-sidebar';
import MainView from './MainView';
import SidebarView from './SidebarView';

const mql = window.matchMedia(`(min-width: 800px)`);

export default class Focalpoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Sidebar will only be docked when window is wider than 800px
      sidebarDocked: mql.matches,
      // Sidebar is hidden by default
      sidebarOpen: false,
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
  }

  componentDidMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  render() {
    return (
      <Sidebar
        sidebar={<SidebarView page={this.props.match.params.page} />}
        docked={this.state.sidebarDocked}
        open={this.state.sidebarOpen}
        transitions={true}
        onSetOpen={this.onSetSidebarOpen}
      >
        <MainView page={this.props.match.params.page} />
      </Sidebar>
    );
  }
}
