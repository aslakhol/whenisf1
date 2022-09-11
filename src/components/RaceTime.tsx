type RaceTimeProps = { goTime: Date; utc?: boolean };

const RaceTime = (props: RaceTimeProps) => {
  const { goTime, utc } = props;

  return (
    <>
      {goTime.toLocaleString("en-GB", {
        timeZone: utc ? "UTC" : undefined,
        hour: "numeric",
        minute: "numeric",
      })}
    </>
  );
};

export default RaceTime;
