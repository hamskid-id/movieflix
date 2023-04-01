import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
type CardProp={
    data:[]
}

export const TrailerCard=({
    data
}:CardProp)=>{
    const settings = {
        arrows: false,
        infinite: true,
        className: "center",
        beforeChange:()=>{

        },
        centerPadding: "60px",
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode:false,
              }
            }
            ]
      };
    return(
        <div 
            className="w-100 pd-2x"
        >
            <Slider {...settings}>
                {
                    data?.map((item,index)=>{
                        const{
                            key,
                            name
                        }=item;
                        return(
                            <div  key={index}
                                className="p-2"
                            >
                                <iframe
                                    // width="410"
                                    height="250"
                                    src={`https://www.youtube.com/embed/${key}?&theme=darkcolor=white&rel=0`}
                                    allowFullScreen={true}
                                    title={`${name}`}
                                    loading="lazy"
                                    className="br-10 w-100"
                                ></iframe>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}