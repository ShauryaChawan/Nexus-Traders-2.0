import "./homeStats.scss";
// const HomeSampleImg_3 = './assets/images/sample_image_3.png';
const SampleImg = './assets/images/sample_image_5.png';

const stats_data = [
	{
		id: 1,
		number: '14+',
		title: 'Number of Batches',
	},
	{
		id: 2,
		number: '200+',
		title: 'Number of Students',
	},
	{
		id: 3,
		number: '500+',
		title: 'Hours of Teaching',
	},
];

const HomeStats = () => {
  return (
    <div className="homeStats_container" style={{backgroundImage: `url(${SampleImg}`}}>
      <div className="top">
        <h2>
          We Take Pride In Our <br />
          Number
        </h2>
      </div>
      <div className="bottom">
        {stats_data.map((item, index) => (
          <div key={index} className="item">
            <h3>{item.number}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeStats;
