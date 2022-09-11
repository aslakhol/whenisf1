type CountdownProps = { goTime: Date };

const Countdown = (props: CountdownProps) => {
  const { goTime } = props;

  const now = new Date();

  const diff = goTime.getTime() - now.getTime();

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <span className="break-inside-avoid text-7xl bold pt-4 pb-10 text-center">
      {hours} hours {minutes} minutes
    </span>
  );
};

export default Countdown;
