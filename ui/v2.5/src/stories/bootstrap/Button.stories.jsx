import Button from "react-bootstrap/Button";

const meta = {
  component: Button,
  argTypes: {
    label: "Button",
    variant: {
      options: ["primary", "secondary", "warning", "danger", "success"],
      control: { type: "radio" },
    },
    outline: {
      control: { type: "boolean" },
    },
    size: {
      options: ["lg", "sm"],
      control: { type: "radio" },
    },
  },
  render: ({ button, ...args }) => {
    const variant = args.outline ? `outline-${args.variant}` : args.variant;
    return (
      <Button size={args.size} variant={variant}>
        {args.label}
      </Button>
    );
  },
};

export default meta;

export const Default = {
  args: {
    label: "label",
    variant: "primary",
    outline: false,
    size: "lg",
  },
};
