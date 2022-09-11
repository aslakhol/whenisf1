type RaceTimeProps = { goTime: Date; when: string };

const RaceTime = (props: RaceTimeProps) => {
  const { goTime, when } = props;

  return (
    <>
      {when}:{" "}
      {goTime.toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "numeric",
      })}
    </>
  );
};

export default RaceTime;
