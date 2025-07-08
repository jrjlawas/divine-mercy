import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'swiper/swiper-bundle.css';
import 'slick-carousel/slick/slick.css';
import 'aos/dist/aos.css';
import '@/assets/scss/main.scss';

createRoot(document.getElementById('root')).render(<StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</StrictMode>);