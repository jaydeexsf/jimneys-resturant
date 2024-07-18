import { Side } from "../components/Side";

const slideImages = [
    {
        id: 1,
        name: 'briyani',
        imageUrl: 'src/assets/images/Chicken-Briyani.jpg',
        className: 'slide',
    },
    {
        id: 2,
        name: 'burger, chips and chicken',
        imageUrl: 'src/assets/images/burger-chips-chicken.jpg',
        className: 'slide',
    }
]

function Slide() {
    return (
        <section className="bg-sky-600 h-[30vh]">
            <div>
                {slideImages.map((tem)=> {
                 <Side key={tem.id} />
                })}
            </div>
        </section>
     /* <div>
        <div className='container w-48 h-40vh'>
            {slideImages.map((slideImage)=> {
                <img className={'slide'} alt={slideImage.name} src={slideImage.imageUrl}></img>
            })}
        </div>    
       {gsap.to('.slide', {duration: 2, x: '100%', backgroundColor: '#560563', borderRadius: "50px", ease: 'bounce'})}
     </div> */
     )
}

export default Slide;