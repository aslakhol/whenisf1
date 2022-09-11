interface Props {
  goTime: Date;
  utc?: boolean;
}
const RaceDate = (props: Props) => {
  const { goTime, utc } = props;

  return (
    <>
      {goTime.toLocaleDateString("en-GB", {
        timeZone: utc ? "UTC" : undefined,
        day: "numeric",
        month: "short",
        year: "numeric",
      })}
    </>
  );
};

export default RaceDate;
