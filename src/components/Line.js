import data from '../assets/data/data.json';

const Line = ({ search }) => {
  return (
    <div className="line">
      {data
        .filter((elem) => {
          if (search === '') {
            return elem;
          } else if (elem.title.toLowerCase().includes(search.toLowerCase())) {
            return elem;
          } else {
            return console.log('empty');
          }
        })
        .map((elem) => {
          return (
            <p key={elem.keywords}>
              <span>{elem.symbol}</span>
              {elem.title}
            </p>
          );
        })
        .slice(0, 20)}
    </div>
  );
};

export default Line;
