// Copied from https://github.com/OrigenStudio/material-ui-cookie-consent/
// There was a npm package dependency conflict, so I just copied the code.
// Removed typescript usage in it as well.
// Copyright (c) 2019 Origen Studio, MIT License.

// @flow
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Cookies from 'js-cookie';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

var window;
var document;

/**
 * This component is the MUICookieConsent it pops a Snackbar or a Dialog informing the user about cookie consent.
 */
export default class MUICookieConsent extends React.Component/*<Props, State>*/ {
  static defaultProps = {
    componentType: 'Snackbar',
    cookieValue: '',
    acceptOnScroll: false,
    acceptOnScrollPercentage: 25,
    expires: 365,
    hideOnAccept: true,
    debug: false,
    extraCookiesOptions: undefined,
    snackbarAnchor: { horizontal: 'center', vertical: 'bottom' },
    children: null,
    message: 'I love cookies!',
    title: null,
    acceptButtonLabel: 'Accept',
    actions: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    const { cookieName, debug, acceptOnScroll } = this.props;

    if (Cookies.get(cookieName) === undefined || debug) {
      this.setState({ visible: true });
    }

    if (window && acceptOnScroll) {
      window.addEventListener('scroll', this.handleScroll, { passive: true });
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  /**
   * checks whether scroll has exceeded set amount and fire accept if so.
   */
  handleScroll = () => {
    const { acceptOnScrollPercentage } = this.props;
    if (document && typeof acceptOnScrollPercentage === 'number') {
      const rootNode = document.documentElement || document.body;

      if (rootNode) {
        // (top / (height - height)) * 100
        const percentage =
          (rootNode.scrollTop /
            (rootNode.scrollHeight - rootNode.clientHeight)) *
          100;

        if (percentage > acceptOnScrollPercentage) {
          this.handleAccept();
        }
      }
    }
  };

  /**
   * Set a persistent cookie
   */
  handleAccept = () => {
    const {
      cookieName,
      cookieValue,
      expires,
      hideOnAccept,
      onAccept,
      extraCookieOptions,
    } = this.props;

    if (onAccept) {
      onAccept();
    }

    if (window) {
      window.removeEventListener('scroll', this.handleScroll);
    }

    Cookies.set(cookieName, cookieValue, { expires, ...extraCookieOptions });

    if (hideOnAccept) {
      this.setState({ visible: false });
    }
  };

  render() {
    const {
      componentType,
      children,
      message,
      snackbarAnchor,
      title,
      acceptButtonLabel,
      actions,
    } = this.props;

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { onAccept: this.handleAccept }),
    );

    switch (componentType) {
      case 'Snackbar':
        return children ? (
          <Snackbar anchorOrigin={snackbarAnchor} open={this.state.visible}>
            {childrenWithProps}
          </Snackbar>
        ) : (
          <Snackbar
            anchorOrigin={snackbarAnchor}
            open={this.state.visible}
            message={<span id="message-id">{message}</span>}
            action={[
              ...React.Children.toArray(actions),
              <Button
                key="accept"
                color="secondary"
                size="small"
                onClick={this.handleAccept}
              >
                {acceptButtonLabel}
              </Button>,
            ]}
          />
        );
      case 'Dialog':
        return (
          <Dialog open={this.state.visible}>
            {children ? (
              childrenWithProps
            ) : (
              <>
                {title ? <DialogTitle>{title}</DialogTitle> : null}
                <DialogContent>
                  <DialogContentText
                    id="alert-dialog-description"
                    component="div"
                  >
                    {message}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  {actions}
                  <Button onClick={this.handleAccept} color="secondary">
                    {acceptButtonLabel}
                  </Button>
                </DialogActions>
              </>
            )}
          </Dialog>
        );
      default:
        return null;
    }
  }
}
