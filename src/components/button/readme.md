# Button (sk-button)

sk-button is a user interface button that allows you to conduct particular activities dependent on the button type. The label for the button might be text, an icon, or both.

## Usage

#### Buttons

```html live
<section>
  <sk-button type="submit">Primary</sk-button>
  <sk-button type="submit" color="secondary">Secondary</sk-button>
  <sk-button type="submit" color="success">Success</sk-button>
  <sk-button type="submit" color="danger">Danger</sk-button>
  <sk-button type="submit" color="warning">Warning</sk-button>
  <sk-button type="submit" color="info">Info</sk-button>
  <sk-button type="submit" color="light">Light</sk-button>
  <sk-button type="submit" color="dark">Dark</sk-button>
  <sk-button type="submit" color="blackcurrant">Blackcurrant</sk-button>
</section>
```

#### Outline Buttons

```html live
<section>
  <sk-button type="submit" color="outline-primary">Outline Primary</sk-button>
  <sk-button type="submit" color="outline-secondary">Outline Secondary</sk-button>
  <sk-button type="submit" color="outline-success">Outline Success</sk-button>
  <sk-button type="submit" color="outline-danger">Outline Danger</sk-button>
  <sk-button type="submit" color="outline-warning">Outline Warning</sk-button>
  <sk-button type="submit" color="outline-info">Outline Info</sk-button>
  <sk-button type="submit" color="outline-light">Outline Light</sk-button>
  <sk-button type="submit" color="outline-dark">Outline Dark</sk-button>
  <sk-button type="submit" color="outline-blackcurrant">Outline Blackcurrant</sk-button>
</section>
```

#### Properties

```html live
<section>
  <sk-button type="submit" disabled="true" color="outline-primary">Disabled</sk-button>
  <sk-button type="submit" size="nano">Nano Button</sk-button>
  <sk-button type="submit" size="medium" color="danger">Medium Button</sk-button>
  <sk-button type="submit" size="large" color="outline-warning">Large Button</sk-button>
  <sk-button type="submit" color="success" expand>Expand Button</sk-button>
  <sk-button type="submit" color="blackcurrant" onClick="alert('Button Clicked')">Perform Event</sk-button>
</section>
```

## Properties

| Property   | Attribute        | Description                                                                                                              | Type                                                                                                                                                                                     | Default     |
| ---------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---- | --- |
| `color`    | `color`          | Theme identifier based on which the button is styled.                                                                    | `"primary" or "secondary" or "success" or "danger" or "warning" or "info" or "light" or "dark" or "blackcurrant`                                                                         | `'primary'` |
| `outline`  | `color`          | Theme identifier based on which the button is styled.                                                                    | `"outline-primary" or "outline-secondary" or "outline-success" or "outline-danger" or "outline-warning" or "outline-info" or "outline-light" or "outline-dark" or "outline-blackcurrant` | `primary`   |
| `disabled` | `disabled`       | The button on the interface is disabled. If the value of the attribute is undefined, the value is set to false.          | `boolean`                                                                                                                                                                                | `false`     |
| `expand`   | `expand`         | This command makes the button a full-width block. If the value of the attribute is undefined, the value is set to false. | `boolean`                                                                                                                                                                                | `false`     |
| <!--       | `modalTriggerId` | `modal-trigger-id`                                                                                                       | Accepts the id of the sk-modal component to open it on click                                                                                                                             | `string`    | `''` | --> |
| `size`     | `size`           | Size of the button.                                                                                                      | `"nano" or "small" or "medium" or "large`                                                                                                                                                | `'small'`   |
| `type`     | `type`           | Button type based on which actions are performed when the button is clicked.                                             | `"button" or "reset" or "submit"`                                                                                                                                                        | `'button'`  |

## Events

| Event     | Description                                 | Type                |
| --------- | ------------------------------------------- | ------------------- |
| `skClick` | Triggered when the button is clicked.       | `CustomEvent<void>` |
| `skFocus` | Triggered when the button comes into focus. | `CustomEvent<void>` |
| `skBlur`  | Triggered when the button loses focus.      | `CustomEvent<void>` |

---
