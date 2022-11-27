import Flag from "./flag";

function MakeList({ teams, dragStart }) {
  return (
    <>
      {teams?.map((team, index) => {
        return (
          <div key={index}>
            <Flag team={team} dragStart={dragStart} />
          </div>
        );
      })}
    </>
  );
}

export default MakeList;
