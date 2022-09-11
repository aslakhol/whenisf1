type CountdownProps = { goTime: Date };

const Countdown = (props: CountdownProps) => {
  const { goTime } = props;

  const now = new Date();

  const diff = goTime.getTime() - now.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (days > 1) {
    return (
      <span className="break-inside-avoid text-7xl bold py-5 text-center">
        {days} day{days === 1 ? "" : "s"}
      </span>
    );
  }

  if (hours > 1) {
    return (
      <span className="break-inside-avoid text-7xl bold py-5 text-center">
        {hours} hour{hours === 1 ? "" : "s"} {minutes} minute
        {minutes === 1 ? "" : "s"}
      </span>
    );
  }

  return (
    <span className="break-inside-avoid text-7xl bold py-5 text-center">
      {minutes}:{seconds}
    </span>
  );
};

export default Countdown;
