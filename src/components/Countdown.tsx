type CountdownProps = { goTime: Date };

const Countdown = (props: CountdownProps) => {
  const { goTime } = props;

  const now = new Date();

  const diff = goTime.getTime() - now.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (diff < 0) {
    return <>Session has started</>;
  }

  if (days > 1) {
    return (
      <>
        {days} day{days === 1 ? "" : "s"}
      </>
    );
  }

  if (hours > 1) {
    return (
      <>
        {hours} hour{hours === 1 ? "" : "s"} {minutes} minute
        {minutes === 1 ? "" : "s"}
      </>
    );
  }

  return (
    <>
      {minutes}:{seconds}
    </>
  );
};

export default Countdown;
