interface Props {
  goTime: Date;
}

const SessionStart = (props: Props) => {
  const { goTime } = props;
  const timeZoneLocalPart =
    Intl.DateTimeFormat().resolvedOptions().timeZone.split("/")[1] ||
    "Your local";

  return (
    <>
      {goTime.toLocaleDateString("en-GB", {
        hour: "numeric",
        minute: "numeric",
        day: "numeric",
        month: "short",
      })}{" "}
      - {timeZoneLocalPart} time
    </>
  );
};

export default SessionStart;
