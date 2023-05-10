import "./homeVision.scss";

const smaple_vid = './assets/videos/sample_vid_3.mp4';

const HomeVision = () => {
	return (
		<div className='homeVisions_container'>
        <div className='col_1'>
          <video
            src={smaple_vid}
            controls={false}
            autoPlay
            loop
            muted
            width={'60%'}
          ></video>
          <p>
            A Few Months Of Learning <br />{' '}
            <span style={{ color: '#daa520' }}> How To Trade </span> <br /> Can
            Produce A Lifetime Of Freedom
          </p>
        </div>
        <div className='col_2'>
          <h2>Vision</h2>
          <p>
            We aim to popularize the concepts of stock trading and investing to
            enable the youth to benefit from them. Our Premium courses will be
            really helpful to those who want to learn about the stock markets
            and create a passive source of income through it.
          </p>
        </div>
      </div>
	)
}

export default HomeVision