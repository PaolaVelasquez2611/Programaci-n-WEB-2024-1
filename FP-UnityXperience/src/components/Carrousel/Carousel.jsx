import { ProjectCard} from "../../components"
import { carouselData ,carouselData2,carouselData3} from "../../data/carouselData";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export const CarouselComponent = () => (
  <div>
    <Carousel centerMode centerSlidePercentage="1" autoPlay>
    <div >
    {carouselData.map(({ id, thumbnail, title, review, tags }) => (
            <li key={id}>
              <ProjectCard
                img={thumbnail}
                title={title}
                description={review}
                tags={tags}
              />
            </li>
          ))}
    </div>
    <div>
    {carouselData2.map(({ id, thumbnail, title, review, tags }) => (
            <li key={id}>
              <ProjectCard
                img={thumbnail}
                title={title}
                description={review}
                tags={tags}
              />
            </li>
          ))}
    </div>
    <div>
    {carouselData3.map(({ id, thumbnail, title, review, tags }) => (
            <li key={id}>
              <ProjectCard
                img={thumbnail}
                title={title}
                description={review}
                tags={tags}
              />
            </li>
          ))}
     
    </div>
    </Carousel>
    </div>
);
