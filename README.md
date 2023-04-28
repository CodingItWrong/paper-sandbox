# Menu Auto-Dismiss Web

Reproduces a bug where a Paper Menu automatically dismisses in desktop web browsers if it is automatically placed partially outside the bounds of the window.

## Setup

```
$ yarn install
$ yarn start --web
```

## Testing

- Open the app in any desktop web browser (tested in Chrome, Safari, and Firefox for Mac)
- Click each menu button
- Expected: the menu displays for all buttons
- Actual: on any web browser for Mac, the left and right menus display, but the right button flashes and is automatically dismissed

Note: the bug does not occur on iOS or Android native, on iOS Safari, or on Android Chrome.
