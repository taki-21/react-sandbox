export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSze: "18px",
  };
  return <p style={contentStyle}>{children}</p>;
};
