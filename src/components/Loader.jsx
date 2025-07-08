import preloaderImg from '@/assets/img/preloader/vl-preloader-1.1.png';
const Loader = () => {
  return <div className="preloader">
      <div className="loading-container">
        <div className="loading" />
        <div id="loading-icon"><img src={preloaderImg} alt='preloaderImg' /></div>
      </div>
    </div>;
};
export default Loader;