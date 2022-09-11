type YourTimeProps = { goTime: Date };

const YourTime = (props: YourTimeProps) => {
  const { goTime } = props;

  return (
    <span className="p-4 bg-brand-secondary rounded w-40 text-center">
      Your time:{" "}
      {goTime.toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "numeric",
      })}
    </span>
  );
};

export default YourTime;
