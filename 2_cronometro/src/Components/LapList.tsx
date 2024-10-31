type LapsListProps = {
  laps: string[];
};

const LapList = ({ laps }: LapsListProps) => {
  return (
    <div className="timer-laps">
      <h3>Voltas: </h3>
      <ul>
        {laps.map((lap, index) => (
          <ul key={index}>
            Volar {index + 1}: {lap}{' '}
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default LapList;
