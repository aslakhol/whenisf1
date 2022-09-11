type YourTimeProps = { goTime: Date };

const YourTime = (props: YourTimeProps) => {
  const { goTime } = props;

  return (
    <span>
      Your time:{" "}
      {goTime.toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "numeric",
      })}
    </span>
  );
};

export default YourTime;
